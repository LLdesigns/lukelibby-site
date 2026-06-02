export type WorkItem = {
  id: string
  title: string
  description: string
  tags: string[]
  statusLabel: string
  imageLabel: string
  imageSrc?: string
  imageAlt?: string
  href: string | null
  ctaLabel: string
}

export const workPageIntro =
  'Work I have shipped or am still building — case studies, product systems, UI explorations, and side-project prototypes.'

export const workPositioningLine =
  'I design and build the systems behind digital products — interfaces, prototypes, SQL data models, AI workflows, and internal tools.'

export const sectionIntros = {
  caseStudies:
    'Longer write-ups on product problems, process, and what actually shipped.',
  productSystems:
    'Schemas, flows, and app structure behind product ideas.',
  selectedWork:
    'Visual and interaction design — branding, widgets, UI explorations, and smaller prototypes.',
  workLibrary:
    'Extra logos, layouts, app sketches, and experiments that do not need their own page.',
} as const

export const caseStudies: WorkItem[] = [
  {
    id: 'ai-assisted-learning',
    title: 'AI-Assisted Learning Workflow',
    description:
      'An anonymized case study on using AI inside the workflow for hands-on technical learning content — creation, review, and production.',
    tags: [
      'AI Workflow Design',
      'Learning Systems',
      'Content Production',
      'Process Design',
    ],
    statusLabel: 'Case Study',
    imageLabel: 'Lab production workflow',
    imageSrc: '/images/case-studies/hands-on-ai-flow/aidiaflow.png',
    imageAlt: 'Sanitized AI-assisted lab production workflow diagram',
    href: '/case-studies/ai-lab-production',
    ctaLabel: 'View Case Study',
  },
  {
    id: 'secure-presentation-addin',
    title: 'Secure Presentation Workflow Add-in',
    description:
      'An anonymized Office add-in prototype for authenticated enterprise taskpanes — Azure app registration, Entra ID groups, role-based access, and a React/HTML UI.',
    tags: [
      'Office Add-ins',
      'Azure',
      'Entra ID',
      'React',
      'Authentication',
      'Internal Tools',
    ],
    statusLabel: 'Case Study',
    imageLabel: 'Secure taskpane prototype',
    imageSrc:
      '/images/case-studies/presentation-builder/workflow-diagram.png',
    imageAlt: 'Abstract secure presentation workflow prototype screens',
    href: '/case-studies/presentation-builder',
    ctaLabel: 'View Case Study',
  },
  {
    id: 'play-it-pro',
    title: 'Play It Pro Lesson System',
    description:
      'Music learning concept with reusable lesson blocks, instructor workflows, and interactive practice tools.',
    tags: [
      'EdTech',
      'Product Design',
      'Music Learning',
      'Lesson Systems',
      'Creator Tools',
    ],
    statusLabel: 'Case Study / Concept',
    imageLabel: 'Lesson system concept',
    href: null,
    ctaLabel: 'Coming Soon',
  },
  {
    id: 'geartraxx',
    title: 'GearTraxx Gear Tracking App',
    description:
      'Outdoor gear tracker for equipment, maintenance, warranties, and flexible custom fields.',
    tags: [
      'Product Design',
      'Supabase',
      'Data Modeling',
      'Outdoor Apps',
      'Gear Tracking',
    ],
    statusLabel: 'Product Case Study / Concept',
    imageLabel: 'Gear tracking app concept',
    href: null,
    ctaLabel: 'Coming Soon',
  },
  {
    id: 'skatespot',
    title: 'Skatespot Discovery App',
    description:
      'A map-based skateboarding app concept for finding, saving, and verifying real-world skate spots through clips and community proof.',
    tags: [
      'Map UX',
      'Product Design',
      'Supabase',
      'Social Discovery',
      'Data Modeling',
    ],
    statusLabel: 'Case Study / Concept',
    imageLabel: 'Skatespot map & clip discovery',
    href: '/product-systems/skatespot',
    ctaLabel: 'View System',
  },
]

