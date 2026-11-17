import type { ProjectDocument } from './types'

export const lumaProject: ProjectDocument = {
  slug: 'luma',
  title: 'Luma',
  description:
    'A technology-course review system: map objectives, concepts, procedures, and tools in Python, TypeScript, JavaScript, and related stacks—and see where delivery drifts from what was supposed to be taught.',
  published: true,
  theme: {
    background: '#12161a',
    surface: '#1c242c',
    ink: '#f3f6f4',
    muted: '#b7c2c6',
    accent: '#d7b07a',
  },
  hero: {
    eyebrow: 'Luma',
    title: 'Luma',
    lede: 'A finished deck is not proof a technology lesson taught what it claimed.',
    role: 'Plottr could make a presentation look complete and still have no account of the skills, APIs, or procedures a learner was supposed to practice. I built Luma to inspect technology education itself: what concepts and processes were taught, how they connect, and whether the delivered material supported the objective.',
    meta: 'Technology education · Built product',
    tags: ['Product Strategy', 'Learning Design', 'UX/UI Design', 'AI Orchestration'],
  },
  blocks: [
    {
      type: 'graph',
      id: 'graph',
      nav: 'The graph',
      eyebrow: 'The decision',
      title: 'Select a node. See what it is, and why each link exists.',
      intro:
        'This reconstructed Python lesson has one objective at the top. Concepts and procedures should support that objective. Variables are a prerequisite underneath. Packaging was taught in the material, but it does not help write the function—so it sits outside the map. Selecting a node shows its role in the technology lesson, then the reason for each connection.',
      start: 'functions',
      nodes: [
        {
          id: 'objective',
          label: 'Write a list transform',
          kind: 'objective',
          x: 50,
          y: 16,
          blurb: 'What the learner should be able to do in code when the lesson is over.',
        },
        {
          id: 'functions',
          label: 'Functions',
          kind: 'concept',
          x: 22,
          y: 44,
          blurb: 'Reusable units of behavior—the shape of the solution the objective asks for.',
        },
        {
          id: 'iteration',
          label: 'Iteration',
          kind: 'concept',
          x: 50,
          y: 52,
          blurb: 'Walking a collection item by item so each value can be transformed.',
        },
        {
          id: 'repl',
          label: 'Python REPL',
          kind: 'tool',
          x: 78,
          y: 44,
          blurb: 'Where the procedure is practiced and checked—run the transform, inspect the result.',
        },
        {
          id: 'variables',
          label: 'Variables',
          kind: 'concept',
          x: 36,
          y: 78,
          blurb: 'Names bound to values. Functions and iteration only make sense once this is in place.',
        },
        {
          id: 'packaging',
          label: 'Packaging',
          kind: 'outlier',
          x: 78,
          y: 78,
          blurb: 'Taught in the lesson, but not part of writing the list transform.',
          apart:
            'Packaging and environment setup appear in the material, yet they do not help a learner write a list transform. Showing that gap—taught, but outside the objective—is the point of the outlier.',
        },
      ],
      links: [
        {
          from: 'variables',
          to: 'functions',
          why: 'A function needs named values to take in and return. Variables are the prerequisite, not a side topic.',
        },
        {
          from: 'variables',
          to: 'iteration',
          why: 'Iteration only makes sense once the learner can hold and update values while walking a collection.',
        },
        {
          from: 'functions',
          to: 'objective',
          why: 'The objective is to write a transform as a function. That concept is the shape of the skill, not decoration.',
        },
        {
          from: 'iteration',
          to: 'objective',
          why: 'Transforming a list is a procedure over items. Iteration is how that procedure runs.',
        },
        {
          from: 'repl',
          to: 'objective',
          why: 'The REPL is where the learner practices the procedure and checks the result against the objective.',
        },
      ],
      caption:
        'Conceptual reconstruction for portfolio demonstration. Patterned on technology-course review (Python here; the same model applied to TypeScript, JavaScript, and related stacks).',
    },
    {
      type: 'pair',
      id: 'explorer',
      nav: 'Explorer',
      eyebrow: 'Author review',
      title: 'Coverage first. Then the objective, or the knowledge behind it.',
      paragraphs: [
        'The working analyzer opens on a technology course: modules, clips, objectives, and knowledge counts, with a coverage bar that separates well supported, partial, and missing. Objectives and Knowledge are two projections of the same lesson—skills and procedures on one side, language concepts and tools on the other.',
        'Selecting an objective shows where it is supported, which instructional moves were observed, and what still needs a human look. Selecting a knowledge item—functions, types, APIs, tooling—shows where it appears, how it was taught, and which objectives it connects to. The Python Basics course in these screens is the review subject; the same system was built for technology education more broadly.',
      ],
      frames: [
        {
          src: '/images/v2/luma/objectives.png',
          alt: 'Luma Course Explorer on the Objectives tab, with coverage summary and a selected terminal objective detail pane',
          label: 'Objectives',
          note: 'Support status, instructional moves, and the clips that carry the objective.',
          fit: 'contain',
        },
        {
          src: '/images/v2/luma/knowledge.png',
          alt: 'Luma Course Explorer on the Knowledge tab, with knowledge items and a selected technology detail pane',
          label: 'Knowledge',
          note: 'Concepts and tools as they appear in the course, with treatment and linked objectives.',
          fit: 'contain',
        },
      ],
    },
    {
      type: 'pair',
      id: 'graph-ui',
      nav: 'Graph views',
      eyebrow: 'Knowledge graph',
      title: 'Relationships show why a link exists. Progression shows when it appears.',
      paragraphs: [
        'The knowledge graph is the same review in spatial form. Relationships lets a reviewer select a node and read kind, locations, connections, and evidence. Progression lays the course sequence across the canvas so grounded knowledge sits with its modules, and items outside the sequence stay visibly apart.',
        'Selecting a node dims the rest of the graph and keeps the reason for each link in the detail pane. That is the same interaction the reconstruction above demonstrates, shown here in the working interface.',
      ],
      frames: [
        {
          src: '/images/v2/luma/graph-relationships.jpg',
          alt: 'Luma Knowledge Graph in Relationships view before a node is selected',
          label: 'Relationships',
          note: 'Structure first. Select a node to inspect connections and evidence.',
          fit: 'contain',
        },
        {
          src: '/images/v2/luma/graph-connections.jpg',
          alt: 'Luma Knowledge Graph with an objective selected and connected nodes highlighted',
          label: 'Selected',
          note: 'The path stays lit. The detail pane keeps the first appearance and the reasons for the links.',
          fit: 'contain',
        },
      ],
    },
    {
      type: 'plate',
      id: 'progression',
      nav: 'Progression',
      eyebrow: 'Course sequence',
      title: 'Progression puts the outline back under the graph.',
      intro:
        'When the review needs order, not only topology, Progression places grounded knowledge along the modules and parks anything outside the sequence in its own band. Coverage stays visible above the canvas, so a gap in support is still part of the same pass.',
      image: '/images/v2/luma/progression.jpg',
      imageAlt:
        'Luma Knowledge Graph in Progression view, with modules across the course sequence and a selected node detail pane',
      caption: 'Progression view: sequence, coverage, and the selected node’s connections.',
    },
    {
      type: 'split',
      id: 'origin',
      nav: 'Origin',
      eyebrow: 'Where it came from',
      title: 'Generating a slide could not decide what belonged on it.',
      paragraphs: [
        'The failure showed up inside Plottr. A model could fill an attractive template and still have no judgment about whether a Python function, a TypeScript type, or a JavaScript procedure had earned its place—or whether the lesson taught the process a learner needed. Pedagogy for technology courses does not fall out of one prompt.',
        'I started by asking what an author decides in a tech lesson: which concepts, which procedures, which tools, and in what order. Content quality, peer review, and the people reading the outcome needed a view of that teaching structure, not another slide.',
        'The model distinguishes what was taught from how it was taught: explanation, demonstration, worked example, and other instructional moves. I designed the taxonomy and the relationships, including prerequisites across languages and tooling. Luma began with presentation authors and grew toward anyone comparing an approved technology outline with what was actually delivered.',
      ],
    },
    {
      type: 'split',
      id: 'judgment',
      nav: 'Judgment',
      eyebrow: 'What the person still decides',
      title: 'The model may propose. It does not own the alignment.',
      paragraphs: [
        'The inputs are an approved outline, and optionally a transcript and quality notes. From those, the review names the concepts and instructional moves, maps relationships, judges support against evidence, and shows a review a person can read. A model can suggest entities and relationships. The alignment itself stays with evidence, a constrained vocabulary, and checks that do not depend on the model’s confidence.',
        'Support can be solid, partial, missing, or simply unclear. An unclear result stays unclear. Material that was taught but does not serve the objective is the outlier the graph already demonstrates. The review advises. It does not rewrite the objective to make the lesson look complete.',
        'I directed the structure of that review and the interface. AI assisted the research and the build. A director of content selected a node and could see the concepts around it, the path forward, and what did not belong. That reaction is a qualitative observation, not a usability score. I do not have a formal agreement rate, and I am not claiming the organization adopted it.',
      ],
    },
    {
      type: 'reflection',
      id: 'outcome',
      nav: 'Outcome',
      eyebrow: 'What changed',
      title: 'The course had to become inspectable before the slide could be trusted.',
      statement: 'Trustworthy generation needed a model of the teaching, not a better template.',
      detail:
        'What exists is a working analyzer and an author-facing review of real technology course material. Selecting a node, and reading why a relationship exists, is the interaction I demonstrated. Cross-course relationships and a later learning path remain open next steps. I have not published a usage metric for it. What it changed for me was the order of the work: understand what the technology lesson is trying to teach—concepts, procedures, tools—then decide whether a generated slide deserves to exist.',
    },
  ],
}
