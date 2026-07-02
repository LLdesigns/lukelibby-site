type SectionHeadingProps = {
  label?: string
  title: string
  variant?: 'dark' | 'paper'
  headingId?: string
}

export function SectionHeading({
  label,
  title,
  variant = 'dark',
  headingId,
}: SectionHeadingProps) {
  const className =
    variant === 'paper'
      ? 'section-heading section-heading--paper'
      : 'section-heading'

  return (
    <div className={className}>
      {label && <p className="section-heading__label">{label}</p>}
      <h2 id={headingId} className="section-heading__title" data-magnetic>
        {title}
      </h2>
    </div>
  )
}
