import { parseMarkdown } from '../lib/markdown'
import type { ParsedDetail } from '../lib/markdown'

// Load all MD files from public/projectAssets as raw strings at build time
const mdModules = import.meta.glob<string>(
  '../../public/projectAssets/**/*.md',
  { query: '?raw', import: 'default', eager: true },
)

// Parse all MD files into a lookup map keyed by filename (without path)
const detailMap = new Map<string, ParsedDetail>()

for (const [path, raw] of Object.entries(mdModules)) {
  if (!raw || raw.trim() === '') continue
  const filename = path.split('/').pop() ?? ''
  const parsed = parseMarkdown(raw)
  detailMap.set(filename, parsed)
}

/**
 * Get pre-parsed project detail by the MD filename (e.g. 'promptmate.md')
 */
export function getProjectDetailByFilename(
  mdFilename: string,
): ParsedDetail | null {
  return detailMap.get(mdFilename) ?? null
}
