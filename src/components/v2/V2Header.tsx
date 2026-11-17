import { Link, useLocation } from 'react-router-dom'
import { v2NavLinks, type V2NavLink } from '../../data/v2/nav'
import { withBasePath } from '../../utils/basePath'

function isHomePath(pathname: string) {
  return pathname === '/' || pathname === ''
}

function isLinkActive(href: string, pathname: string, hash: string): boolean {
  if (href.startsWith('#')) return isHomePath(pathname) && hash === href
  return pathname === href
}

function V2HeaderItem({ link }: { link: V2NavLink }) {
  const { pathname, hash } = useLocation()
  const isButton = link.kind === 'button'
  const isActive = isLinkActive(link.href, pathname, hash)
  const className = isButton ? 'v2-header__contact' : 'v2-header__link'
  const isHash = link.href.startsWith('#')

  return (
    <Link
      to={isHash ? { pathname: '/', hash: link.href } : link.href}
      className={isActive ? `${className} is-active` : className}
      aria-current={isActive ? 'page' : undefined}
      onClick={(event) => {
        if (!isHash || !isHomePath(pathname)) return
        // Same-hash clicks do not remount the route; scroll explicitly.
        if (hash === link.href) {
          event.preventDefault()
          document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
        }
      }}
    >
      {link.label}
    </Link>
  )
}

export function V2Header() {
  const textLinks = v2NavLinks.filter((link) => link.kind !== 'button')
  const buttonLink = v2NavLinks.find((link) => link.kind === 'button')

  return (
    <header className="v2-header">
      <div className="v2-header__inner">
        <Link to="/" className="v2-header__brand">
          <img
            className="v2-header__portrait"
            src={withBasePath('/images/v2/luke-portrait.png')}
            alt=""
          />
          <span className="v2-header__identity">
            <span className="v2-header__name">Luke Libby</span>
            <span className="v2-header__tag">Inspired to create the next big thing</span>
          </span>
        </Link>
        <nav className="v2-header__nav" aria-label="Main">
          <ul className="v2-header__links">
            {textLinks.map((link) => (
              <li key={link.href}>
                <V2HeaderItem link={link} />
              </li>
            ))}
          </ul>
          {buttonLink ? <V2HeaderItem link={buttonLink} /> : null}
        </nav>
      </div>
    </header>
  )
}
