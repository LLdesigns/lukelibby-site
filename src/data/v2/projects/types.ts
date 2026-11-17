export type ProjectTheme = {
  background: string
  surface: string
  ink: string
  muted: string
  accent: string
  /** Body / UI font stack. Defaults to site sans (Poppins). */
  font?: string
  /** Heading font stack. Defaults to site display (Poppins). */
  fontDisplay?: string
}

export type ProjectFrame = {
  src: string
  alt: string
  label: string
  note?: string
  position?: string
  fit?: 'contain' | 'cover'
}

export type ProjectHero = {
  eyebrow: string
  title: string
  lede: string
  role?: string
  meta?: string
  intro?: string[]
  tags: string[]
  ownership?: string[]
  image?: string
  imageAlt?: string
  imagePosition?: string
  caption?: string
  frames?: ProjectFrame[]
}

export type ProjectBlock =
  | {
      type: 'split'
      id: string
      nav: string
      eyebrow: string
      title: string
      paragraphs: string[]
    }
  | {
      type: 'aside'
      id: string
      nav: string
      eyebrow: string
      title: string
      paragraphs: string[]
      mediaSide?: 'start' | 'end'
      media: { src: string; alt: string; caption: string; position?: string }
    }
  | {
      type: 'annotated'
      id: string
      nav: string
      eyebrow: string
      title: string
      paragraphs: string[]
      image: string
      imageAlt: string
      notes: { label: string; body: string }[]
    }
  | {
      type: 'pair'
      id: string
      nav: string
      eyebrow: string
      title: string
      paragraphs: string[]
      frames: ProjectFrame[]
    }
  | {
      type: 'diagram'
      id: string
      nav: string
      eyebrow: string
      title: string
      intro: string
      steps: { label: string; detail: string }[]
      lanes: { title: string; paragraphs: string[] }[]
    }
  | {
      type: 'roles'
      id: string
      nav: string
      eyebrow: string
      items: { title: string; body: string }[]
    }
  | {
      type: 'steps'
      id: string
      nav: string
      eyebrow: string
      items: { title: string; body: string }[]
    }
  | {
      type: 'showcase'
      id: string
      nav: string
      eyebrow: string
      title: string
      paragraphs: string[]
      image: string
      imageAlt: string
      caption: string
      screens?: { src: string; alt: string; label: string }[]
    }
  | {
      type: 'system'
      id: string
      nav: string
      eyebrow: string
      title: string
      intro: string
      columns: { title: string; paragraphs: string[] }[]
      notes: { label: string; body: string }[]
    }
  | {
      type: 'trio'
      id: string
      nav: string
      eyebrow: string
      items: { label: string; title: string; body: string }[]
    }
  | {
      type: 'takeaways'
      id: string
      nav: string
      eyebrow: string
      items: string[]
      image?: string
      imageAlt?: string
    }
  | {
      type: 'decisions'
      id: string
      nav: string
      eyebrow: string
      title: string
      intro?: string
      features: ProjectDecision[]
    }
  | {
      type: 'process'
      id: string
      nav: string
      eyebrow: string
      title: string
      intro: string
      stages: { label: string; detail: string }[]
    }
  | {
      type: 'experience'
      id: string
      nav: string
      eyebrow: string
      title: string
      intro?: string
      scenes: ProjectScene[]
    }
  | {
      type: 'reflection'
      id: string
      nav: string
      eyebrow: string
      title: string
      statement: string
      detail: string
    }
  | {
      type: 'reconstruction'
      id: string
      nav: string
      eyebrow: string
      title: string
      intro: string
      beforeLabel: string
      before: { title: string; detail: string }[]
      slide: { kicker: string; title: string; body: string }
      finding: { status: string; title: string; what: string; why: string; action: string }
      caption: string
    }
  | {
      type: 'graph'
      id: string
      nav: string
      eyebrow: string
      title: string
      intro: string
      start: string
      nodes: {
        id: string
        label: string
        kind: 'objective' | 'concept' | 'tool' | 'outlier'
        x: number
        y: number
        apart?: string
      }[]
      links: { from: string; to: string; why: string }[]
      caption: string
    }
  | {
      type: 'review'
      id: string
      nav: string
      eyebrow: string
      title: string
      intro: string
      beforeLabel: string
      before: { title: string; detail: string }[]
      clip?: string
      finding?: { title: string; what: string; why: string }
      actions?: [string, string]
      media?: { src: string; alt: string }
      caption: string
    }
  | {
      type: 'pivot'
      id: string
      nav: string
      eyebrow: string
      title: string
      intro: string
      flow: { label: string; detail: string }[]
      lanes: { label: string; title: string; body: string }[]
      caption: string
    }
  | {
      type: 'route'
      id: string
      nav: string
      eyebrow: string
      title: string
      intro: string
      cardTitle: string
      cardBody: string
      notes: { title: string; detail: string }[]
      caption: string
    }
  | {
      type: 'plate'
      id: string
      nav: string
      eyebrow: string
      title: string
      intro: string
      image: string
      imageAlt: string
      caption: string
      /** Constrain tall phone screenshots so they don't span the full content width. */
      size?: 'phone'
    }

export type ProjectDecision = {
  title: string
  problem: string
  decision: string
  image: string
  imageAlt: string
  mediaSide?: 'start' | 'end'
  callouts: { label: string; y: number }[]
}

export type ProjectScene =
  | {
      layout: 'split'
      title: string
      body: string
      image: string
      imageAlt: string
      caption: string
      mediaSide?: 'start' | 'end'
    }
  | {
      layout: 'stage'
      title: string
      body: string
      image: string
      imageAlt: string
      caption: string
    }
  | {
      layout: 'compare'
      title: string
      body: string
      frames: {
        src: string
        alt: string
        label: string
        caption: string
        position?: string
        fit?: 'contain' | 'cover' | 'wide'
      }[]
    }

export type ProjectDocument = {
  slug: string
  title: string
  description: string
  /** Public navigation and indexing wait until the page has been reviewed. */
  published?: boolean
  theme: ProjectTheme
  hero: ProjectHero
  blocks: ProjectBlock[]
  liveUrl?: string
  liveLabel?: string
  closing?: string
}
