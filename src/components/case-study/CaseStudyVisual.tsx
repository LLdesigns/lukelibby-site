import { ImagePlaceholder } from '../ImagePlaceholder'

type CaseStudyVisualProps = {
  src?: string
  alt?: string
  placeholderLabel: string
  className?: string
  /** Above-the-fold hero images, eager load, no lazy blur */
  priority?: boolean
  width?: number
  height?: number
}

export function CaseStudyVisual({
  src,
  alt,
  placeholderLabel,
  className = '',
  priority = false,
  width,
  height,
}: CaseStudyVisualProps) {
  if (src) {
    return (
      <img
        className={`cs-visual-img ${className}`.trim()}
        src={src}
        alt={alt ?? placeholderLabel}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : undefined}
      />
    )
  }

  return <ImagePlaceholder label={placeholderLabel} />
}
