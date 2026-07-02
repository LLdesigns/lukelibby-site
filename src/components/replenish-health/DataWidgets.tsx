import { useState, type CSSProperties } from 'react'
import { RhTrendUpIcon } from './icons'
import { categoryStrip, chartBars } from './tokens'

export function BarChartCard() {
  const [activeBar, setActiveBar] = useState<number | null>(null)

  return (
    <article className="rh-widget rh-widget--chart">
      <header className="rh-widget__header">
        <h4>Weekly activity</h4>
        <span className="rh-widget__badge">+12%</span>
      </header>
      <div className="rh-chart" role="img" aria-label="Weekly activity bar chart">
        {chartBars.map((value, index) => (
          <button
            key={index}
            type="button"
            className={`rh-chart__bar${activeBar === index ? ' rh-chart__bar--active' : ''}`}
            style={{ '--rh-bar-height': `${value}%` } as CSSProperties}
            onMouseEnter={() => setActiveBar(index)}
            onMouseLeave={() => setActiveBar(null)}
            onFocus={() => setActiveBar(index)}
            onBlur={() => setActiveBar(null)}
            aria-label={`Day ${index + 1}: ${value}% activity`}
          />
        ))}
      </div>
    </article>
  )
}

export function MetricCard() {
  return (
    <article className="rh-widget rh-widget--metric">
      <span className="rh-widget__label">Steps today</span>
      <div className="rh-metric">
        <strong>8,432</strong>
        <span className="rh-metric__trend">
          <RhTrendUpIcon />
          18%
        </span>
      </div>
      <p className="rh-widget__caption">Above your 7-day average</p>
    </article>
  )
}

export function CategoryStrip() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <div className="rh-category-strip">
      {categoryStrip.map((item) => (
        <button
          key={item.label}
          type="button"
          className={`rh-category-card${activeId === item.label ? ' rh-category-card--active' : ''}`}
          style={{ '--rh-category-color': item.color } as CSSProperties}
          onClick={() =>
            setActiveId((current) => (current === item.label ? null : item.label))
          }
          aria-pressed={activeId === item.label}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
