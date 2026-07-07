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
  'I’m a creative technologist with a background in design, technical content, photography, video, adventure enthusiast, and hands-on product building. My work sits at the intersection of interface design, systems thinking, and prototyping, with a focus on making complex ideas easier to understand.',
  'Outside of work, I’m usually exploring somewhere outdoors - backpacking, overlanding, biking, camping, or looking for the next place that requires a map.',
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
      'I work across teams and disciplines to get something real into use.',
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
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/#about' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
  { label: 'Consulting', href: '/#consulting' },
]

export const visibleNavLinks = navLinks.filter((link) => !link.hidden)
