export const CASE_STUDY_ORDER = [
  'ai-lab-production',
  'presentation-builder',
  'nutriant',
] as const

export type CaseStudySlug = (typeof CASE_STUDY_ORDER)[number]

export interface CaseStudyMetaChip {
  label: string
  value: string
}

export interface FieldNoteStep {
  step: number
  title: string
  body: string
}

export interface CaseStudyArtifact {
  title: string
  description: string
  placeholderLabel?: string
  imageSrc?: string
  imageAlt?: string
  variant?: 'default' | 'problem-flow' | 'proposed-flow' | 'sanitized-example'
  featured?: boolean
  flowSteps?: string[]
  flowLabel?: string
  example?: SanitizedSlideExample
}

export interface SanitizedSlideExample {
  shapeId?: string
  slideTitle: string
  objective: string
  teachingElementType: string
  bodyContent: string
  visualComponent: string
  standardsStatus: string
  aiSuggestion: string
}

export interface CaseStudySnapshot {
  problem: string
  myRole: string
  outcome: string
}

export interface CaseStudyDetail {
  slug: CaseStudySlug
  number: string
  status: 'full' | 'placeholder'
  description: string
  tags: string[]
  imageLabel: string
  eyebrow: string
  title: string
  subtitle: string
  metaChips: CaseStudyMetaChip[]
  privacyNote?: string
  heroVisualLabel: string
  heroImageSrc?: string
  heroImageAlt?: string
  heroImageWidth?: number
  heroImageHeight?: number
  cardImageSrc?: string
  cardImageAlt?: string
  snapshot: CaseStudySnapshot
  challenge: string
  myRole: string
  fieldNotes: FieldNoteStep[]
  artifacts: CaseStudyArtifact[]
  solution: string
  impact: string[]
  reflection: string
  nextSlug: CaseStudySlug
}

/** @deprecated Use CaseStudyDetail — kept for card prop compatibility */
export type CaseStudy = CaseStudyDetail & { href: string }

export function getCaseStudyHref(slug: CaseStudySlug): string {
  return `/case-studies/${slug}`
}

export function getPreviousCaseStudySlug(slug: CaseStudySlug): CaseStudySlug {
  const index = CASE_STUDY_ORDER.indexOf(slug)
  const prevIndex =
    (index - 1 + CASE_STUDY_ORDER.length) % CASE_STUDY_ORDER.length
  return CASE_STUDY_ORDER[prevIndex]
}

export function getNextCaseStudySlug(slug: CaseStudySlug): CaseStudySlug {
  const index = CASE_STUDY_ORDER.indexOf(slug)
  const nextIndex = (index + 1) % CASE_STUDY_ORDER.length
  return CASE_STUDY_ORDER[nextIndex]
}

