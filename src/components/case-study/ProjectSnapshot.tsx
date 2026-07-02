import type { StorySnapshot } from '../../data/productStories'

type ProjectSnapshotProps = {
  snapshot: StorySnapshot
}

export function ProjectSnapshot({ snapshot }: ProjectSnapshotProps) {
  return (
    <section className="cs-snapshot paper-card" aria-labelledby="snapshot-heading">
      <h2 id="snapshot-heading" className="cs-section-label">
        Project Snapshot
      </h2>
      <div className="cs-snapshot__grid">
        <div className="cs-snapshot__item">
          <h3 className="cs-snapshot__key">Problem</h3>
          <p className="cs-snapshot__text">{snapshot.problem}</p>
        </div>
        <div className="cs-snapshot__item">
          <h3 className="cs-snapshot__key">My Role</h3>
          <p className="cs-snapshot__text">{snapshot.myRole}</p>
        </div>
        <div className="cs-snapshot__item">
          <h3 className="cs-snapshot__key">Outcome</h3>
          <p className="cs-snapshot__text">{snapshot.outcome}</p>
        </div>
      </div>
    </section>
  )
}
