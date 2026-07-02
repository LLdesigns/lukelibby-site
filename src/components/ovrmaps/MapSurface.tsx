const MAP_LOGO = '/images/ovrmaps/terrapin-outdoors-logo.png'

export function MapSurface() {
  return (
    <svg
      className="ovr-map-surface"
      viewBox="0 0 800 520"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <image
        href={MAP_LOGO}
        width="800"
        height="520"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  )
}
