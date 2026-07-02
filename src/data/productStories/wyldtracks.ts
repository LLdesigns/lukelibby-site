import type { ProductStoryDetail } from './types'

export const wyldtracks: ProductStoryDetail = {
  slug: 'wyldtracks',
  number: '05',
  status: 'full',
  description:
    'A private-alpha AI wildlife field journal: photograph animals and signs, review evidence-backed IDs checked against GBIF, and save a journal you control.',
  tags: [
    'AI Product',
    'Wildlife',
    'Supabase',
    'Edge Functions',
    'React',
  ],
  imageLabel: 'WyldTracks landing hero',
  cardImageSrc: '/images/wyldtracks/wyldtracks-hero.png',
  cardImageAlt:
    'WyldTracks landing page showing wildlife field journal hero and Red Fox dossier preview',
  eyebrow: 'PRODUCT STORY 05 / WILDLIFE INTELLIGENCE',
  title: 'WyldTracks',
  subtitle:
    'An AI-powered animal field journal that helps people identify wildlife and animal signs, review the evidence, and build a private record they can trust.',
  metaChips: [
    { label: 'Role', value: 'Founder / Product Builder' },
    { label: 'Type', value: 'AI Wildlife Field Journal' },
    { label: 'Stack', value: 'React + Supabase + Edge Functions + GBIF' },
    { label: 'Status', value: 'Private Alpha' },
  ],
  liveUrl: 'https://www.wyldtracks.com',
  liveUrlLabel: 'Visit WyldTracks',
  heroVisualLabel: 'WyldTracks landing and product positioning',
  heroImageSrc: '/images/wyldtracks/wyldtracks-hero.png',
  heroImageAlt:
    'WyldTracks landing page with tagline Capture the evidence, Understand the animal, Review the record',
  heroImageWidth: 1400,
  heroImageHeight: 900,
  snapshot: {
    problem:
      'Most identification apps give you a guess and move on. Naturalists need evidence, uncertainty, location context, and a record they can revisit without handing their field notes to a black-box label.',
    myRole:
      'Founder and builder: product direction, UX, Supabase schema, Edge Function AI pipeline, GBIF validation layer, and private alpha launch at wyldtracks.com.',
    outcome:
      'A working private-alpha loop: upload a photo, get a structured AI draft checked against GBIF, review and edit, save to a personal journal with private image storage.',
  },
  context: `WyldTracks is an animal-first field journal, not a plant ID app and not a public social feed.

The product question is simple: what animal was here, and what evidence do we have?

Most mobile ID tools optimize for a single label. WyldTracks optimizes for a reviewable observation: candidates, field marks, confidence, validation warnings, and a human edit step before anything is saved.

The north star is a path from private journal to community-verified wildlife intelligence. The alpha deliberately stops at layer one: prove the capture, analyze, review, save loop before adding maps, reviewers, or public sharing.

Animal-only scope keeps the MVP honest. Users can log visible animals plus tracks, scat, feathers, fur, bones, nests, burrows, and unknown signs. Plants stay out until the animal loop is solid.`,
  myRole:
    'Founder, product designer, and full-stack builder for WyldTracks from concept through private alpha deployment.',
  myRoleFocus: [
    'Product thesis: evidence-first journal, not guess-first ID',
    'Mobile/web UX: landing, observation flow, wildlife dossier, journal',
    'AI analysis contract (structured JSON schema v1.3.1)',
    'Supabase Edge Function pipeline (OpenAI vision, server-side only)',
    'GBIF taxonomy + occurrence validation layer',
    'Private Storage, signed URLs, and row-level security',
    'Alpha feedback board, feature voting, and AI cost tracking',
  ],
  coreIdeaIntro:
    'One loop powers the alpha. Capture evidence in the field, let AI draft an identification, validate against science, review the record, save to your journal.',
  productLoop: [
    'Snap a photo in the field',
    'AI drafts candidates and evidence',
    'GBIF checks name and location plausibility',
    'You review and edit the record',
    'Save to your private journal',
  ],
  coreIdeaClosing:
    'Capture the evidence. Understand the animal. Review the record. Share carefully later.',
  processSteps: [
    {
      step: 1,
      title: 'Capture in the field',
      body: 'From /observations/new, upload a photo and add optional context: field notes, tags, and GPS via map picker or device location. The observation stays a draft until you choose to run analysis.',
    },
    {
      step: 2,
      title: 'AI analysis (server-side)',
      body: 'The analyze-observation Edge Function downloads the private image, calls OpenAI vision, and returns structured JSON: primary and alternative candidates, field marks, summaries, confidence, and sign-specific analysis when the subject is not a visible animal.',
    },
    {
      step: 3,
      title: 'Scientific validation',
      body: 'GBIF taxonomy match confirms whether the proposed scientific name exists. An occurrence check near the coordinates adds plausibility signal (supporting evidence, not proof). Confidence adjusts deterministically when validation is weak.',
    },
    {
      step: 4,
      title: 'Human review',
      body: 'The review screen shows candidates, validation panels, and editable species fields. Nothing saves automatically. The user decides what goes into their journal.',
    },
    {
      step: 5,
      title: 'Journal and dossier',
      body: 'Saved observations land in /journal with search, filters, and view modes. Detail pages use the Wildlife Dossier layout: evidence, taxonomy, validation metadata, and private signed image URLs.',
    },
  ],
  features: [
    {
      title: 'Evidence-First AI Draft',
      description:
        'Structured candidates, field marks, visible evidence, uncertainty notes, and similar species. The AI explains what it sees, not just a single label.',
    },
    {
      title: 'GBIF Validation Layer',
      description:
        'Server-side checks against GBIF taxonomy and nearby occurrence records. Confidence adjusts when names or location plausibility are weak.',
    },
    {
      title: 'Wildlife Dossier Detail View',
      description:
        'Premium observation detail UI: plain and scientific summaries, taxonomy, validation warnings, tags, and natural history context when available.',
    },
    {
      title: 'Private Journal',
      description:
        'List, grid, and field-notes view modes with search and filters. Every observation is private to the signed-in user via row-level security.',
    },
    {
      title: 'Animal + Sign Coverage',
      description:
        'Animals, tracks, scat, feathers, fur, bones, nests, burrows, and unknown signs. Animal-only MVP scope avoids plant ID sprawl.',
    },
    {
      title: 'Alpha Instrumentation',
      description:
        'In-app feedback, feature request voting, admin triage, and AI cost tracking. Built to learn during private alpha, not just ship features.',
    },
  ],
  featuresImageSrc: '/images/wyldtracks/how-it-works.png',
  featuresImageAlt:
    'WyldTracks How it works section: snap a photo, get an instant ID, save to your journal',
  featuresImageSectionTitle: 'Core User Loop',
  artifacts: [
    {
      title: 'Landing + Product Positioning',
      description:
        'Public positioning at wyldtracks.com: wildlife intelligence for naturalists, with a dossier preview showing what a saved observation looks like.',
      imageSrc: '/images/wyldtracks/wyldtracks-hero.png',
      imageAlt: 'WyldTracks landing hero with forest photography and dossier preview card',
      featured: true,
    },
    {
      title: 'How It Works',
      description:
        'Three-step loop on the landing page: snap a photo, get an evidence-backed ID, review and save to your journal.',
      imageSrc: '/images/wyldtracks/how-it-works.png',
      imageAlt: 'WyldTracks how it works steps with icons',
    },
    {
      title: 'Trust the Science',
      description:
        'Landing section explaining GBIF cross-checks and why WyldTracks does not blindly trust the AI output.',
      imageSrc: '/images/wyldtracks/trust.png',
      imageAlt: 'WyldTracks trust and science validation section',
      featured: true,
    },
    {
      title: 'Observable Types',
      description:
        'Animal-only scope for alpha: visible animals plus field signs, without expanding into plants or a public social feed.',
      imageSrc: '/images/wyldtracks/observe.png',
      imageAlt: 'WyldTracks observable types section for animals and signs',
    },
  ],
  dataObjects: [
    'observations (image path, context, ai_result_original, reviewed_result JSONB)',
    'observation-images (private Supabase Storage bucket per user)',
    'user_roles (admin, reviewer, contractor)',
    'observation_scans + ai_cost_events (AI usage tracking)',
    'feedback_items + feature_requests + feature_request_votes',
    'ai_pricing_versions (admin cost simulator)',
  ],
  relationships: [
    'auth.users → observations (RLS: owner read/write)',
    'observations → observation-images storage path ({userId}/{uuid}.ext)',
    'observations.ai_result_original (immutable AI output) vs reviewed_result (user-edited save)',
    'Edge Function → OpenAI vision + GBIF taxonomy + occurrence APIs',
    'feedback_items → admin triage at /admin/feedback',
    'feature_requests ← feature_request_votes (alpha voting board)',
  ],
  approach: `WyldTracks separates guess from record.

When analysis runs, the Edge Function stores the full AI payload as ai_result_original. After review, the user-edited structured result becomes reviewed_result. That split preserves auditability: you can always see what the model said versus what you chose to save.

Images never go to the client as public URLs. Uploads land in a private bucket; detail views use short-lived signed URLs.

The validation layer is deterministic and server-side. GBIF confirms whether a scientific name exists and whether occurrence data supports plausibility near a pin. It does not prove the animal in the photo is that species. The UI uses cautious language and recommends review when confidence drops.

Feature-first Supabase migrations, RLS from day one, and no fake seed data kept the alpha honest. Community review, public maps, and wildlife intelligence networks are roadmap layers, not alpha scope.`,
  results: [
    'Shipped a live private-alpha product at wyldtracks.com with end-to-end observation save flow',
    'Built structured AI contract (schema v1.3.1) with candidates, evidence, and sign analysis',
    'Added GBIF taxonomy and occurrence validation inside the Edge Function pipeline',
    'Designed Wildlife Dossier detail UX for reviewable, evidence-rich observations',
    'Implemented private journal with search, filters, and multiple view modes',
    'Launched alpha feedback, feature voting, and AI cost tracking for product learning',
  ],
  reflection: `The design lesson: trust in nature apps comes from showing your work.

Candidates, field marks, validation warnings, and an explicit human review step matter more than a confident single label. GBIF adds scientific grounding without pretending the photo is verified.

If the north star is a wildlife intelligence network, the alpha had to prove one thing first: people will save observations they believe in. Everything public comes after that loop feels good on a real hike.`,
  mvpScope: [
    'Email auth and private user journal',
    'Observation upload with optional GPS and field notes',
    'Server-side AI analysis via Edge Function',
    'GBIF taxonomy + occurrence validation',
    'Review/edit screen before save',
    'Wildlife dossier detail view with signed image URLs',
    'Journal list with search and filters',
    'Alpha feedback and feature voting',
  ],
  deferredFeatures:
    'Community review queues, public sharing, wildlife maps, reviewer roles UI, offline sync, and plant identification wait until the private journal loop is proven with alpha testers.',
  nextSlug: 'ai-lab-production',
}
