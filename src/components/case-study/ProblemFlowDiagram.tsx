type ProblemFlowDiagramProps = {
  variant: 'problem' | 'proposed'
  steps?: string[]
  label?: string
}

const defaultProblemSteps = [
  'Raw .pptx in AI workflow',
  'Token bloat',
  'Lost context',
  'Misread structure',
]

const defaultProposedSteps = [
  '.pptx as input',
  'Shape-level JSON',
  'Source of truth',
  'Edit & validate',
  'Structured slide data',
]

export function ProblemFlowDiagram({
  variant,
  steps: customSteps,
  label: customLabel,
}: ProblemFlowDiagramProps) {
  const defaultSteps =
    variant === 'problem' ? defaultProblemSteps : defaultProposedSteps
  const steps = customSteps ?? defaultSteps
  const label =
    customLabel ??
    (variant === 'problem'
      ? 'Before: messy AI input'
      : 'After: structured data layer')

  return (
    <figure className="flow-diagram" aria-label={label}>
      <figcaption className="flow-diagram__label">{label}</figcaption>
      <ol className="flow-diagram__steps">
        {steps.map((step, index) => (
          <li key={step} className="flow-diagram__step">
            <span className="flow-diagram__text">{step}</span>
            {index < steps.length - 1 && (
              <span className="flow-diagram__arrow" aria-hidden="true">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </figure>
  )
}
