import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { getProjectDetail } from '../functions/project-detail.functions'
import { PhoneFrame } from '../components/ui/phone-frame'
import { DetailSectionBlock } from '../components/ui/detail-section'
import { SITE_URL } from '../data/site'

export const Route = createFileRoute('/project/$id')({
  loader: async ({ params }) => {
    const data = await getProjectDetail({ data: { id: params.id } })
    if (!data.project) throw notFound()
    return data
  },
  notFoundComponent: ProjectNotFound,
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: 'Project not found — Deep Chhatbar' }] }
    const { project, detail } = loaderData
    const title = `${detail?.title ?? project.title} — Deep Chhatbar`
    const description = detail?.tagline ?? project.tag
    const url = `${SITE_URL}/project/${project.id}`
    const image = project.icon ? `${SITE_URL}${project.icon}` : `${SITE_URL}/og-image.png`
    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: url },
        { property: 'og:type', content: 'article' },
        { property: 'og:image', content: image },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image },
      ],
      links: [{ rel: 'canonical', href: url }],
    }
  },
  component: ProjectDetail,
})

function ProjectNotFound() {
  return (
    <main className="min-h-svh flex flex-col items-center justify-center px-4 bg-[#f2f2f2]">
      <h1 className="text-2xl font-light text-neutral-900">Project not found</h1>
      <p className="mt-2 text-sm text-neutral-500">
        The project you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        to="/work"
        className="mt-6 inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-800 transition-colors"
      >
        ← Back to work
      </Link>
    </main>
  )
}

function ProjectDetail() {
  const { project, detail } = Route.useLoaderData()

  const displayTitle = detail?.title ?? project.title
  const displayTagline = detail?.tagline ?? project.tag
  const sections = detail?.sections ?? []
  const status = detail?.status

  const seen = new Set<string>()
  const screenshots = project.screenshots.filter((s) => {
    if (seen.has(s)) return false
    seen.add(s)
    return true
  })

  return (
    <main className="min-h-svh bg-[#f2f2f2] pb-20 sm:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-800 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 12H5m0 0l7 7m-7-7l7-7"
            />
          </svg>
          Work
        </Link>

        <div className="mt-8 sm:mt-12">
          {project.icon &&
            (project.accent ? (
              <div
                className="w-12 h-12 rounded-xl mb-4 shadow-sm flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: project.accent }}
              >
                <img
                  src={project.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="w-8 h-8 object-contain"
                  draggable={false}
                />
              </div>
            ) : (
              <img
                src={project.icon}
                alt=""
                width={48}
                height={48}
                className="w-12 h-12 rounded-xl mb-4 shadow-sm"
                draggable={false}
              />
            ))}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900">
            {displayTitle}
          </h1>
          <p className="text-neutral-500 text-base sm:text-lg mt-3 max-w-xl">
            {displayTagline}
          </p>

          {status && (
            <span className="inline-block mt-4 px-3 py-1 text-xs rounded-full bg-neutral-200/60 text-neutral-600">
              {status}
            </span>
          )}
        </div>

        {screenshots.length > 0 && (
          <div className="mt-12 sm:mt-16">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 py-2 -mx-4 sm:-mx-6 px-4 sm:px-6">
              {screenshots.map((src, i) => (
                <div key={i} className="snap-center shrink-0">
                  <PhoneFrame image={src} />
                </div>
              ))}
            </div>
          </div>
        )}

        {screenshots.length === 0 && project.accent && (
          <div className="mt-12 sm:mt-16 flex justify-center">
            <PhoneFrame accent={project.accent} />
          </div>
        )}

        {sections.map((section, i) => (
          <DetailSectionBlock key={i} section={section} />
        ))}

        {sections.length === 0 && (
          <section className="mt-12 sm:mt-16">
            <p className="text-neutral-600 leading-relaxed">
              {project.description}
            </p>
          </section>
        )}
      </div>
    </main>
  )
}
