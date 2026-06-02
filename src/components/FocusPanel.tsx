import { focusAreas } from '../data/skills'

export function FocusPanel() {
  return (
    <aside className="focus-panel-wrap" aria-label="Tools and focus areas">
      <div className="focus-panel">
        <h2 className="focus-panel__title">Tools &amp; Focus Areas</h2>
        <ul className="focus-panel__list">
          {focusAreas.map((area) => (
            <li key={area} className="focus-panel__item">
              {area}
            </li>
          ))}
        </ul>
      </div>
      <img
        className="focus-panel__note hero-sticky-note sticky-note--animate"
        src="/images/sticky-note.png"
        alt="Builder at heart. Problem solver by choice."
        width={819}
        height={1024}
        loading="eager"
        decoding="async"
      />
    </aside>
  )
}
