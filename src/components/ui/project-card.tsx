import { useNavigate } from '@tanstack/react-router'
import { PhoneFrame } from './phone-frame'
import type { Project } from '@/data/types'

interface ProjectCardProps {
  project: Project
  isActive: boolean
  onActivate: () => void
}

export function ProjectCard({ project, isActive, onActivate }: ProjectCardProps) {
  const navigate = useNavigate()

  const handleActivate = () => {
    if (isActive) {
      navigate({ to: '/project/$id', params: { id: project.id } })
    } else {
      onActivate()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleActivate()
    }
  }

  return (
    <button
      type="button"
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
      aria-label={`${project.title}${isActive ? ', view project details' : ', select project'}`}
      className="snap-center shrink-0 transition-[transform,opacity] duration-500 ease-out motion-reduce:transition-none cursor-pointer appearance-none bg-transparent border-0 p-0"
      style={{
        transform: isActive ? 'scale(1.05)' : 'scale(0.95)',
        opacity: isActive ? 1 : 0.6,
      }}
    >
      <PhoneFrame
        image={project.image}
        accent={project.accent}
      />
    </button>
  )
}
