# Interactive Resume — Build Summary

## Route

**http://localhost:5199/resume**

Nav **Resume** links to the interactive page. Header **Download Resume** downloads `public/resume.pdf` (one-page PDF).

LinkedIn: [luke-libby1](https://www.linkedin.com/in/luke-libby1/)

## Interactive features

| Section | Interaction |
|---------|-------------|
| **Field Index** (sidebar) | Click to jump; highlights active section on scroll |
| **Core Skills** | Category tabs filter/highlight skill panels; skill chips focus a category |
| **Experience** | Expand/collapse accordion (Pluralsight) |
| **Projects** | Tab between Nutriant, GearTraxx, R&D; Nutriant links to case study |
| **Education** | Click timeline nodes to reveal degree details |
| **Strengths** | Staggered cascade reveal on scroll |

Scroll animations use the existing `ScrollReveal` system.

## Files

- `src/data/resume.ts` — all copy and structure
- `src/pages/ResumePage.tsx` — page layout
- `src/components/resume/*` — explorer, hero, sections, interactives
- `src/hooks/useActiveSection.ts` — scroll spy for nav
- `src/styles/resume.css` — resume styles

## PDF download (1 page)

- File: `public/resume.pdf`
- Regenerate after editing copy: `npm run generate:resume-pdf` (requires `pip install fpdf2`)
- Source script: `scripts/generate_resume_pdf.py` (condensed one-page layout)

## TODO

- Link Plottr case study from R&D section when desired
- Edit PDF script when resume content changes materially

## Run

```bash
npm run dev
```

Open **http://localhost:5199/resume**
