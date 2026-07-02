import type { PresentationBuilderStoryContent } from '../../data/productStories/presentationBuilderStory'

type BuildGroupsProps = {
  content: PresentationBuilderStoryContent['whatIBuilt']
}

export function BuildGroups({ content }: BuildGroupsProps) {
  return (
    <>
      <p className="psb-section__lede">{content.intro}</p>
      <div className="psb-build">
        {content.groups.map((group) => (
          <article key={group.title} className="psb-build__group">
            <h3 className="psb-build__group-title">{group.title}</h3>
            <ul className="psb-build__list">
              {group.items.map((item) => (
                <li key={item} className="psb-build__item">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="psb-bridge">{content.closing}</p>
    </>
  )
}
