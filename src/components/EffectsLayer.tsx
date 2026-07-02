import { useEffect } from 'react'
import {
  addInkRipple,
  pushTrailPoint,
  setCursor,
  setScrollRelax,
} from '../effects/effectsStore'
import { motionEffectsEnabled } from '../effects/motionPrefs'

const TRAIL_DISTANCE = 26
const SCROLL_DECAY_MS = 140
const INTERACTIVE_SELECTOR =
  'a, button, .btn, .theme-toggle, .story-nav__link, [data-interactive]'

function updatePaperLift(target: EventTarget | null, clientX: number, clientY: number) {
  const card =
    target instanceof Element ? target.closest<HTMLElement>('[data-paper-lift]') : null

  document.querySelectorAll<HTMLElement>('[data-paper-lift][data-lift-active]').forEach(
    (activeCard) => {
      if (activeCard !== card) {
        activeCard.removeAttribute('data-lift-active')
        activeCard.style.removeProperty('--lift-x')
        activeCard.style.removeProperty('--lift-y')
      }
    },
  )

  if (!card || !card.hasAttribute('data-lift-revealed')) return

  const rect = card.getBoundingClientRect()
  const x = (clientX - rect.left) / rect.width - 0.5
  const y = (clientY - rect.top) / rect.height - 0.5

  card.setAttribute('data-lift-active', 'true')
  card.style.setProperty('--lift-x', x.toFixed(4))
  card.style.setProperty('--lift-y', y.toFixed(4))
}

function updateMagnetic(target: EventTarget | null, clientX: number, clientY: number) {
  const heading =
    target instanceof Element ? target.closest<HTMLElement>('[data-magnetic]') : null

  document.querySelectorAll<HTMLElement>('[data-magnetic][data-magnetic-active]').forEach(
    (activeHeading) => {
      if (activeHeading !== heading) {
        activeHeading.removeAttribute('data-magnetic-active')
        activeHeading.style.removeProperty('--mag-x')
        activeHeading.style.removeProperty('--mag-y')
      }
    },
  )

  if (!heading) return

  const rect = heading.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  const dx = clientX - centerX
  const dy = clientY - centerY
  const distance = Math.hypot(dx, dy)
  const radius = Math.max(rect.width, rect.height) * 0.9

  if (distance > radius) return

  const pull = (1 - distance / radius) * 1.8
  const magX = (dx / (distance || 1)) * pull
  const magY = (dy / (distance || 1)) * pull

  heading.setAttribute('data-magnetic-active', 'true')
  heading.style.setProperty('--mag-x', magX.toFixed(2))
  heading.style.setProperty('--mag-y', magY.toFixed(2))
}

export function EffectsLayer() {
  useEffect(() => {
    if (!motionEffectsEnabled()) return

    let lastTrailX = -9999
    let lastTrailY = -9999
    let scrollTimer: number | null = null

    const onMove = (event: MouseEvent) => {
      setCursor(event.clientX, event.clientY, 1)

      const trailDistance = Math.hypot(
        event.clientX - lastTrailX,
        event.clientY - lastTrailY,
      )
      if (trailDistance >= TRAIL_DISTANCE) {
        pushTrailPoint(event.clientX, event.clientY)
        lastTrailX = event.clientX
        lastTrailY = event.clientY
      }

      updatePaperLift(event.target, event.clientX, event.clientY)
      updateMagnetic(event.target, event.clientX, event.clientY)
    }

    const onLeave = () => {
      setCursor(-9999, -9999, 0)
      document
        .querySelectorAll<HTMLElement>('[data-paper-lift][data-lift-active]')
        .forEach((card) => {
          card.removeAttribute('data-lift-active')
          card.style.removeProperty('--lift-x')
          card.style.removeProperty('--lift-y')
        })
      document
        .querySelectorAll<HTMLElement>('[data-magnetic][data-magnetic-active]')
        .forEach((heading) => {
          heading.removeAttribute('data-magnetic-active')
          heading.style.removeProperty('--mag-x')
          heading.style.removeProperty('--mag-y')
        })
    }

    const onScroll = () => {
      setScrollRelax(0.38)
      if (scrollTimer !== null) window.clearTimeout(scrollTimer)
      scrollTimer = window.setTimeout(() => setScrollRelax(1), SCROLL_DECAY_MS)
    }

    const onClick = (event: MouseEvent) => {
      const interactive = (event.target as Element | null)?.closest(INTERACTIVE_SELECTOR)
      if (!interactive) return
      addInkRipple(event.clientX, event.clientY)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('click', onClick)
      if (scrollTimer !== null) window.clearTimeout(scrollTimer)
    }
  }, [])

  return null
}
