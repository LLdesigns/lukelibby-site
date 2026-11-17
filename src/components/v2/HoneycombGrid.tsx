import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v2PhotoTiles, type HoneycombItem } from '../../data/v2/honeycomb'
import { startHoneycombLaunch } from '../../data/v2/honeycombLaunch'
import { getV2Project } from '../../data/v2/projects'
import { withBasePath } from '../../utils/basePath'
import { Honeycomb } from './Honeycomb'
import { PhotoViewer } from './PhotoViewer'

type HoneycombGridProps = {
  items: HoneycombItem[]
  columns?: number
  label?: string
}

function columnCount(preferred: number) {
  if (typeof window === 'undefined') return preferred
  if (window.matchMedia('(max-width: 720px)').matches) return Math.min(2, preferred)
  if (window.matchMedia('(max-width: 1100px)').matches) return Math.min(3, preferred)
  return preferred
}

function takePhoto(index: number): HoneycombItem | null {
  const photo = v2PhotoTiles[index]
  return photo ?? null
}

function shapeTile(index: number): HoneycombItem {
  return { kind: 'shape', id: `shape-${index}` }
}

function readShift(board: HTMLElement) {
  return Number.parseFloat(board.style.getPropertyValue('--shift')) || 0
}

function panLimit(board: HTMLElement, view: HTMLElement, shift = readShift(board)) {
  const frame = view.getBoundingClientRect()
  const cells = [...board.querySelectorAll<HTMLElement>('.v2-honeycomb__row > div:not(.v2-honeycomb__item--shape)')]
  if (!cells.length) return Math.max(0, (board.offsetWidth - view.clientWidth) / 2)
  let min = Infinity
  let max = -Infinity
  for (const cell of cells) {
    const box = cell.getBoundingClientRect()
    min = Math.min(min, box.left)
    max = Math.max(max, box.right)
  }
  const leftOverflow = Math.max(0, frame.left - (min - shift))
  const rightOverflow = Math.max(0, max - shift - frame.right)
  return Math.max(leftOverflow, rightOverflow) + 4
}

function bandLayout(columns: number) {
  if (columns >= 5) return { projectCols: 3, shapes: true }
  if (columns >= 3) return { projectCols: 2, shapes: true }
  // Narrow: two projects stay centered, and the photographs overflow the sides.
  return { projectCols: 2, shapes: false }
}

function cellCount(columns: number) {
  const { projectCols, shapes } = bandLayout(columns)
  return projectCols + 2 + (shapes ? 2 : 0)
}

/** Projects stay in a centered band. Photos fill edges (and short last-row gaps). Outlines stay on the outside only. */
function composeRows(items: HoneycombItem[], columns: number) {
  const sequence = items.filter((item) => item.kind === 'project')
  const { projectCols, shapes } = bandLayout(columns)
  const rows: HoneycombItem[][] = []
  let photoIndex = 0
  let shapeIndex = 0

  const nextPhotoOrShape = () => takePhoto(photoIndex++) ?? shapeTile(shapeIndex++)

  for (let index = 0; index < sequence.length; index += projectCols) {
    const band: HoneycombItem[] = sequence.slice(index, index + projectCols)
    // Short last rows used to pad with blank shapes between projects and edge photos.
    // Prefer a photograph there so blanks only appear on the outer silhouette.
    while (band.length < projectCols) band.push(nextPhotoOrShape())
    const side = () => (shapes ? [shapeTile(shapeIndex++)] : [])
    const edge = () => nextPhotoOrShape()
    rows.push([...side(), edge(), ...band, edge(), ...side()])
  }

  return rows
}

function coverScale(rect: DOMRect) {
  const width = Math.max(rect.width, 48)
  const height = Math.max(rect.height, 48)
  const centerX = rect.left + width / 2
  const centerY = rect.top + height / 2
  const reachX = Math.max(centerX, window.innerWidth - centerX)
  const reachY = Math.max(centerY, window.innerHeight - centerY)
  const scale = Math.max(reachX / (width / 2), reachY / (height / 2)) * 1.35
  return Math.min(Math.max(scale, 1.2), 28)
}

