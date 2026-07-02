import type { ReactNode } from 'react'
import type { StoryNavItem } from './storyNavUtils'
import { StorySectionNav } from './StorySectionNav'

type StoryPageLayoutProps = {
  navItems: StoryNavItem[]
  children: ReactNode
}

export function StoryPageLayout({ navItems, children }: StoryPageLayoutProps) {
  return (
    <div className="story-page__shell">
      <StorySectionNav items={navItems} />
      <div className="story-page__content">{children}</div>
    </div>
  )
}
