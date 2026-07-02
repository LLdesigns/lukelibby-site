export interface StoryFact {
  label: string
  value: string
}

export interface ProblemCard {
  title: string
  body: string
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

export interface RoleGroup {
  title: string
  items: string[]
}

export interface StoryArtifact {
  title: string
  caption: string
  imageSrc: string
  imageAlt: string
  badge?: string
  featured?: boolean
}

export interface OutcomeCard {
  title: string
  body: string
}

export interface PresentationBuilderStoryContent {
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    summary: string[]
    insight: string
  }
  quickFacts: StoryFact[]
  anonymizedNote: {
    title: string
    paragraphs: string[]
  }
  whatINoticed: {
    paragraphs: string[]
    problems: ProblemCard[]
    bridge: string
  }
  productBet: {
    lead: string
    paragraphs: string[]
    quote: string
  }
  myRole: {
    intro: string
    groups: RoleGroup[]
    closing: string
  }
  system: {
    intro: string
    paragraphs: string[]
    flow: string[]
    pivotStep: string
    closing: string
  }
  decisions: ProductDecision[]
  whatIBuilt: {
    intro: string
    groups: BuildGroup[]
    closing: string
  }
  artifacts: {
    intro: string
    items: StoryArtifact[]
  }
  whatChanged: {
    intro: string
    outcomes: OutcomeCard[]
    closing: string
  }
  whatILearned: {
    paragraphs: string[]
  }
  closingThought: {
    paragraphs: string[]
  }
}

