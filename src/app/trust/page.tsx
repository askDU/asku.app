import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
    title: 'Trust Pack | askU',
    description: 'Procurement and security evaluation documents for askU.',
}

export default function TrustPage() {
    return (
        <div>
            <div className="meta">
                Last updated: 2026-01-28
            </div>

            <h1>askU Trust Pack</h1>
            <p className={styles.intro}>
                Documents for university evaluation
            </p>

            <section className={styles.section}>
                <h2>Public Documents</h2>
                <ul className={styles.linksList}>
                    <li><Link href="/security">Security Center</Link></li>
                    <li><Link href="/legal/privacy">Privacy Policy</Link></li>
                    <li><Link href="/legal/subprocessors">Subprocessors</Link></li>
                    <li><Link href="/legal/retention-deletion">Data Retention & Deletion</Link></li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2>Confidential Documents</h2>
                <div className={styles.note}>These documents are limited distribution. Please treat as confidential.</div>
                <ul className={styles.docList}>
                    <li className={styles.placeholder}>
                        <span className={styles.docIcon}>🔒</span>
                        <span className={styles.docName}>Security Overview PDF</span>
                        <span className={styles.docStatus}>Private</span>
                    </li>
                    <li className={styles.placeholder}>
                        <span className={styles.docIcon}>🔒</span>
                        <span className={styles.docName}>Architecture Diagram</span>
                        <span className={styles.docStatus}>Private</span>
                    </li>
                    <li className={styles.placeholder}>
                        <span className={styles.docIcon}>🔒</span>
                        <span className={styles.docName}>Pilot Plan</span>
                        <span className={styles.docStatus}>Private</span>
                    </li>
                    <li className={styles.placeholder}>
                        <span className={styles.docIcon}>🔒</span>
                        <span className={styles.docName}>Pricing Sheet</span>
                        <span className={styles.docStatus}>Private</span>
                    </li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2>Contact</h2>
                <p>
                    For specific security inquiries or updated documentation access:<br />
                    <strong>[TBD: SECURITY_EMAIL]</strong>
                </p>
            </section>
        </div>
    )
}
