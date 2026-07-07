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

  'Work I have shipped or am still building, product stories, system concepts, UI explorations, and side-project prototypes.'



export const workPositioningLine =

  'I design and build the systems behind useful digital products, turning messy workflows into clear interfaces, prototypes, AI tools, and internal platforms.'



export const sectionIntros = {

  productStories:

    'Longer write-ups on product problems, systems, and what actually shipped or is in progress.',

  productSystems:

    'Brand languages, component libraries, tokens, and interface systems behind shipped and in-progress products.',

  selectedWork:

    'Visual and interaction design, branding, widgets, UI explorations, and smaller prototypes.',

  workLibrary:

    'Extra logos, layouts, app sketches, and experiments that do not need their own page.',

} as const



export const productStories: WorkItem[] = [

  {

    id: 'wyldtracks',

    title: 'WyldTracks',

    description:

      'Private-alpha AI wildlife field journal: evidence-backed IDs, GBIF validation, and a personal observation journal at wyldtracks.com.',

    tags: ['AI Product', 'Wildlife', 'Supabase', 'Edge Functions', 'React'],

    statusLabel: 'Product Story / Live Alpha',

    imageLabel: 'WyldTracks wildlife journal',

    imageSrc: '/images/wyldtracks/wyldtracks-hero.png',

    imageAlt: 'WyldTracks landing page with wildlife field journal hero',

    href: '/stories/wyldtracks',

    ctaLabel: 'Read Story',

  },

  {

    id: 'ai-assisted-learning',

    title: 'AI-Assisted Hands-On Production Workflow',

    description:

      'An anonymized product story on using AI inside the workflow for hands-on technical learning content, creation, review, and production.',

    tags: [

      'AI Workflow Design',

      'Learning Systems',

      'Content Production',

      'Process Design',

    ],

    statusLabel: 'Product Story',

    imageLabel: 'Lab production workflow',

    imageSrc: '/images/case-studies/hands-on-ai-flow/aidiaflow.png',

    imageAlt: 'Sanitized AI-assisted lab production workflow diagram',

    href: '/stories/ai-lab-production',

    ctaLabel: 'Read Story',

  },

  {

    id: 'secure-presentation-addin',

    title: 'Secure Presentation Workflow Add-in',

    description:
      'An anonymized product story on turning messy PowerPoint workflows into structured, AI-ready slide data through a custom JSON schema.',

    tags: [

      'Office Add-ins',

      'Structured Data',

      'AI Product',

      'JSON Schema',

      'Enterprise',

    ],

    statusLabel: 'Product Story / Anonymized',

    imageLabel: 'Workflow diagram',

    imageSrc:
      '/images/case-studies/presentation-builder/workflow-diagram.png',

    imageAlt: 'Sanitized presentation-to-programmatic slide workflow diagram',

    href: '/stories/presentation-builder',

    ctaLabel: 'Read Story',

  },

  {

    id: 'play-it-pro',

    title: 'Play It Pro',

    description:
      'A music education platform for teachers, students, and tutorial authors: structured lessons, learning paths, and a curated tutorial library.',

    tags: [

      'EdTech',

      'Music Education',

      'Product Design',

      'Teacher Tools',

      'React + Supabase',

    ],

    statusLabel: 'Product Story / Live Platform',

    imageLabel: 'Play It Pro lesson builder',

    imageSrc: '/images/playitpro/lesson-builder.png',

    imageAlt: 'Play It Pro lesson builder with block-based content tools',

    href: '/stories/play-it-pro',

    ctaLabel: 'Read Story',

  },

  {

    id: 'skatespot',

    title: 'Skatespot Discovery App',

    description:

      'Spot-first skate discovery: map, clips, co-signs, and saved lists tied to real locations, designed as an alpha MVP with Supabase geo schema.',

    tags: [

      'Map UX',

      'Product Design',

      'Supabase',

      'Social Discovery',

      'Mobile Concept',

    ],

    statusLabel: 'Product Story / Concept',

    imageLabel: 'Skatespot map & clip discovery',

    imageSrc: '/images/skatespot/skatespot-thumbnail.png',

    imageAlt: 'Skatespot map and clip discovery thumbnail',

    href: '/stories/skatespot',

    ctaLabel: 'Read Story',

  },

]



export const productSystems: WorkItem[] = [

  {

    id: 'terrapin-outdoors',

    title: 'Terrapin Outdoors',

    description:

      'Map-first outdoor platform design system — foundations, map shells, content modules, and field-ready components.',

    tags: [

      'Design Systems',

      'Map UX',

      'Outdoor',

      'Component Library',

      'Light UI',

    ],

    statusLabel: 'Brand & Interface System',

    imageLabel: 'Terrapin Outdoors design system',

    imageAlt:

      'Terrapin Outdoors logo — map-first platform for outdoor planning and trail discovery',

    href: '/brand-systems/terrapin-outdoors',

    ctaLabel: 'View System',

  },

  {

    id: 'replenish-health',

    title: 'Replenish Health',

    description:

      'Dark-mode design system for a health platform: brand pillars, color tokens, typography, iconography, and dashboard UI components.',

    tags: [

      'Design Systems',

      'Health Tech',

      'Dark UI',

      'Component Library',

      'Brand Identity',

    ],

    statusLabel: 'Brand & Interface System',

    imageLabel: 'Replenish Health design system',

    imageAlt:
      'Replenish Health design system thumbnail showing brand pillar accents, color tokens, and a primary button',

    href: '/brand-systems/replenish-health',

    ctaLabel: 'View System',

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

      'Notation block for music lessons, structured, interactive lesson content in one reusable component.',

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

      'Simple feedback flow for alpha testers, bugs, ideas, and gut-check on the experience.',

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

      'Abstract hero art for product stories and project pages, strategy, AI workflows, learning systems, app architecture.',

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

      'Experimental short-form video idea, historical figures, told in a new format.',

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



/** Featured product stories for homepage preview (first four) */
export const homepageFeaturedStories = productStories
  .filter((item) => item.href !== null)
  .slice(0, 4)



/** @deprecated Use productStories */

export const caseStudies = productStories



/** @deprecated Use homepageFeaturedStories */

export const homepageFeaturedCaseStudies = homepageFeaturedStories



export const selectedWorkItems = selectedWork

export const workLibraryItems = workLibrary

