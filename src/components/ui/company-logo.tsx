import { glassChipClass } from './glass-chip'

interface CompanyLogoProps {
  name: string
  image?: string
  text?: string
  href?: string
}

export function CompanyLogo({ name, image, text, href }: CompanyLogoProps) {
  if (text) {
    return <span className="text-sm text-gray-400">{text}</span>
  }

  const chipContent = (
    <>
      <img
        src={image}
        alt=""
        width={24}
        height={24}
        className="relative z-10 size-6 rounded-full bg-white/70 object-contain ring-1 ring-white/80 drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]"
        loading="lazy"
        decoding="async"
      />
      <span className="relative z-10">{name}</span>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        className={glassChipClass}
      >
        {chipContent}
      </a>
    )
  }

  return <div className={glassChipClass}>{chipContent}</div>
}
