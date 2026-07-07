export const consultingMeta = {
  eyebrow: 'Consulting / Hire Me',
  headline: 'Products that',
  headlineAccent: 'ship and stick',
  subheadline:
    'I help founders and teams build real software — from first concept through launch, iteration, and the lifecycle after. Not slide decks. Not throwaway demos. Products people adopt and keep using.',
  ctaPrimaryLabel: 'Start a Conversation',
  ctaSecondaryLabel: 'See My Work',
} as const

export const consultingServices = [
  {
    id: 'product-development',
    title: 'Product Development',
    description:
      'Turn a fuzzy idea into a shipped product — scoped clearly, designed well, built properly, and ready for real users.',
    bullets: [
      '0→1 strategy: what to build first, and what to cut',
      'UX, architecture, and build in tight loops',
      'Launch-ready products — not demo-ware',
    ],
  },
  {
    id: 'product-lifecycle',
    title: 'Product Lifecycle',
    description:
      'The work doesn’t stop at v1. I help you evolve the product as you learn — new features, better workflows, less friction.',
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
      'Embed AI where it actually improves the product — smarter workflows, better outputs, less manual work — without the hype.',
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
      'Custom software for teams outgrowing spreadsheets and duct-taped tools — dashboards, ops systems, and platforms people rely on daily.',
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
      'Understand the problem, the users, and what success looks like — before committing to a build.',
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
      'Build in focused cycles — ship early, learn fast, refine based on real feedback.',
  },
  {
    step: '04',
    title: 'Deliver & evolve',
    description:
      'Launch, hand off cleanly, and keep improving as the product moves through its lifecycle.',
  },
] as const

export const consultingFit = [
  'You need a product built — not another strategy deck',
  'You want one person who can think in product and ship in code',
  'Your team has outgrown spreadsheets and manual workflows',
  'You are adding AI to a product and need it done responsibly',
  'You care about UX and long-term maintainability, not buzzwords',
] as const

export const consultingProof = {
  intro:
    'Ten-plus years building at Pluralsight and shipping products end to end — from AI field tools to education platforms and production automation.',
  highlights: [
    {
      label: 'WyldTracks',
      detail: 'AI-powered field journal — full product from vision pipeline to user journal',
      href: '/stories/wyldtracks',
    },
    {
      label: 'Presentation Builder',
      detail: 'Production workflow product turning messy decks into structured, usable data',
      href: '/stories/presentation-builder',
    },
    {
      label: 'Play It Pro',
      detail: 'Music education platform with lesson builders, paths, and a tutorial library',
      href: '/stories/play-it-pro',
    },
  ],
} as const

export const consultingCta = {
  title: 'Building something?',
  description:
    'Tell me what you are working on. I take on a small number of engagements at a time.',
  buttonLabel: 'Get in touch',
} as const
