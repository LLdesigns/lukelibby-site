import { siteMeta } from '../site'

export const v3Brand = {
  name: 'Luke Libby',
  location: 'Tulsa, Oklahoma',
  linkedIn: siteMeta.linkedInUrl,
  portraitSrc: '/images/v3/luke-portrait.png?v=2',
  portraitAlt: 'Pencil portrait of Luke Libby with orange half-circle and cyan accent',
} as const

export const v3Nav = [
  { label: 'Work', href: '#work' },
  { label: 'Approach', href: '#approach' },
  { label: 'About', href: '#about' },
] as const

export const v3Hero = {
  eyebrow: 'Creative Technologist',
  eyebrowRole: 'Product Designer',
  titleBefore: 'I ',
  titleHighlight: 'help',
  titleAfter: ' teams move from friction to flow',
  lede: 'I partner with organizations to uncover operational bottlenecks, redesign workflows, and build the systems, processes, and technology that help teams create and deliver better work.',
  primaryCta: { label: 'Work With Me →', href: '#contact' },
  secondaryCta: { label: 'Explore My Work', href: '#work' },
} as const

export const v3Capabilities = {
  label: 'Capabilities',
  lead: 'From discovery to working products.',
  items: [
    {
      index: '01 / Discover',
      accent: 'orange' as const,
      title: 'Business & product strategy',
      body: 'Investigate business problems, map workflows, identify constraints and define opportunities worth pursuing.',
    },
    {
      index: '02 / Build',
      accent: 'cyan' as const,
      title: 'Zero-to-one development',
      body: 'Design, prototype and implement digital products, internal platforms and AI-assisted systems around real user needs.',
    },
    {
      index: '03 / Enable',
      accent: 'green' as const,
      title: 'Technical enablement',
      body: 'Coordinate technical production, resolve blockers, train teams and support the adoption of new tools and processes.',
    },
  ],
}

export type V3SelectedCase = {
  slug: string
  href: string
  index: string
  accent: 'cyan' | 'green' | 'orange' | 'ink'
  title: string
  tags: string
  headline: string
  body: string
  result: string
  resultLabel: string
  image: string
  imageAlt: string
  imagePosition?: string
}

export const v3SelectedWork: {
  label: string
  lead: string
  moreHref: string
  moreLabel: string
  cases: V3SelectedCase[]
} = {
  label: 'Selected work / 0→1',
  lead: 'The problem determines the product. The outcome determines its value.',
  moreHref: '/work',
  moreLabel: 'More work →',
  cases: [
    {
      slug: 'videokit',
      href: '/work/videokit',
      index: '01 / Production systems',
      accent: 'cyan',
      title: 'VideoKit',
      tags: 'Workflow design · Automation',
      headline: 'Redesigning a fragmented production pipeline.',
      body: 'Courses averaged 300 days to publish. Workflow discovery exposed disconnected review tools and opportunities to consolidate work. I developed VideoKit, a unified review workspace with automated quality checks.',
      result: '40%',
      resultLabel: 'Faster time to publish',
      image: '/images/v2/videokit/review-layout.png',
      imageAlt: 'VideoKit review workspace with findings beside the video',
    },
    {
      slug: 'slidekit',
      href: '/work/slidekit',
      index: '02 / Authoring systems',
      accent: 'green',
      title: 'SlideKit',
      tags: 'Product design · Standards',
      headline: 'Making consistent content easier to create.',
      body: 'Authors struggled to find assets and apply brand standards. Discovery led to a PowerPoint add-in that consolidated resources and brought quality guidance into the authoring workflow.',
      result: '48%',
      resultLabel: 'Faster presentation production',
      image: '/images/v2/slidekit/tools-title-case.jpg',
      imageAlt: 'SlideKit tools panel beside a PowerPoint slide',
    },
    {
      slug: 'luma',
      href: '/work/luma',
      index: '03 / Applied AI',
      accent: 'orange',
      title: 'Luma',
      tags: 'AI · Content intelligence',
      headline: 'Improving content generation and review.',
      body: 'I developed AI-assisted workflows for extracting learning objectives, generating content and supporting review, with feedback from authors and the content quality team.',
      result: '15',
      resultLabel: 'Authors in pilot',
      image: '/images/v2/luma/graph-connections.jpg',
      imageAlt: 'Luma graph view with connected knowledge nodes and detail pane',
    },
    {
      slug: 'ovrmaps',
      href: '/work/ovrmaps',
      index: '04 / Independent product',
      accent: 'ink',
      title: 'OVRmaps',
      tags: 'Geospatial · Mobile · Offline',
      headline: 'Connecting trail management and exploration.',
      body: 'Designed and built a mapping platform spanning trail surveying, network authoring, offline maps and adventure recording.',
      result: '0→1',
      resultLabel: 'Independent product development',
      image: '/images/v3/ovrmaps-phone-hero.png',
      imageAlt: 'OVRmaps on a phone over a mountain landscape at sunset',
    },
  ],
}

