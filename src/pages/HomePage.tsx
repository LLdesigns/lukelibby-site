import { FeaturedProjectCard } from '../components/work/FeaturedProjectCard'
import { FocusPanel } from '../components/FocusPanel'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionHeading } from '../components/SectionHeading'
import { Tag } from '../components/Tag'
import { ValueCard } from '../components/ValueCard'
import { Button } from '../components/Button'
import {
  homepageFeaturedCaseStudies,
  workPageIntro,
  workPositioningLine,
} from '../data/work'
import { builderNoteTags, valueBlocks } from '../data/skills'

export function HomePage() {
  return (
    <main>
      <section
        className="section section--hero"
        aria-labelledby="hero-heading"
      >
        <div className="container grid-hero">
          <div className="hero-copy">
            <ScrollReveal variant="drift-left" immediate delay={0}>
              <p className="hero-label">Field Notes / Digital Builder</p>
            </ScrollReveal>

            <ScrollReveal variant="hero-sweep" immediate delay={100}>
              <h1 id="hero-heading" className="hero-headline">
                <span className="hero-sweep-target">
                  I build useful tools for messy work.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="blur-rise" immediate delay={280}>
              <p className="hero-sub">{workPositioningLine}</p>
            </ScrollReveal>

            <div className="hero-actions">
              <ScrollReveal variant="stamp" immediate delay={450}>
                <Button variant="primary" href="/work">
                  View Work
                </Button>
              </ScrollReveal>
              <ScrollReveal variant="stamp" immediate delay={540}>
                <Button variant="secondary" href="#about">
                  About Me
                </Button>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal
            variant="drift-right"
            immediate
            delay={200}
            className="hero-aside"
          >
            <FocusPanel />
          </ScrollReveal>
        </div>
      </section>

      <section
        id="work"
        className="section section--paper"
        aria-labelledby="work-heading"
      >
        <div className="container">
          <ScrollReveal
            variant="unfurl"
            className="scroll-reveal--section-line"
            delay={0}
          >
            <SectionHeading title="Work" variant="paper" />
          </ScrollReveal>
          <ScrollReveal variant="rise" delay={80}>
            <p className="work-preview__intro">{workPageIntro}</p>
          </ScrollReveal>
          <div className="work-grid work-grid--preview">
            {homepageFeaturedCaseStudies.map((item, index) => (
              <ScrollReveal
                key={item.id}
                variant="paper-drop"
                delay={index * 120}
                rotate={index % 2 === 0 ? -1.5 : 1.5}
              >
                <FeaturedProjectCard item={item} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal variant="stamp" delay={200} className="work-preview__actions">
            <Button variant="primary" href="/work">
              View All Work
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <section id="about" className="section" aria-labelledby="about-heading">
        <div className="container">
          <ScrollReveal variant="unfurl" className="scroll-reveal--section-line">
            <SectionHeading title="Builder Notes" />
          </ScrollReveal>
          <ScrollReveal variant="rise" delay={120}>
            <p className="builder-notes-copy">
              Design thinker. Workflow fixer. AI experimenter. Comfortable in
              Figma, React, FlutterFlow, Supabase, technical content, video
              tooling, and weird ambiguous problems.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="cascade" className="skill-tags" delay={80}>
            {builderNoteTags.map((skill) => (
              <span key={skill} className="cascade-item">
                <Tag variant="dark">{skill}</Tag>
              </span>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="section section--paper" aria-label="Approach">
        <div className="container">
          <div className="grid-values">
            {valueBlocks.map((block, index) => (
              <ScrollReveal
                key={block.title}
                variant="paper-drop"
                delay={index * 100}
                rotate={(index - 1.5) * 1.5}
              >
                <ValueCard
                  title={block.title}
                  description={block.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
