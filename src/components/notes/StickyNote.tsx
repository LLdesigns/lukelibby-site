import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import type { PlacedNote } from './types'

type StickyNoteProps = {
  note: PlacedNote
  isDragging: boolean
  isActive: boolean
  autoFocus?: boolean
  onContentChange: (id: string, content: string) => void
  onRemove: (id: string) => void
  onDragStart: (id: string, pointerId: number, offsetX: number, offsetY: number) => void
  onFocus: (id: string) => void
  onAutoFocusDone?: () => void
}

export function StickyNote({
  note,
  isDragging,
  isActive,
  autoFocus,
  onContentChange,
  onRemove,
  onDragStart,
  onFocus,
  onAutoFocusDone,
}: StickyNoteProps) {
  const bodyRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const showPin = isHovered || isActive || isDragging

  useEffect(() => {
    const body = bodyRef.current
    if (!body || body.textContent === note.content) return
    body.textContent = note.content
  }, [note.content])

  useEffect(() => {
    if (!autoFocus || !bodyRef.current) return
    bodyRef.current.focus()
    onAutoFocusDone?.()
  }, [autoFocus, onAutoFocusDone])

  const handlePinPointerDown = (event: ReactPointerEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()
    event.currentTarget.setPointerCapture(event.pointerId)

    const rect = event.currentTarget.closest('.sticky-note')?.getBoundingClientRect()
    if (!rect) return

    onDragStart(
      note.id,
      event.pointerId,
      event.clientX - rect.left,
      event.clientY - rect.top,
    )
  }

  return (
    <article
      className={`sticky-note${isDragging ? ' sticky-note--dragging' : ''}${isActive ? ' sticky-note--active' : ''}`}
      style={{
        left: note.x,
        top: note.y,
        '--note-rotation': `${note.rotation}deg`,
      } as React.CSSProperties}
      data-interactive
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onFocus={() => onFocus(note.id)}
    >
      <div className={`sticky-note__pin-row${showPin ? ' sticky-note__pin-row--visible' : ''}`}>
        <button
          type="button"
          className="sticky-note__pin"
          aria-label="Drag note"
          onPointerDown={handlePinPointerDown}
        >
          <span className="sticky-note__pin-head" aria-hidden />
          <span className="sticky-note__pin-needle" aria-hidden />
        </button>
        <button
          type="button"
          className="sticky-note__trash"
          aria-label="Remove note"
          onClick={() => onRemove(note.id)}
        >
          <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden>
            <path
              d="M3 4.5h10M5.5 4.5V3.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1M6 7v4.5M10 7v4.5M4 4.5l.5 8a1 1 0 0 0 1 .9h5a1 1 0 0 0 1-.9l.5-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div
        ref={bodyRef}
        className="sticky-note__body"
        contentEditable
        suppressContentEditableWarning
        role="textbox"
        aria-label="Note text"
        data-placeholder="Write something…"
        onInput={(event) => onContentChange(note.id, event.currentTarget.textContent ?? '')}
        onFocus={() => onFocus(note.id)}
      />
    </article>
  )
}
