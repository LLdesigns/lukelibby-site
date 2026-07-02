import type { ProductStoryDetail } from './types'

export const aiLabProduction: ProductStoryDetail = {
  slug: 'ai-lab-production',
  number: '01',
  status: 'full',
  description:
    'An anonymized product story on proving AI-assisted lab production could move faster at scale, with human-verified quality and clear boundaries on where AI belongs.',
  tags: ['AI Workflows', 'Instructional Design', 'Technical Content', 'Process Design'],
  imageLabel: 'Lab Production Workflow',
  cardImageSrc: '/images/case-studies/hands-on-ai-flow/aidiaflow.png',
  cardImageAlt:
    'Sanitized workflow diagram for AI-assisted hands-on lab production',
  eyebrow: 'PRODUCT STORY 01 / ANONYMIZED',
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
    { label: 'Status', value: 'Anonymized Product Story' },
  ],
  privacyNote:
    'This story is anonymized to protect company IP. It focuses on my discovery process, workflow testing, and proof-of-concept work, not proprietary prompts, internal tooling, unreleased product direction, or confidential lab content.',
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
      'The PoC cut time to publication by about 60% on average, up to 90% in some cases, while keeping human-verified quality and mapping where AI belonged vs. where it did not.',
  },
  context: `The question wasn't whether AI could write lab steps. It was whether AI could sit inside a real lab production workflow without breaking what makes hands-on learning content trustworthy.

Hands-on coding labs depend on more than code snippets. They need instructional intent, progressive difficulty, accurate technical steps, learner-safe environments, and review against live publishing standards. In production, lab content and instructional design were measured against backward-design objectives, competency-based rubrics, and scaffolded practice frameworks, the same standards that helped produce consistent, publish-ready labs at scale. The existing model leaned on heavy manual authoring, scattered review, and repeated formatting across drafting, validation, and handoff.

Most teams would frame this as "use AI to write labs faster." I was trying to answer a harder one: can AI become part of a repeatable production system that still passes instructional review, code validation, and live publishing standards, and can it actually move faster at scale without dropping quality?`,
  myRole:
    'Discovery lead, workflow tester, and proof-of-concept owner for AI-assisted lab production.',
  myRoleFocus: [
    'Mapped where AI could fit inside a real hands-on lab production pipeline',
    'Tested whether AI-assisted drafts could still pass backward-design, competency-based, and scaffolded-practice frameworks',
    'Owned the proof-of-concept for AI-assisted lab drafting and structuring',
    'Defined where human review, code validation, and publishing standards could not be skipped',
    'Mapped where AI helped in the pipeline and where it did not: drafting and structuring vs. code validation, instructional judgment, and final approval',
    'Checked whether the workflow could hold up across different technical topics and lab formats',
    'Documented a repeatable production model the team could actually use',
  ],
  processSteps: [
    {
      step: 1,
      title: 'Start with the hard question',
      body: "I threw out the easy version of the problem first. Faster text generation wasn't the goal. The goal was a workflow that still held up to instructional design, code checks, and publishing standards.",
    },
    {
      step: 2,
      title: 'Map the production system',
      body: 'I mapped how hands-on labs moved from brief to draft, technical review, instructional review, validation, and publication, where work was repetitive, where judgment mattered, and where mistakes would hurt.',
    },
    {
      step: 3,
      title: 'Measure against production frameworks',
      body: 'Lab content and instructional design were measured against backward-design objectives, competency rubrics, and scaffolded practice frameworks, the same checks that helped produce publish-ready labs, not just plausible code on first pass.',
    },
    {
      step: 4,
      title: 'Draw the AI boundary',
      body: 'Part of the PoC was proving where AI belonged and where it did not. Drafting, outlining, and early structuring, yes. Code validation, instructional judgment, framework checks, and final sign-off, still human.',
    },
    {
      step: 5,
      title: 'Run the proof of concept',
      body: 'I ran the PoC end to end at production scale, structured inputs, AI drafts, human verification, validation steps, and handoffs, tracking speed and quality against the existing workflow.',
    },
    {
      step: 6,
      title: 'Prove speed and repeatability',
      body: 'The PoC showed we could move much faster without skipping human review, cutting time to publication by about 60% on average, up to 90% in some cases, with verified quality. It also held up across topics and formats, not just as a one-off test run.',
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
  approach: `AI became one layer inside a structured lab production workflow, not a replacement for instructional design or technical review.

The proof of concept used structured inputs and AI-assisted drafting to speed up early lab creation. Every draft still went through human verification and had to pass backward-design, competency, and scaffolded-practice checks, plus code accuracy, review loops, and live publishing standards.

The results were concrete. The workflow moved much faster at scale while producing quality content verified by humans, cutting time to publication by about 60% on average, up to 90% in some cases. We also proved where AI belonged in the pipeline (drafting, outlining, early structuring) and where it did not (code validation, instructional judgment, framework checks, final approval).`,
  results: [
    'Cut time to publication by about 60% on average, up to 90% in some cases, with human-verified quality',
    'Proved the workflow could move faster at scale without treating AI output as publish-ready',
    'Mapped where AI belonged in the pipeline and where it did not',
    'Showed AI drafts could still pass backward design, competency rubrics, and scaffolded practice frameworks',
    'Kept code accuracy, instructional judgment, and final approval as human-owned gates',
    'Built a repeatable model testable across topics and lab formats',
  ],
  reflection: `What I'd put on a portfolio slide: not "I used Claude to make labs," but "I led discovery on a repeatable AI-assisted lab production workflow that cut time to publication by 60–90% with human-verified quality."

The hard part was proving speed and boundaries at the same time, faster output, but only where AI actually helped. Drafting and structuring, yes. Code checks, framework validation, instructional judgment, and final approval, no.

That's the work I want more of: figuring out where new tools earn a place in real production systems, and where humans still have to own the call.`,
  nextSlug: 'presentation-builder',
}
