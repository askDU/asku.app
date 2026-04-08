import Link from 'next/link'

export default function SecurityPage() {
    return (
        <article>
            <h1>Security Overview</h1>
            <div className="meta">Last updated: 2026-01-28</div>

            <p>
                The security of user data is a top priority for askU. This document outlines the technical and organizational measures we take to protect your information.
            </p>

            <h2>1. Data Protection</h2>
            <ul>
                <li><strong>Encryption in Transit:</strong> All data transmitted between the askU app and our servers is encrypted using standard TLS 1.2+ protocols.</li>
                <li><strong>Encryption at Rest:</strong> Sensitive data stored in our databases is encrypted at rest using industry-standard AES-256 encryption.</li>
            </ul>

            <h2>2. Authentication</h2>
            <p>
                We utilize secure authentication mechanisms to verify user identity. We integrate with Denison University's official Single Sign-On (SSO) infrastructure where possible, meaning we do not store your university passwords directly.
            </p>

            <h2>3. Access Controls</h2>
            <p>
                We follow the principle of least privilege. Access to production data is restricted to a small number of authorized engineering personnel who require it for maintenance or debugging purposes. All access is logged and monitored.
            </p>

            <h2>4. Monitoring</h2>
            <p>
                We maintain logs of system activity to detect and respond to potential security incidents. These logs are reviewed regularly for anomalies.
            </p>

            <h2>5. Vulnerability Reporting</h2>
            <p>
                We value the contributions of the security research community. If you believe you have found a security vulnerability in askU, please report it to us immediately.
            </p>
            <p className="contact-box" style={{ background: '#f5f5f5', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                <strong>Security Contact:</strong> <a href="mailto:security@asku.app">security@asku.app</a>
            </p>

            <h2>6. Incident Response</h2>
            <p>
                We maintain an internal incident response plan to address security events promptly. In the event of a data breach affecting your personal information, we will notify you in accordance with applicable laws.
            </p>

            <p style={{ marginTop: '40px', borderTop: '1px solid #eaeaea', paddingTop: '20px' }}>
                For general questions about our security practices, please contact <a href="mailto:support@asku.app">support@asku.app</a>.
            </p>
        </article>
    )
}
