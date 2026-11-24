import type { ProjectDocument } from './types'

export const slidekitProject: ProjectDocument = {
  slug: 'slidekit',
  title: 'SlideKit',
  description:
    'A PowerPoint add-in I started so course authors could fix standards problems while they were still editing, before those problems were recorded into a video.',
  published: true,
  theme: {
    background: '#14110e',
    surface: '#221c17',
    ink: '#f6f1ea',
    muted: '#cbbdae',
    accent: '#e0a15c',
  },
  hero: {
    eyebrow: 'Internal product',
    title: 'SlideKit',
    lede: 'PowerPoint Standards Add-in',
    highlight:
      'Slide review time decreased by 28%, and slide creation time decreased by 34%—reviewers spent less time hunting for edits, and authors spent less time hunting for critical presentation assets across multiple places.',
    role: 'I initiated a PowerPoint add-in so authors could correct standards problems while they were still writing the deck, instead of discovering them after a course had been recorded.',
    meta: 'PowerPoint add-in · Published',
    tags: [
      'Product Strategy',
      'UX/UI Design',
      'User Research',
      'Independent Development',
      'Project Lead',
    ],
  },
  blocks: [
    {
      type: 'split',
      id: 'opportunity',
      nav: 'Problem',
      eyebrow: 'Background',
      title: 'The Problem',
      paragraphs: [
        'From hands-on production work, I already knew that a standards problem found after recording was expensive. External authors were building e-learning decks against a large checklist of type, color, contrast, and assets. The internal count of those rules stays off this page.',
        'Authors and reviewers described the same friction. Daily work with a design director and the template owner made the repetitive part clear: title case, small type, brand colors, and finding the current icon.',
        'A small HTML add-in that fixed title case and terminology was enough to prove the approach. Directors backed turning it into a production tool. I rebuilt that production add-in in React and led the product from there.',
      ],
    },
    {
      type: 'plate',
      id: 'research-room',
      nav: 'Research',
      eyebrow: 'Author research',
      title: 'User Research',
      intro:
        'Before building the add-in, I spent time in author research rooms—sticky notes on glass, columns for motivation, support, and where the production sample broke down. The quotes under the headers are interview fragments, not a published study. The pattern that mattered for the product was clear: authors needed structure beside the work, not another checklist somewhere else.',
      image: '/images/v2/author-research/workshop-wall.jpg',
      imageAlt:
        'Workshop room with sticky-note columns on glass walls and a rolling board during author research',
      caption: 'Author research session: affinity columns on glass, with a second board in progress.',
    },
    {
      type: 'pair',
      id: 'research-themes',
      nav: 'Themes',
      eyebrow: 'What the notes clustered around',
      title: 'Motivation and Slide Friction',
      paragraphs: [
        'One map held why people authored, how they took feedback, and what counted as a milestone. Beside it, the notes turned practical: PowerPoint prep time, templates, icons, and the friction of getting assets into the deck.',
        'Those clusters are why the fix stayed inside the deck. Authors were already looking for guidance, so approved assets, formatting, and findings needed to sit next to the slide they were writing.',
      ],
      frames: [
        {
          src: '/images/v2/author-research/affinity-map.jpg',
          alt: 'Sticky-note affinity map on glass with blue and pink category headers over yellow interview notes',
          label: 'Identity & motivation',
          note: 'Interview notes under themes such as motivation, identity, and prior teaching.',
          fit: 'contain',
        },
        {
          src: '/images/v2/author-research/affinity-motivation-slides.jpg',
          alt: 'Glass affinity wall with columns for milestones, feedback, slides, and PowerPoint assets',
          label: 'Slides & feedback',
          note: 'Working board: milestones and PE feedback beside slides and asset friction.',
          fit: 'contain',
        },
      ],
    },
    {
      type: 'pair',
      id: 'research-process',
      nav: 'Process map',
      eyebrow: 'Configuring the path',
      title: 'Production Themes and Orientation',
      paragraphs: [
        'Closer columns tracked where the production sample and scripts created delay or confusion. Separately, the orientation path was rewritten on a whiteboard so a first clip could be reviewed before an author spent weeks on a full course.',
        'SlideKit did not replace that whole path. It removed one expensive class of failure inside it: standards problems that only showed up after recording.',
      ],
      frames: [
        {
          src: '/images/v2/author-research/production-themes.jpg',
          alt: 'Glass wall sticky-note columns for production sample, scripts, and production process',
          label: 'Production themes',
          note: 'Notes on sample speed, scripts, and where the process felt unclear.',
          fit: 'contain',
        },
        {
          src: '/images/v2/author-research/author-orientation-board.jpg',
          alt: 'Glass whiteboard flowchart titled Author Orientation Version 2 with nine numbered steps',
          label: 'Orientation',
          note: 'A first-clip review loop before full course production continues.',
          fit: 'contain',
        },
      ],
    },
    {
      type: 'pair',
      id: 'research-tooling',
      nav: 'Tooling wall',
      eyebrow: 'Hardware, software, and the deck',
      title: 'Slide and Video Tooling',
      paragraphs: [
        'Under Hardware / Software, authors described PowerPoint templates, asset hunting, Author Kit confusion, and places where slide work spilled into recording. That working evidence supported keeping standards fixes in the deck instead of another handbook.',
        'The audio and Camtasia columns on this wall later informed VideoKit. The slides and assets columns stayed with SlideKit.',
      ],
      frames: [
        {
          src: '/images/v2/author-research/affinity-hardware-software.jpg',
          alt: 'Wide affinity map under Hardware/Software with columns for slides, assets, audio, author tools, and Camtasia',
          label: 'Hardware / software',
          note: 'Working map from the research room: slides beside audio and tooling.',
          fit: 'contain',
        },
        {
          src: '/images/v2/author-research/process-suggestions.jpg',
          alt: 'Brown paper board of sticky notes under Support and Suggestions for Improved Process headers',
          label: 'Process asks',
          note: 'Support paths on the left. Requests for clearer structure and earlier feedback on the right.',
          fit: 'contain',
        },
      ],
    },
    {
      type: 'reconstruction',
      id: 'fix',
      nav: 'Decision',
      eyebrow: 'Design decision',
      title: 'In-Deck Corrections',
      intro:
        'Authors were already working in PowerPoint. Sending them somewhere else for icons, type, and a standards check added an extra step, and expensive mistakes still showed up after the video existed. Keeping the asset library, approved formatting, and review next to the slide removed that detour.',
      beforeLabel: 'Before',
      before: [
        {
          title: 'Assets lived somewhere else',
          detail: 'Authors downloaded icons and templates, then hoped they still matched the current brand.',
        },
        {
          title: 'Formatting was repaired by hand',
          detail: 'Title case, type size, brand color, and contrast were fixed one slide at a time.',
        },
        {
          title: 'The video came first',
          detail: 'A standards problem found after recording meant redoing work that was already captured.',
        },
      ],
      slide: {
        kicker: 'Lesson',
        title: 'how field notes begin',
        body: 'A short fictional lesson. The title is still in sentence case.',
      },
      finding: {
        status: 'Needs a fix',
        title: 'Title case',
        what: 'This title is in sentence case.',
        why: 'Titles in this deck use title case, so the recorded lesson stays consistent.',
        action: 'Fix title case',
      },
      caption: 'Conceptual reconstruction created for portfolio demonstration.',
    },
    {
      type: 'plate',
      id: 'tools',
      nav: 'Tools',
      eyebrow: 'Formatting in place',
      title: 'Formatting Tools',
      intro:
        'On the Tools tab, an author selects a shape and applies formatting that used to require a separate search. Title case with tech-term awareness, and casing fixes for product names, run against the selection or the slide. Authors still write the words; the add-in removes the extra step outside PowerPoint.',
      image: '/images/v2/slidekit/tools-title-case.gif',
      imageAlt:
        'SlideKit Tools tab applying title case and terminology fixes beside a PowerPoint slide',
      caption: 'Tools: select a shape, fix title case and terminology without leaving the deck.',
    },
    {
      type: 'pair',
      id: 'assets',
      nav: 'Assets',
      eyebrow: 'Library inside the deck',
      title: 'Asset Library',
      paragraphs: [
        'The asset library sits in the same add-in. Authors search by name, filter by category or color, and place an approved mark without downloading a zip of templates—the extra step the product removed.',
        'Browsing the full set and narrowing a search happen on the same surface, so the author stays in PowerPoint either way.',
      ],
      frames: [
        {
          src: '/images/v2/slidekit/assets-library.gif',
          alt: 'SlideKit Assets tab browsing the approved icon library beside a PowerPoint slide',
          label: 'Browse',
          note: 'The approved set lives next to the canvas.',
          fit: 'contain',
        },
        {
          src: '/images/v2/slidekit/assets-search.gif',
          alt: 'SlideKit Assets tab with a search for SQL icons and color filter applied',
          label: 'Search',
          note: 'Name, category, and color narrow the set without leaving the deck.',
          fit: 'contain',
        },
      ],
    },
    {
      type: 'plate',
      id: 'review',
      nav: 'Review',
      eyebrow: 'Findings in the add-in',
      title: 'Review Findings',
      intro:
        'Review lists what is still wrong, ignored, or fixed. Each finding points at a slide, explains what to change, and opens the control that can repair that failure. Notes can still move into the existing review process, so the add-in did not ask the organization to abandon that step.',
      image: '/images/v2/slidekit/review-findings.gif',
      imageAlt:
        'SlideKit Review tab listing active findings with fix and remove actions beside a PowerPoint slide',
      caption: 'Review: active findings beside the slide, with a path to fix or set aside.',
    },
    {
      type: 'split',
      id: 'control',
      nav: 'Control',
      eyebrow: 'What stayed in the author’s hands',
      title: 'Author Control',
      paragraphs: [
        'Assets, formatting, review, and short documentation sit together in the add-in. The asset library comes first, so an author can search, replace, or drop an image without leaving the deck. Approved fonts and colors are the ones on offer; the author still decides what the slide says.',
        'A general formatting control and a review fix are different jobs. The review card names the failure, explains why it matters, and opens the control that can fix it. The note can still be copied into the existing review process, so the organization did not have to abandon that step.',
        'Long decks made a slow check useless. The approach used a temporary JSON reading of the presentation, scanned in the background, so the author could keep editing. PowerPoint did not always tag a title as a title, network access was limited, and some integrations were unavailable, so the check inferred from the deck instead of calling an outside service. That reading later became the starting point for Plottr. I set the product, the behavior, and the interface. AI assisted the implementation.',
      ],
    },
    {
      type: 'reflection',
      id: 'outcome',
      nav: 'Results',
      eyebrow: 'Published',
      title: 'Results',
      statement: 'Slide review time decreased by 28%. Slide creation time decreased by 34%.',
      detail:
        'The add-in moved through staging into the Microsoft marketplace publishing workflow and was used by internal staff and external authors after release, with feedback continuing afterward. Slide review time decreased by 28% because reviewers no longer had to hunt for the edits. Slide creation time decreased by 34% because authors no longer had to hunt for critical presentation assets across multiple locations. Standards checks could happen before recording, and later review had less to undo.',
    }
  ],
}
