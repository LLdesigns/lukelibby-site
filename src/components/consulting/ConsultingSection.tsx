import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
import { ScrollReveal } from '../ScrollReveal'
import { SectionHeading } from '../SectionHeading'
import { Tag } from '../Tag'
import { ThemeBlock } from '../ThemeBlock'
import { ContactForm } from './ContactForm'
import {
  consultingMeta,
  consultingServices,
  consultingStack,
} from '../../data/consulting'

export function ConsultingSection() {
  const [formOpen, setFormOpen] = useState(false)

  function openContactForm() {
    setFormOpen(true)
    requestAnimationFrame(() => {
      document.getElementById('consulting-contact-form')?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      })
    })
  }

  return (
    <section
      id="consulting"
      className="section section--paper consulting-section"
      aria-labelledby="consulting-heading"
    >
      <ThemeBlock className="container">
        <ScrollReveal variant="unfurl" className="scroll-reveal--section-line">
          <SectionHeading
            label={consultingMeta.eyebrow}
            title="Consulting"
            headingId="consulting-heading"
            variant="paper"
          />
        </ScrollReveal>

        <ScrollReveal variant="rise" delay={80}>
          <p className="consulting-section__lead">{consultingMeta.subheadline}</p>
        </ScrollReveal>

        <div className="consulting-section__services">
          {consultingServices.map((service, index) => (
            <ScrollReveal key={service.id} variant="paper-drop" delay={index * 70}>
              <article className="consulting-section__card">
                <h3 className="consulting-section__card-title">{service.title}</h3>
                <p className="consulting-section__card-desc">{service.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="rise" delay={120}>
          <div className="consulting-section__stack">
            {consultingStack.map((item) => (
              <Tag key={item} variant="dark">
                {item}
              </Tag>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal variant="stamp" delay={180}>
          <div className="consulting-section__actions">
            <Button type="button" variant="primary" onClick={openContactForm}>
              Contact me
            </Button>
            <Link className="btn btn--secondary" to="/discovery">
              Start a project brief
              <span className="consulting-section__cta-note">Free · ~3 min</span>
            </Link>
          </div>
        </ScrollReveal>

        <div
          className={`consulting-section__form-wrap${formOpen ? ' is-open' : ''}`}
          aria-hidden={!formOpen}
        >
          {formOpen && (
            <ScrollReveal variant="rise">
              <ContactForm
                id="consulting-contact-form"
                source="consulting"
              />
            </ScrollReveal>
          )}
        </div>
      </ThemeBlock>
    </section>
  )
}
