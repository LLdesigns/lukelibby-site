import { useEffect } from 'react'

const SECTION_TARGETS = [
  '.v2-header',
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

const HEX_TARGET = '.v2-honeycomb__item:not(.v2-honeycomb__item--shape)'

type SubtleMotionProps = {
  /** Root that owns the animated content. */
  root: string
}

/** Soft fade/rise for portfolio sections on load and scroll. */
export function SubtleMotion({ root }: SubtleMotionProps) {
  useEffect(() => {
    const scope = document.querySelector(root)
    if (!(scope instanceof HTMLElement)) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const sections = [...scope.querySelectorAll<HTMLElement>(SECTION_TARGETS)]
    const cluster = scope.querySelector('.v2-honeycomb')

    const hexes = () => [...scope.querySelectorAll<HTMLElement>(HEX_TARGET)]

    const reveal = (nodes: HTMLElement[]) => {
      for (const node of nodes) node.classList.add('is-in')
    }

    const clear = (nodes: HTMLElement[]) => {
      for (const node of nodes) {
        node.classList.remove('is-in')
        node.style.removeProperty('--motion-delay')
      }
    }

    const stampHexDelays = (nodes: HTMLElement[]) => {
      nodes.forEach((node, index) => {
        node.style.setProperty('--motion-delay', `${index * 55}ms`)
      })
    }

    if (reduced) {
      reveal([...sections, ...hexes()])
      return
    }

    let hexReady = false

    const revealHexes = () => {
      hexReady = true
      if (cluster instanceof HTMLElement) cluster.classList.add('is-revealed')
      const nodes = hexes()
      stampHexDelays(nodes)
      reveal(nodes)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const target = entry.target
          if (target.classList.contains('v2-honeycomb')) {
            revealHexes()
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

    if (cluster instanceof HTMLElement) observer.observe(cluster)
    for (const node of sections) observer.observe(node)

    // Column breakpoints remount hex DOM. Keep new tiles visible after the first reveal.
    const mutations =
      cluster instanceof HTMLElement
        ? new MutationObserver(() => {
            if (!hexReady) {
              stampHexDelays(hexes())
              return
            }
            revealHexes()
          })
        : null

    if (mutations && cluster instanceof HTMLElement) {
      mutations.observe(cluster, { childList: true, subtree: true })
    }

    stampHexDelays(hexes())

    // If anything stays hidden (observer edge cases), settle the page.
    const fallback = window.setTimeout(() => {
      reveal(sections)
      revealHexes()
    }, 1800)

    return () => {
      window.clearTimeout(fallback)
      observer.disconnect()
      mutations?.disconnect()
      if (cluster instanceof HTMLElement) cluster.classList.remove('is-revealed')
      clear([...sections, ...hexes()])
    }
  }, [root])

  return null
}
