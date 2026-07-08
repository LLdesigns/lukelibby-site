import { spawn } from 'node:child_process'
import { copyFileSync, mkdirSync, statSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'
import { publicPages } from './site-manifest.mjs'

const rootDir = resolve(fileURLToPath(new URL('.', import.meta.url)), '..')
const distDir = resolve(rootDir, 'dist')
const port = 5198
const host = '127.0.0.1'
const baseUrl = `http://${host}:${port}`
const minHtmlBytes = 4000 // Reject SPA shell-only output.

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
    const fail = (error) => {
      if (settled) return
      settled = true
      clearTimeout(timeout)
      reject(error)
    }

    const timeout = setTimeout(() => {
      child.kill('SIGTERM')
      fail(new Error('Timed out waiting for Vite preview server'))
    }, 45000)

    child.on('error', fail)
    child.on('exit', (code) => {
      if (!settled && code !== 0) {
        fail(new Error(`Vite preview exited with code ${code}`))
      }
    })

    waitForPreview()
      .then(() => {
        if (settled) return
        settled = true
        clearTimeout(timeout)
        resolvePreview(child)
      })
      .catch(fail)
  })
}

async function waitForPreview() {
  const deadline = Date.now() + 45000

  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${baseUrl}/`)
      if (response.ok) return
    } catch {
      // Preview not ready yet.
    }

    await delay(400)
  }

  throw new Error('Preview server did not respond')
}

function delay(ms) {
  return new Promise((resolveDelay) => setTimeout(resolveDelay, ms))
}

function outputPath(routePath) {
  if (routePath === '/') return resolve(distDir, 'index.html')
  return resolve(distDir, `.${routePath}`, 'index.html')
}

function assertPrerendered(target, routePath) {
  const size = statSync(target).size
  if (size < minHtmlBytes) {
    throw new Error(
      `Prerender for ${routePath} is too small (${size} bytes). Expected rendered HTML, not the SPA shell.`,
    )
  }
}

async function revealAllContent(page) {
  await page.evaluate(async () => {
    const wait = (ms) => new Promise((resolveDelay) => setTimeout(resolveDelay, ms))
    const step = Math.max(300, window.innerHeight * 0.75)
    const maxScroll = document.body.scrollHeight

    for (let y = 0; y <= maxScroll; y += step) {
      window.scrollTo(0, y)
      await wait(80)
    }

    window.scrollTo(0, 0)
    await wait(200)

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

  await delay(400)
}

async function waitForMainContent(page) {
  await page.waitForSelector('main', { timeout: 30000 })
  await page.waitForFunction(
    () => {
      const main = document.querySelector('main')
      return Boolean(main && main.innerText.trim().length > 120)
    },
    { timeout: 30000 },
  )
}

async function prerenderRoute(page, routePath) {
  const url = routePath === '/' ? `${baseUrl}/` : `${baseUrl}${routePath}`

  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
  await waitForMainContent(page)
  await revealAllContent(page)

  const html = await page.content()
  const target = outputPath(routePath)
  mkdirSync(resolve(target, '..'), { recursive: true })
  writeFileSync(target, html, 'utf8')
  assertPrerendered(target, routePath)
}

async function main() {
  const routes = publicPages.map((page) => page.path)
  const preview = await startPreview()

  try {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    await context.route('**/*', (route) => {
      const requestUrl = route.request().url()
      if (
        requestUrl.includes('supabase.co') ||
        requestUrl.includes('google-analytics.com') ||
        requestUrl.includes('googletagmanager.com')
      ) {
        route.abort()
        return
      }

      route.continue()
    })
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
