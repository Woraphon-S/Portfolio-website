# CLAUDE.md

Guidance for Claude Code (and other AI agents) working in this repo.
For human-facing run/setup instructions, see [README.md](README.md).

## What this is

A **terminal / developer-themed personal portfolio** for Woraphon S. (GitHub: `Woraphon-S`).
Single-page, **frontend-only** — no backend, no database, no API calls at runtime.
All content is static and lives in `src/data/`. Fully bilingual **EN / TH**.

Stack: **React 18 + Vite 5 + TypeScript (strict) + Framer Motion**, plain CSS (no UI kit / no Tailwind).

## Commands

```bash
npm install            # install deps (first time / new machine)
npm run dev            # dev server, hot-reload → http://localhost:5173
npm run build          # tsc (strict type-check) + vite build → dist/
npm run preview        # serve the production build → http://localhost:4173
```

⚠️ **Always run `npm run build` before committing.** The build runs `tsc` with `strict`,
`noUnusedLocals`, and `noUnusedParameters` — type errors and unused vars fail the build.
There is no test suite.

## Architecture

```
src/
├── main.tsx              # entry; wraps <App/> in <AppProvider/>, imports global.css + theme.css
├── App.tsx               # page composition + boot-screen overlay (AnimatePresence)
├── context/AppContext.tsx# global state: language (en/th), color theme, sound on/off.
│                         #   exposes t() helper + useApp(). Persists to localStorage.
│                         #   Pushes theme onto CSS vars --accent / --accent-dim / --glow.
├── data/                 # ← THE CONTENT LIVES HERE (edit these, not the components)
│   ├── profile.ts        #   owner info (name, bio, avatar, email, socials, skills, stats)
│   ├── projects.ts       #   the 4 featured projects (bilingual, tech, langs, screenshots)
│   └── i18n.ts           #   UI chrome strings / labels (bilingual)
├── hooks/                # useTypewriter, useInView (IntersectionObserver), useSound (Web Audio)
├── components/           # all UI + effects (see below)
└── styles/
    ├── global.css        # reset, layout, CSS vars, scroll-reveal, reduced-motion
    └── theme.css         # CRT/scanline/glitch/matrix effects + every component's styles
```

Key components: `BootScreen`, `MatrixRain` (canvas), `CRT` (overlays), `Navbar` (scroll-spy),
`Hero`, `InteractiveTerminal` (the command shell), `About`, `Projects` → `ProjectCard` → `Gallery`,
`Skills`, `Contact`, `Footer`, plus `Icon` (inline SVGs), `GlitchText`, `SectionHeading`.

## Conventions (follow these)

- **Bilingual everything.** User-facing text is `{ en: '...', th: '...' }` and rendered via
  `t(obj)` from `useApp()`. Never hardcode a single-language string in a component — add it to
  `data/i18n.ts` (UI labels) or the relevant `data/` entry.
- **Content vs. presentation.** Edit copy/data in `src/data/*`. Components read from there.
- **Theming via CSS vars.** Use `var(--accent)`, `var(--glow)`, `var(--line)`, etc. so all 4 color
  themes keep working. Don't hardcode the green.
- **Plain CSS only** (class names in `theme.css` / `global.css`). No Tailwind, no CSS-in-JS, no UI kit.
- **Accessibility:** keep the `prefers-reduced-motion` guards; heavy effects must degrade gracefully.
- **Images:** project screenshots are remote GitHub raw URLs. `ProjectCard` already has an
  `onError` fallback to generated ASCII art — preserve it (URLs can rot).
- TypeScript is strict; prefer `import type` for type-only imports (`isolatedModules` is on).

## Current state / next steps (TODO)

- ✅ Built, type-checks clean, runs (`npm run dev` / `build` / `preview` verified).
- ⛳ **Not yet pushed to GitHub.** Branch is `main`. To publish: create repo
  `Woraphon-S/portfolio-website`, then `git push -u origin main`.
- ⛳ **Not yet deployed.** Target is **Vercel** (auto-detects Vite; `vercel.json` SPA rewrite included).
- ✏️ `src/data/profile.ts` still has **placeholder personal details** — search for `TODO`:
  real bio, avatar URL, and the LinkedIn link (currently empty) need the owner's input.
- No project has a `liveUrl` yet; cards show a disabled "no live demo" button until one is set.

## Environment notes

- Primary dev machine is **Windows + PowerShell**. The owner plans to **move machines** — keep setup
  reproducible from `package.json` (no global tools beyond Node 18+; `.nvmrc` pins 20).
- `node_modules/` and `dist/` are gitignored — never commit them.
- `useSound` uses the Web Audio API; browsers require a user gesture before audio plays (expected).
- The boot screen is skipped for the rest of a tab session via `sessionStorage['pf:booted']`.
