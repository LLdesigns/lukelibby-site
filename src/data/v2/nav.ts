export type V2NavLink = {
  label: string
  href: string
  kind?: 'button'
}

export const v2NavLinks: V2NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'Resume', href: '#resume' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact', kind: 'button' },
]
