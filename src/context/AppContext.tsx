import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Lang } from '../data/i18n'

export interface ThemeScheme {
  id: string
  name: string
  accent: string
  accentDim: string
  glow: string
}

export const themes: ThemeScheme[] = [
  { id: 'matrix', name: 'matrix', accent: '#00ff9c', accentDim: '#0b3d2e', glow: 'rgba(0,255,156,0.35)' },
  { id: 'amber', name: 'amber', accent: '#ffb454', accentDim: '#3d2a0b', glow: 'rgba(255,180,84,0.35)' },
  { id: 'cyan', name: 'cyan', accent: '#22d3ee', accentDim: '#0b2f3d', glow: 'rgba(34,211,238,0.35)' },
  { id: 'magenta', name: 'synth', accent: '#ff5edb', accentDim: '#3d0b33', glow: 'rgba(255,94,219,0.35)' },
]

type Bilingual = { en: string; th: string } | { en: string[]; th: string[] }

interface AppContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  toggleLang: () => void
  theme: ThemeScheme
  themeIndex: number
  cycleTheme: () => void
  soundOn: boolean
  toggleSound: () => void
  t: <T extends Bilingual>(obj: T) => T extends { en: string[] } ? string[] : string
}

const AppContext = createContext<AppContextValue | null>(null)

const STORAGE = {
  lang: 'pf:lang',
  theme: 'pf:theme',
  sound: 'pf:sound',
}

function readStored<T>(key: string, fallback: T, parse: (s: string) => T): T {
  try {
    const v = localStorage.getItem(key)
    return v === null ? fallback : parse(v)
  } catch {
    return fallback
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() =>
    readStored<Lang>(STORAGE.lang, 'en', (v) => (v === 'th' ? 'th' : 'en')),
  )
  const [themeIndex, setThemeIndex] = useState<number>(() =>
    readStored<number>(STORAGE.theme, 0, (v) => {
      const n = Number(v)
      return Number.isFinite(n) && n >= 0 && n < themes.length ? n : 0
    }),
  )
  const [soundOn, setSoundOn] = useState<boolean>(() =>
    readStored<boolean>(STORAGE.sound, false, (v) => v === 'true'),
  )

  const theme = themes[themeIndex]

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--accent', theme.accent)
    root.style.setProperty('--accent-dim', theme.accentDim)
    root.style.setProperty('--glow', theme.glow)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem(STORAGE.lang, l)
    } catch {
      /* ignore */
    }
  }, [])

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next: Lang = prev === 'en' ? 'th' : 'en'
      try {
        localStorage.setItem(STORAGE.lang, next)
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])

  const cycleTheme = useCallback(() => {
    setThemeIndex((prev) => {
      const next = (prev + 1) % themes.length
      try {
        localStorage.setItem(STORAGE.theme, String(next))
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])

  const toggleSound = useCallback(() => {
    setSoundOn((prev) => {
      const next = !prev
      try {
        localStorage.setItem(STORAGE.sound, String(next))
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])

  const t = useCallback(
    (obj: Bilingual) => (obj as Record<Lang, string | string[]>)[lang],
    [lang],
  ) as AppContextValue['t']

  const value = useMemo<AppContextValue>(
    () => ({ lang, setLang, toggleLang, theme, themeIndex, cycleTheme, soundOn, toggleSound, t }),
    [lang, setLang, toggleLang, theme, themeIndex, cycleTheme, soundOn, toggleSound, t],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
