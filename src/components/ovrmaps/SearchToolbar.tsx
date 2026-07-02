import { useState } from 'react'

const tools = ['route', 'scissors', 'select', 'draw', 'pin', '2d'] as const

export function SearchToolbar() {
  const [activeTool, setActiveTool] = useState<string>('route')

  return (
    <div className="ovr-search-toolbar">
      <div className="ovr-search-toolbar__search">
        <input
          type="search"
          className="ovr-search-toolbar__input"
          placeholder="What's your adventure today?"
          aria-label="Search adventures"
        />
        <button type="button" className="ovr-icon-btn" aria-label="Filter">
          ☰
        </button>
      </div>
      <div className="ovr-search-toolbar__tools">
        {tools.map((tool) => (
          <button
            key={tool}
            type="button"
            className={`ovr-tool-btn${activeTool === tool ? ' ovr-tool-btn--active' : ''}`}
            onClick={() => setActiveTool(tool)}
            aria-pressed={activeTool === tool}
          >
            {tool === 'route' && '⌁'}
            {tool === 'scissors' && '✂'}
            {tool === 'select' && '▢'}
            {tool === 'draw' && '✎'}
            {tool === 'pin' && '📍'}
            {tool === '2d' && '2D'}
          </button>
        ))}
      </div>
    </div>
  )
}
