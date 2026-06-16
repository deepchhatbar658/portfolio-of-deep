import type { ResumeJob } from '@/data/resume'

export function ResumeJobEntry({
  title,
  company,
  period,
  location,
  bullets,
}: ResumeJob) {
  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
        <h3 className="font-medium text-gray-900">
          {title} <span className="text-gray-500 font-normal"> {company}</span>
        </h3>
        <span className="text-xs text-gray-400">{period}</span>
      </div>
      <p className="text-xs text-gray-400 mt-0.5">{location}</p>
      <ul className="mt-2 space-y-1.5">
        {bullets.map((bullet, i) => (
          <li
            key={i}
            className="text-sm text-gray-600 leading-relaxed pl-3.5 relative before:content-[''] before:absolute before:left-0 before:text-gray-300"
          >
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  )
}
