import { useState } from 'react'
import {
  RhActivityIcon,
  RhChartIcon,
  RhHeartIcon,
  RhHomeIcon,
  RhMoonIcon,
  RhSearchIcon,
  RhSettingsIcon,
  RhUserIcon,
  RhWaterIcon,
} from './icons'

const icons = [
  { id: 'heart', Icon: RhHeartIcon, label: 'Care' },
  { id: 'activity', Icon: RhActivityIcon, label: 'Activity' },
  { id: 'water', Icon: RhWaterIcon, label: 'Hydration' },
  { id: 'moon', Icon: RhMoonIcon, label: 'Rest' },
  { id: 'home', Icon: RhHomeIcon, label: 'Home' },
  { id: 'chart', Icon: RhChartIcon, label: 'Progress' },
  { id: 'user', Icon: RhUserIcon, label: 'Profile' },
  { id: 'settings', Icon: RhSettingsIcon, label: 'Settings' },
  { id: 'search', Icon: RhSearchIcon, label: 'Search' },
]

export function IconSet() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <div className="rh-icon-grid">
      {icons.map(({ id, Icon, label }) => (
        <button
          key={id}
          type="button"
          className={`rh-icon-tile${activeId === id ? ' rh-icon-tile--active' : ''}`}
          onClick={() => setActiveId((current) => (current === id ? null : id))}
          aria-pressed={activeId === id}
          aria-label={label}
        >
          <Icon />
          <span>{label}</span>
        </button>
      ))}
    </div>
  )
}
