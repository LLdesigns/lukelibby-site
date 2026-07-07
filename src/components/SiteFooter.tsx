import { Link } from 'react-router-dom'
import { visibleNavLinks } from '../data/skills'
import { ThemeBlock } from './ThemeBlock'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <ThemeBlock className="container footer-inner">
        <div>
          <p className="footer-name">Luke Libby</p>
          <p className="footer-role">
            Creative Technologist / Product Builder
          </p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          {visibleNavLinks.map((link) => {
            if (link.href.startsWith('#')) {
              return (
                <a key={link.label} href={`/${link.href}`}>
                  {link.label}
                </a>
              )
            }
            if (link.href.startsWith('/')) {
              return (
                <Link key={link.label} to={link.href}>
                  {link.label}
                </Link>
              )
            }
            return (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            )
          })}
        </nav>
      </ThemeBlock>
    </footer>
  )
}
