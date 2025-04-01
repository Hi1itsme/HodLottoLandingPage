// app/ethics/page.tsx
import Link from 'next/link';
// Import styles from the MAIN page.module.css
import styles from '../page.module.css';

export default function EthicsPage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}> {/* Main content section */}
        <h1 className={styles.title}>Our Ethical Commitment</h1>
        <p className={styles.description} style={{ marginBottom: '2rem' }}>
          Understanding the principles of decentralization, safety, and fairness that form the foundation of the HODLOTTO ecosystem.
        </p>

        {/* Decentralization */}
        <article className={styles.contentArticle}>
          <h2 className={styles.contentHeading}>True Decentralization</h2>
          <p>
            HODLOTTO is designed to operate without a single point of control or failure. By leveraging blockchain technology and smart contracts, we aim to create a transparent and community-driven ecosystem where rules are enforced by code, not by a central authority. This minimizes censorship risk and ensures the platform operates as intended.
          </p>
          {/* Add more details about decentralization benefits if desired */}
        </article>

        {/* Safety & Security */}
        <article className={styles.contentArticle}>
          <h2 className={styles.contentHeading}>Safety and Security</h2>
          <p>
            Participant security is paramount. Our smart contracts undergo rigorous testing and audits (mention specific audits when available) to ensure they function correctly and securely. Using soulbound NFTs also adds a layer of security against certain types of market manipulation and fraud common in traditional NFT spaces. We are committed to maintaining a secure environment for all participants.
          </p>
          {/* Add more details about security measures */}
        </article>

        {/* Fairness */}
        <article className={styles.contentArticle}>
          <h2 className={styles.contentHeading}>Provable Fairness</h2>
          <p>
            Every participant deserves a fair chance. HODLOTTO utilizes verifiable, on-chain randomness (explain method if possible, e.g., Chainlink VRF) for winner selection, ensuring that draw outcomes are truly random and cannot be manipulated. Furthermore, the soulbound nature of tickets guarantees equal opportunity, preventing whales from simply buying up vast quantities of tickets on secondary markets just before a draw. The rules apply equally to everyone.
          </p>
          {/* Add more details about fairness mechanisms */}
        </article>

        {/* Conclusion / Philosophy */}
        <article className={styles.contentArticle}>
          <h2 className={styles.contentHeading}>Rewarding Long-Term Participation</h2>
          <p>
            Our economic and technological choices, like perpetual entries and soulbound NFTs, reflect an ethical stance focused on rewarding genuine, long-term participants rather than short-term speculation. We believe this fosters a healthier, more stable, and ultimately fairer ecosystem for the entire community.
          </p>
        </article>

        <p style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/" className={styles.buttonSecondary}>Back to Home</Link>
        </p>
      </section>
    </main>
  );
}