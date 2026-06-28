# 🖥️ Woraphon S. — Developer Portfolio

A **terminal / developer-themed** portfolio website built with **React + Vite + TypeScript**.
เว็บพอร์ตโฟลิโอธีมเทอร์มินัล สลับภาษา 🇹🇭/🇬🇧 ได้ มีฉากบูตระบบ เทอร์มินัลพิมพ์คำสั่งได้จริง
พื้นหลัง Matrix เอฟเฟกต์ CRT/glitch สลับธีมสี และเสียง UI สังเคราะห์

---

## ⚡ TL;DR — รันเร็ว ๆ

```bash
npm install      # ติดตั้ง dependencies (ครั้งแรก / เครื่องใหม่)
npm run dev      # เปิด dev server → http://localhost:5173
```

ต้องมี **Node.js 18 ขึ้นไป** เท่านั้น ไม่ต้องลงอะไรเพิ่ม (ไม่มี database / backend)

---

## 🆕 ย้ายมาเครื่องใหม่ — ทำตามนี้ทีละขั้น / Setup on a new machine

### 1) ติดตั้ง Node.js (ถ้ายังไม่มี)
- โหลด **LTS** จาก <https://nodejs.org> แล้วติดตั้ง
- เช็คว่าได้แล้ว (เปิด PowerShell / Terminal ใหม่):
  ```bash
  node -v      # ต้อง v18.x ขึ้นไป (เครื่องนี้เทสต์ด้วย v24)
  npm -v
  ```

### 2) เอาโค้ดไปเครื่องใหม่ — เลือก 1 ทาง

**ทาง A — ผ่าน GitHub (แนะนำ ✅)** เก็บประวัติครบ ย้ายง่ายสุด
```bash
# (ครั้งเดียวบนเครื่องเก่า) push ขึ้น GitHub ก่อน:
git remote add origin https://github.com/Woraphon-S/portfolio-website.git
git push -u origin main

# จากนั้นบนเครื่องใหม่ แค่ clone:
git clone https://github.com/Woraphon-S/portfolio-website.git
cd portfolio-website
```

**ทาง B — ก๊อปโฟลเดอร์ไปตรง ๆ** (USB / cloud drive)
> ⚠️ **ห้ามก๊อป** โฟลเดอร์ `node_modules` กับ `dist` ไปด้วย (ใหญ่และไม่จำเป็น — สร้างใหม่ได้ด้วย `npm install`)
> ก๊อปแค่ซอร์สโค้ดที่เหลือ (รวมโฟลเดอร์ `.git` ถ้าอยากเก็บประวัติ git)

### 3) ติดตั้ง dependencies
```bash
cd portfolio-website
npm install
```

### 4) รัน
```bash
npm run dev        # โหมดพัฒนา (hot-reload) → http://localhost:5173
```
เปิดเบราว์เซอร์ไปที่ลิงก์ที่ขึ้นใน terminal — จะเจอฉากบูตก่อน กดปุ่มใดก็ได้เพื่อเข้า 🎉

เสร็จแล้วกด **Ctrl + C** ใน terminal เพื่อหยุดเซิร์ฟเวอร์

---

## 🧰 คำสั่งทั้งหมด / Available scripts

| คำสั่ง | ทำอะไร |
| --- | --- |
| `npm run dev` | รัน dev server พร้อม hot-reload (พอร์ต 5173) |
| `npm run build` | ตรวจ TypeScript + build เป็นไฟล์ production ลงโฟลเดอร์ `dist/` |
| `npm run preview` | เปิดดูผลลัพธ์จาก `dist/` แบบจริง (พอร์ต 4173) |
| `npm run lint` | ตรวจโค้ดด้วย ESLint (ถ้าตั้งค่าไว้) |

---

## 🩹 ปัญหาที่เจอบ่อย / Troubleshooting

- **พอร์ตชนกัน (Port 5173 in use)** → รันด้วยพอร์ตอื่น: `npm run dev -- --port 3000`
- **`npm install` ค้าง/พัง** → ลบแล้วลงใหม่:
  ```bash
  rm -rf node_modules package-lock.json   # Windows PowerShell: Remove-Item -Recurse -Force node_modules, package-lock.json
  npm install
  ```
