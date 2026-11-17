import type { ReactNode } from 'react'

type V2SectionProps = {
  id?: string
  label: string
  children?: ReactNode
  className?: string
}

/** A named region on a v2 page. Later sections compose inside this. */
export function V2Section({ id, label, children, className }: V2SectionProps) {
  const sectionClassName = className ? `v2-section ${className}` : 'v2-section'

  return (
    <section id={id} className={sectionClassName} aria-label={label}>
      {children}
    </section>
  )
}
