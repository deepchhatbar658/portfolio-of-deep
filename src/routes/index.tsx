import { createFileRoute } from '@tanstack/react-router'
import { projects } from '../data/projects'
import { ProjectCarousel } from '../components/sections/project-carousel'

export const Route = createFileRoute('/')({
  component: Work,
})

function Work() {
  return (
    <main>
      <ProjectCarousel projects={projects} />
    </main>
  )
}