const aiLabProduction: CaseStudyDetail = {
  slug: 'ai-lab-production',
  number: '01',
  status: 'full',
  description:
    'An anonymized case study on proving AI-assisted lab production could move faster at scale — with human-verified quality and clear boundaries on where AI belongs.',
  tags: ['AI Workflows', 'Instructional Design', 'Technical Content', 'Process Design'],
  imageLabel: 'Lab Production Workflow',
  cardImageSrc: '/images/case-studies/hands-on-ai-flow/aidiaflow.png',
  cardImageAlt:
    'Sanitized workflow diagram for AI-assisted hands-on lab production',
  eyebrow: 'CASE STUDY 01 / ANONYMIZED FIELD REPORT',
  title: 'AI-Assisted Learning Workflow',
  subtitle:
    'Testing whether AI could support hands-on lab production without weakening instructional design, code accuracy, review loops, or live publishing standards.',
  metaChips: [
    {
      label: 'Role',
      value: 'Discovery Lead · PoC Owner · AI Production Strategist',
    },
    { label: 'Type', value: 'AI Workflow / Technical Content R&D' },
    {
      label: 'Focus',
      value: 'Hands-On Labs, Instructional Frameworks, Production Standards',
    },
    { label: 'Status', value: 'Anonymized Case Study' },
  ],
  privacyNote:
    'This case study is anonymized to protect company IP. It focuses on my discovery process, workflow testing, and proof-of-concept work — not proprietary prompts, internal tooling, unreleased product direction, or confidential lab content.',
  heroVisualLabel: 'AI-Assisted Lab Production Workflow',
  heroImageSrc: '/images/case-studies/hands-on-ai-flow/aidiaflow.png',
  heroImageAlt:
    'Workflow diagram showing AI-assisted lab production from brief through human review to publication',
  heroImageWidth: 1535,
  heroImageHeight: 1024,
  snapshot: {
    problem:
      'Hands-on coding labs are hard to scale without sacrificing instructional quality, technical accuracy, or the review standards required for live production.',
    myRole:
      'Led discovery and owned the proof of concept: could AI help produce labs repeatably while keeping instructional design, code validation, and human review in the loop?',
    outcome:
      'The PoC cut time to publication by about 60% on average — up to 90% in some cases — while keeping human-verified quality and mapping where AI belonged vs. where it did not.',
  },
  challenge: `The question wasn't whether AI could write lab steps. It was whether AI could sit inside a real lab production workflow without breaking what makes hands-on learning content trustworthy.

Hands-on coding labs depend on more than code snippets. They need instructional intent, progressive difficulty, accurate technical steps, learner-safe environments, and review against live publishing standards. In production, lab content and instructional design were measured against backward-design objectives, competency-based rubrics, and scaffolded practice frameworks — the same standards that helped produce consistent, publish-ready labs at scale. The existing model leaned on heavy manual authoring, scattered review, and repeated formatting across drafting, validation, and handoff.

Most teams would frame this as "use AI to write labs faster." I was trying to answer a harder one: can AI become part of a repeatable production system that still passes instructional review, code validation, and live publishing standards — and can it actually move faster at scale without dropping quality?`,
  myRole: `Discovery lead, workflow tester, and proof-of-concept owner. I:
- mapped where AI could fit inside a real hands-on lab production pipeline
- tested whether AI-assisted drafts could still pass backward-design, competency-based, and scaffolded-practice frameworks
- owned the proof-of-concept for AI-assisted lab drafting and structuring
- defined where human review, code validation, and publishing standards could not be skipped
- mapped where AI helped in the pipeline and where it did not — drafting and structuring vs. code validation, instructional judgment, and final approval
- checked whether the workflow could hold up across different technical topics and lab formats
- documented a repeatable production model the team could actually use`,
  fieldNotes: [
    {
      step: 1,
      title: 'Start with the hard question',
      body: "I threw out the easy version of the problem first. Faster text generation wasn't the goal. The goal was a workflow that still held up to instructional design, code checks, and publishing standards.",
    },
    {
      step: 2,
      title: 'Map the production system',
      body: 'I mapped how hands-on labs moved from brief to draft, technical review, instructional review, validation, and publication — where work was repetitive, where judgment mattered, and where mistakes would hurt.',
    },
    {
      step: 3,
      title: 'Measure against production frameworks',
      body: 'Lab content and instructional design were measured against backward-design objectives, competency rubrics, and scaffolded practice frameworks — the same checks that helped produce publish-ready labs, not just plausible code on first pass.',
    },
    {
      step: 4,
      title: 'Draw the AI boundary',
      body: 'Part of the PoC was proving where AI belonged and where it did not. Drafting, outlining, and early structuring — yes. Code validation, instructional judgment, framework checks, and final sign-off — still human.',
    },
    {
      step: 5,
      title: 'Run the proof of concept',
      body: 'I ran the PoC end to end at production scale — structured inputs, AI drafts, human verification, validation steps, and handoffs — tracking speed and quality against the existing workflow.',
    },
    {
      step: 6,
      title: 'Prove speed and repeatability',
      body: 'The PoC showed we could move much faster without skipping human review — cutting time to publication by about 60% on average, up to 90% in some cases, with verified quality. It also held up across topics and formats, not just as a one-off demo.',
    },
  ],
  artifacts: [
    {
      title: 'Manual Production Strain',
      description:
        'Manual lab authoring at scale → inconsistent instructional design → code accuracy risk → slow review loops → production bottleneck.',
      imageSrc:
        '/images/case-studies/hands-on-ai-flow/manual_production_strain.png',
      imageAlt:
        'Diagram showing manual lab production strain before AI-assisted workflow',
    },
    {
      title: 'Structured Lab Pipeline',
      description:
        'Structured brief → AI-assisted draft → instructional + code review → production standards check → publish-ready lab.',
      imageSrc:
        '/images/case-studies/hands-on-ai-flow/structured_lab_pipeline.png',
      imageAlt:
        'Diagram showing structured AI-assisted lab pipeline from brief to publication',
    },
    {
      title: 'Review Checkpoint Map',
      description:
        'Where lab content is checked against backward-design objectives, competency rubrics, scaffolded practice standards, and technical validation before production approval.',
      imageSrc:
        '/images/case-studies/hands-on-ai-flow/review_checkpoint_map.png',
      imageAlt:
        'Review checkpoint map for instructional, framework, and technical validation gates',
      featured: true,
    },
    {
      title: 'AI Boundary Map',
      description:
        'Where AI handles drafting and structuring, and where humans own code validation, framework checks, instructional judgment, and final approval.',
      imageSrc: '/images/case-studies/hands-on-ai-flow/ai_boundary_map.png',
      imageAlt:
        'Map showing where AI assists in lab production and where human review is required',
      featured: true,
    },
  ],
  solution: `AI became one layer inside a structured lab production workflow — not a replacement for instructional design or technical review.

The proof of concept used structured inputs and AI-assisted drafting to speed up early lab creation. Every draft still went through human verification and had to pass backward-design, competency, and scaffolded-practice checks — plus code accuracy, review loops, and live publishing standards.

The results were concrete. The workflow moved much faster at scale while producing quality content verified by humans — cutting time to publication by about 60% on average, up to 90% in some cases. We also proved where AI belonged in the pipeline (drafting, outlining, early structuring) and where it did not (code validation, instructional judgment, framework checks, final approval).`,
  impact: [
    'Cut time to publication by about 60% on average — up to 90% in some cases — with human-verified quality',
    'Proved the workflow could move faster at scale without treating AI output as publish-ready',
    'Mapped where AI belonged in the pipeline and where it did not',
    'Showed AI drafts could still pass backward design, competency rubrics, and scaffolded practice frameworks',
    'Kept code accuracy, instructional judgment, and final approval as human-owned gates',
    'Built a repeatable model testable across topics and lab formats',
  ],
  reflection: `What I'd put on a portfolio slide: not "I used Claude to make labs," but "I led discovery on a repeatable AI-assisted lab production workflow that cut time to publication by 60–90% with human-verified quality."

The hard part was proving speed and boundaries at the same time — faster output, but only where AI actually helped. Drafting and structuring, yes. Code checks, framework validation, instructional judgment, and final approval, no.

That's the work I want more of: figuring out where new tools earn a place in real production systems, and where humans still have to own the call.`,
  nextSlug: 'presentation-builder',
}

