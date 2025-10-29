import Image from 'next/image';
import styles from './LogoMarquee.module.css';
var LogoMarquee = function () {
    return (<section className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        <Image src="/images/logos/clients_logos.webp" alt="Client Logos" width={2000} height={100} className='w-full max-w-md h-auto object-cover'/>
        {/* Duplicate the image for a seamless loop */}
        <Image src="/images/logos/clients_logos.webp" alt="Client Logos" width={2000} height={100} aria-hidden="true" className='w-full max-w-md h-auto object-cover'/>
      </div>
    </section>);
};
export default LogoMarquee;
