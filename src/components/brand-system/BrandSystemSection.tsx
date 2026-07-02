import type { ReactNode } from 'react'

type BrandSystemSectionProps = {
  id: string
  title: string
  intro?: string
  children: ReactNode
}

export function BrandSystemSection({
  id,
  title,
  intro,
  children,
}: BrandSystemSectionProps) {
  return (
    <section id={id} className="bs-section" aria-labelledby={`${id}-heading`}>
      <div className="bs-section__header">
        <h2 id={`${id}-heading`} className="bs-section__title">
          {title}
        </h2>
        {intro ? <p className="bs-section__intro">{intro}</p> : null}
      </div>
      <div className="bs-section__body">{children}</div>
    </section>
  )
}
