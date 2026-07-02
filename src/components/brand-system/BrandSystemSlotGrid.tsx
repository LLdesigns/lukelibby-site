import type { CSSProperties } from 'react'

type BrandSystemSlotGridProps = {
  slots: Array<{
    id: string
    label: string
    span?: 'default' | 'wide' | 'tall'
    imageSrc?: string
    imageAlt?: string
    imagePosition?: string
  }>
}

export function BrandSystemSlotGrid({ slots }: BrandSystemSlotGridProps) {
  return (
    <div className="bs-slot-grid">
      {slots.map((slot) => {
        const imageStyle = {
          '--bs-image-position': slot.imagePosition ?? 'center',
        } as CSSProperties

        return (
          <div
            key={slot.id}
            className={`bs-slot bs-slot--${slot.span ?? 'default'}`}
          >
            <span className="bs-slot__label">{slot.label}</span>
            <div className="bs-slot__frame">
              {slot.imageSrc ? (
                <img
                  src={slot.imageSrc}
                  alt={slot.imageAlt ?? slot.label}
                  className="bs-slot__image"
                  style={imageStyle}
                  loading="lazy"
                />
              ) : null}
            </div>
          </div>
        )
      })}
    </div>
  )
}
