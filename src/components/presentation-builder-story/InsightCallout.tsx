type InsightCalloutProps = {
  quote: string
  label?: string
}

export function InsightCallout({
  quote,
  label = 'Product insight',
}: InsightCalloutProps) {
  return (
    <blockquote className="psb-insight">
      <span className="psb-insight__label">{label}</span>
      <p className="psb-insight__quote">{quote}</p>
    </blockquote>
  )
}
