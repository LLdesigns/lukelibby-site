# Case Study System Summary

Reusable, data-driven case study pages for the Luke Libby portfolio, matching the field-notes visual language.

## Routes

| Path | Page |
|------|------|
| `/` | Homepage (`HomePage.tsx`) |
| `/case-studies/ai-lab-production` | Full case study |
| `/case-studies/plottr` | Placeholder draft |
| `/case-studies/nutriant` | Placeholder draft |

Routing uses **react-router-dom** (`BrowserRouter` in `App.tsx`). Homepage cards use `<Link to={...}>` for client-side navigation.

## Files created

### Pages
- `src/pages/HomePage.tsx` — homepage content (moved from `App.tsx`)
- `src/pages/CaseStudyPage.tsx` — loads study by `:slug` param

### Case study components (`src/components/case-study/`)
- `CaseStudyHero.tsx` — eyebrow, title, subtitle, meta, privacy
- `CaseStudyMeta.tsx` — metadata chips
- `PrivacyNote.tsx` — anonymized IP notice
- `ProjectSnapshot.tsx` — problem / role / outcome paper card
- `FieldNotes.tsx` — numbered process steps (dark panel)
- `ArtifactGrid.tsx` — diagram placeholder cards (paper)
- `ImpactList.tsx` — impact bullets
- `ReflectionBlock.tsx` — reflection paragraphs
- `NextCaseStudy.tsx` — bottom navigation to next study
- `CaseStudySection.tsx` — titled prose sections

### Other
- `src/components/SiteFooter.tsx` — shared footer with router-aware hash links
- `src/styles/case-study.css` — case study layout and components

## Files updated

- `src/App.tsx` — router + layout shell
- `src/data/caseStudies.ts` — full content model + all three studies
- `src/components/CaseStudyCard.tsx` — `Link` instead of `<a>`
- `src/components/Header.tsx` — `Link` for brand and hash nav (`/#work`, etc.)
- `src/styles/global.css` — base layout styles
- `src/main.tsx` — imports `case-study.css` directly (avoids PostCSS resolving nested `@import` from project root)
- `package.json` — `react-router-dom` dependency

## How case study data works

1. **`CASE_STUDY_ORDER`** — defines slug order and next-study chain.
2. **`caseStudiesBySlug`** — record keyed by slug (`ai-lab-production`, `plottr`, `nutriant`).
3. **`getCaseStudy(slug)`** — used by `CaseStudyPage` from URL param.
4. **`homepageCaseStudies`** — list with `href` for homepage cards.

Each `CaseStudyDetail` includes:
- Card fields: `number`, `description`, `tags`, `imageLabel`
- Page fields: `eyebrow`, `subtitle`, `metaChips`, `snapshot`, `challenge`, `myRole`, `fieldNotes`, `artifacts`, `solution`, `impact`, `reflection`, `nextSlug`
- `status`: `'full'` | `'placeholder'` — placeholder shows draft banner

**Next study links:** ai-lab → plottr → nutriant → ai-lab (cycle).

## What to replace later

| Item | Location |
|------|----------|
| Hero / artifact visuals | `ImagePlaceholder` in `CaseStudyPage`, `ArtifactGrid` — search `TODO:` |
| Plottr full copy | `caseStudies.ts` → `plottr` object |
| Nutriant full copy | `caseStudies.ts` → `nutriant` object |
| Real diagrams | Swap placeholders per artifact `placeholderLabel` |
| Page title / meta | Optional `useEffect` in `CaseStudyPage` or `index.html` per route |

Do not add company names, internal screenshots, proprietary metrics, or confidential architecture.

## Run locally

```bash
npm install
npm run dev
```

Build: `npm run build`

## Next recommended prompts

**Plottr (case study 02):**
> Expand the Plottr placeholder in `caseStudies.ts` with full Field Notes, four artifacts, solution, impact, and reflection. Keep content anonymized — focus on slide systems, layout logic, and prototype thinking. Replace artifact placeholders with diagram labels.

**Nutriant (case study 03):**
> Expand the Nutriant placeholder with a full product field report: kitchen operations, compliance-aware workflows, and platform design — without private client or implementation details. Add 4 artifacts and complete impact/reflection when outcomes are ready.

**Optional follow-ups:**
- Add `scrollRestoration` / document title per case study
- `public/_redirects` or host config for SPA deep links in production
- Shared `Layout` with meta tags per slug
