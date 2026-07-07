import { Link, useLocation } from 'react-router-dom'
import { visibleNavLinks } from '../data/skills'
import { withBasePath } from '../utils/basePath'
import { ThemeBlock } from './ThemeBlock'
import { ThemeToggle } from './ThemeToggle'

function isNavLinkActive(href: string, pathname: string, hash: string): boolean {
  if (href === '/work') {
    return (
      pathname === '/work' ||
      pathname.startsWith('/stories/') ||
      pathname.startsWith('/brand-systems/') ||
      pathname.startsWith('/case-studies/') ||
      pathname.startsWith('/product-systems/')
    )
  }

  if (href === '/resume') {
    return pathname === '/resume'
  }

  if (href === '/#about') {
    return pathname === '/' && hash === '#about'
  }

  if (href === '/#consulting') {
    return pathname === '/' && hash === '#consulting'
  }

  if (href === '/contact') {
    return pathname === '/contact'
  }

  return false
}

export function Header() {
  const { pathname, hash } = useLocation()

  return (
    <header className="header">
      <ThemeBlock className="container header__inner">
        <Link to="/" className="header__brand">
          <span className="header__name">LUKE LIBBY</span>
          <span className="header__subtitle">
            Creative Technologist / Product Builder
          </span>
        </Link>
        <nav className="header__nav" aria-label="Main">
          <ul className="header__links">
            {visibleNavLinks.map((link) => {
              const isActive = isNavLinkActive(link.href, pathname, hash)
              const linkClassName = isActive ? 'header__link is-active' : 'header__link'

              if (link.href.startsWith('#')) {
                return (
                  <li key={link.label}>
                    <a
                      href={withBasePath(link.href)}
                      className={linkClassName}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              }
              if (link.href.startsWith('/#')) {
                const hash = link.href.slice(1)
                return (
                  <li key={link.label}>
                    <Link
                      to={{ pathname: '/', hash }}
                      className={linkClassName}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              }

              if (link.href.startsWith('/')) {
                return (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className={linkClassName}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              }
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={linkClassName}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="header__actions">
            <ThemeToggle />
            <a
              href={withBasePath('/resume.pdf')}
              download="Luke-Libby-Resume.pdf"
              className="btn btn--brass"
            >
              Download Resume
            </a>
          </div>
        </nav>
      </ThemeBlock>
    </header>
  )
}
