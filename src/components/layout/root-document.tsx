import { HeadContent, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

interface RootDocumentProps {
  children: React.ReactNode
  head?: React.ReactNode
}

export function RootDocument({ children, head }: RootDocumentProps) {
  return (
    <html lang="en" className="bg-[#f2f2f2]">
      <head>
        <HeadContent />
        {head}
      </head>
      <body className="bg-[#f2f2f2] text-neutral-900 min-h-dvh">
        {children}

        <TanStackDevtools
          config={{ position: 'bottom-right' }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