const presentationBuilder: CaseStudyDetail = {
  slug: 'presentation-builder',
  number: '02',
  status: 'full',
  description:
    'An anonymized case study on extracting .pptx slides into shape-level JSON — structured data AI can actually work with.',
  tags: ['AI Tools', 'Structured Data', 'Slide Systems', 'Prototyping'],
  imageLabel: 'Workflow Diagram',
  cardImageSrc: '/images/case-studies/presentation-builder/workflow-diagram.png',
  cardImageAlt:
    'Sanitized workflow diagram: presentation to programmatic slide pipeline',
  eyebrow: 'CASE STUDY 02 / ANONYMIZED FIELD REPORT',
  title: 'Secure Presentation Workflow Add-in',
  subtitle:
    'Complex presentation files turned into structured slide data, with shape-level JSON as the source of truth.',
  metaChips: [
    { label: 'Role', value: 'Creative Technologist' },
    { label: 'Type', value: 'AI Product / Workflow Prototype' },
    { label: 'Focus', value: 'PPTX Extraction, JSON Schema, Structured Slides' },
    { label: 'Status', value: 'Anonymized Case Study' },
  ],
  privacyNote:
    'I am unable to show the original prototype due to company IP restrictions. This case study recreates the core workflow through sanitized diagrams, wireframes, and generic examples — not proprietary templates, internal standards language, real course content, actual prompts, internal schemas, or unreleased product direction.',
  heroVisualLabel: 'Presentation-to-Programmatic Slide Workflow',
  heroImageSrc: '/images/case-studies/presentation-builder/workflow-diagram.png',
  heroImageAlt:
    'Workflow diagram showing inputs, extraction, JSON schema, editing, validation, AI layer, and outputs',
  heroImageWidth: 1024,
  heroImageHeight: 576,
  snapshot: {
    problem:
      'PPTX files are visually useful, but structurally messy for AI. They are massive, token-heavy, and easy for AI to misread.',
    myRole:
      'I designed a workflow that treats .pptx as input, extracts slide elements into shape-level JSON, and makes that layer the source of truth for editing, validation, and AI-assisted generation.',
    outcome:
      'A working demo showing presentation files could become structured teaching data — ready for standards checks, regeneration, and reusable elements.',
  },
  challenge: `Presentation files are not clean AI data sources. A .pptx can hide a lot of complexity: shapes, grouped objects, text boxes, layout metadata, placeholders, images, and theme styling. Fed directly into AI workflows, these files burn tokens, drop context, and give the model room to hallucinate or misread slide structure.

This wasn't a "PPTX to HTML" project or a slide generator. The real work was building a system that turns decks into structured, inspectable data — without treating the raw file as source of truth.`,
  myRole: `I:
- treated .pptx as an input layer, not the canonical data model
- designed a JSON extraction layer tied to shape-level identifiers
- captured element type, content, position, layout, style, and instructional purpose in structured data
- explored JSON, HTML, and Markdown as editable views of the same slide model
- prototyped visual and code-based editing against the JSON source of truth
- placed standards checks, validation, and AI suggestions in the pipeline
- built a portfolio-safe demo without exposing proprietary implementation details`,
  fieldNotes: [
    {
      step: 1,
      title: 'Name the real constraint',
      body: 'I started with why raw .pptx files break down in AI workflows: too much hidden structure, too many tokens, and too much room for the model to invent slide logic that is not actually there.',
    },
    {
      step: 2,
      title: 'Pull out slide structure',
      body: 'The prototype extracted slide elements into JSON with shape IDs — not just visible text, but layout, structure, and teaching metadata behind each slide.',
    },
    {
      step: 3,
      title: 'Make JSON the source of truth',
      body: 'Once extracted, the JSON layer became canonical. The deck was input. The structured model was what authors edited, validated, regenerated, and prepared for AI workflows.',
    },
    {
      step: 4,
      title: 'Support multiple edit surfaces',
      body: 'The same structured slide could be edited visually or as JSON schema, HTML, or Markdown — easier to inspect and change in code.',
    },
    {
      step: 5,
      title: 'Validate before generating',
      body: 'Standards checks for structure, completeness, readability, teaching elements, and layout consistency happened against the JSON model before AI generation entered the workflow.',
    },
    {
      step: 6,
      title: 'Show structured output',
      body: 'The demo turned slide files into structured teaching data — ready for automated checks, suggestions, generation, and reusable elements.',
    },
  ],
  artifacts: [
    {
      title: 'Problem Flow',
      description:
        'Raw .pptx in AI workflows → token bloat → lost context → misread structure → unreliable output.',
      variant: 'problem-flow',
    },
    {
      title: 'Proposed Workflow',
      description:
        '.pptx as input → shape-level JSON extraction → JSON as source of truth → edit & validate → structured teaching data.',
      variant: 'proposed-flow',
    },
    {
      title: 'Conceptual System Map',
      description:
        'Input, extraction, structure, rendering, standards-check, AI-assist, and output layers — with JSON as the center of the system.',
      imageSrc: '/images/case-studies/presentation-builder/workflow-diagram.png',
      imageAlt: 'Conceptual system map of the presentation-to-programmatic slide workflow',
      featured: true,
    },
    {
      title: 'Editor Wireframe',
      description:
        'Generic UI showing visual editing, JSON schema view, standards results, AI suggestions, and generation controls tied to the same structured slide model.',
      imageSrc: '/images/case-studies/presentation-builder/editor-wireframe.png',
      imageAlt:
        'Sanitized wireframe of a presentation builder with visual and code editors',
      featured: true,
    },
  ],
  solution: `The .pptx file is input, not source of truth.

The prototype extracted slide elements into JSON using shape-level identifiers — element type, content, position, layout, style, and instructional purpose.

Once extracted, JSON became canonical. Authors could edit visually or as JSON schema, HTML, or Markdown, then inspect, validate, regenerate, and prep slides for AI-assisted workflows.

The demo showed presentation files becoming structured learning data — with room for standards checks, generation, content suggestions, and reusable teaching elements.`,
  impact: [
    'Moved the problem from file conversion to structured slide data design',
    'Reduced reliance on raw .pptx as direct AI input',
    'Built a shape-level JSON model that was easier to inspect, validate, and edit',
    'Let authors edit visually or in code against the same source of truth',
    'Mapped a path to standards checks and AI-assisted generation without opaque prompts',
    'Shipped a working demo while keeping the portfolio version fully sanitized',
  ],
  reflection: `The useful line isn't "PPTX to HTML." It's "I turned presentation files into structured data AI can work with."

Hard part: deciding what on a slide actually matters, then making that explicit in JSON tied to shape IDs. After that, editing, validation, suggestions, and programmatic output got a lot simpler.

Good AI product work starts with data modeling and workflow design. Generation comes second.`,
  nextSlug: 'nutriant',
}

