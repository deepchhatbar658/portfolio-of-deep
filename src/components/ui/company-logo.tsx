interface CompanyLogoProps {
  name: string
  svgPaths: string
  text?: string
}

export function CompanyLogo({ name, svgPaths, text }: CompanyLogoProps) {
  if (text) {
    return <span className="text-sm text-gray-400">{text}</span>
  }

  return (
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
}
