interface PolaroidProps {
  rotate: number
  image: string
  index?: number
}

const imageLabels = [
  'React',
  'Android',
  'Expo',
  'Next.js',
  'MongoDB',
  'TanStack',
  'Mobile engineering',
  'App Store',
]

export function Polaroid({ rotate, image, index = 0 }: PolaroidProps) {
  return (
    <div
      className="bg-white rounded-sm p-1 pb-4 sm:p-1.5 sm:pb-5 md:pb-6 shadow-lg
        transition-all duration-[250ms] ease-out
      motion-reduce:transition-none
      hover:-translate-y-1.5 hover:scale-[1.03]"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <img
        src={image}
        alt={imageLabels[index] ?? 'Portfolio collage'}
        className="w-14 h-16 sm:w-20 sm:h-24 md:w-24 md:h-28 rounded-sm bg-gray-50 object-contain p-2"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}
