import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motionEffectsEnabled } from '../effects/motionPrefs'

export function PaperLiftReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-paper-lift]'))

    if (cards.length === 0) return

    if (!motionEffectsEnabled()) {
      cards.forEach((card) => card.setAttribute('data-lift-revealed', 'true'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.setAttribute('data-lift-revealed', 'true')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -5% 0px',
      },
    )

    cards.forEach((card) => {
      card.removeAttribute('data-lift-revealed')
      card.removeAttribute('data-lift-active')
      card.style.removeProperty('--lift-x')
      card.style.removeProperty('--lift-y')
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}
