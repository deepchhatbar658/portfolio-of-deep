import { useCallback, useEffect, useRef, useState } from 'react'
import type { Project } from '@/data/types'
import { ProjectCard } from '@/components/ui/project-card'
import { SectionTitle } from '@/components/ui/section-title'

interface ProjectCarouselProps {
  projects: Project[]
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Cross-fade state for title/tag
  const [displayedTitle, setDisplayedTitle] = useState(projects[0]?.title ?? '')
  const [displayedTag, setDisplayedTag] = useState(projects[0]?.tag ?? '')
  const [isFading, setIsFading] = useState(false)
  const fadeRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  const handleScroll = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const { scrollLeft, clientWidth } = container
    const center = scrollLeft + clientWidth / 2
    const items = container.children
    let closest = 0
    let minDist = Infinity

    for (let i = 0; i < items.length; i++) {
      const item = items[i] as HTMLElement
      const itemCenter = item.offsetLeft + item.offsetWidth / 2
      const dist = Math.abs(center - itemCenter)
      if (dist < minDist) {
        minDist = dist
        closest = i
      }
    }

    setActiveIndex(closest)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => container.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const active = projects[activeIndex]

  // Cross-fade title/tag when active project changes
  useEffect(() => {
    if (!active) return
    if (active.title === displayedTitle && active.tag === displayedTag) return

    // Fade out
    setIsFading(true)
    clearTimeout(fadeRef.current)
    fadeRef.current = setTimeout(() => {
      setDisplayedTitle(active.title)
      setDisplayedTag(active.tag)
      // Fade in
      requestAnimationFrame(() => {
        setIsFading(false)
      })
    }, 300)

    return () => clearTimeout(fadeRef.current)
  }, [active?.title, active?.tag])

  return (
    <div className="flex flex-col items-center min-h-svh justify-center py-16">
      <div
        ref={containerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Project showcase"
        className="flex overflow-x-auto snap-x snap-mandatory gap-12 px-[calc(50vw-160px)] w-full py-8"
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            isActive={i === activeIndex}
          />
        ))}
      </div>

      <div className="text-center mt-8" aria-live="polite" aria-atomic="true">
        <SectionTitle
          title={displayedTitle}
          subtitle={displayedTag}
          isFading={isFading}
        />
      </div>
    </div>
  )
}
