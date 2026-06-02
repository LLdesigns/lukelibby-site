import { skatespot } from './skatespot'
import type { ProductSystemDetail } from './types'

export type ProductSystemSlug = 'skatespot'

export const productSystemsBySlug: Record<
  ProductSystemSlug,
  ProductSystemDetail
> = {
  skatespot,
}

export function getProductSystem(slug: string): ProductSystemDetail | undefined {
  if (slug in productSystemsBySlug) {
    return productSystemsBySlug[slug as ProductSystemSlug]
  }
  return undefined
}
