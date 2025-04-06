// components/ParallaxInitializer.tsx
"use client"; // This component runs Rellax on the client

import { useEffect } from 'react';
import Rellax from 'rellax';

export default function ParallaxInitializer() {
  useEffect(() => {
    // Initialize Rellax after component mounts
    const rellax = new Rellax('.rellax-bg', {
      speed: 5, // <<< CHANGED TO POSITIVE VALUE for faster scroll
      center: true,
      round: true,
      vertical: true,
      horizontal: false
    });

    // Optional: Destroy Rellax instance on component unmount
    return () => {
      rellax.destroy();
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return null; // This component doesn't render anything visual itself
}