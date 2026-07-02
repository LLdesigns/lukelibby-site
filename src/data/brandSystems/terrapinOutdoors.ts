import type { BrandSystemNavItem } from './types'

export const terrapinOutdoorsNavItems: BrandSystemNavItem[] = [
  { id: 'bs-overview', label: 'Overview' },
  { id: 'bs-foundations', label: 'Foundations' },
  { id: 'bs-map-shells', label: 'Map Shells' },
  { id: 'bs-content', label: 'Content Modules' },
  { id: 'bs-components', label: 'Components' },
]

export const terrapinOutdoorsPrinciples = {
  brand: [
    'Adventure-first — built for people who plan, explore, and move through real outdoor terrain.',
    'Practical and purposeful — every surface earns its place in the field.',
    'Clarity in the wild — high contrast, legible type, and calm hierarchy outdoors.',
    'Trustworthy outdoor data — routes, layers, and conditions feel dependable.',
    'Field-ready exploration — offline-aware, mobile-first, and built for variable conditions.',
  ],
  interface: [
    'Map-centered — the basemap stays primary; panels layer information without crowding it.',
    'Information layered — search, filters, detail drawers, and controls share one card language.',
    'Mobile-first — bottom sheets, compact rails, and large tap targets on small screens.',
    'Lightweight and fast — minimal chrome, predictable controls, and scannable modules.',
    'Offline-aware — empty states, downloads, and sync cues are part of the system.',
  ],
} as const

export const terrapinOutdoorsBoards = {
  logo: '/images/terrapin-outdoors/logo.png',
  foundations: '/images/terrapin-outdoors/foundations.png',
  mapShells: '/images/terrapin-outdoors/map-shells.png',
  contentModules: '/images/terrapin-outdoors/content-modules.png',
  components: '/images/terrapin-outdoors/components.png',
} as const
