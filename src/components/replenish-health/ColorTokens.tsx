import { useState, type CSSProperties } from 'react'
import { colorTokens } from './tokens'

type SwatchProps = {
  name: string
  value: string
  role?: 'success' | 'warning' | 'danger'
}

function ColorSwatch({ name, value, role }: SwatchProps) {
  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1400)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      className={`rh-swatch${role ? ` rh-swatch--${role}` : ''}`}
      style={{ '--rh-swatch-color': value } as CSSProperties}
      onClick={handleClick}
      title={`Copy ${value}`}
    >
      <span className="rh-swatch__chip" aria-hidden />
      <span className="rh-swatch__meta">
        <span className="rh-swatch__name">{name}</span>
        <span className="rh-swatch__value">{copied ? 'Copied!' : value}</span>
      </span>
    </button>
  )
}

export function ColorTokens() {
  return (
    <div className="rh-colors">
      <div className="rh-colors__group">
        <h4 className="rh-colors__heading">Primary</h4>
        <div className="rh-colors__grid rh-colors__grid--primary">
          {colorTokens.primary.map((token) => (
            <ColorSwatch key={token.name} {...token} />
          ))}
        </div>
      </div>
      <div className="rh-colors__group">
        <h4 className="rh-colors__heading">Accent & Neutral</h4>
        <div className="rh-colors__grid">
          {colorTokens.accent.map((token) => (
            <ColorSwatch key={token.name} {...token} />
          ))}
        </div>
      </div>
      <div className="rh-colors__group">
        <h4 className="rh-colors__heading">Status</h4>
        <div className="rh-status-row">
          {colorTokens.status.map((token) => (
            <button
              key={token.name}
              type="button"
              className={`rh-status-btn rh-status-btn--${token.role}`}
            >
              {token.name}
            </button>
          ))}
        </div>
        <div className="rh-colors__grid rh-colors__grid--status">
          {colorTokens.status.map((token) => (
            <ColorSwatch key={token.name} {...token} role={token.role} />
          ))}
        </div>
      </div>
    </div>
  )
}
