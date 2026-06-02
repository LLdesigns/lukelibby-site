import { Link, useParams } from 'react-router-dom'
import { ArtifactGrid } from '../components/case-study/ArtifactGrid'
import { CaseStudyHero } from '../components/case-study/CaseStudyHero'
import { CaseStudySection } from '../components/case-study/CaseStudySection'
import { FieldNotes } from '../components/case-study/FieldNotes'
import { ImpactList } from '../components/case-study/ImpactList'
import { NextCaseStudy } from '../components/case-study/NextCaseStudy'
import { ProjectSnapshot } from '../components/case-study/ProjectSnapshot'
import { CaseStudyVisual } from '../components/case-study/CaseStudyVisual'
import { ScrollReveal } from '../components/ScrollReveal'
import { getCaseStudy } from '../data/caseStudies'

function ProseBlock({ text }: { text: string }) {
  return <div className="cs-prose cs-prose--pre">{text}</div>
}

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  const study = slug ? getCaseStudy(slug) : undefined

  if (!study) {
    return (
      <main className="cs-page">
        <div className="container">
          <p className="cs-not-found">Case study not found.</p>
          <Link className="cs-back" to="/work#case-studies">
            ← Back to Case Studies
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="cs-page">
      <div className="container cs-page__inner">
        <ScrollReveal variant="drift-left" immediate>
          <Link className="cs-back" to="/work#case-studies">
            ← Back to Case Studies
          </Link>
        </ScrollReveal>

        {study.status === 'placeholder' && (
          <ScrollReveal variant="rise" immediate delay={80}>
            <p className="cs-draft-banner" role="status">
              Draft field report — sections marked TODO will be expanded in a
              future update.
            </p>
          </ScrollReveal>
        )}

        <ScrollReveal variant="unfurl" immediate delay={100}>
          <CaseStudyHero study={study} />
        </ScrollReveal>

        <ScrollReveal variant="rise" immediate delay={80}>
          <div className="cs-hero-visual">
            <CaseStudyVisual
              src={study.heroImageSrc}
              alt={study.heroImageAlt}
              placeholderLabel={study.heroVisualLabel}
              priority={Boolean(study.heroImageSrc)}
              width={study.heroImageWidth}
              height={study.heroImageHeight}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal variant="paper-drop" delay={120}>
          <ProjectSnapshot snapshot={study.snapshot} />
        </ScrollReveal>

        <ScrollReveal variant="rise">
          <CaseStudySection title="The Challenge">
            <ProseBlock text={study.challenge} />
          </CaseStudySection>
        </ScrollReveal>

        <ScrollReveal variant="rise" delay={80}>
          <CaseStudySection title="My Role">
            <ProseBlock text={study.myRole} />
          </CaseStudySection>
        </ScrollReveal>

        <ScrollReveal variant="unfurl">
          <FieldNotes steps={study.fieldNotes} />
        </ScrollReveal>

        <ScrollReveal variant="unfurl" delay={100}>
          <ArtifactGrid artifacts={study.artifacts} />
        </ScrollReveal>

        <ScrollReveal variant="rise">
          <CaseStudySection title="The Solution">
            <ProseBlock text={study.solution} />
          </CaseStudySection>
        </ScrollReveal>

        <ScrollReveal variant="rise">
          <CaseStudySection title="Impact">
            <ScrollReveal variant="cascade">
              <ImpactList items={study.impact} cascade />
            </ScrollReveal>
          </CaseStudySection>
        </ScrollReveal>

        <ScrollReveal variant="drift-right">
          <NextCaseStudy slug={study.slug} />
        </ScrollReveal>
      </div>
    </main>
  )
}
