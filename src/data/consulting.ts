export const consultingMeta = {
  eyebrow: 'Consulting / Hire Me',
  headline: 'Products that',
  headlineAccent: 'ship and stick',
  subheadline:
    'I help founders and teams build software that ships and stays useful. Real products, not pitch decks or throwaway demos.',
  ctaPrimaryLabel: 'Start a Conversation',
  ctaSecondaryLabel: 'See My Work',
} as const

export const consultingServices = [
  {
    id: 'product-development',
    title: 'Product Development',
    description:
      'Take an early idea and turn it into something you can put in front of users. Scoped, designed, built, and ready for real use.',
    bullets: [
      '0→1 strategy: what to build first, and what to cut',
      'UX, architecture, and build in tight loops',
      'Shipped product, not a demo',
    ],
  },
  {
    id: 'product-lifecycle',
    title: 'Product Lifecycle',
    description:
      'Most products need more than v1. I help you add features, clean up workflows, and fix friction as you learn what works.',
    bullets: [
      'Roadmaps grounded in usage and business goals',
      'Iteration without breaking what already works',
      'Documentation and handoff your team can run with',
    ],
  },
  {
    id: 'ai-products',
    title: 'AI-Augmented Products',
    description:
      'Add AI where it helps: faster workflows, better output, less manual work. Skip the hype.',
    bullets: [
      'AI features scoped to real user jobs',
      'Quality gates and human review where it matters',
      'Practical pipelines you can afford to run',
    ],
  },
  {
    id: 'internal-products',
    title: 'Internal Products & Platforms',
    description:
      'Custom tools for teams that have outgrown spreadsheets and glued-together apps. Dashboards, ops systems, and platforms people use every day.',
    bullets: [
      'Workflow products that replace manual busywork',
      'Role-based tools with clear permissions',
      'Systems designed to grow with the team',
    ],
  },
] as const

export const consultingStrengths = [
  'End-to-end product ownership',
  'Design + engineering together',
  'Founder-minded execution',
  'AI where it earns its keep',
  'Built to last past launch',
] as const

export const consultingProcess = [
  {
    step: '01',
    title: 'Discover',
    description:
      'Understand the problem, the users, and what success looks like before anyone commits to a build.',
  },
  {
    step: '02',
    title: 'Define',
    description:
      'Shape the product: scope, milestones, UX direction, and a plan you can stake a timeline on.',
  },
  {
    step: '03',
    title: 'Develop',
    description:
      'Build in focused cycles. Ship early, learn fast, refine from real feedback.',
  },
  {
    step: '04',
    title: 'Deliver & evolve',
    description:
      'Launch, hand off cleanly, and keep improving as the product grows.',
  },
] as const

export const consultingFit = [
  'You need a product built, not another strategy deck',
  'You want one person who can think in product and ship in code',
  'Your team has outgrown spreadsheets and manual workflows',
  'You are adding AI to a product and need it done responsibly',
  'You care about UX and long-term maintainability, not buzzwords',
] as const

export const consultingProof = {
  intro:
    'Ten-plus years at Pluralsight building and shipping products end to end: AI field tools, education platforms, and production automation.',
  highlights: [
    {
      label: 'WyldTracks',
      detail: 'AI field journal from vision pipeline through to the user-facing journal',
      href: '/work/wyldtracks',
    },
    {
      label: 'Presentation Builder',
      detail: 'Production workflow product turning messy decks into structured, usable data',
      href: '/work/plottr',
    },
    {
      label: 'Play It Pro',
      detail: 'Music education platform with lesson builders, paths, and a tutorial library',
      href: '/work/play-it-pro',
    },
  ],
} as const

export const consultingCta = {
  title: 'Building something?',
  description:
    'Tell me what you are working on. I take on a small number of engagements at a time.',
  buttonLabel: 'Get in touch',
} as const
