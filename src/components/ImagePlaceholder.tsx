type ImagePlaceholderProps = {
  label: string
}

export function ImagePlaceholder({ label }: ImagePlaceholderProps) {
  return (
    <div className="image-placeholder" role="img" aria-label={label}>
      {/* TODO: Replace with project image */}
      {label}
    </div>
  )
}
