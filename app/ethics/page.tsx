// app/ethics/page.tsx
import Link from 'next/link';
import Image from 'next/image'; // Keep import if used elsewhere, though not directly here
import NavBar from '@/components/NavBar'; // Assuming NavBar component path
import styles from '../page.module.css'; // Import styles

export default function EthicsPage() {
  // The concise summary paragraph
  const ethicsSummary = "The ethical foundation of a decentralized and perpetual lottery ecosystem, potentially governed by a DAO, centers on transparency, fairness, security, and long-term participant value. Decentralization ensures resistance to censorship and single-party control, with rules governed by code and community (DAO). Fairness is achieved through provably random draws and equal opportunity access, often enhanced by mechanisms like soulbound NFTs that prevent speculative manipulation of entries. Security through audited smart contracts and a focus on rewarding sustained participation over trading further solidify an ethical approach centered on community benefit and sustainable growth.";

  return (
    <>
      <NavBar /> {/* Added NavBar */}
      <main className={styles.main}>

        {/* --- Hero Section for Ethics Page --- */}
        {/* Background applied via CSS using styles.ethicsHero */}
        <section className={styles.ethicsHero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle} style={{ textDecoration: 'none' }}>
              Our Ethical Commitment
            </h1>
            <p className={styles.heroDescription}>
              Transparency, Fairness, Security, and Long-Term Value at the Core of HODLOTTO.
            </p>
          </div>
        </section>
        {/* --- END Hero Section --- */}


        {/* Wrap main content in a section for consistent padding/background */}
        <section className={styles.section}>
          {/* Ethics Summary Paragraph */}
          {/* You can decide if you still want this visible, or just rely on Hero + Articles */}
          <p className={styles.infoParagraph} style={{ marginTop: 0, marginBottom: '3rem' }}>
             {ethicsSummary}
          </p>

          {/* --- Content Articles with Detailed Text --- */}
          <article className={styles.contentArticleStyled}>
            <h2 className={styles.contentHeading}>True Decentralization</h2>
            <p className={styles.articleParagraph}>
              HODLOTTO is designed to operate without a single point of control or failure. By leveraging blockchain technology and smart contracts, we aim to create a transparent and community-driven ecosystem where rules are enforced by code, not by a central authority. This minimizes censorship risk and ensures the platform operates as intended.
            </p>
          </article>

          <article className={styles.contentArticleStyled}>
            <h2 className={styles.contentHeading}>Safety and Security</h2>
            <p className={styles.articleParagraph}>
              Participant security is paramount. Our smart contracts undergo rigorous testing and audits (mention specific audits when available) to ensure they function correctly and securely. Using soulbound NFTs also adds a layer of security against certain types of market manipulation and fraud common in traditional NFT spaces. We are committed to maintaining a secure environment for all participants.
            </p>
          </article>

          <article className={styles.contentArticleStyled}>
            <h2 className={styles.contentHeading}>Provable Fairness</h2>
            <p className={styles.articleParagraph}>
              Every participant deserves a fair chance. HODLOTTO utilizes verifiable, on-chain randomness (explain method if possible, e.g., Chainlink VRF) for winner selection, ensuring that draw outcomes are truly random and cannot be manipulated. Furthermore, the soulbound nature of tickets guarantees equal opportunity, preventing whales from simply buying up vast quantities of tickets on secondary markets just before a draw. The rules apply equally to everyone.
            </p>
          </article>

          <article className={styles.contentArticleStyled}>
            <h2 className={styles.contentHeading}>Rewarding Long-Term Participation</h2>
            <p className={styles.articleParagraph}>
              Our economic and technological choices, like perpetual entries and soulbound NFTs, reflect an ethical stance focused on rewarding genuine, long-term participants rather than short-term speculation. We believe this fosters a healthier, more stable, and ultimately fairer ecosystem for the entire community.
            </p>
          </article>
        </section> {/* End main content section */}


        {/* Back Home Button */}
        <div style={{ margin: '2rem auto', paddingBottom: '2rem', textAlign: 'center' }}>
           <Link href="/" className={styles.buttonSecondary}>Back to Home</Link>
        </div>

      </main>
    </>
  );
}