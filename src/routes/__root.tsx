import {
  createRootRoute,
  useLocation,
} from '@tanstack/react-router'

import { RootDocument } from '../components/layout/root-document'
import { NavBar } from '../components/layout/nav-bar'
import { navLinks } from '../data/navigation'
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, OG_IMAGE } from '../data/site'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: SITE_DESCRIPTION },
      { title: SITE_TITLE },
      { property: 'og:title', content: SITE_TITLE },
      { property: 'og:description', content: SITE_DESCRIPTION },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: SITE_URL },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: SITE_TITLE },
      { name: 'twitter:description', content: SITE_DESCRIPTION },
      { name: 'twitter:image', content: OG_IMAGE },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'preload', as: 'image', href: '/projectAssets/collage/react.avif', fetchPriority: 'high' },
      { rel: 'canonical', href: SITE_URL },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
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
