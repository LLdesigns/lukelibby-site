import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionHeading } from '../components/SectionHeading'
import { ThemeBlock } from '../components/ThemeBlock'
import { ContactForm } from '../components/consulting/ContactForm'
import { resumeMeta } from '../data/resume'
import '../styles/forms.css'

export function ContactPage() {
  return (
    <main className="contact-page">
      <section className="section section--hero" aria-labelledby="contact-heading">
        <ThemeBlock className="container contact-page__hero">
          <ScrollReveal variant="drift-left" immediate>
            <p className="contact-page__eyebrow">Get in touch</p>
          </ScrollReveal>
          <ScrollReveal variant="hero-sweep" immediate delay={80}>
            <h1 id="contact-heading" className="contact-page__title">
              Let&apos;s talk about what you&apos;re building.
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="blur-rise" immediate delay={180}>
            <p className="contact-page__sub">
              Consulting, collaborations, or a quick question — send a note and I will get back to you.
            </p>
          </ScrollReveal>
        </ThemeBlock>
      </section>

      <section className="section section--paper" aria-label="Contact form">
        <ThemeBlock className="container contact-page__layout">
          <ScrollReveal variant="unfurl" className="scroll-reveal--section-line">
            <SectionHeading title="Contact" variant="paper" />
          </ScrollReveal>

          <div className="contact-page__grid">
            <ScrollReveal variant="rise" delay={80}>
              <ContactForm source="contact" />
            </ScrollReveal>

            <ScrollReveal variant="rise" delay={140} className="contact-page__aside">
              <div className="contact-page__card">
                <h2 className="contact-page__card-title">Elsewhere</h2>
                <ul className="contact-page__links">
                  <li>
                    <a
                      href={resumeMeta.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <Link to={{ pathname: '/', hash: '#consulting' }}>Consulting on this site</Link>
                  </li>
                  <li>
                    <Link to="/discovery">Start a project brief</Link>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </ThemeBlock>
      </section>
    </main>
  )
}
