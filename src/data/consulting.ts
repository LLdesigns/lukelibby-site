export const consultingMeta = {
  eyebrow: 'Consulting / Hire Me',
  headline: 'Apps, automations, and internal tools that',
  headlineAccent: 'actually ship',
  subheadline:
    'I help teams and founders turn messy workflows into working software — AI-assisted products, automation pipelines, and practical tools people adopt.',
  ctaPrimaryLabel: 'Start a Conversation',
  ctaSecondaryLabel: 'See My Work',
} as const

export const consultingServices = [
  {
    id: 'ai-apps',
    title: 'AI-Powered Applications',
    description:
      'Custom apps that use LLMs, vision, and structured AI contracts where they add real value — not hype.',
    bullets: [
      'Product scoping and AI workflow design',
      'React + Supabase full-stack builds',
      'Human-in-the-loop review and quality gates',
      'Cost-aware AI pipelines with observability',
    ],
  },
  {
    id: 'automations',
    title: 'Workflow Automations',
    description:
      'Replace repetitive manual work with reliable automations across content, ops, and production pipelines.',
    bullets: [
      'Preflight checks, QC, and delivery automation',
      'MCP integrations and internal agent tooling',
      'Structured data pipelines for messy inputs',
      'Documentation teams can maintain',
    ],
  },
  {
    id: 'internal-tools',
    title: 'Internal Tools & Platforms',
    description:
      'Purpose-built software for teams stuck between spreadsheets and enterprise bloat.',
    bullets: [
      'Dashboards, admin tools, and review surfaces',
      'Role-based workflows and permissions',
      'Design systems that scale with the product',
      'Fast iteration from prototype to production',
    ],
  },
  {
    id: 'mvps',
    title: 'MVPs & Product Prototypes',
    description:
      'Validate ideas quickly with polished prototypes that feel real enough to test with users.',
    bullets: [
      'Rapid UX/UI and interaction design',
      'Clickable prototypes and alpha builds',
      'Technical feasibility and architecture input',
      'Clear path from proof-of-concept to v1',
    ],
  },
] as const

export const consultingStack = [
  'React / TypeScript',
  'Supabase',
  'OpenAI / LLM APIs',
  'Python / FastAPI',
  'FlutterFlow',
  'Figma',
  'MCP Integrations',
  'PostgreSQL',
  'Automation Design',
  'Product Strategy',
] as const

export const consultingProcess = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'Map the workflow, pain points, and constraints. Define what success looks like before writing code.',
  },
  {
    step: '02',
    title: 'Design & Scope',
    description:
      'Shape the product surface, AI boundaries, and a focused build plan with clear milestones.',
  },
  {
    step: '03',
    title: 'Build & Iterate',
    description:
      'Ship working software in tight loops — prototype, test with real users, refine based on feedback.',
  },
  {
    step: '04',
    title: 'Handoff & Scale',
    description:
      'Document the system, train your team, and leave you with something maintainable — not a black box.',
  },
] as const

export const consultingFit = [
  'You need an AI feature or internal tool built by someone who ships',
  'Your team has a workflow that should be automated, not babysat',
  'You want a founder-minded builder, not a slide deck consultant',
  'You need a working MVP to validate with users or stakeholders',
  'You value strong UX and practical engineering over buzzwords',
] as const

export const consultingProof = {
  intro:
    'Ten-plus years building at Pluralsight and shipping freelance products — from AI wildlife journals to presentation automation systems.',
  highlights: [
    {
      label: 'WyldTracks',
      detail: 'AI field journal with structured vision analysis and GBIF validation',
      href: '/stories/wyldtracks',
    },
    {
      label: 'Presentation Builder',
      detail: 'Turning messy PowerPoint into structured, AI-ready slide data',
      href: '/stories/presentation-builder',
    },
    {
      label: 'Play It Pro',
      detail: 'Music education platform with lesson builders and learning paths',
      href: '/stories/play-it-pro',
    },
  ],
} as const

export const consultingCta = {
  title: 'Have a project in mind?',
  description:
    'Tell me what you are trying to build. I take on a small number of consulting engagements at a time.',
  buttonLabel: 'Message on LinkedIn',
} as const
