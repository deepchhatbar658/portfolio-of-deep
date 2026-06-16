export interface ResumeJob {
  title: string
  company: string
  period: string
  location: string
  bullets: string[]
}

export interface ResumeProject {
  name: string
  description: string
  bullets: string[]
}

export const resumeProfile =
  "React Native engineer with 3.5 years building production apps for enterprise and consumer markets. I go deep where most mobile devs stop native Android modules, BLE, background services, offline-first architecture and I've taken projects from zero to live on both stores."

export const resumeSkills: ReadonlyArray<{ label: string; items: string }> = [
  { label: "Languages", items: "TypeScript, JavaScript" },
  { label: "Frontend", items: "React Native, Expo, React, Next.js, TanStack Start" },
  { label: "Mobile Engineering", items: "New Architecture, Native Modules, BLE, Offline-First Apps, Background Services" },
  { label: "State & Storage", items: "Redux Toolkit, TanStack Query, MMKV" },
  { label: "Backend", items: "Node.js, Elysia.js, REST APIs, WebSockets" },
  { label: "Tools", items: "Xcode, Android Studio, App Store Connect, Play Console, Figma" },
]

export const resumeExperience: ResumeJob[] = [
  {
    title: "Software Engineer",
    company: "Giriraj Digital",
    period: "May 2025 – Present",
    location: "Ahmedabad, India",
    bullets: [
      "Delivered 8 production React Native + TypeScript apps across sales, field service, IoT, and marketing domains, serving 1000+ enterprise users across Play Store and App Store.",
      "Architected a cross-project frontend foundation  application-agnostic Redux store, extracted API layer as a reusable package, and a shared component/hook library via yalc, adopted across 3+ projects.",
      "Built an Android native call-logging overlay using BroadcastReceiver, ForegroundService, and SYSTEM_ALERT_WINDOW to render UI in killed app state  similar to Truecaller.",
      "Diagnosed a production UI lockup from AsyncStorage on a 10k-item payload; migrated to MMKV, drove backend pagination, optimized lists with FlashList, and integrated ML Kit for OCR-based odometer and face verification.",
    ],
  },
  {
    title: "Programmer Analyst",
    company: "Silent Infotech Pvt Ltd",
    period: "Jan 2023 – Apr 2025",
    location: "Ahmedabad, India",
    bullets: [
      "Led end-to-end development of a subscription-based clothing marketplace (React Native), from architecture through Play Store deployment.",
      "Optimized an automated trading platform by reducing bundle size by 50% and delivering key UI improvements.",
      "Migrated an ERP system from Ionic to React Native, integrating Redux and an offline-first architecture.",
      "Built a cross-platform Expo app (Android, iOS, web) with a dedicated NPM package encapsulating API services, Redux Persist state, and modular UI components including kanban, tree, and form views.",
    ],
  },
]

export const resumeProjects: ResumeProject[] = [
  {
    name: "Prompt to Figma",
    description:
      "AI-powered Figma plugin converting natural language prompts into production-ready designs via LLM APIs.",
    bullets: [
      "Built a TypeScript rendering engine supporting 8 node types with full styling, gradients, effects, Auto Layout, and a two-pass hierarchy builder for reusable component systems.",
      "Architected a CORS-free bridge pattern where the UI iframe posts AI requests to the main thread for CORS-free fetch and figma.clientStorage persistence.",
      "Added a Node.js smoke test suite in a VM harness that validates the entire bridge and asserts no direct fetch from UI.",
    ],
  },
  {
    name: "Freshina DMS",
    description:
      "Enterprise dairy supply chain CRM serving 100+ field agents across India. React Native 0.80, TypeScript, Redux Toolkit, Kotlin, Frappe/ERPNext.",
    bullets: [
      "Built a real-time driver tracking module with a custom Kotlin Android foreground service, Room DB offline cache, WorkManager retry queues, and Ola Maps SDK with encoded polyline decoding.",
      "Architected a scalable Redux generic slice factory with centralized API middleware and Redux Persist. Integrated 450+ Frappe/ERPNext endpoints with dual CSRF + token auth.",
    ],
  },
]

export const resumeEducation =
  "B.E. Information Technology SSGEC Bhavnagar, 2023 · CGPA 8.0"

export const resumeContact = {
  email: "deepchhatbar658@gmail.com",
  emailHref: "mailto:deepchhatbar658@gmail.com",
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/deep-chhatbara07772217/",
  },
  github: {
    label: "Github",
    href: "https://github.com/deepchhatbar658",
  },
  location: "Ahmedabad",
}