export const presentationBuilderStory: PresentationBuilderStoryContent = {
  hero: {
    eyebrow: 'Product Story 02 / Anonymized',
    title: 'Secure Presentation Workflow Add-in',
    subtitle: 'Turning messy PowerPoint workflows into structured slide data.',
    summary: [
      'Presentation decks were not the problem because people could not design slides. The problem was that slides had become the place where everything collided: branding, templates, authoring rules, content standards, review workflows, and eventually AI.',
      'A `.pptx` file looks clean on the surface. Underneath, it is messy: shapes, XML, placeholders, layout references, grouped objects, styling, theme data, and content all tangled together.',
    ],
    insight: 'What if the PowerPoint file was not the source of truth?',
  },
  quickFacts: [
    { label: 'Role', value: 'Creative Technologist / Product Designer / Builder' },
    { label: 'Type', value: 'AI Product / Enterprise Office Add-in' },
    {
      label: 'Focus',
      value: 'PowerPoint add-in, standards checking, slide extraction, JSON schema, AI-ready slide data',
    },
    { label: 'Status', value: 'Anonymized product story' },
  ],
  anonymizedNote: {
    title: 'Anonymized story note',
    paragraphs: [
      'This story is intentionally sanitized. I cannot show the original product, proprietary templates, internal standards language, real course content, actual prompts, internal schemas, unreleased product direction, company tooling names, or company-specific implementation details.',
      'The diagrams and examples on this page recreate the shape of the workflow without exposing company IP. Product names, internal platforms, and design system specifics have been generalized.',
    ],
  },
  whatINoticed: {
    paragraphs: [
      'The template system solved part of the problem, but not the whole workflow.',
      'Templates gave authors a starting point. They did not guarantee that slides stayed compliant after authors began editing them.',
      'Over time, authors could drift from the intended structure. They could work around layouts, change things manually, or create slides that looked close enough visually but were difficult to validate programmatically.',
      'Branding changes created another issue. When the visual system changed, existing decks in the library still had to be updated manually. The template could change, but the old presentations did not automatically inherit that change.',
      'At the same time, AI introduced a new layer of complexity.',
      'Slides are not just text. They contain layout, visual hierarchy, instructional intent, object relationships, and presentation logic. But PowerPoint stores all of that in ways that are noisy and difficult to reason about.',
    ],
    problems: [
      {
        title: 'Templates were a starting point, not governance',
        body: 'Authors could drift from the intended structure, work around layouts, or create slides that looked close enough visually but were difficult to validate programmatically.',
      },
      {
        title: 'Branding changes still required manual cleanup',
        body: 'When the visual system changed, existing decks in the library still had to be updated by hand. The template could change, but old presentations did not automatically inherit that change.',
      },
      {
        title: 'Raw `.pptx` files were too noisy for AI',
        body: 'Slides contain instructional intent, layout, and object relationships, but PowerPoint stores that data in ways that are difficult to reason about programmatically or feed reliably into AI workflows.',
      },
    ],
    bridge:
      'I realized the useful content needed to be separated from the PowerPoint file without losing the value of the slide. That was the product problem.',
  },
  productBet: {
    lead: 'The bet was that a downloaded `.pptx` should not be the canonical source of truth.',
    paragraphs: [
      'The PowerPoint file could still be an input and an output, but the real working layer needed to be structured data.',
      'That structured layer could describe what was actually on the slide: the title, body content, layout, shape IDs, instructional purpose, required elements, visual structure, standards state, and the pieces AI could safely work with.',
      'Once the slide existed as structured JSON, the workflow changed. The product could inspect it, validate it, edit it, render it, prepare it for HTML, use it as cleaner input for AI, and eventually regenerate or transform it.',
    ],
    quote:
      'The important shift was not “Can AI make PowerPoint slides?” It was “Can we turn presentation files into structured slide data that authors, reviewers, designers, and AI can all work from?”',
  },
  myRole: {
    intro: 'I designed and built the full workflow.',
    groups: [
      {
        title: 'Product and design',
        items: [
          'interface design and wireframe planning',
          'shared UI patterns for the add-in experience',
          'broader structured-editor workflow concepts',
          'author-facing validation UI',
        ],
      },
      {
        title: 'Add-in engineering',
        items: [
          'Office add-in architecture with React',
          'PowerPoint add-in development',
          'slide parsing and extraction',
          'standards checking workflow',
        ],
      },
      {
        title: 'Structured data',
        items: [
          'custom JSON schema design',
          'structured slide output',
          'HTML slide direction',
          'AI-ready data model thinking',
        ],
      },
      {
        title: 'Enterprise implementation',
        items: [
          'authentication and access planning',
          'enterprise identity and role-based access',
          'release and deployment workflow',
          'enterprise workflow constraints',
        ],
      },
      {
        title: 'AI workflow direction',
        items: [
          'validation before generation',
          'structured input for AI assistance',
          'path toward editing, validation, and regeneration',
        ],
      },
    ],
    closing:
      'This was not only a UI project or an AI experiment. It was a creative technology project: design, code, data modeling, enterprise constraints, and product workflow all tied together.',
  },
  system: {
    intro:
      'The system started as a PowerPoint add-in that checked slides against authoring standards.',
    paragraphs: [
      'To do that, the add-in had to understand the slide.',
      'That meant extracting slide content into a custom JSON schema: not just the visible text, but the slide elements, structure, and metadata needed to evaluate whether the slide followed the expected rules.',
      'That changed how I thought about the product.',
      'If I could extract the slide into JSON for validation, then the JSON layer could become much more than a checking tool. It could become the working model.',
    ],
    flow: [
      'PowerPoint deck',
      'Slide extraction',
      'Custom JSON schema',
      'Standards checks',
      'Author-facing results',
      'Editable structured data',
      'HTML slide output',
      'AI-ready slide model',
    ],
    pivotStep: 'Custom JSON schema',
    closing:
      'From there, the product moved from “check this PowerPoint file” toward “create a structured slide system that can support validation, editing, AI generation, and HTML presentation output.”',
  },
  decisions: [
    {
      label: 'Source of truth',
      title: 'I treated PowerPoint as an input, not the source of truth.',
      body: 'The `.pptx` file still mattered, but it was not the cleanest layer for the product to reason about. PowerPoint was too visual, too flexible, and too messy internally. Authors could make something look right while still breaking the structure underneath. The structured JSON layer gave the system something more stable to inspect, validate, and eventually regenerate.',
    },
    {
      label: 'Content structure',
      title: 'I separated instructional content from presentation noise.',
      body: 'Slides contain a lot of data that does not directly matter to the instructional content. Some of that data is necessary for rendering, but a lot of it is noise when the goal is to understand what the slide is actually communicating. The product needed to separate the meaningful content from the PowerPoint-specific complexity around it.',
    },
    {
      label: 'Quality workflow',
      title: 'I built validation before generation.',
      body: 'The first practical problem was standards checking. Before AI could be useful, the system needed to know whether a slide was structured correctly, followed the expected rules, and included the required content elements. That meant validation had to come before generation.',
    },
    {
      label: 'Adoption path',
      title: 'I designed around existing author behavior.',
      body: 'Authors were already working in PowerPoint. The workflow could not ignore existing habits, templates, and production expectations. The product had to meet authors inside PowerPoint first, then gradually move the source of truth into a more structured layer.',
    },
    {
      label: 'System bridge',
      title: 'I made the JSON model the bridge.',
      body: 'The custom schema became the bridge between PowerPoint, standards checking, HTML output, and AI readiness. It allowed the same slide to be understood as a visual slide, structured JSON, validation data, potential HTML content, and cleaner AI input.',
    },
  ],
  whatIBuilt: {
    intro:
      'I built the PowerPoint add-in and the broader structured slide workflow around it. The add-in inspected slides, extracted content, and returned standards-related feedback inside PowerPoint.',
    groups: [
      {
        title: 'PowerPoint add-in',
        items: [
          'Office add-in architecture with React',
          'slide inspection workflow',
          'author-facing standards results',
          'in-PowerPoint feedback experience',
        ],
      },
      {
        title: 'Structured slide model',
        items: [
          'slide content extraction',
          'custom JSON schema design',
          'shape and content mapping direction',
          'structured slide output',
        ],
      },
      {
        title: 'Product and interface design',
        items: [
          'interface design and wireframe planning',
          'shared UI patterns for validation and feedback',
          'validation results UI',
          'early structured-editor experience direction',
        ],
      },
      {
        title: 'Enterprise implementation',
        items: [
          'authentication and access planning',
          'enterprise identity and role-based access',
          'release and deployment workflow',
          'enterprise workflow constraints',
        ],
      },
      {
        title: 'Future workflow direction',
        items: [
          'HTML slide output direction',
          'AI-ready slide data model',
          'path toward editing, validation, regeneration, and AI assistance',
        ],
      },
    ],
    closing:
      'The first version solved a practical problem: authors needed a way to check whether their slides followed expected authoring standards. But the deeper value came from what that required underneath: a structured representation of slide content.',
  },
  artifacts: {
    intro:
      'The visuals shown for this project are sanitized recreations, not screenshots of the proprietary product. They are meant to explain the workflow, not reveal the original interface or internal implementation.',
    items: [
      {
        title: 'Presentation-to-programmatic slide workflow',
        caption:
          'This diagram shows the larger system shape: PowerPoint input, slide extraction, custom JSON schema, editing layers, validation, AI assistance, and structured outputs. The important part is that JSON sits at the center. That structured model becomes the place where the slide can be inspected, edited, checked, and prepared for AI workflows.',
        imageSrc: '/images/case-studies/presentation-builder/workflow-diagram.png',
        imageAlt:
          'Sanitized workflow diagram showing presentation to programmatic slide pipeline with JSON at the center',
        badge: 'Concept diagram',
        featured: true,
      },
      {
        title: 'Sanitized editor concept',
        caption:
          'The editor concept shows how the same slide could be understood across multiple surfaces. A user can see the slide visually, inspect the outline, view slide layers, edit properties, and inspect the structured JSON behind the slide. The concept is not about recreating the original product screen. It is about showing the product idea: the slide is no longer just a PowerPoint file. It is a structured object that can be viewed, edited, validated, and eventually rendered in different ways.',
        imageSrc: '/images/case-studies/presentation-builder/editor-wireframe.png',
        imageAlt:
          'Sanitized editor concept wireframe with visual and JSON views of the same slide',
        badge: 'Concept visual',
        featured: true,
      },
    ],
  },
  whatChanged: {
    intro:
      'The work reframed the problem. Instead of treating presentation work as a template-download problem, the product treated it as a structured content workflow.',
    outcomes: [
      {
        title: 'Standards moved closer to the author',
        body: 'Authors could see standards issues closer to where they were working.',
      },
      {
        title: 'Slides became inspectable data',
        body: 'Slide content could be inspected as structured JSON instead of only existing as a static PowerPoint file.',
      },
      {
        title: 'Review became easier to reason about',
        body: 'Reviewers had a clearer path to evaluate compliance.',
      },
      {
        title: 'Templates became less fragile',
        body: 'The system reduced dependence on downloaded templates as the only control mechanism.',
      },
      {
        title: 'AI had a cleaner foundation',
        body: 'The workflow created a path toward AI-ready slide generation from structured data instead of raw `.pptx` noise.',
      },
      {
        title: 'HTML slides became possible',
        body: 'The workflow created a path toward HTML slide output from the same structured model.',
      },
    ],
    closing:
      'Most importantly, it created a foundation. Once the slide could be represented outside of PowerPoint, the product could start moving toward editing, validation, regeneration, and AI assistance from a shared source of truth.',
  },
  whatILearned: {
    paragraphs: [
      'I learned that PowerPoint is easy to underestimate.',
      'A slide looks simple to a person, but programmatically it can be extremely complex. The visible design is only one layer. Underneath that are shapes, IDs, XML, references, layout rules, theme data, and hidden structure.',
      'I also learned that AI generation is usually not the first problem to solve. The harder problem is preparing the data.',
      'If the source material is messy, AI will guess. If the structure is unclear, AI will hallucinate. If the standards are not explicit, AI cannot reliably follow them.',
      'The useful insight was not “AI can make slides.” The useful insight was “AI needs a structured slide model before it can help with slide workflows in a reliable way.”',
      'That is what made this project feel like creative technology work. It was design, engineering, data modeling, author workflow, enterprise constraints, and AI product thinking all at once.',
    ],
  },
  closingThought: {
    paragraphs: [
      'This project is one of the clearest examples of how I think as a creative technologist.',
      'I did not just build a PowerPoint tool.',
      'I found the system underneath a messy workflow and turned it into something structured enough for people, validation rules, and AI to work with.',
    ],
  },
}
