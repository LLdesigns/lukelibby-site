import type { ReactNode } from 'react'
import type { ResumeSectionId } from '../../data/resume'
import { ScrollReveal } from '../ScrollReveal'
import { ThemeBlock } from '../ThemeBlock'

type ResumeSectionProps = {
  id: ResumeSectionId
  title: string
  label?: string
  children: ReactNode
}

export function ResumeSection({
  id,
  title,
  label,
  children,
}: ResumeSectionProps) {
  return (
    <section id={id} className="resume-section" aria-labelledby={`${id}-heading`}>
      <ThemeBlock>
        <ScrollReveal variant="unfurl" className="scroll-reveal--section-line">
          <div className="resume-section__head">
            {label && <p className="resume-section__label">{label}</p>}
            <h2 id={`${id}-heading`} className="resume-section__title">
              {title}
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="rise" delay={80}>
          {children}
        </ScrollReveal>
      </ThemeBlock>
    </section>
  )
}
