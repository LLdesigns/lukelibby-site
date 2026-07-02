import { aiLabProduction } from './aiLabProduction'
import { playItPro } from './playItPro'
import { presentationBuilder } from './presentationBuilder'
import { skatespot } from './skatespot'
import { wyldtracks } from './wyldtracks'
import type { ProductStoryDetail } from './types'

export type { ProductStoryDetail } from './types'
export type {
  FeatureItem,
  MetaChip,
  ProcessStep,
  SanitizedSlideExample,
  StoryArtifact,
  StorySnapshot,
} from './types'

export const PRODUCT_STORY_ORDER = [
  'ai-lab-production',
  'presentation-builder',
  'play-it-pro',
  'skatespot',
  'wyldtracks',
] as const

export type ProductStorySlug = (typeof PRODUCT_STORY_ORDER)[number]

export const productStoriesBySlug: Record<ProductStorySlug, ProductStoryDetail> =
  {
    'ai-lab-production': aiLabProduction,
    'presentation-builder': presentationBuilder,
    'play-it-pro': playItPro,
    skatespot,
    wyldtracks,
  }

export const productStoriesList: ProductStoryDetail[] = PRODUCT_STORY_ORDER.map(
  (slug) => productStoriesBySlug[slug],
)

export function getProductStoryHref(slug: string): string {
  return `/stories/${slug}`
}

export function getPreviousProductStorySlug(
  slug: ProductStorySlug,
): ProductStorySlug {
  const index = PRODUCT_STORY_ORDER.indexOf(slug)
  const prevIndex =
    (index - 1 + PRODUCT_STORY_ORDER.length) % PRODUCT_STORY_ORDER.length
  return PRODUCT_STORY_ORDER[prevIndex]
}

export function getNextProductStorySlug(slug: ProductStorySlug): ProductStorySlug {
  const index = PRODUCT_STORY_ORDER.indexOf(slug)
  const nextIndex = (index + 1) % PRODUCT_STORY_ORDER.length
  return PRODUCT_STORY_ORDER[nextIndex]
}

const LEGACY_SLUG_ALIASES: Record<string, ProductStorySlug> = {
  plottr: 'presentation-builder',
  nutriant: 'wyldtracks',
}

export function getProductStory(slug: string): ProductStoryDetail | undefined {
  const resolved = LEGACY_SLUG_ALIASES[slug] ?? slug
  if (resolved in productStoriesBySlug) {
    return productStoriesBySlug[resolved as ProductStorySlug]
  }
  return undefined
}
