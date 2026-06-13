export interface Project {
  id: string
  title: string
  tag: string
  description: string
  isVideo: boolean
  noNotch?: boolean
  image?: string
  icon?: string
  accent?: string
  assetFolder: string
  detailMd?: string
  screenshots: string[]
}

export interface NavLink {
  to: string
  label: string
}

export interface SocialLink {
  href: string
  label: string
  icon: 'mail' | 'linkedin' | 'x' | 'resume'
  external?: boolean
}

export interface Company {
  name: string
  svg?: string
  image?: string
  text?: string
  href?: string
}
