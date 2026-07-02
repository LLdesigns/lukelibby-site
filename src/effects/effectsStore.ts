export type TrailGhost = {
  x: number
  y: number
  strength: number
}

export type InkRipple = {
  x: number
  y: number
  born: number
}

export type FocusHalo = {
  x: number
  y: number
  strength: number
}

export type EffectsState = {
  cursorX: number
  cursorY: number
  cursorInfluence: number
  scrollRelax: number
  trail: TrailGhost[]
  ripples: InkRipple[]
  storyAnchorY: number | null
  focusHalo: FocusHalo | null
}

const MAX_TRAIL = 7
const TRAIL_DECAY = 0.9
const TRAIL_STRENGTH = 0.24

let state: EffectsState = {
  cursorX: -9999,
  cursorY: -9999,
  cursorInfluence: 0,
  scrollRelax: 1,
  trail: [],
  ripples: [],
  storyAnchorY: null,
  focusHalo: null,
}

const listeners = new Set<() => void>()

function notify() {
  listeners.forEach((listener) => listener())
}

export function getEffectsState(): EffectsState {
  return state
}

export function subscribeEffects(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function setCursor(x: number, y: number, influence: number) {
  state = { ...state, cursorX: x, cursorY: y, cursorInfluence: influence }
  notify()
}

export function setScrollRelax(value: number) {
  if (Math.abs(state.scrollRelax - value) < 0.002) return
  state = { ...state, scrollRelax: value }
  notify()
}

export function pushTrailPoint(x: number, y: number) {
  const trail = state.trail.map((ghost) => ({
    ...ghost,
    strength: ghost.strength * TRAIL_DECAY,
  }))

  trail.push({ x, y, strength: TRAIL_STRENGTH })

  while (trail.length > MAX_TRAIL) {
    trail.shift()
  }

  state = {
    ...state,
    trail: trail.filter((ghost) => ghost.strength > 0.03),
  }
  notify()
}

export function addInkRipple(x: number, y: number) {
  state = {
    ...state,
    ripples: [...state.ripples, { x, y, born: performance.now() }],
  }
  notify()
}

export function tickRipples(now: number, duration: number) {
  if (state.ripples.length === 0) return
  state = {
    ...state,
    ripples: state.ripples.filter((ripple) => now - ripple.born < duration),
  }
}

export function setStoryAnchorY(y: number | null) {
  if (state.storyAnchorY === y) return
  state = { ...state, storyAnchorY: y }
  notify()
}

export function setFocusHalo(halo: FocusHalo | null) {
  const current = state.focusHalo
  if (
    current?.x === halo?.x &&
    current?.y === halo?.y &&
    current?.strength === halo?.strength
  ) {
    return
  }
  state = { ...state, focusHalo: halo }
  notify()
}

export function decayTrail() {
  if (state.trail.length === 0) return

  state = {
    ...state,
    trail: state.trail
      .map((ghost) => ({ ...ghost, strength: ghost.strength * TRAIL_DECAY }))
      .filter((ghost) => ghost.strength > 0.03),
  }
}
