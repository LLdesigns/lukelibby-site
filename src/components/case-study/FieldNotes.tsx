import type { ProcessStep } from '../../data/productStories'
import { ScrollReveal } from '../ScrollReveal'

type FieldNotesProps = {
  steps: ProcessStep[]
}

export function FieldNotes({ steps }: FieldNotesProps) {
  return (
    <section className="cs-field-notes" aria-labelledby="field-notes-heading">
      <h2 id="field-notes-heading" className="cs-section-title">
        How I Worked Through It
      </h2>
      <ol className="cs-field-notes__list">
        {steps.map((step, index) => (
          <ScrollReveal
            key={step.step}
            as="li"
            variant={index % 2 === 0 ? 'drift-left' : 'drift-right'}
            delay={index * 90}
            className="cs-field-notes__step"
          >
            <span className="cs-field-notes__num" aria-hidden="true">
              {String(step.step).padStart(2, '0')}
            </span>
            <div>
              <h3 className="cs-field-notes__step-title">{step.title}</h3>
              <p className="cs-field-notes__step-body">{step.body}</p>
            </div>
          </ScrollReveal>
        ))}
      </ol>
    </section>
  )
}
