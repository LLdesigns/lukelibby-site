import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import {
  clearHoneycombLaunch,
  subscribeHoneycombLaunch,
  type HoneycombLaunchPayload,
} from '../../data/v2/honeycombLaunch'
import { withBasePath } from '../../utils/basePath'

const OPEN_MS = 720
const NAV_MS = 260
const FADE_MS = 280

/** Survives route changes so the hex can open into the next page without a freeze. */
export function HoneycombLaunchOverlay() {
  const navigate = useNavigate()
  const [launch, setLaunch] = useState<HoneycombLaunchPayload | null>(null)
  const [phase, setPhase] = useState<'open' | 'fade'>('open')

  useEffect(() => subscribeHoneycombLaunch(setLaunch), [])

  useEffect(() => {
    if (!launch) return

    setPhase('open')
    document.documentElement.classList.add('is-honeycomb-launching')

    const navTimer = window.setTimeout(() => {
      navigate(launch.href)
      window.scrollTo(0, 0)
    }, NAV_MS)

    const fadeTimer = window.setTimeout(() => {
      setPhase('fade')
    }, OPEN_MS)

    const doneTimer = window.setTimeout(() => {
      document.documentElement.classList.remove('is-honeycomb-launching')
      clearHoneycombLaunch()
      setPhase('open')
    }, OPEN_MS + FADE_MS)

    return () => {
      window.clearTimeout(navTimer)
      window.clearTimeout(fadeTimer)
      window.clearTimeout(doneTimer)
      document.documentElement.classList.remove('is-honeycomb-launching')
    }
  }, [launch, navigate])

  if (!launch) return null

  const capClass = launch.cap ? ` is-cap-${launch.cap}` : ''

  return createPortal(
    <div
      className={`v2-honeycomb-launch-layer${phase === 'fade' ? ' is-fading' : ''}`}
      aria-hidden="true"
    >
      <div
        className={`v2-honeycomb-launch${capClass}`}
        style={{
          top: launch.rect.top,
          left: launch.rect.left,
          width: launch.rect.width,
          height: launch.rect.height,
          ['--launch-scale' as string]: String(launch.scale),
          ['--launch-bg' as string]: launch.background ?? '#1c1c1a',
        }}
      >
        {launch.image ? <img src={withBasePath(launch.image)} alt="" /> : null}
      </div>
    </div>,
    document.body,
  )
}
