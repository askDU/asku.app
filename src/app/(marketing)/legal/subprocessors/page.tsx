import Link from 'next/link'

export default function SubprocessorsPage() {
    return (
        <article>
            <h1>Subprocessors</h1>
            <div className="meta">Last updated: 2026-04-16</div>

            <p>
                To provide the askU service, we engage third-party service providers (subprocessors) to process data on our behalf. We verify that these providers maintain appropriate security and privacy standards.
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Vendor</th>
                        <th>Purpose</th>
                        <th>Data Processed</th>
                        <th>Location</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Supabase</strong></td>
                        <td>Backend Infrastructure & Database</td>
                        <td>Account Data, User Content</td>
                        <td>US-East (AWS)</td>
                        <td><a href="https://supabase.com" target="_blank" rel="noopener noreferrer">supabase.com</a></td>
                    </tr>
                    <tr>
                        <td><strong>Vercel</strong></td>
                        <td>Web Hosting & Deployment</td>
                        <td>Web Traffic Logs</td>
                        <td>Global CDN</td>
                        <td><a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></td>
                    </tr>
                    <tr>
                        <td><strong>PostHog</strong></td>
                        <td>Product Analytics</td>
                        <td>Pseudonymized Usage Events</td>
                        <td>US (AWS)</td>
                        <td><a href="https://posthog.com" target="_blank" rel="noopener noreferrer">posthog.com</a></td>
                    </tr>
                </tbody>
            </table>

            <p className="mt-8">
                <em>Note: This list is subject to change. Subscribers will be notified of material changes to our subprocessor list.</em>
            </p>

            <p className="footer-note">
                For inquiries about our data partners, contact <a href="mailto:support@asku.app">support@asku.app</a>.
            </p>
        </article>
    )
}
