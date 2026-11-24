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

function useV3Reveals(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.v3 [data-reveal]'))
    if (!nodes.length) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('is-in'))
      return
    }

    // Top → bottom sequence: later nodes wait longer.
    nodes.forEach((node, index) => {
      const named =
        node.getAttribute('data-reveal') === 'hero'
          ? 60
          : node.getAttribute('data-reveal') === 'hero-copy'
            ? 220
            : 320 + index * 110
      node.style.setProperty('--reveal-delay', `${named}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.08 },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
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
