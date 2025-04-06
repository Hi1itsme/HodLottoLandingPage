// app/economy/page.tsx (Corrected Version)
import NavBar from '@/components/NavBar';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../page.module.css';

const tierData = [
  { tier: 0, weight: 1, efficiency: 'Base efficiency' },
  { tier: 1, weight: 2, efficiency: '10% more efficient' },
  { tier: 2, weight: 4, efficiency: '20% more efficient' },
  { tier: 3, weight: 8, efficiency: '30% more efficient' },
  { tier: 4, weight: 16, efficiency: '40% more efficient' },
  { tier: 5, weight: 32, efficiency: '50% more efficient' },
  // Add more tiers if needed, up to 9 based on original text
];

export default function EconomyPage() {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        {/* --- Hero Section --- */}
        <section className={styles.hero}>
           {/* Ensure spaceman_bank.png is in /public */}
          <Image
            src="/spaceman_bank.png"
            alt="HODLOTTO Economy Background" // Updated Alt Text
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle} style={{ textDecoration: 'none' }}>The HODLOTTO Economy</h1>
            <p className={styles.heroDescription}>
              Explore the mechanics that power sustainable value and continuous rewards.
            </p>
          </div>
        </section>

        {/* --- Core Economic Principles --- */}
        <section className={styles.section}>
           <h2 className={styles.sectionTitle}>Core Economic Principles</h2>
           <p className={styles.infoParagraph}>
              HODLOTTO's economy prioritizes true utility over speculation. The value of HODLOTTO NFTs stems directly from their permanent lottery entries, the weighted chance mechanisms based on strategic tier selection, and the compounding effect of holding multiple entries over time.
           </p>
        </section>

        {/* --- Treasury Management --- */}
        {/* Moved Treasury section up for better flow before Tiers/Tokens */}
        <section className={styles.section}>
           <h2 className={styles.sectionTitle}>Balanced Treasury Management</h2>
           <p className={styles.infoParagraph}>
              A balanced treasury ensures the platform's longevity and growth. It systematically receives all minting proceeds, maintains a robust reserve for prize pools, strategically funds ongoing ecosystem development and operations, and supports community initiatives, creating a sustainable economic loop.
           </p>
        </section>

        {/* --- NFT Tiers and Efficiency --- */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>NFT Tier Efficiency</h2>
          {/* Added intro paragraph */}
          <p className={styles.infoParagraph}>
             While higher tiers require larger investments, they offer greater cost efficiency based on entry weight per investment unit:
          </p>
          <div className={styles.tableContainer}>
            <table className={styles.economyTable}>
              <thead>
                <tr>
                  <th>Tier</th>
                  <th>Entry Weight</th>
                  <th>Efficiency</th>
                </tr>
              </thead>
              <tbody>
                {tierData.map(({ tier, weight, efficiency }) => (
                  // Added required unique key prop
                  <tr key={tier}>
                    <td>{tier}</td>
                    <td>{weight}</td>
                    <td>{efficiency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* --- Three-Token Ecosystem (Using Feature Cards) --- */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Three-Token Ecosystem</h2>
          {/* Optional: Add intro paragraph here if desired */}
          {/* <p className={styles.infoParagraph}>The ecosystem utilizes three distinct tokens...</p> */}
          <div className={styles.featuresGrid} style={{marginTop: '1rem'}}> {/* Reduced top margin */}
            <div className={styles.featureCard}>
              <h3>Native Token (ETH)</h3>
              <p>Base liquidity for minting operations and prizes.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>HODL Token</h3>
              <p>Main utility token for premium NFTs and governance.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>LOTTO Token</h3>
              <p>Secondary token for community rewards and events.</p>
            </div>
          </div>
        </section>

        {/* --- Prize Pool Mechanics --- */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Prize Pool Mechanics</h2>
          {/* Removed intro <p> tag */}
          <ul className={styles.contentList}>
            <li>70% Minting proceeds</li>
            <li>10% Secondary royalties</li>
            <li>Community contributions</li>
            {/* Add more details from original text if needed */}
          </ul>
        </section>

        {/* --- Sustainability and Growth --- */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sustainability & Growth</h2>
          {/* Applied consistent paragraph style */}
          <p className={styles.infoParagraph}>
             Long-term sustainability is driven by compounding participation, strategic treasury management, and continuous reinvestment into community development.
          </p>
        </section>

        {/* --- CTA back to Home --- */}
        {/* Using div instead of .cta section for simplicity */}
        <div style={{ margin: '2rem auto', paddingBottom: '2rem', textAlign: 'center' }}>
           <Link href="/" className={styles.buttonPrimary}>Back to Home</Link>
        </div>
      </main>
    </>
  );
}