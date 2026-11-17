import type { ProjectDocument } from './types'

export const videokitProject: ProjectDocument = {
  slug: 'videokit',
  title: 'VideoKit',
  description:
    'An internal AI-assisted video review workflow I started so notes, standards checks, and fix status could live with the clip instead of across separate tools.',
  published: true,
  theme: {
    background: '#121416',
    surface: '#1c2124',
    ink: '#f2f4f3',
    muted: '#b7c0c4',
    accent: '#d27a62',
  },
  hero: {
    eyebrow: 'Internal product',
    title: 'VideoKit',
    lede: 'AI-Assisted Video Review',
    role: 'Video reviews had been spread across multiple tools for years. I initiated VideoKit and led the product direction, UX/UI design, and implementation approach. Enterprise security and architecture set the boundaries.',
    meta: 'Internal review · Staging beta',
    tags: ['Product Strategy', 'UX/UI Design', 'Workflow Design', 'AI-Assisted Implementation'],
  },
  blocks: [
    {
      type: 'split',
      id: 'opportunity',
      nav: 'Problem',
      eyebrow: 'Background',
      title: 'The Problem',
      paragraphs: [
        'Authors still uploaded and published the same way they already did. The gap was in the middle of the workflow. A file moved through separate tools for storage, comments, and tracking, and a spreadsheet could mark a video as in review without saying what was still wrong.',
        'The teams already understood the problem. I started VideoKit myself; it was not an assigned project. Standups, interviews, reviews, and reported bugs helped me identify additional requirements. Timestamped comments were my first idea, but they were not enough. Reviewers needed to track review status, change a finding when it was wrong, and keep earlier scan results available. That was separate from authors still needing to revise the video once feedback came back.',
        'The audience was the internal teams who review training video, and the external authors those teams work with. The beta was a smaller group than that full audience. I do not have a count of who was active in it.',
      ],
    },
    {
      type: 'pair',
      id: 'research-wall',
      nav: 'Research',
      eyebrow: 'Affinity mapping',
      title: 'User Research',
      paragraphs: [
        'The same research rooms that shaped SlideKit also informed VideoKit. Authors mapped audio gear, Camtasia, screen capture, and “slide / video frustration.” Those notes were not a product brief. They were working evidence that recording problems and review problems sat in the same production path.',
        'That pattern shaped the product direction: put the finding on the timeline, keep status with the clip, and stop asking people to rewatch a whole file just to find something that was already known.',
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
      eyebrow: 'Author Orientation',
      title: 'Early Review Process',
      intro:
        'Author Orientation Version 2 already put a production sample—Module 1, Clip 1—through PE review and a walkthrough call before an author spent weeks on the rest of the course. That loop is the production context VideoKit was built for: get the finding onto the clip early, iterate until the team is confident enough to continue, then keep going.',
      image: '/images/v2/author-research/author-orientation-videokit.jpg',
      imageAlt:
        'Glass whiteboard flowchart titled Author Orientation Version 2 with nine numbered steps from intro email through first-clip review to full course production',
      caption: 'Working board: first clip in, PE review, iterate, then continue the course.',
    },
    {
      type: 'review',
      id: 'review',
      nav: 'Workspace',
      eyebrow: 'Interface',
      title: 'Review Workspace',
      intro:
        'The layout is split into three areas. Left: the module’s clips and the transcript. Center: the video player and waveform, positioned at the selected timestamp. Right: the finding, with room to accept it, adjust it, or write your own note. Courses still hold modules, and modules still hold clips. Those layers stay in one place so reviewers do not have to finish the job across separate tools.',
      beforeLabel: 'Before',
      before: [
        {
          title: 'The file moved through several tools',
          detail:
            'Storage, download, comments, and tracking were separate jobs. The spreadsheet was not the video.',
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
      type: 'pair',
      id: 'checks',
      nav: 'Iterations',
      eyebrow: 'Analyzer settings',
      title: 'Design Iterations',
      paragraphs: [
        'The first settings screen exposed families of checks as separate toggles: sound, picture, face-to-camera, narration, and slides. Reviewers could save templates, but there were so many options that it was hard to know what to turn on for a given video.',
        'I narrowed that into a few scan presets. Default covers screen-recorded or slide-based work. Face to camera is for when the presenter is on screen. Audio only is for when the picture is not the point. Filler words stay as a small, explicit list. Limiting the choices made it clearer what to run and how to use it.',
      ],
      frames: [
        {
          src: '/images/v2/videokit/analyzer-settings-early.png',
          alt: 'Earlier VideoKit analyzer settings with many toggleable check families',
          label: 'Earlier',
          note: 'Many toggles. Templates helped, but choosing what to run was still hard.',
          fit: 'contain',
        },
        {
          src: '/images/v2/videokit/analyzer-settings-later.png',
          alt: 'Later VideoKit AI settings with Default, Face to Camera, and Audio Only presets',
          label: 'Later',
          note: 'Three presets. Reviewers choose a scan preset instead of configuring every individual check.',
          fit: 'contain',
        },
      ],
    },
    {
      type: 'split',
      id: 'judgment',
      nav: 'Judgment',
      eyebrow: 'What stayed human',
      title: 'Human Review',
      paragraphs: [
        'Each screen had one job, and it offered only the actions for that job. A check can name a moment: a caption with too little contrast, a harsh level, a brand mark out of place. The checks helped reviewers identify potential issues, but they still needed to verify each finding. Some checks were ready for reviewers and some were not. A finding could be wrong, so it had to be rejectable.',
        'Checks that held up could later be offered to authors directly. That step was still being designed; it was not a finished self-service release. A new scan was treated as new work so a real problem would not get dropped when another pass ran, and the earlier scan results stayed beside it.',
        'Security constraints kept the first version offline on the desktop until review was allowed into the web catalog. The early screens had too much explanation, so the extra copy came out and the guidance stayed on the finding itself. Checks on picture and sound were fixed rules. Reading a transcript for instructional sense was a separate, assisted judgment. I set the product, the behavior, and the interface. AI assisted the research and the build.',
      ],
    },
    {
      type: 'reflection',
      id: 'outcome',
      nav: 'Results',
      eyebrow: 'Staging beta',
      title: 'Results',
      statement: 'Reviewers reported approximately 30% less time spent reviewing videos.',
      detail:
        'VideoKit reached internal use and an external-author beta on staging, and the path toward a production deployment was prepared. I am not calling it generally available. Reviewers reported about 30 percent less time in review. Separately, they described a self-serve scan returning in seconds where the old loop had taken days. Those are different reports, not one study, and reviewers still had to look—the check did not replace that. If I started again, I would connect the work to the wider production outcome sooner. The success criteria continued to evolve throughout development.',
    }
  ],
}
