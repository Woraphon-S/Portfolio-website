import { useEffect, useState } from 'react'
import { useApp } from '../context/AppContext'
import { useSound } from '../hooks/useSound'
import { ui } from '../data/i18n'
import { Icon } from './Icon'

const SECTIONS = ['home', 'about', 'experience', 'projects', 'skills', 'contact'] as const

export function Navbar() {
  const { t, theme, cycleTheme, soundOn, toggleSound } = useApp()
  const sound = useSound()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const go = (id: string) => {
    setOpen(false)
    sound.select()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav__inner">
        <button className="nav__brand" onClick={() => go('home')}>
          <Icon name="terminal" className="" />
          <span>
            woraphon<b>@</b>dev
          </span>
          <span className="cursor slim" />
        </button>

        <ul className={`nav__links ${open ? 'open' : ''}`}>
          {SECTIONS.map((id) => (
            <li key={id}>
              <button
                className={`nav__link ${active === id ? 'active' : ''}`}
                onClick={() => go(id)}
                onMouseEnter={sound.hover}
              >
                {t(ui.nav[id])}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav__meta">
          <button
            className="meta-btn"
            onClick={() => {
              cycleTheme()
              sound.select()
            }}
            title={`theme: ${theme.name}`}
          >
            <span className="swatch" />
            <span className="label">{theme.name}</span>
          </button>
          <button
            className="meta-btn"
            onClick={() => {
              toggleSound()
              sound.select()
            }}
            title={soundOn ? t(ui.meta.soundOn) : t(ui.meta.soundOff)}
          >
            <Icon name={soundOn ? 'soundOn' : 'soundOff'} className="" />
          </button>
          <button
            className="nav__burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="menu"
          >
            <Icon name={open ? 'close' : 'burger'} className="" />
          </button>
        </div>
      </div>
    </nav>
  )
}
