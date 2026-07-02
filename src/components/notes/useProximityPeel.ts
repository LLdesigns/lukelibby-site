import { useCallback, useEffect, useRef, useState } from 'react'
import { motionEffectsEnabled } from '../../effects/motionPrefs'

const PEEL_RADIUS = 88

export function useProximityPeel(enabled: boolean) {
  const pullRef = useRef<HTMLButtonElement>(null)
  const [peel, setPeel] = useState(0)

  const updatePeel = useCallback(
    (clientX: number, clientY: number) => {
      if (!enabled || !motionEffectsEnabled() || !pullRef.current) {
        setPeel(0)
        return
      }

      const rect = pullRef.current.getBoundingClientRect()
      const cornerX = rect.right
      const cornerY = rect.bottom
      const distance = Math.hypot(clientX - cornerX, clientY - cornerY)

      if (distance > PEEL_RADIUS) {
        setPeel(0)
        return
      }

      const amount = 1 - distance / PEEL_RADIUS
      setPeel(amount * amount)
    },
    [enabled],
  )

  useEffect(() => {
    if (!enabled) {
      setPeel(0)
      return
    }

    const onMove = (event: PointerEvent) => {
      updatePeel(event.clientX, event.clientY)
    }

    const onLeave = () => setPeel(0)

    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)

    return () => {
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [enabled, updatePeel])

  return { pullRef, peel }
}
