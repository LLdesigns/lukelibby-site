# Homepage Build Summary

Personal portfolio homepage for **Luke Libby** — field-notes style, React + Vite + TypeScript, plain CSS (no Tailwind).

## Run locally

```bash
npm install
npm run dev
```

Dev server: **http://localhost:5199** (dedicated port — won’t use Vite’s default 5173).

Production build:

```bash
npm run build
npm run preview
```

Preview server: **http://localhost:5198**

## Components created

| Component | Path | Purpose |
|-----------|------|---------|
| `Header` | `src/components/Header.tsx` | Sticky nav, brand, resume CTA |
| `Button` | `src/components/Button.tsx` | Primary / secondary / paper / brass link & button |
| `SectionHeading` | `src/components/SectionHeading.tsx` | Section labels and titles |
| `CaseStudyCard` | `src/components/CaseStudyCard.tsx` | Field-note folder style project cards |
| `Tag` | `src/components/Tag.tsx` | Skill and project tags (pill) |
| `FocusPanel` | `src/components/FocusPanel.tsx` | Hero sidebar: focus areas + sticky note |
| `ValueCard` | `src/components/ValueCard.tsx` | Bottom four-column value blocks |
| `ImagePlaceholder` | `src/components/ImagePlaceholder.tsx` | Replaceable project image boxes |

## Data files

- `src/data/caseStudies.ts` — three selected work entries (title, tags, hrefs, placeholder labels)
- `src/data/skills.ts` — focus areas, builder tags, value blocks, nav links

## Styles

- `src/styles/theme.css` — CSS variables (colors, type, spacing)
- `src/styles/global.css` — reset, texture background, layout grids, section/footer
- `src/styles/components.css` — component-specific rules

Imported from `src/main.tsx` via `global.css`.

## Files added / changed

**Project config:** `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `index.html`, `.gitignore`, `public/favicon.svg`

**App:** `src/main.tsx`, `src/App.tsx`, `src/vite-env.d.ts`

**Components, data, styles:** see tables above

**Docs:** `docs/homepage_build_summary.md` (this file)

## Where to replace content & images

1. **Case study images** — Update `ImagePlaceholder` usages in `CaseStudyCard.tsx`, or swap `ImagePlaceholder` for `<img src="..." alt="..." />` per project. Labels live in `src/data/caseStudies.ts` (`imageLabel`).

2. **Case study copy & links** — Edit `src/data/caseStudies.ts`. Placeholder routes:
   - `/case-studies/ai-lab-production`
   - `/case-studies/plottr`
   - `/case-studies/nutriant`

3. **Resume** — Place `resume.pdf` in `public/resume.pdf` (linked from header and nav). TODO in `Header.tsx`.

4. **Hero / about copy** — `src/App.tsx` (hero, builder notes) and `src/components/FocusPanel.tsx` (sticky note text).

5. **Skills & values** — `src/data/skills.ts` (`builderNoteTags`, `valueBlocks`, `focusAreas`).

6. **Theme tweaks** — `src/styles/theme.css`.

7. **Metadata** — `index.html` title and description.

Search the repo for `TODO:` to find inline reminders.

## TODOs — case study pages (not built yet)

- No router added (per scope). Case study links are plain `<a href>` placeholders.
- When adding pages later, consider `react-router-dom` or static HTML per case study.
- Build three detail pages matching the hrefs above, reusing `theme.css` and card/paper patterns.
- Replace anonymized copy in case study 01 when cleared for publication.

## Design notes

- Dark charcoal field background with CSS grid + subtle topographic texture (`body::before` in `global.css`).
- Paper-toned case cards on elevated dark band for “Selected Work.”
- System fonts only; uppercase labels with letter-spacing; monospace for metadata.
- Responsive: stacked hero → side-by-side at 900px; 1/2/3 column work grid; 2/4 column values.

## Dependencies

Runtime: `react`, `react-dom`  
Dev: `vite`, `@vitejs/plugin-react`, `typescript`, `@types/react`, `@types/react-dom`

No Tailwind, no UI kit, no backend, no routing.
