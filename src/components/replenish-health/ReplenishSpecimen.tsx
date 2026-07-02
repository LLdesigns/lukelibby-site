import type { ReactNode } from 'react'
import { BrandSystemCanvas } from '../brand-system/BrandSystemCanvas'
import { ReplenishThemeProvider } from './ReplenishThemeContext'
import { ReplenishStage } from './ReplenishStage'

type ReplenishSpecimenProps = {
  label: string
  note?: string
  variant?: 'default' | 'wide' | 'hero'
  children: ReactNode
  defaultTheme?: 'light' | 'dark'
}

export function ReplenishSpecimen({
  label,
  note,
  variant = 'default',
  children,
  defaultTheme = 'dark',
}: ReplenishSpecimenProps) {
  return (
    <ReplenishThemeProvider defaultTheme={defaultTheme}>
      <BrandSystemCanvas
        label={label}
        note={note}
        variant={variant === 'hero' ? 'wide' : variant}
        className="bs-canvas--specimen"
      >
        <ReplenishStage>{children}</ReplenishStage>
      </BrandSystemCanvas>
    </ReplenishThemeProvider>
  )
}
