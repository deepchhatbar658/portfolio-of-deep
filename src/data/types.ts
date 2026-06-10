export interface Project {
  id: string
  title: string
  tag: string
  isVideo: boolean
  noNotch?: boolean
}

export interface NavLink {
  to: string
  label: string
}

export interface SocialLink {
  href: string
  label: string
  external?: boolean
}

export interface Company {
  name: string
  svg?: string
  text?: string
}
