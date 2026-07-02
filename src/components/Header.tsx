import { Link } from 'react-router-dom'
import { navLinks } from '../data/skills'
import { ThemeBlock } from './ThemeBlock'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
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
            {navLinks.map((link) => {
              if (link.href.startsWith('#')) {
                return (
                  <li key={link.label}>
                    <a href={`/${link.href}`}>{link.label}</a>
                  </li>
                )
              }
              if (link.href.startsWith('/')) {
                return (
                  <li key={link.label}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                )
              }
              return (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              )
            })}
          </ul>
          <div className="header__actions">
            <ThemeToggle />
            <a
              href="/resume.pdf"
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
