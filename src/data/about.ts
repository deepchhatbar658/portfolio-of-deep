import type { SocialLink, Company } from './types'

export const rotations: number[] = [-6, 4, -3, 5, -2, 6, -4, 3]

export const socialLinks: SocialLink[] = [
  { href: 'mailto:hello@thano.net', label: 'Contact' },
  { href: 'https://linkedin.com/in/thanosipsis', label: 'LinkedIn', external: true },
  { href: 'https://x.com/thanosipsis', label: 'X', external: true },
]

export const bioParagraphs: string[] = [
  'Currently a product designer at Meta where I work on building creative tools and experiences for Facebook Stories, Feed, and Reels.',
  'Previously I was a designer at Daybreak, where I built 0 → 1 consumer products in Web3, AR, social networks, and more.',
]

export const companies: Company[] = [
  {
    name: 'Meta',
    svg: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /><path d="M8 12h8" /><path d="M12 8v8" />',
  },
  {
    name: 'Microsoft',
    svg: '<rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />',
  },
  {
    name: 'Snapchat',
    svg: '<path d="M12 2C9 2 5 5 5 10c0 3.5 2 6 3 7l2 3h4l2-3c1-1 3-3.5 3-7 0-5-4-8-7-8z" /><circle cx="9" cy="10" r="1.5" fill="currentColor" /><circle cx="15" cy="10" r="1.5" fill="currentColor" /><path d="M9 14c1.5 1 4.5 1 6 0" strokeWidth="1.5" />',
  },
  {
    name: 'More',
    text: '& More',
  },
]
