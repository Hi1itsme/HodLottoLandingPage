// components/NavBar.tsx
import Link from 'next/link';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navLogo}>
          HODLOTTO
        </Link>
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/economy" className={styles.navLink}>Economy</Link>
          <Link href="/mint" className={styles.navLink}>Mint</Link>
          <Link href="/logistics" className={styles.navLink}>Logistics</Link>
          <Link href="/ethics" className={styles.navLink}>Ethics</Link>
        </div>
      </div>
    </nav>
  );
}
