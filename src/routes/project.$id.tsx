import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { getProjectDetail } from '../functions/project-detail.functions'
import { PhoneFrame } from '../components/ui/phone-frame'
import type { DetailSection } from '../lib/markdown'

export const Route = createFileRoute('/project/$id')({
  loader: async ({ params }) => {
    const data = await getProjectDetail({ data: { id: params.id } })
    if (!data.project) throw notFound()
    return data
  },
  component: ProjectDetail,
})

/** Renders text with **bold** markers converted to <strong> */
function MdText({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

function SectionBlock({ section }: { section: DetailSection }) {
  return (
    <section className="mt-12 sm:mt-16">
      <h2 className="text-xl sm:text-2xl font-light text-neutral-900 mb-4">
        {section.title}
      </h2>

      {section.paragraphs.map((p, j) => (
        <p key={j} className="text-neutral-600 leading-relaxed mb-4">
          <MdText text={p} />
        </p>
      ))}

      {section.items.length > 0 && (
        <ul className="space-y-3">
          {section.items.map((item, j) => (
            <li key={j} className="flex gap-3 text-neutral-600">
              <span className="text-neutral-300 mt-1 shrink-0 select-none">
                —
              </span>
              <span>
                <MdText text={item} />
              </span>
            </li>
          ))}
        </ul>
      )}

      {section.subSections?.map((sub, j) => (
        <div key={j} className="mt-8">
          <h3 className="text-lg font-normal text-neutral-800 mb-3">
            {sub.title}
          </h3>
          {sub.paragraphs.map((p, k) => (
            <p key={k} className="text-neutral-600 leading-relaxed mb-4">
              <MdText text={p} />
            </p>
          ))}
        </div>
      ))}
    </section>
  )
}

function ProjectDetail() {
  const { project, detail } = Route.useLoaderData()

  const displayTitle = detail?.title ?? project.title
  const displayTagline = detail?.tagline ?? project.tag
  const sections = detail?.sections ?? []
  const status = detail?.status

  // Collect all screenshots (skip duplicates with main image)
  const seen = new Set<string>()
  const screenshots = project.screenshots.filter((s) => {
    if (seen.has(s)) return false
    seen.add(s)
    return true
  })

  return (
    <main className="min-h-svh bg-[#f2f2f2] pb-20 sm:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Back link */}
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
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 12H5m0 0l7 7m-7-7l7-7"
            />
          </svg>
          Work
        </Link>

        {/* Header */}
        <div className="mt-8 sm:mt-12">
          {project.icon && (
            project.accent ? (
              <div
                className="w-12 h-12 rounded-xl mb-4 shadow-sm flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: project.accent }}
              >
                <img
                  src={project.icon}
                  alt=""
                  className="w-8 h-8 object-contain"
                  draggable={false}
                />
              </div>
            ) : (
              <img
                src={project.icon}
                alt=""
                className="w-12 h-12 rounded-xl mb-4 shadow-sm"
                draggable={false}
              />
            )
          )}

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

        {/* Screenshots Gallery */}
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

        {/* Fallback accent preview for projects with no screenshots */}
        {screenshots.length === 0 && project.accent && (
          <div className="mt-12 sm:mt-16 flex justify-center">
            <PhoneFrame accent={project.accent} />
          </div>
        )}

        {/* Markdown Sections */}
        {sections.map((section, i) => (
          <SectionBlock key={i} section={section} />
        ))}

        {/* Fallback description when no MD exists */}
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
