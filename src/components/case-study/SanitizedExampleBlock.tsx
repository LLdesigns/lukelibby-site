import type { SanitizedSlideExample } from '../../data/productStories'

type SanitizedExampleBlockProps = {
  example: SanitizedSlideExample
}

export function SanitizedExampleBlock({ example }: SanitizedExampleBlockProps) {
  const rows: { label: string; value: string }[] = [
    ...(example.shapeId
      ? [{ label: 'Shape ID', value: example.shapeId }]
      : []),
    { label: 'Slide title', value: example.slideTitle },
    { label: 'Objective', value: example.objective },
    { label: 'Teaching element type', value: example.teachingElementType },
    { label: 'Body content', value: example.bodyContent },
    { label: 'Visual component', value: example.visualComponent },
    { label: 'Standards status', value: example.standardsStatus },
    { label: 'AI suggestion', value: example.aiSuggestion },
  ]

  return (
    <figure className="sanitized-example-wrap">
      <figcaption className="sanitized-example__label">
        Sample structured record
      </figcaption>
      <dl className="sanitized-example">
        {rows.map((row) => (
          <div key={row.label} className="sanitized-example__row">
            <dt className="sanitized-example__key">{row.label}</dt>
            <dd className="sanitized-example__value">{row.value}</dd>
          </div>
        ))}
      </dl>
    </figure>
  )
}
