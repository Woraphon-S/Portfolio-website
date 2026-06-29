import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { useInView } from '../hooks/useInView'
import { ui } from '../data/i18n'
import { profile } from '../data/profile'
import type { EducationEntry } from '../data/profile'
import { SectionHeading } from './SectionHeading'

const ASCII_AVATAR = `   .--.
  |o_o |
  |:_/ |
 //   \\ \\
(|     | )
/'\\_   _/'\\
\\___)=(___/`

export function About() {
  const { t } = useApp()
  const { ref, inView } = useInView<HTMLDivElement>()
  const [imgOk, setImgOk] = useState(true)

  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading index="01" title={t(ui.sections.about) as string} />

        <div ref={ref} className={`about__grid reveal ${inView ? 'in' : ''}`}>
          <div>
            <div className="about__avatar">
              {imgOk && profile.avatarUrl ? (
                <img
                  src={profile.avatarUrl}
                  alt={t(profile.name) as string}
                  loading="lazy"
                  onError={() => setImgOk(false)}
                />
              ) : (
                <pre
                  className="accent"
                  style={{
                    display: 'grid',
                    placeContent: 'center',
                    height: '100%',
                    fontSize: '1rem',
                    lineHeight: 1.1,
                  }}
                >
                  {ASCII_AVATAR}
                </pre>
              )}
            </div>
            <div className="about__meta">
              <div>
                <b>name</b> {t(profile.name)}
              </div>
              <div>
                <b>role</b> {t(profile.role)}
              </div>
              <div>
                <b>age</b> {profile.age}
              </div>
              <div>
                <b>loc</b> {t(profile.location)}
              </div>
              <div>
                <b>status</b>
                <span className="accent">● available for work</span>
              </div>
            </div>
          </div>

          <div className="term-win">
            <div className="term-bar">
              <span className="term-dot r" />
              <span className="term-dot y" />
              <span className="term-dot g" />
              <span className="term-title">
                <span className="accent">~</span>/about.md — cat
              </span>
            </div>
            <div className="term-body about__body">
              <p>{t(profile.bio)}</p>
              <div className="about__tags">
                {[
                  'TypeScript',
                  'React / Next.js',
                  'React Native',
                  'Node / NestJS',
                  'Bun',
                  'PostgreSQL',
                  'MySQL',
                  'MongoDB',
                  'Docker',
                ].map((tag) => (
                  <span className="chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="term-win edu__block">
          <div className="term-bar">
            <span className="term-dot r" />
            <span className="term-dot y" />
            <span className="term-dot g" />
            <span className="term-title">
              <span className="accent">~</span>/education.md — cat
            </span>
          </div>
          <div className="term-body">
            {profile.education.map((edu: EducationEntry, i: number) => (
              <div className="edu__item" key={i}>
                {edu.logo && (
                  <img
                    className="edu__logo"
                    src={edu.logo}
                    alt={edu.school}
                    loading="lazy"
                  />
                )}
                <div className="edu__info">
                  <div className="edu__school">{edu.school}</div>
                  <div className="edu__degree">{edu.degree}</div>
                  <div className="edu__period">{edu.period}</div>
                  {edu.note && <div className="edu__note">{edu.note}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
