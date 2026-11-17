import { ThemeBlock } from '../components/ThemeBlock'
import { DocumentHead } from '../components/DocumentHead'
import { FeaturedProjectCard } from '../components/work/FeaturedProjectCard'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionHeading } from '../components/SectionHeading'
import { Tag } from '../components/Tag'
import { ValueCard } from '../components/ValueCard'
import { Button } from '../components/Button'
import {
  homepageFeaturedStories,
  workPageIntro,
} from '../data/work'
import { ConsultingSection } from '../components/consulting/ConsultingSection'
import { builderNoteTags, builderNotesParagraphs, valueBlocks } from '../data/skills'
import { withBasePath } from '../utils/basePath'
import { siteMeta } from '../data/site'
import { personJsonLd, websiteJsonLd } from '../utils/structuredData'

const profilePhotoSrc = withBasePath('/images/luke-libby.png')
const heroSceneSrc = withBasePath('/images/hero-mountains.jpg')
const heroPortraitSrc = withBasePath('/images/v2/luke-portrait.png')

export function HomePage() {
  return (
    <main>
      <DocumentHead
        title="Home"
        description={siteMeta.description}
        pathname="/"
        jsonLd={[personJsonLd(), websiteJsonLd()]}
      />
      <section className="home-hero" aria-labelledby="hero-heading">
        <img
          className="home-hero__scene"
          src={heroSceneSrc}
          alt=""
          width={819}
          height={1024}
        />
        <div className="home-hero__content">
          <img
            className="home-hero__portrait"
            src={heroPortraitSrc}
            alt="Pencil portrait of Luke Libby"
          />
          <div className="home-hero__copy">
            <p className="home-hero__eyebrow">
              <span>Creative Technologist / Product Builder</span>
              <span className="home-hero__rule" aria-hidden="true" />
            </p>
            <h1 id="hero-heading" className="home-hero__title">
              I design, prototype,
              <br />
              and build <em>useful tools.</em>
            </h1>
            <p className="home-hero__lede">
              Turning complex ideas into simple, human-centered products through
              design, research, and rapid prototyping.
            </p>
            <div className="home-hero__actions">
              <Button variant="primary" href="/work">
                Explore Work
              </Button>
              <Button variant="secondary" href="#about">
                About Me
              </Button>
            </div>
          </div>
        </div>
        <a className="home-hero__chevron" href="#work">
          <span className="home-hero__sr">Explore work</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 9.5 12 16.5 19 9.5" />
          </svg>
        </a>
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
            <div className="about-section">
              <figure className="about-section__portrait">
                <img
                  src={profilePhotoSrc}
                  alt="Luke Libby wearing an orange cap and plaid shirt"
                  width={176}
                  height={220}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="about-section__body">
                <div className="builder-notes-copy">
                  {builderNotesParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="skill-tags">
                  {builderNoteTags.map((skill) => (
                    <Tag key={skill} variant="dark">
                      {skill}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
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

      <ConsultingSection />
    </main>
  )
}
