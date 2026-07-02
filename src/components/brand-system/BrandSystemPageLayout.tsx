import type { ReactNode } from 'react'
import type { BrandSystemNavItem } from '../../data/brandSystems/types'
import { StorySectionNav } from '../story-page/StorySectionNav'

type BrandSystemPageLayoutProps = {
  navItems: BrandSystemNavItem[]
  children: ReactNode
}

export function BrandSystemPageLayout({
  navItems,
  children,
}: BrandSystemPageLayoutProps) {
  return (
    <div className="bs-shell">
      <StorySectionNav items={navItems} label="System sections" />
      <div className="bs-shell__content">{children}</div>
    </div>
  )
}
