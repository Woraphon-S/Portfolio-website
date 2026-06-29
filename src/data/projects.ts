// Project data — curated from the owner's work. Bilingual (EN/TH) types kept,
// but the UI renders English only.

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
    id: 'air-psru',
    name: 'Air-Quality-IoT-System',
    command: 'air-psru',
    title: 'AIR PSRU',
    category: {
      en: 'IoT Air Quality Monitoring System — Senior Project',
      th: 'IoT Air Quality Monitoring System — Senior Project',
    },
    accent: '#4ade80',
    glyph: '🌬️',
    year: '2025',
    tagline: {
      en: 'A senior-project IoT system that monitors PM2.5, PM10, temperature, humidity, and CO in real time — with a Grafana dashboard and a LINE bot for instant alerts.',
      th: 'A senior-project IoT system that monitors PM2.5, PM10, temperature, humidity, and CO in real time — with a Grafana dashboard and a LINE bot for instant alerts.',
    },
    description: {
      en: 'AIR PSRU is a senior project IoT system built to monitor air quality in real time. An ESP32 microcontroller reads PM2.5/PM10 from an SDS011 laser dust sensor, temperature and humidity from a DHT22, and CO concentration from a ZE07-CO sensor. Readings are stored in an InfluxDB time-series database and visualized on a Grafana dashboard with live gauges and historical charts. A LINE Messaging API bot lets users query current values, 24-hour averages, and weather-check summaries, and subscribe to threshold-based alert notifications.',
      th: 'AIR PSRU is a senior project IoT system built to monitor air quality in real time. An ESP32 microcontroller reads PM2.5/PM10 from an SDS011 laser dust sensor, temperature and humidity from a DHT22, and CO concentration from a ZE07-CO sensor. Readings are stored in an InfluxDB time-series database and visualized on a Grafana dashboard with live gauges and historical charts. A LINE Messaging API bot lets users query current values, 24-hour averages, and weather-check summaries, and subscribe to threshold-based alert notifications.',
    },
    features: {
      en: [
        'Real-time sensing of PM2.5 & PM10 (SDS011), temperature & humidity (DHT22), and CO (ZE07-CO) via ESP32 firmware',
        'Sensor readings stored in an InfluxDB time-series database',
        'Grafana dashboard with live gauge panels and PM2.5/PM10 & Temp/Humidity time-series charts',
        'LINE bot with four menus: Current readings, 24-hour averages, WeatherCheck summary, and Alerts',
        'Threshold-based push alerts sent automatically when air quality exceeds safe levels',
        'Weatherproof enclosure housing the ESP32 and all sensors',
      ],
      th: [
        'Real-time sensing of PM2.5 & PM10 (SDS011), temperature & humidity (DHT22), and CO (ZE07-CO) via ESP32 firmware',
        'Sensor readings stored in an InfluxDB time-series database',
        'Grafana dashboard with live gauge panels and PM2.5/PM10 & Temp/Humidity time-series charts',
        'LINE bot with four menus: Current readings, 24-hour averages, WeatherCheck summary, and Alerts',
        'Threshold-based push alerts sent automatically when air quality exceeds safe levels',
        'Weatherproof enclosure housing the ESP32 and all sensors',
      ],
    },
    tech: [
      'ESP32', 'DHT22', 'SDS011', 'ZE07-CO', 'C++ (Arduino)', 'Grafana', 'InfluxDB', 'LINE Messaging API',
    ],
    languages: [
      { name: 'C++', percent: 60 },
      { name: 'JavaScript', percent: 25 },
      { name: 'Shell', percent: 15 },
    ],
    images: [
      '/images/iot/dashboard.png',
      '/images/iot/linebot.png',
      '/images/iot/hardware.jpg',
    ],
    repoUrl: '',
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
]
