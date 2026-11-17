import { useEffect, useRef } from 'react'

type Lobe = {
  ox: number
  oy: number
  rx: number
  ry: number
  alpha: number
  phase: number
}

type Cloud = {
  x: number
  y: number
  vx: number
  life: number
  maxLife: number
  lobes: Lobe[]
}

/** Survives React remounts / Strict Mode so mist does not regenerate on every load. */
let sharedSprite: HTMLCanvasElement | null = null
let sharedClouds: Cloud[] | null = null

function mistSprite() {
  if (sharedSprite) return sharedSprite
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const draw = canvas.getContext('2d')
  if (!draw) return canvas
  const glow = draw.createRadialGradient(size / 2, size / 2, size * 0.02, size / 2, size / 2, size / 2)
  glow.addColorStop(0, 'rgba(176, 174, 168, 0.62)')
  glow.addColorStop(0.3, 'rgba(154, 152, 146, 0.32)')
  glow.addColorStop(0.64, 'rgba(140, 138, 132, 0.09)')
  glow.addColorStop(1, 'rgba(140, 138, 132, 0)')
  draw.fillStyle = glow
  draw.fillRect(0, 0, size, size)
  sharedSprite = canvas
  return canvas
}

function makeCloud(fromEdge: boolean): Cloud {
  const width = window.innerWidth
  const height = window.innerHeight
  const lobeCount = 8 + Math.floor(Math.random() * 5)
  const lobes = Array.from({ length: lobeCount }, () => {
    const rx = 160 + Math.random() * 260
    return {
      ox: (Math.random() - 0.5) * 340,
      oy: (Math.random() - 0.5) * 120,
      rx,
      ry: rx * (0.34 + Math.random() * 0.22),
      alpha: 0.2 + Math.random() * 0.1,
      phase: Math.random() * Math.PI * 2,
    }
  })
  const maxLife = 70 + Math.random() * 50
  const fromLeft = Math.random() < 0.5
  return {
    x: fromEdge ? (fromLeft ? -220 : width + 220) : Math.random() * width,
    y: height * (0.08 + Math.random() * 0.84),
    vx: (fromEdge && !fromLeft ? -1 : fromEdge ? 1 : Math.random() < 0.5 ? -1 : 1) * (0.045 + Math.random() * 0.07),
    life: fromEdge ? 0 : maxLife * (0.2 + Math.random() * 0.6),
    maxLife,
    lobes,
  }
}

function desiredCount() {
  return Math.round(Math.min(12, Math.max(6, (window.innerWidth * window.innerHeight) / 170000)))
}

function ensureClouds() {
  if (sharedClouds?.length) return sharedClouds
  sharedClouds = Array.from({ length: desiredCount() }, () => makeCloud(false))
  return sharedClouds
}

function fitCloudsToViewport(clouds: Cloud[]) {
  const width = window.innerWidth
  const height = window.innerHeight
  const target = desiredCount()

  while (clouds.length < target) clouds.push(makeCloud(true))
  if (clouds.length > target) clouds.length = target

  for (const cloud of clouds) {
    cloud.x = Math.min(width + 220, Math.max(-220, cloud.x))
    cloud.y = Math.min(height * 0.92, Math.max(height * 0.08, cloud.y))
  }
}

/** Soft mist banks. They drift sideways and never take the pointer. */
export function Atmosphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvasEl = canvasRef.current
    if (!canvasEl) return
    const ctx = canvasEl.getContext('2d')
    if (!ctx) return
    const canvas: HTMLCanvasElement = canvasEl
    const draw: CanvasRenderingContext2D = ctx

    const sprite = mistSprite()
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let reduced = motion.matches
    const warmed = sharedClouds !== null
    const clouds = ensureClouds()
    let frame = 0
    let running = true
    let lastWidth = 0
    let lastHeight = 0

    function syncCanvas() {
      const width = window.innerWidth
      const height = window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      const nextW = Math.floor(width * dpr)
      const nextH = Math.floor(height * dpr)
      if (canvas.width !== nextW || canvas.height !== nextH) {
        canvas.width = nextW
        canvas.height = nextH
        draw.setTransform(dpr, 0, 0, dpr, 0, 0)
      }
      // Keep the existing field; only nudge when the viewport actually changed.
      if (width !== lastWidth || height !== lastHeight) {
        fitCloudsToViewport(clouds)
        lastWidth = width
        lastHeight = height
      }
    }

    function paint(time: number) {
      const width = window.innerWidth
      const height = window.innerHeight
      const t = time * 0.001
      draw.clearRect(0, 0, width, height)

      for (const cloud of clouds) {
        if (!reduced) {
          cloud.life += 0.016
          cloud.x += cloud.vx
          cloud.y += Math.sin(t * 0.12 + cloud.x * 0.0015) * 0.04
          const gone = cloud.life > cloud.maxLife || cloud.x < -460 || cloud.x > width + 460
          if (gone) Object.assign(cloud, makeCloud(true))
        }

        const fade = Math.sin(Math.min(cloud.life / cloud.maxLife, 1) * Math.PI)
        for (const lobe of cloud.lobes) {
          const ox = lobe.ox + Math.sin(t * 0.18 + lobe.phase) * 22
          const oy = lobe.oy + Math.cos(t * 0.14 + lobe.phase) * 10
          draw.globalAlpha = lobe.alpha * fade
          draw.drawImage(
            sprite,
            cloud.x + ox - lobe.rx,
            cloud.y + oy - lobe.ry,
            lobe.rx * 2,
            lobe.ry * 2,
          )
        }
      }

      draw.globalAlpha = 1
      if (!reduced && running) frame = window.requestAnimationFrame(paint)
    }

    function onMotion() {
      reduced = motion.matches
      if (!reduced && running) frame = window.requestAnimationFrame(paint)
    }

    function onHide() {
      if (document.hidden) {
        running = false
        window.cancelAnimationFrame(frame)
        return
      }
      running = true
      if (!reduced) frame = window.requestAnimationFrame(paint)
    }

    function onResize() {
      syncCanvas()
    }

    syncCanvas()
    // Soft fade only on a cold start; remounts keep the same field without a refresh flash.
    if (warmed) canvas.classList.add('is-ready')
    else window.requestAnimationFrame(() => canvas.classList.add('is-ready'))
    frame = window.requestAnimationFrame(paint)
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onHide)
    motion.addEventListener('change', onMotion)

    return () => {
      running = false
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onHide)
      motion.removeEventListener('change', onMotion)
    }
  }, [])

  return <canvas ref={canvasRef} className="v2-atmosphere" aria-hidden="true" />
}
