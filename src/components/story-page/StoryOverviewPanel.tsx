import type { ReactNode } from 'react'

type StoryOverviewPanelProps = {
  children: ReactNode
}

export function StoryOverviewPanel({ children }: StoryOverviewPanelProps) {
  return <div className="story-page__overview-panel">{children}</div>
}

type StoryOverviewBlockProps = {
  variant?: 'intro' | 'facts' | 'note'
  children: ReactNode
}

export function StoryOverviewBlock({ variant, children }: StoryOverviewBlockProps) {
  const className = variant
    ? `story-page__overview-block story-page__overview-block--${variant}`
    : 'story-page__overview-block'

  return <div className={className}>{children}</div>
}
