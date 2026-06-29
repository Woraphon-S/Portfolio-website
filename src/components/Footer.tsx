import { useApp } from '../context/AppContext'
import { ui } from '../data/i18n'
import { profile } from '../data/profile'

export function Footer() {
  const { t } = useApp()
  return (
    <footer className="footer">
      <div className="container">
        <div>
          © {profile.name.en} ·{' '}
          <a href={profile.repoUrl} target="_blank" rel="noreferrer">
            {t(ui.footer.source)}
          </a>
        </div>
      </div>
    </footer>
  )
}
