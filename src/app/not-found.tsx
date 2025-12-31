import Link from 'next/link';
import Image from 'next/image';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.circleOuter}>
        <Image
          src="/uploads/2024/08/404.png"
          alt="404 Not Found"
          width={500}
          height={500}
          className={styles.image}
        />
        <h1 className={styles.title}>Looks like you have lost.</h1>
        <Link href="/" className={styles.button}>
          Go Home
        </Link>
      </div>
    </div>
  );
}
