import { ThemeBlock } from '../components/ThemeBlock'
import { FeaturedProjectCard } from '../components/work/FeaturedProjectCard'
import { FocusPanel } from '../components/FocusPanel'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionHeading } from '../components/SectionHeading'
import { Tag } from '../components/Tag'
import { ValueCard } from '../components/ValueCard'
import { Button } from '../components/Button'
import {
  homepageFeaturedStories,
  workPageIntro,
  workPositioningLine,
} from '../data/work'
import { builderNoteTags, builderNotesParagraphs, valueBlocks } from '../data/skills'

export function HomePage() {
  return (
    <main>
      <section
        className="section section--hero"
        aria-labelledby="hero-heading"
      >
        <ThemeBlock className="container grid-hero">
          <div className="hero-copy">
            <ScrollReveal variant="drift-left" immediate delay={0}>
              <p className="hero-label">Field Notes / Digital Builder</p>
            </ScrollReveal>

            <ScrollReveal variant="hero-sweep" immediate delay={100}>
              <h1 id="hero-heading" className="hero-headline">
                <span className="hero-sweep-target">
                  I build useful (beautiful){' '}
                  <span className="hero-headline__accent">tools</span> for messy work.
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
        </ThemeBlock>
      </section>

      <section
        id="work"
        className="section section--paper"
        aria-labelledby="work-heading"
      >
        <ThemeBlock className="container">
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
            {homepageFeaturedStories.map((item, index) => (
              <FeaturedProjectCard
                key={item.id}
                item={item}
                revealDelay={index * 120}
              />
            ))}
          </div>
          <ScrollReveal variant="stamp" delay={200} className="work-preview__actions">
            <Button variant="primary" href="/work">
              View All Work
            </Button>
          </ScrollReveal>
        </ThemeBlock>
      </section>

      <section id="about" className="section" aria-labelledby="about-heading">
        <ThemeBlock className="container">
          <ScrollReveal variant="unfurl" className="scroll-reveal--section-line">
            <SectionHeading title="About Me" headingId="about-heading" />
          </ScrollReveal>
          <ScrollReveal variant="rise" delay={120}>
            <div className="builder-notes-copy">
              {builderNotesParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal variant="cascade" className="skill-tags" delay={80}>
            {builderNoteTags.map((skill) => (
              <span key={skill} className="cascade-item">
                <Tag variant="dark">{skill}</Tag>
              </span>
            ))}
          </ScrollReveal>
        </ThemeBlock>
      </section>

      <section className="section section--paper" aria-label="Approach">
        <ThemeBlock className="container">
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
        </ThemeBlock>
      </section>
    </main>
  )
}
