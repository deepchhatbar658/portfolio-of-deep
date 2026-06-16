import { FileText, Linkedin, Mail, X } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import type { ComponentType } from 'react'
import { glassChipClass } from './glass-chip'

interface SocialLinkProps {
  href: string
  label: string
  icon: 'mail' | 'linkedin' | 'x' | 'resume'
  external?: boolean
}

const icons: Record<SocialLinkProps['icon'], ComponentType<{ className?: string }>> = {
  mail: Mail,
  resume: FileText,
  linkedin: Linkedin,
  x: X,
}

export function SocialLink({ href, label, icon, external }: SocialLinkProps) {
  const Icon = icons[icon]

  if (href.startsWith('/') && !external) {
    return (
      <Link
        to={href}
        aria-label={label}
        className={glassChipClass}
      >
        <Icon className="relative z-10 size-4 drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]" aria-hidden="true" />
        <span className="relative z-10">{label}</span>
      </Link>
    )
  }

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className={glassChipClass}
    >
      <Icon className="relative z-10 size-4 drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]" aria-hidden="true" />
      <span className="relative z-10">{label}</span>
    </a>
  )
}
