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
    <nav className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md rounded-full shadow-lg px-1.5 sm:px-2 py-1.5 sm:py-2 flex items-center gap-0.5 sm:gap-1">
      {links.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          aria-current={currentPath === to ? 'page' : undefined}
          className={`text-xs sm:text-sm font-light tracking-wide transition-colors ${
            currentPath === to
              ? 'bg-white text-black rounded-full px-3 sm:px-4 py-1 sm:py-1.5 shadow-sm font-medium'
              : 'text-neutral-500 hover:text-neutral-800 px-3 sm:px-4 py-1 sm:py-1.5'
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
