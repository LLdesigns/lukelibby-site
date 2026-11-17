import type { ProjectDocument } from './types'

export const lumaProject: ProjectDocument = {
  slug: 'luma',
  title: 'Luma',
  description:
    'A review of what a course actually teaches: objectives, concepts, prerequisites, and the places where the delivered lesson drifts from the outline.',
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
    lede: 'A handsome slide is not the same as a course that teaches.',
    role: 'Plottr could make a deck look finished and still have no account of what a learner was supposed to understand, or whether the lesson actually taught it. I started Luma to answer a harder question: how do you know what belongs in a lesson, when it should appear, and whether the delivered material taught it?',
    meta: 'Instructional review · Working analyzer',
    tags: ['Product Strategy', 'Learning Design', 'UX/UI Design', 'AI Orchestration'],
  },
  blocks: [
    {
      type: 'graph',
      id: 'graph',
      nav: 'The graph',
      eyebrow: 'The decision',
      title: 'Select a concept and the reason for the link comes with it.',
      intro:
        'A picture of connected topics is not a review. The useful version tells you why two things belong together, and which topic was taught without supporting the objective. This course is fictional. Selecting a node, and reading why the link exists, is the interaction I demonstrated. The analyzer behind it reviews one course. Relationships across courses, and a later learning path, are a longer vision, not a released or adopted experience.',
      start: 'habitat',
      nodes: [
        { id: 'objective', label: 'Explain a sighting', kind: 'objective', x: 50, y: 18 },
        { id: 'habitat', label: 'Habitat', kind: 'concept', x: 24, y: 46 },
        { id: 'behavior', label: 'Behavior', kind: 'concept', x: 50, y: 58 },
        { id: 'photo', label: 'Photograph', kind: 'tool', x: 76, y: 46 },
        { id: 'name', label: 'Name what you saw', kind: 'concept', x: 28, y: 80 },
        {
          id: 'camera',
          label: 'Camera settings',
          kind: 'outlier',
          x: 74,
          y: 80,
          apart:
            'This was taught, but it does not help a learner explain a sighting. It is in the lesson and outside the objective. That gap is the point of showing it.',
        },
      ],
      links: [
        {
          from: 'name',
          to: 'habitat',
          why: 'You cannot say where an animal fits until you know what you saw. Naming is a prerequisite, not a detail.',
        },
        {
          from: 'name',
          to: 'behavior',
          why: 'A note about what the animal did is only interpretable once the animal itself is named.',
        },
        {
          from: 'habitat',
          to: 'objective',
          why: 'The objective asks the learner to connect the animal to the place. Habitat is part of the claim, not a sidebar.',
        },
        {
          from: 'behavior',
          to: 'objective',
          why: 'What the animal was doing is part of the sighting the objective asks the learner to explain.',
        },
        {
          from: 'photo',
          to: 'objective',
          why: 'The photograph is the evidence. The explanation is checked against it, not against the outline alone.',
        },
      ],
      caption: 'Conceptual reconstruction created for portfolio demonstration. The course is fictional.',
    },
    {
      type: 'pair',
      id: 'explorer',
      nav: 'Explorer',
      eyebrow: 'Author review',
      title: 'Coverage first. Then the objective, or the knowledge behind it.',
      paragraphs: [
        'The working analyzer opens on a course explorer: modules, clips, objectives, and knowledge counts, with a coverage bar that separates well supported, partial, and missing. Objectives and Knowledge are two projections of the same course, so a reviewer can start from what learners should be able to do, or from the concepts and tools that showed up in the material.',
        'Selecting an objective shows where it is supported, which instructional moves were observed, and what still needs a human look. Selecting a knowledge item shows where it appears, how it was treated, and which objectives it connects to. The Python Basics course in these screens is a demonstration course for the review, not a published company catalog.',
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
        'The failure showed up inside Plottr. A model could fill an attractive template and still have no judgment about sequence, depth, or whether a concept had earned its place. Bloom’s taxonomy and cognitive load are the plain reason a single generation prompt was not enough. Pedagogy does not fall out of one prompt.',
        'I started by asking what an author decides: what to teach, when, and how. Then who else has to trust that decision. Content quality, peer review, and the people reading the outcome all needed a view of the course, not another slide.',
        'The model distinguishes what was taught from how it was taught: explanation, demonstration, example, and other instructional moves. I designed the taxonomy and the relationships, including prerequisites. Luma began aimed at presentation authors. It grew toward anyone who has to compare the approved outline with what was actually delivered.',
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
        'What exists is a working analyzer and an author-facing review of one course. Selecting a node, and reading why a relationship exists, is the interaction I demonstrated. Relationships across courses, and a later learning path, remain a longer vision. Luma is not a released company product, and I have not published a usage metric for it. What it changed for me was the order of the work: understand what the course is trying to teach, then decide whether a generated slide deserves to exist.',
    },
  ],
}
