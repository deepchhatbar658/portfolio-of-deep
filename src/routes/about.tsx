import { createFileRoute } from '@tanstack/react-router'
import { PolaroidStrip } from '../components/sections/polaroid-strip'
import { AboutHeading } from '../components/sections/about-heading'
import { SocialLinks } from '../components/sections/social-links'
import { BioSection } from '../components/sections/bio-section'
import { CompanyLogos } from '../components/sections/company-logos'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <main className="min-h-svh flex flex-col items-center px-4 py-16 bg-gray-50">
      <PolaroidStrip />
      <AboutHeading />
      <SocialLinks />
      <BioSection />
      <CompanyLogos />
    </main>
  )
}
