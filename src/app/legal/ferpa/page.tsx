import Link from 'next/link'

export const metadata = {
    title: 'FERPA Compliance | askU',
    description: 'askU FERPA compliance posture and student data visibility statement.',
}

export default function FerpaPage() {
    return (
        <article>
            <h1>FERPA Compliance Posture</h1>
            <div className="meta">Last updated: 2026-02-25</div>

            <p>
                askU is a campus companion application that helps Denison University students navigate campus life
                with real-time dining menus, events, and community features. askU does not access, store, or process
                student education records as defined by FERPA (20 U.S.C. &sect; 1232g). The application collects only
                basic directory information received through Denison University&apos;s SSO system (name and email)
                along with anonymized usage data. askU has minimal FERPA exposure by design.
            </p>

            <h2>1. What We Collect</h2>
            <p>askU collects the following categories of data:</p>
            <ul>
                <li><strong>Name and institutional email address</strong> &mdash; received via Denison University&apos;s Single Sign-On (SSO) system during authentication.</li>
                <li><strong>Device information</strong> &mdash; device model, OS version, and app version, collected automatically for compatibility and debugging.</li>
                <li><strong>Pseudonymized usage events</strong> &mdash; anonymous interactions such as &quot;Screen Viewed&quot; and &quot;Search Performed,&quot; used for product improvement. Search queries are hashed or aggregated to prevent identifying individuals.</li>
                <li><strong>User preferences</strong> &mdash; optional settings such as dietary preferences and notification settings, configured by the user.</li>
                <li><strong>User-generated content</strong> &mdash; marketplace listings, favorites, and saved items created within the app.</li>
            </ul>

            <h2>2. What We Do NOT Collect</h2>
            <p>askU does not access, store, or process any of the following:</p>
            <ul>
                <li>Student academic records</li>
                <li>Grades or GPAs</li>
                <li>Transcripts</li>
                <li>Course enrollment or registration data</li>
                <li>Financial aid information</li>
                <li>Disciplinary records</li>
                <li>Any other education records as defined under FERPA</li>
            </ul>

            <h2>3. Who Can See Student Data</h2>

            <h3>Individual Students</h3>
            <p>
                Each student can see only their own profile, preferences, and content. Row Level Security (RLS)
                policies in our database enforce strict data isolation, ensuring no user can access another
                user&apos;s data through the application.
            </p>

            <h3>Denison University</h3>
            <p>
                Denison University receives only <strong>aggregated, anonymized behavioral data</strong>. Examples include:
            </p>
            <ul>
                <li>&quot;47 dining searches for vegan options this week&quot;</li>
                <li>&quot;Peak app usage between 11am&ndash;1pm&quot;</li>
                <li>&quot;Most viewed events category: Athletics&quot;</li>
            </ul>
            <p>
                No individual student profiles, browsing histories, search queries, or usage patterns are shared
                with the institution. No individual student can be identified from the data provided to Denison.
            </p>

            <h3>askU Engineering</h3>
            <p>
                Production data access is restricted to 1&ndash;2 authorized engineering personnel who require it
                solely for maintenance and debugging purposes. All production access is logged and monitored.
                No other team members have access to individual user data.
            </p>

            <h3>Third Parties</h3>
            <p>
                Subprocessors (listed at <Link href="/legal/subprocessors">asku.app/legal/subprocessors</Link>) process
                data only as necessary to operate the Service. We do not sell, rent, or trade personal information
                to third parties or advertisers.
            </p>

            <h2>4. How We Protect Student Data</h2>
            <ul>
                <li><strong>Encryption:</strong> All data is encrypted in transit (TLS 1.2+) and at rest (AES-256). See our <Link href="/security">Security Overview</Link>.</li>
                <li><strong>Authentication:</strong> We use Denison University&apos;s official SSO. We do not store university passwords.</li>
                <li><strong>Data Minimization:</strong> We collect only the data strictly necessary to provide the Service.</li>
                <li><strong>Retention Limits:</strong> Analytics data is retained for a rolling 90-day period, then deleted or anonymized. See our <Link href="/legal/retention-deletion">Retention Policy</Link>.</li>
                <li><strong>Processing Agreement:</strong> Our <Link href="/legal/dpa">Data Processing Agreement</Link> formally governs how student data is handled.</li>
            </ul>

            <p style={{ marginTop: '40px', borderTop: '1px solid #eaeaea', paddingTop: '20px' }}>
                For FERPA-related inquiries, please contact <a href="mailto:security@asku.app">security@asku.app</a>.
            </p>
        </article>
    )
}
