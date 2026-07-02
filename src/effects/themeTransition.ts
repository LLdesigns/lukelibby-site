import type { Theme } from '../context/ThemeContext'
import { motionEffectsEnabled } from './motionPrefs'

const BLOCK_MS = 220
const STAGGER_MS = 55
const TRAVEL = '72vw'

let transitioning = false

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

function waitForPaint() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve())
    })
  })
}

function runAnimation(element: Element, keyframes: Keyframe[], duration: number) {
  const animation = element.animate(keyframes, {
    duration,
    easing: 'cubic-bezier(0.45, 0.05, 0.25, 1)',
    fill: 'forwards',
  })

  return animation.finished.catch(() => undefined)
}

function resetBlockStyles(block: HTMLElement) {
  block.getAnimations().forEach((animation) => animation.cancel())
  block.style.removeProperty('transform')
  block.style.removeProperty('opacity')
}

function exitKeyframes(index: number): Keyframe[] {
  const off = index % 2 === 0 ? `-${TRAVEL}` : TRAVEL
  return [
    { transform: 'translateX(0)', opacity: 1 },
    { transform: `translateX(${off})`, opacity: 0 },
  ]
}

function enterKeyframes(index: number): Keyframe[] {
  const from = index % 2 === 0 ? TRAVEL : `-${TRAVEL}`
  return [
    { transform: `translateX(${from})`, opacity: 0 },
    { transform: 'translateX(0)', opacity: 1 },
  ]
}

function clearInteractionStates() {
  document.querySelectorAll<HTMLElement>('[data-magnetic-active]').forEach((el) => {
    el.removeAttribute('data-magnetic-active')
    el.style.removeProperty('--mag-x')
    el.style.removeProperty('--mag-y')
  })

  document.querySelectorAll<HTMLElement>('[data-paper-lift][data-lift-active]').forEach((el) => {
    el.removeAttribute('data-lift-active')
    el.style.removeProperty('--lift-x')
    el.style.removeProperty('--lift-y')
  })
}

export function isThemeTransitioning() {
  return transitioning
}

export async function runThemeTransition(
  _currentTheme: Theme,
  _nextTheme: Theme,
  applyTheme: () => void,
) {
  if (transitioning) return

  if (!motionEffectsEnabled()) {
    applyTheme()
    return
  }

  const blocks = Array.from(document.querySelectorAll<HTMLElement>('[data-theme-block]'))
  if (blocks.length === 0) {
    applyTheme()
    return
  }

  transitioning = true
  clearInteractionStates()

  const root = document.documentElement
  root.classList.add('theme-transition-active')

  const exitAnimations = blocks.map((block, index) =>
    wait(index * STAGGER_MS).then(() => runAnimation(block, exitKeyframes(index), BLOCK_MS)),
  )
  await Promise.all(exitAnimations)

  applyTheme()
  await waitForPaint()

  blocks.forEach(resetBlockStyles)

  for (let index = 0; index < blocks.length; index += 1) {
    const fromRight = index % 2 === 0
    blocks[index].style.transform = fromRight ? `translateX(${TRAVEL})` : `translateX(-${TRAVEL})`
    blocks[index].style.opacity = '0'
  }

  void blocks[0]?.offsetHeight

  const enterAnimations = blocks.map((block, index) =>
    wait(index * STAGGER_MS).then(() => {
      resetBlockStyles(block)
      return runAnimation(block, enterKeyframes(index), BLOCK_MS)
    }),
  )
  await Promise.all(enterAnimations)

  blocks.forEach((block) => {
    resetBlockStyles(block)
  })

  root.classList.remove('theme-transition-active')
  clearInteractionStates()
  transitioning = false
}
