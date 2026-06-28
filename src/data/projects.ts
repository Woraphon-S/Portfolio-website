// Project data — auto-pulled from the owner's public GitHub repos via the
// portfolio-repo-recon workflow, then curated. Bilingual (EN/TH).

export interface LangStat {
  name: string
  percent: number
}

export interface Project {
  id: string
  /** repo slug */
  name: string
  /** terminal command alias used in the interactive shell */
  command: string
  title: string
  category: { en: string; th: string }
  /** accent color used for this card's glow / badges */
  accent: string
  /** emoji glyph shown in the window title bar */
  glyph: string
  year: string
  tagline: { en: string; th: string }
  description: { en: string; th: string }
  features: { en: string[]; th: string[] }
  tech: string[]
  languages: LangStat[]
  images: string[]
  repoUrl: string
  liveUrl: string
}

export const projects: Project[] = [
  {
    id: 'monto-ai',
    name: 'AI-Agent-Chat-Platform',
    command: 'monto-ai',
    title: 'MONTO AI',
    category: {
      en: 'Full-Stack AI Chat Assistant Platform',
      th: 'แพลตฟอร์มผู้ช่วย AI แบบฟูลสแตก',
    },
    accent: '#22d3ee',
    glyph: '🤖',
    year: '2026',
    tagline: {
      en: 'A full-stack personal AI assistant powered by Google Gemini — smart conversations, auto-titled chats, and customizable AI personalities.',
      th: 'ผู้ช่วย AI ส่วนตัวแบบฟูลสแตก ขับเคลื่อนด้วย Google Gemini พูดคุยอย่างเข้าใจบริบท ตั้งชื่อแชทให้อัตโนมัติ และปรับบุคลิก AI ได้ตามใจ',
    },
    description: {
      en: "MONTO AI is a full-stack personal assistant platform that lets users chat with an AI to manage information and get answers through context-aware conversations. It integrates Google's Gemini 1.5 Flash model, automatically summarizes and names each conversation, and supports per-user profile and AI personality customization. Built on a clean, modular architecture with a React/TypeScript frontend and a Node.js/Express backend, using a Strategy Pattern so the underlying LLM provider can be swapped out easily.",
      th: 'MONTO AI คือแพลตฟอร์มผู้ช่วยส่วนตัวแบบฟูลสแตกที่ให้ผู้ใช้พูดคุยกับ AI เพื่อจัดการข้อมูลและหาคำตอบผ่านบทสนทนาที่เข้าใจบริบท ระบบเชื่อมต่อกับโมเดล Gemini 1.5 Flash ของ Google สรุปและตั้งชื่อแชทให้อัตโนมัติ และให้ผู้ใช้แต่ละคนปรับโปรไฟล์รวมถึงบุคลิกของ AI ได้เอง ออกแบบด้วยสถาปัตยกรรมที่สะอาดและแยกส่วนชัดเจน ใช้ React/TypeScript ฝั่งหน้าบ้านและ Node.js/Express ฝั่งหลังบ้าน พร้อม Strategy Pattern เพื่อสลับผู้ให้บริการ LLM ได้ง่าย',
    },
    features: {
      en: [
        'Smart chat powered by Google Gemini 1.5 Flash with context-aware, multi-turn conversations',
        'Automatic chat titling that summarizes and names each conversation from the first message',
        'User profile customization: display name, avatar, and AI personality via custom system prompts',
        'JWT-based authentication with persistent accounts and saved chat history',
        'Minimalist dark-mode UI built with Tailwind CSS and Framer Motion animations',
        'Dockerized full-stack setup (frontend, backend, MySQL) with a Strategy Pattern for pluggable LLM providers',
      ],
      th: [
        'แชทอัจฉริยะขับเคลื่อนด้วย Google Gemini 1.5 Flash สนทนาต่อเนื่องและเข้าใจบริบท',
        'ตั้งชื่อแชทอัตโนมัติ โดยสรุปและตั้งชื่อบทสนทนาจากข้อความแรกให้เอง',
        'ปรับแต่งโปรไฟล์ผู้ใช้ได้ ทั้งชื่อที่แสดง รูปอวาตาร์ และบุคลิกของ AI ผ่าน system prompt',
        'ระบบยืนยันตัวตนด้วย JWT พร้อมบัญชีผู้ใช้และประวัติการแชทที่บันทึกไว้',
        'ดีไซน์โหมดมืดมินิมอลเน้นความสบายตา สร้างด้วย Tailwind CSS และอนิเมชัน Framer Motion',
        'ติดตั้งแบบฟูลสแตกผ่าน Docker (frontend, backend, MySQL) พร้อม Strategy Pattern เพื่อสลับผู้ให้บริการ LLM ได้',
      ],
    },
    tech: [
      'React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Zustand',
      'React Router', 'Node.js', 'Express', 'Prisma ORM', 'MySQL', 'JWT', 'bcryptjs',
      'Zod', 'Google Gemini AI', 'Docker',
    ],
    languages: [
      { name: 'TypeScript', percent: 94 },
      { name: 'CSS', percent: 2 },
      { name: 'Dockerfile', percent: 1 },
      { name: 'HTML', percent: 1 },
      { name: 'JavaScript', percent: 1 },
    ],
    images: [],
    repoUrl: 'https://github.com/Woraphon-S/AI-Agent-Chat-Platform',
    liveUrl: '',
  },
  {
    id: 'hotel-booking',
    name: 'Hotel-Booking-Web-Application',
    command: 'hotel-booking',
    title: 'Hotel Booking Platform',
    category: {
      en: 'Full-Stack Hotel Booking Platform',
      th: 'แพลตฟอร์มจองที่พักแบบฟูลสแตก',
    },
    accent: '#fbbf24',
    glyph: '🏨',
    year: '2026',
    tagline: {
      en: 'A two-sided hotel booking platform where travelers book stays and owners manage listings.',
      th: 'แพลตฟอร์มจองที่พักแบบครบวงจร ให้นักท่องเที่ยวจองห้องและให้เจ้าของที่พักจัดการลิสต์ได้ในที่เดียว',
    },
    description: {
      en: 'A full-stack hotel and accommodation booking platform with a Next.js frontend and a NestJS backend. Travelers search, filter, and book properties with real-time availability and verified reviews, while owners list rooms, upload photos, and manage pricing. The system emphasizes backend reliability with server-side price calculation and protection against double bookings, backed by PostgreSQL using raw parameterized SQL (no ORM).',
      th: 'เว็บแอปจองโรงแรมและที่พักแบบฟูลสแตก ใช้ Next.js ฝั่งหน้าบ้านและ NestJS ฝั่งหลังบ้าน นักท่องเที่ยวค้นหา กรอง และจองที่พักได้พร้อมเช็กห้องว่างแบบเรียลไทม์และรีวิวจากผู้เข้าพักจริง ส่วนเจ้าของที่พักลงประกาศห้อง อัปโหลดรูป และตั้งราคาได้เอง ระบบเน้นความน่าเชื่อถือของหลังบ้าน ทั้งการคำนวณราคาฝั่งเซิร์ฟเวอร์และการป้องกันการจองซ้ำซ้อน โดยใช้ PostgreSQL เขียน SQL แบบ parameterized ตรง ๆ ไม่พึ่ง ORM',
    },
    features: {
      en: [
        'Search and filter properties by location, price, rating, and amenities',
        'Real-time availability checking with double-booking prevention and server-side price calculation',
        'Booking flow with payment processing, status tracking, and verified guest reviews',
        'Saved favorites list and a bilingual Thai/English interface',
        'Owner dashboard for listing rooms, uploading photos with a primary image, and managing pricing',
        'JWT + Passport authentication with bcrypt password hashing',
      ],
      th: [
        'ค้นหาและกรองที่พักตามทำเล ราคา คะแนนรีวิว และสิ่งอำนวยความสะดวก',
        'เช็กห้องว่างแบบเรียลไทม์ พร้อมป้องกันการจองซ้ำและคำนวณราคาจากฝั่งเซิร์ฟเวอร์',
        'ขั้นตอนการจองครบ ทั้งชำระเงิน ติดตามสถานะ และรีวิวจากผู้เข้าพักจริง',
        'บันทึกรายการโปรด และรองรับสองภาษา ไทย/อังกฤษ',
        'แดชบอร์ดเจ้าของที่พัก ลงประกาศห้อง อัปโหลดรูปหลายรูปและเลือกรูปหลัก จัดการราคาได้เอง',
        'ระบบยืนยันตัวตนด้วย JWT + Passport และเข้ารหัสรหัสผ่านด้วย bcrypt',
      ],
    },
    tech: [
      'Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Zustand',
      'TanStack Query', 'React Hook Form', 'Zod', 'Framer Motion', 'React-Leaflet',
      'NestJS 11', 'JWT + Passport', 'bcrypt', 'Multer', 'PostgreSQL 15', 'Raw SQL (pg)', 'Docker',
    ],
    languages: [
      { name: 'TypeScript', percent: 95 },
      { name: 'PLpgSQL', percent: 3 },
      { name: 'Dockerfile', percent: 1 },
      { name: 'JavaScript', percent: 0.7 },
      { name: 'CSS', percent: 0.3 },
    ],
    images: [
      'https://github.com/Woraphon-S/Hotel-Booking-Web-Application/raw/main/images/home-hero.png',
      'https://github.com/Woraphon-S/Hotel-Booking-Web-Application/raw/main/images/search-results.png',
      'https://github.com/Woraphon-S/Hotel-Booking-Web-Application/raw/main/images/popular-destinations.png',
      'https://github.com/Woraphon-S/Hotel-Booking-Web-Application/raw/main/images/owner-dashboard.png',
      'https://github.com/Woraphon-S/Hotel-Booking-Web-Application/raw/main/images/favorites.png',
      'https://github.com/Woraphon-S/Hotel-Booking-Web-Application/raw/main/images/login.png',
    ],
    repoUrl: 'https://github.com/Woraphon-S/Hotel-Booking-Web-Application',
    liveUrl: '',
  },
  {
    id: 'nutrilens',
    name: 'NutriLens-Fullstack-Platform',
    command: 'nutrilens',
    title: 'NutriLens AI',
    category: {
      en: 'Full-Stack AI Nutrition Tracking App',
      th: 'แอปวิเคราะห์โภชนาการด้วย AI แบบฟูลสแตก',
    },
    accent: '#a3e635',
    glyph: '🥗',
    year: '2026',
    tagline: {
      en: 'Snap a photo of your meal and let AI count the calories and macros for you.',
      th: 'แค่ถ่ายรูปอาหาร AI ก็คำนวณแคลอรีและสารอาหารให้ทันที',
    },
    description: {
      en: 'NutriLens AI turns a single food photo into a complete nutritional breakdown. Powered by Google Gemini 2.5 Flash, it identifies the dish and ingredients, then calculates calories and macros (protein, carbs, fat) automatically — removing the tedium of manual food logging. Built on Next.js 16 with a hexagonal architecture, it offers a guest mode for quick analysis and a member mode with persistent meal history, dashboards, and gamified progress tracking.',
      th: 'NutriLens AI เปลี่ยนรูปอาหารเพียงรูปเดียวให้กลายเป็นข้อมูลโภชนาการครบถ้วน ขับเคลื่อนด้วย Google Gemini 2.5 Flash ที่ช่วยระบุชนิดอาหารและส่วนผสม พร้อมคำนวณแคลอรีและสารอาหารหลัก (โปรตีน คาร์บ ไขมัน) ให้อัตโนมัติ ตัดความยุ่งยากของการจดบันทึกอาหารด้วยมือออกไป สร้างบน Next.js 16 ด้วยสถาปัตยกรรมแบบ Hexagonal มีทั้งโหมดผู้เยี่ยมชมสำหรับวิเคราะห์อย่างรวดเร็ว และโหมดสมาชิกที่บันทึกประวัติมื้ออาหาร แดชบอร์ด และระบบสะสมแต้มเพื่อสร้างแรงจูงใจ',
    },
    features: {
      en: [
        'AI food analysis from photos (JPEG/PNG/WebP up to 10MB) using Google Gemini 2.5 Flash',
        'Automatic dish and ingredient identification with per-ingredient calorie and macro breakdowns',
        'Guest mode for instant analysis plus member mode with persistent meal history',
        'JWT authentication with bcrypt password hashing',
        'Gamification with XP rewards, level progression, and streak tracking',
        'Dashboard showing daily summaries, weekly calorie trends, and searchable meal history',
      ],
      th: [
        'วิเคราะห์อาหารจากรูปภาพ (JPEG/PNG/WebP สูงสุด 10MB) ด้วย Google Gemini 2.5 Flash',
        'ระบุชนิดอาหารและส่วนผสมอัตโนมัติ พร้อมแยกแคลอรีและสารอาหารของแต่ละส่วนผสม',
        'โหมดผู้เยี่ยมชมสำหรับวิเคราะห์ทันที และโหมดสมาชิกที่บันทึกประวัติมื้ออาหาร',
        'ระบบยืนยันตัวตนด้วย JWT และเข้ารหัสรหัสผ่านด้วย bcrypt',
        'ระบบเกมมิฟิเคชัน สะสม XP เลื่อนเลเวล และนับสตรีคต่อเนื่อง',
        'แดชบอร์ดสรุปข้อมูลรายวัน แนวโน้มแคลอรีรายสัปดาห์ และค้นหาประวัติมื้ออาหารได้',
      ],
    },
    tech: [
      'Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'API Routes',
      'PostgreSQL 16', 'node-postgres', 'Google Gemini 2.5 Flash', 'JWT', 'bcrypt',
      'Docker', 'lucide-react', 'Sonner',
    ],
    languages: [
      { name: 'TypeScript', percent: 94 },
      { name: 'CSS', percent: 5 },
      { name: 'JavaScript', percent: 0.5 },
      { name: 'Dockerfile', percent: 0.5 },
    ],
    images: [
      'https://raw.githubusercontent.com/Woraphon-S/NutriLens-Fullstack-Platform/main/docs/screenshots/landing.png',
      'https://raw.githubusercontent.com/Woraphon-S/NutriLens-Fullstack-Platform/main/docs/screenshots/analyze.png',
      'https://raw.githubusercontent.com/Woraphon-S/NutriLens-Fullstack-Platform/main/docs/screenshots/dashboard.png',
      'https://raw.githubusercontent.com/Woraphon-S/NutriLens-Fullstack-Platform/main/docs/screenshots/history.png',
    ],
    repoUrl: 'https://github.com/Woraphon-S/NutriLens-Fullstack-Platform',
    liveUrl: '',
  },
  {
    id: 'stravy',
    name: 'Stravy',
    command: 'stravy',
    title: 'Stravy',
    category: {
      en: 'Full-Stack Mobile Fitness Tracking App',
      th: 'แอปมือถือติดตามการออกกำลังกายแบบฟูลสแตก',
    },
    accent: '#fc5200',
    glyph: '🏃',
    year: '2026',
    tagline: {
      en: 'A Strava-style fitness tracker: record GPS runs, rides, and walks, then share them on a social feed.',
      th: 'แอปติดตามการออกกำลังกายสไตล์ Strava บันทึกการวิ่ง ปั่นจักรยาน และเดินด้วย GPS แล้วแชร์ลงฟีดโซเชียล',
    },
    description: {
      en: 'Stravy is a full-stack, Strava-inspired fitness social network. The Expo / React Native mobile app tracks runs, rides, and walks with continuous GPS, showing live distance, pace, and moving time, then renders each activity on a route map with a speed chart and six performance metrics. A NestJS + PostgreSQL/PostGIS backend handles JWT auth with rotating refresh tokens, a cursor-paginated social feed, follows, kudos, comments, and per-activity privacy enforced down to the SQL layer. Ships with full English and Thai localization and a consistent dark theme.',
      th: 'Stravy คือโซเชียลเน็ตเวิร์กสำหรับคนรักการออกกำลังกายแบบฟูลสแตกที่ได้แรงบันดาลใจจาก Strava ฝั่งแอปมือถือสร้างด้วย Expo / React Native ติดตามการวิ่ง ปั่นจักรยาน และเดินด้วย GPS แบบต่อเนื่อง แสดงระยะทาง เพซ และเวลาเคลื่อนที่แบบเรียลไทม์ พร้อมวาดเส้นทางบนแผนที่ กราฟความเร็ว และตัววัดผล 6 รายการต่อกิจกรรม ฝั่งเซิร์ฟเวอร์ใช้ NestJS กับ PostgreSQL/PostGIS จัดการล็อกอินด้วย JWT แบบหมุน refresh token ฟีดโซเชียลแบบ cursor pagination ระบบติดตาม กดถูกใจ คอมเมนต์ และตั้งค่าความเป็นส่วนตัวรายกิจกรรมที่บังคับใช้ถึงระดับ SQL รองรับทั้งภาษาไทยและอังกฤษเต็มรูปแบบพร้อมธีมมืดที่สอดคล้องกันทั้งแอป',
    },
    features: {
      en: [
        'Continuous GPS recording for runs, rides, and walks with start / pause / resume / finish and live metrics every second',
        'Activity detail with a route map from GPS tracks, a speed-over-time chart, and six metrics (distance, time, pace, max speed, calories)',
        'Cursor-paginated social feed with infinite scroll, pull-to-refresh, follow/unfollow, kudos, and comments with optimistic UI',
        'JWT auth with 15-minute access tokens and rotating 30-day refresh tokens, bcrypt hashing, and editable profiles',
        'Per-activity privacy (public, followers-only, private) enforced in both SQL and service layers, with GPX export',
        'Full English and Thai type-safe i18n with a consistent dark theme and inline-SVG icons',
      ],
      th: [
        'บันทึก GPS ต่อเนื่องสำหรับการวิ่ง ปั่นจักรยาน และเดิน พร้อมปุ่มเริ่ม/หยุด/ทำต่อ/จบ และอัปเดตค่าทุกวินาที',
        'หน้ารายละเอียดกิจกรรมพร้อมแผนที่เส้นทางจาก GPS กราฟความเร็วตามเวลา และตัววัดผล 6 รายการ (ระยะทาง เวลา เพซ ความเร็วสูงสุด แคลอรี)',
        'ฟีดโซเชียลแบบ cursor pagination เลื่อนดูได้ไม่จำกัด ดึงเพื่อรีเฟรช ติดตาม/เลิกติดตาม กดถูกใจและคอมเมนต์แบบ optimistic UI',
        'ระบบล็อกอินด้วย JWT access token อายุ 15 นาที และ refresh token แบบหมุนอายุ 30 วัน เข้ารหัสด้วย bcrypt และแก้ไขโปรไฟล์ได้',
        'ตั้งค่าความเป็นส่วนตัวรายกิจกรรม (สาธารณะ เฉพาะผู้ติดตาม ส่วนตัว) บังคับใช้ทั้งระดับ SQL และ service พร้อมส่งออกไฟล์ GPX',
        'รองรับสองภาษาไทย-อังกฤษเต็มรูปแบบด้วย i18n แบบ type-safe และธีมมืดที่สอดคล้องกันพร้อมไอคอน SVG ฝังในตัว',
      ],
    },
    tech: [
      'TypeScript', 'Expo', 'React Native', 'React Navigation', 'expo-location',
      'react-native-svg', 'AsyncStorage', 'NestJS', 'Passport (JWT)', 'class-validator',
      'PostgreSQL', 'PostGIS', 'node-postgres', 'bcryptjs', 'Docker', 'Jest',
    ],
    languages: [
      { name: 'TypeScript', percent: 97 },
      { name: 'PLpgSQL', percent: 3 },
    ],
    images: [
      'https://raw.githubusercontent.com/Woraphon-S/Stravy/main/docs/screenshots/feed.png',
      'https://raw.githubusercontent.com/Woraphon-S/Stravy/main/docs/screenshots/record.png',
      'https://raw.githubusercontent.com/Woraphon-S/Stravy/main/docs/screenshots/login.png',
    ],
    repoUrl: 'https://github.com/Woraphon-S/Stravy',
    liveUrl: '',
  },
]
