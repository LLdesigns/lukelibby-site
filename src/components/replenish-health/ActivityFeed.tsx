import { useState } from 'react'
import {
  RhActivityIcon,
  RhChevronIcon,
  RhMoonIcon,
  RhWaterIcon,
} from './icons'
import { activityItems } from './tokens'

const iconMap = {
  activity: RhActivityIcon,
  water: RhWaterIcon,
  moon: RhMoonIcon,
}

export function ActivityFeed() {
  const [activeId, setActiveId] = useState(activityItems[0]?.id ?? '')

  return (
    <ul className="rh-activity-list">
      {activityItems.map((item) => {
        const Icon = iconMap[item.icon]
        const isActive = activeId === item.id

        return (
          <li key={item.id}>
            <button
              type="button"
              className={`rh-activity-item${isActive ? ' rh-activity-item--active' : ''}`}
              onClick={() => setActiveId(item.id)}
              aria-pressed={isActive}
            >
              <span className="rh-activity-item__icon" aria-hidden>
                <Icon />
              </span>
              <span className="rh-activity-item__copy">
                <span className="rh-activity-item__title">{item.title}</span>
                <span className="rh-activity-item__subtitle">{item.subtitle}</span>
              </span>
              <span className="rh-activity-item__meta">
                <span>{item.time}</span>
                <RhChevronIcon />
              </span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}
