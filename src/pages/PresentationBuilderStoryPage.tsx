import { Link } from 'react-router-dom'
import { NextProductStory } from '../components/product-story/NextProductStory'
import { ScrollReveal } from '../components/ScrollReveal'
import { ThemeBlock } from '../components/ThemeBlock'
import { StoryOverviewBlock, StoryOverviewPanel } from '../components/story-page/StoryOverviewPanel'
import { StoryPageLayout } from '../components/story-page/StoryPageLayout'
import type { StoryNavItem } from '../components/story-page/storyNavUtils'
import { presentationBuilderStory } from '../data/productStories/presentationBuilderStory'
import { AnonymizedStoryNote } from '../components/presentation-builder-story/AnonymizedStoryNote'
import { ArtifactStoryGrid } from '../components/presentation-builder-story/ArtifactStoryGrid'
import { BuildGroups } from '../components/presentation-builder-story/BuildGroups'
import { ClosingThoughtPanel } from '../components/presentation-builder-story/ClosingThoughtPanel'
import { DecisionCards } from '../components/presentation-builder-story/DecisionCards'
import { EditorialHero } from '../components/presentation-builder-story/EditorialHero'
import { OutcomeCards } from '../components/presentation-builder-story/OutcomeCards'
import { ProblemContrastCards } from '../components/presentation-builder-story/ProblemContrastCards'
import { ProductBetPanel } from '../components/presentation-builder-story/ProductBetPanel'
import { QuickFactsGrid } from '../components/presentation-builder-story/QuickFactsGrid'
import { ReflectionPanel } from '../components/presentation-builder-story/ReflectionPanel'
import { RoleCapabilityGroups } from '../components/presentation-builder-story/RoleCapabilityGroups'
import { StorySection } from '../components/presentation-builder-story/StorySection'
import { SystemFlowDiagram } from '../components/presentation-builder-story/SystemFlowDiagram'

const PRESENTATION_BUILDER_NAV: StoryNavItem[] = [
  { id: 'story-overview', label: 'Overview' },
  { id: 'story-noticed', label: 'What I noticed' },
  { id: 'story-bet', label: 'Product bet' },
  { id: 'story-role', label: 'My role' },
  { id: 'story-system', label: 'The system' },
  { id: 'story-decisions', label: 'Decisions' },
  { id: 'story-built', label: 'What I built' },
  { id: 'story-artifacts', label: 'Visual artifacts' },
  { id: 'story-changed', label: 'What changed' },
  { id: 'story-learned', label: 'What I learned' },
  { id: 'story-closing', label: 'Closing' },
]

export function PresentationBuilderStoryPage() {
  const story = presentationBuilderStory

  return (
    <main className="psb-page cs-page">
      <div className="container psb-page__inner">
        <ScrollReveal variant="drift-left" immediate>
          <Link className="cs-back" to="/work#product-stories">
            ← Back to Product Stories
          </Link>
        </ScrollReveal>

        <StoryPageLayout navItems={PRESENTATION_BUILDER_NAV}>
          <div id="story-overview" className="story-page__overview story-page__section">
            <StoryOverviewPanel>
              <ThemeBlock>
              <StoryOverviewBlock variant="intro">
                <ScrollReveal variant="unfurl" immediate delay={80}>
                  <EditorialHero hero={story.hero} />
                </ScrollReveal>
              </StoryOverviewBlock>

              <StoryOverviewBlock variant="facts">
                <ScrollReveal variant="paper-drop" immediate delay={100}>
                  <QuickFactsGrid facts={story.quickFacts} />
                </ScrollReveal>
              </StoryOverviewBlock>

              <StoryOverviewBlock variant="note">
                <ScrollReveal variant="rise" delay={80}>
                  <AnonymizedStoryNote
                    title={story.anonymizedNote.title}
                    paragraphs={story.anonymizedNote.paragraphs}
                  />
                </ScrollReveal>
              </StoryOverviewBlock>
              </ThemeBlock>
            </StoryOverviewPanel>
          </div>

          <ScrollReveal variant="rise" delay={100}>
            <StorySection sectionId="story-noticed" label="Observation" title="What I noticed">
              <ProblemContrastCards content={story.whatINoticed} />
            </StorySection>
          </ScrollReveal>

          <ScrollReveal variant="paper-drop" delay={120}>
            <StorySection sectionId="story-bet" label="Thesis" title="The product bet">
              <ProductBetPanel content={story.productBet} />
            </StorySection>
          </ScrollReveal>

          <ScrollReveal variant="rise" delay={100}>
            <StorySection sectionId="story-role" label="Scope" title="My role">
              <RoleCapabilityGroups content={story.myRole} />
            </StorySection>
          </ScrollReveal>

          <ScrollReveal variant="paper-drop" delay={120}>
            <StorySection sectionId="story-system" label="System design" title="The system I designed">
              <SystemFlowDiagram content={story.system} />
            </StorySection>
          </ScrollReveal>

          <ScrollReveal variant="rise" delay={100}>
            <StorySection sectionId="story-decisions" label="Product thinking" title="Key product decisions">
              <DecisionCards decisions={story.decisions} />
            </StorySection>
          </ScrollReveal>

          <ScrollReveal variant="paper-drop" delay={120}>
            <StorySection sectionId="story-built" label="Execution" title="What I built">
              <BuildGroups content={story.whatIBuilt} />
            </StorySection>
          </ScrollReveal>

          <ScrollReveal variant="rise" delay={100}>
            <StorySection sectionId="story-artifacts" label="Concept visuals" title="Visual artifacts">
              <ArtifactStoryGrid content={story.artifacts} />
            </StorySection>
          </ScrollReveal>

          <ScrollReveal variant="paper-drop" delay={120}>
            <StorySection sectionId="story-changed" label="Outcomes" title="What changed">
              <OutcomeCards content={story.whatChanged} />
            </StorySection>
          </ScrollReveal>

          <ScrollReveal variant="rise" delay={100}>
            <ReflectionPanel
              sectionId="story-learned"
              paragraphs={story.whatILearned.paragraphs}
            />
          </ScrollReveal>

          <ScrollReveal variant="paper-drop" delay={120}>
            <ClosingThoughtPanel
              sectionId="story-closing"
              paragraphs={story.closingThought.paragraphs}
            />
          </ScrollReveal>

          <ScrollReveal variant="drift-left" delay={80}>
            <NextProductStory slug="presentation-builder" />
          </ScrollReveal>
        </StoryPageLayout>
      </div>
    </main>
  )
}
