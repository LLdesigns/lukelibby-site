type TagProps = {
  children: React.ReactNode
  variant?: 'paper' | 'dark'
}

export function Tag({ children, variant = 'paper' }: TagProps) {
  const className =
    variant === 'dark' ? 'tag tag--dark' : 'tag'
  return <span className={className}>{children}</span>
}
