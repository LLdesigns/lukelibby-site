import { siteMeta } from '../../data/site'
import { V2ContactForm } from './V2ContactForm'

/** Site footer and a short contact form. */
export function V2Footer() {
  return (
    <footer className="v2-footer">
      <div className="v2-footer__inner">
        <section className="v2-contact" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Contact me</h2>
          <V2ContactForm />
        </section>

        <div className="v2-footer__bar">
          <p>
            <strong>{siteMeta.name}</strong>
            <span>{siteMeta.tagline}</span>
          </p>
          <nav aria-label="Footer">
            <a href="#work">Work</a>
            <a href="#resume">Resume</a>
            <a href="#about">About</a>
            <a href={siteMeta.linkedInUrl}>LinkedIn</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
