import type { ProjectBlock } from '../../../data/v2/projects/types'

function Kicker({ children }: { children: string }) {
  return (
    <p className="vp-kicker">
      <span className="vp-kicker__rule" aria-hidden="true" />
      {children}
    </p>
  )
}

export function RouteBlock({ block }: { block: Extract<ProjectBlock, { type: 'route' }> }) {
  return (
    <section className="vp-block" id={block.id} aria-labelledby={`${block.id}-title`}>
      <Kicker>{block.eyebrow}</Kicker>
      <div className="vp-split">
        <h2 id={`${block.id}-title`}>{block.title}</h2>
        <p className="vp-prose">{block.intro}</p>
      </div>
      <div className="vp-route">
        <figure className="vp-route__map">
          <svg viewBox="0 0 640 420" role="img" aria-label="A track on a ridge, with the trail under the rider identified">
            <rect width="640" height="420" fill="#1a2820" />
            <path d="M0 280 C 120 240 180 300 280 250 C 380 200 420 230 520 180 C 580 150 620 160 640 140 L 640 420 L 0 420 Z" fill="#24362c" />
            <path d="M0 320 C 140 300 200 340 300 300 C 420 250 480 280 640 220 L 640 420 L 0 420 Z" fill="#2c4034" />
            <path d="M70 300 C 180 250 240 270 320 220 C 410 165 490 190 590 130" fill="none" stroke="#e0a15c" strokeWidth="4" strokeLinecap="round" />
            <circle cx="430" cy="186" r="7" fill="#f4f7f2" />
            <path d="M430 186 L 392 214 L 404 168 Z" fill="rgba(224,161,92,0.35)" stroke="#e0a15c" />
          </svg>
          <figcaption className="vp-route__card">
            <p>Under you</p>
            <h3>{block.cardTitle}</h3>
            <p>{block.cardBody}</p>
          </figcaption>
        </figure>
        <ol className="vp-recon__before">
          {block.notes.map((note, index) => (
            <li key={note.title}>
              <span>{index + 1}</span>
              <h3>{note.title}</h3>
              <p>{note.detail}</p>
            </li>
          ))}
        </ol>
      </div>
      <p className="vp-conceptual">{block.caption}</p>
    </section>
  )
}
