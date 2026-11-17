export type HoneycombArt =
  | 'luma'
  | 'video'
  | 'video-web'
  | 'slides'
  | 'plottr'
  | 'lab'
  | 'play'

export type HoneycombProject = {
  kind: 'project'
  id: string
  title: string
  type: string
  summary: string
  detail?: string
  image?: string
  imageAlt: string
  imagePosition?: string
  art?: HoneycombArt
  href?: string
}

export type HoneycombPhoto = {
  kind: 'photo'
  id: string
  image: string
  imageAlt: string
  imagePosition?: string
  caption: string
  detail?: string
}

export type HoneycombShape = {
  kind: 'shape'
  id: string
}

export type HoneycombItem = HoneycombProject | HoneycombPhoto | HoneycombShape

/** Photographs that fill the existing photo tiles. They do not sit between projects. */
export const v2PhotoTiles: HoneycombPhoto[] = [
  {
    kind: 'photo',
    id: 'columns',
    image: '/images/v2/columns.jpg',
    imageAlt: 'The Nashville Parthenon at night, columns lit from the side against black sky',
    imagePosition: '92% center',
    caption: 'Nashville Parthenon',
    detail: 'The Parthenon in Nashville at 2am. Taken on a Canon 50.',
  },
  {
    kind: 'photo',
    id: 'desert-sun',
    image: '/images/v2/desert-sun.jpg',
    imageAlt: 'A cholla in desert scrub under a bright sun and a dark cloud',
    imagePosition: '54% 58%',
    caption: 'Desert sun',
    detail: 'Cholla in the scrub, with the sun breaking through a building cloud.',
  },
  {
    kind: 'photo',
    id: 'train-486',
    image: '/images/v2/train-486.jpg',
    imageAlt: 'Steam locomotive 486 of the Durango and Silverton, with the engineer in the cab',
    imagePosition: '68% 48%',
    caption: 'Engine 486',
    detail: 'The Durango and Silverton locomotive, working along the rock.',
  },
  {
    kind: 'photo',
    id: 'moose',
    image: '/images/v2/moose.jpg',
    imageAlt: 'A bull moose in falling snow, framed by aspen and evergreen trunks',
    imagePosition: '70% 42%',
    caption: 'Moose',
    detail: 'A bull moose in the snow, seen between the trees.',
  },
  {
    kind: 'photo',
    id: 'fence-ridge',
    image: '/images/v2/fence-ridge.jpg',
    imageAlt: 'A weathered wooden fence leading toward arid mountains under a cloudy sky',
    imagePosition: 'center 45%',
    caption: 'Fence line',
    detail: 'A weathered fence running toward the ridge under a broken sky.',
  },
  {
    kind: 'photo',
    id: 'bison',
    image: '/images/v2/bison.jpg',
    imageAlt: 'A bison standing in dry grass, with bare winter trees behind it',
    imagePosition: '46% 58%',
    caption: 'Bison',
    detail: 'A bison in the grass, under a stand of bare branches.',
  },
  {
    kind: 'photo',
    id: 'night-stars',
    image: '/images/v2/night-stars.jpg',
    imageAlt: 'A dense star field and Milky Way above a black mountain silhouette',
    imagePosition: 'center 35%',
    caption: 'Night sky',
    detail: 'Stars over the ridge, with the Milky Way rising through the middle of the frame.',
  },
  {
    kind: 'photo',
    id: 'coast-rocks',
    image: '/images/v2/coast-rocks.jpg',
    imageAlt: 'Dark ocean water and white foam breaking over brown coastal rocks from above',
    imagePosition: '58% 45%',
    caption: 'Coastal rock',
    detail: 'Looking straight down as the tide works through the rock.',
  },
  {
    kind: 'photo',
    id: 'sunset-ridge',
    image: '/images/v2/sunset-ridge.jpg',
    imageAlt: 'Sunset light on a grassy ridge above water and distant mountains',
    imagePosition: 'center 55%',
    caption: 'Sunset ridge',
    detail: 'Grass catching the last light above the water.',
  },
  {
    kind: 'photo',
    id: 'saw-whet-owl',
    image: '/images/v2/saw-whet-owl.jpg',
    imageAlt: 'A Northern Saw-whet Owl perched on a thin branch beside a tree trunk',
    imagePosition: '42% 35%',
    caption: 'Saw-whet owl',
    detail: 'A Northern Saw-whet Owl on a bare branch, looking straight into the lens.',
  },
  {
    kind: 'photo',
    id: 'eiffel-tower',
    image: '/images/v2/eiffel-tower.jpg',
    imageAlt: 'The Eiffel Tower framed by trees against a blue sky with soft clouds',
    imagePosition: 'center 30%',
    caption: 'Eiffel Tower',
    detail: 'Looking up through the trees to the tower against a clear sky.',
  },
]

