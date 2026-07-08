import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { publicPages } from './site-manifest.mjs'

const rootDir = resolve(fileURLToPath(new URL('.', import.meta.url)), '..')
const snapshotsDir = resolve(rootDir, 'crawl-snapshots')
const distDir = resolve(rootDir, 'dist')

function snapshotPath(routePath) {
  if (routePath === '/') return resolve(snapshotsDir, 'index.html')
  return resolve(snapshotsDir, `.${routePath}`, 'index.html')
}

function distPath(routePath) {
  if (routePath === '/') return resolve(distDir, 'index.html')
  return resolve(distDir, `.${routePath}`, 'index.html')
}

if (!existsSync(distDir)) {
  throw new Error('Missing dist/. Run npm run build:render first.')
}

if (existsSync(snapshotsDir)) {
  rmSync(snapshotsDir, { recursive: true, force: true })
}

for (const page of publicPages) {
  const source = distPath(page.path)
  const target = snapshotPath(page.path)

  if (!existsSync(source)) {
    throw new Error(`Missing prerender output for ${page.path} at ${source}`)
  }

  mkdirSync(dirname(target), { recursive: true })
  cpSync(source, target)
}

console.log(`Updated crawl snapshots for ${publicPages.length} routes in crawl-snapshots/`)
