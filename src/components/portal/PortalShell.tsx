import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
import { ThemeBlock } from '../ThemeBlock'
import { useAuth } from '../../context/AuthContext'

type PortalShellProps = {
  title: string
  eyebrow: string
  children: ReactNode
  navItems: { id: string; label: string }[]
  activeTab: string
  onTabChange: (id: string) => void
}

export function PortalShell({
  title,
  eyebrow,
  children,
  navItems,
  activeTab,
  onTabChange,
}: PortalShellProps) {
  const { user, signOut } = useAuth()

  return (
    <main className="section portal-page portal-page--admin">
      <ThemeBlock className="container portal-page__container">
        <header className="portal-page__header">
          <div>
            <p className="portal-page__eyebrow">{eyebrow}</p>
            <h1 className="portal-page__title">{title}</h1>
            <p className="portal-page__sub">{user?.email}</p>
          </div>
          <div className="portal-page__header-actions">
            <Link className="btn btn--paper" to="/">
              Site
            </Link>
            <Button type="button" variant="secondary" onClick={() => void signOut()}>
              Sign out
            </Button>
          </div>
        </header>

        <nav className="portal-tabs" aria-label="Portal sections">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`portal-tabs__item${activeTab === item.id ? ' is-active' : ''}`}
              onClick={() => onTabChange(item.id)}
              aria-current={activeTab === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="portal-page__body">{children}</div>
      </ThemeBlock>
    </main>
  )
}
