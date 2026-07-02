import type { BrandSystemNavItem } from './types'

export const replenishHealthNavItems: BrandSystemNavItem[] = [
  { id: 'bs-overview', label: 'Overview' },
  { id: 'bs-brand', label: 'Brand Identity' },
  { id: 'bs-foundations', label: 'Foundations' },
  { id: 'bs-components', label: 'Components' },
  { id: 'bs-patterns', label: 'UI Patterns' },
]

export const replenishHealthPrinciples = {
  brand: [
    'Six pillar cards anchor the brand voice: clarity, care, momentum, trust, energy, and balance.',
    'Each pillar uses a distinct accent header so values stay scannable in product and marketing surfaces.',
    'Rounded-top column shapes carry through cards, panels, and navigation for a calm, approachable feel.',
  ],
  interface: [
    'Dark navy base with high-contrast cyan accents keeps health data readable without feeling clinical.',
    'Generous radius, pill inputs, and soft elevation separate layers without heavy borders.',
    'Status semantics (success, warning, danger) stay consistent across buttons, chips, and chart highlights.',
  ],
} as const
