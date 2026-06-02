import { useEffect, useState, type CSSProperties } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - doc.clientHeight
      const value = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0
      setProgress(value)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="scroll-progress"
      role="presentation"
      aria-hidden="true"
      style={{ '--scroll-progress': `${progress}%` } as CSSProperties}
    />
  )
}
