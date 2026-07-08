type MetaAttribute = 'name' | 'property'

function upsertMeta(
  attribute: MetaAttribute,
  key: string,
  content: string,
): HTMLMetaElement {
  const selector = `meta[${attribute}="${key}"]`
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
  return element
}

function upsertLink(rel: string, href: string): HTMLLinkElement {
  const selector = `link[rel="${rel}"]`
  let element = document.head.querySelector<HTMLLinkElement>(selector)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
  return element
}

const JSON_LD_SELECTOR = 'script[data-seo-json-ld="true"]'

export type DocumentHeadState = {
  title: string
  description: string
  canonicalUrl: string
  imageUrl: string
  type: 'website' | 'article'
  noindex: boolean
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

export function applyDocumentHead(state: DocumentHeadState): void {
  document.title = state.title

  upsertMeta('name', 'description', state.description)
  upsertMeta(
    'name',
    'robots',
    state.noindex ? 'noindex, nofollow' : 'index, follow',
  )

  upsertMeta('property', 'og:title', state.title)
  upsertMeta('property', 'og:description', state.description)
  upsertMeta('property', 'og:url', state.canonicalUrl)
  upsertMeta('property', 'og:type', state.type)
  upsertMeta('property', 'og:image', state.imageUrl)
  upsertMeta('property', 'og:site_name', 'Luke Libby')
  upsertMeta('property', 'og:locale', 'en_US')

  upsertMeta('name', 'twitter:card', 'summary_large_image')
  upsertMeta('name', 'twitter:title', state.title)
  upsertMeta('name', 'twitter:description', state.description)
  upsertMeta('name', 'twitter:image', state.imageUrl)

  upsertLink('canonical', state.canonicalUrl)

  document.head.querySelector(JSON_LD_SELECTOR)?.remove()

  if (state.jsonLd) {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-seo-json-ld', 'true')
    script.textContent = JSON.stringify(state.jsonLd)
    document.head.appendChild(script)
  }
}