- **`'node' / 'npm' is not recognized`** → ยังไม่ได้ติดตั้ง Node หรือยังไม่ได้เปิด terminal ใหม่หลังติดตั้ง
- **เปิดเว็บแล้วจอดำ** → เปิด DevTools (F12) ดู Console; ส่วนใหญ่คือ Node เวอร์ชันเก่าเกิน — อัปเป็น 18+
- **อนิเมชันเยอะ เครื่องช้า** → ระบบเคารพ `prefers-reduced-motion` ของ OS อยู่แล้ว ถ้าเปิดโหมดลดการเคลื่อนไหวใน Windows/Mac เอฟเฟกต์หนัก ๆ จะถูกปิดให้อัตโนมัติ

---

## ✏️ แก้ข้อมูลส่วนตัว / Make it yours

ทุกอย่างที่เป็นข้อมูลส่วนตัวอยู่ใน **ไฟล์เดียว** 👉 `src/data/profile.ts`
(ชื่อ, ตำแหน่ง, bio, รูป, อีเมล, ลิงก์โซเชียล, ทักษะ — มองหา `TODO`)

- เพิ่ม/แก้โปรเจกต์ → `src/data/projects.ts`
- ข้อความ UI / คำแปล → `src/data/i18n.ts`
- สีธีม → `themes` ใน `src/context/AppContext.tsx`

แก้ไฟล์พวกนี้ตอน `npm run dev` รันอยู่ หน้าเว็บจะอัปเดตให้ทันที

---

## ☁️ Deploy ขึ้น Vercel

1. push repo ขึ้น GitHub (ดูข้อ 2 ทาง A)
2. ไป <https://vercel.com> → **Add New… → Project** → import repo นี้
3. Vercel ตรวจเจอ **Vite** เอง ค่า default ถูกหมด (build: `npm run build`, output: `dist`) — กด **Deploy**
4. หลังจากนั้นทุกครั้งที่ `git push` Vercel จะ deploy ใหม่ให้อัตโนมัติ

มีไฟล์ `vercel.json` (SPA rewrite) เตรียมไว้ให้แล้ว

---

## ✨ Features / ลูกเล่น

- 🔌 **Boot sequence** — ฉากบูตระบบพิมพ์ทีละบรรทัด แล้วกดปุ่มเพื่อเข้า
- 🐚 **Interactive terminal** — พิมพ์คำสั่งจริง: `help` `projects` `about` `skills` `neofetch` `open <name>` `sudo` `clear` (มีประวัติ ↑/↓)
- 🟩 พื้นหลัง **Matrix digital rain** · 📺 **CRT** scanline/vignette/flicker · ⚡ ข้อความ **glitch**
- 🎨 **4 ธีมสี** (matrix/amber/cyan/synth) · 🌐 สลับ **EN/TH** · 🔊 เสียง UI (ปิดไว้ default)
- 🖼️ แกลเลอรีสกรีนช็อตจริงจาก repo + lightbox · 📊 แถบสัดส่วนภาษา · scroll-reveal · navbar scroll-spy · รองรับมือถือ

## 🚀 Featured projects / ผลงานที่โชว์

| Project | What it is |
| --- | --- |
| 🤖 **MONTO AI** | Full-stack AI chat assistant (Google Gemini, JWT, Prisma/MySQL) |
| 🏨 **Hotel Booking Platform** | Next.js + NestJS booking app, raw SQL, double-booking prevention |
| 🥗 **NutriLens AI** | Photo → calories & macros (Gemini 2.5 Flash), gamified tracking |
| 🏃 **Stravy** | Strava-style GPS fitness tracker (Expo / React Native + PostGIS) |

ข้อมูลโปรเจกต์ดึงอัตโนมัติจาก public repos → อยู่ใน `src/data/projects.ts`

---

## 🧱 Tech stack & structure

`React 18` · `Vite 5` · `TypeScript (strict)` · `Framer Motion` · plain CSS (no UI kit)

```
portfolio-website/
├── index.html
├── package.json          # scripts + dependencies
├── vite.config.ts        # Vite config
├── vercel.json           # SPA rewrite for Vercel
└── src/
    ├── main.tsx          # entry point
    ├── App.tsx           # page composition
    ├── components/       # UI + effects (BootScreen, MatrixRain, CRT, Hero, InteractiveTerminal, ProjectCard, Gallery, …)
    ├── context/          # AppContext — language, theme, sound
    ├── data/             # profile.ts · projects.ts · i18n.ts   ← แก้ตรงนี้
    ├── hooks/            # useTypewriter · useInView · useSound
    └── styles/           # global.css · theme.css
```

Built with React + Vite + Framer Motion. 🤖
