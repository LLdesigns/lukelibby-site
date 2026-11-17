import type { HoneycombArt } from '../../data/v2/honeycomb'
import { withBasePath } from '../../utils/basePath'

/** Stand-in artwork for featured tiles that do not have a photograph yet. */
export function HoneycombArt({ kind }: { kind: HoneycombArt }) {
  if (kind === 'luma') return <LumaArt />
  if (kind === 'video') return <VideoArt />
  if (kind === 'video-web') return <VideoArt web />
  if (kind === 'slides') return <SlidesArt />
  if (kind === 'plottr') return <PlottrArt />
  if (kind === 'lab') return <LabArt />
  return <PlayArt />
}

function LumaArt() {
  return (
    <div className="v2-honeycomb__art v2-honeycomb__art--luma" aria-hidden="true">
      <img src={withBasePath('/images/v2/luma/graph-connections.jpg')} alt="" />
    </div>
  )
}

function VideoArt({ web = false }: { web?: boolean }) {
  return (
    <div
      className={`v2-honeycomb__art v2-honeycomb__art--video${web ? ' v2-honeycomb__art--web' : ''}`}
      aria-hidden="true"
    >
      {web ? <span className="v2-honeycomb__chrome" /> : null}
      <span className="v2-honeycomb__monitor">
        <img src={withBasePath('/images/v2/videokit/review-layout.png')} alt="" />
      </span>
      <svg className="v2-honeycomb__wave" viewBox="0 0 120 28" preserveAspectRatio="none" aria-hidden="true">
        {[8, 16, 11, 22, 14, 26, 18, 12, 24, 15, 20, 9, 17, 23, 13, 19].map((height, index) => (
          <rect
            key={height + index}
            x={index * 7.4}
            y={28 - height}
            width="3.2"
            height={height}
            fill={index % 4 === 0 ? '#e0a15c' : index % 3 === 0 ? '#7d6ad4' : '#3ec6b8'}
          />
        ))}
      </svg>
    </div>
  )
}

function SlidesArt() {
  return (
    <div className="v2-honeycomb__art v2-honeycomb__art--slides" aria-hidden="true">
      <span className="v2-honeycomb__card v2-honeycomb__card--back">
        <img src={withBasePath('/images/v2/slidekit/assets-library.jpg')} alt="" />
      </span>
      <span className="v2-honeycomb__card v2-honeycomb__card--front">
        <img src={withBasePath('/images/v2/slidekit/tools-title-case.jpg')} alt="" />
      </span>
    </div>
  )
}

function LabArt() {
  return (
    <div className="v2-honeycomb__art v2-honeycomb__art--lab" aria-hidden="true">
      <img src={withBasePath('/images/case-studies/hands-on-ai-flow/structured_lab_pipeline.png')} alt="" />
    </div>
  )
}

function PlottrArt() {
  return (
    <div className="v2-honeycomb__art v2-honeycomb__art--plottr" aria-hidden="true">
      <span className="v2-honeycomb__card v2-honeycomb__card--back">
        <img src={withBasePath('/images/v2/plottr/new-project.png')} alt="" />
      </span>
      <span className="v2-honeycomb__card v2-honeycomb__card--front">
        <img src={withBasePath('/images/v2/plottr/ai-copilot.png')} alt="" />
      </span>
    </div>
  )
}

function PlayArt() {
  return (
    <div className="v2-honeycomb__art v2-honeycomb__art--play" aria-hidden="true">
      <img src={withBasePath('/images/playitpro/lesson-builder.png')} alt="" />
    </div>
  )
}
