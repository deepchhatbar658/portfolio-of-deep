import { createFileRoute } from '@tanstack/react-router'
import { projects } from '../data/projects'
import { ProjectCarousel } from '../components/sections/project-carousel'
import { SITE_URL } from '../data/site'

export const Route = createFileRoute('/work')({
  component: Work,
  head: () => ({
    meta: [
      { title: 'Work — Deep Chhatbar' },
      {
        name: 'description',
        content:
          'Selected React Native projects: workforce, field service, ecommerce, spiritual content, trading, and CRM.',
      },
      { property: 'og:title', content: 'Work — Deep Chhatbar' },
      {
        property: 'og:description',
        content:
          'Selected React Native projects: workforce, field service, ecommerce, spiritual content, trading, and CRM.',
      },
      { property: 'og:url', content: `${SITE_URL}/work` },
    ],
    links: [{ rel: 'canonical', href: `${SITE_URL}/work` }],
  }),
})

function Work() {
  return (
    <main>
      <ProjectCarousel projects={projects} />
    </main>
  )
}
