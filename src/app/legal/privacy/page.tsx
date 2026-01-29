import Link from 'next/link'

export default function PrivacyPage() {
    return (
        <article>
            <h1>Privacy Policy</h1>
            <div className="meta">Last updated: 2026-01-28</div>

            <p>
                At askU, we believe privacy is a fundamental right. We design our services with a minimization-first approach, collecting only the data strictly necessary to provide a useful campus companion experience. This policy explains what we collect, how we use it, and your rights regarding your information.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We limit data collection to the following categories:</p>
            <ul>
                <li><strong>Account Information:</strong> When you log in via Denison University SSO, we receive basic profile information (Name, Email) to authenticate you.</li>
                <li><strong>Device Data:</strong> We collect technical data such as device model, OS version, and app version to ensure compatibility and debug crashes.</li>
                <li><strong>Usage Analytics:</strong> We track anonymous interactions (e.g., "Screen Viewed", "Search Performed") to understand feature usage. Search queries are hashed or aggregated to prevent identifying individuals based on their questions.</li>
                <li><strong>Preferences:</strong> Optional settings you configure (e.g., dietary restrictions, notification settings) are stored to personalize your experience.</li>
            </ul>

            <h2>2. How We Use Your Data</h2>
            <p>Your data is used solely for the following purposes:</p>
            <ul>
                <li><strong>Service Delivery:</strong> To provide core app functions like dining menus, event calendars, and marketplace listings.</li>
                <li><strong>Improvement:</strong> To identify bugs, optimize performance, and understand which features are most valuable to the community.</li>
                <li><strong>Communication:</strong> To send important updates about the service (e.g., security alerts) or respond to your support requests.</li>
            </ul>

            <h2>3. What We Do NOT Do</h2>
            <ul>
                <li><strong>No Sale of Data:</strong> We do not sell, rent, or trade your personal information to third parties or advertisers.</li>
                <li><strong>No Behavioral Tracking:</strong> We do not track your activity across other apps or websites.</li>
            </ul>

            <h2>4. Data Sharing</h2>
            <p>
                We may share data with trusted third-party service providers (subprocessors) solely for the purpose of operating the app (e.g., hosting, database management). These providers are contractually obligated to protect your data. See our <Link href="/legal/subprocessors">List of Subprocessors</Link> for details.
            </p>

            <h2>5. Retention</h2>
            <p>
                We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy. When you delete your account, your personal information is removed from our active systems. See our <Link href="/legal/retention-deletion">Retention Policy</Link> for specific timelines.
            </p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
                <li>Access the personal data we hold about you.</li>
                <li>Correct inaccurate or incomplete data.</li>
                <li>Request deletion of your data (See <Link href="/support/data-deletion">Deletion Instructions</Link>).</li>
            </ul>

            <p style={{ marginTop: '40px', borderTop: '1px solid #eaeaea', paddingTop: '20px' }}>
                If you have questions about this policy, please contact us at <a href="mailto:support@asku.app">support@asku.app</a>.
            </p>
        </article>
    )
}
