import { resumeMeta } from '../data/resume'
import { absoluteUrl, siteMeta } from '../data/site'

type JsonLd = Record<string, unknown>

function withContext(type: string, data: JsonLd): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  }
}

export function personJsonLd(): JsonLd {
  return withContext('Person', {
    name: resumeMeta.name,
    jobTitle: resumeMeta.roles.join(', '),
    url: absoluteUrl('/'),
    image: absoluteUrl(siteMeta.defaultImagePath),
    sameAs: [resumeMeta.linkedInUrl],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Farmington',
      addressRegion: 'UT',
      addressCountry: 'US',
    },
  })
}

export function websiteJsonLd(): JsonLd {
  return withContext('WebSite', {
    name: siteMeta.name,
    url: absoluteUrl('/'),
    description: siteMeta.description,
    inLanguage: 'en-US',
    author: {
      '@type': 'Person',
      name: resumeMeta.name,
      url: absoluteUrl('/'),
    },
  })
}

export function webPageJsonLd(input: {
  name: string
  description: string
  path: string
}): JsonLd {
  return withContext('WebPage', {
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    isPartOf: {
      '@type': 'WebSite',
      name: siteMeta.name,
      url: absoluteUrl('/'),
    },
  })
}

export function creativeWorkJsonLd(input: {
  name: string
  description: string
  path: string
  imagePath?: string
  keywords?: string[]
}): JsonLd {
  return withContext('CreativeWork', {
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    image: input.imagePath ? absoluteUrl(input.imagePath) : undefined,
    keywords: input.keywords?.join(', '),
    author: {
      '@type': 'Person',
      name: resumeMeta.name,
      url: absoluteUrl('/'),
    },
    creator: {
      '@type': 'Person',
      name: resumeMeta.name,
    },
  })
}

export function articleJsonLd(input: {
  headline: string
  description: string
  path: string
  imagePath?: string
  keywords?: string[]
}): JsonLd {
  return withContext('Article', {
    headline: input.headline,
    description: input.description,
    url: absoluteUrl(input.path),
    image: input.imagePath ? absoluteUrl(input.imagePath) : undefined,
    keywords: input.keywords?.join(', '),
    author: {
      '@type': 'Person',
      name: resumeMeta.name,
      url: absoluteUrl('/'),
    },
    publisher: {
      '@type': 'Person',
      name: resumeMeta.name,
      url: absoluteUrl('/'),
    },
    mainEntityOfPage: absoluteUrl(input.path),
  })
}

export function profilePageJsonLd(input: {
  description: string
  path: string
}): JsonLd {
  return withContext('ProfilePage', {
    name: `${resumeMeta.name} — Resume`,
    description: input.description,
    url: absoluteUrl(input.path),
    mainEntity: personJsonLd(),
  })
}

export function contactPageJsonLd(input: {
  description: string
  path: string
}): JsonLd {
  return withContext('ContactPage', {
    name: 'Contact Luke Libby',
    description: input.description,
    url: absoluteUrl(input.path),
    mainEntity: personJsonLd(),
  })
}
