import Link from 'next/link'

export const metadata = {
    title: 'Data Processing Agreement | askU',
    description: 'Data Processing Agreement between askU and Denison University governing the processing of personal data.',
}

export default function DpaPage() {
    return (
        <article>
            <h1>Data Processing Agreement</h1>
            <div className="meta">Last updated: 2026-02-25</div>

            <p>
                This Data Processing Agreement (&quot;DPA&quot;) forms part of the agreement between the subscribing
                institution (&quot;Customer,&quot; &quot;Controller&quot;) and the askU team (&quot;Processor&quot;) for
                the provision of the askU campus companion application (&quot;Service&quot;). This DPA governs the
                processing of personal data by the Processor on behalf of the Customer, pursuant to applicable data
                protection laws including the Family Educational Rights and Privacy Act (FERPA).
            </p>

            <h2>Article 1. Definitions</h2>
            <ul>
                <li><strong>&quot;Personal Data&quot;</strong> means any information relating to an identified or identifiable natural person (Data Subject) processed in connection with the Service.</li>
                <li><strong>&quot;Processing&quot;</strong> means any operation performed on Personal Data, including collection, storage, retrieval, use, disclosure, or deletion.</li>
                <li><strong>&quot;Data Subject&quot;</strong> means any individual whose Personal Data is processed under this DPA, including students, faculty, and staff of the Customer who use the Service.</li>
                <li><strong>&quot;Controller&quot;</strong> means the Customer, who determines the purposes and means of processing Personal Data.</li>
                <li><strong>&quot;Processor&quot;</strong> means askU, who processes Personal Data on behalf of the Controller.</li>
                <li><strong>&quot;Subprocessor&quot;</strong> means any third party engaged by the Processor to assist in processing Personal Data on behalf of the Controller.</li>
                <li><strong>&quot;Data Breach&quot;</strong> means any unauthorized access to, acquisition of, or disclosure of Personal Data that compromises the security, confidentiality, or integrity of such data.</li>
                <li><strong>&quot;Education Records&quot;</strong> means records directly related to a student and maintained by an educational institution, as defined under FERPA (20 U.S.C. &sect; 1232g).</li>
            </ul>

            <h2>Article 2. Scope and Roles</h2>
            <p>
                The Customer acts as the Controller and the Processor acts on behalf of the Controller. The Processor
                shall process Personal Data only in accordance with the Customer&apos;s documented instructions and solely
                for the purpose of providing the Service. The Processor shall not process Personal Data for any other
                purpose unless required by applicable law, in which case the Processor shall notify the Customer before
                such processing unless prohibited by law.
            </p>

            <h2>Article 3. Data Processing Details</h2>
            <p>
                The following categories of Personal Data are processed in connection with the Service:
            </p>

            <h3>Categories of Data Subjects</h3>
            <p>Students, faculty, and staff of the Customer who use the askU application.</p>

            <h3>Types of Personal Data Processed</h3>
            <ul>
                <li><strong>Account Information:</strong> Name and institutional email address, received via the Customer&apos;s Single Sign-On (SSO) system during authentication.</li>
                <li><strong>Device Information:</strong> Device model, operating system version, and app version, collected automatically for compatibility and debugging purposes.</li>
                <li><strong>Usage Analytics:</strong> Pseudonymized usage events (e.g., &quot;Screen Viewed,&quot; &quot;Search Performed&quot;) collected for product improvement. Search queries are hashed or aggregated to prevent identifying individuals.</li>
                <li><strong>User Preferences:</strong> Optional settings configured by the Data Subject, such as dietary preferences and notification settings.</li>
                <li><strong>User-Generated Content:</strong> Marketplace listings, favorites, and saved items created by the Data Subject within the Service.</li>
            </ul>

            <h3>Data Explicitly Not Processed</h3>
            <p>The Processor does not access, store, or process:</p>
            <ul>
                <li>Student academic records, grades, or GPAs</li>
                <li>Transcripts or course enrollment data</li>
                <li>Financial aid information</li>
                <li>Disciplinary records</li>
                <li>Any other Education Records as defined under FERPA</li>
            </ul>

            <p>
                For complete processing details, see <strong>Annex A</strong> below.
            </p>

            <h2>Article 4. Customer Obligations</h2>
            <p>The Customer shall:</p>
            <ul>
                <li>Ensure that the processing of Personal Data under this DPA has a lawful basis.</li>
                <li>Provide appropriate notices to Data Subjects regarding the processing of their Personal Data by the Service.</li>
                <li>Ensure that Data Subjects are informed of their rights with respect to their Personal Data.</li>
                <li>Provide documented instructions to the Processor regarding the processing of Personal Data.</li>
            </ul>

            <h2>Article 5. Data Security</h2>
            <p>
                The Processor implements and maintains appropriate technical and organizational measures to protect Personal
                Data against unauthorized or unlawful processing, accidental loss, destruction, or damage. These measures include:
            </p>
            <ul>
                <li><strong>Encryption in Transit:</strong> All data transmitted between the application and servers is encrypted using TLS 1.2+ protocols.</li>
                <li><strong>Encryption at Rest:</strong> Sensitive data stored in databases is encrypted using industry-standard AES-256 encryption.</li>
                <li><strong>Authentication:</strong> Integration with the Customer&apos;s SSO infrastructure. The Processor does not store university passwords.</li>
                <li><strong>Access Controls:</strong> Production data access is restricted to a small number of authorized engineering personnel (1&ndash;2 individuals) following the principle of least privilege. All access is logged and monitored.</li>
                <li><strong>Row Level Security:</strong> Database-level security policies ensure that users can only access their own data through the application.</li>
            </ul>
            <p>
                For complete security measures, see <strong>Annex B</strong> below and our <Link href="/security">Security Overview</Link>.
            </p>

            <h2>Article 6. Subprocessors</h2>
            <p>
                The Processor engages third-party Subprocessors to assist in providing the Service. The current list
                of Subprocessors is maintained at <Link href="/legal/subprocessors">asku.app/legal/subprocessors</Link>.
            </p>
            <p>
                The Processor shall notify the Customer at least 30 days before engaging a new Subprocessor or
                making material changes to the Subprocessor list. The Customer may object to such changes in writing
                within 30 days of notification. If the Customer objects and the parties cannot reach a resolution,
                the Customer may terminate the Service agreement.
            </p>
            <p>
                All Subprocessors are contractually obligated to maintain appropriate security and privacy standards
                and to process Personal Data only as necessary to provide their services.
            </p>

            <h2>Article 7. International Data Transfers</h2>
            <p>
                All primary data processing occurs within the United States:
            </p>
            <ul>
                <li><strong>Supabase:</strong> US-East (AWS) &mdash; Backend infrastructure and database.</li>
                <li><strong>PostHog:</strong> US (AWS) &mdash; Product analytics with pseudonymized events.</li>
                <li><strong>Vercel:</strong> Global CDN for web hosting. No personal data is stored at edge locations.</li>
            </ul>

            <h2>Article 8. Data Subject Rights</h2>
            <p>
                The Processor shall assist the Controller in responding to requests from Data Subjects exercising
                their rights, including:
            </p>
            <ul>
                <li>Right to access their Personal Data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure (deletion) of their data</li>
                <li>Right to data portability</li>
            </ul>
            <p>
                Data Subjects may request deletion of their data directly through the application or by following
                the instructions at <Link href="/support/data-deletion">asku.app/support/data-deletion</Link>.
            </p>

            <h2>Article 9. Data Breach Notification</h2>
            <p>
                In the event of a Data Breach, the Processor shall notify the Controller without undue delay and in
                any event within <strong>72 hours</strong> of becoming aware of the breach. The notification shall include:
            </p>
            <ul>
                <li>The nature of the breach, including the categories of Personal Data affected</li>
                <li>The approximate number of Data Subjects affected</li>
                <li>The likely consequences of the breach</li>
                <li>Measures taken or proposed to address the breach and mitigate its effects</li>
            </ul>
            <p>
                For the complete breach notification procedure, see <Link href="/legal/breach-notification">asku.app/legal/breach-notification</Link>.
            </p>

            <h2>Article 10. Data Return and Deletion</h2>
            <p>
                Upon termination of the Service agreement, the Processor shall, at the Customer&apos;s election, return
                or delete all Personal Data within <strong>30 days</strong>. Personal Data may persist in encrypted backups
                for up to 30 additional days until those backups are rotated out.
            </p>
            <p>
                For detailed retention periods and deletion processes, see
                our <Link href="/legal/retention-deletion">Retention &amp; Deletion Policy</Link>.
            </p>

            <h2>Article 11. Audits</h2>
            <p>
                The Customer may audit the Processor&apos;s compliance with this DPA up to once per year, with at
                least 30 days&apos; written notice. The Processor shall provide reasonable cooperation and access to
                relevant documentation and systems necessary to demonstrate compliance. The Customer shall ensure
                that any auditor is bound by appropriate confidentiality obligations.
            </p>

            <h2>Article 12. FERPA Compliance</h2>
            <p>
                To the extent that the Processor receives or has access to Education Records or personally identifiable
                information derived therefrom, the Processor acknowledges that it may be considered a &quot;school
                official&quot; with a &quot;legitimate educational interest&quot; under FERPA. The Processor shall:
            </p>
            <ul>
                <li>Use Education Records solely for the purposes specified in this DPA and the Service agreement.</li>
                <li>Not disclose Education Records to third parties without the Controller&apos;s prior written authorization, except as required by law.</li>
                <li>Not use Education Records for any purpose other than providing the Service.</li>
                <li>Comply with all applicable FERPA requirements regarding the protection of student data.</li>
            </ul>
            <p>
                For our complete FERPA compliance posture, see <Link href="/legal/ferpa">asku.app/legal/ferpa</Link>.
            </p>

            <h2>Article 13. Term and Termination</h2>
            <p>
                This DPA is effective for the duration of the Service agreement between the Customer and the Processor.
                The obligations of the Processor regarding data return, deletion, and confidentiality shall survive
                termination of this DPA.
            </p>

            <h2>Annex A: Data Processing Details</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', fontSize: '0.9rem' }}>
                <thead>
                    <tr style={{ background: '#f5f5f5', textAlign: 'left' }}>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Data Category</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Specific Data</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Purpose</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Retention</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}><strong>Account Information</strong></td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Name, Email (via SSO)</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Authentication, Service delivery</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Active account duration</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}><strong>Device Information</strong></td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Device model, OS version, App version</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Compatibility, Crash debugging</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Active account duration</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}><strong>Usage Analytics</strong></td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Pseudonymized events (screen views, search events)</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Product improvement, Feature analysis</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Rolling 90 days</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}><strong>User Preferences</strong></td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Dietary preferences, Notification settings</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Personalization</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Active account duration</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}><strong>User-Generated Content</strong></td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Marketplace listings, Favorites, Saved items</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Service delivery</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Active account duration</td>
                    </tr>
                </tbody>
            </table>

            <h2>Annex B: Technical and Organizational Security Measures</h2>
            <ul>
                <li><strong>Encryption in Transit:</strong> TLS 1.2+ for all client-server communication.</li>
                <li><strong>Encryption at Rest:</strong> AES-256 encryption for data stored in databases.</li>
                <li><strong>Authentication:</strong> Integration with institutional SSO; no university passwords stored.</li>
                <li><strong>Access Controls:</strong> Principle of least privilege; production access limited to 1&ndash;2 authorized engineers.</li>
                <li><strong>Row Level Security:</strong> Database-level policies ensuring user data isolation.</li>
                <li><strong>Audit Logging:</strong> All production data access is logged and monitored.</li>
                <li><strong>Monitoring:</strong> System activity logs reviewed regularly for anomalies.</li>
                <li><strong>Vulnerability Management:</strong> Security vulnerability reports accepted at <a href="mailto:security@asku.app">security@asku.app</a>.</li>
                <li><strong>Incident Response:</strong> Internal incident response plan with 72-hour breach notification commitment.</li>
                <li><strong>Backup and Recovery:</strong> Encrypted backups with 30-day rotation cycle.</li>
                <li><strong>Data Minimization:</strong> Collection limited to data strictly necessary for the Service.</li>
                <li><strong>Pseudonymization:</strong> Analytics data is pseudonymized; search queries are hashed or aggregated.</li>
            </ul>

            <p style={{ marginTop: '40px', borderTop: '1px solid #eaeaea', paddingTop: '20px' }}>
                For questions about this Data Processing Agreement, please contact <a href="mailto:support@asku.app">support@asku.app</a>.
                For security inquiries, contact <a href="mailto:security@asku.app">security@asku.app</a>.
            </p>
        </article>
    )
}
