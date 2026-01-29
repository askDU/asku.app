import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Campus life in one cockpit.</h1>
        <p className={styles.subtitle}>
          Empower students with real-time tools while giving administrators a privacy-safe intelligence layer.
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </span>
            <span>Real-time dining, events, and answers</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
            </span>
            <span>Demand forecasting & friction heatmaps</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </span>
            <span>Privacy-safe infrastructure</span>
          </div>
        </div>

        <div className={styles.ctaWrapper}>
          <a href="mailto:pilot@asku.app" className={styles.primaryButton}>
            Request a Pilot
          </a>
        </div>

        <div className={styles.trustStrip}>
          <div className={styles.trustLabel}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            Privacy-safe by design
          </div>
          <div className={styles.trustLinks}>
            <Link href="/security" className={styles.trustLink}>Security</Link>
            <Link href="/legal/privacy" className={styles.trustLink}>Privacy</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
