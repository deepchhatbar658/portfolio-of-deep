import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'promptmate',
    title: 'PromptMate',
    tag: 'Workforce & Field Service Operations Platform',
    description:
      'A dual-domain mobile app uniting employee self-service (attendance, payroll, leave, expenses) with field service management (service calls, spare parts, stock operations, and technical helpdesk) into a single native experience.',
    image: '/projectAssets/promptmate/dashboard.png',
    icon: '/projectAssets/promptmate/icon.png',
    detailMd: 'promptmate.md',
    screenshots: [
      '/projectAssets/promptmate/dashboard.png',
      '/projectAssets/promptmate/calllog.jpg',
      '/projectAssets/promptmate/drawer.png',
      '/projectAssets/promptmate/servicecall.png',
      '/projectAssets/promptmate/splash.png',
    ],
  },
  {
    id: 'trakntrac',
    title: 'TraknTrac',
    tag: 'Live weight capture for production floors',
    description:
      'A React Native field application for industrial batch-processing operations. Floor supervisors track production lots through sequential stages, capture crate weights via connected IoT scales, and assign workers by scanning QR badges.',
    image: '/projectAssets/trakntrac/startcapturing.png',
    icon: '/projectAssets/trakntrac/icon.png',
    detailMd: 'trakntrac.md',
    screenshots: [
      '/projectAssets/trakntrac/startcapturing.png',
      '/projectAssets/trakntrac/connectivityAccess.png',
      '/projectAssets/trakntrac/sideDrawre.png',
      '/projectAssets/trakntrac/splash.png',
    ],
  },
  {
    id: 'quickpost',
    title: 'QuickPost',
    tag: 'Social Media Posters for Businesses',
    description:
      'A cross-platform mobile app that helps small businesses and brands discover, customize, and share social media posters for festivals, holidays, and brand promotions.',
    image: '/projectAssets/quick-post/home.png',
    icon: '/projectAssets/quick-post/icon.png',
    accent: '#6546F2',
    detailMd: 'quickpost.md',
    screenshots: [
      '/projectAssets/quick-post/home.png',
      '/projectAssets/quick-post/bussiness.png',
      '/projectAssets/quick-post/createFrame.png',
      '/projectAssets/quick-post/splash.png',
    ],
  },
  {
    id: 'jnkdairy',
    title: 'JNK Dairy',
    tag: 'Workforce Attendance Platform',
    description:
      'A React Native mobile application for workforce attendance and HR operations at a large dairy cooperative, designed for rural collection centers with inconsistent network conditions.',
    image: '/projectAssets/jnkdairy/dashboard.png',
    icon: '/projectAssets/jnkdairy/icon.png',
    detailMd: 'jnk-dairy.md',
    screenshots: [
      '/projectAssets/jnkdairy/dashboard.png',
      '/projectAssets/jnkdairy/calendar.png',
      '/projectAssets/jnkdairy/leaves.png',
      '/projectAssets/jnkdairy/splash.png',
    ],
  },
  {
    id: 'pushtisanskar-dham',
    title: 'Pushtisanskar Dham',
    tag: 'Spiritual Content & Commerce Platform',
    description:
      'A React Native mobile app serving a spiritual community with multilingual content (audio discourses, video events, digital books, live streams), community engagement tools, and a full ecommerce flow with donations.',
    image: '/projectAssets/pushtisanskarDham/dashboard.png',
    icon: '/projectAssets/pushtisanskarDham/icon.png',
    detailMd: 'pushtisanskar.md',
    screenshots: [
      '/projectAssets/pushtisanskarDham/dashboard.png',
      '/projectAssets/pushtisanskarDham/audioplayer.png',
      '/projectAssets/pushtisanskarDham/selectLanguage.png',
      '/projectAssets/pushtisanskarDham/shop.png',
    ],
  },
  {
    id: 'pushtisanskar-pathshala',
    title: 'Pushtisanskar Pathshala',
    tag: 'Dual-Role LMS & Operations Platform',
    description:
      'A mobile platform for a Pushtimarg religious-education institution, serving students enrolled in pathshala courses and sanchalaks managing batches, attendance, examinations, and e-commerce.',
    image: '/projectAssets/pushtisanskarPathshala/mycourse.jpg',
    icon: '/projectAssets/pushtisanskarPathshala/icon.png',
    detailMd: 'pushtisanskar-pathshala.md',
    screenshots: [
      '/projectAssets/pushtisanskarPathshala/mycourse.jpg',
      '/projectAssets/pushtisanskarPathshala/courseDetail.jpg',
      '/projectAssets/pushtisanskarPathshala/pushtisanskarDham.jpg',
      '/projectAssets/pushtisanskarPathshala/pushtisanskardhamdashboard.jpg',
    ],
  },
  {
    id: 'speedbot',
    title: 'SpeedBot',
    tag: 'Algorithmic trading & backtesting',
    description:
      'A mobile app for monitoring market data, running algorithmic strategies, and backtesting portfolios against historical market data.',
    image: '/projectAssets/speedbot/market.webp',
    icon: '/projectAssets/speedbot/icon.webp',
    screenshots: [
      '/projectAssets/speedbot/market.webp',
      '/projectAssets/speedbot/marketdetail.webp',
    ],
  },
  {
    id: 'freshina',
    title: 'Freshina',
    tag: 'Field-force CRM with live tracking',
    description:
      'A cross-platform mobile CRM for food-distribution field teams managing leads, orders, deliveries, fleet, and expenses, backed by Frappe/ERPNext.',
    accent: '#e3f2fd',
    icon: '/projectAssets/freshina/icon.png',
    detailMd: 'freshina.md',
    screenshots: [],
  },
]
