import Link from 'next/link'

export default function SubprocessorsPage() {
    return (
        <article>
            <h1>Subprocessors</h1>
            <div className="meta">Last updated: 2026-01-28</div>

            <p>
                To provide the askU service, we engage third-party service providers (subprocessors) to process data on our behalf. We verify that these providers maintain appropriate security and privacy standards.
            </p>

            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', fontSize: '0.9rem' }}>
                <thead>
                    <tr style={{ background: '#f5f5f5', textAlign: 'left' }}>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Vendor</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Purpose</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Data Processed</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Location</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Website</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}><strong>Supabase</strong></td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Backend Infrastructure & Database</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Account Data, User Content</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>US-East (AWS)</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}><a href="https://supabase.com" target="_blank" rel="noopener noreferrer">supabase.com</a></td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}><strong>Vercel</strong></td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Web Hosting & Deployment</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Web Traffic Logs</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Global CDN</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}><a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}><strong>PostHog</strong></td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Product Analytics</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Pseudonymized Usage Events</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>US (AWS)</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}><a href="https://posthog.com" target="_blank" rel="noopener noreferrer">posthog.com</a></td>
                    </tr>
                </tbody>
            </table>

            <p style={{ marginTop: '30px' }}>
                <em>Note: This list is subject to change. Subscribers will be notified of material changes to our subprocessor list.</em>
            </p>

            <p style={{ marginTop: '40px', borderTop: '1px solid #eaeaea', paddingTop: '20px' }}>
                For inquiries about our data partners, contact <a href="mailto:support@asku.app">support@asku.app</a>.
            </p>
        </article>
    )
}
