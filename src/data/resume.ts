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

export const resumeSummary = `Creative technologist and product builder with ten-plus years at Pluralsight and freelance work across AI systems, video production, hands-on labs, and practical software.

I build internal tools and AI workflows for video teams, automating busywork, enforcing quality standards, and making production faster without cutting corners. Before that I designed AI-assisted lab pipelines, wrote 60+ hands-on technical labs, and ran cross-functional production from concept to publish.

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
  { id: 'skills', label: 'Core Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'strengths', label: 'Strengths' },
]

export const skillCategories = [
  {
    id: 'product',
    title: 'Product & Creative Technology',
    skills: [
      'Product Strategy',
      'Product Development',
      'AI Workflow Design',
      'UX/UI Design',
      'Rapid Prototyping',
      'Design Systems',
      'Information Architecture',
      'Systems Thinking',
      'Project Management',
      'Technical Documentation',
    ],
  },
  {
    id: 'software',
    title: 'Software & Development',
    skills: [
      'Flutter / FlutterFlow',
      'React / Vite',
      'Webflow',
      'FastAPI',
      'Supabase',
      'Firebase',
      'PostgreSQL',
      'Python',
      'Dart',
      'Figma',
      'Git / GitHub',
    ],
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    skills: [
      'Machine Learning',
      'Automation',
      'AI-Driven Content',
      'LLM Workflow Design',
      'MCP Integrations',
      'Prompt Engineering',
      'Agentic AI Concepts',
      'Preflight & QC Automation',
      'Structured Knowledge Systems',
    ],
  },
  {
    id: 'media',
    title: 'Media & Production',
    skills: [
      'Video Production Pipelines',
      'Adobe Premiere Pro / Audition',
      'Audio & Video Standards',
      'Hands-On Labs',
      'Technical Training Content',
      'Motion Graphics',
      'Author Coaching',
      'Instructional Systems',
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
      'Building internal systems and AI tooling for video teams, automating workflows, enforcing quality standards, and speeding up production.',
    contributions: [
      'Design and develop internal video production tools for cross-functional teams.',
      'Build AI-assisted workflows and MCPs for review, QC, and delivery.',
      'Implement automated preflight validation for audio, video, and export standards.',
      'Optimize end-to-end video pipelines with automation and tighter QC.',
      'Apply ML and product practices to internal production tooling.',
    ],
    technologies: [
      'Machine Learning',
      'Automation',
      'AI workflows',
      'MCPs',
      'Video pipelines',
      'Product development',
    ],
  },
  {
    id: 'ps-technical-producer',
    title: 'Technical Content Producer',
    company: 'Pluralsight',
    period: 'Sep 2021 – Jan 2026 · Remote',
    intro:
      'Guided hands-on lab development and built AI-assisted processes for technical learning content from concept through publication.',
    contributions: [
      'Led design and implementation of AI-assisted lab generation for hands-on content.',
      'Authored and published 60+ hands-on labs using AI while maintaining technical accuracy.',
      'Managed end-to-end production workflow with SMEs and authors across time zones.',
      'Reviewed code, configurations, and unit tests; mentored authors on tooling and best practices.',
      'Improved AI-assisted workflows for speed and quality over time.',
    ],
    technologies: [
      'AI-driven content',
      'Hands-on labs',
      'Author tooling',
      'Workflow design',
      'Technical review',
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
    id: 'wyldtracks',
    title: 'WyldTracks',
    subtitle: 'AI Wildlife Field Journal',
    role: 'Founder / Product Designer / Full-Stack Builder',
    href: '/stories/wyldtracks',
    liveUrl: 'https://www.wyldtracks.com',
    description:
      'Built a private-alpha AI wildlife field journal where users photograph animals and signs, review evidence-backed identifications checked against GBIF, and save observations to a personal journal.',
    highlights: [
      'Structured AI analysis contract with candidates and field marks',
      'GBIF taxonomy and occurrence validation in Edge Functions',
      'Wildlife Dossier detail UX for reviewable observations',
      'Private journal with search, filters, and signed image URLs',
      'Alpha feedback board and feature voting',
      'AI cost tracking for admin visibility',
      'Live deployment at wyldtracks.com',
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
    id: 'geartraxx',
    title: 'GearTraxx',
    subtitle: 'Outdoor Gear Tracking Platform',
    role: 'Founder / Product Designer',
    description:
      'Designed a consumer-focused platform for tracking outdoor gear, maintenance schedules, warranties, and usage analytics, aligned with an outdoor enthusiast mindset.',
    highlights: [
      'Gear organization systems',
      'Maintenance tracking',
      'Warranty management',
      'Usage analytics',
      'Outdoor activity integrations',
      'Community-oriented gear sharing concepts',
    ],
    technologies: ['Product design', 'UX systems', 'Mobile concepts'],
  },
  {
    id: 'rnd',
    title: 'Additional Product Concepts & R&D',
    subtitle: 'Exploratory builds & prototypes',
    role: 'Product Builder',
    description:
      'Ongoing exploration across education, civic tools, outdoor systems, and AI-assisted workflows.',
    highlights: [
      'AI-powered historical learning platforms',
      'Civic engagement applications',
      'Adventure mapping systems',
      'Presentation generation tooling',
      'AI-assisted educational workflows',
      'Outdoor and wildlife-focused applications',
    ],
    technologies: ['Prototyping', 'AI workflows', 'R&D'],
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
  'Entrepreneur mindset, builds products that help people tackle hard problems',
  'Outdoor enthusiast; designs tools that build confidence on new ground',
  'Bridges technical, creative, and production teams across remote collaboration',
  'Experienced public presenter, workshop facilitator, and author coach',
  'Native English proficiency; comfortable in startup-style and R&D environments',
  'Interested in AI-assisted systems, automation, and product design that ships',
] as const
