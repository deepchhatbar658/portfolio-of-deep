import type { SocialLink, Company } from './types'

export const rotations: number[] = [-6, 4, -3, 5, -2, 6, -4, 3]

export const collageImages: string[] = [
  '/projectAssets/collage/react.avif',
  '/projectAssets/collage/android.avif',
  '/projectAssets/collage/expo.svg',
  '/projectAssets/collage/icons8-nextjs-480.avif',
  '/projectAssets/collage/mongodb.avif',
  '/projectAssets/collage/tanstack.avif',
  '/projectAssets/collage/119793569.avif',
  '/projectAssets/collage/appstore.avif',
]

export const socialLinks: SocialLink[] = [
  { href: 'mailto:deepchhatbar658@gmail.com', label: 'Contact', icon: 'mail' },
  {
    href: '/resume',
    label: 'Resume',
    icon: 'resume',
  },
  {
    href: 'https://www.linkedin.com/in/deep-chhatbara07772217/',
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
    image: '/projectAssets/girirajdigital.avif',
    href: 'https://www.girirajdigital.com/',
  },
  {
    name: 'Silent Infotech',
    image: '/projectAssets/SilentInfotech.png',
    href: 'https://silentinfotech.com/',
  },
  {
    name: 'Speedbot',
    image: '/projectAssets/speedbot.avif',
    href: 'https://speedbot.tech/',
  },
]
