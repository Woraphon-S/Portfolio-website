import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'
import { useSound } from '../hooks/useSound'
import { useTypewriter } from '../hooks/useTypewriter'
import { ui } from '../data/i18n'
import { profile } from '../data/profile'
import { GlitchText } from './GlitchText'
import { Icon } from './Icon'
import { InteractiveTerminal } from './InteractiveTerminal'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export function Hero() {
  const { t } = useApp()
  const sound = useSound()
  const roles = t(profile.roles) as string[]
  const { text: role } = useTypewriter(roles, { holdTime: 1600 })

  const go = (id: string) => {
    sound.select()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="hero section" id="home">
      <div className="container">
        <div className="hero__grid">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p className="hero__pre" variants={item}>
              <span className="prompt-sym">:~$</span> {t(ui.hero.whoami)}
            </motion.p>

            <motion.h1 className="hero__name" variants={item}>
              <GlitchText text={t(profile.name) as string} as="span" />
            </motion.h1>

            <motion.div className="hero__role" variants={item}>
              &gt; {role}
              <span className="cursor" />
            </motion.div>

            <motion.p className="hero__desc" variants={item}>
              {t(profile.bio)}
            </motion.p>

            <motion.div className="hero__cta" variants={item}>
              <button className="btn" onClick={() => go('projects')} onMouseEnter={sound.hover}>
                <Icon name="code" className="" /> {t(ui.hero.cta_projects)}
              </button>
              <button
                className="btn btn--ghost"
                onClick={() => go('contact')}
                onMouseEnter={sound.hover}
              >
                <Icon name="mail" className="" /> {t(ui.hero.cta_contact)}
              </button>
            </motion.div>

            <motion.div className="hero__stats" variants={item}>
              <div className="hero__stat">
                <b>{profile.stats.featured}</b>
                <span>featured builds</span>
              </div>
              <div className="hero__stat">
                <b>{profile.stats.contributionsLastYear}</b>
                <span>contributions / yr</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
          >
            <InteractiveTerminal />
          </motion.div>
        </div>
      </div>

      <button className="hero__scroll" onClick={() => go('about')} aria-label="scroll down">
        {t(ui.hero.scroll)}
        <i />
      </button>
    </header>
  )
}
