import { Polaroid } from '@/components/ui/polaroid'
import { collageImages, rotations } from '@/data/about'

export function PolaroidStrip() {
  return (
    <div className="flex justify-center items-start flex-wrap sm:flex-nowrap overflow-visible gap-y-4">
      {collageImages.map((image, i) => {
        const rotate = rotations[i] ?? 0

        return (
          <div
            key={`${image}-${i}`}
            className="-mr-3 sm:-mr-4 md:-mr-6 last:mr-0 hover:z-10 relative"
          >
            <Polaroid image={image} index={i} rotate={rotate} />
          </div>
        )
      })}
    </div>
  )
}
