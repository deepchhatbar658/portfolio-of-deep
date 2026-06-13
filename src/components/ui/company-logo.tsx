interface CompanyLogoProps {
  name: string
  svgPaths: string
  image?: string
  text?: string
  href?: string
}

const chipClassName =
  'group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/70 bg-gradient-to-br from-white/55 via-white/30 to-white/15 px-3.5 py-2 text-sm font-medium text-gray-700 shadow-[0_10px_32px_rgba(15,23,42,0.1),inset_0_1px_1px_rgba(255,255,255,0.95),inset_0_-1px_1px_rgba(255,255,255,0.35)] backdrop-blur-2xl transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-[55%] before:rounded-t-full before:bg-gradient-to-b before:from-white/70 before:to-transparent before:opacity-90 after:absolute after:-left-10 after:top-0 after:h-full after:w-10 after:-skew-x-12 after:bg-gradient-to-r after:from-transparent after:via-white/50 after:to-transparent after:blur-[2px] after:transition-transform after:duration-700 hover:-translate-y-0.5 hover:border-white/90 hover:bg-gradient-to-br hover:from-white/70 hover:via-white/40 hover:to-white/25 hover:text-gray-950 hover:shadow-[0_16px_42px_rgba(15,23,42,0.14),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-1px_1px_rgba(255,255,255,0.45)] hover:after:translate-x-40'

export function CompanyLogo({ name, svgPaths, image, text, href }: CompanyLogoProps) {
  if (text) {
    return <span className="text-sm text-gray-400">{text}</span>
  }

  const chipContent = image ? (
    <>
      <img
        src={image}
        alt=""
        className="relative z-10 size-6 rounded-full bg-white/70 object-contain ring-1 ring-white/80 drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]"
        loading="lazy"
        decoding="async"
      />
      <span className="relative z-10">{name}</span>
    </>
  ) : (
    <svg
      aria-label={name}
      className="w-5 h-5 text-gray-400"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: svgPaths }}
    />
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        className={chipClassName}
      >
        {chipContent}
      </a>
    )
  }

  return <div className={chipClassName}>{chipContent}</div>
}
