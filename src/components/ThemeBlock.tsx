import type { ElementType, ReactNode } from 'react'

type ThemeBlockProps = {
  children: ReactNode
  className?: string
  as?: ElementType
} & Record<string, unknown>

/** Content-only wrapper for sequential theme transitions (not section backgrounds). */
export function ThemeBlock({
  children,
  className = '',
  as: Tag = 'div',
  ...rest
}: ThemeBlockProps) {
  return (
    <Tag
      className={`theme-block${className ? ` ${className}` : ''}`}
      data-theme-block
      {...rest}
    >
      {children}
    </Tag>
  )
}
