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
      className="pip-section story-page__section"
      aria-labelledby={headingId}
    >
      <ThemeBlock>
        <header className="pip-section__header">
          <span className="pip-section__label">{label}</span>
          <h2 className="pip-section__title" id={headingId} data-magnetic>
            {title}
          </h2>
        </header>
        {children}
      </ThemeBlock>
    </section>
  )
}
