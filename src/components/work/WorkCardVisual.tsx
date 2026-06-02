import { ImagePlaceholder } from '../ImagePlaceholder'

type WorkCardVisualProps = {
  imageLabel: string
  imageSrc?: string
  imageAlt?: string
  className?: string
  compact?: boolean
}

export function WorkCardVisual({
  imageLabel,
  imageSrc,
  imageAlt,
  className = '',
  compact = false,
}: WorkCardVisualProps) {
  const classes = ['work-card__visual', compact && 'work-card__visual--compact', className]
    .filter(Boolean)
    .join(' ')

  if (imageSrc) {
    return (
      <div className={classes}>
        <img
          className="work-card__img"
          src={imageSrc}
          alt={imageAlt ?? imageLabel}
          loading="lazy"
          decoding="async"
        />
      </div>
    )
  }

  return (
    <div className={classes}>
      <ImagePlaceholder label={imageLabel} />
    </div>
  )
}
