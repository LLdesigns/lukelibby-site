type StatCardProps = {
  label: string
  value: number | string
  hint?: string
}

export function StatCard({ label, value, hint }: StatCardProps) {
  return (
    <article className="portal-stat">
      <p className="portal-stat__label">{label}</p>
      <p className="portal-stat__value">{value}</p>
      {hint && <p className="portal-stat__hint">{hint}</p>}
    </article>
  )
}
