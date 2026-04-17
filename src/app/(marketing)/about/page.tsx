import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'EdUnion is a campus intelligence platform for liberal arts colleges.',
}

export default function AboutPage() {
  return (
    <article>
      <h1>About EdUnion</h1>
      <div className="meta">Ohio, USA · Founded 2025</div>

      <p>
        <strong>EdUnion</strong> builds the campus intelligence platform for
        liberal arts colleges — a unified software layer that consolidates
        classes, events, dining, services, and student life into a single,
        accessible experience. We work directly with institutions to deliver a
        modern alternative to fragmented portals, email blasts, and one-off
        apps.
      </p>

      <h2>Values</h2>
      <ul>
        <li><strong>Privacy-first:</strong> we minimize data collection and favor on-device personalization wherever possible.</li>
        <li><strong>Accessibility by default:</strong> Dynamic Type, VoiceOver, and reduced-motion support ship with every release.</li>
        <li><strong>Institution-aligned:</strong> we integrate with existing SSO, calendar, and dining systems rather than replacing them.</li>
      </ul>

      <h2>Contact</h2>
      <p>
        Reach us at <a href="mailto:info@asku.app">info@asku.app</a> for general
        inquiries, or visit the{' '}
        <Link href="/contact">Contact</Link> page for support, partnerships,
        and security contacts.
      </p>
    </article>
  )
}
