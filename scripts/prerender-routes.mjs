import { spawn } from 'node:child_process'
import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'
import { publicPages } from './site-manifest.mjs'

const rootDir = resolve(fileURLToPath(new URL('.', import.meta.url)), '..')
const distDir = resolve(rootDir, 'dist')
const port = 5198
const host = '127.0.0.1'
const baseUrl = `http://${host}:${port}`

function startPreview() {
  return new Promise((resolvePreview, reject) => {
    const child = spawn(
      'npm',
      ['run', 'preview', '--', '--port', String(port), '--strictPort', '--host', host],
      {
        cwd: rootDir,
        shell: true,
        stdio: ['ignore', 'pipe', 'pipe'],
      },
    )

    let settled = false
    const markReady = () => {
      if (settled) return
      settled = true
      clearTimeout(timeout)
      resolvePreview(child)
    }

    const onData = (chunk) => {
      const text = chunk.toString()
      if (text.includes(`${host}:${port}`)) markReady()
    }

    child.stdout.on('data', onData)
    child.stderr.on('data', onData)
    child.on('error', (error) => {
      if (!settled) {
        settled = true
        clearTimeout(timeout)
        reject(error)
      }
    })

    const timeout = setTimeout(() => {
      if (!settled) {
        settled = true
        child.kill('SIGTERM')
        reject(new Error('Timed out waiting for Vite preview server'))
      }
    }, 45000)

    setTimeout(markReady, 1500)
  })
}

function outputPath(routePath) {
  if (routePath === '/') return resolve(distDir, 'index.html')
  return resolve(distDir, `.${routePath}`, 'index.html')
}

async function revealAllContent(page) {
  await page.evaluate(async () => {
    const delay = (ms) => new Promise((resolveDelay) => setTimeout(resolveDelay, ms))
    const step = Math.max(300, window.innerHeight * 0.75)
    const maxScroll = document.body.scrollHeight

    for (let y = 0; y <= maxScroll; y += step) {
      window.scrollTo(0, y)
      await delay(120)
    }

    window.scrollTo(0, 0)
    await delay(400)

    document.querySelectorAll('.scroll-reveal').forEach((element) => {
      element.classList.add('scroll-reveal--visible')
      element.style.opacity = '1'
      element.style.transform = 'none'
      element.style.filter = 'none'
      element.style.animation = 'none'
    })

    document.querySelectorAll('.cascade-item').forEach((element) => {
      element.style.opacity = '1'
      element.style.transform = 'none'
      element.style.animation = 'none'
    })
  })

  await page.waitForTimeout(800)
}

async function prerenderRoute(page, routePath) {
  const url = routePath === '/' ? `${baseUrl}/` : `${baseUrl}${routePath}`
  await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 })
  await page.waitForSelector('main', { timeout: 30000 })
  await revealAllContent(page)

  const html = await page.content()
  const target = outputPath(routePath)
  mkdirSync(resolve(target, '..'), { recursive: true })
  writeFileSync(target, html, 'utf8')
}

async function main() {
  const routes = publicPages.map((page) => page.path)
  const preview = await startPreview()

  try {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    await context.addInitScript(() => {
      window.__PRERENDER__ = true
    })

    const page = await context.newPage()

    for (const routePath of routes) {
      await prerenderRoute(page, routePath)
      console.log(`Prerendered ${routePath}`)
    }

    await browser.close()

    copyFileSync(resolve(distDir, 'index.html'), resolve(distDir, '404.html'))
    console.log(`Prerendered ${routes.length} routes and refreshed dist/404.html`)
  } finally {
    preview.kill('SIGTERM')
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
