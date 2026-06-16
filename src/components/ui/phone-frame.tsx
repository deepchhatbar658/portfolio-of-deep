interface PhoneFrameProps {
  image?: string
  accent?: string
}

export function PhoneFrame({ image, accent }: PhoneFrameProps) {
  return (
    <div
      className="relative w-[180px] sm:w-[220px] md:w-[280px] aspect-[466/964] select-none"
      aria-hidden="true"
    >
      <div className="absolute inset-x-[4%] inset-y-[1.7%] rounded-[17px] overflow-hidden bg-gray-100">
        {image ? (
          <img
            src={image}
            alt=""
            width={280}
            height={580}
            className="w-full h-full object-cover object-top"
            draggable={false}
            loading="lazy"
            decoding="async"
          />
        ) : accent ? (
          <div className="w-full h-full" style={{ backgroundColor: accent }} />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
        )}
      </div>

      <img
        src="/iphone-frame.webp"
        alt=""
        width={280}
        height={580}
        className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
        draggable={false}
      />
    </div>
  )
}