export const v3Approach = {
  label: 'How I work',
  steps: [
    {
      index: '01',
      title: 'Discover',
      body: 'Understand people, systems and business constraints.',
    },
    {
      index: '02',
      title: 'Define',
      body: 'Prioritize opportunities and establish success criteria.',
    },
    {
      index: '03',
      title: 'Develop',
      body: 'Prototype, test and implement the solution.',
    },
    {
      index: '04',
      title: 'Validate',
      body: 'Support adoption, measure outcomes and iterate.',
    },
  ],
}

export const v3About = {
  label: 'Experience beyond the products',
  lead: 'A background in technical education, production and technology.',
  stats: [
    { value: '12', label: 'Years of experience' },
    { value: '60+', label: 'Hands-on labs authored in Python, R and SQL' },
    { value: '200+', label: 'Video courses supported through production' },
    { value: '100+', label: 'SMEs assisted through production' },
  ],
}

export const v3Contact = {
  title: 'Work with me',
  body: 'Open to conversations about consulting, product collaborations, and full-time opportunities.',
  email: 'lukelibbydesigns@gmail.com',
  ctaLabel: 'Connect on LinkedIn →',
  ctaHref: siteMeta.linkedInUrl,
  resumeLabel: 'Download Resume',
}

export type V3WorkTile = {
  id: string
  title: string
  href: string
  image: string
  imageAlt: string
  type: string
}

/** Full work index for the My Work grid page. */
export const v3AllWork: V3WorkTile[] = [
  {
    id: 'videokit',
    title: 'VideoKit',
    href: '/work/videokit',
    image: '/images/v2/videokit/review-layout.png',
    imageAlt: 'VideoKit review workspace with findings beside the video',
    type: 'Video',
  },
  {
    id: 'ovrmaps',
    title: 'OVRmaps',
    href: '/work/ovrmaps',
    image: '/images/v3/ovrmaps-phone-hero.png',
    imageAlt: 'OVRmaps on a phone over a mountain landscape at sunset',
    type: 'Mapping',
  },
  {
    id: 'slidekit',
    title: 'SlideKit',
    href: '/work/slidekit',
    image: '/images/v2/slidekit/tools-title-case.jpg',
    imageAlt: 'SlideKit tools panel beside a PowerPoint slide',
    type: 'EdTech',
  },
  {
    id: 'plottr',
    title: 'Plottr',
    href: '/work/plottr',
    image: '/images/v2/plottr/new-project.png',
    imageAlt: 'Plottr new project screen',
    type: 'Diagrams',
  },
  {
    id: 'luma',
    title: 'Luma',
    href: '/work/luma',
    image: '/images/v2/luma/graph-connections.jpg',
    imageAlt: 'Luma knowledge graph view with connected objectives and a selected node',
    type: 'Learning',
  },
  {
    id: 'wyldtracks',
    title: 'WyldTracks',
    href: '/work/wyldtracks',
    image: '/images/v2/wyldtracks-field.jpg',
    imageAlt: 'WyldTracks field journal on phone and tablet',
    type: 'Wildlife',
  },
  {
    id: 'ai-lab-production',
    title: 'AI-Assisted Lab Production',
    href: '/work/ai-lab-production',
    image: '/images/case-studies/hands-on-ai-flow/aidiaflow.png',
    imageAlt: 'AI-assisted lab production workflow diagram',
    type: 'Workflow',
  },
  {
    id: 'play-it-pro',
    title: 'Play It Pro',
    href: '/work/play-it-pro',
    image: '/images/playitpro/workspace-layout.png',
    imageAlt: 'Play It Pro lesson builder workspace',
    type: 'Music',
  },
]
