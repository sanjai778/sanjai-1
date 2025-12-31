import Image from 'next/image';
import styles from './LogoMarquee.module.css';

const LogoMarquee: React.FC = () => {
  return (
    <section className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        <Image
          src="/images/logos/clients_logos.webp"
          alt="Client Logos"
          width={2500}
          height={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 2500px"
          loading="lazy"
        />
        {/* Duplicate the image for a seamless loop */}
        <Image
          src="/images/logos/clients_logos.webp"
          alt="Client Logos"
          width={2500}
          height={100}
          aria-hidden="true"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 2500px"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default LogoMarquee;
