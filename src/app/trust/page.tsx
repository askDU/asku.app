import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { FileText, Lock, Mail, AlertTriangle } from 'lucide-react'

export const metadata = {
  title: 'Trust Pack | askU',
  description: 'Procurement and security evaluation documents for askU.',
}

export default function TrustPage() {
  return (
    <div>
      <div className="meta">
        Last updated: 2026-01-28
      </div>

      <h1>askU Trust Pack</h1>
      <p className="text-lg text-[var(--color-text-light)] mb-8">
        Documents for university evaluation
      </p>

      {/* Public Documents */}
      <Card className="mb-8 border-[var(--color-border)] bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <FileText className="w-5 h-5 text-[#C8102E]" />
            Public Documents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/security', label: 'Security Center' },
              { href: '/legal/privacy', label: 'Privacy Policy' },
              { href: '/legal/subprocessors', label: 'Subprocessors' },
              { href: '/legal/retention-deletion', label: 'Data Retention & Deletion' },
            ].map((doc) => (
              <Link
                key={doc.href}
                href={doc.href}
                className="block p-4 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-text)] no-underline font-medium hover:border-[#C8102E] hover:-translate-y-0.5 hover:shadow-md transition-all"
              >
                {doc.label}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Confidential Documents */}
      <Card className="mb-8 border-[var(--color-border)] bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Lock className="w-5 h-5 text-[#C8102E]" />
            Confidential Documents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 text-sm mb-4">
            <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
            These documents are limited distribution. Please treat as confidential.
          </div>
          <div className="space-y-3">
            {[
              'Security Overview PDF',
              'Architecture Diagram',
              'Pilot Plan',
              'Pricing Sheet',
            ].map((name) => (
              <div
                key={name}
                className="flex items-center p-4 rounded-lg bg-[var(--color-bg-alt)] border border-dashed border-[var(--color-border)] text-[var(--color-text-light)]"
              >
                <Lock className="w-5 h-5 mr-3 shrink-0" />
                <span className="font-medium mr-auto text-[var(--color-text)]">{name}</span>
                <span className="text-xs uppercase tracking-wider opacity-70 bg-[var(--color-border)] px-2 py-0.5 rounded">
                  Private
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card className="mb-8 border-[var(--color-border)] bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Mail className="w-5 h-5 text-[#C8102E]" />
            Contact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-0">
            For specific security inquiries or updated documentation access:<br />
            <strong>[TBD: SECURITY_EMAIL]</strong>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
