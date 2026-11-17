import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { v2WorkHoneycomb, type HoneycombProject } from '../../data/v2/honeycomb'
import { v2NavLinks, type V2NavLink } from '../../data/v2/nav'
import { withBasePath } from '../../utils/basePath'

const workProjects = v2WorkHoneycomb.filter(
  (item): item is HoneycombProject => item.kind === 'project' && Boolean(item.href),
)

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

function prefersHover() {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches
}

function WorkMenu() {
  const { pathname, hash } = useLocation()
  const [open, setOpen] = useState(false)
  const [panelBox, setPanelBox] = useState({ top: 0, left: 0 })
  const rootRef = useRef<HTMLLIElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<number | null>(null)
  const menuId = useId()
  const workActive = isLinkActive('#work', pathname, hash) || pathname.startsWith('/v2/work/')

  function clearCloseTimer() {
    if (closeTimer.current === null) return
    window.clearTimeout(closeTimer.current)
    closeTimer.current = null
  }

  function openMenu() {
    clearCloseTimer()
    setOpen(true)
  }

  function scheduleClose() {
    clearCloseTimer()
    closeTimer.current = window.setTimeout(() => setOpen(false), 140)
  }

  function placePanel() {
    const anchor = rootRef.current
    if (!anchor) return
    const box = anchor.getBoundingClientRect()
    const menuWidth = 252
    const left = Math.min(box.left, window.innerWidth - menuWidth - 12)
    setPanelBox({
      top: Math.round(box.bottom + 10),
      left: Math.max(12, Math.round(left)),
    })
  }

  useLayoutEffect(() => {
    if (!open) return
    placePanel()
  }, [open])

  useEffect(() => {
    if (!open) return

    function onPointerDown(event: PointerEvent) {
      const target = event.target as Node
      if (rootRef.current?.contains(target) || panelRef.current?.contains(target)) return
      setOpen(false)
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    function onReposition() {
      placePanel()
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onReposition)
    window.addEventListener('scroll', onReposition, true)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onReposition)
      window.removeEventListener('scroll', onReposition, true)
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => () => clearCloseTimer(), [])

  return (
    <li
      className={`v2-header__work${open ? ' is-open' : ''}`}
      ref={rootRef}
      onMouseEnter={() => {
        if (prefersHover()) openMenu()
      }}
      onMouseLeave={() => {
        if (prefersHover()) scheduleClose()
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        className={
          workActive || open
            ? 'v2-header__link v2-header__work-trigger is-active'
            : 'v2-header__link v2-header__work-trigger'
        }
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => {
          // Touch / no-hover: tap toggles. Hover devices already open on enter.
          if (prefersHover()) {
            openMenu()
            return
          }
          setOpen((value) => !value)
        }}
        onFocus={() => {
          if (prefersHover()) openMenu()
        }}
      >
        Work
        <span className="v2-header__work-caret" aria-hidden="true" />
      </button>

      {open
        ? createPortal(
            <div
              ref={panelRef}
              className="v2-header__work-window"
              id={menuId}
              role="menu"
              aria-label="Work projects"
              style={{ top: panelBox.top, left: panelBox.left }}
              onMouseEnter={() => {
                if (prefersHover()) openMenu()
              }}
              onMouseLeave={() => {
                if (prefersHover()) scheduleClose()
              }}
            >
              {workProjects.map((project) => {
                const href = project.href!
                const active = pathname === href
                return (
                  <Link
                    key={project.id}
                    to={href}
                    className={active ? 'is-active' : undefined}
                    role="menuitem"
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span className="v2-header__work-title">{project.title}</span>
                    <span className="v2-header__work-type">{project.type}</span>
                  </Link>
                )
              })}
            </div>,
            document.body,
          )
        : null}
    </li>
  )
}

export function V2Header() {
  const textLinks = v2NavLinks.filter((link) => link.kind !== 'button' && link.href !== '#work')
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
            <WorkMenu />
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
