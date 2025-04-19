import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero({ title, subtitle, backgroundImage, ctaText, ctaLink }) {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.overlay}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Link href={ctaLink} className={styles.button}>{ctaText}</Link>
      </div>
    </div>
  );
}
