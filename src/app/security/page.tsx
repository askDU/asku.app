import Link from 'next/link'

export default function SecurityPage() {
    return (
        <article>
            <h1>Security Overview</h1>
            <div className="meta">Last updated: 2026-02-25</div>

            <p>
                The security of user data is a top priority for askU. This document outlines the technical and organizational measures we take to protect your information.
            </p>

            <h2>1. Data Protection</h2>
            <ul>
                <li><strong>Encryption in Transit:</strong> All data transmitted between the askU app and our servers is encrypted using standard TLS 1.2+ protocols. HTTPS is enforced on all connections.</li>
                <li><strong>Encryption at Rest:</strong> Sensitive data stored in our databases is encrypted at rest using industry-standard AES-256 encryption via Supabase.</li>
            </ul>

            <h2>2. Authentication</h2>
            <p>
                We utilize secure authentication mechanisms to verify user identity. We integrate with Denison University&apos;s official Single Sign-On (SSO) infrastructure where possible, meaning we do not store your university passwords directly.
            </p>

            <h2>3. Access Controls</h2>
            <p>
                We follow the principle of least privilege. Access to production data is restricted to 1&ndash;2 authorized engineering personnel who require it for maintenance or debugging purposes.
            </p>
            <ul>
                <li><strong>Role-Based Access:</strong> Production database access is limited to named, authorized engineers only. No other team members, and no institutional administrators, have access to individual user data.</li>
                <li><strong>Row Level Security (RLS):</strong> Our Supabase database enforces Row Level Security policies, ensuring users can only access their own data through the application.</li>
                <li><strong>Audit Logging:</strong> All production data access is logged and monitored for anomalies.</li>
                <li><strong>No Shared Credentials:</strong> Administrative access to infrastructure requires individually authenticated sessions.</li>
            </ul>

            <h2>4. Data Visibility</h2>
            <p>
                Individual student data (profile, preferences, activity) is visible only to the student themselves and to authorized askU engineering personnel for maintenance purposes. Denison University receives only aggregated, anonymized behavioral data (e.g., &quot;47 dining searches for vegan options this week&quot;). No individual student profiles or activity histories are shared with the institution.
            </p>
            <p>
                For details on our FERPA compliance posture, see our <Link href="/legal/ferpa">FERPA Compliance Statement</Link>.
            </p>

            <h2>5. Monitoring</h2>
            <p>
                We maintain logs of system activity to detect and respond to potential security incidents. These logs are reviewed regularly for anomalies.
            </p>

            <h2>6. Vulnerability Reporting</h2>
            <p>
                We value the contributions of the security research community. If you believe you have found a security vulnerability in askU, please report it to us immediately.
            </p>
            <p className="contact-box" style={{ background: '#f5f5f5', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                <strong>Security Contact:</strong> <a href="mailto:security@asku.app">security@asku.app</a>
            </p>

            <h2>7. Incident Response</h2>
            <p>
                We maintain an internal incident response plan to address security events promptly. In the event of a data breach affecting personal information, we will notify the affected institution within <strong>72 hours</strong> and cooperate on notification to affected individuals as required by applicable law.
            </p>
            <p>
                For our complete breach notification procedure, including timelines, notification content, and remediation steps, see our <Link href="/legal/breach-notification">Data Breach Notification Procedure</Link>.
            </p>

            <h2>Related Documents</h2>
            <ul>
                <li><Link href="/legal/dpa">Data Processing Agreement</Link></li>
                <li><Link href="/legal/ferpa">FERPA Compliance</Link></li>
                <li><Link href="/legal/breach-notification">Breach Notification Procedure</Link></li>
                <li><Link href="/legal/subprocessors">Subprocessors</Link></li>
            </ul>

            <p style={{ marginTop: '40px', borderTop: '1px solid #eaeaea', paddingTop: '20px' }}>
                For general questions about our security practices, please contact <a href="mailto:support@asku.app">support@asku.app</a>.
            </p>
        </article>
    )
}
