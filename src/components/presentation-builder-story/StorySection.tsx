import type { ReactNode } from 'react'
import { ThemeBlock } from '../ThemeBlock'

type StorySectionProps = {
  sectionId: string
  label: string
  title: string
  children: ReactNode
}

export function StorySection({ sectionId, label, title, children }: StorySectionProps) {
  const headingId = `${sectionId}-heading`

  return (
    <section
      id={sectionId}
      className="psb-section story-page__section"
      aria-labelledby={headingId}
    >
      <ThemeBlock>
        <header className="psb-section__header">
          <span className="psb-section__label">{label}</span>
          <h2 className="psb-section__title" id={headingId} data-magnetic>
            {title}
          </h2>
        </header>
        {children}
      </ThemeBlock>
    </section>
  )
}
