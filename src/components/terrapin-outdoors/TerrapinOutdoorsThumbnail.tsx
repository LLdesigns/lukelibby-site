const TERRAPIN_LOGO = '/images/terrapin-outdoors/logo.png'

export function TerrapinOutdoorsThumbnail() {
  return (
    <div
      className="terrapin-card-thumb"
      role="img"
      aria-label="Terrapin Outdoors logo"
    >
      <img src={TERRAPIN_LOGO} alt="" className="terrapin-card-thumb__logo" />
    </div>
  )
}
