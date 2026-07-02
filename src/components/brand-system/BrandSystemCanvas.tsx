import type { CSSProperties, ReactNode } from 'react'

type BrandSystemCanvasProps = {
  label: string
  note?: string
  variant?: 'default' | 'island' | 'wide' | 'hero'
  className?: string
  imageSrc?: string
  imageAlt?: string
  imagePosition?: string
  children?: ReactNode
}

export function BrandSystemCanvas({
  label,
  note,
  variant = 'default',
  className = '',
  imageSrc,
  imageAlt = '',
  imagePosition = 'center',
  children,
}: BrandSystemCanvasProps) {
  const imageStyle = {
    '--bs-image-position': imagePosition,
  } as CSSProperties

  return (
    <div className={`bs-canvas bs-canvas--${variant} ${className}`.trim()}>
      <div className="bs-canvas__meta">
        <span className="bs-canvas__label">{label}</span>
        {note ? <span className="bs-canvas__note">{note}</span> : null}
      </div>
      <div className="bs-canvas__stage">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="bs-canvas__image"
            style={imageStyle}
            loading="lazy"
          />
        ) : (
          children ?? <div className="bs-canvas__empty" aria-hidden />
        )}
      </div>
    </div>
  )
}
