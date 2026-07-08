import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  SITE_URL,
  publicPages,
  siteManifest,
  staticAssets,
} from './site-manifest.mjs'

const rootDir = resolve(fileURLToPath(new URL('.', import.meta.url)), '..')
const publicDir = resolve(rootDir, 'public')
const lastmod = new Date().toISOString().slice(0, 10)

function absoluteUrl(path) {
  return `${SITE_URL}${path}`
}

function buildSitemap() {
  const urls = [...publicPages, ...staticAssets]
    .map(
      (page) => `  <url>
    <loc>${absoluteUrl(page.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page.path === '/' ? '1.0' : page.path === '/work' ? '0.9' : '0.8'}</priority>
  </url>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

function buildLlmsTxt() {
  const sections = new Map()

  for (const page of [...publicPages, ...staticAssets]) {
    if (!sections.has(page.section)) sections.set(page.section, [])
    sections.get(page.section).push(page)
  }

  const sectionBlocks = [...sections.entries()]
    .map(([section, pages]) => {
      const links = pages
        .map(
          (page) =>
            `- [${page.title}](${absoluteUrl(page.path)}): ${page.description}`,
        )
        .join('\n')
      return `## ${section}\n${links}`
    })
    .join('\n\n')

  return `# ${siteManifest.name}

> ${siteManifest.tagline}

${siteManifest.summary}

- Contact: ${siteManifest.contact}
- Resume PDF: ${siteManifest.resumePdf}
- LinkedIn: ${siteManifest.linkedIn}

${sectionBlocks}

## Optional

- [Robots policy](${absoluteUrl('/robots.txt')})
- [Sitemap](${absoluteUrl('/sitemap.xml')})
`
}

writeFileSync(resolve(publicDir, 'sitemap.xml'), buildSitemap(), 'utf8')
writeFileSync(resolve(publicDir, 'llms.txt'), buildLlmsTxt(), 'utf8')

console.log('Generated public/sitemap.xml and public/llms.txt')
