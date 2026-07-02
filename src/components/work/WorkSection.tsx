import type { ReactNode } from 'react'
import { SectionHeading } from '../SectionHeading'
import { ThemeBlock } from '../ThemeBlock'

type WorkSectionProps = {
  id: string
  title: string
  intro: string
  variant?: 'dark' | 'paper'
  children: ReactNode
}

export function WorkSection({
  id,
  title,
  intro,
  variant = 'paper',
  children,
}: WorkSectionProps) {
  const sectionClass =
    variant === 'paper' ? 'section section--paper work-section' : 'section work-section'

  return (
    <section id={id} className={sectionClass} aria-labelledby={`${id}-heading`}>
      <ThemeBlock className="container">
        <SectionHeading
          title={title}
          headingId={`${id}-heading`}
          variant={variant === 'paper' ? 'paper' : 'dark'}
        />
        <p className="work-section__intro" id={`${id}-intro`}>
          {intro}
        </p>
        {children}
      </ThemeBlock>
    </section>
  )
}
