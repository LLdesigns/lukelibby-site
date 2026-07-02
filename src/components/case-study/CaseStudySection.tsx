import type { ReactNode } from 'react'

import { ThemeBlock } from '../ThemeBlock'



type CaseStudySectionProps = {

  title: string

  children: ReactNode

  variant?: 'dark' | 'prose'

}



export function CaseStudySection({

  title,

  children,

  variant = 'dark',

}: CaseStudySectionProps) {

  return (

    <section className={`cs-block cs-block--${variant}`}>

      <ThemeBlock>

        <h2 className="cs-section-title">{title}</h2>

        {children}

      </ThemeBlock>

    </section>

  )

}


