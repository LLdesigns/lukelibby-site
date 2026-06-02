type LoopDiagramProps = {
  steps: string[]
  label?: string
}

export function LoopDiagram({
  steps,
  label = 'Core product loop',
}: LoopDiagramProps) {
  return (
    <figure className="flow-diagram ps-loop" aria-label={label}>
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
