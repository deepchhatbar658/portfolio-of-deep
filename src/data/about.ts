import type { SocialLink, Company } from './types'

export const rotations: number[] = [-6, 4, -3, 5, -2, 6, -4, 3]

export const collageImages: string[] = [
  '/projectAssets/collage/react.png',
  '/projectAssets/collage/android.png',
  '/projectAssets/collage/expo.svg',
  '/projectAssets/collage/icons8-nextjs-480.png',
  '/projectAssets/collage/mongodb.png',
  '/projectAssets/collage/tanstack.png',
  '/projectAssets/collage/119793569.png',
  '/projectAssets/collage/appstore.webp',
]

export const socialLinks: SocialLink[] = [
  { href: 'mailto:deepchhatbar658@gmail.com', label: 'Contact', icon: 'mail' },
  {
    href: 'https://drive.google.com/file/d/1TpqBeJG6rbIWtydfZSrE6Kk8htxBmx7E/view?usp=sharing',
    label: 'Resume',
    icon: 'resume',
    external: true,
  },
  {
    href: 'https://linkedin.com/in/deep-chhatbara07772217',
    label: 'LinkedIn',
    icon: 'linkedin',
    external: true,
  },
  { href: 'https://x.com/thephatcoder', label: '@thephatcoder', icon: 'x', external: true },
]

export const bioParagraphs: string[] = [
  'React Native Developer with 3.5+ years experience shipping 12+ Android/iOS apps to production. Currently at Giriraj Digital in Ahmedabad.',
  'Previously at Silent Infotech, where I led end-to-end mobile development across marketplaces, trading platforms, and ERP systems.',
]

export const companies: Company[] = [
  {
    name: 'Giriraj Digital',
    image: '/projectAssets/girirajdigital.png',
    href: 'https://www.girirajdigital.com/',
  },
  {
    name: 'Silent Infotech',
    image: '/projectAssets/SilentInfotech.png',
    href: 'https://silentinfotech.com/',
  },
  {
    name: 'Speedbot',
    image: '/projectAssets/speedbot.png',
    href: 'https://speedbot.tech/',
  },
]
