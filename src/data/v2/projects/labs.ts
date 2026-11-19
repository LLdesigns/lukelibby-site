import type { ProjectDocument } from './types'

export const labsProject: ProjectDocument = {
  slug: 'ai-lab-production',
  title: 'AI-Assisted Lab Production',
  description:
    'An AI-assisted hands-on lab production workflow that speeds drafting while keeping code checks, instructional judgment, and final approval with a person.',
  published: true,
  theme: {
    background: '#161410',
    surface: '#241f1a',
    ink: '#f6f1ea',
    muted: '#cbbdae',
    accent: '#d7b07a',
  },
  hero: {
    eyebrow: 'Labs',
    title: 'AI-Assisted Lab Production',
    lede: 'Faster drafts, with the same gates a lab had to pass before.',
    role: 'I led the discovery and built the production workflow. The question was whether AI could sit inside lab production and still leave instructional design, code accuracy, and publishing standards intact.',
    meta: 'Production workflow · Published · Anonymized',
    tags: ['Learning Design', 'Workflow Design', 'AI-Assisted Production'],
  },
  blocks: [
    {
      type: 'steps',
      id: 'process',
      nav: 'Process',
      eyebrow: 'How the work ran',
      items: [
        {
          title: 'Start with the hard question',
          body: 'Faster text generation was not the goal. I needed a workflow that still held up to instructional design, code checks, and publishing standards.',
        },
        {
          title: 'Map the production system',
          body: 'I mapped brief to draft, technical review, instructional review, validation, and publication: where work was repetitive, where judgment mattered, and where a mistake would ship.',
        },
        {
          title: 'Measure against production frameworks',
          body: 'Lab content was checked against backward-design objectives, competency rubrics, and scaffolded practice, the same standards that helped produce publish-ready labs.',
        },
        {
          title: 'Draw the AI boundary',
          body: 'Drafting, outlining, and early structuring could be assisted. Code validation, instructional judgment, framework checks, and final sign-off stayed human.',
        },
        {
          title: 'Run the workflow end to end',
          body: 'Structured inputs, assisted drafts, human verification, validation, and handoffs, tracked for speed and quality against the existing path.',
        },
        {
          title: 'Measure speed and repeatability',
          body: 'The workflow moved faster without skipping review, and it held up across topics and formats, not only on a single pass.',
        },
      ],
    },
    {
      type: 'pair',
      id: 'before-after',
      nav: 'Before / after',
      eyebrow: 'What changed in the path',
      title: 'Before and After',
      paragraphs: [
        'Before, authoring was mostly manual. Instructional drift, code risk, and slow review loops all fed the same production bottleneck.',
        'After, the path ran learning brief → assisted draft → instructional review → code validation → production-ready lab, with human checkpoints still in the loop.',
      ],
      frames: [
        {
          src: '/images/case-studies/hands-on-ai-flow/manual_production_strain.png',
          alt: 'Diagram of manual lab production strain leading to a production bottleneck',
          label: 'Before',
          note: 'Authoring, drift, code risk, and slow review feeding the same bottleneck.',
          fit: 'contain',
        },
        {
          src: '/images/case-studies/hands-on-ai-flow/structured_lab_pipeline.png',
          alt: 'Diagram of a structured AI-assisted lab pipeline from brief to production-ready lab',
          label: 'After',
          note: 'Brief → assisted draft → instructional review → code validation → ready lab.',
          fit: 'contain',
        },
      ],
    },
    {
      type: 'plate',
      id: 'workflow',
      nav: 'Workflow',
      eyebrow: 'Design decision',
      title: 'Production Workflow',
      intro:
        'The easy version of the project was “use AI to write labs faster.” The version I tested was end to end: define the objective, assist the scaffold, assemble the draft, then human review, validation, and publish. The diagram is sanitized. It does not show prompts, internal tools, or lab content.',
      image: '/images/case-studies/hands-on-ai-flow/aidiaflow.png',
      imageAlt:
        'Sanitized workflow diagram for AI-assisted hands-on lab production from objectives through human review to publication',
      caption: 'Sanitized overview of the production workflow.',
    },
    {
      type: 'pair',
      id: 'gates',
      nav: 'Gates',
      eyebrow: 'Where judgment stays human',
      title: 'Human Review Gates',
      paragraphs: [
        'The checkpoints spell out what still has to be true: objective alignment, step clarity, code accuracy, and production standards. That boundary map was the product decision—AI can draft and structure, but a person still owns whether the lab is accurate and whether it teaches.',
      ],
      frames: [
        {
          src: '/images/case-studies/hands-on-ai-flow/review_checkpoint_map.png',
          alt: 'Review checkpoint map for objective alignment, step clarity, code accuracy, and production standards',
          label: 'Checkpoints',
          note: 'The same kinds of gates a publish-ready lab already had to pass.',
          fit: 'contain',
        },
        {
          src: '/images/case-studies/hands-on-ai-flow/ai_boundary_map.png',
          alt: 'Map of where AI drafts a hands-on lab and where a person still owns code checks, instructional judgment, and approval',
          label: 'Boundary',
          note: 'Assist the draft and the structure. Leave code, judgment, and sign-off with a person.',
          fit: 'contain',
        },
      ],
    },
    {
      type: 'split',
      id: 'system',
      nav: 'The system',
      eyebrow: 'What had to stay true',
      title: 'System Constraints',
      paragraphs: [
        'Hands-on labs need an objective, a progression, accurate steps, and an environment that will not strand the learner. Production already measured work against backward design, competency, and scaffolded practice. Those checks were why the pipeline existed—not an extra review taped on at the end.',
        'I mapped the path from brief to draft, technical review, instructional review, validation, and publication, and marked where a repeated task could move and where a mistake would ship. The workflow ran across topics and formats, not as a one-off exercise.',
        'I directed the workflow and where the boundary sat. AI assisted the drafting inside that boundary. It did not validate the code, make the instructional call, or sign the lab off. This story stays anonymized: no prompts, internal tooling, or confidential lab content.',
      ],
    },
    {
      type: 'reflection',
      id: 'outcome',
      nav: 'Results',
      eyebrow: 'Published',
      title: 'Results',
      statement: 'The draft got faster. The decision to publish did not get delegated.',
      detail:
        'The workflow moved through staging into published production use and continued gathering feedback. Time to publication dropped by about 60 percent on average, and by as much as 90 percent in some cases, with a person still verifying the lab. That is what this production run showed, not a claim about every later lab. I am not publishing a count of labs here. What I kept is the boundary: assist the draft and the structure, and leave code, instructional judgment, and final approval with a person.',
    }
  ],
}
