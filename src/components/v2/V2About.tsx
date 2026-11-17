import { builderNoteTags, builderNotesParagraphs } from '../../data/skills'
import { withBasePath } from '../../utils/basePath'

const aboutPhotoSrc = withBasePath('/images/luke-libby.png')

/** About section for the v2 landing page — same photo and notes as v1. */
export function V2About() {
  return (
    <section className="v2-about" id="about" aria-labelledby="about-title">
      <div className="v2-about__inner">
        <p className="v2-about__eyebrow">About</p>
        <h2 id="about-title">About me</h2>
        <div className="v2-about__layout">
          <figure className="v2-about__portrait">
            <img
              src={aboutPhotoSrc}
              alt="Luke Libby wearing an orange cap and plaid shirt"
              width={352}
              height={440}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="v2-about__body">
            {builderNotesParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="v2-about__tags">{builderNoteTags.join(' · ')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
