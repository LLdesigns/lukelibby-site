export const resumeMeta = {
  name: 'Luke Libby',
  location: 'Farmington, Utah, United States',
  portfolioNote: 'Portfolio / Case Studies Available Upon Request',
  linkedInUrl: 'https://www.linkedin.com/in/luke-libby1/',
  linkedInHandle: 'luke-libby1',
  roles: [
    'Creative Technologist',
    'Product Builder',
    'Technical Content Producer',
  ],
} as const

/** Served from /public/resume.pdf — keep the download name in sync with the source file. */
export const resumePdf = {
  href: '/resume.pdf',
  filename: 'Luke Libby-Resume-2026.pdf',
} as const

export const resumeSummary = `Creative technologist and product builder with ten-plus years at Pluralsight and freelance work across AI systems, learning products, video production, and practical software.

I design products, systems, and the relationships inside learning content—then use AI-assisted development to implement them. That includes video and presentation tools, knowledge-graph prototypes for course review, and 60+ hands-on labs in Python, R, and SQL.

I care about strong UX, outdoor culture, and education, and I like building tools that help people tackle hard problems with more confidence.`

export type ResumeSectionId =
  | 'summary'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'education'
  | 'strengths'

export const resumeSections: { id: ResumeSectionId; label: string }[] = [
  { id: 'summary', label: 'Summary' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Core Skills' },
  { id: 'education', label: 'Education' },
  { id: 'strengths', label: 'Strengths' },
]

export const skillCategories = [
  {
    id: 'product',
    title: 'Product',
    skills: [
      'Product strategy',
      'UX/UI design',
      'Instructional design',
      'Skill taxonomies',
      'Product documentation',
    ],
  },
  {
    id: 'software',
    title: 'Software',
    skills: [
      'AI-assisted application development',
      'Rapid prototyping',
      'Cursor',
      'Claude Code',
      'React / TypeScript',
      'Flutter / FlutterFlow',
      'Supabase',
      'Python',
    ],
  },
  {
    id: 'ai',
    title: 'AI',
    skills: [
      'Knowledge graph design',
      'Ontology modeling',
      'AI workflow design',
      'LLM tooling & MCPs',
      'AI-assisted implementation',
    ],
  },
  {
    id: 'media',
    title: 'Media',
    skills: [
      'Video pipelines',
      'Hands-on labs',
      'Technical training',
      'Author coaching',
      'Adobe Premiere / Audition',
    ],
  },
] as const

export type SkillCategoryId = (typeof skillCategories)[number]['id']

export const experience = [
  {
    id: 'ps-creative-technologist',
    title: 'Creative Technologist',
    company: 'Pluralsight',
    period: 'Jan 2026 – Present · Remote',
    intro:
      'Building internal products and AI-assisted systems for learning and video production—designing the product, the relationships in the content, and the workflows teams use to ship.',
    contributions: [
      'Design and develop internal products such as VideoKit and SlideKit for video review, presentation standards, and production workflows.',
      'Build AI-assisted workflows and MCPs for review, QC, and delivery, including automated preflight validation.',
      'Designed and prototyped Luma, connecting learning content, objectives, concepts, and skills through a knowledge graph to support content analysis and human review.',
      'Applied ontology modeling and skill taxonomies to define relationships between learning concepts, using AI-assisted development to implement and refine those connections.',
      'Write and maintain product documentation, including internal guides and external help docs.',
      'Optimize end-to-end video pipelines with automation and tighter QC.',
    ],
    technologies: [
      'Product development',
      'Knowledge graph design',
      'Ontology modeling',
      'Skill taxonomies',
      'Instructional design',
      'AI-assisted development',
      'AI workflows',
      'MCPs',
      'Video pipelines',
      'Product documentation',
    ],
  },
  {
    id: 'ps-technical-producer',
    title: 'Technical Content Producer',
    company: 'Pluralsight',
    period: 'Sep 2021 – Jan 2026 · Remote',
    intro:
      'Designed and published 60+ hands-on learning products in Python, R, and SQL, each centered on a distinct application or technical workflow. Owned the experience from initial concept through implementation, validation, and publication.',
    contributions: [
      'Applied instructional design principles to structure learning objectives, guided tasks, and completion criteria into practical coding experiences.',
      'Used skill taxonomies to align hands-on workflows with relevant concepts and competencies.',
      'Built functional applications and supporting exercises with AI-assisted development, validating technical accuracy and expected behavior.',
      'Designed AI-assisted production processes to support lab creation, technical review, and publication.',
      'Collaborated with SMEs and authors across time zones to deliver complete, usable learning experiences.',
      'Reviewed code, configurations, and unit tests; mentored authors on tooling and development practices.',
    ],
    technologies: [
      'Product development',
      'Instructional design',
      'Skill taxonomies',
      'Learning experience design',
      'AI-assisted development',
      'Workflow design',
      'Technical validation',
    ],
  },
  {
    id: 'ps-video-production',
    title: 'Video Content Producer',
    company: 'Pluralsight',
    period: 'Aug 2019 – Sep 2021 · Salt Lake City area',
    intro:
      'Led end-to-end video production for learner-focused educational content; coached authors on tools, standards, and delivery.',
    contributions: [
      'Managed production schedules tied to business goals.',
      'Onboarded and coached authors in Pluralsight tools and best practices.',
      'Oversaw audio, visual, and post-production standards across Adobe suite workflows.',
      'Reviewed submissions and collaborated on platform and workflow evolution.',
    ],
    technologies: [
      'Adobe Creative Suite',
      'Video production',
      'Project management',
      'Author coaching',
    ],
  },
  {
    id: 'ps-production-editor',
    title: 'Production Editor',
    company: 'Pluralsight',
    period: 'May 2017 – Aug 2019 · Remote (Oklahoma)',
    intro:
      'Supported authors through course production; improved processes for faster publish times and higher author satisfaction.',
    contributions: [
      'Designed author workflows from surveys and interviews.',
      'Led author onboarding, day-to-day support, and full project management.',
      'Reviewed materials for A/V quality; performed non-linear editing to meet standards.',
      'Coordinated publication and trained new production editors.',
    ],
    technologies: [
      'Premiere Pro',
      'Audition',
      'Motion graphics',
      'Process design',
    ],
  },
  {
    id: 'ps-qa',
    title: 'QA Specialist',
    company: 'Pluralsight',
    period: 'Nov 2015 – May 2017 · Farmington, UT',
    intro:
      'Maintained quality standards for course content through review, editing, and trailer production.',
    contributions: [
      'Reviewed and edited submitted videos for company standards compliance.',
      'Created course trailers with motion graphics in Adobe tools.',
      'Developed documentation to track course errors and improve content quality.',
    ],
    technologies: ['Adobe After Effects', 'Premiere Pro', 'QA', 'Documentation'],
  },
  {
    id: 'digital-tutors',
    title: 'AV Editor',
    company: 'Digital-Tutors',
    period: 'May 2014 – Dec 2015',
    intro:
      'Managed video content quality on the Digital-Tutors platform; trailers, audio post, and documentation.',
    contributions: [
      'Updated video patches and audio work for published courses.',
      'Created course trailers with motion graphics.',
      'Edited audio to industry standards using Izotope and Adobe Audition.',
    ],
    technologies: ['After Effects', 'Premiere Pro', 'Audition', 'Izotope'],
  },
  {
    id: 'freelance',
    title: 'Freelance Designer',
    company: 'Luke Libby Design',
    period: 'Jul 2017 – Present · Remote',
    intro:
      'UI/UX design, photography, 3D modeling, graphic design, and product design for web and mobile clients.',
    contributions: [
      'Build websites and applications with FlutterFlow, Flutter, Webflow, Supabase, and Firebase.',
      'Deliver digital work that looks good and holds up in production.',
      'Combine creative direction with technical execution across product engagements.',
    ],
    technologies: [
      'FlutterFlow',
      'Flutter',
      'Webflow',
      'Supabase',
      'Firebase',
      'UI/UX',
    ],
  },
] as const

export const independentProjects = [
  {
    id: 'ovrmaps',
    title: 'OVRmaps',
    subtitle: 'Active beta',
    role: 'Founder / Product Designer / Full-Stack Builder',
    href: '/v2/work/ovrmaps',
    description:
      'I founded, designed, and built an outdoor exploration platform with offline maps, GPS route recording, trail observations, and social features for sharing routes and forming crews. Field use and conversations with riders shaped what I prioritized over a frozen map someone else had published.',
    highlights: [
      'Field riding and rider conversations set the priority: trustworthy, current status over denser map layers',
      'GPS route recording paired with place-specific trail observations people can leave for others',
      'Social sharing of routes and crews so a community can keep a place current',
      'OVRmaps Studio stays architecture exploration for trail networks; it is not released product functionality',
    ],
    technologies: [
      'Product strategy',
      'Field research',
      'UX/UI design',
      'Independent development',
      'Outdoor mapping',
    ],
  },
  {
    id: 'wyldtracks',
    title: 'WyldTracks',
    subtitle: 'Published',
    role: 'Founder / Product Designer / Full-Stack Builder',
    href: '/v2/work/wyldtracks',
    liveUrl: 'https://www.wyldtracks.com',
    description:
      'I designed, built, and launched a wildlife journal that helps people identify animals and signs, review the evidence behind AI-suggested identifications, and save their observations. The key product choice is that people can review and edit the identification before it becomes part of the saved record.',
    highlights: [
      'Photograph-first capture so a sighting is recorded before any form gets in the way',
      'AI suggests an identification; the person reviews and edits it before saving',
      'Evidence stays attached to the photograph so judgment stays with the observer',
      'Progressive depth: simple for a first encounter, more scientific detail when needed',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Supabase',
      'Edge Functions',
      'OpenAI Vision',
      'GBIF API',
      'Leaflet',
    ],
  },
  {
    id: 'play-it-pro',
    title: 'Play It Pro',
    subtitle: 'Live platform',
    role: 'Founder / Product Designer / Full-Stack Builder',
    href: '/v2/work/play-it-pro',
    description:
      'I founded, designed, and built a music education platform that connects structured tutorial authoring, teacher studio tools, and student practice. Teachers can turn lessons into a clear practice plan students can follow between sessions, instead of scattered videos, texts, and memory.',
    highlights: [
      'Lesson builder treats instruction as blocks with an objective, not a page of uploads',
      'Teacher studio tools assign structured content into real learning paths',
      'Student portal turns an assignment into an ordered practice plan after they leave the room',
      'Stack and denser layouts support different ways a music lesson needs to be taught',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Supabase',
      'EdTech product design',
      'Independent development',
    ],
  },
] as const

export const education = [
  {
    id: 'ocu',
    school: 'Oklahoma Christian University',
    degree: 'Bachelor of Arts, Animation & Game Design',
    period: '2014 – 2016',
    gpa: '3.6',
    honors: "Dean's Award, Department of Art & Design",
  },
  {
    id: 'noc',
    school: 'Northern Oklahoma College',
    degree:
      'Associate of Applied Science, Animation, Interactive Technology, Video Graphics & Special Effects',
    period: '2012 – 2014',
    gpa: '3.8',
    honors: "Dean's Award",
  },
  {
    id: 'tctc',
    school: 'Tri County Technology Center',
    degree: 'Certification, Architectural Drafting & CAD/CADD',
    period: '',
    gpa: '3.9',
    honors: '',
  },
] as const

export const additionalStrengths = [
  {
    label: 'Entrepreneurial initiative',
    detail:
      'Turns real-world problems into product concepts, working prototypes, and usable tools.',
  },
  {
    label: 'Human-centered design',
    detail:
      'Simplifies complex workflows so people can act with greater clarity and confidence.',
  },
  {
    label: 'Cross-functional collaboration',
    detail:
      'Connects creative, technical, and production teams through clear communication and shared goals.',
  },
  {
    label: 'Stakeholder storytelling',
    detail:
      'Presents product vision, demonstrations, and tradeoffs to boards and stakeholders to support decisions.',
  },
  {
    label: 'Comfort with ambiguity',
    detail:
      'Brings structure to early-stage ideas and adapts through experimentation, feedback, and iteration.',
  },
  {
    label: 'Field-informed thinking',
    detail:
      'Draws on outdoor experience to design for practical constraints and real-world use.',
  },
] as const