export const productSystems: WorkItem[] = [
  {
    id: 'dog-friendly-places',
    title: 'Dog-Friendly Places Data System',
    description:
      'Map-based place discovery with categories, amenities, weather notes, user suggestions, and admin verification.',
    tags: [
      'Map UX',
      'Product Architecture',
      'Data Modeling',
      'Local Search',
      'Admin Tools',
    ],
    statusLabel: 'Product System',
    imageLabel: 'Places data architecture',
    href: null,
    ctaLabel: 'Coming Soon',
  },
  {
    id: 'geartraxx-widgets',
    title: 'GearTraxx Widget Architecture',
    description:
      'A flexible gear data model using reusable widgets, custom attributes, categories, maintenance records, warranties, and activity history.',
    tags: [
      'Schema Design',
      'Product Systems',
      'Custom Attributes',
      'Supabase',
      'App Architecture',
    ],
    statusLabel: 'Product System',
    imageLabel: 'Widget schema model',
    href: null,
    ctaLabel: 'Coming Soon',
  },
  {
    id: 'compliance-engine',
    title: 'Compliance Engine',
    description:
      'Rules-based checks for content, workflows, or submitted data against standards and review criteria.',
    tags: [
      'Rules Engines',
      'Workflow Systems',
      'Compliance Logic',
      'Product Architecture',
      'Data Systems',
    ],
    statusLabel: 'Product System / Concept',
    imageLabel: 'Compliance rules engine',
    href: null,
    ctaLabel: 'Coming Soon',
  },
]

export const selectedWork: WorkItem[] = [
  {
    id: 'doggo-branding',
    title: 'DogGo Branding & Map Markers',
    description:
      'A visual identity and map marker system for a dog-friendly location discovery app, including logo explorations, category icons, color palettes, and map UI elements.',
    tags: ['Branding', 'Logo Design', 'Icon Design', 'Map UI', 'Visual Systems'],
    statusLabel: 'Selected Work',
    imageLabel: 'Brand & map markers',
    href: null,
    ctaLabel: 'Coming Soon',
  },
  {
    id: 'notation-block',
    title: 'Interactive Notation Block',
    description:
      'Notation block for music lessons — structured, interactive lesson content in one reusable component.',
    tags: ['EdTech', 'Music UX', 'Interactive Learning', 'UI Design'],
    statusLabel: 'Selected Work',
    imageLabel: 'Notation block UI',
    href: null,
    ctaLabel: 'Coming Soon',
  },
  {
    id: 'sequencer-block',
    title: 'Sequencer Block',
    description:
      'A grid-based rhythm sequencing block for interactive music lessons, supporting visual timing, pattern building, and playback-based learning.',
    tags: [
      'Music UX',
      'Interaction Design',
      'Learning Tools',
      'Product Design',
    ],
    statusLabel: 'Selected Work',
    imageLabel: 'Sequencer block UI',
    href: null,
    ctaLabel: 'Coming Soon',
  },
  {
    id: 'warranty-widget',
    title: 'Warranty Tracking Widget',
    description:
      'Widget for warranty dates, company info, receipts, and claim notes.',
    tags: ['UX Design', 'Product Systems', 'Widget Design', 'App Features'],
    statusLabel: 'Selected Work',
    imageLabel: 'Warranty widget UI',
    href: null,
    ctaLabel: 'Coming Soon',
  },
  {
    id: 'feedback-flow',
    title: 'Feedback Flow',
    description:
      'Simple feedback flow for alpha testers — bugs, ideas, and gut-check on the experience.',
    tags: [
      'UX Research',
      'Feedback Design',
      'Product Testing',
      'UX Writing',
    ],
    statusLabel: 'Selected Work',
    imageLabel: 'Feedback flow screens',
    href: null,
    ctaLabel: 'Coming Soon',
  },
  {
    id: 'hero-image-system',
    title: 'Hero Image System',
    description:
      'Abstract hero art for case studies and product pages — strategy, AI workflows, learning systems, app architecture.',
    tags: ['Visual Design', 'Art Direction', 'Website Design', 'AI Imagery'],
    statusLabel: 'Selected Work',
    imageLabel: 'Hero illustration set',
    href: null,
    ctaLabel: 'Coming Soon',
  },
]

