import { type PointerEvent as ReactPointerEvent } from 'react'
import { useProximityPeel } from './useProximityPeel'

type StickyNotePadProps = {
  isPulling: boolean
  onPullStart: (
    pointerId: number,
    x: number,
    y: number,
    target: HTMLButtonElement,
  ) => void
}

export function StickyNotePad({ isPulling, onPullStart }: StickyNotePadProps) {
  const { pullRef, peel } = useProximityPeel(!isPulling)

  const handlePullPointerDown = (event: ReactPointerEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    onPullStart(event.pointerId, event.clientX, event.clientY, event.currentTarget)
  }

  return (
    <div className="sticky-pad" data-interactive aria-label="Sticky note pad">
      <div className="sticky-pad__stack" aria-hidden>
        <span className="sticky-pad__sheet sticky-pad__sheet--back" />
        <span className="sticky-pad__sheet sticky-pad__sheet--mid" />
      </div>

      <div className={`sticky-pad__top${isPulling ? ' sticky-pad__top--pulling' : ''}`}>
        <p className="sticky-pad__label">Leave a note</p>

        <div
          className="sticky-pad__fold"
          style={{ '--peel': peel } as React.CSSProperties}
        >
          <div className="sticky-pad__fold-shadow" aria-hidden />
          <div className="sticky-pad__fold-panel">
            <div className="sticky-pad__fold-face sticky-pad__fold-face--front">
              <button
                ref={pullRef}
                type="button"
                className="sticky-pad__pull"
                aria-label="Pull a sticky note"
                onPointerDown={handlePullPointerDown}
              >
                pull
              </button>
            </div>
            <div className="sticky-pad__fold-face sticky-pad__fold-face--back" aria-hidden />
          </div>
        </div>
      </div>
    </div>
  )
}
