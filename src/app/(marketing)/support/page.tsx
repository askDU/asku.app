import Link from 'next/link'

export default function SupportPage() {
    return (
        <article>
            <h1>Support Center</h1>
            <div className="meta">Last updated: 2026-01-28</div>

            <p>
                Welcome to askU Support. We are dedicated to helping the Denison University community get the most out of their campus companion app.
            </p>

            <h2>What is askU?</h2>
            <p>
                askU is a privacy-first mobile application designed to help students, faculty, and staff navigate campus life. It provides consolidated access to dining menus, events, campus services, and the DULoop marketplace.
            </p>

            <h2>How to Get Help</h2>
            <p>
                For all inquiries, please email our support team directly:
            </p>
            <p className="contact-box" style={{ background: '#f5f5f5', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
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

            <p style={{ marginTop: '40px', borderTop: '1px solid #eaeaea', paddingTop: '20px' }}>
                We aim to respond to all support inquiries within 2 business days.
            </p>
        </article>
    )
}
