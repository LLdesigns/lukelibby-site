import type { EffectsState, InkRipple, TrailGhost } from '../effects/effectsStore'

const MAJOR_CELL = 52
const GRID_STEP = MAJOR_CELL / 2
const BUBBLE_RADIUS = 155
const BUBBLE_STRENGTH = 17
const GRID_PADDING = 120
const TRAIL_RADIUS = 110
const TRAIL_STRENGTH = 10
const STORY_RADIUS = 210
const STORY_STRENGTH = 22
const RIPPLE_DURATION = 900

export type Point = { x: number; y: number }

type DisplaceMode = 'push' | 'ring'

type DisplaceSource = {
  cx: number
  cy: number
  radius: number
  strength: number
  influence: number
  mode?: DisplaceMode
  ringRadius?: number
}

function displacementVector(
  x: number,
  y: number,
  source: DisplaceSource,
): { x: number; y: number } {
  if (source.influence <= 0.001 || source.strength <= 0.001) {
    return { x: 0, y: 0 }
  }

  const dx = x - source.cx
  const dy = y - source.cy
  const distSq = dx * dx + dy * dy
  const radiusSq = source.radius * source.radius

  if (distSq >= radiusSq) return { x: 0, y: 0 }

  const dist = Math.sqrt(distSq)
  if (dist < 0.001) return { x: 0, y: 0 }

  if (source.mode === 'ring' && source.ringRadius !== undefined) {
    const ringDist = Math.abs(dist - source.ringRadius)
    const ringWidth = 42
    if (ringDist > ringWidth) return { x: 0, y: 0 }
    const falloff = 1 - ringDist / ringWidth
    const push = source.strength * falloff * source.influence
    return { x: (dx / dist) * push, y: (dy / dist) * push }
  }

  const t = 1 - dist / source.radius
  const falloff = t * t * (3 - 2 * t)
  const push = source.strength * falloff * source.influence

  return { x: (dx / dist) * push, y: (dy / dist) * push }
}

export function displacePoint(x: number, y: number, sources: DisplaceSource[]): Point {
  let ox = 0
  let oy = 0

  for (const source of sources) {
    const delta = displacementVector(x, y, source)
    ox += delta.x
    oy += delta.y
  }

  return { x: x + ox, y: y + oy }
}

function rippleSources(ripples: InkRipple[], now: number): DisplaceSource[] {
  const sources: DisplaceSource[] = []

  for (const ripple of ripples) {
    const age = now - ripple.born
    if (age > RIPPLE_DURATION) continue

    const t = age / RIPPLE_DURATION
    const ringRadius = 36 + t * 260
    const strength = 26 * (1 - t) * Math.sin(t * Math.PI)

    sources.push({
      cx: ripple.x,
      cy: ripple.y,
      radius: ringRadius + 60,
      strength,
      influence: 1,
      mode: 'ring',
      ringRadius,
    })
  }

  return sources
}

function trailSources(trail: TrailGhost[]): DisplaceSource[] {
  return trail.map((ghost) => ({
    cx: ghost.x,
    cy: ghost.y,
    radius: TRAIL_RADIUS,
    strength: TRAIL_STRENGTH * ghost.strength,
    influence: 1,
  }))
}

function storySource(width: number, anchorY: number | null): DisplaceSource[] {
  if (anchorY === null) return []
  return [
    {
      cx: width * 0.44,
      cy: anchorY,
      radius: STORY_RADIUS,
      strength: STORY_STRENGTH,
      influence: 1,
    },
  ]
}

function buildSources(
  width: number,
  effects: EffectsState,
  now: number,
): DisplaceSource[] {
  const cursorInfluence = effects.cursorInfluence * effects.scrollRelax

  return [
    {
      cx: effects.cursorX,
      cy: effects.cursorY,
      radius: BUBBLE_RADIUS,
      strength: BUBBLE_STRENGTH,
      influence: cursorInfluence,
    },
    ...trailSources(effects.trail),
    ...storySource(width, effects.storyAnchorY),
    ...rippleSources(effects.ripples, now),
  ]
}

