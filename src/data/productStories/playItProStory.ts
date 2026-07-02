export interface StoryFact {
  label: string
  value: string
}

export interface ProblemCard {
  title: string
  body: string
}

export interface SystemPillar {
  title: string
  description: string
}

export interface ProductDecision {
  label: string
  title: string
  body: string
}

export interface BuildGroup {
  title: string
  items: string[]
}

export interface StoryScreenshot {
  title: string
  caption: string
  body?: string[]
  highlights?: string[]
  imageSrc: string
  imageAlt: string
  featured?: boolean
  layout?: 'default' | 'portrait'
}

export interface OutcomeCard {
  title: string
  body: string
}

export interface PlayItProStoryContent {
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    summary: string
    insight: string
    facts: StoryFact[]
    imageSrc: string
    imageAlt: string
  }
  whatINoticed: {
    paragraphs: string[]
    problems: ProblemCard[]
    bridge: string
  }
  productBet: {
    lead: string
    paragraphs: string[]
  }
  system: {
    intro: string
    flow: string[]
    pillars: SystemPillar[]
  }
  decisions: ProductDecision[]
  whatIBuilt: BuildGroup[]
  screenshots: StoryScreenshot[]
  whatChanged: {
    paragraphs: string[]
    outcomes: OutcomeCard[]
  }
  whatILearned: {
    paragraphs: string[]
  }
}

