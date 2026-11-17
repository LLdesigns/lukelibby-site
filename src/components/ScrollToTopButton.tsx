import { useEffect, useState } from 'react'

const SHOW_AFTER_PX = 480

/** Floating control that appears after scroll and returns to the top of the page. */
export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function update() {
      setVisible(window.scrollY > SHOW_AFTER_PX)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <button
      type="button"
      className={visible ? 'scroll-top is-visible' : 'scroll-top'}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <span aria-hidden="true">↑</span>
      Top
    </button>
  )
}
