import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { decayTrail, getEffectsState, tickRipples, subscribeEffects } from '../effects/effectsStore'
import { motionEffectsEnabled } from '../effects/motionPrefs'
import {
  drawDeformedGrid,
  drawStaticGrid,
  readThemeColors,
  RIPPLE_LIFETIME_MS,
} from '../utils/deformedGrid'

const CURSOR_LERP = 0.07
const INFLUENCE_LERP = 0.06
const SCROLL_LERP = 0.06

export function GridBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sizeRef = useRef({ width: 0, height: 0 })
  const cursorCurrent = useRef({ x: -9999, y: -9999 })
  const influenceCurrent = useRef(0)
  const scrollRelaxCurrent = useRef(1)
  const renderEffects = useRef(getEffectsState())
  const rafId = useRef<number | null>(null)
  const staticMode = useRef(!motionEffectsEnabled())
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setPortalTarget(document.body)
  }, [])

  useEffect(() => {
    if (!portalTarget) return

    const backdrop = document.querySelector('.grid-backdrop')
    const root = document.getElementById('root')
    if (backdrop && root && backdrop.parentElement === document.body) {
      document.body.insertBefore(backdrop, root)
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    staticMode.current = !motionEffectsEnabled()

    const paintFrame = (now = performance.now()) => {
      const { width, height } = sizeRef.current
      if (width === 0 || height === 0) return

      const colors = readThemeColors()

      if (staticMode.current) {
        drawStaticGrid(ctx, width, height, colors.line, colors.bg, colors.glow)
        return
      }

      decayTrail()
      tickRipples(now, RIPPLE_LIFETIME_MS)
      const frameEffects = getEffectsState()

      drawDeformedGrid(
        ctx,
        width,
        height,
        {
          ...frameEffects,
          cursorX: cursorCurrent.current.x,
          cursorY: cursorCurrent.current.y,
          cursorInfluence: influenceCurrent.current,
          scrollRelax: scrollRelaxCurrent.current,
        },
        now,
        colors.line,
        colors.bg,
        colors.glow,
      )
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const width = window.innerWidth
      const height = window.innerHeight

      sizeRef.current = { width, height }
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      paintFrame()
    }

    const render = () => {
      const { width, height } = sizeRef.current
      if (width === 0 || height === 0) {
        rafId.current = requestAnimationFrame(render)
        return
      }

      if (staticMode.current) {
        rafId.current = null
        return
      }

      const effects = renderEffects.current
      const now = performance.now()

      cursorCurrent.current.x +=
        (effects.cursorX - cursorCurrent.current.x) * CURSOR_LERP
      cursorCurrent.current.y +=
        (effects.cursorY - cursorCurrent.current.y) * CURSOR_LERP
      influenceCurrent.current +=
        (effects.cursorInfluence - influenceCurrent.current) * INFLUENCE_LERP
      scrollRelaxCurrent.current +=
        (effects.scrollRelax - scrollRelaxCurrent.current) * SCROLL_LERP

      paintFrame(now)

      const cursorDelta =
        Math.abs(effects.cursorX - cursorCurrent.current.x) +
        Math.abs(effects.cursorY - cursorCurrent.current.y)
      const influenceDelta = Math.abs(effects.cursorInfluence - influenceCurrent.current)
      const scrollDelta = Math.abs(effects.scrollRelax - scrollRelaxCurrent.current)
      const hasMotion =
        getEffectsState().ripples.length > 0 ||
        getEffectsState().trail.length > 0 ||
        getEffectsState().storyAnchorY !== null

      if (cursorDelta > 0.25 || influenceDelta > 0.002 || scrollDelta > 0.002 || hasMotion) {
        rafId.current = requestAnimationFrame(render)
      } else {
        rafId.current = null
      }
    }

    const startRender = () => {
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(render)
      }
    }

    const unsubscribe = subscribeEffects(() => {
      renderEffects.current = getEffectsState()
      startRender()
    })

    resize()
    const onResize = () => {
      resize()
      if (!staticMode.current) startRender()
    }
    window.addEventListener('resize', onResize)

    if (!staticMode.current) {
      startRender()
    }

    const themeObserver = new MutationObserver(() => {
      paintFrame()
      if (!staticMode.current) {
        startRender()
      }
    })
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => {
      unsubscribe()
      window.removeEventListener('resize', onResize)
      themeObserver.disconnect()
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [portalTarget])

  if (!portalTarget) return null

  return createPortal(
    <div className="grid-backdrop" aria-hidden="true">
      <canvas ref={canvasRef} className="grid-backdrop__canvas" />
    </div>,
    portalTarget,
  )
}
