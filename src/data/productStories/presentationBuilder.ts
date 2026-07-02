import type { ProductStoryDetail } from './types'

/** Card + navigation metadata. Full story lives in presentationBuilderStory.ts */
export const presentationBuilder: ProductStoryDetail = {
  slug: 'presentation-builder',
  number: '02',
  status: 'full',
  description:
    'An anonymized product story on turning messy PowerPoint workflows into structured, AI-ready slide data through a custom JSON schema.',
  tags: ['AI Tools', 'Office Add-ins', 'Structured Data', 'Slide Systems', 'Enterprise'],
  imageLabel: 'Workflow diagram',
  cardImageSrc: '/images/case-studies/presentation-builder/workflow-diagram.png',
  cardImageAlt:
    'Sanitized workflow diagram: presentation to programmatic slide pipeline',
  eyebrow: 'PRODUCT STORY 02 / ANONYMIZED',
  title: 'Secure Presentation Workflow Add-in',
  subtitle: 'Turning messy PowerPoint workflows into structured slide data.',
  metaChips: [
    { label: 'Role', value: 'Creative Technologist / Product Designer / Builder' },
    { label: 'Type', value: 'AI Product / Enterprise Office Add-in' },
    {
      label: 'Focus',
      value: 'PowerPoint add-in, JSON schema, standards checking, AI-ready slide data',
    },
    { label: 'Status', value: 'Anonymized product story' },
  ],
  privacyNote:
    'This story is intentionally sanitized. Product names, internal platforms, and design system specifics have been generalized. Diagrams recreate the workflow shape without exposing company IP.',
  heroVisualLabel: 'Presentation-to-programmatic slide workflow',
  heroImageSrc: '/images/case-studies/presentation-builder/workflow-diagram.png',
  heroImageAlt:
    'Workflow diagram showing inputs, extraction, JSON schema, editing, validation, AI layer, and outputs',
  heroImageWidth: 1024,
  heroImageHeight: 576,
  context: '',
  myRole: '',
  nextSlug: 'play-it-pro',
}
