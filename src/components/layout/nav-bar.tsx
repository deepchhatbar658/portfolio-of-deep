import { Link } from '@tanstack/react-router'

interface NavLink {
  to: string
  label: string
}

interface NavBarProps {
  links: NavLink[]
  currentPath: string
}

export function NavBar({ links, currentPath }: NavBarProps) {
  return (
    <nav className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-0.5 sm:gap-1 rounded-full border border-white/60 bg-gradient-to-b from-white/45 via-white/25 to-white/15 px-1.5 sm:px-2 py-1.5 sm:py-2 shadow-[0_12px_40px_rgba(15,23,42,0.12),inset_0_1px_1px_rgba(255,255,255,0.95),inset_0_-1px_1px_rgba(255,255,255,0.3)] backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[55%] rounded-t-full bg-gradient-to-b from-white/60 to-transparent" aria-hidden="true" />
      {links.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          aria-current={currentPath === to ? 'page' : undefined}
          className={`relative z-10 overflow-hidden rounded-full text-xs sm:text-sm tracking-wide transition-all duration-300 ${
            currentPath === to
              ? 'bg-gradient-to-b from-white/80 via-white/50 to-white/30 px-3 sm:px-4 py-1 sm:py-1.5 font-medium text-gray-950 shadow-[0_2px_8px_rgba(15,23,42,0.08),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-1px_1px_rgba(255,255,255,0.5)] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[55%] before:rounded-t-full before:bg-gradient-to-b before:from-white/90 before:to-transparent'
              : 'px-3 sm:px-4 py-1 sm:py-1.5 font-light text-neutral-500 hover:text-neutral-800 hover:bg-white/20'
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
