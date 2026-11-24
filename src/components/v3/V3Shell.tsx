import { useEffect, type ReactNode } from 'react'
import { DocumentHead } from '../DocumentHead'
import { ScrollToHash } from '../ScrollToHash'
import '../../styles/v3.css'

const V3_FONT_HREF =
  'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap'

function ensureV3Font() {
  if (typeof document === 'undefined') return
  if (document.querySelector(`link[data-v3-font="true"]`)) return
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = V3_FONT_HREF
  link.dataset.v3Font = 'true'
  document.head.appendChild(link)
}

type V3ShellProps = {
  title: string
  description: string
  pathname?: string
  workIndex?: boolean
  children: ReactNode
}

function revealDelayFor(node: HTMLElement, batchIndex: number) {
  const named = node.getAttribute('data-reveal')
  if (named === 'hero') return 60
  if (named === 'hero-copy') return 220
  // Stagger only within the current intersection batch so lower sections
  // don't inherit multi-second delays from document order.
  return Math.min(batchIndex * 90, 360)
}

function useV3Reveals(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return
    const root = document.querySelector<HTMLElement>('.v3')
    if (!root) return

    const nodes = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!nodes.length) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('is-in'))
      return
    }

    const reveal = (node: HTMLElement, delayMs: number) => {
      if (node.classList.contains('is-in')) return
      node.style.setProperty('--reveal-delay', `${delayMs}ms`)
      // Apply delay before opacity flips so the transition actually waits.
      void node.getBoundingClientRect()
      node.classList.add('is-in')
    }

    const revealBatch = (batch: HTMLElement[]) => {
      const pending = batch
        .filter((node) => !node.classList.contains('is-in'))
        .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)

      pending.forEach((node, index) => {
        reveal(node, revealDelayFor(node, index))
        observer.unobserve(node)
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        revealBatch(
          entries.filter((entry) => entry.isIntersecting).map((entry) => entry.target as HTMLElement),
        )
      },
      {
        // Trigger once a slice of the block is on screen — not after a long wait.
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.05,
      },
    )

    nodes.forEach((node) => observer.observe(node))

    // Catch nodes already in view after layout/fonts (IO can miss the first paint).
    const catchUp = () => {
      const vh = window.innerHeight || 1
      const visible = nodes.filter((node) => {
        if (node.classList.contains('is-in')) return false
        const rect = node.getBoundingClientRect()
        return rect.top < vh * 0.92 && rect.bottom > vh * 0.04
      })
      if (visible.length) revealBatch(visible)
    }

    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(catchUp)
    })
    const timer = window.setTimeout(catchUp, 350)

    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(timer)
      observer.disconnect()
    }
  }, [enabled])
}

/** Page frame for the v3 landing and My Work index. */
export function V3Shell({
  title,
  description,
  pathname,
  workIndex = false,
  children,
}: V3ShellProps) {
  useEffect(() => {
    ensureV3Font()
  }, [])
  useV3Reveals(true)

  return (
    <div className={workIndex ? 'v3 v3--work' : 'v3'} data-theme="light">
      <DocumentHead title={title} description={description} pathname={pathname} />
      <ScrollToHash />
      {children}
    </div>
  )
}
