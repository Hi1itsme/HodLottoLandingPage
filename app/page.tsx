// app/page.tsx
import NavBar from '../components/NavBar';
import Link from 'next/link';
import styles from './page.module.css';

export default function LandingPage() {
  return (
    
    <main className={styles.main}>
      <NavBar />
      {/* --- Hero Section --- */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to HODLOTTO</h1>
          <p className={styles.heroDescription}>
            Revolutionizing the lottery system with NFT-powered participation and rewards.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/get-started" className={styles.buttonPrimary}>Get Started</Link>
            <Link href="/about" className={styles.buttonSecondary}>Learn More</Link>
          </div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>The HODLOTTO Advantage</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h3>🎟️ Permanent Entries</h3>
            <p>Your NFT is a permanent ticket, entering you into all future draws.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>📈 Tiered Opportunities</h3>
            <p>Choose from different NFT tiers to increase your chances of winning.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>⚖️ Weighted Advantage</h3>
            <p>Higher-tier NFTs grant more entries, boosting your winning chances.</p>
          </div>
        </div>
      </section>

      {/* --- Call to Action --- */}
      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Ready to Join the Revolution?</h2>
        <p className={styles.ctaDescription}>
          Get your NFT ticket today and start participating in the most innovative lottery system on the blockchain.
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/mint" className={styles.buttonPrimary}>Mint Your NFT Ticket</Link>
        </div>
      </section>

      {/* --- Footer Section --- */}
      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} HODLOTTO. All rights reserved.
        </p>
        <div className={styles.socialLinks}>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>{' | '}
          <a href="#" target="_blank" rel="noopener noreferrer">Discord</a>{' | '}
          <a href="#" target="_blank" rel="noopener noreferrer">Telegram</a>
        </div>
      </footer>
    </main>
  );
}
