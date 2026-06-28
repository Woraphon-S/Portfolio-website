import { useApp } from '../context/AppContext'
import { ui } from '../data/i18n'
import { profile } from '../data/profile'

export function Footer() {
  const { t } = useApp()
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <span className="prompt-sym">:~$</span> echo "{t(ui.footer.built)}"
          <span className="blink"> ▊</span>
        </div>
        <div style={{ marginTop: '0.5rem' }}>
          © {profile.name.en} ·{' '}
          <a href={profile.githubUrl} target="_blank" rel="noreferrer">
            {t(ui.footer.source)}
          </a>
        </div>
      </div>
    </footer>
  )
}
