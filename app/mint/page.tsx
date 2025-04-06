// app/mint/page.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
// No Image import needed here if the section is just a background
import styles from '../page.module.css';

export default function MintPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [userAddress, setUserAddress] = useState<string | null>(null);
  const [mintStatus, setMintStatus] = useState('');
  const [isMinting, setIsMinting] = useState(false);

  const handleConnectWallet = async () => {
    console.log("Attempting to connect wallet...");
    setIsConnected(true);
    setUserAddress("0x1234...AbCd");
    setMintStatus('');
  };

  const handleMint = async () => {
    if (!isConnected) {
      setMintStatus("Please connect your wallet first.");
      return;
    }
    console.log("Attempting to mint NFT...");
    setIsMinting(true);
    setMintStatus("Minting in progress...");
    await new Promise(resolve => setTimeout(resolve, 2000));
    const success = Math.random() > 0.3;
    setMintStatus(success ? "Mint successful! Your NFT ticket is yours." : "Mint failed. Please try again.");
    setIsMinting(false);
  };

  return (
    <>
      <NavBar />
      {/* Use standard .main class (no background image) */}
      <main className={styles.main}>

        {/* --- Section acting as Background Image Container --- */}
        {/* Background image applied via CSS to styles.mintImageContainer */}
        <section className={styles.mintImageContainer}></section>
        {/* --- END Image Container Section --- */}


        {/* Mint Box - Positioned below the image container */}
        <div className={styles.mintBox}>
            {/* --- Title moved INSIDE mintBox --- */}
            <h1 className={styles.title} style={{ textDecoration: 'none', fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                Mint Your HODLOTTO Ticket
            </h1>
            {/* --- End Title --- */}


           {/* Connect Button or Wallet Info */}
           {!isConnected ? (
             <button onClick={handleConnectWallet} className={styles.connectButton}>
               Connect Wallet
             </button>
           ) : (
             <div className={styles.walletInfo}>
                <p>Connected: {userAddress?.substring(0, 6)}...{userAddress?.substring(userAddress.length - 4)}</p>
             </div>
           )}

           {/* Mint Button */}
           <button
              onClick={handleMint}
              className={styles.mintButton}
              disabled={!isConnected || isMinting}
            >
              {isMinting ? 'Minting...' : 'Mint Now'}
           </button>

           {/* Status Message */}
           {mintStatus && (
              <p className={styles.mintStatusMessage}>{mintStatus}</p>
           )}
        </div>


        {/* Back Home Link */}
        <div style={{ margin: '2rem auto', textAlign: 'center' }}>
             <Link href="/" className={styles.buttonSecondary}>Back to Home</Link>
        </div>

      </main>
    </>
  );
}