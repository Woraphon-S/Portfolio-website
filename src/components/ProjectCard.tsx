import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useApp } from '../context/AppContext'
import { useInView } from '../hooks/useInView'
import { useSound } from '../hooks/useSound'
import { ui } from '../data/i18n'
import type { Project } from '../data/projects'
import { Icon } from './Icon'
import { Gallery } from './Gallery'

const LANG_COLOR: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  CSS: '#563d7c',
  HTML: '#e34c26',
  Dockerfile: '#384d54',
  PLpgSQL: '#336790',
  'C++': '#f34b7d',
  SQL: '#e38c00',
}
const langColor = (name: string) => LANG_COLOR[name] ?? 'var(--accent)'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useApp()
  const sound = useSound()
  const { ref, inView } = useInView<HTMLDivElement>()

  const [valid, setValid] = useState<string[]>(project.images)
  const [shot, setShot] = useState(0)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [hover, setHover] = useState(false)

  const hasShots = valid.length > 0

  useEffect(() => {
    if (!hasShots || valid.length < 2 || galleryOpen || hover || !inView) return
    const id = setInterval(() => setShot((s) => (s + 1) % valid.length), 3200)
    return () => clearInterval(id)
  }, [hasShots, valid.length, galleryOpen, hover, inView])

  const onImgError = (src: string) =>
    setValid((list) => {
      const nextList = list.filter((s) => s !== src)
      setShot((s) => (nextList.length ? s % nextList.length : 0))
      return nextList
    })

  const features = (t(project.features) as string[]).slice(0, 4)
  const stack = project.tech.slice(0, 9)
  const extra = project.tech.length - stack.length

  return (
    <article
      ref={ref}
      className={`pcard reveal ${inView ? 'in' : ''}`}
      style={{ ['--pa' as string]: project.accent }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="pcard__media">
        {hasShots ? (
          <>
            <img
              key={valid[shot]}
              className="pcard__shot"
              src={valid[shot]}
              alt={`${project.title} screenshot`}
              loading="lazy"
              onError={() => onImgError(valid[shot])}
              onClick={() => {
                sound.select()
                setGalleryOpen(true)
              }}
            />
            <button
              className="pcard__shotbadge"
              onClick={() => {
                sound.select()
                setGalleryOpen(true)
              }}
            >
              ⛶ {t(ui.card.gallery)} ({valid.length})
            </button>
          </>
        ) : (
          <div className="pcard__art">
            <div className="glyph">{project.glyph}</div>
            <pre className="ascii">{`┌───────────────┐
│  ${project.title.padEnd(11).slice(0, 11)}  │
│  > _           │
└───────────────┘`}</pre>
          </div>
        )}
      </div>

      <div className="pcard__body">
        <div className="pcard__cat">{t(project.category)}</div>
        <h3 className="pcard__title">
          {project.title}
        </h3>
        <div className="pcard__year">
          {project.name} · {project.year}
        </div>
        <p className="pcard__tagline">{t(project.tagline)}</p>

        <div className="pcard__sublabel">{t(ui.card.features)}</div>
        <ul className="pcard__features">
          {features.map((f, idx) => (
            <li key={idx}>{f}</li>
          ))}
        </ul>

        <div className="pcard__sublabel">{t(ui.card.stack)}</div>
        <div className="pcard__stack">
          {stack.map((tch) => (
            <span className="chip" key={tch}>
              {tch}
            </span>
          ))}
          {extra > 0 && <span className="chip">+{extra}</span>}
        </div>

        <div className="pcard__langs">
          <div className="langbar">
            {project.languages.map((l) => (
              <i
                key={l.name}
                style={{ width: `${l.percent}%`, background: langColor(l.name) }}
                title={`${l.name} ${l.percent}%`}
              />
            ))}
          </div>
          <div className="langlegend">
            {project.languages.slice(0, 4).map((l) => (
              <span key={l.name}>
                <span className="dot" style={{ background: langColor(l.name) }} />
                {l.name} {l.percent}%
              </span>
            ))}
          </div>
        </div>

        <div className="pcard__actions">
          {project.repoUrl ? (
            <a
              className="btn"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={sound.hover}
            >
              <Icon name="github" className="" /> {t(ui.card.code)}
            </a>
          ) : (
            <button className="btn" disabled>
              <Icon name="github" className="" /> {t(ui.card.noCode)}
            </button>
          )}
          {project.liveUrl ? (
            <a
              className="btn btn--ghost"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={sound.hover}
            >
              <Icon name="external" className="" /> {t(ui.card.live)}
            </a>
          ) : (
            <button className="btn btn--ghost" disabled>
              <Icon name="external" className="" /> {t(ui.card.noLive)}
            </button>
          )}
          {hasShots && (
            <button
              className="btn btn--ghost"
              onClick={() => {
                sound.select()
                setGalleryOpen(true)
              }}
              onMouseEnter={sound.hover}
            >
              <Icon name="code" className="" /> {t(ui.card.gallery)}
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {galleryOpen && (
          <Gallery
            images={valid}
            title={project.title}
            initialIndex={shot}
            onClose={() => setGalleryOpen(false)}
          />
        )}
      </AnimatePresence>
    </article>
  )
}
