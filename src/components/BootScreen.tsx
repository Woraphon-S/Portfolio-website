import { useEffect, useState } from 'react'
import { useApp } from '../context/AppContext'
import { ui } from '../data/i18n'

interface BootScreenProps {
  onDone: () => void
}

export function BootScreen({ onDone }: BootScreenProps) {
  const { t } = useApp()
  const lines = t(ui.boot.lines) as string[]

  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [done, setDone] = useState<string[]>([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (ready) return
    if (lineIdx >= lines.length) {
      setReady(true)
      return
    }
    const line = lines[lineIdx]
    if (charIdx < line.length) {
      const id = setTimeout(() => setCharIdx((c) => c + 1), 12 + Math.random() * 26)
      return () => clearTimeout(id)
    }
    const id = setTimeout(() => {
      setDone((d) => [...d, line])
      setLineIdx((i) => i + 1)
      setCharIdx(0)
    }, 150)
    return () => clearTimeout(id)
  }, [lineIdx, charIdx, lines, ready])

  useEffect(() => {
    const handler = () => {
      if (ready) {
        onDone()
      } else {
        setDone(lines)
        setLineIdx(lines.length)
        setReady(true)
      }
    }
    window.addEventListener('keydown', handler)
    window.addEventListener('click', handler)
    return () => {
      window.removeEventListener('keydown', handler)
      window.removeEventListener('click', handler)
    }
  }, [ready, lines, onDone])

  const partial = lineIdx < lines.length ? lines[lineIdx].slice(0, charIdx) : ''
  const progress = ready ? 100 : Math.round((done.length / lines.length) * 100)

  return (
    <div className="boot">
      <div className="boot__win term-win">
        <div className="term-bar">
          <span className="term-dot r" />
          <span className="term-dot y" />
          <span className="term-dot g" />
          <span className="term-title">
            <span className="accent">root@woraphon</span>:~/boot — initializing
          </span>
        </div>
        <div className="term-body boot__screen">
          {done.map((line, i) => (
            <div className="boot__line" key={i}>
              <span className="ok">[ OK ]</span>
              <span>{line}</span>
            </div>
          ))}
          {!ready && (
            <div className="boot__line">
              <span className="tag">[ .. ]</span>
              <span>
                {partial}
                <span className="cursor slim" />
              </span>
            </div>
          )}

          <div className="boot__bar" aria-hidden="true">
            <i style={{ width: `${progress}%` }} />
          </div>

          {ready && (
            <div className="boot__enter">
              <div className="muted" style={{ marginBottom: '0.8rem', fontSize: '0.82rem' }}>
                {t(ui.boot.ready)}
              </div>
              <button className="btn" onClick={onDone}>
                {t(ui.boot.enter)}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
