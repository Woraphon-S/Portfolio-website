import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { useInView } from '../hooks/useInView'
import { useSound } from '../hooks/useSound'
import { ui } from '../data/i18n'
import { profile } from '../data/profile'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  const { t } = useApp()
  const sound = useSound()
  const { ref, inView } = useInView<HTMLDivElement>()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      sound.select()
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard unavailable */
    }
  }

  const socials = profile.socials.filter((s) => s.url)
  const phoneDisplay = profile.phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeading
          index="05"
          title={t(ui.sections.contact) as string}
          sub={t(ui.sections.contact_sub) as string}
        />

        <div ref={ref} className={`contact__card reveal ${inView ? 'in' : ''}`}>
          <p className="muted">
            <span className="prompt-sym">:~$</span> ./say-hello.sh
          </p>

          <div className="contact__email">
            <Icon name="mail" className="contact__email-ico" />
            <a className="contact__email-text" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>

          <div className="contact__details">
            <a
              className="contact__detail"
              href={`tel:${profile.phone}`}
              onMouseEnter={sound.hover}
            >
              <Icon name="phone" className="" />
              <span>{phoneDisplay}</span>
            </a>
            <span className="contact__detail">
              <Icon name="chat" className="" />
              <span>LINE: {profile.lineId}</span>
            </span>
          </div>

          <div className="contact__actions">
            <a
              className="btn"
              href={`mailto:${profile.email}`}
              onMouseEnter={sound.hover}
            >
              <Icon name="mail" className="" /> {t(ui.contact.emailMe)}
            </a>
            <button className="btn btn--ghost" onClick={copy} onMouseEnter={sound.hover}>
              <Icon name={copied ? 'check' : 'copy'} className="" />
              {copied ? t(ui.contact.copied) : t(ui.contact.copy)}
            </button>
          </div>

          <div className="contact__socials">
            {socials.map((s) => (
              <a
                className="social"
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={sound.hover}
              >
                <Icon name={s.icon} className="" />
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
