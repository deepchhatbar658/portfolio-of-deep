export interface DetailSection {
  level: number
  title: string
  items: string[]
  paragraphs: string[]
  subSections?: DetailSection[]
}

export interface ParsedDetail {
  title: string
  tagline: string
  sections: DetailSection[]
  status?: string
}

export function parseMarkdown(raw: string): ParsedDetail {
  const lines = raw.split('\n')
  let i = 0

  // Skip leading empty lines
  while (i < lines.length && lines[i].trim() === '') i++

  // Parse title (# ...)
  let title = ''
  if (i < lines.length && lines[i].startsWith('# ')) {
    title = lines[i].slice(2).trim()
    i++
  }

  // Skip empty lines
  while (i < lines.length && lines[i].trim() === '') i++

  // Parse tagline (### ...)
  let tagline = ''
  if (i < lines.length && lines[i].startsWith('### ')) {
    tagline = lines[i].slice(4).trim()
    i++
  }

  // Parse sections
  const sections: DetailSection[] = []
  let currentSection: DetailSection | null = null
  let currentSubSection: DetailSection | null = null
  let lastWasBullet = false
  let lastWasParagraph = false

  while (i < lines.length) {
    const rawLine = lines[i]
    const line = rawLine.trim()

    // Empty line
    if (line === '') {
      lastWasBullet = false
      lastWasParagraph = false
      i++
      continue
    }

    // ## Section
    if (line.startsWith('## ') && !line.startsWith('### ')) {
      currentSection = {
        level: 2,
        title: line.slice(3).trim(),
        items: [],
        paragraphs: [],
        subSections: [],
      }
      sections.push(currentSection)
      currentSubSection = null
      lastWasBullet = false
      lastWasParagraph = false
      i++
      continue
    }

    // ### Sub-section
    if (line.startsWith('### ')) {
      const subSection: DetailSection = {
        level: 3,
        title: line.slice(4).trim(),
        items: [],
        paragraphs: [],
      }
      if (currentSection) {
        if (!currentSection.subSections) currentSection.subSections = []
        currentSection.subSections.push(subSection)
        currentSubSection = subSection
      } else {
        // Standalone sub-section without parent
        currentSubSection = subSection
        sections.push(subSection)
      }
      lastWasBullet = false
      lastWasParagraph = false
      i++
      continue
    }

    // Bullet item
    if (line.startsWith('- ')) {
      const itemText = line.slice(2).trim()
      const target = currentSubSection || currentSection
      if (target) {
        target.items.push(itemText)
      }
      lastWasBullet = true
      lastWasParagraph = false
      i++
      continue
    }

    // Regular paragraph (non-empty, non-heading, non-bullet)
    const target = currentSubSection || currentSection
    if (target && line.length > 0) {
      if (lastWasBullet && target.items.length > 0) {
        // Continuation of previous bullet item
        target.items[target.items.length - 1] += ' ' + line
      } else if (lastWasParagraph && target.paragraphs.length > 0) {
        // Continuation of previous paragraph
        target.paragraphs[target.paragraphs.length - 1] += ' ' + line
      } else {
        target.paragraphs.push(line)
        lastWasParagraph = true
      }
    }
    lastWasBullet = false
    i++
  }

  // Extract status from last section if it's "Status"
  let status: string | undefined
  const lastSection = sections[sections.length - 1]
  if (
    lastSection &&
    lastSection.title === 'Status' &&
    lastSection.paragraphs.length > 0
  ) {
    status = lastSection.paragraphs.join(' ')
    // Remove Status section from display sections
    sections.pop()
  }

  return { title, tagline, sections, status }
}
