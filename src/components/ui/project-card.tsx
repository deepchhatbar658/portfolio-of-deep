import { Link } from '@tanstack/react-router'
import { PhoneFrame } from './phone-frame'
import type { Project } from '@/data/types'

interface ProjectCardProps {
  project: Project
  isActive: boolean
}

export function ProjectCard({ project, isActive }: ProjectCardProps) {
  return (
    <Link
      to="/project/$id"
      params={{ id: project.id }}
      className="snap-center shrink-0 transition-[transform,opacity] duration-500 ease-out motion-reduce:transition-none cursor-pointer"
      style={{
        transform: isActive ? 'scale(1.05)' : 'scale(0.95)',
        opacity: isActive ? 1 : 0.6,
      }}
    >
      <PhoneFrame isVideo={project.isVideo} noNotch={project.noNotch} />
    </Link>
  )
}
