import { SocialLink } from '@/components/ui/social-link'
import { socialLinks } from '@/data/about'

export function SocialLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-5 sm:mt-6 text-sm text-gray-600">
      {socialLinks.map((link) => (
        <SocialLink
          key={link.href}
          href={link.href}
          label={link.label}
          icon={link.icon}
          external={link.external}
        />
      ))}
    </div>
  )
}
