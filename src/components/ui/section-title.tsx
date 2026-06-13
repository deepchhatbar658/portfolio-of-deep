interface SectionTitleProps {
  title: string
  subtitle: string
  isFading: boolean
  icon?: string
  accent?: string
}

export function SectionTitle({
  title,
  subtitle,
  isFading,
  icon,
  accent,
}: SectionTitleProps) {
  return (
    <div
      className="transition-opacity duration-300 motion-reduce:transition-none"
      style={{ opacity: isFading ? 0 : 1 }}
    >
      {icon &&
        (accent ? (
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl mx-auto mb-3 shadow-sm flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: accent }}
          >
            <img
              src={icon}
              alt=""
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
              draggable={false}
              loading="lazy"
            />
          </div>
        ) : (
          <img
            src={icon}
            alt=""
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl mx-auto mb-3 shadow-sm"
            draggable={false}
            loading="lazy"
          />
        ))}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900">
        {title}
      </h2>
      <p className="text-sm text-gray-500 mt-1 tracking-wide">{subtitle}</p>
    </div>
  )
}
