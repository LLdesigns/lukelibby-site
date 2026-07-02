export type BrandSystemSlug = 'terrapin-outdoors' | 'replenish-health'

export type BrandSystemMeta = {
  slug: BrandSystemSlug
  title: string
  description: string
  statusLabel: string
  tags: string[]
}

export type BrandSystemNavItem = {
  id: string
  label: string
}

export const brandSystemNavItems: BrandSystemNavItem[] = [
  { id: 'bs-overview', label: 'Overview' },
  { id: 'bs-foundations', label: 'Foundations' },
  { id: 'bs-components', label: 'Components' },
  { id: 'bs-patterns', label: 'Patterns' },
  { id: 'bs-themes', label: 'Theme Variants' },
  { id: 'bs-specimens', label: 'Live Specimens' },
]
