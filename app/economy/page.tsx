// app/economy/page.tsx
import Image from 'next/image';
import Link from 'next/link';
// Import styles from the MAIN page.module.css (note the '../')
import styles from '../page.module.css';

// Define the tier data - easier to manage here
const tierData = [
  { tier: 0, weight: 1, efficiency: 'Base efficiency' },
  { tier: 1, weight: 2, efficiency: '10% more efficient than Tier 0' },
  { tier: 2, weight: 4, efficiency: '20% more efficient than Tier 0' },
  { tier: 3, weight: 8, efficiency: '30% more efficient than Tier 0' },
  { tier: 4, weight: 16, efficiency: '40% more efficient than Tier 0' },
  { tier: 5, weight: 32, efficiency: '50% more efficient than Tier 0' },
  { tier: 6, weight: 64, efficiency: '60% more efficient than Tier 0' },
  { tier: 7, weight: 128, efficiency: '70% more efficient than Tier 0' },
  { tier: 8, weight: 256, efficiency: '80% more efficient than Tier 0' },
  { tier: 9, weight: 512, efficiency: '90% more efficient than Tier 0' },
];

export default function EconomyPage() {
  return (
    <main className={styles.main}>
      {/* --- Hero Image Section --- */}
      <section className={styles.hero}>
        <Image
          src="/spaceman_in_space.png"
          alt="HodLotto Economy - Astronaut in Space"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>The HODLOTTO Economy</h1>
          <p className={styles.heroDescription}>
            Explore the economic mechanics powering our NFT-based lottery ecosystem.
          </p>
        </div>
      </section>
      
      {/* --- Core Economic Principles --- */}
      <section className={styles.section}>
        <h2 className={styles.contentHeading}>Core Economic Principles</h2>
        <p>HODLOTTO NFTs derive value from:</p>
        <ul className={styles.contentList}>
          <li>Permanent lottery entry utility</li>
          <li>Weighted chance mechanisms</li>
          <li>Strategic tier selection</li>
          <li>Compounding entry effects</li>
        </ul>
      </section>

      {/* --- Three-Token Ecosystem --- */}
      <section className={styles.section}>
        <h2 className={styles.contentHeading}>Three-Token Ecosystem</h2>
        <h3 className={styles.contentSubHeading}>Native Blockchain Currency (e.g., ETH)</h3>
        <ul className={styles.contentList}>
          <li>Used for base minting operations</li>
          <li>Accessible to newcomers</li>
          <li>Provides liquidity for the treasury</li>
        </ul>

        <h3 className={styles.contentSubHeading}>HODL Token</h3>
        <ul className={styles.contentList}>
          <li>Primary utility token</li>
          <li>Used for premium tier minting</li>
          <li>Provides governance rights (planned)</li>
          <li>Benefits from deflationary mechanics</li>
        </ul>

        <h3 className={styles.contentSubHeading}>LOTTO Token</h3>
        <ul className={styles.contentList}>
          <li>Secondary ecosystem token</li>
          <li>Used for special promotions and events</li>
          <li>Earned through participation</li>
          <li>Enables community rewards</li>
        </ul>
      </section>

      {/* --- Treasury Management --- */}
      <section className={styles.section}>
        <h2 className={styles.contentHeading}>Balanced Treasury Management</h2>
        <p>The HODLOTTO treasury:</p>
        <ul className={styles.contentList}>
          <li>Receives all minting proceeds</li>
          <li>Maintains the prize pool reserve</li>
          <li>Funds ecosystem development</li>
          <li>Ensures long-term sustainability</li>
        </ul>
      </section>

      {/* --- NFT Tier Economics --- */}
      <section className={styles.section}>
        <h2 className={styles.contentHeading}>NFT Tier Economics</h2>
        <h3 className={styles.contentSubHeading}>Investment Efficiency</h3>
        <p>Higher tiers offer greater efficiency per investment unit:</p>

        {/* --- Table for Tier Data --- */}
        <div className={styles.tableContainer}>
          <table className={styles.economyTable}>
            <thead>
              <tr>
                <th>Tier</th>
                <th>Entry Weight</th>
                <th>Cost Efficiency</th>
              </tr>
            </thead>
            <tbody>
              {tierData.map((item) => (
                <tr key={item.tier}>
                  <td>{item.tier}</td>
                  <td>{item.weight}</td>
                  <td>{item.efficiency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ marginTop: '1rem' }}>Efficiency calculated based on entry weight per investment unit.</p>

        <h3 className={styles.contentSubHeading}>Pricing Strategy</h3>
        <p>HODLOTTO's tier pricing follows a strategic curve that:</p>
        <ul className={styles.contentList}>
          <li>Rewards higher commitment</li>
          <li>Creates natural entry points</li>
          <li>Balances accessibility with exclusivity</li>
          <li>Adjusts based on ecosystem growth</li>
        </ul>
      </section>

      {/* --- Prize Pool Mechanics --- */}
      <section className={styles.section}>
        <h2 className={styles.contentHeading}>Prize Pool Mechanics</h2>
        <h3 className={styles.contentSubHeading}>Prize Pool Formation</h3>
        <p>Formed from:</p>
        <ul className={styles.contentList}>
          <li>70% of all minting proceeds</li>
          <li>10% of secondary market royalties (HODL/LOTTO tokens)</li>
          <li>Strategic treasury allocations</li>
          <li>Sponsor contributions (special events)</li>
        </ul>

        <h3 className={styles.contentSubHeading}>Distribution Model (Standard Weekly)</h3>
        <ul className={styles.contentList}>
          <li>85% to the primary winner</li>
          <li>10% to secondary winners</li>
          <li>5% to the community development fund</li>
        </ul>
        <p>Special event drawings may have custom distributions.</p>
      </section>

      {/* --- Economic Sustainability --- */}
      <section className={styles.section}>
        <h2 className={styles.contentHeading}>Economic Sustainability</h2>
        <h3 className={styles.contentSubHeading}>Continuous Growth Model</h3>
        <p>Permanent entries create:</p>
        <ul className={styles.contentList}>
          <li>Increasing total entry pool</li>
          <li>Growing prize pools</li>
          <li>Natural scarcity of winning probability</li>
          <li>Long-term incentive for early participation</li>
        </ul>

        <h3 className={styles.contentSubHeading}>Treasury Allocation</h3>
        <ul className={styles.contentList}>
          <li>70% to prize pools</li>
          <li>15% to development and operations</li>
          <li>10% to marketing and growth</li>
          <li>5% to community initiatives</li>
        </ul>
      </section>

      {/* --- Future Economic Developments --- */}
      <section className={styles.section}>
        <h2 className={styles.contentHeading}>Future Economic Developments</h2>
        <p>Plans include:</p>
        <ul className={styles.contentList}>
          <li>Staking mechanisms</li>
          <li>DAO governance for treasury</li>
          <li>Prize pool diversification</li>
          <li>Strategic partnerships</li>
        </ul>
      </section>

      {/* --- Participation Strategy --- */}
      <section className={styles.section}>
        <h2 className={styles.contentHeading}>Participation Strategy</h2>
        <h3 className={styles.contentSubHeading}>For Individual Participants</h3>
        <ul className={styles.contentList}>
          <li>Entry Strategy: Balance tier and quantity.</li>
          <li>Reinvestment Strategy: Use winnings to grow position.</li>
          <li>Diversification Strategy: Combine tiers for coverage.</li>
        </ul>

        <h3 className={styles.contentSubHeading}>For Groups/DAOs</h3>
        <ul className={styles.contentList}>
          <li>Pooling Strategy: Collective entry to higher tiers.</li>
          <li>Distribution Strategy: Fair reward sharing.</li>
          <li>Governance Strategy: Collaborative tier selection.</li>
        </ul>
      </section>
      
      {/* Back to Home Button */}
      <p style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link href="/" className={styles.buttonSecondary}>Back to Home</Link>
      </p>
    </main>
  );
}
