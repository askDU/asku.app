import Link from 'next/link'

export default function SupportPage() {
    return (
        <article>
            <h1>Support Center</h1>
            <div className="meta">Last updated: 2026-01-28</div>

            <p>
                Welcome to EdUnion Support. We help students, faculty, and staff at partner institutions get the most out of <strong>union</strong>, the campus companion app, along with the rest of the EdUnion product suite.
            </p>

            <h2>What is union?</h2>
            <p>
                <strong>union</strong> is a privacy-first iOS app that consolidates dining menus, events, campus services, and a student marketplace into a single experience. It is built by <strong>EdUnion</strong> and deployed through partnerships with colleges and universities.
            </p>

            <h2>How to Get Help</h2>
            <p>
                For all inquiries, please email our support team directly:
            </p>
            <p className="contact-box">
                <strong>Email:</strong> <a href="mailto:support@asku.app">support@asku.app</a>
            </p>

            <h3>What to Include in Your Request</h3>
            <p>
                To help us resolve your issue faster, please include the following details:
            </p>
            <ul>
                <li>Your device model (e.g., iPhone 13 Pro)</li>
                <li>Your iOS version (e.g., iOS 17.2)</li>
                <li>A brief description of the problem</li>
                <li>Screenshots or screen recordings (if applicable)</li>
            </ul>

            <h2>Common Topics</h2>
            <ul>
                <li><Link href="/security">Security Information</Link></li>
                <li><Link href="/legal/privacy">Privacy Policy</Link></li>
                <li><Link href="/support/data-deletion">Delete My Account</Link></li>
            </ul>

            <p className="footer-note">
                We aim to respond to all support inquiries within 2 business days.
            </p>
        </article>
    )
}
