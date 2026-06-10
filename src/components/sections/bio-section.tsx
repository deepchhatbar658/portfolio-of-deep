import { bioParagraphs } from '@/data/about'

export function BioSection() {
  return (
    <div className="max-w-xl mt-6 text-sm text-gray-500 leading-relaxed">
      {bioParagraphs.map((text, i) => (
        <p key={i} className={i > 0 ? 'mt-4' : undefined}>
          {text}
        </p>
      ))}
    </div>
  )
}