export const playItProStory: PlayItProStoryContent = {
  hero: {
    eyebrow: 'Product Story 03 / Music Education',
    title: 'Play It Pro',
    subtitle: 'A music education platform for teachers, students, and tutorial authors.',
    summary:
      'Play It Pro helps musicians turn expertise into structured lessons, student learning paths, and high-quality tutorial content. It connects in-person teacher tools with a curated tutorial library, giving instructors a better way to plan, assign, and support learning beyond the lesson room.',
    insight:
      'Knowing an instrument does not automatically mean you can teach it online.',
    facts: [
      { label: 'Role', value: 'Founder / Product Designer / Builder' },
      {
        label: 'Focus',
        value: 'Music education, teacher tools, tutorial authoring, learning paths',
      },
      { label: 'Stack', value: 'React, TypeScript, Supabase' },
      { label: 'Status', value: 'Live product / active platform' },
    ],
    imageSrc: '/images/playitpro/lesson-builder.png',
    imageAlt: 'Play It Pro lesson builder with block outline, canvas, and inspector',
  },
  whatINoticed: {
    paragraphs: [
      'Online music education is crowded. Thousands of talented musicians create tutorials, post lessons, and try to build audiences, but even strong creators can get buried inside platforms built around algorithms, entertainment, thumbnails, and search.',
      'At the same time, in-person teachers face a different problem. Lessons, assignments, practice goals, videos, schedules, and communication often live in different places.',
    ],
    problems: [
      {
        title: 'For musicians creating online',
        body: 'Talented musicians need a better path to create and monetize structured educational content without building an audience from scratch on a generic video platform.',
      },
      {
        title: 'For in-person teachers',
        body: 'In-person teachers need better tools to organize lessons, students, assignments, and learning paths beyond the actual lesson hour.',
      },
    ],
    bridge:
      'Play It Pro sits between those two needs: helping musicians create structured tutorial content while giving teachers tools to support real students.',
  },
  productBet: {
    lead: 'Music education should not just be a library of videos. It should be a structured learning system.',
    paragraphs: [
      'Tutorials need clear objectives. Lessons need reusable blocks. Teachers need tools to assign content to real students. Students need a clear practice path. Authors need standards, guidance, and a way to participate in the platform without having to build an audience from scratch.',
      'The larger idea was to create a system where approved musicians could produce high-quality tutorials for the Play It Pro library, while in-person teachers could use that same content to create custom learning paths for their own students.',
    ],
  },
  system: {
    intro: 'Play It Pro is built around three connected parts that link authoring, teaching, and learning.',
    flow: [
      'Approved authors create structured tutorials',
      'Curated tutorial library',
      'Teacher tools assign and extend content',
      'Students practice with a clear path',
      'Progress and feedback inform the next lesson',
    ],
    pillars: [
      {
        title: 'Tutorial Library',
        description:
          'A curated catalog of structured music tutorials created by approved authors and organized around clear learning objectives.',
      },
      {
        title: 'Teacher Tools',
        description:
          'A studio workspace for building learning paths, assigning content, communicating with students, and supporting in-person lessons.',
      },
      {
        title: 'Student Experience',
        description:
          'A guided learning area where students access assigned tutorials, practice tasks, lesson materials, and scheduling context.',
      },
    ],
  },
  decisions: [
    {
      label: 'Content system',
      title: 'I treated content creation as a teaching problem, not just a publishing problem.',
      body: 'A lot of musicians can play well. That does not mean they can automatically create a useful tutorial. Play It Pro needed more than an upload button. It needed a way to help instructors think through objectives, structure, training blocks, and production quality.',
    },
    {
      label: 'Learning design',
      title: 'I designed lessons around reusable learning blocks.',
      body: 'Music instruction is not one type of content. A lesson might need explanation, video, notation, tempo targets, rudiments, practice tasks, audio examples, or student-specific notes. A block-based planner lets the system support different kinds of instruction without forcing everything into one static page.',
    },
    {
      label: 'Teacher workflow',
      title: 'I connected online tutorials to in-person teaching.',
      body: 'The platform is not only a video library. The teacher tools let instructors use platform content with real students, build custom learning paths, and extend the lesson beyond the room.',
    },
    {
      label: 'Platform quality',
      title: 'I kept the library quality-driven.',
      body: 'The library should not become a free-for-all content dump. The value comes from consistency, clarity, and educational usefulness.',
    },
    {
      label: 'Author workflow',
      title: 'I designed around the reality that online teaching requires orchestration.',
      body: 'A good tutorial needs planning: a clear objective, the right structure, clean video and audio, and a place inside the larger library. The system needed to support that orchestration.',
    },
  ],
  whatIBuilt: [
    {
      title: 'Platform foundation',
      items: [
        'Product concept and platform model',
        'Teacher and student roles',
        'Supabase schema',
        'Authentication and role-based access',
        'Core app structure',
      ],
    },
    {
      title: 'Teacher studio',
      items: [
        'Lesson planning tools',
        'Learning paths',
        'Student assignment tools',
        'Teacher and student communication',
        'Scheduling visibility for parents',
      ],
    },
    {
      title: 'Content system',
      items: [
        'Tutorial planning workflows',
        'Block-based lesson structure',
        'Content organization for the tutorial library',
        'Learning objective planning',
        'AI-assisted content planning workflows',
      ],
    },
    {
      title: 'Student experience',
      items: [
        'Assigned tutorials',
        'Practice tasks',
        'Lesson materials',
        'Student-facing portal',
        'Parent scheduling context',
      ],
    },
  ],
  screenshots: [
    {
      title: 'Teacher workspace',
      caption:
        'The teacher side turns lessons, assignments, and student context into one working area.',
      imageSrc: '/images/playitpro/lesson-builder.png',
      imageAlt: 'Play It Pro lesson builder workspace with block outline and inspector',
      featured: true,
    },
    {
      title: 'Lesson builder',
      caption:
        'The builder treats lessons as structured learning blocks instead of static documents.',
      imageSrc: '/images/playitpro/stack-layout.png',
      imageAlt: 'Stack layout lesson canvas with text, video, tempo, and checklist blocks',
      featured: true,
    },
    {
      title: 'Student practice view',
      caption:
        'Students get a guided place to access assigned content and understand what to practice.',
      body: [
        'The student portal is where assigned lessons become actionable. Instead of a folder of links or a message from their teacher, students open one lesson and see the full path: what to read, what to watch, what tempo to hit, and what to check off before the next lesson.',
        'I designed this view to mirror how a student actually practices. Blocks appear in order. Practice tasks stay visible. Progress is obvious without turning the page into a dashboard.',
        'For younger students especially, clarity matters. The student should never wonder what they were supposed to work on after they left the lesson room.',
      ],
      highlights: [
        'Lesson overview with practice goal and task progress',
        'Blocks in sequence, matching how the teacher built the assignment',
        'Interactive tempo targets and checklists tied to the same lesson content',
      ],
      layout: 'portrait',
      imageSrc: '/images/playitpro/student-practice.png',
      imageAlt: 'Student practice view with interactive lesson blocks',
      featured: true,
    },
    {
      title: 'Structured lesson layouts',
      caption:
        'The broader platform model depends on content being organized around objectives, not random uploads.',
      imageSrc: '/images/playitpro/bento-layout.png',
      imageAlt: 'Bento grid layout showing flexible block-based lesson structure',
    },
  ],
  whatChanged: {
    paragraphs: [
      'Play It Pro became a real platform that could support in-person teaching, student assignments, scheduling context, and structured tutorial content.',
      'It gave teachers a better way to organize what students should learn and practice. It also created a broader model for helping musicians turn their knowledge into educational products under the Play It Pro brand.',
      'Instead of relying on scattered videos, text messages, and memory, the platform gives music instruction a system: plan the tutorial, structure the lesson, assign the content, guide the student, and keep the learning path connected.',
    ],
    outcomes: [
      {
        title: 'Teaching workflow connected',
        body: 'Lessons, assignments, communication, and scheduling live in one studio instead of scattered tools.',
      },
      {
        title: 'Tutorial content structured',
        body: 'Authors and teachers work inside blocks, objectives, and library organization rather than one-off uploads.',
      },
      {
        title: 'Student learning path clarified',
        body: 'Students see assigned material, practice tasks, and next steps in a dedicated portal.',
      },
    ],
  },
  whatILearned: {
    paragraphs: [
      'The biggest thing I learned is that music education is not just about musical ability.',
      'Knowing an instrument does not automatically mean you can teach it. Teaching in person does not automatically mean you can create strong online educational content.',
      'There is a deeper layer of planning involved: defining the objective, choosing the right structure, avoiding overlap in the library, documenting the learning goal, creating the right training blocks, and helping instructors produce clean video and audio.',
      'Play It Pro was not just a place to host music tutorials. It became a system for helping musicians turn expertise into structured education.',
    ],
  },
}
