export function UserProfileChip() {
  return (
    <div className="ovr-profile-chip">
      <span className="ovr-profile-chip__avatar" aria-hidden />
      <span className="ovr-profile-chip__copy">
        <strong>John Doe</strong>
        <span>johndoe@email.com</span>
      </span>
    </div>
  )
}

export function MapControls() {
  return (
    <div className="ovr-map-controls">
      <button type="button" className="ovr-map-controls__layers">
        <span aria-hidden>▤</span>
        Map Layers
      </button>
      <div className="ovr-map-controls__stack">
        {['⌖', '◎', '+', '−'].map((label) => (
          <button key={label} type="button" className="ovr-map-controls__btn" aria-label={label}>
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