/** Lays honeycomb tiles in offset rows and runs the project or photo action. */
export function HoneycombGrid({ items, columns = 5, label = 'Work' }: HoneycombGridProps) {
  const navigate = useNavigate()
  const frameRef = useRef<HTMLDivElement>(null)
  const clusterRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(() => columnCount(columns))
  const [photoId, setPhotoId] = useState<string | null>(null)
  const openerRef = useRef<HTMLButtonElement | null>(null)
  const swipeRef = useRef(false)

  useEffect(() => {
    const narrow = window.matchMedia('(max-width: 720px)')
    const medium = window.matchMedia('(max-width: 1100px)')
    const apply = () => setCount(columnCount(columns))
    apply()
    narrow.addEventListener('change', apply)
    medium.addEventListener('change', apply)
    return () => {
      narrow.removeEventListener('change', apply)
      medium.removeEventListener('change', apply)
    }
  }, [columns])

  useEffect(() => {
    const frame = frameRef.current
    const cluster = clusterRef.current
    if (!frame || !cluster) return

    // Photo viewer keeps the pointer in a corner; freeze and recenter until it closes.
    if (photoId) {
      cluster.classList.remove('is-tracking')
      cluster.style.setProperty('--shift', '0px')
      return
    }

    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    cluster.classList.add('is-tracking')

    let target = 0
    let current = 0
    cluster.style.setProperty('--shift', '0px')
    let limit = panLimit(cluster, frame, current)
    let raf = 0
    let last = 0
    let homing = false
    let homeFrom = 0
    let homeStart = 0
    const follow = 240
    const homeMs = 760

    function measure() {
      const board = clusterRef.current
      const view = frameRef.current
      if (!board || !view) return
      limit = panLimit(board, view, current)
      // Keep the band centered when the viewport grows or shrinks.
      target = Math.min(limit, Math.max(-limit, target))
      current = Math.min(limit, Math.max(-limit, current))
      if (Math.abs(current) > limit || Math.abs(target) > 0) {
        if (limit < 8) {
          target = 0
          current = 0
          homing = false
        }
        board.style.setProperty('--shift', `${current.toFixed(2)}px`)
      }
    }

    function tick(now: number) {
      const board = clusterRef.current
      if (!board) {
        raf = 0
        return
      }

      if (homing) {
        const t = Math.min(1, (now - homeStart) / homeMs)
        const eased = 1 - (1 - t) ** 3
        current = homeFrom * (1 - eased)
        if (t >= 1) {
          current = 0
          homing = false
        }
      } else {
        const dt = last ? Math.min(48, now - last) : 16
        last = now
        current += (target - current) * (1 - Math.exp(-dt / follow))
        if (Math.abs(target - current) < 0.25) current = target
      }

      board.style.setProperty('--shift', `${current.toFixed(2)}px`)
      if (homing || current !== target) {
        raf = requestAnimationFrame(tick)
        return
      }
      raf = 0
      last = 0
    }

    function wake() {
      if (raf) return
      last = 0
      raf = requestAnimationFrame(tick)
    }

    function reveal(event: PointerEvent) {
      if (event.pointerType === 'touch' || event.pointerType === 'pen') return
      const board = clusterRef.current
      const view = frameRef.current
      if (!board || !view) return
      const outside =
        event.clientX < 0 ||
        event.clientY < 0 ||
        event.clientX > window.innerWidth ||
        event.clientY > window.innerHeight
      if (outside) {
        recenter()
        return
      }
      homing = false
      const centered = event.clientX / window.innerWidth - 0.5
      target = -centered * 2 * limit
      wake()
    }

    function recenter() {
      if (homing || (Math.abs(current) < 0.25 && Math.abs(target) < 0.25)) return
      target = 0
      homing = true
      homeFrom = current
      homeStart = performance.now()
      wake()
    }

    function onPointerOut(event: PointerEvent) {
      if (event.pointerType === 'touch' || event.pointerType === 'pen') return
      if (event.relatedTarget) return
      recenter()
    }

    const observer = new ResizeObserver(measure)
    observer.observe(frame)
    observer.observe(cluster)
    window.addEventListener('pointermove', reveal)
    document.addEventListener('pointerout', onPointerOut)
    document.documentElement.addEventListener('mouseleave', recenter)
    window.addEventListener('blur', recenter)
    return () => {
      cluster.classList.remove('is-tracking')
      if (raf) cancelAnimationFrame(raf)
      observer.disconnect()
      window.removeEventListener('pointermove', reveal)
      document.removeEventListener('pointerout', onPointerOut)
      document.documentElement.removeEventListener('mouseleave', recenter)
      window.removeEventListener('blur', recenter)
    }
  }, [count, items, photoId])

  useEffect(() => {
    const frame = frameRef.current
    const cluster = clusterRef.current
    if (!frame || !cluster) return
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (fine || reduced) return

    let startX = 0
    let startShift = 0
    let active = false
    let dragged = false

    function touchLimit() {
      const board = clusterRef.current
      const view = frameRef.current
      if (!board || !view) return 0
      return panLimit(board, view)
    }

    function onDown(event: PointerEvent) {
      if (event.pointerType === 'mouse') return
      active = true
      dragged = false
      startX = event.clientX
      const raw = clusterRef.current?.style.getPropertyValue('--shift') ?? '0'
      startShift = Number.parseFloat(raw) || 0
      clusterRef.current?.classList.add('is-dragging')
    }

    function onMove(event: PointerEvent) {
      if (!active || event.pointerType === 'mouse') return
      const dx = event.clientX - startX
      if (Math.abs(dx) < 8) return
      dragged = true
      const max = touchLimit()
      const next = Math.min(max, Math.max(-max, startShift + dx))
      clusterRef.current?.style.setProperty('--shift', `${next}px`)
    }

    function onUp(event: PointerEvent) {
      if (!active || event.pointerType === 'mouse') return
      active = false
      clusterRef.current?.classList.remove('is-dragging')
      if (!dragged) return
      swipeRef.current = true
      window.setTimeout(() => {
        swipeRef.current = false
      }, 350)
    }

    frame.addEventListener('pointerdown', onDown)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointercancel', onUp)
    return () => {
      frame.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
    }
  }, [count, items])

  const rows = composeRows(items, count)
  const photo = rows.flat().find((item) => item.kind === 'photo' && item.id === photoId)
  const nested = count > 1

  function activate(item: HoneycombItem, origin: HTMLButtonElement) {
    if (swipeRef.current) return
    openerRef.current = origin
    if (item.kind === 'photo') {
      setPhotoId(item.id)
      return
    }
    if (item.kind !== 'project') return

    const href = item.href
    if (!href) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      navigate(href)
      return
    }

    const rect = origin.getBoundingClientRect()
    const row = origin.closest('.v2-honeycomb__row')
    const rowList = row?.parentElement?.querySelectorAll('.v2-honeycomb__row')
    const rowIndex = row && rowList ? [...rowList].indexOf(row) : -1
    const capTop = rowIndex === 0
    const capBottom = rowList ? rowIndex === rowList.length - 1 : false
    const cap = capTop && capBottom ? 'both' : capTop ? 'top' : capBottom ? 'bottom' : undefined
    const slug = href.split('/').filter(Boolean).pop()
    const project = getV2Project(slug)
    const hero = project?.hero?.image
    if (hero) {
      const preload = new Image()
      preload.src = withBasePath(hero)
    }

    startHoneycombLaunch({
      href,
      rect: {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      },
      scale: coverScale(rect),
      cap,
      image: item.image,
      background: project?.theme.background ?? '#1c1c1a',
    })
  }

  const closePhoto = useCallback(() => {
    setPhotoId(null)
    openerRef.current?.focus()
  }, [])

  return (
    <>
      <div
        ref={frameRef}
        className="v2-honeycomb"
        style={{
          ['--columns' as string]: String(cellCount(count)),
          ['--offset' as string]: nested ? '1' : '0',
        }}
      >
        <div ref={clusterRef} className="v2-honeycomb__cluster" role="list" aria-label={label}>
          {rows.map((row, rowIndex) => (
            <div
              className={[
                'v2-honeycomb__row',
                rowIndex === 0 ? 'is-cap-top' : '',
                rowIndex === rows.length - 1 ? 'is-cap-bottom' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              role="presentation"
              key={row.map((item) => item.id).join('-')}
            >
              {row.map((item) =>
                item.kind === 'shape' ? (
                  <div
                    className="v2-honeycomb__item v2-honeycomb__item--shape"
                    role="presentation"
                    aria-hidden="true"
                    key={item.id}
                  >
                    <svg className="v2-honeycomb__shape" viewBox="0 0 100 115.47" aria-hidden="true">
                      <polygon
                        points="50,2.4 94.2,24.2 98.6,31.2 98.6,84.3 94.2,91.3 50,113.1 5.8,91.3 1.4,84.3 1.4,31.2 5.8,24.2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                ) : (
                  <div role="listitem" key={item.id}>
                    <Honeycomb item={item} onActivate={activate} />
                  </div>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
      {photo && photo.kind === 'photo' ? <PhotoViewer photo={photo} onClose={closePhoto} /> : null}
    </>
  )
}
