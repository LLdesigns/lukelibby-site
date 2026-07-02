import type { BuildGroup } from '../../data/productStories/playItProStory'

type BuildGroupsProps = {
  groups: BuildGroup[]
}

export function BuildGroups({ groups }: BuildGroupsProps) {
  return (
    <div className="pip-build">
      {groups.map((group) => (
        <article key={group.title} className="pip-build__group">
          <h3 className="pip-build__group-title">{group.title}</h3>
          <ul className="pip-build__list">
            {group.items.map((item) => (
              <li key={item} className="pip-build__item">
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
