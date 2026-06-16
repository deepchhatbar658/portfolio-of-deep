export interface Project {
  id: string
  title: string
  tag: string
  description: string
  image?: string
  icon?: string
  accent?: string
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
  image?: string
  text?: string
  href?: string
}
