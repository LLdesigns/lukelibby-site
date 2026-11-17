import type { ProjectDocument } from './types'

export const videokitProject: ProjectDocument = {
  slug: 'videokit',
  title: 'VideoKit',
  description:
    'An internal review workflow I initiated so video notes, standards checks, and the status of a fix could live in one place instead of across separate tools.',
  published: true,
  theme: {
    background: '#121416',
    surface: '#1c2124',
    ink: '#f2f4f3',
    muted: '#b7c0c4',
    accent: '#d27a62',
  },
  hero: {
    eyebrow: 'VideoKit',
    title: 'VideoKit',
    lede: 'Review the finding. Do not rewatch the whole video to discover it.',
    role: 'Teams had lived with a fragmented review process for a long time. I initiated VideoKit on my own and carried the product decisions, the interface, and the implementation direction. Enterprise security and architecture set the boundaries.',
    meta: 'Internal review · Staging beta',
    tags: ['Product Strategy', 'UX/UI Design', 'Workflow Design', 'AI-Assisted Build'],
  },
  blocks: [
    {
      type: 'review',
      id: 'review',
      nav: 'The review',
      eyebrow: 'The decision',
      title: 'One place to watch, judge, and leave the note.',
      intro:
        'Left: the module’s clips and the transcript. Center: the picture and the waveform, on the moment you chose. Right: the finding, with room to accept it, adjust it, or write your own note. A course still holds modules, and a module holds clips. The review keeps those layers in one place so the job is not a hunt across tools.',
      beforeLabel: 'Before',
      before: [
        {
          title: 'The file moved through several tools',
          detail: 'Storage, download, comment, and tracking were separate jobs, and the spreadsheet was not the video.',
        },
        {
          title: 'Status lived elsewhere',
          detail: 'A row could say a video was in review without saying what was still wrong.',
        },
        {
          title: 'Authors waited on the round trip',
          detail: 'Feedback came back late, and it was not always clear when the work was finished.',
        },
      ],
      media: {
        src: '/images/v2/videokit/review-layout.png',
        alt: 'VideoKit review layout with clips and transcript on the left, player and waveform in the center, and module findings on the right',
      },
      caption: 'The review layout: clips and transcript, the picture, and the finding.',
    },
    {
      type: 'split',
      id: 'opportunity',
      nav: 'Opportunity',
      eyebrow: 'Who it was for',
      title: 'The same video was being handled by too many hands and too many tools.',
      paragraphs: [
        'Authors still uploaded and published the way they already did. The broken part was the middle. A file moved through separate tools to be stored, commented on, and tracked, and a spreadsheet could say a video was in review without saying what was still wrong.',
        'The teams already knew this. I started the product myself. It was not assigned. Standups, interviews, reviews, and the bugs that came back filled in the rest. Timestamped comments were my first idea. They were not enough. People needed a status, a revision, and a record of what an earlier pass had found.',
        'The audience was the internal teams who review training video and the external authors those teams work with. The beta was a smaller group than that audience. I do not have a count of who was active in it.',
      ],
    },
    {
      type: 'pair',
      id: 'research-wall',
      nav: 'Research',
      eyebrow: 'Author research',
      title: 'The wall already said where video work broke down.',
      paragraphs: [
        'In the same research rooms that shaped SlideKit, authors mapped audio gear, Camtasia, screen capture, and “slide / video frustration.” The notes were not a product brief. They were the working evidence that recording pain and review pain lived in the same production path.',
        'VideoKit started from that pattern: get the finding onto the timeline, keep status with the clip, and stop making people rewatch a whole file to discover what was already known.',
      ],
      frames: [
        {
          src: '/images/v2/author-research/affinity-slides-audio.jpg',
          alt: 'Affinity map under Hardware/Software with slides, assets, audio equipment, sound frustration, and Camtasia columns',
          label: 'Audio & capture',
          note: 'Working board: slides beside audio gear, sound frustration, and Camtasia.',
          fit: 'contain',
        },
        {
          src: '/images/v2/author-research/affinity-hardware-software.jpg',
          alt: 'Wide affinity map with Hardware/Software root and columns for slides, author tools, tooling, and Camtasia',
          label: 'Tooling wall',
          note: 'Author Kit, tooling load, and the places slide work spilled into video.',
          fit: 'contain',
        },
      ],
    },
    {
      type: 'plate',
      id: 'orientation',
      nav: 'Orientation',
      eyebrow: 'First-clip review',
      title: 'The orientation path already assumed a clip would be reviewed early.',
      intro:
        'Author Orientation Version 2 put a production sample—Module 1, Clip 1—through PE review and a walkthrough call before the author poured weeks into the rest of the course. That loop is the production context VideoKit was built for: get the finding onto the clip early, iterate until confidence is enough to continue, then keep going.',
      image: '/images/v2/author-research/author-orientation-videokit.jpg',
      imageAlt:
        'Glass whiteboard flowchart titled Author Orientation Version 2 with nine numbered steps from intro email through first-clip review to full course production',
      caption: 'Working board: first clip in, PE review, iterate, then continue the course.',
    },
    {
      type: 'pair',
      id: 'checks',
      nav: 'Checks',
      eyebrow: 'How the analyzer evolved',
      title: 'Fewer choices. Clearer scans.',
      paragraphs: [
        'The first settings screen exposed families of checks as separate toggles: sound, picture, face-to-camera, narration, and slides. Reviewers could save templates, but the density made it hard to know what to turn on for a given video.',
        'I narrowed that into a few scan presets. Default for screen-recorded or slide-based work. Face to camera when the presenter is on screen. Audio only when the picture is not the point. Filler words stay as a small, explicit list. Limiting the choices reduced confusion about what to run and how to use it.',
      ],
      frames: [
        {
          src: '/images/v2/videokit/analyzer-settings-early.png',
          alt: 'Earlier VideoKit analyzer settings with many toggleable check families',
          label: 'Earlier',
          note: 'Many toggles. Templates helped, but the decision was still dense.',
          fit: 'contain',
        },
        {
          src: '/images/v2/videokit/analyzer-settings-later.png',
          alt: 'Later VideoKit AI settings with Default, Face to Camera, and Audio Only presets',
          label: 'Later',
          note: 'Three presets. The person picks the kind of scan, not every module.',
          fit: 'contain',
        },
      ],
    },
    {
      type: 'split',
      id: 'judgment',
      nav: 'Judgment',
      eyebrow: 'What stayed human',
      title: 'A new scan must not erase the last one.',
      paragraphs: [
        'Each screen had one job, and it offered only the actions for that job. A check can name a moment: a caption with too little contrast, a harsh level, a brand mark out of place. That is a lead. It is not permission to skip the picture. Some checks were ready for reviewers and some were not. A finding could be wrong, so it had to be rejectable.',
        'Checks that held up could later be offered to authors directly. That step was still being designed. It was not a finished self-service release. A new scan was treated as new, so a real problem was not dropped, and the earlier scan stayed beside it.',
        'Security constraints kept the first version offline, on the desktop, until the review was allowed into the web catalog. The early screens then said too much. I removed the extra explanation and left the guidance on the finding. Checks on the picture and the sound were fixed rules. Reading a transcript for instructional sense was a separate, assisted judgment. I set the product, the behavior, and the interface. AI assisted the research and the build.',
      ],
    },
    {
      type: 'reflection',
      id: 'outcome',
      nav: 'Outcome',
      eyebrow: 'Where it landed',
      title: 'Reviewers stopped watching every minute to find the problem.',
      statement: 'The useful change was a faster loop, with a person still at the gate.',
      detail:
        'VideoKit reached internal use and an external-author beta on staging, with the path toward a production deployment prepared. I am not calling it generally available. Reviewers reported about 30 percent less time in review. Separately, they described a self-serve scan returning in seconds where the old loop had taken days. Those are different reports, not one study, and reviewers still had to look. The check did not replace that. If I started again, I would tie the work to the wider outcome sooner. The local target kept moving.',
    },
  ],
}
