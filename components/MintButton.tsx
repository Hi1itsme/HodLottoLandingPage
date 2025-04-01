"use client"; // <-- Mark this component as a Client Component

import React from 'react';
import styles from '../app/page.module.css'; // Adjust path if needed

export default function MintButton() {
  const handleMintClick = () => {
    // This function runs ONLY in the browser
    console.log("Mint button clicked!");
    alert("Minting functionality would go here!");
    // Add your actual minting logic here (e.g., interacting with a wallet)
  };

  return (
    <button className={styles.buttonPrimary} onClick={handleMintClick}>
      Mint Your NFT Ticket
    </button>
  );
}