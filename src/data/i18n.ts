// UI strings (chrome / labels). Project + profile content lives in their own files.

export type Lang = 'en' | 'th'

export const ui = {
  nav: {
    home: { en: 'home', th: 'home' },
    about: { en: 'about', th: 'about' },
    experience: { en: 'experience', th: 'experience' },
    projects: { en: 'projects', th: 'projects' },
    skills: { en: 'skills', th: 'skills' },
    contact: { en: 'contact', th: 'contact' },
  },
  boot: {
    lines: {
      en: [
        'initializing portfolio.sys ...',
        'mounting /dev/projects ...',
        'loading kernel modules [ react vite framer-motion ] ...',
        'establishing secure shell ...',
        'fetching repositories from github/Woraphon-S ...',
        'decrypting content ...',
        'rendering terminal interface ...',
      ],
      th: [
        'initializing portfolio.sys ...',
        'mounting /dev/projects ...',
        'loading kernel modules [ react vite framer-motion ] ...',
        'establishing secure shell ...',
        'fetching repositories from github/Woraphon-S ...',
        'decrypting content ...',
        'rendering terminal interface ...',
      ],
    },
    ready: { en: 'system ready. press any key to enter.', th: 'ระบบพร้อมแล้ว กดปุ่มใดก็ได้เพื่อเข้าสู่ระบบ' },
    enter: { en: '[ ENTER ]', th: '[ เข้าสู่ระบบ ]' },
  },
  hero: {
    whoami: { en: 'whoami', th: 'whoami' },
    cta_projects: { en: './view-projects', th: './ดูผลงาน' },
    cta_contact: { en: './contact-me', th: './ติดต่อผม' },
    scroll: { en: 'scroll', th: 'เลื่อนลง' },
    based: { en: 'based in', th: 'อยู่ที่' },
    hint: {
      en: 'tip: type a command below — try `help`, `projects`, `about`',
      th: 'ทิป: พิมพ์คำสั่งด้านล่าง — ลอง `help`, `projects`, `about`',
    },
  },
  sections: {
    about: { en: 'About', th: 'About' },
    experience: { en: 'Experience', th: 'Experience' },
    projects: { en: 'Featured Projects', th: 'Featured Projects' },
    projects_sub: {
      en: 'auto-synced from github — 4 selected builds',
      th: 'ซิงก์อัตโนมัติจาก github — 4 ผลงานที่คัดมา',
    },
    skills: { en: 'Tech Stack', th: 'เทคโนโลยีที่ใช้' },
    contact: { en: 'Get In Touch', th: 'ติดต่อผม' },
    contact_sub: {
      en: 'open to opportunities & collaborations',
      th: 'เปิดรับโอกาสและการร่วมงาน',
    },
  },
  card: {
    features: { en: 'KEY FEATURES', th: 'ฟีเจอร์เด่น' },
    stack: { en: 'STACK', th: 'เทคโนโลยี' },
    code: { en: 'source', th: 'ซอร์สโค้ด' },
    live: { en: 'live demo', th: 'เดโม' },
    gallery: { en: 'gallery', th: 'แกลเลอรี' },
    noLive: { en: 'no live demo', th: 'ยังไม่มีเดโม' },
    noCode: { en: 'no source', th: 'ไม่มีซอร์สโค้ด' },
    close: { en: 'close', th: 'ปิด' },
  },
  contact: {
    emailMe: { en: 'Email me', th: 'ส่งอีเมล' },
    copy: { en: 'copy', th: 'คัดลอก' },
    copied: { en: 'copied!', th: 'คัดลอกแล้ว!' },
  },
  footer: {
    built: {
      en: 'built with React + Vite + Framer Motion',
      th: 'สร้างด้วย React + Vite + Framer Motion',
    },
    source: { en: 'view source', th: 'ดูซอร์สโค้ด' },
  },
  meta: {
    soundOn: { en: 'sound on', th: 'เปิดเสียง' },
    soundOff: { en: 'sound off', th: 'ปิดเสียง' },
  },
}
