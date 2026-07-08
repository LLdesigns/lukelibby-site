import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { publicPages } from './site-manifest.mjs'

const rootDir = resolve(fileURLToPath(new URL('.', import.meta.url)), '..')
const snapshotsDir = resolve(rootDir, 'crawl-snapshots')
const distDir = resolve(rootDir, 'dist')
const minHtmlBytes = 4000

function snapshotPath(routePath) {
  if (routePath === '/') return resolve(snapshotsDir, 'index.html')
  return resolve(snapshotsDir, `.${routePath}`, 'index.html')
}

function distPath(routePath) {
  if (routePath === '/') return resolve(distDir, 'index.html')
  return resolve(distDir, `.${routePath}`, 'index.html')
}

if (!existsSync(snapshotsDir)) {
  throw new Error(
    'Missing crawl-snapshots/. Run npm run update:crawl-snapshots after a local prerender build.',
  )
}

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

  mkdirSync(dirname(target), { recursive: true })
  copyFileSync(source, target)
}

copyFileSync(resolve(snapshotsDir, 'index.html'), resolve(distDir, '404.html'))
console.log(`Applied ${publicPages.length} crawl snapshots to dist/`)
