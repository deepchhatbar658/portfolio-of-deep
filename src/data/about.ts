import type { SocialLink, Company } from './types'

export const rotations: number[] = [-6, 4, -3, 5, -2, 6, -4, 3]

export const socialLinks: SocialLink[] = [
  { href: 'mailto:deepchhatbar658@gmail.com', label: 'Contact' },
  { href: 'https://linkedin.com/in/deep-chhatbara07772217', label: 'LinkedIn', external: true },
  { href: 'https://x.com/thephatcoder', label: 'X', external: true },
]

export const bioParagraphs: string[] = [
  'React Native Developer with 3.5+ years experience shipping 12+ Android/iOS apps to production. Currently at Giriraj Digital in Ahmedabad.',
  'Previously at Silent Infotech, where I led end-to-end mobile development across marketplaces, trading platforms, and ERP systems.',
]

export const companies: Company[] = [
  {
    name: 'Giriraj Digital',
    text: 'Giriraj Digital',
  },
  {
    name: 'Silent Infotech',
    text: 'Silent Infotech',
  },
  {
    name: 'More',
    text: '& More',
  },
]
