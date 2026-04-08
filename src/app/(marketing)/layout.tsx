import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Union — Campus Intelligence',
  description: 'The campus intelligence platform for liberal arts colleges.',
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#08080A] text-white antialiased font-sans">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#08080A]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight text-white">
            Union
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/security" className="text-sm text-[#636366] hover:text-white transition-colors hidden sm:block">
              Security
            </Link>
            <Link href="/legal/privacy" className="text-sm text-[#636366] hover:text-white transition-colors hidden sm:block">
              Privacy
            </Link>
            <a
              href="mailto:info@asku.app"
              className="text-sm font-medium text-black bg-white hover:bg-white/90 px-4 py-2 rounded-lg transition-colors"
            >
              Request a Pilot
            </a>
          </nav>
        </div>
      </header>

      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#3A3A3C]">
              &copy; {new Date().getFullYear()} EdUnion LLC
            </span>
            <div className="flex items-center gap-6">
              <Link href="/legal/privacy" className="text-xs text-[#3A3A3C] hover:text-white transition-colors">Privacy</Link>
              <Link href="/legal/terms" className="text-xs text-[#3A3A3C] hover:text-white transition-colors">Terms</Link>
              <Link href="/support" className="text-xs text-[#3A3A3C] hover:text-white transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
