import { useEffect, useRef } from 'react'
import { useApp } from '../context/AppContext'

/**
 * Classic "Matrix" digital-rain rendered on a full-screen canvas.
 * Tinted with the active theme accent. Pauses when the tab is hidden and
 * respects prefers-reduced-motion.
 */
export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useApp()
  const accentRef = useRef(theme.accent)
  accentRef.current = theme.accent

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const glyphs = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃ01010110ABCDEF{}[]<>/$#*+=;:'.split('')
    const fontSize = 16
    let columns = 0
    let drops: number[] = []
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(window.innerWidth * dpr)
      canvas.height = Math.floor(window.innerHeight * dpr)
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      columns = Math.floor(window.innerWidth / fontSize)
      drops = Array.from({ length: columns }, () => Math.floor((Math.random() * window.innerHeight) / fontSize))
    }
    resize()

    let raf = 0
    let last = 0
    const interval = 55 // ms between frames — slow, ambient

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw)
      if (now - last < interval) return
      last = now

      ctx.fillStyle = 'rgba(4, 7, 5, 0.09)'
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = glyphs[Math.floor(Math.random() * glyphs.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        // bright leading glyph, dim trail
        ctx.fillStyle = Math.random() > 0.975 ? '#ffffff' : accentRef.current
        ctx.fillText(char, x, y)

        if (y > window.innerHeight && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
    }
    raf = requestAnimationFrame(draw)

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf)
      } else {
        last = 0
        raf = requestAnimationFrame(draw)
      }
    }

    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} className="matrix-canvas" aria-hidden="true" />
}
