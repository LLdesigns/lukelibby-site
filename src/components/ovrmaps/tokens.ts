export const mapTokens = {
  land: '#d4ede0',
  landDeep: '#bdd9c8',
  water: '#9dd4ea',
  waterLabel: '#5eb3d0',
  route: '#f5923d',
  routeGlow: '#ffb07a',
  road: '#d8dce2',
  roadLabel: '#8a929c',
  poi: '#5cb88a',
} as const

export const uiTokens = {
  card: '#ffffff',
  cardBorder: '#eceff3',
  shadow: '0 8px 28px rgba(24, 39, 52, 0.12)',
  text: '#2f3640',
  textMuted: '#7b8794',
  textSoft: '#a0a8b3',
  primary: '#f5923d',
  primaryHover: '#e8842f',
  tabActive: '#4a90d9',
  star: '#f5a623',
} as const

export const difficultyColors = {
  expert: '#e85d5d',
  intermediate: '#f5923d',
  easy: '#5cb88a',
  beginner: '#5cb88a',
} as const

export const categoryTags = [
  { id: 'overland', label: 'Overland', color: '#4a90d9' },
  { id: 'hiking', label: 'Hiking', color: '#5cb88a' },
  { id: 'kayaking', label: 'Kayaking', color: '#5eb3d0' },
  { id: 'fishing', label: 'Fishing', color: '#f0c040' },
] as const

export const adventures = [
  {
    id: 'alpine',
    title: 'Alpine Loop',
    routes: 3,
    markers: 2,
    tags: ['overland', 'hiking'],
    active: true,
    segments: [
      { id: '1', name: 'Alpine Loop', difficulty: 'expert' as const, miles: '64mi' },
      { id: '2', name: 'Alpine Loop', difficulty: 'intermediate' as const, miles: '64mi' },
      { id: '3', name: 'Alpine Loop', difficulty: 'easy' as const, miles: '64mi' },
    ],
  },
  {
    id: 'desert',
    title: 'Desert Vista Expedition',
    routes: 1,
    markers: 0,
    tags: ['overland'],
    active: false,
    segments: [],
  },
] as const

export const foundationColors = [
  { group: 'Map surfaces', tokens: [
    { name: 'Land', value: mapTokens.land },
    { name: 'Water', value: mapTokens.water },
    { name: 'Route', value: mapTokens.route },
    { name: 'Road', value: mapTokens.road },
  ]},
  { group: 'UI surfaces', tokens: [
    { name: 'Card', value: uiTokens.card },
    { name: 'Border', value: uiTokens.cardBorder },
    { name: 'Text', value: uiTokens.text },
    { name: 'Muted', value: uiTokens.textMuted },
  ]},
  { group: 'Difficulty', tokens: [
    { name: 'Expert', value: difficultyColors.expert },
    { name: 'Intermediate', value: difficultyColors.intermediate },
    { name: 'Easy', value: difficultyColors.easy },
  ]},
] as const

export const typeInContext = [
  { label: 'Trail title', sample: 'K27 Roads', size: '1.05rem', weight: 700 },
  { label: 'Adventure title', sample: 'Alpine Loop', size: '0.95rem', weight: 700 },
  { label: 'Tab label', sample: 'Details', size: '0.78rem', weight: 600 },
  { label: 'Metadata', sample: 'Length: 65.5 miles', size: '0.72rem', weight: 500 },
  { label: 'Body copy', sample: 'Expect scenic views and remote backcountry terrain.', size: '0.72rem', weight: 400 },
  { label: 'Chip label', sample: 'Beginner', size: '0.65rem', weight: 700 },
] as const
