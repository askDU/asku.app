import Link from 'next/link'

export const metadata = {
    title: 'Data Breach Notification Procedure | askU',
    description: 'askU data breach detection, reporting, and incident response procedure.',
}

export default function BreachNotificationPage() {
    return (
        <article>
            <h1>Data Breach Notification Procedure</h1>
            <div className="meta">Last updated: 2026-02-25</div>

            <p>
                This document outlines askU&apos;s procedure for detecting, reporting, and responding to data breaches.
                It establishes the notification timeline and responsibilities to ensure Denison University is promptly
                informed of any incident affecting student or user data.
            </p>

            <h2>1. Purpose</h2>
            <p>
                This procedure defines the process for identifying and responding to data breaches, and ensures
                compliance with FERPA, applicable state breach notification laws (Ohio Rev. Code &sect; 1349.19),
                and the askU <Link href="/legal/dpa">Data Processing Agreement</Link>.
            </p>

            <h2>2. Definition of a Data Breach</h2>
            <p>
                A data breach is any unauthorized access to, acquisition of, or disclosure of personal data that
                compromises the security, confidentiality, or integrity of user information. Examples include:
            </p>
            <ul>
                <li>Unauthorized access to the production database</li>
                <li>Accidental exposure of user records</li>
                <li>Compromised credentials of authorized personnel</li>
                <li>A subprocessor security incident affecting askU data</li>
            </ul>

            <h2>3. Detection and Initial Response</h2>
            <p>Upon discovery or report of a potential breach, the following steps are taken immediately:</p>
            <ol>
                <li><strong>Discovery:</strong> Breach detected via system monitoring, vulnerability report, user report, or subprocessor notification.</li>
                <li><strong>Containment:</strong> Immediately isolate affected systems and revoke any compromised access credentials.</li>
                <li><strong>Assessment:</strong> Determine the scope of the incident &mdash; what data was affected, how many users were impacted, and how the breach occurred.</li>
                <li><strong>Internal Escalation:</strong> All team members are notified within 4 hours of discovery.</li>
            </ol>

            <h2>4. Notification to Denison University</h2>
            <p>
                askU will notify Denison University of a confirmed data breach <strong>within 72 hours</strong> of
                becoming aware of the incident.
            </p>
            <ul>
                <li><strong>Method:</strong> Email to Denison&apos;s designated security or privacy contact, followed by a written incident report.</li>
                <li><strong>Interim Updates:</strong> If the investigation is ongoing at the 72-hour mark, an initial notification will be sent with all available information, followed by supplemental reports as the investigation progresses.</li>
            </ul>

            <h2>5. Notification Content</h2>
            <p>Breach notifications to Denison University will include:</p>
            <ul>
                <li>Date and time of discovery</li>
                <li>Nature of the breach (what happened)</li>
                <li>Categories of personal data affected</li>
                <li>Approximate number of data subjects affected</li>
                <li>Likely consequences of the breach</li>
                <li>Measures taken or proposed to address the breach</li>
                <li>Measures taken to mitigate possible adverse effects</li>
                <li>Contact information for follow-up (<a href="mailto:security@asku.app">security@asku.app</a>)</li>
            </ul>

            <h2>6. Notification to Affected Individuals</h2>
            <p>
                If required by applicable law or if Denison University requests it, askU will cooperate with Denison
                to notify affected individuals. Individual notifications will include:
            </p>
            <ul>
                <li>A description of the incident in plain language</li>
                <li>The types of personal data involved</li>
                <li>Steps individuals can take to protect themselves</li>
                <li>Contact information for questions</li>
            </ul>

            <h2>7. Remediation and Post-Incident Review</h2>
            <p>Following containment and notification:</p>
            <ul>
                <li><strong>Root Cause Analysis:</strong> Completed within 14 days of incident resolution to identify the underlying cause.</li>
                <li><strong>Corrective Measures:</strong> Implementation of technical and procedural changes to prevent recurrence.</li>
                <li><strong>Post-Incident Report:</strong> A written report provided to Denison University documenting findings, impact, and remediation steps.</li>
                <li><strong>Security Review:</strong> Review and update of security controls, access policies, and monitoring systems.</li>
            </ul>

            <h2>8. Record Keeping</h2>
            <p>
                askU maintains a record of all data breach incidents, including the facts of the breach, its effects,
                and the remedial actions taken, regardless of whether notification to the institution or individuals
                was required.
            </p>

            <div style={{ background: '#f5f5f5', padding: '15px', borderRadius: '8px', marginTop: '30px' }}>
                <strong>Security Contact:</strong> <a href="mailto:security@asku.app">security@asku.app</a>
            </div>

            <p style={{ marginTop: '40px', borderTop: '1px solid #eaeaea', paddingTop: '20px' }}>
                For general security information, see our <Link href="/security">Security Overview</Link>.
                For data processing terms, see our <Link href="/legal/dpa">Data Processing Agreement</Link>.
            </p>
        </article>
    )
}
