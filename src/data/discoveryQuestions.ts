export type DiscoveryChoice = {
  id: string
  label: string
}

export type DiscoveryQuestion =
  | {
      id: string
      type: 'choice'
      prompt: string
      helper?: string
      choices: DiscoveryChoice[]
      allowDetail?: boolean
      detailPrompt?: string
    }
  | {
      id: string
      type: 'text'
      prompt: string
      helper?: string
      placeholder?: string
      required?: boolean
    }
  | {
      id: string
      type: 'email'
      prompt: string
      helper?: string
    }

export const discoveryIntro = {
  title: 'Project brief',
  subtitle:
    'A short set of questions so I can understand what you are building and whether I am a good fit. Takes about three minutes.',
} as const

export const discoveryQuestions: DiscoveryQuestion[] = [
  {
    id: 'project_type',
    type: 'choice',
    prompt: 'What are you trying to build?',
    helper: 'Pick the closest match — you can add detail below.',
    choices: [
      { id: 'ai_app', label: 'AI product or feature' },
      { id: 'automation', label: 'Workflow automation' },
      { id: 'internal_tool', label: 'Internal product or platform' },
      { id: 'mvp', label: 'New product build' },
      { id: 'unsure', label: 'Not sure yet — need help scoping' },
    ],
    allowDetail: true,
    detailPrompt: 'Anything else about the project?',
  },
  {
    id: 'timeline',
    type: 'choice',
    prompt: 'What timeline are you working with?',
    choices: [
      { id: 'asap', label: 'ASAP — need momentum now' },
      { id: 'one_three', label: '1–3 months' },
      { id: 'three_six', label: '3–6 months' },
      { id: 'exploring', label: 'Just exploring options' },
    ],
  },
  {
    id: 'team',
    type: 'choice',
    prompt: 'Who is involved on your side?',
    choices: [
      { id: 'solo', label: 'Solo founder or operator' },
      { id: 'small', label: 'Small team (2–10)' },
      { id: 'org', label: 'Larger org with stakeholders' },
      { id: 'agency', label: 'Agency or partner building for a client' },
    ],
    allowDetail: true,
    detailPrompt: 'Who else should be in the loop?',
  },
  {
    id: 'ai_interest',
    type: 'choice',
    prompt: 'How important is AI to this project?',
    choices: [
      { id: 'core', label: 'Core to the product' },
      { id: 'helpful', label: 'Helpful but not the whole thing' },
      { id: 'later', label: 'Maybe later — focus on workflow first' },
      { id: 'none', label: 'Not looking for AI' },
    ],
  },
  {
    id: 'pain_point',
    type: 'text',
    prompt: 'What is the biggest friction right now?',
    helper: 'The messy workflow, bottleneck, or thing that keeps breaking.',
    placeholder: 'e.g. Our team re-types the same data across three tools every week…',
    required: true,
  },
  {
    id: 'stack',
    type: 'text',
    prompt: 'Current tools or stack? (optional)',
    placeholder: 'e.g. Notion, Airtable, custom React app, spreadsheets…',
  },
  {
    id: 'budget',
    type: 'choice',
    prompt: 'Budget mindset',
    helper: 'Rough sense is fine — helps me recommend the right engagement shape.',
    choices: [
      { id: 'exploring', label: 'Still figuring out budget' },
      { id: 'focused', label: 'Focused sprint / scoped build' },
      { id: 'ongoing', label: 'Ongoing build + iteration' },
      { id: 'flexible', label: 'Flexible if the fit is right' },
    ],
    allowDetail: true,
    detailPrompt: 'Any constraints I should know about?',
  },
  {
    id: 'email',
    type: 'email',
    prompt: 'Your email',
    helper: 'Required so I can follow up. No spam — just a reply to your brief.',
  },
  {
    id: 'name',
    type: 'text',
    prompt: 'Your name (optional)',
    placeholder: 'How should I address you?',
  },
]
