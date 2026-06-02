type ValueCardProps = {
  title: string
  description: string
}

export function ValueCard({ title, description }: ValueCardProps) {
  return (
    <div className="value-card">
      <h3 className="value-card__title">{title}</h3>
      <p className="value-card__desc">{description}</p>
    </div>
  )
}
