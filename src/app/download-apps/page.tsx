import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import CtaSection from '@/app/components/sections/CtaSection';
import Image from 'next/image';
import styles from './DownloadAppsPage.module.css';

export default function DownloadAppsPage() {
  return (
    <>
      <Header />
      <SubPageTitle title="Download Apps" />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Onfra X</h2>
            <p className="text-gray-600 mb-6">Elegant, Handy and Easy to use host app.</p>
            <div className="flex justify-center space-x-4">
              <a href="https://play.google.com/store/apps/details?id=com.ifelsetech.visitdesk.host&hl=en" target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
                <Image src="/assets/img/playstore.png" alt="Google Play" width={32} height={32} />
                <div>
                  <p className={styles.freeDownload}>FREE DOWNLOAD</p>
                  <p className={styles.storeName}>Google Play</p>
                </div>
              </a>
              <a href="https://apps.apple.com/us/app/visitdesk-host/id1478785849" target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
                <Image src="/assets/img/app-iOS.png" alt="App Store" width={32} height={32} />
                <div>
                  <p className={styles.freeDownload}>FREE DOWNLOAD</p>
                  <p className={styles.storeName}>App Store</p>
                </div>
              </a>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Onfra Pad</h2>
            <p className="text-gray-600 mb-6">Smart, Comfortable and Easy to use tablet app.</p>
            <div className="flex justify-center space-x-4">
              <a href="https://play.google.com/store/apps/details?id=com.ifelsetech.visitdesk.pad&hl=en" target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
                <Image src="/assets/img/playstore.png" alt="Google Play" width={32} height={32} />
                <div>
                  <p className={styles.freeDownload}>FREE DOWNLOAD</p>
                  <p className={styles.storeName}>Google Play</p>
                </div>
              </a>
              <a href="https://apps.apple.com/us/app/vistdesk-pad/id1481117891" target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
                <Image src="/assets/img/app-iOS.png" alt="App Store" width={32} height={32} />
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
