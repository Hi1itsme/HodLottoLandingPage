// Remove "use client"; if no client-side hooks or event handlers are needed on this specific page AFTER removing style jsx
// "use client";
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css'; // Ensure this import path is correct ('./page.module.css')
// import MintButton from '../components/MintButton'; // Removed unused import for now

export default function LandingPage() {
  // --- Hodlotto Details from your summary ---
  const projectName = 'HODLOTTO'; // Using caps as in your text
  const projectTicker = 'HLT'; // Keeping suggested ticker, change if needed
  const tagline = 'Revolutionizing Lottery Systems with NFT Technology.';
  const description = `HODLOTTO is the first-of-its-kind NFT-powered lottery system rewarding holders with ongoing entries. Unlike traditional lotteries, HODLOTTO transforms your participation into lasting digital assets that continue generating value.`;
  // --- End of details ---

  return (
    // --- CORRECTED className here ---
    <main className={styles.main}>
      {/* --- Hero Section --- */}
      <header className={styles.hero}>
        {/* Optional: <Image src="/logo.png" alt={`${projectName} Logo`} width={100} height={100} /> */}
        <h1 className={styles.title}>{projectName}</h1>
        <p className={styles.tagline}>{tagline}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.ctaButtons}>
          {/* Using standard buttons as per your pasted code */}
          <button className={styles.buttonPrimary}>Mint Your NFT Ticket</button>
          <button className={styles.buttonSecondary}>
            Getting Started Guide
          </button>
        </div>
      </header>

      {/* --- Features Section (The HODLOTTO Difference) --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The {projectName} Difference</h2>
        <div className={styles.featuresGrid}>
          {/* Feature Cards */}
          <div className={styles.featureCard}>
            <h3>🎟️ Permanent Entries</h3>
            <p>
              Every NFT is a permanent ticket, entering you into all future draws.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>📈 Tiered Opportunities</h3>
            <p>
              Choose from different NFT tiers to customize your participation strategy.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>⚖️ Weighted Advantage</h3>
            <p>
              Higher tier NFTs grant more entries, increasing your winning chances.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>🔒 Soulbound Assets</h3>
            <p>
              Your NFT tickets are bound to your wallet, ensuring true digital ownership.
              <br />
              <Link href="/soulbound-explained" className={styles.learnMoreLink}>Learn more about Soulbound Technology</Link>
            </p>
          </div>
        </div>
      </section>

      {/* --- Core Mechanics Section --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Core Mechanics</h2>
        {/* List uses styles from page.module.css */}
        <ul className={styles.coreMechanicsList}>
          <li>
            Mint NFTs from different tiers based on your preferred investment level.
          </li>
          <li>
            Automatically enter all future lottery draws as long as you hold your NFTs.
          </li>
          <li>
            Increase your odds by strategically collecting higher-tier NFTs.
          </li>
          <li>
            Win rewards distributed directly to your connected wallet via secure smart contracts.
          </li>
        </ul>
        <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#555' }}>
          Built on secure blockchain technology with transparent, verifiable smart contracts.
        </p>
      </section>

      {/* --- Economy Section --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The {projectName} Economy</h2>
        <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 1.5rem auto' }}>
          Discover the unique economic model behind {projectName}, built on utility, strategic holding, and a balanced multi-token system designed for sustainable growth and participant rewards.
        </p>
        <div style={{ textAlign: 'center' }}>
          <Link href="/economy" className={styles.buttonSecondary}>Explore the Economy</Link>
        </div>
      </section>

      {/* --- Explore Content Section --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Explore Our Content</h2>
        <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 1.5rem auto' }}>
          Dive deeper into HODLOTTO with our articles, infographics, and detailed content pieces exploring the technology and philosophy behind the project.
        </p>
        <div style={{
            textAlign: 'center',
            marginTop: '1rem',
            padding: '1.5rem',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <p style={{ marginBottom: '1rem' }}>
            <strong>Featured Topic:</strong><br />
            Decentralized, Safe, and Fair: The Ethics Behind a Proper Decentralized (and Perpetual) Lottery Ecosystem/DAO
          </p>
          {/* --- Link Updated --- */}
          <div className={styles.ctaButtons} style={{ justifyContent: 'center' }}>
             {/* Use Link for internal page navigation */}
             <Link href="/ethics" className={styles.buttonSecondary}>
                 Read Articles
             </Link>
             {/* Keep external link or placeholder as 'a' tag */}
             <a href="#" target="_blank" rel="noopener noreferrer" className={styles.buttonSecondary}>
                 View Infographics
             </a>
          </div>
          {/* --- End Link Update --- */}
        </div>
      </section>

      {/* --- Long-Term Focus Section --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Built for Long-Term Participants
        </h2>
        <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}> {/* Centered paragraph */}
          {projectName} rewards strategy and patience. The system benefits early participants and long-term holders through compounding chances and future utility planned for the ecosystem. Establish your position and increase your cumulative odds over time.
        </p>
      </section>

      {/* --- Roadmap Section --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Project Roadmap</h2>
        <ul className={styles.roadmapList}>
          <li>✅ Q2 2025: NFT Ticket Contract Audit & Deployment</li>
          <li>✅ Q3 2025: Platform Launch & First Draw</li>
          <li>
            ⏳ Q4 2025: Marketplace Integration for Ticket Trading
            {/* Check applicability with Soulbound */}
          </li>
          <li>⏳ Q1 2026: Implementing Additional Holder Utilities</li>
        </ul>
      </section>

      {/* --- Footer Section --- */}
      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} {projectName}. All rights reserved.
        </p>
        <div className={styles.socialLinks}>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>{' | '}
          <a href="#" target="_blank" rel="noopener noreferrer">Discord</a>{' | '}
          <a href="#" target="_blank" rel="noopener noreferrer">Telegram</a>
        </div>
      </footer>

      {/* --- REMOVED style jsx block --- */}

    </main>
  );
}