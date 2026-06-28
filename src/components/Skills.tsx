import { useApp } from '../context/AppContext'
import { useInView } from '../hooks/useInView'
import { ui } from '../data/i18n'
import { profile } from '../data/profile'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  const { t } = useApp()
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading index="03" title={t(ui.sections.skills) as string} />
        <div ref={ref} className={`skills__grid reveal ${inView ? 'in' : ''}`}>
          {profile.skills.map((group) => (
            <div className="skillgroup" key={group.label.en}>
              <div className="skillgroup__title">{t(group.label)}</div>
              <div className="skillgroup__items">
                {group.items.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
