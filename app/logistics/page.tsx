// app/logistics/page.tsx
import Link from 'next/link';
import NavBar from '@/components/NavBar'; // Assuming NavBar component path
import Image from 'next/image'; // Import Image (though not used directly if background)
// Import styles from the MAIN page.module.css
import styles from '../page.module.css';

export default function LogisticsPage() {
  return (
    <>
      <NavBar />
      {/* Use standard main layout */}
      <main className={styles.main}>

        {/* --- NEW Hero Section for Logistics Page --- */}
        {/* Background image applied via CSS using styles.logisticsHero */}
        <section className={styles.logisticsHero}>
          <div className={styles.heroContent}>
            {/* Moved Title and Description into Hero */}
            <h1 className={styles.heroTitle} style={{ textDecoration: 'none' }}> {/* No underline */}
              HODLOTTO Logistics
            </h1>
            <p className={styles.heroDescription}>
              Understanding the operational details and processes behind the HODLOTTO platform.
            </p>
          </div>
        </section>
        {/* --- END Hero Section --- */}


        {/* Main content section (containing the articles) */}
        <section className={styles.section}>

          {/* Logistics Content Articles */}
          <article className={styles.contentArticleStyled}>
            <h2 className={styles.contentHeading}>Draw Process</h2>
            <p className={styles.articleParagraph}>
              [Detailed explanation of how lottery draws are initiated, executed, randomization method (e.g., VRF), frequency, and how winners are determined...]
            </p>
          </article>

          <article className={styles.contentArticleStyled}>
            <h2 className={styles.contentHeading}>NFT Minting & Tiers</h2>
            <p className={styles.articleParagraph}>
              [Details on how users mint NFT tickets, the different tiers available, associated costs (if any), and how NFTs are delivered/managed...]
            </p>
          </article>

          <article className={styles.contentArticleStyled}>
            <h2 className={styles.contentHeading}>Prize Claim & Distribution</h2>
            <p className={styles.articleParagraph}>
              [Explanation of how winners are notified (if applicable), how prizes are claimed, the process for distributing winnings (e.g., automatic transfer, manual claim), and any timelines involved...]
            </p>
          </article>

           <article className={styles.contentArticleStyled}>
            <h2 className={styles.contentHeading}>Security & Audits</h2>
            <p className={styles.articleParagraph}>
              [Information about the security measures in place for the smart contracts and platform operations, mention of specific audits conducted...]
            </p>
          </article>
          {/* Add more relevant logistics sections as needed */}

        </section> {/* End main content section */}


        {/* Back Home Button */}
        {/* Using a simple div for centering */}
        <div style={{ margin: '2rem auto', paddingBottom: '2rem', textAlign: 'center' }}>
           <Link href="/" className={styles.buttonSecondary}>Back to Home</Link>
        </div>

      </main>
    </>
  );
}