// TODO: Expand Nutriant case study content in a later pass — full product field report.
const nutriant: CaseStudyDetail = {
  slug: 'nutriant',
  number: '03',
  status: 'placeholder',
  description:
    'An AI kitchen management platform for regulated meal planning environments.',
  tags: ['Product Design', 'Compliance', 'AI Systems'],
  imageLabel: 'Product Screenshot Placeholder',
  eyebrow: 'CASE STUDY 03 / PRODUCT FIELD REPORT',
  title: 'Nutriant',
  subtitle:
    'Designing an AI kitchen management platform for regulated meal planning environments.',
  metaChips: [
    { label: 'Role', value: 'Founder / Product Builder' },
    { label: 'Type', value: 'AI Product Platform' },
    { label: 'Focus', value: 'Compliance, Meal Planning, Product Systems' },
    { label: 'Status', value: 'In Progress' },
  ],
  heroVisualLabel: 'Product Platform Placeholder',
  snapshot: {
    problem:
      'Regulated meal planning environments need reliable kitchen workflows, not just another generic app shell.',
    myRole:
      'Leading product direction, system design, and early platform architecture for AI-assisted kitchen operations.',
    outcome:
      'In progress — building toward a practical platform for planning, compliance-aware workflows, and kitchen coordination.',
  },
  challenge:
    'Draft placeholder: Meal planning in regulated settings combines operational complexity, compliance constraints, and real-world kitchen chaos.',
  myRole:
    'Draft placeholder: Founder-led product design, workflow mapping, and platform prototyping.',
  fieldNotes: [
    {
      step: 1,
      title: 'Map kitchen operations',
      body: 'TODO: Document field research and operational pain points.',
    },
    {
      step: 2,
      title: 'Design for compliance context',
      body: 'TODO: Expand on constraints without exposing private implementation details.',
    },
  ],
  artifacts: [
    {
      title: 'Platform Overview',
      description: 'TODO: High-level product map placeholder.',
      placeholderLabel: 'Platform Map Placeholder',
    },
    {
      title: 'Workflow Concept',
      description: 'TODO: Kitchen planning flow sketch.',
      placeholderLabel: 'Workflow Concept Placeholder',
    },
  ],
  solution:
    'TODO: Full solution narrative for the AI kitchen management platform.',
  impact: [
    'TODO: Add outcomes as the product matures.',
    'Early validation of problem space and system direction.',
  ],
  reflection:
    'TODO: Expand reflection on building a regulated-context product from zero.',
  nextSlug: 'ai-lab-production',
}

export const caseStudiesBySlug: Record<CaseStudySlug, CaseStudyDetail> = {
  'ai-lab-production': aiLabProduction,
  'presentation-builder': presentationBuilder,
  nutriant,
}

export const caseStudiesList: CaseStudyDetail[] = CASE_STUDY_ORDER.map(
  (slug) => caseStudiesBySlug[slug],
)

export function getCaseStudy(slug: string): CaseStudyDetail | undefined {
  if (slug === 'plottr') {
    return caseStudiesBySlug['presentation-builder']
  }
  if ((CASE_STUDY_ORDER as readonly string[]).includes(slug)) {
    return caseStudiesBySlug[slug as CaseStudySlug]
  }
  return undefined
}

export function toCardStudy(study: CaseStudyDetail): CaseStudy {
  return { ...study, href: getCaseStudyHref(study.slug) }
}

export const homepageCaseStudies: CaseStudy[] = caseStudiesList.map(toCardStudy)
