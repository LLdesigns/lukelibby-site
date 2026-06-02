import type { CaseStudyMetaChip } from '../caseStudies'

export interface FeatureItem {
  title: string
  description: string
}

export interface ProductSystemDetail {
  slug: string
  eyebrow: string
  title: string
  subtitle: string
  metaChips: CaseStudyMetaChip[]
  heroVisualLabel: string
  overview: string
  myRole: string
  myRoleFocus: string[]
  coreIdeaIntro: string
  productLoop: string[]
  coreIdeaClosing: string
  features: FeatureItem[]
  dataObjects: string[]
  relationships: string[]
  mvpScope: string[]
  deferredFeatures: string
}
