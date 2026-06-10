interface SectionTitleProps {
  title: string
  subtitle: string
  isFading: boolean
}

export function SectionTitle({ title, subtitle, isFading }: SectionTitleProps) {
  return (
    <div
      className="transition-opacity duration-300 motion-reduce:transition-none"
      style={{ opacity: isFading ? 0 : 1 }}
    >
      <h2 className="text-3xl font-light text-gray-900">{title}</h2>
      <p className="text-sm text-gray-500 mt-1 tracking-wide">{subtitle}</p>
    </div>
  )
}