export const workLibrary: WorkItem[] = [
  {
    id: 'logo-collection',
    title: 'Logo Design Collection',
    description: 'Selected logo explorations and visual identity concepts.',
    tags: ['Branding', 'Logo Design'],
    statusLabel: 'Library',
    imageLabel: 'Logo explorations',
    href: null,
    ctaLabel: 'Coming Soon',
  },
  {
    id: 'landing-pages',
    title: 'Landing Page Concepts',
    description:
      'Website and landing page layouts for apps, services, and product ideas.',
    tags: ['Web Design', 'UI'],
    statusLabel: 'Library',
    imageLabel: 'Landing page layouts',
    href: null,
    ctaLabel: 'Coming Soon',
  },
  {
    id: 'app-ui-experiments',
    title: 'App UI Experiments',
    description:
      'Mobile and web interface explorations for early-stage product ideas.',
    tags: ['UI Design', 'Product Design'],
    statusLabel: 'Library',
    imageLabel: 'UI experiments',
    href: null,
    ctaLabel: 'Coming Soon',
  },
  {
    id: 'ai-history-video',
    title: 'AI Historical Figure Video Concept',
    description:
      'Experimental short-form video idea — historical figures, told in a new format.',
    tags: ['AI Media', 'History', 'Creative Tech'],
    statusLabel: 'Library',
    imageLabel: 'Media concept frames',
    href: null,
    ctaLabel: 'Coming Soon',
  },
  {
    id: 'hiking-survival-game',
    title: 'Procedural Hiking Survival Game',
    description:
      'A game systems concept for an endless hiking survival experience with procedural weather, fatigue, shelter, and exploration mechanics.',
    tags: ['Game Design', 'Systems Design'],
    statusLabel: 'Library',
    imageLabel: 'Game systems sketch',
    href: null,
    ctaLabel: 'Coming Soon',
  },
  {
    id: 'food-truck-brand',
    title: 'Food Truck Brand Concept',
    description:
      'A restaurant concept exploring menu strategy, positioning, and brand direction.',
    tags: ['Brand Strategy', 'Concept Design'],
    statusLabel: 'Library',
    imageLabel: 'Brand concept',
    href: null,
    ctaLabel: 'Coming Soon',
  },
  {
    id: 'civic-history-app',
    title: 'Civic History App',
    description:
      'A civic learning concept connecting history, public knowledge, and local government information.',
    tags: ['Civic Tech', 'Learning Design'],
    statusLabel: 'Library',
    imageLabel: 'Civic learning UI',
    href: null,
    ctaLabel: 'Coming Soon',
  },
  {
    id: 'warranty-flow',
    title: 'Outdoor Gear Warranty Flow',
    description:
      'A focused UX flow for tracking product warranties, receipts, claims, and support details.',
    tags: ['UX Flow', 'Product Design'],
    statusLabel: 'Library',
    imageLabel: 'Warranty flow screens',
    href: null,
    ctaLabel: 'Coming Soon',
  },
  {
    id: 'music-lesson-builder',
    title: 'Music Lesson Builder Concepts',
    description:
      'Interface explorations for building modular music lessons with reusable interactive blocks.',
    tags: ['EdTech', 'Creator Tools'],
    statusLabel: 'Library',
    imageLabel: 'Lesson builder UI',
    href: null,
    ctaLabel: 'Coming Soon',
  },
  {
    id: 'skate-feed',
    title: 'Skate Feed Prototype',
    description:
      'A social feed concept where short-form skate clips are tied directly to real-world skatespots.',
    tags: ['Social UX', 'Map UX', 'Video Feed'],
    statusLabel: 'Library',
    imageLabel: 'Skate feed prototype',
    href: null,
    ctaLabel: 'Coming Soon',
  },
]

/** Featured case studies for homepage preview */
export const homepageFeaturedCaseStudies = caseStudies.filter(
  (item) => item.href !== null,
)
