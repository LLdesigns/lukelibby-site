import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { HoneycombPhoto } from '../../data/v2/honeycomb'
import { withBasePath } from '../../utils/basePath'

type PhotoViewerProps = {
  photo: HoneycombPhoto
  onClose: () => void
}

/** Full-field viewer for a photo honeycomb. The caption sits on the bottom edge. */
export function PhotoViewer({ photo, onClose }: PhotoViewerProps) {
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return createPortal(
    <div
      className="v2-photo-viewer"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        className="v2-photo-viewer__close"
        onClick={onClose}
      >
        Close
      </button>
      <div className="v2-photo-viewer__stage">
        <img
          className="v2-photo-viewer__image"
          src={withBasePath(photo.image)}
          alt={photo.imageAlt}
          style={photo.imagePosition ? { objectPosition: photo.imagePosition } : undefined}
          onClick={(event) => event.stopPropagation()}
        />
      </div>
      <div className="v2-photo-viewer__caption" onClick={(event) => event.stopPropagation()}>
        <p className="v2-photo-viewer__kicker">Photo</p>
        <p id={titleId} className="v2-photo-viewer__title">
          {photo.caption}
        </p>
        {photo.detail ? <p className="v2-photo-viewer__detail">{photo.detail}</p> : null}
      </div>
    </div>,
    document.body,
  )
}
