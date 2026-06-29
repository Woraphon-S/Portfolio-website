import { useInView } from '../hooks/useInView'
import { profile } from '../data/profile'
import { SectionHeading } from './SectionHeading'

const TYPE_LABEL: Record<string, string> = {
  internship: '// internship',
  'part-time': '// part-time',
  'full-time': '// full-time',
}

export function Experience() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading index="02" title="Experience" />
        <div ref={ref} className={`exp__list reveal ${inView ? 'in' : ''}`}>
          {profile.experience.map((entry, i) => (
            <div className="exp__item" key={i}>
              <div className="exp__timeline">
                <div className="exp__dot" />
                {i < profile.experience.length - 1 && <div className="exp__connector" />}
              </div>
              <div className="term-win exp__card">
                <div className="term-bar">
                  <span className="term-dot r" />
                  <span className="term-dot y" />
                  <span className="term-dot g" />
                  <span className="term-title">
                    <span className="accent">{entry.company}</span> — {entry.role}
                  </span>
                  <span className="exp__type-badge">{TYPE_LABEL[entry.type]}</span>
                </div>
                <div className="term-body exp__body">
                  <div className="exp__content">
                    <div className="exp__period">{entry.period}</div>
                    <p className="exp__desc">{entry.description}</p>
                    <div className="exp__tech">
                      {entry.tech.map((tech) => (
                        <span className="chip" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {entry.image && (
                    <div className="exp__photo">
                      <img src={entry.image} alt={entry.company} loading="lazy" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
