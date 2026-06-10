interface SocialLinkProps {
  href: string
  label: string
  external?: boolean
}

export function SocialLink({ href, label, external }: SocialLinkProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline underline-offset-2 transition-colors"
      >
        {label}
      </a>
    )
  }

  return (
    <a href={href} className="hover:underline underline-offset-2 transition-colors">
      {label}
    </a>
  )
}
