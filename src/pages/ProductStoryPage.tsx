import { Link, useParams } from 'react-router-dom'
import { DocumentHead } from '../components/DocumentHead'
import { ArtifactGrid } from '../components/case-study/ArtifactGrid'
import { CaseStudySection } from '../components/case-study/CaseStudySection'
import { CaseStudyVisual } from '../components/case-study/CaseStudyVisual'
import { FieldNotes } from '../components/case-study/FieldNotes'
import { ImpactList } from '../components/case-study/ImpactList'
import { ProjectSnapshot } from '../components/case-study/ProjectSnapshot'
import { ReflectionBlock } from '../components/case-study/ReflectionBlock'
import { LoopDiagram } from '../components/product-system/LoopDiagram'
import { NextProductStory } from '../components/product-story/NextProductStory'
import { ProductStoryHero } from '../components/product-story/ProductStoryHero'
import { ScrollReveal } from '../components/ScrollReveal'
import {
  getProductStory,
  type ProductStorySlug,
} from '../data/productStories'
import { articleJsonLd } from '../utils/structuredData'

function ProseBlock({ text }: { text: string }) {
  return <div className="cs-prose cs-prose--pre">{text}</div>
}

export function ProductStoryPage() {
  const { slug } = useParams<{ slug: string }>()
  const story = slug ? getProductStory(slug) : undefined

  if (!story) {
    return (
      <main className="cs-page">
        <DocumentHead
          title="Product Story Not Found"
          description="The requested product story could not be found."
          noindex
        />
        <div className="container">
          <p className="cs-not-found">Product story not found.</p>
          <Link className="cs-back" to="/work#product-stories">
            ← Back to Product Stories
          </Link>
        </div>
      </main>
    )
  }

  const isConceptStory = Boolean(story.productLoop)

  return (
    <main className={`cs-page ps-page${isConceptStory ? ' ps-page--concept' : ''}`}>
      <DocumentHead
        title={story.title}
        description={story.description}
        pathname={`/stories/${story.slug}`}
        imagePath={story.heroImageSrc ?? story.cardImageSrc}
        type="article"
        jsonLd={articleJsonLd({
          headline: story.title,
          description: story.description,
          path: `/stories/${story.slug}`,
          imagePath: story.heroImageSrc ?? story.cardImageSrc,
          keywords: story.tags,
        })}
      />
      <div className="container cs-page__inner">
        <ScrollReveal variant="drift-left" immediate>
          <Link className="cs-back" to="/work#product-stories">
            ← Back to Product Stories
          </Link>
        </ScrollReveal>

        {story.status === 'placeholder' && (
          <ScrollReveal variant="rise" immediate delay={80}>
            <p className="cs-draft-banner" role="status">
              Draft product story, sections marked TODO will be expanded in a
              future update.
            </p>
          </ScrollReveal>
        )}

        <ScrollReveal variant="unfurl" immediate delay={100}>
          <ProductStoryHero story={story} />
        </ScrollReveal>

        <ScrollReveal variant="rise" immediate delay={80}>
          <div className="cs-hero-visual">
            <CaseStudyVisual
              src={story.heroImageSrc}
              alt={story.heroImageAlt}
              placeholderLabel={story.heroVisualLabel}
              priority={Boolean(story.heroImageSrc)}
              width={story.heroImageWidth}
              height={story.heroImageHeight}
            />
          </div>
        </ScrollReveal>

        {story.snapshot ? (
          <ScrollReveal variant="paper-drop" delay={120}>
            <ProjectSnapshot snapshot={story.snapshot} />
          </ScrollReveal>
        ) : null}

        <ScrollReveal variant="rise">
          <CaseStudySection title="Why This Exists">
            <ProseBlock text={story.context} />
          </CaseStudySection>
        </ScrollReveal>

        <ScrollReveal variant="rise" delay={80}>
          <CaseStudySection title="My Role">
            <ProseBlock text={story.myRole} />
            {story.myRoleFocus && story.myRoleFocus.length > 0 ? (
              <ScrollReveal variant="cascade">
                <ImpactList items={story.myRoleFocus} cascade />
              </ScrollReveal>
            ) : null}
          </CaseStudySection>
        </ScrollReveal>

        {story.processSteps && story.processSteps.length > 0 ? (
          <ScrollReveal variant="unfurl">
            <FieldNotes steps={story.processSteps} />
          </ScrollReveal>
        ) : null}

        {story.productLoop ? (
          <ScrollReveal variant="unfurl">
            <CaseStudySection title="Core Idea">
              {story.coreIdeaIntro ? (
                <ProseBlock text={story.coreIdeaIntro} />
              ) : null}
              <LoopDiagram steps={story.productLoop} />
              {story.coreIdeaClosing ? (
                <p className="cs-prose ps-core-closing">{story.coreIdeaClosing}</p>
              ) : null}
            </CaseStudySection>
          </ScrollReveal>
        ) : null}

        {story.features && story.features.length > 0 ? (
          <ScrollReveal variant="unfurl" delay={100}>
            <section
              className="cs-field-notes paper-card"
              aria-labelledby="features-heading"
            >
              <h2 id="features-heading" className="cs-section-label">
                Key Features
              </h2>
              <ol className="cs-field-notes__list">
                {story.features.map((feature, index) => (
                  <li key={feature.title} className="cs-field-notes__step">
                    <span className="cs-field-notes__num" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="cs-field-notes__step-title">{feature.title}</h3>
                    <p className="cs-field-notes__step-body">{feature.description}</p>
                  </li>
                ))}
              </ol>
            </section>
          </ScrollReveal>
        ) : null}

        {story.featuresImageSrc ? (
          <ScrollReveal variant="unfurl" delay={120}>
            <section
              className="cs-field-notes paper-card ps-app-structure"
              aria-labelledby="app-structure-heading"
            >
              <h2 id="app-structure-heading" className="cs-section-label">
                {story.featuresImageSectionTitle ?? 'App Structure'}
              </h2>
              <figure className="ps-app-structure__figure">
                <CaseStudyVisual
                  src={story.featuresImageSrc}
                  alt={story.featuresImageAlt}
                  placeholderLabel={
                    story.featuresImageSectionTitle ?? 'App structure'
                  }
                />
              </figure>
            </section>
          </ScrollReveal>
        ) : null}

        {story.artifacts && story.artifacts.length > 0 ? (
          <ScrollReveal variant="unfurl" delay={100}>
            <ArtifactGrid artifacts={story.artifacts} />
          </ScrollReveal>
        ) : null}

        {story.dataObjects && story.dataObjects.length > 0 ? (
          <ScrollReveal variant="rise">
            <CaseStudySection title="Data Model">
              <p className="cs-prose">
                The first-pass data model centers on a few core objects:
              </p>
              <ScrollReveal variant="cascade">
                <ImpactList items={story.dataObjects} cascade />
              </ScrollReveal>
              <p className="cs-prose ps-system-note">
                Enough structure to ship the alpha, not a schema built for features
                that do not exist yet.
              </p>
              {story.relationships && story.relationships.length > 0 ? (
                <div className="ps-relations paper-card">
                  <h3 className="ps-structure__heading">Relationship Model</h3>
                  <ul className="ps-relations__list">
                    {story.relationships.map((rel) => (
                      <li key={rel}>
                        <code>{rel}</code>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </CaseStudySection>
          </ScrollReveal>
        ) : null}

        {story.mvpScope && story.mvpScope.length > 0 ? (
          <ScrollReveal variant="rise" delay={80}>
            <CaseStudySection title="MVP Scope">
              <p className="cs-prose">For an alpha version, I would focus on:</p>
              <ScrollReveal variant="cascade">
                <ImpactList items={story.mvpScope} cascade />
              </ScrollReveal>
              {story.deferredFeatures ? (
                <p className="cs-prose ps-core-closing">{story.deferredFeatures}</p>
              ) : null}
            </CaseStudySection>
          </ScrollReveal>
        ) : null}

        {story.approach ? (
          <ScrollReveal variant="rise">
            <CaseStudySection title="What I Built">
              <ProseBlock text={story.approach} />
            </CaseStudySection>
          </ScrollReveal>
        ) : null}

        {story.results && story.results.length > 0 ? (
          <ScrollReveal variant="rise">
            <CaseStudySection title="What Changed">
              <ScrollReveal variant="cascade">
                <ImpactList items={story.results} cascade />
              </ScrollReveal>
            </CaseStudySection>
          </ScrollReveal>
        ) : null}

        {story.reflection ? (
          <ScrollReveal variant="rise" delay={80}>
            <ReflectionBlock text={story.reflection} />
          </ScrollReveal>
        ) : null}

        <ScrollReveal variant="drift-right">
          <NextProductStory slug={story.slug as ProductStorySlug} />
        </ScrollReveal>
      </div>
    </main>
  )
}
