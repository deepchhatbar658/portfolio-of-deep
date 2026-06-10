import { CompanyLogo } from '@/components/ui/company-logo'
import { companies } from '@/data/about'

export function CompanyLogos() {
  return (
    <div className="flex items-center gap-8 mt-8 text-gray-400">
      {companies.map((company) => (
        <CompanyLogo
          key={company.name}
          name={company.name}
          svgPaths={company.svg ?? ''}
          text={company.text}
        />
      ))}
    </div>
  )
}
