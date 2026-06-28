// ─────────────────────────────────────────────────────────────────────────────
//  OWNER PROFILE  —  ✏️  EDIT ME
//  This is the only file you need to touch to put your personal details in.
//  Everything marked TODO is a safe placeholder; replace with the real thing.
// ─────────────────────────────────────────────────────────────────────────────

export interface SkillGroup {
  label: { en: string; th: string }
  items: string[]
}

export interface SocialLink {
  label: string
  /** inline-svg key, see components/Icon.tsx */
  icon: 'github' | 'linkedin' | 'mail' | 'globe' | 'twitter' | 'facebook'
  url: string
}

export const profile = {
  // Public, already-known values
  username: 'Woraphon-S',
  githubUrl: 'https://github.com/Woraphon-S',

  // ✏️ TODO: personal details — tweak freely
  name: { en: 'Woraphon S.', th: 'วรพล ส.' },
  role: { en: 'Full-Stack Developer', th: 'นักพัฒนาฟูลสแตก' },

  // Short rotating taglines shown after the name (typewriter effect)
  roles: {
    en: ['Full-Stack Developer', 'AI App Builder', 'TypeScript Enjoyer', 'Problem Solver'],
    th: ['นักพัฒนาฟูลสแตก', 'สร้างแอป AI', 'สาย TypeScript', 'นักแก้ปัญหา'],
  },

  location: { en: 'Thailand', th: 'ประเทศไทย' },

  // ✏️ TODO: a 2-4 sentence "about me". Placeholder is intentionally generic —
  // rewrite it in your own voice.
  bio: {
    en: "I'm a full-stack developer from Thailand who loves turning ideas into shipped products. I work mostly with TypeScript across the stack — React/Next.js on the front, Node/NestJS on the back — and I enjoy wiring up AI features with Google Gemini. I care about clean architecture, real features, and software that actually works end-to-end.",
    th: 'ผมเป็นนักพัฒนาฟูลสแตกจากประเทศไทย ที่ชอบเปลี่ยนไอเดียให้กลายเป็นโปรดักต์ที่ใช้งานได้จริง ทำงานด้วย TypeScript เป็นหลักทั้งหน้าบ้านและหลังบ้าน — React/Next.js ฝั่งหน้า และ Node/NestJS ฝั่งหลัง ชอบต่อยอดฟีเจอร์ AI ด้วย Google Gemini ใส่ใจเรื่องสถาปัตยกรรมที่สะอาด ฟีเจอร์ที่ใช้ได้จริง และซอฟต์แวร์ที่ทำงานครบตั้งแต่ต้นจนจบ',
  },

  // ✏️ TODO: drop in a real photo URL (or leave '' to show an ASCII avatar)
  avatarUrl: 'https://avatars.githubusercontent.com/Woraphon-S',

  // ✏️ TODO: a contact email shown in the Contact section
  email: 'monaikaitsaman@gmail.com',

  // ✏️ TODO: links — add/remove as needed. Empty url => hidden.
  socials: [
    { label: 'GitHub', icon: 'github', url: 'https://github.com/Woraphon-S' },
    { label: 'Email', icon: 'mail', url: 'mailto:monaikaitsaman@gmail.com' },
    { label: 'LinkedIn', icon: 'linkedin', url: '' }, // TODO
  ] as SocialLink[],

  // ✏️ TODO: tune skill groups. These are aggregated from the featured projects.
  skills: [
    {
      label: { en: 'Languages', th: 'ภาษา' },
      items: ['TypeScript', 'JavaScript', 'SQL', 'C++'],
    },
    {
      label: { en: 'Frontend', th: 'หน้าบ้าน' },
      items: ['React', 'Next.js', 'React Native / Expo', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'TanStack Query'],
    },
    {
      label: { en: 'Backend', th: 'หลังบ้าน' },
      items: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'JWT Auth', 'Prisma', 'Raw SQL (pg)'],
    },
    {
      label: { en: 'Data & AI', th: 'ข้อมูล & AI' },
      items: ['PostgreSQL', 'PostGIS', 'MySQL', 'Google Gemini', 'Hexagonal Architecture'],
    },
    {
      label: { en: 'DevOps & Tools', th: 'DevOps & เครื่องมือ' },
      items: ['Docker', 'Docker Compose', 'Git', 'Vite', 'Vercel', 'Jest'],
    },
  ] as SkillGroup[],

  // Headline stats shown in the hero / about
  stats: {
    repos: 17,
    featured: 4,
    contributionsLastYear: 383,
  },
}
