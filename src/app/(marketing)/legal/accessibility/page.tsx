import Link from 'next/link'

export default function AccessibilityPage() {
    return (
        <article>
            <h1>Accessibility Statement</h1>
            <div className="meta">Last updated: 2026-04-16</div>

            <p>
                EdUnion is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>

            <h2>Conformance Status</h2>
            <p>
                EdUnion products and website are designed to conform with the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong>.
            </p>
            <p>We actively test and support:</p>
            <ul>
                <li><strong>Dynamic Type:</strong> Our products scale text according to your system settings.</li>
                <li><strong>VoiceOver:</strong> We ensure interactive elements are properly labeled for screen readers.</li>
                <li><strong>Contrast:</strong> We maintain high color contrast ratios for readability.</li>
            </ul>

            <h2>Known Limitations</h2>
            <p>
                While we strive for full compliance, there may be some content provided by third parties (e.g., externally hosted resources or linked PDF documents) that is not fully accessible. We are working to identify and remediate these instances.
            </p>

            <h2>Feedback</h2>
            <p>
                We welcome your feedback on the accessibility of EdUnion. Please let us know if you encounter accessibility barriers:
            </p>
            <ul>
                <li>Email: <a href="mailto:support@asku.app">support@asku.app</a></li>
            </ul>

            <p className="footer-note">
                We aim to respond to accessibility feedback within 2 business days.
            </p>
        </article>
    )
}
