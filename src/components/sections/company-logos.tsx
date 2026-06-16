import { CompanyLogo } from '@/components/ui/company-logo'
import { companies } from '@/data/about'

export function CompanyLogos() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 text-gray-400">
      {companies.map((company) => (
        <CompanyLogo
          key={company.name}
          name={company.name}
          image={company.image}
          text={company.text}
          href={company.href}
        />
      ))}
    </div>
  )
}
