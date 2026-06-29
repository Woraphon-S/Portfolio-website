# Woraphon Saraphon — Developer Portfolio

เว็บพอร์ตโฟลิโอส่วนตัว หน้าเดียว ธีมเทอร์มินัล/นักพัฒนา
A single-page personal portfolio with a terminal / developer theme.

## Tech stack

- React 18 + Vite 5
- TypeScript (strict mode)
- Framer Motion
- Plain CSS — no UI framework

Frontend-only: no backend, no database. All content is static in `src/data/`.
Custom touches include a boot sequence, an interactive command shell, a Matrix-rain
canvas background, CRT/glitch effects, switchable color themes, and Web Audio UI sounds.

## Featured projects

- **AIR PSRU** — IoT air-quality monitoring system (senior project)
- **Stravy** — full-stack mobile fitness tracker
- **NutriLens AI** — AI nutrition tracking platform
- **Hotel Booking Platform** — two-sided booking web app

## Getting started

```bash
npm install      # install dependencies
npm run dev      # dev server  → http://localhost:5173
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build → http://localhost:4173
```

Requires Node 18+ (`.nvmrc` pins 20).

## Deploy

Hosted on Vercel (auto-detects Vite). `vercel.json` adds the SPA rewrite so the
single-page app serves correctly on every route.
