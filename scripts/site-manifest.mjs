export const SITE_URL = 'https://lukelibby.com'

export const siteManifest = {
  name: 'Luke Libby',
  tagline: 'Creative Technologist and Product Builder',
  summary:
    'Portfolio of product work by Luke Libby — AI workflows, internal tools, outdoor products, and learning systems.',
  contact: 'https://lukelibby.com/#contact',
  resumePdf: 'https://lukelibby.com/resume.pdf',
  linkedIn: 'https://www.linkedin.com/in/luke-libby1/',
}

export const publicPages = [
  {
    path: '/',
    title: 'Home',
    description:
      'Luke Libby — Creative Technologist and Product Builder. AI workflows, internal tools, and digital systems.',
    section: 'Site',
  },
  {
    path: '/work',
    title: 'Work archive',
    description:
      'Archive of product stories, brand systems, and earlier work by Luke Libby.',
    section: 'Site',
  },
  {
    path: '/work/ovrmaps',
    title: 'OVRmaps',
    description:
      'Outdoor platform for maps, GPS recording, trail observations, and community sharing.',
    section: 'Work',
  },
  {
    path: '/work/wyldtracks',
    title: 'WyldTracks',
    description:
      'Wildlife field journal with evidence-backed IDs, GBIF validation, and a personal observation record.',
    section: 'Work',
  },
  {
    path: '/work/play-it-pro',
    title: 'Play It Pro',
    description:
      'Music education platform for teachers, students, and tutorial authors.',
    section: 'Work',
  },
  {
    path: '/work/slidekit',
    title: 'SlideKit',
    description:
      'PowerPoint add-in for catching presentation standards problems before video production.',
    section: 'Work',
  },
  {
    path: '/work/videokit',
    title: 'VideoKit',
    description:
      'Internal video review workflow for findings, status, and standards checks in one place.',
    section: 'Work',
  },
  {
    path: '/work/plottr',
    title: 'Plottr',
    description:
      'Presentation review that imports a deck, checks it, and exports actionable findings.',
    section: 'Work',
  },
  {
    path: '/work/luma',
    title: 'Luma',
    description:
      'Technology-course review system for objectives, concepts, procedures, and tools.',
    section: 'Work',
  },
  {
    path: '/work/ai-lab-production',
    title: 'AI-Assisted Lab Production',
    description:
      'AI-assisted hands-on lab production workflow with human review gates intact.',
    section: 'Work',
  },
  {
    path: '/brand-systems/terrapin-outdoors',
    title: 'Terrapin Outdoors',
    description:
      'Map-first outdoor platform design system with foundations, map shells, and field-ready components.',
    section: 'Brand & Interface Systems',
  },
  {
    path: '/brand-systems/replenish-health',
    title: 'Replenish Health',
    description:
      'Dark-mode design system for a health platform with brand pillars, tokens, and dashboard UI.',
    section: 'Brand & Interface Systems',
  },
]

export const staticAssets = [
  {
    path: '/resume.pdf',
    title: 'Resume PDF',
    description: 'Downloadable resume for Luke Libby.',
    section: 'Files',
  },
]

/** Routes that get the Vite SPA shell (no stale crawl HTML). */
export const spaShellRoutes = [
  '/discovery',
  '/auth',
  '/auth/reset-password',
  '/work/ovrmaps',
  '/work/wyldtracks',
  '/work/play-it-pro',
  '/work/slidekit',
  '/work/videokit',
  '/work/plottr',
  '/work/luma',
  '/work/ai-lab-production',
]
