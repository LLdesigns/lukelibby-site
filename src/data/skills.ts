export const focusAreas = [
  'AI workflows',
  'Internal tools',
  'Product systems',
  'Prototyping',
] as const

export const builderNoteTags = [
  'AI Workflows',
  'Internal Tools',
  'Product Design',
  'Prototyping',
  'Figma',
  'React',
  'FlutterFlow',
  'Supabase',
] as const

export const builderNotesParagraphs = [
  'I am a creative technologist with a background in design, technical content, photo, video, and hands-on product building. I design interfaces and prototypes and try to make complex technical work easier to follow.',
  'Outside of work, I am usually exploring somewhere outdoors: backpacking, overlanding, biking, camping, or looking for the next place that needs a map.',
] as const

export const valueBlocks = [
  {
    title: 'Design + Systems',
    description:
      'I design systems that solve real problems and that teams can actually use.',
  },
  {
    title: 'From Rough Idea to Prototype',
    description:
      'Fast iteration, clear thinking, and shipping early to learn.',
  },
  {
    title: 'Cross-Functional Builder',
    description:
      'I work across design, engineering, and stakeholders to get something real into use.',
  },
  {
    title: 'Practical AI Thinking',
    description:
      'I use AI to speed up drafts, cut repetitive work, and keep people in control of the judgment calls.',
  },
] as const

export type NavLink = {
  label: string
  href: string
  hidden?: boolean
}

export const navLinks: NavLink[] = [
  { label: 'Work', href: '/#work' },
  { label: 'Resume', href: '/#resume' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export const visibleNavLinks = navLinks.filter((link) => !link.hidden)
