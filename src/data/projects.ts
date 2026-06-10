import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'meta',
    title: 'Meta',
    tag: 'Creation & GenAI tools for Facebook',
    isVideo: false,
  },
  {
    id: 'snacks',
    title: 'Snacks',
    tag: 'A personal project',
    isVideo: false,
  },
  {
    id: 'galaxy',
    title: 'Galaxy',
    tag: 'Modernizing commerce for social spaces',
    isVideo: false,
  },
  {
    id: 'snapmini',
    title: 'SnapMini',
    tag: 'Snapchat creative tool',
    isVideo: true,
  },
  {
    id: 'battledex',
    title: 'Battledex',
    tag: 'Side project',
    isVideo: true,
    noNotch: true,
  },
]
