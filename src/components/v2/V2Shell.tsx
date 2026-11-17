import type { ReactNode } from 'react'
import { DocumentHead } from '../DocumentHead'
import { ScrollToHash } from '../ScrollToHash'
import { ScrollToTopButton } from '../ScrollToTopButton'
import { SubtleMotion } from '../SubtleMotion'
import { Atmosphere } from './Atmosphere'
import { V2Header } from './V2Header'
import '../../styles/v2.css'

type V2ShellProps = {
  title: string
  description: string
  pathname?: string
  children: ReactNode
}

/** Page frame for the v2 site. Owns the document head and the page canvas. */
export function V2Shell({ title, description, pathname, children }: V2ShellProps) {
  return (
    <div className="v2" data-motion>
      <DocumentHead title={title} description={description} pathname={pathname} />
      <ScrollToHash />
      <SubtleMotion root=".v2" />
      <Atmosphere />
      <V2Header />
      <main className="v2__main">{children}</main>
      <ScrollToTopButton />
    </div>
  )
}
