// ─────────────────────────────────────────────────────────────────────────────
//  OWNER PROFILE  —  ✏️  EDIT ME
//  This is the only file you need to touch to put your personal details in.
//  Everything marked TODO is a safe placeholder; replace with the real thing.
// ─────────────────────────────────────────────────────────────────────────────

export interface ExperienceEntry {
  company: string
  role: string
  type: 'internship' | 'part-time' | 'full-time'
  period: string
  description: string
  tech: string[]
  image?: string
  url?: string
}

export interface EducationEntry {
  school: string
  degree: string
  period: string
  note?: string
  logo?: string
}

export interface SkillItem {
  name: string
  /** simple-icons slug — rendered as a theme-tinted CDN icon */
  slug?: string
  /** fallback local Icon.tsx name when no brand slug exists */
  localIcon?: string
}

export interface SkillGroup {
  label: { en: string; th: string }
  items: SkillItem[]
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
  name: { en: 'Woraphon Saraphon', th: 'วรพล สาระผล' },
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

  // Profile photo (local file in public/images). Leave '' to show an ASCII avatar.
  avatarUrl: '/images/me.jpg',

  // Age (years) — shown in the About section.
  age: 23,

  // Contact details shown in the Get In Touch section
  email: 'monaikaitsaman@gmail.com',
  phone: '0622873086',
  lineId: 'x-size',

  // ✏️ TODO: links — add/remove as needed. Empty url => hidden.
  socials: [
    { label: 'GitHub', icon: 'github', url: 'https://github.com/Woraphon-S' },
    { label: 'Email', icon: 'mail', url: 'mailto:monaikaitsaman@gmail.com' },
    { label: 'LinkedIn', icon: 'linkedin', url: '' }, // TODO
  ] as SocialLink[],

  // Skill groups — shown in the Tech Stack section with brand icons.
  skills: [
    {
      label: { en: 'Languages', th: 'ภาษา' },
      items: [
        { name: 'TypeScript', slug: 'typescript' },
        { name: 'JavaScript', slug: 'javascript' },
        { name: 'SQL', localIcon: 'database' },
        { name: 'C++', slug: 'cplusplus' },
      ],
    },
    {
      label: { en: 'Frontend', th: 'หน้าบ้าน' },
      items: [
        { name: 'React', slug: 'react' },
        { name: 'Next.js', slug: 'nextdotjs' },
        { name: 'React Native', slug: 'react' },
      ],
    },
    {
      label: { en: 'Backend', th: 'หลังบ้าน' },
      items: [
        { name: 'Node.js', slug: 'nodedotjs' },
        { name: 'NestJS', slug: 'nestjs' },
        { name: 'Bun', slug: 'bun' },
      ],
    },
    {
      label: { en: 'Database', th: 'ฐานข้อมูล' },
      items: [
        { name: 'PostgreSQL', slug: 'postgresql' },
        { name: 'MySQL', slug: 'mysql' },
        { name: 'MongoDB', slug: 'mongodb' },
      ],
    },
    {
      label: { en: 'DevOps & Tools', th: 'DevOps & เครื่องมือ' },
      items: [
        { name: 'Docker', slug: 'docker' },
        { name: 'Git / GitHub', slug: 'github' },
        { name: 'Postman', slug: 'postman' },
        { name: 'VPS', localIcon: 'server' },
        { name: 'CLI', localIcon: 'terminal' },
      ],
    },
  ] as SkillGroup[],

  experience: [
    {
      company: 'Ornanong Accounting and Audit Office Co., Ltd.',
      role: 'IT Intern',
      type: 'internship',
      period: 'Nov 2025 – present',
      description:
        'Interning as an IT specialist at an accounting and audit firm — developing internal software tools and web applications to streamline office workflows, while also handling day-to-day IT infrastructure including hardware setup, troubleshooting, and maintaining workstations and network equipment across the organization.',
      tech: ['React', 'Node.js', 'JavaScript', 'PHP', 'MySQL', 'IT Support'],
      image: '/images/int/work1.jpg',
    },
    {
      company: 'Bangchak',
      role: 'Customer Service',
      type: 'part-time',
      period: 'Mar 2023 – Feb 2024',
      description:
        'Worked part-time as a fuel station attendant — handling customer transactions, operating fuel dispensers, and maintaining station cleanliness. Built strong communication and stress-management skills through high-volume, fast-paced customer interactions in both day and night shifts.',
      tech: ['Customer Service', 'Cash Handling', 'Teamwork', 'Problem Solving'],
      image: '/images/exp/bangchak.jpg',
    },
  ] as ExperienceEntry[],

  education: [
    {
      school: 'Pibulsongkram Rajabhat University',
      degree: 'Bachelor of Science — Information Technology',
      period: '2021 – 2025',
      note: 'GPA 3.56',
      logo: '/images/psru-logo.png',
    },
    {
      school: 'Saingam Pittayakom School',
      degree: 'High School — Arts & Korean Language',
      period: '2018 – 2021',
      note: 'GPA 2.75',
      logo: '/images/trairongam-logo.png',
    },
  ] as EducationEntry[],

  // Headline stats shown in the hero / about
  stats: {
    featured: 4,
    contributionsLastYear: 383,
  },
}
