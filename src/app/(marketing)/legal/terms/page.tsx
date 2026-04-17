import Link from 'next/link'

export default function TermsPage() {
    return (
        <article>
            <h1>Terms of Service</h1>
            <div className="meta">Last updated: 2026-04-16</div>

            <p>
                Please read these Terms of Service ("Terms") carefully before using the <strong>union</strong> mobile application and related EdUnion services (collectively, the "Service") operated by <strong>EdUnion LLC</strong> ("us", "we", or "our").
            </p>

            <h2>1. Description of Service</h2>
            <p>
                <strong>union</strong> is a campus companion application provided to students, faculty, and staff at partner institutions. It aggregates public information (events, dining, hours) and offers community features (such as a student marketplace) to facilitate campus life.
            </p>

            <h2>2. Acceptable Use</h2>
            <p>
                You agree to use the Service only for lawful purposes and in accordance with your institution's acceptable-use policies and student code of conduct. You must not:
            </p>
            <ul>
                <li>Use the Service to harass, abuse, or harm another person.</li>
                <li>Post content that is false, misleading, or inappropriate.</li>
                <li>Attempt to circumvent security measures or access data not intended for you.</li>
            </ul>

            <h2>3. Disclaimer</h2>
            <p>
                The Service is provided on an "AS IS" and "AS AVAILABLE" basis. While we strive for accuracy, we cannot guarantee that information (e.g., dining menus, bus times) is always 100% real-time or error-free. Information provided by the Service should not be considered an official communication from the university administration unless explicitly stated.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of <strong>EdUnion LLC</strong> and its licensors.
            </p>

            <h2>5. Termination</h2>
            <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2>6. Governing Law</h2>
            <p>
                These Terms shall be governed and construed in accordance with the laws of the State of Ohio, United States, without regard to its conflict of law provisions.
            </p>

            <h2>7. Contact Us</h2>
            <p className="footer-note">
                If you have any questions about these Terms, please contact us at <a href="mailto:support@asku.app">support@asku.app</a>.
            </p>
        </article>
    )
}
