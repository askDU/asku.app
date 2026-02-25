import Link from 'next/link'

export default function AppStorePage() {
    return (
        <article>
            <h1>App Store Reference</h1>
            <div className="meta">Last updated: 2026-02-25</div>

            <p>
                The following resources provide essential information for users and App Store review teams regarding askU, the official campus companion for Denison University.
            </p>

            <h2>Core Policies</h2>
            <ul>
                <li>
                    <strong><Link href="/legal/privacy">Privacy Policy</Link></strong>
                    <br />How we collect, use, and minimize personal data.
                </li>
                <li>
                    <strong><Link href="/legal/terms">Terms of Service</Link></strong>
                    <br />Governing agreement for acceptable use of the service.
                </li>
            </ul>

            <h2>Support & Data Management</h2>
            <ul>
                <li>
                    <strong><Link href="/support">Support Center</Link></strong>
                    <br />How to get help with account access, technical issues, or feedback.
                </li>
                <li>
                    <strong><Link href="/support/data-deletion">Data Deletion Instructions</Link></strong>
                    <br />Step-by-step guide for users requesting deletion of their account and data.
                </li>
                <li>
                    <strong><Link href="/legal/retention-deletion">Retention & Deletion Policy</Link></strong>
                    <br />Detailed breakdown of data lifecycles and retention windows.
                </li>
            </ul>

            <h2>Trust & Safety</h2>
            <ul>
                <li>
                    <strong><Link href="/security">Security Overview</Link></strong>
                    <br />High-level summary of our encryption, access controls, and incident response.
                </li>
                <li>
                    <strong><Link href="/legal/subprocessors">Subprocessors</Link></strong>
                    <br />Full list of third-party vendors processing data on our behalf.
                </li>
                <li>
                    <strong><Link href="/legal/accessibility">Accessibility Statement</Link></strong>
                    <br />Our commitment to WCAG 2.1 AA compliance and inclusive design.
                </li>
                <li>
                    <strong><Link href="/legal/dpa">Data Processing Agreement</Link></strong>
                    <br />Formal agreement governing how student data is processed and protected.
                </li>
                <li>
                    <strong><Link href="/legal/ferpa">FERPA Compliance</Link></strong>
                    <br />Our compliance posture regarding student education records and data visibility.
                </li>
                <li>
                    <strong><Link href="/legal/breach-notification">Breach Notification Procedure</Link></strong>
                    <br />Our process for detecting, reporting, and responding to data breaches.
                </li>
            </ul>

            <p style={{ marginTop: '40px', borderTop: '1px solid #eaeaea', paddingTop: '20px' }}>
                For expedited review inquiries, please <a href="mailto:support@asku.app">contact our team</a>.
            </p>
        </article>
    )
}
