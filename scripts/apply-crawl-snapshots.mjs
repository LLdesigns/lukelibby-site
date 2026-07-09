import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { publicPages, spaShellRoutes } from './site-manifest.mjs'

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

const viteShellPath = resolve(distDir, 'index.html')
if (!existsSync(viteShellPath)) {
  throw new Error('Missing dist/index.html. Run vite build before applying crawl snapshots.')
}

const spaShellHtml = readFileSync(viteShellPath, 'utf8')

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

for (const routePath of spaShellRoutes) {
  const target = distPath(routePath)
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, spaShellHtml, 'utf8')
}

copyFileSync(resolve(snapshotsDir, 'index.html'), resolve(distDir, '404.html'))
console.log(
  `Applied ${publicPages.length} crawl snapshots and ${spaShellRoutes.length} SPA shells to dist/`,
)
