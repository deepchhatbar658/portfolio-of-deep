interface PolaroidProps {
  rotate: number
  index?: number
}

export function Polaroid({ rotate, index = 0 }: PolaroidProps) {
  return (
    <div
      className="bg-white rounded-sm p-2 pb-8 shadow-lg
        transition-all duration-[250ms] ease-out
        motion-reduce:transition-none
        hover:-translate-y-1.5 hover:scale-[1.03]"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div
        className="w-32 h-40 rounded-sm bg-cover bg-center"
        style={{
          backgroundImage: `url(https://picsum.photos/seed/polaroid${index}/200/250)`,
        }}
      />
    </div>
  )
}
