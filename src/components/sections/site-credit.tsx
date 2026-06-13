export function SiteCredit() {
  return (
    <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-x-1 gap-y-1 px-4 text-center text-xs text-gray-400">
      <span>This site is made using</span>
      <a
        href="https://tanstack.com/start/latest"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 underline underline-offset-2 transition-colors"
      >
        TanStack Start
      </a>
      <span>.</span>
      <span>Huge fan of</span>
      <a
        href="https://x.com/tannerlinsley"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 underline underline-offset-2 transition-colors"
      >
        Tanner Linsley
      </a>
      <span>and team.</span>
    </div>
  )
}
