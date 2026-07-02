import type { ProductStoryDetail } from './types'

export const skatespot: ProductStoryDetail = {
  slug: 'skatespot',
  number: '04',
  status: 'full',
  description:
    'A spot-first skate discovery concept: map, clips, co-signs, and saved lists tied to real locations, not a generic social feed.',
  tags: [
    'Map UX',
    'Product Design',
    'Supabase',
    'Social Discovery',
    'Mobile Concept',
  ],
  imageLabel: 'Skatespot map and clip discovery',
  cardImageSrc: '/images/skatespot/skatespot-thumbnail.png',
  cardImageAlt:
    'Skatespot Discovery app mockups showing map pins, spot detail, and clip feed',
  eyebrow: 'PRODUCT STORY 04 / MOBILE PRODUCT CONCEPT',
  title: 'Skatespot Discovery App',
  subtitle:
    'Designing a map-based skate app where every clip, save, and co-sign belongs to a real spot, and the product gets better because skaters actually use it.',
  metaChips: [
    { label: 'Type', value: 'Mobile Product Concept' },
    { label: 'Focus', value: 'Map UX, Spot Pages, Community Proof' },
    { label: 'Stack', value: 'React Native + Supabase + PostGIS (planned)' },
    { label: 'Status', value: 'Alpha MVP Design + Schema' },
  ],
  heroVisualLabel: 'Map, spot detail, and clip discovery',
  heroImageSrc: '/images/skatespot/skatespot-hero.png',
  heroImageAlt:
    'Skatespot Discovery promo showing map view, Riverside Skatespot detail page, and clip feed tied to a location',
  heroImageWidth: 1536,
  heroImageHeight: 1024,
  snapshot: {
    problem:
      'Skaters find spots through friends, Instagram, and memory. A pin on Google Maps tells you where something might be, not whether it is skateable, what it looks like today, or who has actually sessioned there.',
    myRole:
      'Product designer and systems thinker: user flows, mobile IA, trust model, Supabase-style schema, and alpha scope for a spot-centric discovery app.',
    outcome:
      'A fully scoped MVP concept (map, spot pages, clip upload, co-signs, saves, reports) with a data model built around the spot as the hub, not the feed.',
  },
  context: `Skatespot Discovery started with one constraint: do not build another skate social network.

Most skate apps drift toward a vertical video feed with location as an afterthought. That breaks the job skaters actually have before a session: figure out where to go, what the spot looks like, and whether it is worth the drive.

The product thesis is spot-first discovery:

The map is home. Pins represent skatespots with type, difficulty, and recent activity. Tap a pin and you get a spot page, not a random clip.

Clips belong to spots. Every upload is tied to a skatespot_id. The feed can surface recent sessions, but the location tag is always the anchor. A clip without a spot is incomplete data.

Trust is lightweight and local. Co-signs mean "I have skated here and this listing is legit." Reports handle bad pins, private property, or busted spots. No follower counts required for the core loop to work.

Saves are personal planning. Bookmark spots into lists for weekend missions, after-work sessions, or road trips. Your saved map is separate from the global map.

That architecture keeps social energy without letting the feed eat the product.`,
  myRole:
    'I owned product direction, mobile information architecture, core flows, visual concept, and first-pass Supabase data modeling for the alpha MVP.',
  myRoleFocus: [
    'Spot-first product strategy (map as hub, not feed as hub)',
    'Mobile IA: Map, Feed, Saved, Profile, Add Spot',
    'Spot detail page with clips, co-signs, saves, and terrain tags',
    'Add-spot flow: pin location, details, first clip',
    'Trust layer: co-signs, reports, and moderation basics',
    'Supabase schema with geo queries and row-level security plan',
    'Alpha scope and deferred social features (crews, follows, comments)',
  ],
  coreIdeaIntro:
    'One loop makes the map smarter over time. Find a spot, session it, upload proof, co-sign what is accurate, and help the next skater decide faster.',
  productLoop: [
    'Find a spot on the map',
    'Session it in real life',
    'Upload a clip to the spot page',
    'Co-sign spots you trust',
    'Save lists for your next mission',
  ],
  coreIdeaClosing:
    'Not a content app with map pins. A map that earns trust through clips, co-signs, and real session history.',
  processSteps: [
    {
      step: 1,
      title: 'Map discovery',
      body: 'The map view is the default home screen. Colored pins encode spot type (park, street, ledge, transition). Skaters pan/zoom locally, switch to list view for sorting by distance or co-sign count, and tap a pin to open the spot page. Search and layer toggles filter by terrain tags without leaving the map.',
    },
    {
      step: 2,
      title: 'Spot detail page',
      body: 'Each skatespot gets a dedicated page: hero clip or photo, distance, terrain tags (ledge, park, street), clip count, co-sign count, save count, and a primary "Go Skate" action for directions. Tabs split Overview, Clips, Info, and Directions so skaters can judge the spot before committing.',
    },
    {
      step: 3,
      title: 'Clip feed (spot-anchored)',
      body: 'The feed surfaces recent clips, but every item displays the spot name and links back to the spot page. Live session bubbles show who is skating now. Likes and comments are optional engagement; the location tag is the required metadata. This keeps discovery tied to place.',
    },
    {
      step: 4,
      title: 'Add a spot',
      body: 'Contribution flow: drop a pin on the map, add name and tags, upload a first clip or photo as proof, then publish. New spots start unverified and earn co-signs over time. The goal is to lower the barrier for adding local gems without opening the map to spam.',
    },
    {
      step: 5,
      title: 'Co-sign, save, report',
      body: 'Co-signs are the trust signal: one tap from a logged-in skater who has been there. Saves go into personal lists (favorites, weekend hit list, road trip). Reports flag spots that are gone, private, or misleading. Moderation stays lightweight for alpha: report queue plus admin review.',
    },
  ],
  features: [
    {
      title: 'Map + List Discovery',
      description:
        'Dual map/list modes with geo search, distance sorting, and pin colors by spot type. Built for "what is near me right now?" not endless scrolling.',
    },
    {
      title: 'Spot Pages',
      description:
        'Every location is a first-class object: terrain tags, difficulty, clip gallery, co-sign and save counts, directions, and session stats. The spot page is the product unit.',
    },
    {
      title: 'Spot-Anchored Clips',
      description:
        'Short clips upload to a skatespot, not to a generic profile feed. Captions, skater handle, and spot name travel together so discovery stays honest.',
    },
    {
      title: 'Co-Sign Trust Layer',
      description:
        'Co-signs replace vague star ratings with community proof from people who actually skated the spot. Counts surface on the map and spot page.',
    },
    {
      title: 'Saved Lists',
      description:
        'Personal bookmarking with list groups (favorites, sessions, road trip). Saved spots sync across devices and feed a "plan your mission" workflow.',
    },
    {
      title: 'Add Spot + Report',
      description:
        'Three-step contribution: pin location, add details and tags, attach first media. Reports and admin review keep bad data from poisoning the map.',
    },
  ],
  featuresImageSrc: '/images/skatespot/app-structure.png',
  featuresImageAlt:
    'Skatespot app structure diagram connecting Map, Feed, Saved, Profile, and Add Spot flows',
  featuresImageSectionTitle: 'Mobile IA: Four Tabs + Contribution Flow',
  artifacts: [
    {
      title: 'Map, Spot Detail, and Clip Feed',
      description:
        'Three core screens in one flow: explore pins on the map, open Riverside Skatespot for tags and co-sign counts, then watch a clip that always links back to that spot.',
      imageSrc: '/images/skatespot/skatespot-hero.png',
      imageAlt:
        'Skatespot Discovery mockups for map view, spot detail with Go Skate CTA, and clip feed with location tag',
      featured: true,
    },
    {
      title: 'App Structure',
      description:
        'Mobile IA built around Map, Feed, Saved, and Profile, with Add Spot as the contribution path. Each tab serves a different job in the spot-first loop.',
      imageSrc: '/images/skatespot/app-structure.png',
      imageAlt:
        'Skatespot app structure diagram with Map, Feed, Saved, Profile, and Add Spot workflow',
      featured: true,
    },
    {
      title: 'Discovery Overview',
      description:
        'Product positioning: find spots, watch local clips, co-sign what is real, save for later. Map, clips, and community in one place without a feed-first layout.',
      imageSrc: '/images/skatespot/skatespot-thumbnail.png',
      imageAlt: 'Skatespot Discovery overview with map, spot detail, and social clip screens',
    },
  ],
  dataObjects: [
    'profiles (handle, home city, session stats)',
    'skatespots (geo point, name, spot_type, difficulty, tags, status)',
    'spot_media (clip/photo, spot_id, caption, uploaded_by)',
    'co_signs (user_id + spot_id, unique per skater)',
    'saved_spots (user_id + spot_id + optional list_id)',
    'spot_reports (reason, reporter_id, review status)',
    'spot_lists (user-owned collections for Saved tab)',
  ],
  relationships: [
    'profiles → skatespots (created_by) → spot_media (clips stay on the spot)',
    'profiles → co_signs → skatespots (trust signal, one per user per spot)',
    'profiles → saved_spots → spot_lists → skatespots (personal planning)',
    'profiles → spot_reports → skatespots (moderation queue)',
    'spot_media → skatespots (feed items always resolve to a spot page)',
    'skatespots → geo index (PostGIS or Supabase earthdistance for nearby queries)',
  ],
  approach: `The data model treats skatespots as the hub object.

A skatespot row stores latitude/longitude (PostGIS geography), human-readable name, spot_type (park, street, ledge, transition), difficulty, surface tags, verification status, and aggregate counts (clips, co_signs, saves) maintained by triggers or materialized updates.

spot_media rows always require a spot_id. Upload flow writes media to Supabase Storage, then inserts metadata with caption and uploader. Feed queries join spot_media to skatespots so every card can show spot name and distance.

co_signs use a unique (user_id, spot_id) constraint so trust is countable and spam-resistant. saved_spots and spot_lists power the Saved tab without mixing private bookmarks into public map data.

Row-level security plan: public read on active spots and media; authenticated write for uploads, co-signs, and saves; owner-only edit on profile and lists; admin role for report review and spot takedowns.

The alpha MVP intentionally skips crews, follows, DMs, and algorithmic feeds. If the map-and-spot loop does not work, more social features will not fix it.`,
  results: [
    'Defined a spot-first alternative to feed-driven skate apps',
    'Mapped five core screens (map, spot detail, clip feed, saved, add spot) with clear jobs',
    'Designed trust mechanics (co-signs, reports) that scale without heavy moderation',
    'Scoped Supabase schema with geo queries, media storage, and RLS boundaries',
    'Documented alpha MVP vs. deferred social features to keep build scope honest',
    'Produced visual concept mockups for portfolio and stakeholder alignment',
  ],
  reflection: `The design lesson: location apps fail when content floats free of place.

Co-signs, clip counts, and terrain tags only matter if they live on a spot page skaters open before they drive. The feed is a lens into recent activity, not the product center.

If this moves into build, the first engineering milestone is not social features. It is map + spot page + upload + co-sign working reliably in one city. Everything else is optional until that loop feels useful on a real phone during a real session.`,
  mvpScope: [
    'Email/auth and profiles',
    'Map view with geo pins and list toggle',
    'Spot detail page (tags, clips, co-signs, saves, directions)',
    'Add spot flow (pin, details, first media upload)',
    'Clip upload to existing spots',
    'Co-sign and save actions',
    'Basic spot reporting + admin review',
    'Feedback form for alpha testers',
  ],
  deferredFeatures:
    'Crews, follows, comments, DMs, live session broadcasting, and algorithmic discovery can wait until the map-and-spot loop proves useful in one market.',
  nextSlug: 'wyldtracks',
}
