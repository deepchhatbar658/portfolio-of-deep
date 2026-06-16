import type { ReactNode } from 'react'

interface ResumeSectionProps {
  title: string
  children: ReactNode
}

export function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className="mt-8 sm:mt-10">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-4">
        {title}
      </h2>
      {children}
    </section>
  )
}
