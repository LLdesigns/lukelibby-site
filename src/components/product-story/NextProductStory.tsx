import { Link } from 'react-router-dom'
import {
  getNextProductStorySlug,
  getPreviousProductStorySlug,
  getProductStoryHref,
  productStoriesBySlug,
  type ProductStorySlug,
} from '../../data/productStories'
import { ThemeBlock } from '../ThemeBlock'

type NextProductStoryProps = {
  slug: ProductStorySlug
}

export function NextProductStory({ slug }: NextProductStoryProps) {
  const prevSlug = getPreviousProductStorySlug(slug)
  const nextSlug = getNextProductStorySlug(slug)
  const prevTitle = productStoriesBySlug[prevSlug].title
  const nextTitle = productStoriesBySlug[nextSlug].title

  return (
    <ThemeBlock
      className="cs-next"
      role="navigation"
      aria-label="Product story navigation"
    >
      <div className="cs-next__item">
        <span className="cs-next__label">Previous Story</span>
        <Link className="cs-next__link" to={getProductStoryHref(prevSlug)}>
          {prevTitle}
        </Link>
      </div>
      <div className="cs-next__item">
        <span className="cs-next__label">Next Story</span>
        <Link className="cs-next__link" to={getProductStoryHref(nextSlug)}>
          {nextTitle}
        </Link>
      </div>
    </ThemeBlock>
  )
}
