import { Polaroid } from '@/components/ui/polaroid'
import { rotations } from '@/data/about'

export function PolaroidStrip() {
  return (
    <div className="flex justify-center items-start flex-wrap sm:flex-nowrap overflow-visible gap-y-4">
      {rotations.map((r, i) => (
        <div key={`${r}-${i}`} className="-mr-3 sm:-mr-4 md:-mr-6 last:mr-0 hover:z-10 relative">
          <Polaroid index={i} rotate={r} />
        </div>
      ))}
    </div>
  )
}
