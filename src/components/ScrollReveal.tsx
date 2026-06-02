import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
  type Ref,
} from 'react'

export type RevealVariant =
  | 'rise'
  | 'blur-rise'
  | 'paper-drop'
  | 'drift-left'
  | 'drift-right'
  | 'unfurl'
  | 'stamp'
  | 'hero-sweep'
  | 'cascade'

type ScrollRevealProps = {
  children: ReactNode
  variant?: RevealVariant
  /** Stagger delay in ms */
  delay?: number
  /** Paper-drop landing rotation (degrees) */
  rotate?: number
  className?: string
  as?: ElementType
  /** Play on mount (hero) instead of waiting for scroll */
  immediate?: boolean
  threshold?: number
  once?: boolean
}

export function ScrollReveal({
  children,
  variant = 'rise',
  delay = 0,
  rotate = 0,
  className = '',
  as: Tag = 'div',
  immediate = false,
  threshold = 0.12,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (immediate) {
      const id = window.setTimeout(() => setVisible(true), 40)
      return () => window.clearTimeout(id)
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -6% 0px',
      },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [immediate, once, threshold])

  const style = {
    '--reveal-delay': `${delay}ms`,
    '--reveal-rotate': `${rotate}deg`,
  } as CSSProperties

  const classes = [
    'scroll-reveal',
    `scroll-reveal--${variant}`,
    visible && 'scroll-reveal--visible',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      className={classes}
      style={style}
    >
      {children}
    </Tag>
  )
}
