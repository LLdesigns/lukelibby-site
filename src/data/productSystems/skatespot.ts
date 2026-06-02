import type { ProductSystemDetail } from './types'

export const skatespot: ProductSystemDetail = {
  slug: 'skatespot',
  eyebrow: 'PRODUCT SYSTEM / CONCEPT',
  title: 'Skatespot Discovery App',
  subtitle:
    'A map-based skateboarding app for finding, saving, and verifying real-world skate spots.',
  metaChips: [
    { label: 'Type', value: 'Product System / UX Concept' },
    { label: 'Focus', value: 'Map UX, Clips, Community Proof' },
    { label: 'Stack', value: 'Supabase / SQL Data Model' },
    { label: 'Status', value: 'Alpha MVP Concept' },
  ],
  heroVisualLabel: 'Map & clip discovery concept',
  overview: `Skate spots are easier to trust when they come with real clips from real skaters — not just a pin on a map.

Skatespot Discovery is a mobile app concept that ties a map, short clips, saved locations, and light community verification together. The point is simple: help skaters find spots that are actually skateable.

Most people find spots through friends, local knowledge, videos, or trial and error. That info lives in group chats, Instagram, and memory. This project asks what happens if clips stay tied to the place they were filmed.

No generic social feed. Each clip belongs to a skatespot. You can add a spot, upload proof, save it for later, or co-sign it if you have skated there.`,
  myRole:
    'I worked through the product concept, main user flows, app structure, and first-pass data model.',
  myRoleFocus: [
    'Product strategy',
    'UX flows',
    'Map-based discovery',
    'UGC and moderation basics',
    'Trust signals (co-signs, reports)',
    'Supabase-style schema planning',
    'Alpha scope',
  ],
  coreIdeaIntro:
    'One loop drives the whole thing. Each spot holds location info, clips, difficulty, spot type, saves, and co-signs.',
  productLoop: [
    'Find a spot',
    'Skate it',
    'Upload a clip',
    'Co-sign the spot',
    'Help others find it',
  ],
  coreIdeaClosing:
    'Not another social network. A map that gets better because skaters actually use it.',
  features: [
    {
      title: 'Map-Based Discovery',
      description:
        'Browse nearby spots on a map, tap a marker, preview the basics, and open the full spot page.',
    },
    {
      title: 'Spot Pages',
      description:
        'Location, description, type, difficulty, clips, save button, and co-sign count on one screen.',
    },
    {
      title: 'Proof Clips',
      description:
        'Short clips or photos so people can see the spot and what is skateable there.',
    },
    {
      title: 'Saved Spots',
      description:
        'Bookmark spots for a later session — your own hit list of places to skate.',
    },
    {
      title: 'Co-Sign System',
      description:
        'A co-sign means “yeah, this spot is real” — not a like button with no meaning.',
    },
    {
      title: 'Basic Reporting',
      description:
        'Flag bad pins: wrong location, spot is gone, private property, duplicate, or unsafe.',
    },
  ],
  dataObjects: [
    'Users',
    'Profiles',
    'Skatespots',
    'Spot media',
    'Saved spots',
    'Co-signs',
    'Reports',
  ],
  relationships: [
    'profiles → skatespots → spot media',
    'profiles → saved spots → skatespots',
    'profiles → co-signs → skatespots',
    'profiles → reports → skatespots',
  ],
  mvpScope: [
    'Authentication',
    'Map view',
    'Add spot flow',
    'Spot detail page',
    'Media upload',
    'Saved spots',
    'Co-signs',
    'Basic reporting',
    'Feedback collection',
  ],
  deferredFeatures:
    'Crews, follows, comments, and a big live feed can wait until the map-and-spot loop actually works.',
}
