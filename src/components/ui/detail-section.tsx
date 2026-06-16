import { MdText } from './md-text'
import type { DetailSection } from '@/lib/markdown'

export function DetailSectionBlock({ section }: { section: DetailSection }) {
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
