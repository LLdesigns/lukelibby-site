import type { ProjectDocument } from './types'

export const ovrmapsProject: ProjectDocument = {
  slug: 'ovrmaps',
  title: 'OVRmaps',
  description:
    'An outdoor platform for maps, GPS recording, location-based observations, and community sharing. Navigation and unpublished studio tools are still in progress.',
  published: true,
  liveUrl: 'https://ovrmaps.com',
  liveLabel: 'Published product',
  closing:
    'Placing a pin on the map is straightforward. The harder part is giving the next person useful context—what you found, what changed, and what to expect when they arrive.',
  theme: {
    background: '#121614',
    surface: '#1a221c',
    ink: '#f4f7f2',
    muted: '#c5cfc4',
    accent: '#c4a46a',
  },
  hero: {
    eyebrow: 'Independent product',
    title: 'OVRmaps',
    lede: 'Outdoor Maps You Can Add To',
    highlight:
      'Founded and built end to end: product direction, field UX, and a published product refined through outdoor use and ongoing feedback—not just mockups.',
    role: 'I founded OVRmaps to connect outdoor exploration with the knowledge people gather along the way. The product brings together maps, GPS recording, location-based observations, and community sharing. I own product strategy, UX/UI, and systems design, use AI-assisted development to move from workflow ideas to working software, and refine the experience by taking it outdoors and acting on feedback.',
    meta: 'Published · Mobile + web',
    image: '/images/v2/ovrmaps-honeycomb.png',
    imageAlt: 'OVRmaps logo over mountain ridges with trail and campsite map pins',
    imagePosition: 'center 32%',
    tags: [
      'Product Strategy',
      'UX/UI Design',
      'Field Research',
      'Systems Design',
      'AI-Assisted Development',
      'Project Lead',
    ],
  },
  blocks: [
    {
      type: 'split',
      id: 'opportunity',
      nav: 'Problem',
      eyebrow: '01  ·  Background',
      title: 'The Problem',
      paragraphs: [
        'The idea came from my own time off-road and outdoors. I could save a route or mark a location, but the information I wanted to contribute often needed more context: what I found, why it mattered, and what another person should know before arriving.',
        'A campsite, an obstacle, and a trailhead might all appear as pins, but they serve different needs. I wanted to make those differences useful, and connect the information to people who could benefit from it.',
        'That became the foundation of OVRmaps: a map people can help keep relevant through their experiences. Off-road and overlanding communities are the initial focus. The broader vision supports people exploring by vehicle, motorcycle, bicycle, foot, or paddle.',
      ],
    },
    {
      type: 'split',
      id: 'role',
      nav: 'Role',
      eyebrow: '02  ·  My role',
      title: 'My Role',
      paragraphs: [
        'As the founder and independent builder, I work across the full product: audience and direction, interfaces and workflows across mobile and desktop, how recordings, routes, observations, and community contributions relate, AI-assisted implementation, and field testing that turns feedback into the next change.',
        'Owning these responsibilities lets me move quickly between an idea, a working experience, and the conditions it needs to survive outdoors.',
      ],
    },
    {
      type: 'plate',
      id: 'working-ia',
      nav: 'Early boards',
      eyebrow: 'Working boards',
      title: 'Early Product Boards',
      intro:
        'Early whiteboards mapped the app itself: Map, Explore, Social, and Settings; how a trail ticket should read; swipe to save or dismiss; and an information architecture that connected the map line to safety, tools, markers, profile, forums, meetups, search, and discovery. Those boards are the working model that later became Field and Studio.',
      image: '/images/v2/ovrmaps/working/app-ia-whiteboard.jpg',
      imageAlt:
        'Whiteboard with OVRmaps navigation list, trail ticket details, a phone feed sketch, and a map-to-discover information architecture diagram',
      caption: 'Working board: navigation, trail tickets, feed sketch, and the map-to-discover path.',
    },
    {
      type: 'pair',
      id: 'working-model',
      nav: 'Early model',
      eyebrow: 'Membership, trails, and story',
      title: 'Trail Model and Storyboards',
      paragraphs: [
        'One board held the early membership and trail model—premium and certified drivers, trail events, campsites, difficulty, weather, connected trails, and how a host might earn a place in the community. Not every idea shipped. The useful ones named what a trail listing had to carry and what contribution could mean.',
        'Separately, “IG page slides” storyboarded how a trail might be shared: road name and place, what to expect, what to see, then the pictures. That sequence is still how trail context wants to read—title and location first, then difficulty and uniqueness, then the proof in photos.',
      ],
      frames: [
        {
          src: '/images/v2/ovrmaps/working/membership-trails-board.jpg',
          alt: 'Whiteboard planning Overland America membership perks, certified drivers, trail info fields, events, and host qualifications',
          label: 'Membership & trails',
          note: 'Working model: drivers, trail fields, events, and community host paths.',
          fit: 'contain',
        },
        {
          src: '/images/v2/ovrmaps/working/ig-trail-slides.jpg',
          alt: 'Whiteboard storyboard titled IG page slides with a six-panel trail story sequence',
          label: 'Trail story',
          note: 'Title and place, what to expect, what to see, then vehicle and scene photos.',
          fit: 'contain',
        },
      ],
    },
    {
      type: 'system',
      id: 'core',
      nav: 'Experience',
      eyebrow: '03  ·  The core experience',
      title: 'Record, Observe, Share',
      intro:
        'I organized the experience around three connected jobs. Together, these workflows connect a personal outdoor experience with information someone else can use.',
      columns: [
        {
          title: 'Record',
          paragraphs: [
            'Preserve an outing as a GPS track that can be saved and revisited. Recording gives people a record of where they went and a starting point for sharing their experience.',
          ],
        },
        {
          title: 'Observe',
          paragraphs: [
            'Understand the road or trail beneath them and capture useful details along the way. Campsites, obstacles, and points of interest give observations a clear purpose.',
          ],
        },
        {
          title: 'Share',
          paragraphs: [
            'Bring those discoveries to other people through community posts and crews. The map provides location; the contribution adds context.',
          ],
        },
      ],
      notes: [],
    },
    {
      type: 'plate',
      id: 'field',
      nav: 'Field',
      eyebrow: '04  ·  Designing for the field',
      title: 'Field Design',
      intro:
        'On mobile, I wanted the first screen to answer immediate questions: Where am I? What is around me? How do I start recording? The interface opens directly onto the map. Recording, layers, search, and observation tools remain close to the terrain they affect. Large targets and restrained controls help keep the experience readable without surrounding the map with competing actions. Field use continues to shape those decisions. A control that feels accessible at a desk can become awkward when moving, dealing with glare, or checking the phone briefly at a stop.',
      image: '/images/v2/ovrmaps/product-field-map.jpg',
      imageAlt: 'OVRmaps Field on a phone over Creede, with Start Recording and map tools on the right',
      caption: 'The mobile map brings recording, search, and field tools into one view.',
      size: 'phone',
    },
    {
      type: 'decisions',
      id: 'decisions',
      nav: 'Decisions',
      eyebrow: '05  ·  Key product decisions',
      title: 'Product Decisions',
      intro:
        'Three choices shape how people explore, capture, and return to what they found.',
      features: [
        {
          title: 'Identify the trail without asking people to plan a route.',
          problem:
            'Sometimes people want to explore freely while understanding where they are. A saved route is not always the right starting point.',
          decision:
            'OVRsense is being developed around that need, starting with identifying the road or trail beneath the user. The inspector sheet surfaces what is known about that feature (name, class, length) while Start Recording stays available on the map. Identification helps people read their surroundings as they move, without forcing a planned route first.',
          image: '/images/v2/ovrmaps/field-inspector.png',
          imageAlt: 'Field trail inspector open on Boardstand with class, length, and Ask about this trail',
          mediaSide: 'end',
          callouts: [
            { label: 'Inspector names the trail under you.', y: 62 },
            { label: 'Start Recording stays on the map.', y: 10 },
          ],
        },
        {
          title: 'Give observations enough structure to be useful.',
          problem:
            'A bare pin tells someone where to look. Without a type, the next person cannot tell whether it is a campsite, an obstacle, or something worth seeing.',
          decision:
            'The capture sheet starts with one question: what did you find? Point of Interest, Obstacle, and Camp / Stay set the job of the pin before any details are entered. That keeps the outdoor flow short and gives later readers a clear way to interpret the mark.',
          image: '/images/v2/ovrmaps/field-add-marker.webp',
          imageAlt: 'Field sheet asking what you found: Point of Interest, Obstacle, or Camp / Stay',
          mediaSide: 'start',
          callouts: [
            { label: 'One question: what did you find?', y: 48 },
            { label: 'POI, obstacle, or camp. Each has a job.', y: 68 },
          ],
        },
        {
          title: 'Design mobile and desktop around different moments.',
          problem:
            'Mobile and desktop serve different moments. Crowding every authoring tool onto the phone forces people to stop moving.',
          decision:
            'Mobile supports the immediate field experience: recording, inspecting, searching, and capturing observations. Desktop provides more space for reviewing saved information and working through denser authoring tasks. The interfaces share underlying concepts, while their layouts reflect different contexts of use. That lets each surface support its primary tasks without forcing every tool into the same composition.',
          image: '/images/v2/ovrmaps/web-desktop.png',
          imageAlt: 'Desktop map with library and route authoring tools beside the map',
          mediaSide: 'end',
          callouts: [
            { label: 'Library and authoring sit beside the map.', y: 24 },
            { label: 'Desktop has room for denser tasks.', y: 48 },
          ],
        },
      ],
    },
    {
      type: 'pair',
      id: 'layers',
      nav: 'Layers',
      eyebrow: '06  ·  Making a complex map understandable',
      title: 'Map Layers',
      paragraphs: [
        'OVRmaps brings together roads, trails, terrain, and other outdoor information. Making that information available is only part of the design problem. People also need to understand what they are seeing and control what matters to their trip.',
        'I use layer grouping, legends, marker types, and basemap choices to make the map easier to interpret. Outdoor styling emphasizes roads and recreation, while satellite imagery provides visual context about the surrounding landscape.',
        'A guiding distinction is that mapped geometry and current conditions are different kinds of information. Source data establishes the mapped feature; a field observation adds context about an experience at that location.',
      ],
      frames: [
        {
          src: '/images/v2/ovrmaps/living-outdoor.jpg',
          alt: 'Silverton area rendered in an outdoor map style',
          label: 'Outdoor',
          note: 'Outdoor and satellite views support different ways of reading the same place.',
          fit: 'cover',
        },
        {
          src: '/images/v2/ovrmaps/living-satellite.jpg',
          alt: 'Silverton area rendered on satellite imagery',
          label: 'Satellite',
          note: 'Satellite fills in what the line work alone cannot show.',
          fit: 'cover',
        },
      ],
    },
    {
      type: 'experience',
      id: 'search',
      nav: 'Search',
      eyebrow: '07  ·  Search and exploration',
      title: 'Search and Studio',
      intro:
        'Search moves someone from a place name to terrain they can inspect. Results provide location context and bring the map to the selected area. Studio is a separate authoring surface for connected trail networks: recording segments, placing junctions, and editing nodes. Keeping search and Studio apart keeps each job clear. One helps you arrive. The other helps you shape what the map can hold.',
      scenes: [
        {
          layout: 'compare',
          title: 'Search jumps the map. Studio edits the network.',
          body: 'Search answers where. Studio explores how connected routes and segments get authored, without mixing that work into a place lookup.',
          frames: [
            {
              src: '/images/v2/ovrmaps/field-search.png',
              alt: 'Field search results with distance cards over the map',
              label: 'Search',
              caption: 'Type a place name; results move the map to terrain you can inspect.',
              fit: 'contain',
            },
            {
              src: '/images/v2/ovrmaps/studio-route-edit.png',
              alt: 'Studio route editing with an endpoint selected, Record From Here, and Record Junction Edit tools',
              label: 'Studio',
              caption: 'Select a node, record from here, and edit junctions in a draft network.',
              fit: 'contain',
            },
          ],
        },
      ],
    },
    {
      type: 'aside',
      id: 'iteration',
      nav: 'Iteration',
      eyebrow: '08  ·  Iteration and field testing',
      title: 'Field Iteration',
      paragraphs: [
        'I combine field use, conversations with riders, and structured interface reviews to identify friction across the product.',
        'Those reviews have surfaced practical issues: desktop panels stacking over the map, inconsistent naming across surfaces, and insufficient guidance on first open.',
        'I use those findings to refine hierarchy, simplify interactions, and prioritize the next changes. Physical-device testing separately examines recording continuity, recovery, and offline behavior. The goal is an experience people can understand quickly and depend on during an outing.',
      ],
      mediaSide: 'end',
      media: {
        src: '/images/v2/ovrmaps/field-silverton.webp',
        alt: 'OVRmaps Field centered on Silverton with recording and map tools',
        caption: 'Interface reviews examine how controls, panels, and map information work together.',
      },
    },
    {
      type: 'process',
      id: 'build',
      nav: 'Build',
      eyebrow: '09  ·  Building the system',
      title: 'Building the System',
      intro:
        'Behind the interface, OVRmaps uses shared TypeScript domain logic, MapLibre, and a local-first capture approach. These foundations support connected concepts across mobile and web while accounting for unreliable connectivity outdoors. I use AI heavily during implementation. My role is to define the intended behavior, direct the product and interaction design, investigate problems, and validate the resulting experience. This work has pushed me to think beyond individual screens: how information is captured, preserved, revisited, and eventually shared is part of the design.',
      stages: [
        { label: 'Domain', detail: 'Shared TypeScript logic for recordings, routes, observations, and library reopen.' },
        { label: 'Map', detail: 'MapLibre for terrain, overlays, and the field camera.' },
        { label: 'Local-first', detail: 'Capture on device first, then sync when connectivity allows.' },
        { label: 'AI-assisted build', detail: 'Models speed implementation. I still set behavior and validate outdoors.' },
        { label: 'Field loop', detail: 'Use, feedback, and the next refinement of the experience.' },
      ],
    },
    {
      type: 'reflection',
      id: 'direction',
      nav: 'Results',
      eyebrow: '10  ·  Published',
      title: 'Results',
      statement:
        'Placing a pin on the map is straightforward. The harder part is giving the next person useful context—what you found, what changed, and what to expect when they arrive.',
      detail:
        'OVRmaps is published and gathering feedback, with recording, trail inspection, observations, offline preparation, and early community features at different stages of maturity. Current work focuses on strengthening the core field experience and developing the ways people contribute and share. Studio is an evolving authoring environment for exploring connected trail networks and segment editing. The shift that has stayed with me is less about adding more map layers and more about whether a contribution helps the next person—typed observations, clear actions, and context that matches what they need before they arrive.',
    },
  ],
}
