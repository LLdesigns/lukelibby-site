export const SITE_URL = 'https://lukelibby.com'

export const siteMeta = {
  name: 'Luke Libby',
  title: 'Luke Libby — Creative Technologist',
  tagline: 'Creative Technologist and Product Builder',
  description:
    'Luke Libby — Creative Technologist and Product Builder. AI workflows, internal tools, and digital systems.',
  locale: 'en_US',
  defaultImagePath: '/images/luke-libby.png',
  twitterHandle: '@lukelibby',
  linkedInUrl: 'https://www.linkedin.com/in/luke-libby1/',
} as const

export function absoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}

export function formatPageTitle(pageTitle: string): string {
  if (pageTitle.includes('Luke Libby')) return pageTitle
  return `${pageTitle} — Luke Libby`
}
