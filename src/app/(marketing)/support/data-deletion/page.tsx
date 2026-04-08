import Link from 'next/link'

export default function DataDeletionPage() {
    return (
        <article>
            <h1>Request Data Deletion</h1>
            <div className="meta">Last updated: 2026-01-28</div>

            <p>
                askU respects your right to be forgotten. Users may request the deletion of their account and associated personal data at any time. This page outlines the process for making such a request.
            </p>

            <h2>Option 1: In-App Deletion (Recommended)</h2>
            <p>
                The fastest and most secure way to delete your data is through the askU mobile application:
            </p>
            <ol>
                <li>Open the askU app on your iOS device.</li>
                <li>Navigate to the <strong>Profile</strong> tab.</li>
                <li>Tap the <strong>Settings</strong> icon (gear).</li>
                <li>Scroll to the bottom and tap <strong>"Delete Account"</strong>.</li>
                <li>Confirm your choice. Your data will be flagged for immediate deletion.</li>
            </ol>

            <h2>Option 2: Manual Email Request</h2>
            <p>
                If you no longer have access to the app, you may submit a manual request via email. Please copy and paste the template below:
            </p>

            <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', border: '1px solid #eee', marginBottom: '20px' }}>
                <p><strong>To:</strong> support@asku.app</p>
                <p><strong>Subject:</strong> Data Deletion Request</p>
                <p><strong>Body:</strong></p>
                <p>
                    I am requesting the deletion of my askU account and all associated personal data.<br /><br />
                    My account email address is: [INSERT YOUR EMAIL]<br /><br />
                    I understand this action is permanent and cannot be undone.
                </p>
            </div>

            <h3>Identity Verification</h3>
            <p>
                For manual requests, we must verify your identity to prevent unauthorized deletion. <strong>Please send the email from the address associated with your askU account.</strong> If we cannot verify ownership, we may ask for additional confirmation.
            </p>

            <h2>What Gets Deleted</h2>
            <ul>
                <li><strong>Account Profile:</strong> Name, email, and preferences.</li>
                <li><strong>User Content:</strong> Any listings on DULoop, favorites, or saved items.</li>
                <li><strong>Activity History:</strong> Detailed interaction logs linked to your user ID.</li>
            </ul>
            <p>
                <em>Note: Aggregated, anonymized analytics data that cannot be linked back to you may be retained for service improvement purposes.</em>
            </p>

            <h2>Timeline</h2>
            <p>
                Once verified, we aim to process deletion requests within 30 days. You will receive a confirmation email once the process is complete.
            </p>

            <p style={{ marginTop: '40px', borderTop: '1px solid #eaeaea', paddingTop: '20px' }}>
                For more details on data retention, please see our <Link href="/legal/retention-deletion">Retention Policy</Link>.
            </p>
        </article>
    )
}
