import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact EdUnion — general inquiries, support, partnerships, and security.',
}

export default function ContactPage() {
  return (
    <article>
      <h1>Contact EdUnion</h1>
      <div className="meta">Ohio, USA</div>

      <p>
        EdUnion is headquartered in Ohio, USA. The fastest way to reach us is by
        email — we aim to respond within two business days.
      </p>

      <h2>Email</h2>
      <ul>
        <li><strong>General:</strong> <a href="mailto:info@asku.app">info@asku.app</a></li>
        <li><strong>Support:</strong> <a href="mailto:support@asku.app">support@asku.app</a></li>
        <li><strong>Partnerships:</strong> <a href="mailto:partnerships@asku.app">partnerships@asku.app</a></li>
        <li><strong>Security:</strong> <a href="mailto:security@asku.app">security@asku.app</a></li>
      </ul>

      <h2>Mailing location</h2>
      <p className="contact-box">
        <strong>EdUnion LLC</strong><br />
        Columbus, Ohio 43215<br />
        USA
      </p>

      <h2>Support Center</h2>
      <p>
        For product help — including account questions, data deletion, and
        accessibility — visit the <Link href="/support">Support Center</Link>.
      </p>

      <h2>Partnerships</h2>
      <p>
        If you represent a college or university interested in piloting
        EdUnion on your campus, email{' '}
        <a href="mailto:partnerships@asku.app">partnerships@asku.app</a> with a
        short note about your institution and student population.
      </p>

      <h2>Security disclosures</h2>
      <p>
        If you believe you have found a security vulnerability, please report
        it confidentially to{' '}
        <a href="mailto:security@asku.app">security@asku.app</a>. See our{' '}
        <Link href="/security">Security</Link> page for more detail.
      </p>
    </article>
  )
}
