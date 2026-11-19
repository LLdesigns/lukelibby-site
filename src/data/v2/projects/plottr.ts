import type { ProjectDocument } from './types'

export const plottrProject: ProjectDocument = {
  slug: 'plottr',
  title: 'Plottr',
  description:
    'The next step after SlideKit: import a presentation, review it against the standards, lightly edit it, and export it, without treating the original file as the only source of truth.',
  published: true,
  theme: {
    background: '#101614',
    surface: '#18211e',
    ink: '#f3f6f2',
    muted: '#b7c4bb',
    accent: '#8fb9a4',
  },
  hero: {
    eyebrow: 'Internal product',
    title: 'Plottr',
    lede: 'Import, Review, and Export',
    highlight:
      'Beta testing showed import, review, and export mattered more than the full editor I had prototyped—so I narrowed the scope accordingly.',
    role: 'SlideKit could help inside PowerPoint. Plottr was my attempt to make the presentation itself a document that could be imported, reviewed, and exported, including from Keynote. I owned the concept, the design, and the build. DevOps was outside my scope.',
    meta: 'Presentation review · Published',
    tags: ['Product Strategy', 'UX/UI Design', 'Systems Design', 'AI-Assisted Implementation'],
  },
  blocks: [
    {
      type: 'split',
      id: 'origin',
      nav: 'Origin',
      eyebrow: 'Why it existed',
      title: 'The Problem',
      paragraphs: [
        'Review feedback suggested that about 60 percent of the issues showing up later were presentation problems. I wanted those caught before a camera locked them in. That figure is from review feedback, not a published study.',
        'Authors were working from PowerPoint and Keynote templates. Updating the brand meant downloading templates and icons again, and the copies drifted. I looked at those tools, and at how other learning platforms expected an author to work. External authors needed training slides. Internal teams needed decks that still looked like the brand.',
        'The decision was one canonical document shared by import, the on-screen review, and export, rendered as HTML. A deck could be visually impressive and still fail as instruction: the wrong depth, the wrong sequence, too much on the slide under Bloom’s taxonomy and cognitive load. That limit is what later became Luma.',
      ],
    },
    {
      type: 'pivot',
      id: 'pivot',
      nav: 'Pivot',
      eyebrow: 'Design decision',
      title: 'Beta Scope',
      intro:
        'I prototyped a broad editor quickly, then narrowed what testers saw: import a PowerPoint or Keynote file, see a faithful conversion, get a review you can act on, edit lightly, and export. The wide editor, interactive pieces, and generated slides stayed in the prototype. The beta was the review.',
      flow: [
        { label: 'Import', detail: 'A PowerPoint or Keynote file comes in as the starting point.' },
        { label: 'One document', detail: 'Import, the on-screen review, and export all share the same source.' },
        { label: 'Review', detail: 'Feedback can sit on the slide, before anyone records it.' },
        { label: 'Export', detail: 'The file can leave again, including a path back toward a native deck.' },
      ],
      lanes: [
        {
          label: 'Prototype',
          title: 'A wide editor',
          body: 'Interactive pieces, generated slides, Markdown drafts, and a large set of controls. I used that breadth to learn what was possible, not as the surface the beta asked people to use.',
        },
        {
          label: 'Beta',
          title: 'Review, then a light edit',
          body: 'Standards review and a smaller set of edits. Testers found the import and export valuable on their own, which I had not treated as the product.',
        },
      ],
      caption: 'Prototype scope on the left. Beta scope on the right.',
    },
    {
      type: 'pair',
      id: 'prototype',
      nav: 'Prototype',
      eyebrow: 'What the broad editor looked like',
      title: 'Prototype Editor',
      paragraphs: [
        'The prototype editor could begin from a template, a PowerPoint upload, or an AI-generated deck. Inside a deck, a copilot could rewrite a selected element, a slide, or the whole file. That breadth taught me what was possible. It was not what the beta asked people to use.',
        'The screens below are from that wider product. The beta kept the import, the review, and a lighter edit.',
      ],
      frames: [
        {
          src: '/images/v2/plottr/new-project.png',
          alt: 'Plottr new project screen with options to browse templates, upload a PowerPoint file, or start with AI',
          label: 'New project',
          note: 'Template, upload, or generate. The empty deck is the starting point of the prototype editor.',
          fit: 'contain',
        },
        {
          src: '/images/v2/plottr/ai-copilot.png',
          alt: 'Plottr editor with an AI Copilot asking to summarize a selected text block on a course summary slide',
          label: 'AI Copilot',
          note: 'Conversational edits on a selected element. Generated and assisted slides lived in the prototype, not the beta.',
          fit: 'contain',
        },
      ],
    },
    {
      type: 'plate',
      id: 'pipeline',
      nav: 'Pipeline',
      eyebrow: 'The document path',
      title: 'Document Pipeline',
      intro:
        'Plottr used the same pipeline idea as the earlier presentation-builder story: bring a deck in, normalize it into one document, review against standards, and export again. The schema snippet in the diagram is illustrative. I left internal field mapping off this page.',
      image: '/images/case-studies/presentation-builder/workflow-diagram.png',
      imageAlt:
        'Sanitized workflow diagram from presentation input through structured document, validation, and export',
      caption: 'Sanitized pipeline diagram. Schema fields shown are illustrative, not an internal inventory.',
    },
    {
      type: 'plate',
      id: 'editor',
      nav: 'Editor shape',
      eyebrow: 'Prototype layout',
      title: 'Editor Layout',
      intro:
        'The prototype editor kept outline, layers, canvas, and properties in one place, with a structured view underneath. This wireframe is the earlier public reconstruction of that shape. The beta narrowed the job to import, review, light edit, and export.',
      image: '/images/case-studies/presentation-builder/editor-wireframe.png',
      imageAlt:
        'Wireframe of a presentation editor with slide outline, canvas, properties, and structured document view',
      caption: 'Conceptual editor wireframe from the public presentation-builder story.',
    },
    {
      type: 'split',
      id: 'control',
      nav: 'Control',
      eyebrow: 'Interface decisions',
      title: 'Selection-Based Controls',
      paragraphs: [
        'The layout I kept was a slide list, the active slide, and a panel for the properties and the feedback that belonged to the selection. Review happened before recording. Approved fonts were the only ones on offer; other controls stayed hidden until something was selected.',
        'The product moved more than once: a broad editor, then a narrower beta, then an unfinished tie into the centralized standards review, with a fuller editor still later. A closer connection to VideoKit was a direction, not a shipped feature. Odd editor behavior got simpler as the beta dropped tools that created more maintenance than clarity.',
        'I directed the document model, the interface, and what the beta would leave out. AI assisted the research and the implementation. The release did not match the original idea of a full editor, and that was the right narrowing.',
      ],
    },
    {
      type: 'reflection',
      id: 'outcome',
      nav: 'Results',
      eyebrow: 'Published',
      title: 'Results',
      statement: 'Import, review, and export earned their place. The full editor had not, yet.',
      detail:
        'Plottr moved through staging into a published release with internal testers and a small number of external users, then continued gathering feedback. It was not as far along as VideoKit. I have no business metric I can show. What I would keep is the willingness to follow the value that appeared, even when it was the conversion rather than the editor, and to admit that visual generation alone could not guarantee a lesson.',
    }
  ],
}
