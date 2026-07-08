import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { absoluteUrl, formatPageTitle, siteMeta } from '../data/site'
import { applyDocumentHead } from '../utils/documentHead'

export type DocumentHeadProps = {
  title: string
  description: string
  pathname?: string
  imagePath?: string
  type?: 'website' | 'article'
  noindex?: boolean
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

export function DocumentHead({
  title,
  description,
  pathname,
  imagePath = siteMeta.defaultImagePath,
  type = 'website',
  noindex = false,
  jsonLd,
}: DocumentHeadProps) {
  const location = useLocation()
  const resolvedPath = pathname ?? location.pathname
  const formattedTitle = formatPageTitle(title)
  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : ''

  useEffect(() => {
    applyDocumentHead({
      title: formattedTitle,
      description,
      canonicalUrl: absoluteUrl(resolvedPath),
      imageUrl: absoluteUrl(imagePath),
      type,
      noindex,
      jsonLd,
    })
  }, [
    description,
    formattedTitle,
    imagePath,
    jsonLd,
    jsonLdKey,
    noindex,
    resolvedPath,
    type,
  ])

  return null
}
