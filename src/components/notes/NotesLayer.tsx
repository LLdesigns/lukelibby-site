import { useCallback, useEffect, useRef, useState } from 'react'
import { StickyNote } from './StickyNote'
import { StickyNotePad } from './StickyNotePad'
import type { NoteDragState, PlacedNote, PullDragState } from './types'

const NOTE_WIDTH = 168
const NOTE_HEIGHT = 168
const PULL_THRESHOLD = 36
const PAD_OFFSET_X = 24
const PAD_OFFSET_Y = 24

function createNoteId() {
  return `note-${crypto.randomUUID()}`
}

function randomRotation() {
  return (Math.random() - 0.5) * 5
}

function clampNotePosition(x: number, y: number) {
  const maxX = Math.max(PAD_OFFSET_X, window.innerWidth - NOTE_WIDTH - PAD_OFFSET_X)
  const maxY = Math.max(PAD_OFFSET_Y, window.innerHeight - NOTE_HEIGHT - PAD_OFFSET_Y)

  return {
    x: Math.min(Math.max(PAD_OFFSET_X, x), maxX),
    y: Math.min(Math.max(PAD_OFFSET_Y, y), maxY),
  }
}

function getPadOrigin() {
  return {
    x: window.innerWidth - NOTE_WIDTH - PAD_OFFSET_X,
    y: window.innerHeight - NOTE_HEIGHT - PAD_OFFSET_Y - 8,
  }
}

export function NotesLayer() {
  const [notes, setNotes] = useState<PlacedNote[]>([])
  const [pullDrag, setPullDrag] = useState<PullDragState | null>(null)
  const [noteDrag, setNoteDrag] = useState<NoteDragState | null>(null)
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null)
  const [pendingFocusId, setPendingFocusId] = useState<string | null>(null)
  const pullDragRef = useRef<PullDragState | null>(null)
  const noteDragRef = useRef<NoteDragState | null>(null)

  const updateNote = useCallback((id: string, patch: Partial<PlacedNote>) => {
    setNotes((current) =>
      current.map((note) => (note.id === id ? { ...note, ...patch } : note)),
    )
  }, [])

  const removeNote = useCallback((id: string) => {
    setNotes((current) => current.filter((note) => note.id !== id))
    setActiveNoteId((current) => (current === id ? null : current))
  }, [])

  const handlePullStart = useCallback(
    (pointerId: number, x: number, y: number, _target: HTMLButtonElement) => {
      const next: PullDragState = {
        pointerId,
        startX: x,
        startY: y,
        currentX: x,
        currentY: y,
      }
      pullDragRef.current = next
      setPullDrag(next)
    },
    [],
  )

  const handleNoteDragStart = useCallback(
    (noteId: string, pointerId: number, offsetX: number, offsetY: number) => {
      const next: NoteDragState = { noteId, pointerId, offsetX, offsetY }
      noteDragRef.current = next
      setNoteDrag(next)
      setActiveNoteId(noteId)
    },
    [],
  )

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      const pulling = pullDragRef.current
      if (pulling && pulling.pointerId === event.pointerId) {
        const next = { ...pulling, currentX: event.clientX, currentY: event.clientY }
        pullDragRef.current = next
        setPullDrag(next)
        return
      }

      const dragging = noteDragRef.current
      if (!dragging || dragging.pointerId !== event.pointerId) return

      const { x, y } = clampNotePosition(
        event.clientX - dragging.offsetX,
        event.clientY - dragging.offsetY,
      )

      updateNote(dragging.noteId, { x, y })
    }

    const onPointerUp = (event: PointerEvent) => {
      const pulling = pullDragRef.current
      if (pulling && pulling.pointerId === event.pointerId) {
        const distance = Math.hypot(
          pulling.currentX - pulling.startX,
          pulling.currentY - pulling.startY,
        )

        if (distance >= PULL_THRESHOLD) {
          const { x, y } = clampNotePosition(
            pulling.currentX - NOTE_WIDTH * 0.5,
            pulling.currentY - NOTE_HEIGHT * 0.35,
          )
          const id = createNoteId()

          setNotes((current) => [
            ...current,
            {
              id,
              x,
              y,
              content: '',
              rotation: randomRotation(),
            },
          ])
          setPendingFocusId(id)
          setActiveNoteId(id)
        }

        pullDragRef.current = null
        setPullDrag(null)
        return
      }

      const dragging = noteDragRef.current
      if (dragging && dragging.pointerId === event.pointerId) {
        noteDragRef.current = null
        setNoteDrag(null)
      }
    }

    const onPointerCancel = onPointerUp

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    window.addEventListener('pointercancel', onPointerCancel)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('pointercancel', onPointerCancel)
    }
  }, [updateNote])

  const pullingPreview = pullDrag
    ? (() => {
        const origin = getPadOrigin()
        const distance = Math.hypot(
          pullDrag.currentX - pullDrag.startX,
          pullDrag.currentY - pullDrag.startY,
        )
        const progress = Math.min(1, distance / (PULL_THRESHOLD * 2.2))
        const { x, y } = clampNotePosition(
          pullDrag.currentX - NOTE_WIDTH * 0.5,
          pullDrag.currentY - NOTE_HEIGHT * 0.35,
        )

        return {
          x,
          y,
          rotation: -2 + progress * 4,
          scale: 0.92 + progress * 0.08,
          opacity: 0.55 + progress * 0.45,
          originX: origin.x,
          originY: origin.y,
        }
      })()
    : null

  return (
    <div className="notes-layer" aria-live="polite">
      <StickyNotePad isPulling={pullDrag !== null} onPullStart={handlePullStart} />

      {notes.map((note) => (
        <StickyNote
          key={note.id}
          note={note}
          isDragging={noteDrag?.noteId === note.id}
          isActive={activeNoteId === note.id}
          autoFocus={pendingFocusId === note.id}
          onContentChange={(id, content) => updateNote(id, { content })}
          onRemove={removeNote}
          onDragStart={handleNoteDragStart}
          onFocus={setActiveNoteId}
          onAutoFocusDone={() => setPendingFocusId(null)}
        />
      ))}

      {pullingPreview && (
        <article
          className="sticky-note sticky-note--preview"
          style={{
            left: pullingPreview.x,
            top: pullingPreview.y,
            '--note-rotation': `${pullingPreview.rotation}deg`,
            '--preview-scale': pullingPreview.scale,
            '--preview-opacity': pullingPreview.opacity,
            '--origin-x': `${pullingPreview.originX}px`,
            '--origin-y': `${pullingPreview.originY}px`,
          } as React.CSSProperties}
          aria-hidden
        >
          <p className="sticky-note__preview-label">Leave a note</p>
        </article>
      )}
    </div>
  )
}
