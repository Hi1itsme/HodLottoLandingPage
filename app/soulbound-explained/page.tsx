// app/soulbound-explained/page.tsx
import Link from 'next/link';
// Import styles from the MAIN page.module.css (note the '../')
import styles from '../page.module.css';

export default function SoulboundExplainedPage() {
  return (
    // Using the main layout styles for consistency
    <main className={styles.main}>
      <section className={styles.section}> {/* Wrap content in a section */}
        <h1 className={styles.title}>Soulbound Technology Explained</h1>
        <p className={styles.description} style={{ marginBottom: '2rem' }}>
          What Makes HODLOTTO NFTs Special? They utilize "soulbound technology," creating a unique relationship between you and your digital assets.
        </p>

        {/* What Does "Soulbound" Mean? */}
        <article className={styles.contentArticle}> {/* Use article for content blocks */}
          <h2 className={styles.contentHeading}>Understanding Soulbound NFTs</h2>
          <p>Soulbound NFTs are digital assets that, once minted to your wallet, become permanently bound to you. Unlike traditional NFTs:</p>
          <ul className={styles.contentList}>
            <li>They cannot be transferred to another wallet</li>
            <li>They cannot be sold on secondary markets</li>
            <li>They cannot be gifted to friends or family</li>
            <li>They remain with you for as long as you maintain your wallet</li>
          </ul>
          <p>The only way to remove a soulbound NFT from your wallet is to burn it, which permanently destroys it.</p>
        </article>

        {/* Why HODLOTTO Uses Soulbound Technology */}
        <article className={styles.contentArticle}>
          <h2 className={styles.contentHeading}>Why HODLOTTO Uses Soulbound Technology</h2>
          <p>This unique property creates several important advantages for the HODLOTTO ecosystem:</p>
          <ul className={styles.contentList}>
            <li><strong>True "Hold to Win" Mechanics:</strong> Rewards genuine participants, not speculators.</li>
            <li><strong>Long-term Community Building:</strong> Incentivizes maintaining your position.</li>
            <li><strong>Prevention of Market Manipulation:</strong> Eliminates speculation and pump-and-dump schemes.</li>
            <li><strong>Equal Access Opportunity:</strong> Everyone enters on the same terms.</li>
            <li><strong>Simplified Value Calculation:</strong> Value based purely on utility.</li>
          </ul>
        </article>

        {/* How It Works Technically */}
        <article className={styles.contentArticle}>
          <h2 className={styles.contentHeading}>How It Works Technically</h2>
          <p>Soulbound technology is implemented through smart contract code that:</p>
          <ul className={styles.contentList}>
            <li>Allows the initial minting transaction.</li>
            <li>Checks the origin and destination of any attempted transfer.</li>
            <li>Blocks any transfer except for burns.</li>
            <li>Maintains all lottery utility regardless of hold time.</li>
          </ul>
        </article>

        {/* The Benefits For You */}
        <article className={styles.contentArticle}>
          <h2 className={styles.contentHeading}>The Benefits For You</h2>
          <p>As a HODLOTTO participant, soulbound technology provides:</p>
          <ul className={styles.contentList}>
            <li><strong>Guaranteed Lottery Access:</strong> Entries cannot be taken away.</li>
            <li><strong>Simplified Strategy:</strong> Focus on tier selection, not market timing.</li>
            <li><strong>Long-term Planning:</strong> Your position is secure.</li>
            <li><strong>Community Stability:</strong> Participate with like-minded holders.</li>
            <li><strong>Reduced Complexity:</strong> No need to monitor trading activity.</li>
          </ul>
        </article>

        {/* What You Can Still Do */}
        <article className={styles.contentArticle}>
            <h2 className={styles.contentHeading}>What You Can Still Do With Your Soulbound NFTs</h2>
            <p>While you cannot transfer your HODLOTTO NFTs, you can still:</p>
            <ul className={styles.contentList}>
                <li>Display them in compatible wallets and platforms.</li>
                <li>Use them to verify your participation.</li>
                <li>Access any future utilities tied to ownership.</li>
                <li>Burn them if you decide to exit the system.</li>
            </ul>
        </article>

        {/* FAQ Section */}
        <article className={styles.contentArticle}>
            <h2 className={styles.contentHeading}>Frequently Asked Questions</h2>
            <div className={styles.faqItem}>
                <p><strong>Q: What happens if I lose access to my wallet?</strong></p>
                <p>A: Maintain secure backups of your recovery phrase. Losing access to your wallet means losing access to your NFTs.</p>
            </div>
            <div className={styles.faqItem}>
                <p><strong>Q: Can I still see my NFTs in my wallet?</strong></p>
                <p>A: Yes, they appear like any other NFT and can be viewed in your wallet or on the HODLOTTO dashboard.</p>
            </div>
            <div className={styles.faqItem}>
                <p><strong>Q: Why can't I sell an NFT if I want to exit?</strong></p>
                <p>A: This ensures genuine holders and prevents market dynamics from affecting the lottery. To exit, you can burn the NFT.</p>
            </div>
            <div className={styles.faqItem}>
                <p><strong>Q: Do soulbound NFTs still have value?</strong></p>
                <p>A: Absolutely! Their value comes from their ongoing utility in the lottery system, creating sustainable long-term value.</p>
            </div>
        </article>

        <p style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/" className={styles.buttonSecondary}>Back to Home</Link>
        </p>
      </section>
    </main>
  );
}