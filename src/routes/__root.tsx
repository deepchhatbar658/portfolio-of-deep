import {
  createRootRoute,
  useLocation,
} from '@tanstack/react-router'

import { RootDocument } from '../components/layout/root-document'
import { NavBar } from '../components/layout/nav-bar'
import { navLinks } from '../data/navigation'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Thano Sipsis | Product Designer' },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  shellComponent: RootDocumentShell,
})

function RootDocumentShell({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  return (
    <RootDocument>
      {children}
      <NavBar links={navLinks} currentPath={location.pathname} />
    </RootDocument>
  )
}
