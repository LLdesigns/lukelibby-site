export const brandPillars = [
  {
    id: 'pillars',
    title: 'Brand Pillars',
    accent: '#5eb3e8',
    items: ['Empathetic', 'Professional', 'Innovative', 'Trustworthy'],
  },
  {
    id: 'voice',
    title: 'Brand Voice',
    accent: '#8b7fd4',
    items: ['Supportive', 'Clear', 'Direct', 'Encouraging'],
  },
  {
    id: 'visual',
    title: 'Visual Language',
    accent: '#e8943a',
    items: ['Clean lines', 'Accessible', 'Modern', 'Calm contrast'],
  },
  {
    id: 'type',
    title: 'Typography',
    accent: '#6b8299',
    items: ['Sans-serif hierarchy', 'Readable at small sizes', 'Bold display'],
  },
  {
    id: 'icons',
    title: 'Iconography',
    accent: '#f0c040',
    items: ['Consistent stroke', 'Rounded caps', 'Health metaphors'],
  },
  {
    id: 'grid',
    title: 'Grid & Spacing',
    accent: '#4ecdc4',
    items: ['8px base grid', 'Generous padding', 'Soft card radius'],
  },
] as const

export const colorTokens = {
  primary: [
    { name: 'Navy 900', value: '#0a1628' },
    { name: 'Navy 800', value: '#0f1f38' },
    { name: 'Navy 700', value: '#152a47' },
    { name: 'Navy 600', value: '#1c3558' },
    { name: 'Blue 500', value: '#2d6fad' },
    { name: 'Cyan 400', value: '#4a9fd4' },
    { name: 'Cyan 300', value: '#6eb8e8' },
  ],
  accent: [
    { name: 'Forest', value: '#3d8b6e' },
    { name: 'Mint', value: '#5cb88a' },
    { name: 'Amber', value: '#e8943a' },
    { name: 'Coral', value: '#d45a4a' },
    { name: 'Lavender', value: '#8b7fd4' },
    { name: 'Slate', value: '#6b8299' },
    { name: 'Cloud', value: '#c5d4e3' },
  ],
  status: [
    { name: 'Success', value: '#5cb85c', role: 'success' as const },
    { name: 'Warning', value: '#f0a030', role: 'warning' as const },
    { name: 'Danger', value: '#e05252', role: 'danger' as const },
  ],
}

export const typeScale = [
  { name: 'Display Large', sample: 'Replenish Health', className: 'rh-type-display-lg' },
  { name: 'Display Medium', sample: 'Daily Progress', className: 'rh-type-display-md' },
  { name: 'Display Small', sample: 'Wellness Overview', className: 'rh-type-display-sm' },
  { name: 'Headline', sample: 'Hydration Goals', className: 'rh-type-headline' },
  { name: 'Title', sample: 'Activity Summary', className: 'rh-type-title' },
  { name: 'Body', sample: 'Track habits with calm, readable surfaces.', className: 'rh-type-body' },
  { name: 'Label', sample: 'STATUS · UPDATED 2M AGO', className: 'rh-type-label' },
]

export const chartBars = [42, 68, 55, 82, 61, 74, 48]

export const categoryStrip = [
  { label: 'Hydration', color: '#e85d9a' },
  { label: 'Movement', color: '#e8943a' },
  { label: 'Rest', color: '#8b7fd4' },
  { label: 'Nutrition', color: '#4a9fd4' },
]

export const activityItems = [
  {
    id: '1',
    title: 'Morning walk',
    subtitle: '2.4 mi · 32 min',
    time: '8:12 AM',
    icon: 'activity' as const,
  },
  {
    id: '2',
    title: 'Water intake',
    subtitle: '48 oz logged',
    time: '10:45 AM',
    icon: 'water' as const,
  },
  {
    id: '3',
    title: 'Sleep score',
    subtitle: '7h 20m · 86%',
    time: 'Yesterday',
    icon: 'moon' as const,
  },
]

export const navItems = [
  { id: 'home', label: 'Home', icon: 'home' as const, active: true },
  { id: 'progress', label: 'Progress', icon: 'chart' as const },
  { id: 'activity', label: 'Activity', icon: 'activity' as const },
  { id: 'profile', label: 'Profile', icon: 'user' as const },
]
