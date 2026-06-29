import { useApp } from '../context/AppContext'
import { useInView } from '../hooks/useInView'
import { ui } from '../data/i18n'
import { profile } from '../data/profile'
import type { SkillItem } from '../data/profile'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'

/** Theme-tinted brand icon (simple-icons CDN via CSS mask) or a local fallback. */
function TechIcon({ item }: { item: SkillItem }) {
  if (item.slug) {
    const url = `url(https://cdn.simpleicons.org/${item.slug})`
    return (
      <span
        className="techicon"
        style={{ WebkitMaskImage: url, maskImage: url }}
        aria-hidden="true"
      />
    )
  }
  if (item.localIcon) return <Icon name={item.localIcon} className="techicon-svg" />
  return null
}

export function Skills() {
  const { t } = useApp()
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading index="04" title={t(ui.sections.skills) as string} />
        <div ref={ref} className={`skills__grid reveal ${inView ? 'in' : ''}`}>
          {profile.skills.map((group) => (
            <div className="skillgroup" key={group.label.en}>
              <div className="skillgroup__title">{t(group.label)}</div>
              <div className="skillgroup__items">
                {group.items.map((s) => (
                  <span className="chip skillchip" key={s.name}>
                    <TechIcon item={s} />
                    {s.name}
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
