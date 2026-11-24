import { useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { V3Shell } from '../../components/v3/V3Shell'
import {
  v3About,
  v3Approach,
  v3Brand,
  v3Capabilities,
  v3Contact,
  v3Hero,
  v3Nav,
  v3SelectedWork,
} from '../../data/v3/landing'
import { resumePdf } from '../../data/resume'
import { siteMeta } from '../../data/site'
import { withBasePath } from '../../utils/basePath'

const accentVar = {
  orange: 'var(--v3-orange)',
  cyan: 'var(--v3-cyan)',
  green: 'var(--v3-green)',
  ink: 'var(--v3-ink)',
} as const

export function V3LandingPage() {
  const heroRef = useRef<HTMLElement>(null)
  const greenStartRef = useRef<HTMLSpanElement>(null)
  const markRef = useRef<HTMLSpanElement>(null)
  const [greenStyle, setGreenStyle] = useState<CSSProperties | undefined>()
  const [greenGrown, setGreenGrown] = useState(false)
  const greenLockedRef = useRef(false)

  useLayoutEffect(() => {
    const hero = heroRef.current
    const start = greenStartRef.current
    const mark = markRef.current
    const copy = hero?.querySelector<HTMLElement>('[data-reveal="hero-copy"]')
    if (!hero || !start || !mark) return

    let cancelled = false
    const timers: number[] = []

    const measure = () => {
      const heroBox = hero.getBoundingClientRect()
      const startBox = start.getBoundingClientRect()
      const markBox = mark.getBoundingClientRect()
      const padX = 10
      const padY = 8
      return {
        left: `${startBox.left - heroBox.left}px`,
        top: `${markBox.top - heroBox.top - padY}px`,
        width: `${markBox.right - startBox.left + padX}px`,
        height: `${markBox.height + padY * 2}px`,
      } satisfies CSSProperties
    }

    const syncGreen = () => {
      if (cancelled || greenLockedRef.current) return
      setGreenStyle(measure())
    }

    const beginGrow = () => {
      if (cancelled || greenLockedRef.current) return
      // Measure only after hero copy has settled in its final place.
      setGreenStyle(measure())
      timers.push(
        window.setTimeout(() => {
          if (cancelled) return
          greenLockedRef.current = true
          setGreenGrown(true)
        }, 48),
      )
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setGreenStyle(measure())
      greenLockedRef.current = true
      setGreenGrown(true)
      return
    }

    const waitForCopy = () => {
      if (!copy) {
        timers.push(window.setTimeout(beginGrow, 1600))
        return
      }

      if (copy.classList.contains('is-in')) {
        // Match reveal duration so geometry isn't measured mid-fade.
        timers.push(window.setTimeout(beginGrow, 1250))
        return
      }

      const mo = new MutationObserver(() => {
        if (!copy.classList.contains('is-in')) return
        mo.disconnect()
        timers.push(window.setTimeout(beginGrow, 1250))
      })
      mo.observe(copy, { attributes: true, attributeFilter: ['class'] })
      timers.push(
        window.setTimeout(() => {
          mo.disconnect()
          beginGrow()
        }, 2800),
      )
    }

    void document.fonts?.ready?.then(() => {
      if (!cancelled) waitForCopy()
    }).catch(() => {
      if (!cancelled) waitForCopy()
    })
    // Fallback if fonts API is unavailable.
    if (!document.fonts) waitForCopy()

    const onResize = () => {
      if (greenLockedRef.current) {
        // After the grow, allow reposition without restarting the scale animation.
        setGreenStyle(measure())
      } else {
        syncGreen()
      }
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelled = true
      timers.forEach((id) => window.clearTimeout(id))
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <V3Shell title={siteMeta.title} description={siteMeta.description} pathname="/">
      <header className="v3__frame v3-header">
        <a className="v3-brand" href="#top">
          {v3Brand.name}
          <span className="v3-dot" aria-hidden="true" />
        </a>
        <nav className="v3-nav" aria-label="Main navigation">
          {v3Nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="v3-btn v3-btn--primary" href={v3Hero.primaryCta.href}>
            {v3Hero.primaryCta.label}
          </a>
        </nav>
      </header>

      <main className="v3__frame" id="top">
        <section className="v3-hero" aria-label="Introduction" ref={heroRef}>
          <div
            className={greenGrown ? 'v3-hero__green is-grown' : 'v3-hero__green'}
            style={greenStyle}
            aria-hidden="true"
          />
          <div className="v3-portrait" data-reveal="hero">
            <span className="v3-portrait__green-start" ref={greenStartRef} aria-hidden="true" />
            <img
              alt={v3Brand.portraitAlt}
              src={withBasePath(v3Brand.portraitSrc)}
              width={1024}
              height={769}
              decoding="async"
            />
          </div>
          <div className="v3-intro" data-reveal="hero-copy">
            <div className="v3-eyebrow">
              {v3Hero.eyebrow}
              <span className="v3-eyebrow__sep" aria-hidden="true">
                |
              </span>
              {v3Hero.eyebrowRole}
            </div>
            <h1>
              {v3Hero.titleBefore}
              <span className="v3-hero-mark" ref={markRef}>
                {v3Hero.titleHighlight}
              </span>
              {v3Hero.titleAfter}
              <span className="v3-dot" aria-hidden="true" />
            </h1>
            <p>{v3Hero.lede}</p>
            <div className="v3-actions">
              <a className="v3-btn v3-btn--primary" href={v3Hero.primaryCta.href}>
                {v3Hero.primaryCta.label}
              </a>
              <a className="v3-btn" href={v3Hero.secondaryCta.href}>
                {v3Hero.secondaryCta.label}
              </a>
            </div>
          </div>
        </section>

        <section className="v3-section" id="expertise" aria-labelledby="capabilities-heading">
          <h2 className="v3-section-label" id="capabilities-heading">
            {v3Capabilities.label}
          </h2>
          <p className="v3-lead" data-reveal>
            {v3Capabilities.lead}
          </p>
          <div className="v3-capabilities">
            {v3Capabilities.items.map((item) => (
              <div
                key={item.index}
                className="v3-cap"
                style={{ '--accent': accentVar[item.accent] } as CSSProperties}
                data-reveal
              >
                <small>{item.index}</small>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="v3-section" id="work" aria-labelledby="selected-work-heading">
          <h2 className="v3-section-label" id="selected-work-heading">
            {v3SelectedWork.label}
          </h2>
          <p className="v3-lead" data-reveal>
            {v3SelectedWork.lead}
          </p>
          {v3SelectedWork.cases.map((item) => (
            <Link
              key={item.slug}
              className="v3-case"
              to={item.href}
              style={{ '--accent': accentVar[item.accent] } as CSSProperties}
              data-reveal
              aria-label={`Open case study: ${item.title}`}
            >
              <div className="v3-case__meta">
                <small>{item.index}</small>
                <h2 className="v3-case__title">{item.title}</h2>
                <small>{item.tags}</small>
              </div>
              <div className="v3-case__thumb">
                <img
                  src={withBasePath(item.image)}
                  alt={item.imageAlt}
                  loading="lazy"
                  decoding="async"
                  style={
                    item.imagePosition
                      ? ({ objectPosition: item.imagePosition } as CSSProperties)
                      : undefined
                  }
                />
              </div>
              <div className="v3-case__copy">
                <h3>{item.headline}</h3>
                <p>{item.body}</p>
              </div>
              <div className="v3-case__result">
                <strong>{item.result}</strong>
                <p>{item.resultLabel}</p>
              </div>
            </Link>
          ))}
          <div className="v3-selected__more">
            <Link className="v3-btn" to={v3SelectedWork.moreHref}>
              {v3SelectedWork.moreLabel}
            </Link>
          </div>
        </section>

        <section className="v3-section" id="approach" aria-labelledby="approach-heading">
          <h2 className="v3-section-label" id="approach-heading">
            {v3Approach.label}
          </h2>
          <div className="v3-process">
            {v3Approach.steps.map((step) => (
              <div key={step.index} className="v3-process__step" data-reveal>
                <small>{step.index}</small>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="v3-section" id="about" aria-labelledby="about-heading">
          <h2 className="v3-section-label" id="about-heading">
            {v3About.label}
          </h2>
          <p className="v3-lead" data-reveal>
            {v3About.lead}
          </p>
          <div className="v3-stats">
            {v3About.stats.map((stat) => (
              <div key={stat.label} data-reveal>
                <strong>{stat.value}</strong>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="v3-contact" id="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading" data-reveal>
            {v3Contact.title}
            <span className="v3-dot" aria-hidden="true" />
          </h2>
          <div data-reveal>
            <p>{v3Contact.body}</p>
            <p className="v3-contact__email">
              <a href={`mailto:${v3Contact.email}`}>{v3Contact.email}</a>
            </p>
            <div className="v3-actions">
              <a
                className="v3-btn v3-btn--primary"
                href={v3Contact.ctaHref}
                target="_blank"
                rel="noreferrer"
              >
                {v3Contact.ctaLabel}
              </a>
              <a
                className="v3-btn"
                href={withBasePath(resumePdf.href)}
                download={resumePdf.filename}
              >
                {v3Contact.resumeLabel}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="v3__frame v3-footer">
        <span>{v3Brand.location}</span>
        <span>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </span>
      </footer>
    </V3Shell>
  )
}
