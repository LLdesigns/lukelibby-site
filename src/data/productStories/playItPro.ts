import type { ProductStoryDetail } from './types'

/** Card + navigation metadata. Full story lives in playItProStory.ts */
export const playItPro: ProductStoryDetail = {
  slug: 'play-it-pro',
  number: '03',
  status: 'full',
  description:
    'A music education platform for teachers, students, and tutorial authors: structured lessons, learning paths, and a curated tutorial library.',
  tags: [
    'EdTech',
    'Music Education',
    'Product Design',
    'Teacher Tools',
    'React + Supabase',
  ],
  imageLabel: 'Play It Pro lesson builder',
  cardImageSrc: '/images/playitpro/lesson-builder.png',
  cardImageAlt: 'Play It Pro lesson builder with block-based content tools',
  eyebrow: 'PRODUCT STORY 03 / MUSIC EDUCATION',
  title: 'Play It Pro',
  subtitle: 'A music education platform for teachers, students, and tutorial authors.',
  metaChips: [
    { label: 'Role', value: 'Founder / Product Designer / Builder' },
    { label: 'Focus', value: 'Music education, teacher tools, tutorial authoring' },
    { label: 'Stack', value: 'React + TypeScript + Supabase' },
    { label: 'Status', value: 'Live product / active platform' },
  ],
  heroVisualLabel: 'Play It Pro lesson builder',
  heroImageSrc: '/images/playitpro/lesson-builder.png',
  heroImageAlt: 'Play It Pro lesson builder workspace',
  heroImageWidth: 1400,
  heroImageHeight: 900,
  context: '',
  myRole: '',
  nextSlug: 'skatespot',
}
