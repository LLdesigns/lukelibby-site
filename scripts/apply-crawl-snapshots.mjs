import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { publicPages, spaShellRoutes } from './site-manifest.mjs'

const rootDir = resolve(fileURLToPath(new URL('.', import.meta.url)), '..')
const snapshotsDir = resolve(rootDir, 'crawl-snapshots')
const distDir = resolve(rootDir, 'dist')
const minHtmlBytes = 4000

const scriptAssetPattern =
  /<script type="module" crossorigin(?:="")? src="(\/assets\/[^"]+)"><\/script>/
const stylesheetAssetPattern =
  /<link rel="stylesheet" crossorigin(?:="")? href="(\/assets\/[^"]+)">/

function snapshotPath(routePath) {
  if (routePath === '/') return resolve(snapshotsDir, 'index.html')
  return resolve(snapshotsDir, `.${routePath}`, 'index.html')
}

function distPath(routePath) {
  if (routePath === '/') return resolve(distDir, 'index.html')
  return resolve(distDir, `.${routePath}`, 'index.html')
}

function extractAssetRefs(html) {
  const jsMatch = html.match(scriptAssetPattern)
  const cssMatch = html.match(stylesheetAssetPattern)

  if (!jsMatch || !cssMatch) {
    throw new Error('Could not extract Vite asset references from dist/index.html')
  }

  return { js: jsMatch[1], css: cssMatch[1] }
}

function patchAssetRefs(html, assets) {
  return html
    .replace(
      scriptAssetPattern,
      `<script type="module" crossorigin src="${assets.js}"></script>`,
    )
    .replace(
      stylesheetAssetPattern,
      `<link rel="stylesheet" crossorigin href="${assets.css}">`,
    )
}

function assertAssetsExist(assets) {
  for (const assetPath of [assets.js, assets.css]) {
    const filePath = resolve(distDir, `.${assetPath}`)
    if (!existsSync(filePath)) {
      throw new Error(`Built asset missing after Vite build: ${assetPath}`)
    }
  }
}

if (!existsSync(snapshotsDir)) {
  throw new Error(
    'Missing crawl-snapshots/. Run npm run update:crawl-snapshots after a local prerender build.',
  )
}

const viteShellPath = resolve(distDir, 'index.html')
if (!existsSync(viteShellPath)) {
  throw new Error('Missing dist/index.html. Run vite build before applying crawl snapshots.')
}

const spaShellHtml = readFileSync(viteShellPath, 'utf8')
const assetRefs = extractAssetRefs(spaShellHtml)
assertAssetsExist(assetRefs)

for (const page of publicPages) {
  const source = snapshotPath(page.path)
  const target = distPath(page.path)

  if (!existsSync(source)) {
    throw new Error(`Missing crawl snapshot for ${page.path} at ${source}`)
  }

  const size = statSync(source).size
  if (size < minHtmlBytes) {
    throw new Error(`Crawl snapshot for ${page.path} is too small (${size} bytes).`)
  }

  const snapshotHtml = readFileSync(source, 'utf8')
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, patchAssetRefs(snapshotHtml, assetRefs), 'utf8')
}

for (const routePath of spaShellRoutes) {
  const target = distPath(routePath)
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, spaShellHtml, 'utf8')
}

const homepageSnapshot = readFileSync(resolve(snapshotsDir, 'index.html'), 'utf8')
writeFileSync(resolve(distDir, '404.html'), patchAssetRefs(homepageSnapshot, assetRefs), 'utf8')

console.log(
  `Applied ${publicPages.length} crawl snapshots and ${spaShellRoutes.length} SPA shells to dist/`,
)
console.log(`Patched asset refs to ${assetRefs.js} and ${assetRefs.css}`)
