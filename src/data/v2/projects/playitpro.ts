import type { ProjectDocument } from './types'

export const playItProProject: ProjectDocument = {
  slug: 'play-it-pro',
  title: 'Play It Pro',
  description:
    'A music education platform for teachers, students, and tutorial authors: structured lessons, learning paths, and a curated tutorial library.',
  published: true,
  theme: {
    background: '#14110e',
    surface: '#221c17',
    ink: '#f6f1ea',
    muted: '#cbbdae',
    accent: '#e0a15c',
  },
  hero: {
    eyebrow: 'Play It Pro',
    title: 'Play It Pro',
    lede: 'Knowing an instrument does not automatically mean you can teach it online.',
    role: 'I founded, designed, and built Play It Pro as a live platform. It connects structured tutorial authoring with teacher studio tools and a student practice path, so lessons do not live as scattered videos, texts, and memory.',
    meta: 'Live product · React, TypeScript, Supabase',
    tags: ['EdTech', 'Music Education', 'Product Design', 'Independent Development'],
  },
  blocks: [
    {
      type: 'plate',
      id: 'builder',
      nav: 'The builder',
      eyebrow: 'The decision',
      title: 'Treat the lesson as blocks with an objective, not a page of uploads.',
      intro:
        'A musician can play well and still struggle to teach online. Play It Pro needed more than an upload button. The lesson builder is where an author or teacher defines the goal, stacks the blocks in order, and keeps practice tasks attached to the same lesson.',
      image: '/images/playitpro/workspace-layout.png',
      imageAlt:
        'Play It Pro lesson builder with block outline, stack canvas, and lesson goal inspector',
      caption: 'Lesson builder captured from the live product components.',
    },
    {
      type: 'pair',
      id: 'layouts',
      nav: 'Layouts',
      eyebrow: 'How a lesson is assembled',
      title: 'Stack for sequence. Bento when the lesson needs a denser board.',
      paragraphs: [
        'Music instruction is not one type of content. A lesson might need explanation, video, tempo targets, checklists, audio, or student-specific notes. The block planner supports that without forcing everything into one static page.',
        'Stack keeps the practice path linear. Bento opens a denser layout when the teacher wants related blocks side by side. These frames are captured from the product’s help-capture showcase of the real builder components.',
      ],
      frames: [
        {
          src: '/images/playitpro/stack-layout.png',
          alt: 'Stack layout lesson canvas with text, video, tempo, and checklist blocks',
          label: 'Stack',
          note: 'Blocks in the order a student should work through them.',
          fit: 'contain',
        },
        {
          src: '/images/playitpro/bento-layout.png',
          alt: 'Bento grid layout showing flexible block-based lesson structure',
          label: 'Bento',
          note: 'A denser board when related blocks belong together.',
          fit: 'contain',
        },
      ],
    },
    {
      type: 'plate',
      id: 'student',
      nav: 'Student path',
      eyebrow: 'What the student sees',
      title: 'One lesson. A clear practice path after they leave the room.',
      intro:
        'The student portal turns an assignment into something actionable: the goal, the order of work, what to watch, what tempo to hit, and what to check off before the next lesson. Younger students especially should never wonder what they were supposed to practice after they left.',
      image: '/images/playitpro/student-overview.png',
      imageAlt:
        'Student lesson overview for Rock Groove Basics with practice-task progress, how-to guidance, and practice goal',
      caption: 'Overview: studio, goal, and practice progress before the first block.',
    },
    {
      type: 'pair',
      id: 'student-steps',
      nav: 'Lesson steps',
      eyebrow: 'Blocks in order',
      title: 'Read first. Then watch.',
      paragraphs: [
        'The same blocks the teacher built show up as numbered steps. Text sets what to listen for. Video carries the demo. The student works top to bottom instead of hunting through a folder of links.',
      ],
      frames: [
        {
          src: '/images/playitpro/student-step-text.png',
          alt: 'Student lesson step 1 text block titled Before you watch',
          label: 'Prep',
          note: 'What to notice before the demo starts.',
          fit: 'contain',
        },
        {
          src: '/images/playitpro/student-step-video.png',
          alt: 'Student lesson step 2 video block for Groove demo with playable thumbnail',
          label: 'Demo',
          note: 'Watch the verse groove, then mark the linked task done.',
          fit: 'contain',
        },
      ],
    },
    {
      type: 'pair',
      id: 'student-practice',
      nav: 'Practice',
      eyebrow: 'Tempo and tasks',
      title: 'A target tempo, and a short list that proves the week’s work.',
      paragraphs: [
        'Tempo build gives a start and a goal so practice is not guesswork. Practice tasks close the loop: play, watch, record. Progress is visible without turning the page into a dashboard.',
      ],
      frames: [
        {
          src: '/images/playitpro/student-tempo.png',
          alt: 'Student lesson step 3 tempo build from 70 to 100 BPM',
          label: 'Tempo',
          note: 'Start at 70. Goal 100. Clean doubles before each bump.',
          fit: 'contain',
        },
        {
          src: '/images/playitpro/student-tasks.png',
          alt: 'Student lesson step 4 practice checklist with three weekly tasks',
          label: 'Checklist',
          note: 'Three tasks for the week, checked off before the next lesson.',
          fit: 'contain',
        },
      ],
    },
    {
      type: 'split',
      id: 'opportunity',
      nav: 'Opportunity',
      eyebrow: 'What I noticed',
      title: 'Online creators and in-person teachers had different gaps, and the same missing system.',
      paragraphs: [
        'Online music education is crowded. Strong musicians still get buried inside platforms built around algorithms, entertainment, and thumbnails. At the same time, in-person teachers keep lessons, assignments, practice goals, videos, schedules, and communication in different places.',
        'Play It Pro sits between those needs: help approved musicians produce structured tutorial content, and give teachers tools to assign that content into real learning paths for their students.',
        'The product bet was simple. Music education should not just be a library of videos. It should be a structured learning system: objectives, reusable blocks, teacher assignment, and a practice path the student can follow.',
      ],
    },
    {
      type: 'trio',
      id: 'system',
      nav: 'System',
      eyebrow: 'Three connected parts',
      items: [
        {
          label: 'Library',
          title: 'Curated tutorials',
          body: 'Approved authors create structured tutorials organized around clear learning objectives, not a free-for-all content dump.',
        },
        {
          label: 'Studio',
          title: 'Teacher tools',
          body: 'Instructors build learning paths, assign content, communicate with students, and keep scheduling context next to the lesson.',
        },
        {
          label: 'Portal',
          title: 'Student experience',
          body: 'Students open assigned tutorials, practice tasks, and lesson materials in one guided place.',
        },
      ],
    },
    {
      type: 'steps',
      id: 'decisions',
      nav: 'Decisions',
      eyebrow: 'Product decisions',
      items: [
        {
          title: 'Content creation is a teaching problem',
          body: 'Playing well is not the same as creating a useful tutorial. The system helps instructors think through objectives, structure, training blocks, and production quality.',
        },
        {
          title: 'Lessons are reusable learning blocks',
          body: 'Explanation, video, notation, tempo, rudiments, practice tasks, and notes can sit in one lesson without collapsing into a single static page.',
        },
        {
          title: 'Online tutorials connect to in-person teaching',
          body: 'Teacher tools use platform content with real students and extend the lesson beyond the room.',
        },
        {
          title: 'The library stays quality-driven',
          body: 'Consistency, clarity, and educational usefulness matter more than volume.',
        },
      ],
    },
    {
      type: 'split',
      id: 'built',
      nav: 'What I built',
      eyebrow: 'Ownership',
      title: 'Concept, design, schema, and the working product.',
      paragraphs: [
        'I owned the product concept and platform model, teacher and student roles, authentication and access, and the core app structure on React, TypeScript, and Supabase.',
        'On the teacher side: lesson planning, learning paths, assignment tools, communication, and scheduling visibility. On the content side: tutorial planning, block-based structure, library organization, objective planning, and AI-assisted planning workflows. On the student side: assigned tutorials, practice tasks, lesson materials, and parent scheduling context.',
      ],
    },
    {
      type: 'reflection',
      id: 'outcome',
      nav: 'Outcome',
      eyebrow: 'What changed',
      title: 'Music instruction got a system instead of a pile of links.',
      statement: 'Plan the tutorial, structure the lesson, assign the content, guide the student.',
      detail:
        'Play It Pro became a live platform that can support in-person teaching, student assignments, scheduling context, and structured tutorial content under one brand. The lasting lesson was that musical ability, in-person teaching, and online educational content are different skills. The deeper layer is planning: define the objective, choose the structure, keep the library coherent, and help instructors produce work students can actually practice.',
    },
  ],
}