/** Projects in catalog order. Tiles without a page stay on the grid as placeholders. */
export const v2WorkHoneycomb: HoneycombItem[] = [
  {
    kind: 'project',
    id: 'slidekit',
    title: 'SlideKit',
    type: 'EdTech',
    summary: 'Fix the slide before the video.',
    detail:
      'A PowerPoint add-in for catching standards problems while the author is still editing, before they are recorded.',
    imageAlt: 'SlideKit Tools panel beside a PowerPoint slide',
    art: 'slides',
    href: '/work/slidekit',
  },
  {
    kind: 'project',
    id: 'plottr',
    title: 'Plottr',
    type: 'Diagrams',
    summary: 'Import, review, and export.',
    detail:
      'A presentation review that brings a deck in, checks it, and sends it back out. The wide editor stayed a prototype.',
    imageAlt: 'Plottr new-project and AI Copilot screens',
    art: 'plottr',
    href: '/work/plottr',
  },
  {
    kind: 'project',
    id: 'videokit',
    title: 'VideoKit',
    type: 'Video',
    summary: 'web and desktop',
    detail:
      'One review for the clip, the picture, and the finding, with a person still accepting or setting aside what a check reports.',
    imageAlt: 'VideoKit review layout inside a video monitor',
    art: 'video',
    href: '/work/videokit',
  },
  {
    kind: 'project',
    id: 'luma',
    title: 'Luma',
    type: 'Learning',
    summary: 'See what a tech course actually teaches.',
    detail:
      'A review of technology lessons—objectives, concepts, procedures, and tools—and the topics that were taught without supporting the skill.',
    imageAlt: 'Luma knowledge graph with a selected objective and connected nodes',
    art: 'luma',
    href: '/work/luma',
  },
  {
    kind: 'project',
    id: 'ovrmaps',
    title: 'OVRmaps',
    type: 'Mapping',
    summary: 'A map you can add to.',
    detail:
      'An active outdoor platform for recording a trip and identifying the trail under you. Navigation and unpublished studio tools are not part of that claim.',
    image: '/images/v2/ovrmaps-honeycomb.png',
    imageAlt: 'OVRmaps logo over mountain ridges with trail and campsite map pins',
    imagePosition: 'center 32%',
    href: '/work/ovrmaps',
  },
  {
    kind: 'project',
    id: 'wyldtracks',
    title: 'WyldTracks',
    type: 'Wildlife',
    summary: 'As simple as taking a photograph.',
    detail:
      'A wildlife observation platform for recording a sighting, keeping scientific context, and reviewing an identification.',
    image: '/images/v2/wyldtracks-field.jpg',
    imageAlt: 'A tree frog beside a phone and tablet showing the WyldTracks field journal',
    imagePosition: '42% center',
    href: '/work/wyldtracks',
  },
  {
    kind: 'project',
    id: 'hands-on-labs',
    title: 'AI-Generated Hands-On Labs',
    type: 'Workflow',
    summary: 'Structured lab production.',
    detail:
      'An AI-assisted production pipeline for creating interactive technical learning labs through structured workflows, content generation, and quality review.',
    imageAlt: 'Structured AI-assisted lab pipeline diagram',
    art: 'lab',
    href: '/work/ai-lab-production',
  },
  {
    kind: 'project',
    id: 'play-it-pro',
    title: 'Play It Pro',
    type: 'Music',
    summary: 'Lessons for practical music skills.',
    detail:
      'An interactive music education platform designed to help learners develop practical skills through structured lessons and hands-on exercises.',
    imageAlt: 'Play It Pro lesson builder interface',
    art: 'play',
    href: '/work/play-it-pro',
  },
]
