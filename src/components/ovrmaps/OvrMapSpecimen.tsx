import type { ReactNode } from 'react'
import { BrandSystemCanvas } from '../brand-system/BrandSystemCanvas'

type OvrMapSpecimenProps = {
  label: string
  note?: string
  variant?: 'default' | 'wide'
  children: ReactNode
}

export function OvrMapSpecimen({
  label,
  note,
  variant = 'default',
  children,
}: OvrMapSpecimenProps) {
  return (
    <BrandSystemCanvas
      label={label}
      note={note}
      variant={variant}
      className="bs-canvas--specimen bs-canvas--ovr-map"
    >
      <div className="ovr-map-specimen">{children}</div>
    </BrandSystemCanvas>
  )
}
