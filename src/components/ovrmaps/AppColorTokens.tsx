import { useState, type CSSProperties } from 'react'
import { foundationColors } from './tokens'

function Swatch({ name, value }: { name: string; value: string }) {
  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      className="ovr-foundation-swatch"
      style={{ '--ovr-swatch-color': value } as CSSProperties}
      onClick={handleClick}
      title={`Copy ${value}`}
    >
      <span className="ovr-foundation-swatch__chip" aria-hidden />
      <span className="ovr-foundation-swatch__label">{name}</span>
      <span className="ovr-foundation-swatch__value">{copied ? 'Copied' : value}</span>
    </button>
  )
}

export function AppColorTokens() {
  return (
    <div className="ovr-foundation-colors">
      {foundationColors.map((group) => (
        <section key={group.group} className="ovr-foundation-colors__group">
          <h4>{group.group}</h4>
          <div className="ovr-foundation-colors__grid">
            {group.tokens.map((token) => (
              <Swatch key={token.name} {...token} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
