import { useEffect } from 'react'

const TARGETS = [
  '.v2-header',
  '.v2-honeycomb__item:not(.v2-honeycomb__item--shape)',
  '.v2-resume',
  '.v2-about',
  '.v2-research__block',
  '.v2-contact',
  '.v2-footer__bar',
  '.vp-bar',
  '.vp-hero',
  '.vp-block',
  '.vp-end',
].join(', ')

type SubtleMotionProps = {
  /** Root that owns the animated content. */
  root: string
}

/** Soft fade/rise for portfolio sections on load and scroll. */
export function SubtleMotion({ root }: SubtleMotionProps) {
  useEffect(() => {
    const scope = document.querySelector(root)
    if (!(scope instanceof HTMLElement)) return

    const nodes = [...scope.querySelectorAll<HTMLElement>(TARGETS)]
    if (!nodes.length) return

    const revealAll = () => {
      for (const node of nodes) node.classList.add('is-in')
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      revealAll()
      return
    }

    const hexes = nodes.filter((node) => node.classList.contains('v2-honeycomb__item'))
    const other = nodes.filter((node) => !node.classList.contains('v2-honeycomb__item'))

    hexes.forEach((node, index) => {
      node.style.setProperty('--motion-delay', `${index * 55}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const target = entry.target
          if (target.classList.contains('v2-honeycomb')) {
            for (const hex of hexes) hex.classList.add('is-in')
            observer.unobserve(target)
            continue
          }
          target.classList.add('is-in')
          observer.unobserve(target)
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -6% 0px',
      },
    )

    const cluster = scope.querySelector('.v2-honeycomb')
    if (cluster instanceof HTMLElement && hexes.length) observer.observe(cluster)
    for (const node of other) observer.observe(node)

    // If anything stays hidden (observer edge cases), settle the page.
    const fallback = window.setTimeout(revealAll, 1800)

    return () => {
      window.clearTimeout(fallback)
      observer.disconnect()
      for (const node of nodes) {
        node.classList.remove('is-in')
        node.style.removeProperty('--motion-delay')
      }
    }
  }, [root])

  return null
}
