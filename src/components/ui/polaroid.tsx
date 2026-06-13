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
      className="bg-white rounded-sm p-1.5 pb-6 sm:p-2 sm:pb-7 md:pb-8 shadow-lg
        transition-all duration-[250ms] ease-out
      motion-reduce:transition-none
      hover:-translate-y-1.5 hover:scale-[1.03]"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <img
        src={image}
        alt={imageLabels[index] ?? 'Portfolio collage'}
        className="w-20 h-24 sm:w-28 sm:h-36 md:w-32 md:h-40 rounded-sm bg-gray-50 object-contain p-3"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}
