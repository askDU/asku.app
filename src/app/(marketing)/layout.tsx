import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://asku.app'),
  title: {
    default: 'EdUnion — Campus Intelligence Platform',
    template: '%s · EdUnion',
  },
  description:
    'EdUnion is a campus intelligence platform for liberal arts colleges.',
  applicationName: 'EdUnion',
  openGraph: {
    type: 'website',
    url: 'https://asku.app',
    siteName: 'EdUnion',
    title: 'EdUnion — Campus Intelligence Platform',
    description:
      'EdUnion is a campus intelligence platform for liberal arts colleges.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EdUnion — Campus Intelligence Platform',
    description:
      'EdUnion is a campus intelligence platform for liberal arts colleges.',
  },
  alternates: {
    canonical: 'https://asku.app',
  },
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
            EdUnion
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/about" className="nav-link text-sm text-[#636366] hover:text-white hidden sm:block">
              About
            </Link>
            <Link href="/security" className="nav-link text-sm text-[#636366] hover:text-white hidden sm:block">
              Security
            </Link>
            <Link href="/contact" className="nav-link text-sm text-[#636366] hover:text-white hidden sm:block">
              Contact
            </Link>
            <a
              href="mailto:partnerships@asku.app?subject=Pilot%20request"
              className="btn-primary text-sm font-medium text-black bg-white hover:bg-white/90 px-4 py-2 rounded-lg"
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
              <Link href="/about" className="nav-link text-xs text-[#3A3A3C] hover:text-white">About</Link>
              <Link href="/contact" className="nav-link text-xs text-[#3A3A3C] hover:text-white">Contact</Link>
              <Link href="/legal/privacy" className="nav-link text-xs text-[#3A3A3C] hover:text-white">Privacy</Link>
              <Link href="/legal/terms" className="nav-link text-xs text-[#3A3A3C] hover:text-white">Terms</Link>
              <Link href="/support" className="nav-link text-xs text-[#3A3A3C] hover:text-white">Support</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
