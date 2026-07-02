import { useState } from 'react'
import {
  RhActivityIcon,
  RhChartIcon,
  RhChevronIcon,
  RhHomeIcon,
  RhUserIcon,
} from './icons'
import { navItems } from './tokens'

const iconMap = {
  home: RhHomeIcon,
  chart: RhChartIcon,
  activity: RhActivityIcon,
  user: RhUserIcon,
}

export function NavPattern() {
  const [activeId, setActiveId] = useState(
    navItems.find((item) => item.active)?.id ?? 'home',
  )

  return (
    <nav className="rh-nav" aria-label="App navigation preview">
      <ul className="rh-nav__list">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon]
          const isActive = activeId === item.id

          return (
            <li key={item.id}>
              <button
                type="button"
                className={`rh-nav__item${isActive ? ' rh-nav__item--active' : ''}`}
                onClick={() => setActiveId(item.id)}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon />
                <span>{item.label}</span>
                <RhChevronIcon className="rh-nav__chevron" />
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
