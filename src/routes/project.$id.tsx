import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/project/$id')({
  component: ProjectDetail,
})

function ProjectDetail() {
  const { id } = Route.useParams()

  return (
    <main className="min-h-svh flex flex-col items-center justify-center px-4 sm:px-6">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4">
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </h1>
        <p className="text-gray-500 text-base sm:text-lg">
          Project detail page placeholder
        </p>
        <div className="mt-8 sm:mt-12 text-sm text-gray-400">
          Design coming soon
        </div>
      </div>
    </main>
  )
}
