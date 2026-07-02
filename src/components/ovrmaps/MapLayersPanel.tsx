import { useState } from 'react'

const basemaps = ['Outdoor', 'Light Pollution', 'Satellite']

export function MapLayersPanel() {
  const [activeBasemap, setActiveBasemap] = useState('Outdoor')
  const [opacity, setOpacity] = useState(72)
  const [enabled, setEnabled] = useState(true)

  return (
    <aside className="ovr-layers-panel">
      <h4>Map Layers</h4>

      <section className="ovr-layers-panel__section">
        <button type="button" className="ovr-layers-panel__section-toggle">
          <span>☰ MVUM</span>
          <span>{enabled ? '▾' : '▸'}</span>
        </button>
        {enabled ? (
          <div className="ovr-layers-panel__slider-wrap">
            <input
              type="range"
              min={0}
              max={100}
              value={opacity}
              onChange={(event) => setOpacity(Number(event.target.value))}
              className="ovr-opacity-slider"
              aria-label="MVUM opacity"
            />
            <button
              type="button"
              role="switch"
              className={`ovr-switch${enabled ? ' ovr-switch--on' : ''}`}
              aria-checked={enabled}
              onClick={() => setEnabled((current) => !current)}
            >
              <span className="ovr-switch__thumb" />
            </button>
          </div>
        ) : null}
      </section>

      <section className="ovr-layers-panel__section">
        <h5>Basemaps</h5>
        <div className="ovr-basemap-row">
          {basemaps.map((name) => (
            <button
              key={name}
              type="button"
              className={`ovr-basemap-card${activeBasemap === name ? ' ovr-basemap-card--active' : ''}`}
              onClick={() => setActiveBasemap(name)}
            >
              <span className="ovr-basemap-card__thumb" aria-hidden />
              <span>{name}</span>
            </button>
          ))}
        </div>
      </section>
    </aside>
  )
}
