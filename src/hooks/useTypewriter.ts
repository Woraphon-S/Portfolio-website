import { useEffect, useMemo, useState } from 'react'

interface TypewriterOptions {
  typeSpeed?: number
  deleteSpeed?: number
  /** how long to hold a fully-typed word before deleting (ms) */
  holdTime?: number
  /** loop through the word list forever (with delete animation) */
  loop?: boolean
  /** delay before the very first character (ms) */
  startDelay?: number
}

/**
 * Typewriter that can type a single string once, or cycle a list of strings
 * with a delete-and-retype animation. Returns the visible substring.
 */
export function useTypewriter(words: string | string[], opts: TypewriterOptions = {}) {
  const {
    typeSpeed = 55,
    deleteSpeed = 28,
    holdTime = 1500,
    loop = true,
    startDelay = 0,
  } = opts

  const list = useMemo(() => (Array.isArray(words) ? words : [words]), [words])

  const [started, setStarted] = useState(startDelay === 0)
  const [index, setIndex] = useState(0)
  const [sub, setSub] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const current = list[index % list.length] ?? ''
  const text = current.slice(0, sub)
  const single = list.length === 1
  const done = !loop && single && sub === current.length

  useEffect(() => {
    if (started) return
    const id = setTimeout(() => setStarted(true), startDelay)
    return () => clearTimeout(id)
  }, [started, startDelay])

  useEffect(() => {
    if (!started || done) return

    // finished typing the current word
    if (!deleting && sub === current.length) {
      if (single && !loop) return
      const id = setTimeout(() => setDeleting(true), holdTime)
      return () => clearTimeout(id)
    }

    // finished deleting -> advance to next word
    if (deleting && sub === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % list.length)
      return
    }

    const id = setTimeout(
      () => setSub((s) => s + (deleting ? -1 : 1)),
      deleting ? deleteSpeed : typeSpeed,
    )
    return () => clearTimeout(id)
  }, [started, done, deleting, sub, current, single, loop, list.length, holdTime, typeSpeed, deleteSpeed])

  return { text, done, index }
}
