interface PhoneFrameProps {
  isVideo?: boolean;
  noNotch?: boolean;
  image?: string;
  accent?: string;
}

export function PhoneFrame({ isVideo, image, accent }: PhoneFrameProps) {
  return (
    <div
      className="relative w-[180px] sm:w-[220px] md:w-[280px] aspect-[466/964] select-none"
      aria-hidden="true"
    >
      {/* Screen content — clipped to fit inside the phone's screen area */}
      <div className="absolute inset-x-[4%] inset-y-[1.7%] rounded-[17px] overflow-hidden bg-gray-100">
        {image ? (
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover object-top"
            draggable={false}
            loading="lazy"
          />
        ) : isVideo ? (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        ) : accent ? (
          <div className="w-full h-full" style={{ backgroundColor: accent }} />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
        )}
      </div>

      {/* iPhone 16 Pro frame image overlay */}
      <img
        src="/iphone-frame.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
        draggable={false}
      />
    </div>
  );
}
