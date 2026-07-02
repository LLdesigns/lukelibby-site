export interface MetaChip {
  label: string
  value: string
}

export interface ProcessStep {
  step: number
  title: string
  body: string
}

export interface FeatureItem {
  title: string
  description: string
}

export interface SanitizedSlideExample {
  shapeId?: string
  slideTitle: string
  objective: string
  teachingElementType: string
  bodyContent: string
  visualComponent: string
  standardsStatus: string
  aiSuggestion: string
}

export interface StoryArtifact {
  title: string
  description: string
  placeholderLabel?: string
  imageSrc?: string
  imageAlt?: string
  variant?: 'default' | 'problem-flow' | 'proposed-flow' | 'sanitized-example'
  featured?: boolean
  flowSteps?: string[]
  flowLabel?: string
  example?: SanitizedSlideExample
}

export interface StorySnapshot {
  problem: string
  myRole: string
  outcome: string
}

export interface ProductStoryDetail {
  slug: string
  number: string
  status: 'full' | 'placeholder'
  description: string
  tags: string[]
  imageLabel: string
  cardImageSrc?: string
  cardImageAlt?: string
  eyebrow: string
  title: string
  subtitle: string
  metaChips: MetaChip[]
  privacyNote?: string
  liveUrl?: string
  liveUrlLabel?: string
  heroVisualLabel: string
  heroImageSrc?: string
  heroImageAlt?: string
  heroImageWidth?: number
  heroImageHeight?: number
  snapshot?: StorySnapshot
  context: string
  myRole: string
  myRoleFocus?: string[]
  processSteps?: ProcessStep[]
  productLoop?: string[]
  coreIdeaIntro?: string
  coreIdeaClosing?: string
  features?: FeatureItem[]
  featuresImageSrc?: string
  featuresImageAlt?: string
  featuresImageSectionTitle?: string
  artifacts?: StoryArtifact[]
  approach?: string
  results?: string[]
  reflection?: string
  dataObjects?: string[]
  relationships?: string[]
  mvpScope?: string[]
  deferredFeatures?: string
  nextSlug: string
}
