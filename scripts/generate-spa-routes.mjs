import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { publicPages } from './site-manifest.mjs'

const rootDir = resolve(fileURLToPath(new URL('.', import.meta.url)), '..')
const distDir = resolve(rootDir, 'dist')
const indexPath = resolve(distDir, 'index.html')

const indexHtml = readFileSync(indexPath, 'utf8')
const routePaths = publicPages
  .map((page) => page.path)
  .filter((path) => path !== '/')

for (const routePath of routePaths) {
  const targetDir = resolve(distDir, `.${routePath}`)
  mkdirSync(targetDir, { recursive: true })
  writeFileSync(resolve(targetDir, 'index.html'), indexHtml, 'utf8')
}

copyFileSync(indexPath, resolve(distDir, '404.html'))

console.log(
  `Generated ${routePaths.length} SPA route shells and dist/404.html fallback`,
)
