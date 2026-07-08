import { Link } from 'react-router-dom'
import { DocumentHead } from '../components/DocumentHead'
import { NextProductStory } from '../components/product-story/NextProductStory'
import { ScrollReveal } from '../components/ScrollReveal'
import { ThemeBlock } from '../components/ThemeBlock'
import { StoryOverviewBlock, StoryOverviewPanel } from '../components/story-page/StoryOverviewPanel'
import { StoryPageLayout } from '../components/story-page/StoryPageLayout'
import type { StoryNavItem } from '../components/story-page/storyNavUtils'
import { playItProStory } from '../data/productStories/playItProStory'
import { articleJsonLd } from '../utils/structuredData'
import { BuildGroups } from '../components/play-it-pro-story/BuildGroups'
import { DecisionCards } from '../components/play-it-pro-story/DecisionCards'
import { EditorialHero } from '../components/play-it-pro-story/EditorialHero'
import { OutcomeCards } from '../components/play-it-pro-story/OutcomeCards'
import { ProductBetPanel } from '../components/play-it-pro-story/ProductBetPanel'
import { ReflectionPanel } from '../components/play-it-pro-story/ReflectionPanel'
import { ScreenshotStoryGrid } from '../components/play-it-pro-story/ScreenshotStoryGrid'
import { SplitProblemCards } from '../components/play-it-pro-story/SplitProblemCards'
import { StorySection } from '../components/play-it-pro-story/StorySection'
import { SystemEcosystem } from '../components/play-it-pro-story/SystemEcosystem'

const PLAY_IT_PRO_NAV: StoryNavItem[] = [
  { id: 'story-overview', label: 'Overview' },
  { id: 'story-noticed', label: 'What I noticed' },
  { id: 'story-bet', label: 'Product bet' },
  { id: 'story-system', label: 'The system' },
  { id: 'story-decisions', label: 'Decisions' },
  { id: 'story-built', label: 'What I built' },
  { id: 'story-artifacts', label: 'Visual artifacts' },
  { id: 'story-changed', label: 'What changed' },
  { id: 'story-learned', label: 'What I learned' },
]

export function PlayItProStoryPage() {
  const story = playItProStory

  return (
    <main className="pip-page cs-page">
      <DocumentHead
        title={story.hero.title}
        description={story.hero.subtitle}
        pathname="/stories/play-it-pro"
        imagePath="/images/playitpro/lesson-builder.png"
        type="article"
        jsonLd={articleJsonLd({
          headline: story.hero.title,
          description: story.hero.subtitle,
          path: '/stories/play-it-pro',
          imagePath: '/images/playitpro/lesson-builder.png',
        })}
      />
      <div className="container pip-page__inner">
        <ScrollReveal variant="drift-left" immediate>
          <Link className="cs-back" to="/work#product-stories">
            ← Back to Product Stories
          </Link>
        </ScrollReveal>

        <StoryPageLayout navItems={PLAY_IT_PRO_NAV}>
          <div id="story-overview" className="story-page__overview story-page__section">
            <StoryOverviewPanel>
              <ThemeBlock>
                <StoryOverviewBlock variant="intro">
                <ScrollReveal variant="unfurl" immediate delay={80}>
                  <EditorialHero hero={story.hero} />
                </ScrollReveal>
              </StoryOverviewBlock>
              </ThemeBlock>
            </StoryOverviewPanel>
          </div>

          <ScrollReveal variant="rise" delay={100}>
            <StorySection sectionId="story-noticed" label="Observation" title="What I noticed">
              <SplitProblemCards content={story.whatINoticed} />
            </StorySection>
          </ScrollReveal>

          <ScrollReveal variant="paper-drop" delay={120}>
            <StorySection sectionId="story-bet" label="Thesis" title="The product bet">
              <ProductBetPanel content={story.productBet} />
            </StorySection>
          </ScrollReveal>

          <ScrollReveal variant="rise" delay={100}>
            <StorySection sectionId="story-system" label="System design" title="The system I designed">
              <SystemEcosystem content={story.system} />
            </StorySection>
          </ScrollReveal>

          <ScrollReveal variant="rise" delay={120}>
            <StorySection sectionId="story-decisions" label="Product thinking" title="Key product decisions">
              <DecisionCards decisions={story.decisions} />
            </StorySection>
          </ScrollReveal>

          <ScrollReveal variant="paper-drop" delay={100}>
            <StorySection sectionId="story-built" label="Execution" title="What I built">
              <BuildGroups groups={story.whatIBuilt} />
            </StorySection>
          </ScrollReveal>

          <ScrollReveal variant="rise" delay={120}>
            <StorySection sectionId="story-artifacts" label="Evidence" title="Visual artifacts">
              <ScreenshotStoryGrid screenshots={story.screenshots} />
            </StorySection>
          </ScrollReveal>

          <ScrollReveal variant="paper-drop" delay={100}>
            <StorySection sectionId="story-changed" label="Outcomes" title="What changed">
              <OutcomeCards content={story.whatChanged} />
            </StorySection>
          </ScrollReveal>

          <ScrollReveal variant="rise" delay={120}>
            <ReflectionPanel
              sectionId="story-learned"
              paragraphs={story.whatILearned.paragraphs}
            />
          </ScrollReveal>

          <ScrollReveal variant="drift-left" delay={80}>
            <NextProductStory slug="play-it-pro" />
          </ScrollReveal>
        </StoryPageLayout>
      </div>
    </main>
  )
}
