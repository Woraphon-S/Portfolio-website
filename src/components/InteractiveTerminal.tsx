import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useApp } from '../context/AppContext'
import { useSound } from '../hooks/useSound'
import { projects } from '../data/projects'
import { profile } from '../data/profile'

interface Line {
  kind: 'in' | 'out' | 'err'
  content: ReactNode
}

const SUGGESTIONS = ['help', 'projects', 'about', 'skills', 'neofetch', 'contact', 'clear']

export function InteractiveTerminal() {
  const { t, cycleTheme } = useApp()
  const sound = useSound()
  const inputRef = useRef<HTMLInputElement>(null)
  const outRef = useRef<HTMLDivElement>(null)

  const welcome = (): Line[] => [
    { kind: 'out', content: <span className="accent">woraphon.sh — interactive shell v1.0</span> },
    { kind: 'out', content: "type 'help' to see what i can do. try 'projects' or 'neofetch'." },
  ]

  const [history, setHistory] = useState<Line[]>(welcome)
  const [input, setInput] = useState('')
  const [past, setPast] = useState<string[]>([])
  const [pos, setPos] = useState(-1)


  useEffect(() => {
    outRef.current?.scrollTo({ top: outRef.current.scrollHeight, behavior: 'smooth' })
  }, [history])

  const print = (...lines: Line[]) => setHistory((h) => [...h, ...lines])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const run = (raw: string) => {
    const cmd = raw.trim()
    if (!cmd) return
    setPast((p) => [...p, cmd])
    setPos(-1)
    print({ kind: 'in', content: cmd })

    const [name, ...args] = cmd.toLowerCase().split(/\s+/)

    switch (name) {
      case 'help':
        print({
          kind: 'out',
          content: (
            <>
              <div>available commands:</div>
              <div className="muted">
                help · about · whoami · projects · open &lt;name&gt; · skills · contact
                · social · neofetch · theme · lang · clear · sudo · echo
              </div>
            </>
          ),
        })
        break

      case 'about':
        print({ kind: 'out', content: t(profile.bio) as string })
        break

      case 'whoami':
        print({
          kind: 'out',
          content: `${t(profile.name)} — ${t(profile.role)} @ ${t(profile.location)}`,
        })
        break

      case 'ls':
      case 'projects':
        print(
          { kind: 'out', content: `${projects.length} featured builds:` },
          ...projects.map((p) => ({
            kind: 'out' as const,
            content: (
              <span>
                <span className="accent">./{p.command}</span>{' '}
                <span className="muted">— {p.title}</span>
              </span>
            ),
          })),
          { kind: 'out', content: <span className="muted">→ run `open &lt;name&gt;` or scroll to #projects</span> },
        )
        scrollTo('projects')
        break

      case 'open':
      case 'cat': {
        const target = projects.find((p) => p.command === args[0] || p.id === args[0])
        if (!target) {
          print({ kind: 'err', content: `${name}: '${args[0] ?? ''}' not found. try 'projects'.` })
          break
        }
        print(
          { kind: 'out', content: <span className="accent">{target.title}</span> },
          { kind: 'out', content: t(target.tagline) as string },
          {
            kind: 'out',
            content: (
              <a href={target.repoUrl} target="_blank" rel="noreferrer">
                {target.repoUrl}
              </a>
            ),
          },
        )
        scrollTo('projects')
        break
      }

      case 'skills':
      case 'stack':
        print(
          ...profile.skills.map((g) => ({
            kind: 'out' as const,
            content: (
              <span>
                <span className="accent">{t(g.label)}:</span>{' '}
                <span className="muted">{g.items.map((i) => i.name).join(', ')}</span>
              </span>
            ),
          })),
        )
        scrollTo('skills')
        break

      case 'contact':
        print(
          { kind: 'out', content: <a href={`mailto:${profile.email}`}>{profile.email}</a> },
          { kind: 'out', content: <span className="muted">opening #contact ...</span> },
        )
        scrollTo('contact')
        break

      case 'social':
        print(
          ...profile.socials
            .filter((s) => s.url)
            .map((s) => ({
              kind: 'out' as const,
              content: (
                <a href={s.url} target="_blank" rel="noreferrer">
                  {s.label} → {s.url}
                </a>
              ),
            })),
        )
        break

      case 'neofetch':
        print({ kind: 'out', content: <NeoFetch /> })
        break

      case 'theme':
        cycleTheme()
        print({ kind: 'out', content: 'theme cycled.' })
        break

      case 'lang':
        print({ kind: 'out', content: 'language switching is disabled — english only.' })
        break

      case 'echo':
        print({ kind: 'out', content: args.length ? cmd.slice(5) : '' })
        break

      case 'sudo':
        print({ kind: 'err', content: "nice try 😏 — you're not root here." })
        break

      case 'clear':
        setHistory([])
        break

      case 'exit':
        print({ kind: 'out', content: "there's no escape. enjoy the portfolio 🙂" })
        break

      default:
        print({ kind: 'err', content: `command not found: ${name}. type 'help'.` })
    }
  }

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sound.select()
      run(input)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (!past.length) return
      const next = pos < 0 ? past.length - 1 : Math.max(0, pos - 1)
      setPos(next)
      setInput(past[next])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (pos < 0) return
      const next = pos + 1
      if (next >= past.length) {
        setPos(-1)
        setInput('')
      } else {
        setPos(next)
        setInput(past[next])
      }
    } else {
      sound.key()
    }
  }

  return (
    <div className="term-win" onClick={() => inputRef.current?.focus()}>
      <div className="term-bar">
        <span className="term-dot r" />
        <span className="term-dot y" />
        <span className="term-dot g" />
        <span className="term-title">
          <span className="accent">visitor@woraphon</span>: ~/portfolio — zsh
        </span>
      </div>
      <div className="term-body shell__screen">
        <div className="shell__output" ref={outRef}>
          {history.map((line, i) => (
            <div className={`shell__line ${line.kind === 'in' ? 'cmd' : ''} ${line.kind === 'err' ? 'muted' : ''}`} key={i}>
              {line.kind === 'in' ? (
                <>
                  <span className="prompt-sym">:~$</span> {line.content}
                </>
              ) : (
                line.content
              )}
            </div>
          ))}
        </div>

        <div className="shell__row">
          <span className="prompt-sym">:~$</span>
          <input
            ref={inputRef}
            className="shell__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            spellCheck={false}
            autoComplete="off"
            aria-label="terminal input"
            placeholder="type a command…"
          />
        </div>

        <div className="shell__chipset">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              className="chip"
              onClick={() => {
                sound.select()
                run(s)
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function NeoFetch() {
  const ascii = ` _    _  ___  ____
| |  | |/ _ \\|  _ \\
| |/\\| | | | | |_) |
\\  /\\  / |_| |  _ <
 \\/  \\/ \\___/|_| \\_\\`
  const info: [string, string][] = [
    ['user', 'Woraphon-S'],
    ['os', 'PortfolioOS x86_64'],
    ['role', 'Full-Stack Developer'],
    ['stack', 'TypeScript · React · Node'],
    ['shell', 'woraphon.sh'],
  ]
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <pre className="accent" style={{ fontSize: '0.62rem', lineHeight: 1.15, margin: 0 }}>
        {ascii}
      </pre>
      <div>
        {info.map(([k, v]) => (
          <div key={k}>
            <span className="accent">{k}</span>
            <span className="muted"> ~ </span>
            <span>{v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
