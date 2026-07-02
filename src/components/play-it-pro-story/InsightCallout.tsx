type InsightCalloutProps = {
  quote: string
  label?: string
}

export function InsightCallout({
  quote,
  label = 'Product insight',
}: InsightCalloutProps) {
  return (
    <blockquote className="pip-insight">
      <span className="pip-insight__label">{label}</span>
      <p className="pip-insight__quote">{quote}</p>
    </blockquote>
  )
}
