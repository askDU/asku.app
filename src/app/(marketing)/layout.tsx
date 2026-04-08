import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Union — Campus Intelligence for Liberal Arts',
  description: 'The privacy-safe campus intelligence platform for liberal arts colleges. Real-time dining, events, and insights — built for students, powered by data.',
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
            <Link href="/security" className="text-sm text-[#98989D] hover:text-white transition-colors hidden sm:block">
              Security
            </Link>
            <Link href="/legal/privacy" className="text-sm text-[#98989D] hover:text-white transition-colors hidden sm:block">
              Privacy
            </Link>
            <a
              href="mailto:partnerships@asku.app"
              className="text-sm font-medium text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-lg transition-colors"
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
      <footer className="border-t border-white/[0.06] bg-[#08080A]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
              <div className="flex flex-col gap-3">
                <Link href="/security" className="text-sm text-[#636366] hover:text-white transition-colors">Security</Link>
                <Link href="/legal/privacy" className="text-sm text-[#636366] hover:text-white transition-colors">Privacy</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
              <div className="flex flex-col gap-3">
                <Link href="/legal/terms" className="text-sm text-[#636366] hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/legal/privacy" className="text-sm text-[#636366] hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/legal/accessibility" className="text-sm text-[#636366] hover:text-white transition-colors">Accessibility</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Support</h3>
              <div className="flex flex-col gap-3">
                <Link href="/support" className="text-sm text-[#636366] hover:text-white transition-colors">Contact</Link>
                <Link href="/support/data-deletion" className="text-sm text-[#636366] hover:text-white transition-colors">Data Deletion</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
              <div className="flex flex-col gap-3">
                <a href="mailto:partnerships@asku.app" className="text-sm text-[#636366] hover:text-white transition-colors">Partnerships</a>
                <a href="mailto:hello@asku.app" className="text-sm text-[#636366] hover:text-white transition-colors">hello@asku.app</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
            <span className="text-xs text-[#3A3A3C]">
              &copy; {new Date().getFullYear()} EdUnion LLC. All rights reserved.
            </span>
            <span className="text-xs text-[#3A3A3C]">
              Columbus, OH 43215
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
