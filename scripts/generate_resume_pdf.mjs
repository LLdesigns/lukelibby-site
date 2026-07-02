#!/usr/bin/env node
/**
 * Build a print-ready resume PDF from the /resume/print page.
 * Run: npm run generate:resume-pdf
 * Output: public/resume.pdf
 */

import { spawn } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const outPath = path.join(root, 'public', 'resume.pdf')
const port = 5198
const url = `http://127.0.0.1:${port}/resume/print`

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: root,
      shell: true,
      stdio: 'inherit',
    })

    child.on('error', reject)
    child.on('close', (code) => {
      if (code === 0) resolve(undefined)
      else reject(new Error(`${command} ${args.join(' ')} exited with code ${code}`))
    })
  })
}

function startPreview() {
  return new Promise((resolve, reject) => {
    const child = spawn(
      'npm',
      ['run', 'preview', '--', '--port', String(port), '--strictPort', '--host', '127.0.0.1'],
      {
        cwd: root,
        shell: true,
        stdio: ['ignore', 'pipe', 'pipe'],
      },
    )

    let settled = false
    const markReady = () => {
      if (settled) return
      settled = true
      clearTimeout(timeout)
      resolve(child)
    }

    const onData = (chunk) => {
      const text = chunk.toString()
      if (text.includes(`127.0.0.1:${port}`) || text.includes(`localhost:${port}`)) {
        markReady()
      }
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

    // Preview may start before stdout hook attaches.
    setTimeout(markReady, 1500)
  })
}

async function main() {
  await run('npm', ['run', 'build'])

  const preview = await startPreview()

  try {
    const browser = await chromium.launch()
    const page = await browser.newPage()

    await page.goto(url, { waitUntil: 'networkidle' })
    await page.emulateMedia({ media: 'print' })
    await page.pdf({
      path: outPath,
      format: 'Letter',
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: '0.42in', right: '0.48in', bottom: '0.42in', left: '0.48in' },
    })

    await browser.close()
    console.log(`Wrote ${outPath}`)
  } finally {
    preview.kill('SIGTERM')
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
