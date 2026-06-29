import { useApp } from '../context/AppContext'
import { ui } from '../data/i18n'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  const { t } = useApp()
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading
          index="03"
          title={t(ui.sections.projects) as string}
          sub={t(ui.sections.projects_sub) as string}
        />
        <div className="projects__list">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
