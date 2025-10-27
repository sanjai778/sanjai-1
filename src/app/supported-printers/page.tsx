import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import CtaSection from '@/app/components/sections/CtaSection';
import styles from './SupportedPrinters.module.css';
export default function SupportedPrintersPage() {
  return (
    <>
      <Header />
      <SubPageTitle title="Supported Printers" />
      <main className="container">
        <div className={styles.content}>
          <p>
            In the past, it was difficult to find a personal printer that could handle the needed tasks for a specific project. Nowadays, there are tons of printers available on the market. However, not all printers support certain features or platforms. Making sure that you have the printer that supports the type of business you are running is crucial.
          </p>
          <br />
          <p>
            When choosing a SaaS solution, it is important to check if the app supports the type of printers you plan to purchase. If you want to buy a particular brand of printer, make sure that the SaaS app supports that model. Also, consider whether the app supports both Bluetooth and Wifi. If you’re looking for a cheap printer, you might want to check out our list of the supported printers which you find budget-friendly.
          </p>
        </div>
        <div className={styles.tableContainer}>
          <table className={`${styles.table} ${styles.showDtOnly}`}>
            <tbody>
              <tr className={styles.borderBottom}>
                <td rowSpan={2} className={styles.printersCol}>Printers</td>
                <td colSpan={2} className={styles.iosCol}>
                  <span className={styles.tdIconWrapper}>
                    <img src="/uploads/2022/09/apple1.png" alt="iOS" width="24" height="24" />
                    iOS
                  </span>
                </td>
                <td colSpan={2} className={styles.androidCol}>
                  <span className={styles.tdIconWrapper}>
                    <img src="/uploads/2022/09/android.png" alt="Android" width="24" height="24" />
                    Android
                  </span>
                </td>
              </tr>
              <tr className={styles.borderBottom}>
                <td>
                  <span className={styles.tdIconWrapper}>
                    <img src="/uploads/2022/09/wifi.png" alt="WIFI" width="24" height="24" />
                    WIFI
                  </span>
                </td>
                <td>
                  <span className={styles.tdIconWrapper}>
                    <img src="/uploads/2022/09/bluetooth.png" alt="BLUETOOTH" width="24" height="24" />
                    BLUETOOTH
                  </span>
                </td>
                <td>
                  <span className={styles.tdIconWrapper}>
                    <img src="/uploads/2022/09/wifi.png" alt="WIFI" width="24" height="24" />
                    WIFI
                  </span>
                </td>
                <td>
                  <span className={styles.tdIconWrapper}>
                    <img src="/uploads/2022/09/bluetooth.png" alt="BLUETOOTH" width="24" height="24" />
                    BLUETOOTH
                  </span>
                </td>
              </tr>
              <tr className={styles.borderBottom}>
                <td className={styles.textAlignLeft}>Brother Lable Printers</td>
                <td className={`${styles.center} ${styles.p1} ${styles.borderRight}`}>
                  <img src="/uploads/2019/01/success.svg" alt="Success" width="24" height="24" />
                  <span className={styles.airprintLink}><a href="https://support.apple.com/en-us/HT201311" target="_blank" rel="noopener noreferrer">[Via Airprint]</a></span>
                </td>
                <td className={`${styles.center} ${styles.p1} ${styles.borderRight}`}>
                  <img src="/uploads/2019/01/error.svg" alt="Error" width="24" height="24" />
                </td>
                <td className={`${styles.center} ${styles.p1} ${styles.borderRight}`}>
                  <img src="/uploads/2019/01/success.svg" alt="Success" width="24" height="24" />
                </td>
                <td className={`${styles.center} ${styles.p1} ${styles.borderRight}`}>
                  <img src="/uploads/2019/01/success.svg" alt="Success" width="24" height="24" />
                </td>
              </tr>
              <tr className={styles.borderBottom}>
                <td className={styles.textAlignLeft}>Other Printers</td>
                <td className={`${styles.center} ${styles.p1} ${styles.borderRight}`}>
                  <img src="/uploads/2019/01/success.svg" alt="Success" width="24" height="24" />
                  <span className={styles.airprintLink}><a href="https://support.apple.com/en-us/HT201311" target="_blank" rel="noopener noreferrer">[Via Airprint]</a></span>
                </td>
                <td className={`${styles.center} ${styles.p1} ${styles.borderRight}`}>
                  <img src="/uploads/2019/01/error.svg" alt="Error" width="24" height="24" />
                </td>
                <td className={`${styles.center} ${styles.p1} ${styles.borderRight}`}>
                  <img src="/uploads/2019/01/error.svg" alt="Error" width="24" height="24" />
                </td>
                <td className={`${styles.center} ${styles.p1} ${styles.borderRight}`}>
                  <img src="/uploads/2019/01/error.svg" alt="Error" width="24" height="24" />
                </td>
              </tr>
              <tr className={styles.borderBottom}>
                <td className={styles.textAlignLeft}>ESC/POS Printers</td>
                <td className={`${styles.center} ${styles.p1} ${styles.borderRight}`}>
                  <img src="/uploads/2019/01/error.svg" alt="Error" width="24" height="24" />
                </td>
                <td className={`${styles.center} ${styles.p1} ${styles.borderRight}`}>
                  <img src="/uploads/2019/01/success.svg" alt="Success" width="24" height="24" />
                </td>
                <td className={`${styles.center} ${styles.p1} ${styles.borderRight}`}>
                  <img src="/uploads/2019/01/error.svg" alt="Error" width="24" height="24" />
                </td>
                <td className={`${styles.center} ${styles.p1} ${styles.borderRight}`}>
                  <img src="/uploads/2019/01/success.svg" alt="Success" width="24" height="24" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <CtaSection />
      <Footer />
    </>
  );
}
