import { useEffect } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'
import { setStoryAnchorY } from '../../effects/effectsStore'
import type { StoryNavItem } from './storyNavUtils'
import { scrollToStorySection } from './storyNavUtils'

type StorySectionNavProps = {
  items: StoryNavItem[]
  label?: string
}

export function StorySectionNav({
  items,
  label = 'On this page',
}: StorySectionNavProps) {
  const sectionIds = items.map((item) => item.id)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const updateAnchor = () => {
      const section = document.getElementById(activeId)
      if (!section) {
        setStoryAnchorY(null)
        return
      }

      const rect = section.getBoundingClientRect()
      setStoryAnchorY(rect.top + rect.height * 0.35)
    }

    updateAnchor()
    window.addEventListener('scroll', updateAnchor, { passive: true })
    window.addEventListener('resize', updateAnchor)

    return () => {
      window.removeEventListener('scroll', updateAnchor)
      window.removeEventListener('resize', updateAnchor)
      setStoryAnchorY(null)
    }
  }, [activeId])

  return (
    <nav className="story-nav" aria-label={label}>
      <span className="story-nav__label">{label}</span>
      <ol className="story-nav__list">
        {items.map((item) => {
          const isActive = activeId === item.id
          return (
            <li key={item.id} className="story-nav__item">
              <a
                href={`#${item.id}`}
                className={`story-nav__link${isActive ? ' story-nav__link--active' : ''}`}
                aria-current={isActive ? 'location' : undefined}
                onClick={(event) => {
                  event.preventDefault()
                  scrollToStorySection(item.id)
                }}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
