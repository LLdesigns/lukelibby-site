import type { CaseStudyArtifact } from '../../data/caseStudies'
import { ScrollReveal } from '../ScrollReveal'
import { CaseStudyVisual } from './CaseStudyVisual'
import { ProblemFlowDiagram } from './ProblemFlowDiagram'
import { SanitizedExampleBlock } from './SanitizedExampleBlock'

type ArtifactGridProps = {
  artifacts: CaseStudyArtifact[]
}

function ArtifactVisual({ artifact }: { artifact: CaseStudyArtifact }) {
  if (artifact.variant === 'problem-flow') {
    return (
      <ProblemFlowDiagram
        variant="problem"
        steps={artifact.flowSteps}
        label={artifact.flowLabel}
      />
    )
  }

  if (artifact.variant === 'proposed-flow') {
    return (
      <ProblemFlowDiagram
        variant="proposed"
        steps={artifact.flowSteps}
        label={artifact.flowLabel}
      />
    )
  }

  if (artifact.variant === 'sanitized-example' && artifact.example) {
    return <SanitizedExampleBlock example={artifact.example} />
  }

  return (
    <CaseStudyVisual
      src={artifact.imageSrc}
      alt={artifact.imageAlt}
      placeholderLabel={artifact.placeholderLabel ?? artifact.title}
    />
  )
}

export function ArtifactGrid({ artifacts }: ArtifactGridProps) {
  return (
    <section
      className="cs-artifacts paper-card"
      aria-labelledby="artifacts-heading"
    >
      <h2 id="artifacts-heading" className="cs-section-label">
        Visual Artifacts
      </h2>
      <p className="cs-artifacts__note">
        Sanitized diagrams and wireframes — not the original proprietary prototype.
      </p>
      <div className="cs-artifacts__grid">
        {artifacts.map((artifact, index) => {
          const isSanitized = artifact.variant === 'sanitized-example'
          return (
          <ScrollReveal
            key={artifact.title}
            as="article"
            variant="paper-drop"
            delay={index * 120}
            rotate={isSanitized ? 0 : (index % 2 === 0 ? -2 : 2) + index * 0.5}
            className={[
              'cs-artifact',
              artifact.featured && 'cs-artifact--featured',
              isSanitized && 'cs-artifact--sanitized',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <div className="cs-artifact__visual">
              <ArtifactVisual artifact={artifact} />
            </div>
            <h3 className="cs-artifact__title">{artifact.title}</h3>
            <p className="cs-artifact__desc">{artifact.description}</p>
          </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}
