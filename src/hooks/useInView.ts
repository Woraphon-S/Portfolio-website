import { useEffect, useRef, useState } from 'react'

interface Options {
  /** stop observing after the first reveal */
  once?: boolean
  threshold?: number
  rootMargin?: string
}

/**
 * Returns a ref + whether the element has entered the viewport.
 * Used to drive scroll-reveal animations.
 */
export function useInView<T extends Element = HTMLDivElement>(options: Options = {}) {
  const { once = true, threshold = 0.18, rootMargin = '0px 0px -10% 0px' } = options
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, threshold, rootMargin])

  return { ref, inView }
}
