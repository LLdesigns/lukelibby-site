const primarySwatches = [
  '#0a1628',
  '#0f1f38',
  '#152a47',
  '#2d6fad',
  '#4a9fd4',
  '#6eb8e8',
]

const accentSwatches = ['#5cb88a', '#e8943a', '#8b7fd4', '#e05252']

const pillarAccents = [
  '#5eb3e8',
  '#8b7fd4',
  '#e8943a',
  '#6b8299',
  '#f0c040',
  '#4ecdc4',
]

export function ReplenishHealthThumbnail() {
  return (
    <div
      className="rh-card-thumb"
      role="img"
      aria-label="Replenish Health design system color palette and UI specimens"
    >
      <div className="rh-card-thumb__pillars" aria-hidden>
        {pillarAccents.map((color) => (
          <span
            key={color}
            className="rh-card-thumb__pillar"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <div className="rh-card-thumb__swatches" aria-hidden>
        {primarySwatches.map((color) => (
          <span
            key={color}
            className="rh-card-thumb__swatch"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <div className="rh-card-thumb__footer" aria-hidden>
        <div className="rh-card-thumb__accents">
          {accentSwatches.map((color) => (
            <span
              key={color}
              className="rh-card-thumb__swatch rh-card-thumb__swatch--accent"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <span className="rh-card-thumb__btn">Log progress</span>
      </div>
    </div>
  )
}
