import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CRT } from './components/CRT'
import { MatrixRain } from './components/MatrixRain'
import { BootScreen } from './components/BootScreen'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

const BOOT_KEY = 'pf:booted'

function alreadyBooted() {
  try {
    return sessionStorage.getItem(BOOT_KEY) === '1'
  } catch {
    return false
  }
}

export default function App() {
  const [booting, setBooting] = useState(() => !alreadyBooted())

  const finish = () => {
    try {
      sessionStorage.setItem(BOOT_KEY, '1')
    } catch {
      /* ignore */
    }
    setBooting(false)
  }

  return (
    <>
      <CRT />
      <MatrixRain />

      <AnimatePresence>
        {booting && (
          <motion.div key="boot" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <BootScreen onDone={finish} />
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
