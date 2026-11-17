export type HoneycombLaunchCap = 'top' | 'bottom' | 'both'

export type HoneycombLaunchPayload = {
  href: string
  rect: { top: number; left: number; width: number; height: number }
  scale: number
  cap?: HoneycombLaunchCap
  image?: string
  background?: string
}

type Listener = (payload: HoneycombLaunchPayload | null) => void

let current: HoneycombLaunchPayload | null = null
const listeners = new Set<Listener>()

export function getHoneycombLaunch() {
  return current
}

export function startHoneycombLaunch(payload: HoneycombLaunchPayload) {
  current = payload
  listeners.forEach((listener) => listener(current))
}

export function clearHoneycombLaunch() {
  current = null
  listeners.forEach((listener) => listener(null))
}

export function subscribeHoneycombLaunch(listener: Listener) {
  listeners.add(listener)
  listener(current)
  return () => {
    listeners.delete(listener)
  }
}
