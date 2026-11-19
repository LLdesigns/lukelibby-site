import type { ProjectDocument } from './types'


export const wyldtracksProject: ProjectDocument = {
  slug: 'wyldtracks',
  title: 'WyldTracks',
  description:
    'A wildlife observation platform I designed, built, and launched independently: photo-first capture, scientific context, and optional identification in one journal.',
  liveUrl: 'https://www.wyldtracks.com',
  liveLabel: 'Published product',
  theme: {
    background: '#101714',
    surface: '#1a2420',
    ink: '#f4f7f2',
    muted: '#b7c4bb',
    accent: '#8fd0a6',
  },
  hero: {
    eyebrow: 'Independent product',
    title: 'WyldTracks',
    lede: 'Photo-First Wildlife Journal',
    role: 'A wildlife observation platform I independently designed, built, and launched. It brings field journaling, scientific context, and AI-assisted identification into one experience for everyday explorers and working biologists.',
    meta: 'Progressive Web App',
    tags: [
      'Product Strategy',
      'UX / UI Design',
      'User Research',
      'Systems Architecture',
      'AI Orchestration',
      'Independent Development',
    ],
    image: '/images/v2/wyldtracks-field.jpg',
    imageAlt: 'A tree frog in the woods beside WyldTracks on a phone and a wider journal on a tablet',
    imagePosition: '68% 46%',
  },
  blocks: [
    {
      type: 'split',
      id: 'opportunity',
      nav: 'Problem',
      eyebrow: '01  —  Background',
      title: 'The Problem',
      paragraphs: [
        'The idea started with a biologist I know who wanted a better way to document the wildlife he encountered in the field. He wanted to record observations, verify findings, and share discoveries with friends and fellow scientists.',
        'I researched existing tools and interviewed biologists about their workflows. There were specialized applications for birding, plants, and specific animal groups, but I kept returning to the same question: why couldn’t documenting wildlife be as simple as taking a photograph?',
        'The opportunity was not another identification app. It was to make scientific observation more accessible without losing the depth that makes a field record valuable.',
      ],
    },
    {
      type: 'split',
      id: 'research',
      nav: 'Research',
      eyebrow: '02  —  Research and discovery',
      title: 'User Research',
      paragraphs: [
        'The research showed two different needs. A casual explorer may only want to know what animal they encountered. A biologist may need environment, behavior, location, and other context for the observation to be useful later.',
        'I drew on learning design—cognitive load and staged understanding—to decide how much information someone should see on first open versus when they drill into a record.',
        'The experience is progressive: simple for someone new, with more scientific detail available when it is needed. Capture the encounter first. Add depth when it matters.',
      ],
    },
    {
      type: 'decisions',
      id: 'design',
      nav: 'Design',
      eyebrow: '03  —  Product design',
      title: 'Product Design',
      intro:
        'I tested two ways to begin an observation with 20 people, using in-app analytics and interviews. Starting with a form left people unsure what they were supposed to enter. Starting with the camera fit a sighting that does not wait.',
      features: [
        {
          title: 'Photograph First',
          problem:
            'A form-first start asked for details before the encounter was even recorded. In the field, that uncertainty costs the sighting.',
          decision:
            'The observation opens on the photograph. An editable record follows, and identification stays optional. The interface is built for outdoors: readable type, generous touch targets, and actions that can be used quickly.',
          image: '/images/wyldtracks/screen-capture.jpg',
          imageAlt: 'New observation, with the photograph as the current step and identification still ahead',
          mediaSide: 'start',
          callouts: [
            { label: 'The photograph is the start.', y: 20 },
            { label: 'Identify waits until after the encounter.', y: 34 },
          ],
        },
      ],
    },
    {
      type: 'aside',
      id: 'ai',
      nav: 'AI',
      eyebrow: '04  —  Designing AI into the experience',
      title: 'Human Review and AI Assist',
      paragraphs: [
        'A photograph can show what an animal looks like. It does not necessarily capture behavior, sound, habitat, or the circumstances of the encounter.',
        'The experience combines the visual evidence with scientific context and the observer’s own notes, without turning every sighting into a questionnaire.',
        'The AI assists with interpretation. The person still decides what belongs in the record and whether a suggestion is close enough to keep.',
      ],
      mediaSide: 'end',
      media: {
        src: '/images/wyldtracks/screen-journal.jpg',
        alt: 'Journal entry for an Eastern Gray Tree Frog, with the photograph and the suggested identification still open to review',
        caption: 'The suggestion stays attached to the photograph. The person decides what belongs in the record.',
      },
    },
    {
      type: 'process',
      id: 'build',
      nav: 'Build',
      eyebrow: '05  —  From idea to working application',
      title: 'From Idea to Alpha',
      intro:
        'I owned the product from the concept through the working alpha. I designed the interface in Figma, defined the flows and how the pieces fit together, and used AI-assisted development to implement and refine it. The product had to be a Progressive Web App so it could reach the devices people already carry, and so I could iterate without separate native releases.',
      stages: [
        { label: 'Interface', detail: 'The screens and components, designed in Figma.' },
        { label: 'Flows', detail: 'How a sighting is captured, reviewed, and returned to.' },
        { label: 'Structure', detail: 'How the photograph, the notes, and a suggestion stay one record.' },
        { label: 'AI-assisted build', detail: 'Models sped up implementation. They did not choose the product.' },
        { label: 'Feedback cycles', detail: 'Release a change, test it, and keep what holds up in use.' },
      ],
    },
    {
      type: 'experience',
      id: 'result',
      nav: 'Results',
      eyebrow: '06  —  Published',
      title: 'Results',
      intro:
        'WyldTracks is published on the web and gathering feedback: a personal wildlife journal, a way to capture an observation, and screens for exploring and sharing what was found. The longer view includes community-supported observations and a deeper reading of wildlife patterns. The first product stays narrower than that on purpose.',
      scenes: [
        {
          layout: 'split',
          mediaSide: 'start',
          title: 'Capture is the action you come back to.',
          body: 'Home keeps the latest observation in view and offers a direct way to log another.',
          image: '/images/wyldtracks/screen-home.jpg',
          imageAlt: 'Home screen with the latest observation and a way to log a new sighting',
          caption: 'The return screen. The last sighting is still there.',
        },
        {
          layout: 'stage',
          title: 'The map places the encounter.',
          body: 'Layers help locate the place, and habitat zones show where an animal encounter fits the landscape. Search stays next to the terrain.',
          image: '/images/wyldtracks/screen-layers.jpg',
          imageAlt:
            'WyldTracks map layers open on a phone, with trails, a wildlife overlay, and habitat zones turned on over a satellite map',
          caption: 'Observations, trails, and habitat zones, on a satellite basemap.',
        },
        {
          layout: 'compare',
          title: 'The phone is for the encounter. A wider screen is for the journal.',
          body: 'Mobile is for capturing observations. Desktop is for reviewing and organizing them.',
          frames: [
            {
              src: '/images/wyldtracks/screen-journal.jpg',
              alt: 'Journal on a phone, open to an Eastern Gray Tree Frog entry',
              label: 'Mobile',
              caption: 'The entry, at the size of the moment it was recorded.',
              fit: 'contain',
            },
            {
              src: '/images/wyldtracks/screen-journal-desktop.jpg',
              alt: 'WyldTracks journal on a desktop, with a grid of observations',
              label: 'Desktop',
              caption: 'The same journal, with room to review several observations at once.',
              fit: 'wide',
            },
          ],
        },
      ],
    },
    {
      type: 'reflection',
      id: 'belief',
      nav: 'Belief',
      eyebrow: '07  —  Product focus',
      title: 'Product Focus',
      statement:
        'Photo first, details when they matter—that was the product bet for WyldTracks.',
      detail:
        'Building WyldTracks made that concrete. Casual explorers and working biologists share one journal, but they do not need the same depth on first open. The published product stays focused on recording the sighting before a form or identification step gets in the way, and feedback continues to shape what comes next. The goal is not to give people every possible capability—it is to understand what they are trying to accomplish and remove the unnecessary steps. Community-supported observations and deeper pattern reading are on the longer view; they are not the first job.',
    },
  ],
}
