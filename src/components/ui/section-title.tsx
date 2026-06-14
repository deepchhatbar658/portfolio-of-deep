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
      <div className="flex items-center justify-center gap-2 mb-3">
        {icon &&
          (accent ? (
            <div
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-md shadow-sm flex items-center justify-center overflow-hidden shrink-0"
              style={{ backgroundColor: accent }}
            >
              <img
                src={icon}
                alt=""
                className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                draggable={false}
                loading="lazy"
              />
            </div>
          ) : (
            <img
              src={icon}
              alt=""
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-md shadow-sm shrink-0"
              draggable={false}
              loading="lazy"
            />
          ))}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900">
          {title}
        </h2>
      </div>
      <p className="text-sm text-gray-500 tracking-wide">{subtitle}</p>
    </div>
  )
}
