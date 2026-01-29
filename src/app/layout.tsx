import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'askU - Campus life in one cockpit',
  description: 'The privacy-safe campus intelligence layer for Denison University. Real-time dining, events, and insights for students and administrators.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="container">
            <Link href="/" className="logo">askU</Link>
          </div>
        </header>

        <main className="container">
          {children}
        </main>

        <footer>
          <div className="container">
            <nav className="footer-nav">
              <Link href="/legal/privacy">Privacy Policy</Link>
              <Link href="/legal/terms">Terms of Service</Link>
              <Link href="/support">Contact Support</Link>
              <Link href="/support/data-deletion">Data Deletion</Link>
              <Link href="/security">Security</Link>
            </nav>
            <div className="copyright">
              © {new Date().getFullYear()} Denison University. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
