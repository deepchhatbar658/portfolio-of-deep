import { SocialLink } from '@/components/ui/social-link'
import { socialLinks } from '@/data/about'

export function SocialLinks() {
  return (
    <div className="flex gap-6 mt-6 text-sm text-gray-600">
      {socialLinks.map((link) => (
        <SocialLink
          key={link.href}
          href={link.href}
          label={link.label}
          external={link.external}
        />
      ))}
    </div>
  )
}
