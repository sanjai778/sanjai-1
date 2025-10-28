import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import CtaSection from '@/app/components/sections/CtaSection';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import styles from './DownloadAppsPage.module.css';

export default function DownloadAppsPage() {
  return (
    <>
      <Header />
      <SubPageTitle title="Download Apps" />

      <main className={styles.container}>
        <div className={styles.gridContainer}>
          
          {/* First Column */}
          <div className={styles.column}>
            <h2 className={styles.title}>Onfra X</h2>
            <p className={styles.description}>Elegant, Handy and Easy to use host app.</p>
            <div className={styles.buttonContainer}>
              <a href="https://play.google.com/store/apps/details?id=com.ifelsetech.visitdesk.host&hl=en" target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
                <ArrowDownTrayIcon width={32} height={32} className={styles.icon} />
                <div>
                  <p className={styles.freeDownload}>FREE DOWNLOAD</p>
                  <p className={styles.storeName}>Google Play</p>
                </div>
              </a>
              <a href="https://apps.apple.com/us/app/visitdesk-host/id1478785849" target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
                <ArrowDownTrayIcon width={32} height={32} className={styles.icon} />
                <div>
                  <p className={styles.freeDownload}>FREE DOWNLOAD</p>
                  <p className={styles.storeName}>App Store</p>
                </div>
              </a>
            </div>
          </div>

          {/* Second Column */}
          <div className={styles.column}>
            <h2 className={styles.title}>Onfra Pad</h2>
            <p className={styles.description}>Smart, Comfortable and Easy to use tablet app.</p>
            <div className={styles.buttonContainer}>
              <a href="https://play.google.com/store/apps/details?id=com.ifelsetech.visitdesk.pad&hl=en" target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
                <ArrowDownTrayIcon width={32} height={32} className={styles.icon} />
                <div>
                  <p className={styles.freeDownload}>FREE DOWNLOAD</p>
                  <p className={styles.storeName}>Google Play</p>
                </div>
              </a>
              <a href="https://apps.apple.com/us/app/vistdesk-pad/id1481117891" target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
                <ArrowDownTrayIcon width={32} height={32} className={styles.icon} />
                <div>
                  <p className={styles.freeDownload}>FREE DOWNLOAD</p>
                  <p className={styles.storeName}>App Store</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <CtaSection />
      <Footer />
    </>
  );
}
