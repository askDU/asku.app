import Link from 'next/link'

export default function RetentionDeletionPage() {
    return (
        <article>
            <h1>Data Retention & Deletion Policy</h1>
            <div className="meta">Last updated: 2026-01-28</div>

            <p>
                askU retains data only for as long as necessary to provide our service, ensure security, and comply with applicable laws. This policy outlines our standard retention periods and your deletion rights.
            </p>

            <h2>1. Retention Categories</h2>

            <h3>Account Data</h3>
            <p>
                <strong>Period:</strong> Active duration of account.<br />
                We retain your profile information (Name, Email, Preferences) as long as your account remains active. If you request deletion, this data is removed immediately.
            </p>

            <h3>Analytics & Telemetry</h3>
            <p>
                <strong>Period:</strong> Rolling 90 days.<br />
                Detailed usage logs (e.g., individual screen views, search sessions) are retained for 90 days to allow for performance debugging and feature analysis. After this period, data is either permanently deleted or aggregated into anonymous metrics that cannot be linked to any user.
            </p>

            <h3>Support Communications</h3>
            <p>
                <strong>Period:</strong> up to 2 years.<br />
                Emails sent to our support team are retained to maintain context for future assistance and to track issue resolution trends.
            </p>

            <h2>2. Deletion Process</h2>
            <p>
                When a valid deletion request is processed:
            </p>
            <ul>
                <li><strong>Immediate Action:</strong> Your account is deactivated and your public profile (if any) is hidden.</li>
                <li><strong>Permanent Erasure:</strong> Within 30 days, your personal data is permanently wiped from our primary databases and production systems.</li>
                <li><strong>Backup Expiry:</strong> Data may persist in encrypted backups for up to 30 additional days until those backups are rotated out.</li>
            </ul>

            <p style={{ marginTop: '40px', borderTop: '1px solid #eaeaea', paddingTop: '20px' }}>
                To request deletion, please see our <Link href="/support/data-deletion">Data Deletion Instructions</Link> or email <a href="mailto:support@asku.app">support@asku.app</a>.
            </p>
        </article>
    )
}
