export const SITE_URL = 'https://lukelibby.com'

export const siteManifest = {
  name: 'Luke Libby',
  tagline: 'Creative Technologist and Product Builder',
  summary:
    'I design and build the systems behind useful digital products — turning messy workflows into clear interfaces, prototypes, AI tools, and internal platforms. Portfolio covers AI workflows, internal tools, outdoor products, and learning systems.',
  positioning:
    'Creative technologist and product builder with ten-plus years at Pluralsight and freelance work across AI systems, video production, hands-on labs, and practical software.',
  contact: 'https://lukelibby.com/#contact',
  resumePdf: 'https://lukelibby.com/resume.pdf',
  linkedIn: 'https://www.linkedin.com/in/luke-libby1/',
  canonicalNote:
    'Canonical project URLs use /work/:slug. Legacy /stories/*, /case-studies/*, and /v2/* paths redirect to the current pages. Prefer OVRmaps (not GearTraxx) for the outdoor maps product.',
}

export const publicPages = [
  {
    path: '/',
    title: 'Home',
    description:
      'Luke Libby — Creative Technologist and Product Builder. Gallery of published product work: AI workflows, internal tools, outdoor products, and learning systems.',
    section: 'Site',
  },
  {
    path: '/work',
    title: 'Work archive',
    description:
      'Archive index of product case studies and brand systems. Prefer individual /work/:slug project pages for current write-ups.',
    section: 'Site',
  },
  {
    path: '/work/ovrmaps',
    title: 'OVRmaps',
    description:
      'Founded outdoor maps product (formerly referenced as GearTraxx): maps, GPS recording, trail observations, and community sharing. Published mobile + web.',
    section: 'Work',
  },
  {
    path: '/work/wyldtracks',
    title: 'WyldTracks',
    description:
      'Independent wildlife field journal: photo-first capture, evidence-backed IDs, GBIF validation, and a personal observation record. Live at wyldtracks.com.',
    section: 'Work',
  },
  {
    path: '/work/play-it-pro',
    title: 'Play It Pro',
    description:
      'Independent music education platform for teachers, students, and tutorial authors: structured lessons, learning paths, and a curated tutorial library.',
    section: 'Work',
  },
  {
    path: '/work/slidekit',
    title: 'SlideKit',
    description:
      'PowerPoint standards add-in. Slide review time down ~28% and slide creation time down ~34% by catching presentation problems before video production.',
    section: 'Work',
  },
  {
    path: '/work/videokit',
    title: 'VideoKit',
    description:
      'Internal AI-assisted video review workflow for findings, status, and standards checks in one place. Reviewers reported about 30% less time in review.',
    section: 'Work',
  },
  {
    path: '/work/plottr',
    title: 'Plottr',
    description:
      'Presentation review product: import a deck, check it against standards, and export actionable findings without treating the original file as the only source of truth.',
    section: 'Work',
  },
  {
    path: '/work/luma',
    title: 'Luma',
    description:
      'Technology-course review system for objectives, concepts, procedures, and tools. Content quality review dropped by about 90% via structured spot-checks.',
    section: 'Work',
  },
  {
    path: '/work/ai-lab-production',
    title: 'AI-Assisted Lab Production',
    description:
      'AI-assisted hands-on lab production workflow that speeds drafting while keeping code checks, instructional judgment, and final approval with a person.',
    section: 'Work',
  },
  {
    path: '/brand-systems/terrapin-outdoors',
    title: 'Terrapin Outdoors',
    description:
      'Map-first outdoor platform design system with foundations, map shells, and field-ready components (supports OVRmaps).',
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
  // Retired v1 archive HTML still linked /stories/* — keep /work on the SPA shell.
  '/work',
  '/work/ovrmaps',
  '/work/wyldtracks',
  '/work/play-it-pro',
  '/work/slidekit',
  '/work/videokit',
  '/work/plottr',
  '/work/luma',
  '/work/ai-lab-production',
]
