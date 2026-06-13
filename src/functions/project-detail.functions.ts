import { createServerFn } from '@tanstack/react-start'
import { notFound } from '@tanstack/react-router'
import { projects } from '../data/projects'
import { getProjectDetailByFilename } from '../data/project-contents'
import type { ParsedDetail } from '../lib/markdown'
import type { Project } from '../data/types'

export interface ProjectDetailData {
  project: Project
  detail: ParsedDetail | null
}

export const getProjectDetail = createServerFn({ method: 'GET' })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }): Promise<ProjectDetailData> => {
    const project = projects.find((p) => p.id === data.id)
    if (!project) {
      throw notFound()
    }

    let detail: ParsedDetail | null = null
    if (project.detailMd) {
      detail = getProjectDetailByFilename(project.detailMd)
    }

    return { project, detail }
  })