function buildGridPoints(
  width: number,
  height: number,
  sources: DisplaceSource[],
): Point[][] {
  const startCol = Math.floor(-GRID_PADDING / GRID_STEP)
  const endCol = Math.ceil((width + GRID_PADDING) / GRID_STEP)
  const startRow = Math.floor(-GRID_PADDING / GRID_STEP)
  const endRow = Math.ceil((height + GRID_PADDING) / GRID_STEP)

  const rows = endRow - startRow + 1
  const cols = endCol - startCol + 1
  const points: Point[][] = []

  for (let row = 0; row < rows; row += 1) {
    const rowPoints: Point[] = []
    const baseY = (startRow + row) * GRID_STEP

    for (let col = 0; col < cols; col += 1) {
      const baseX = (startCol + col) * GRID_STEP
      rowPoints.push(displacePoint(baseX, baseY, sources))
    }

    points.push(rowPoints)
  }

  return points
}

function strokeGridLines(
  ctx: CanvasRenderingContext2D,
  points: Point[][],
  majorEvery: number,
  lineColor: string,
) {
  if (points.length === 0 || points[0].length === 0) return

  ctx.lineWidth = 1
  ctx.strokeStyle = lineColor

  const drawRows = (step: number, alpha: number) => {
    ctx.globalAlpha = alpha
    ctx.beginPath()
    for (let row = 0; row < points.length; row += step) {
      const line = points[row]
      ctx.moveTo(line[0].x, line[0].y)
      for (let col = 1; col < line.length; col += 1) {
        ctx.lineTo(line[col].x, line[col].y)
      }
    }
    ctx.stroke()
  }

  const drawCols = (step: number, alpha: number) => {
    ctx.globalAlpha = alpha
    ctx.beginPath()
    for (let col = 0; col < points[0].length; col += step) {
      ctx.moveTo(points[0][col].x, points[0][col].y)
      for (let row = 1; row < points.length; row += 1) {
        ctx.lineTo(points[row][col].x, points[row][col].y)
      }
    }
    ctx.stroke()
  }

  drawRows(1, 0.4)
  drawCols(1, 0.4)
  drawRows(majorEvery, 1)
  drawCols(majorEvery, 1)
  ctx.globalAlpha = 1
}

export function drawDeformedGrid(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  effects: EffectsState,
  now: number,
  lineColor: string,
  bgColor: string,
  glowColor: string,
) {
  const dpr = window.devicePixelRatio || 1

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, width, height)

  ctx.fillStyle = bgColor
  ctx.fillRect(0, 0, width, height)

  const glow = ctx.createRadialGradient(width * 0.5, 0, 0, width * 0.5, 0, width * 0.55)
  glow.addColorStop(0, glowColor)
  glow.addColorStop(0.45, 'transparent')
  ctx.fillStyle = glow
  ctx.fillRect(0, 0, width, height)

  const sources = buildSources(width, effects, now)
  const points = buildGridPoints(width, height, sources)
  const majorEvery = MAJOR_CELL / GRID_STEP

  strokeGridLines(ctx, points, majorEvery, lineColor)
}

export function readThemeColors() {
  const styles = getComputedStyle(document.documentElement)
  return {
    bg: styles.getPropertyValue('--color-bg').trim() || '#11110f',
    line: styles.getPropertyValue('--texture-line').trim() || 'rgba(239, 232, 218, 0.035)',
    glow: styles.getPropertyValue('--texture-glow').trim() || 'rgba(120, 134, 90, 0.04)',
  }
}

export function drawStaticGrid(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  lineColor: string,
  bgColor: string,
  glowColor: string,
) {
  const emptyEffects: EffectsState = {
    cursorX: -9999,
    cursorY: -9999,
    cursorInfluence: 0,
    scrollRelax: 1,
    trail: [],
    ripples: [],
    storyAnchorY: null,
    focusHalo: null,
  }

  drawDeformedGrid(ctx, width, height, emptyEffects, 0, lineColor, bgColor, glowColor)
}

export const RIPPLE_LIFETIME_MS = RIPPLE_DURATION
