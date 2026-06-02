import type { ReactNode } from 'react'

type CaseStudySectionProps = {
  title: string
  children: ReactNode
  variant?: 'dark' | 'prose'
}

export function CaseStudySection({
  title,
  children,
  variant = 'dark',
}: CaseStudySectionProps) {
  return (
    <section className={`cs-block cs-block--${variant}`}>
      <h2 className="cs-section-title">{title}</h2>
      {children}
    </section>
  )
}
