type MountainMarkProps = {
  className?: string
}

/** Two-peak ridge used in the v2 header and, later, the footer. */
export function MountainMark({ className }: MountainMarkProps) {
  return (
    <svg className={className} viewBox="0 0 48 28" fill="none" aria-hidden="true">
      <path
        d="M2 25.5 14.5 12.2 27 25.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M16.5 25.5 31 3.2 45.5 25.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}
