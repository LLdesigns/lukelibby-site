import type { ReactNode } from 'react'
import { useReplenishTheme } from './ReplenishThemeContext'

type ReplenishStageProps = {
  children: ReactNode
  className?: string
  showThemeToggle?: boolean
  padded?: boolean
}

export function ReplenishThemeToggle() {
  const { theme, toggleTheme } = useReplenishTheme()

  return (
    <button
      type="button"
      className="rh-theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      aria-pressed={theme === 'dark'}
    >
      <span className="rh-theme-toggle__track" aria-hidden>
        <span
          className={`rh-theme-toggle__thumb rh-theme-toggle__thumb--${theme}`}
        />
      </span>
      <span className="rh-theme-toggle__label">
        {theme === 'dark' ? 'Dark' : 'Light'}
      </span>
    </button>
  )
}

export function ReplenishStage({
  children,
  className = '',
  showThemeToggle = true,
  padded = true,
}: ReplenishStageProps) {
  const { theme } = useReplenishTheme()

  return (
    <div
      className={`rh ${padded ? 'rh--padded' : ''} ${className}`.trim()}
      data-rh-theme={theme}
    >
      {showThemeToggle ? (
        <div className="rh-stage-toolbar">
          <ReplenishThemeToggle />
        </div>
      ) : null}
      <div className="rh-stage-body">{children}</div>
    </div>
  )
}
