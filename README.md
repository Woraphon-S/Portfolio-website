# 🖥️ Woraphon S. — Developer Portfolio

A **terminal / developer-themed** portfolio website built with **React + Vite + TypeScript**.
Fully bilingual **🇬🇧 English / 🇹🇭 ไทย**, with a boot sequence, an interactive shell, a Matrix-rain
background, CRT scanline effects, glitch text, switchable color themes, and synthesized UI sounds.

> เว็บพอร์ตโฟลิโอธีมเทอร์มินัล สลับภาษาไทย/อังกฤษได้ มีฉากบูตระบบ เทอร์มินัลที่พิมพ์คำสั่งได้จริง
> พื้นหลังตัวอักษรฝนตกแบบ Matrix เอฟเฟกต์ CRT ข้อความ glitch สลับธีมสีได้ และเสียง UI สังเคราะห์

---

## ✨ Features / ลูกเล่น

- 🔌 **Boot sequence** — fake OS startup that types log lines, then "press any key to enter"
- 🐚 **Interactive terminal** — type real commands: `help`, `projects`, `about`, `skills`, `neofetch`, `open <name>`, `sudo`, `clear` … (with command history via ↑/↓)
- 🟩 **Matrix digital rain** canvas background (theme-tinted, pauses when tab hidden)
- 📺 **CRT** scanlines, vignette, flicker & a moving scan sweep
- ⚡ **Glitch** RGB-split title text
- 🎨 **4 switchable color themes** — matrix / amber / cyan / synth (persisted)
- 🌐 **EN / TH language toggle** (persisted)
- 🔊 **Synthesized typing & UI sounds** via the Web Audio API (toggle, off by default)
- 🖼️ **Project galleries** — real screenshots pulled from each repo, with a lightbox
- 📊 Animated **language bars**, scroll-reveal animations, scroll-spy navbar
- ♿ Respects `prefers-reduced-motion`, mobile-responsive

## 🚀 Featured projects / ผลงานที่โชว์

| Project | What it is |
| --- | --- |
| 🤖 **MONTO AI** | Full-stack AI chat assistant (Google Gemini, JWT, Prisma/MySQL) |
| 🏨 **Hotel Booking Platform** | Next.js + NestJS booking app, raw SQL, double-booking prevention |
| 🥗 **NutriLens AI** | Photo → calories & macros with Gemini 2.5 Flash, gamified tracking |
| 🏃 **Stravy** | Strava-style GPS fitness tracker (Expo / React Native + PostGIS) |

Project content (descriptions, tech, screenshots, language stats) was auto-pulled from the
public GitHub repos and lives in [`src/data/projects.ts`](src/data/projects.ts).

---

## 🛠️ Run locally / รันในเครื่อง

```bash
npm install
npm run dev        # start dev server (http://localhost:5173)
npm run build      # type-check + production build -> dist/
npm run preview    # preview the production build
```

Requires Node 18+.

## ✏️ Make it yours / แก้ให้เป็นของคุณ

Almost everything personal lives in **one file**:

👉 [`src/data/profile.ts`](src/data/profile.ts) — name, role, bio, avatar, email, social links, skills.
Look for the `TODO` markers.

- Add / edit projects → [`src/data/projects.ts`](src/data/projects.ts)
- UI labels & translations → [`src/data/i18n.ts`](src/data/i18n.ts)
- Theme colors → `themes` in [`src/context/AppContext.tsx`](src/context/AppContext.tsx)

## ☁️ Deploy to Vercel

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com) → **Add New… → Project** → import the repo.
3. Vercel auto-detects **Vite**. Defaults are correct:
   - Build command: `npm run build`
   - Output directory: `dist`
4. **Deploy.** Every `git push` redeploys automatically.

A `vercel.json` with an SPA rewrite is already included.

---

## 🧱 Tech stack

`React 18` · `Vite 5` · `TypeScript` · `Framer Motion` · plain CSS (CRT/terminal effects, no UI kit)

## 📁 Structure

```
src/
├── components/   UI + effects (BootScreen, MatrixRain, CRT, Hero, InteractiveTerminal, ProjectCard, Gallery, …)
├── context/      AppContext — language, theme, sound
├── data/         profile.ts · projects.ts · i18n.ts   ← edit these
├── hooks/        useTypewriter · useInView · useSound
└── styles/       global.css · theme.css
```

Built with React + Vite + Framer Motion. 🤖
