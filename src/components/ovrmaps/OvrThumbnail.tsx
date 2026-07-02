import { MapSurface } from './MapSurface'

export function OvrThumbnail() {
  return (
    <div
      className="ovr-card-thumb"
      role="img"
      aria-label="OVRmaps map interface thumbnail with trail card and orange route"
    >
      <div className="ovr-card-thumb__map" aria-hidden>
        <MapSurface />
        <div className="ovr-card-thumb__overlay">
          <div className="ovr-card-thumb__search">What's your adventure today?</div>
          <div className="ovr-card-thumb__mini-card">
            <strong>K27 Roads</strong>
            <span>Beginner · 65.5 mi</span>
          </div>
        </div>
      </div>
    </div>
  )
}
