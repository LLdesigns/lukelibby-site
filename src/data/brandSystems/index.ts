import { productSystems } from '../work'
import type { BrandSystemMeta, BrandSystemSlug } from './types'

export { brandSystemNavItems } from './types'
export type { BrandSystemMeta, BrandSystemNavItem, BrandSystemSlug } from './types'

export function getBrandSystem(slug: string): BrandSystemMeta | undefined {
  const item = productSystems.find((entry) => entry.id === slug)
  if (!item) return undefined

  return {
    slug: item.id as BrandSystemSlug,
    title: item.title,
    description: item.description,
    statusLabel: item.statusLabel,
    tags: item.tags,
  }
}
