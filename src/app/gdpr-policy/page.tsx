import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import CtaSection from '@/app/components/sections/CtaSection';
import styles from './GdprPolicyPage.module.css';

const GdprPolicyPage = () => {
  return (
    <>
      <Header />
      <SubPageTitle title="GDPR Policy" />
      <main className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <p className={styles.paragraph}>
              IFELSE TECHSMART SOLUTIONS PRIVATE LIMITED ("we," "our," or "us") is committed to protecting the privacy and data of our users and clients. This GDPR (General Data Protection Regulation) Policy outlines our practices regarding the collection, use, and protection of personal data in compliance with the GDPR.
            </p>
            <ol className={styles.list}>
              <li className={styles.listItem}>
                <h4 className={styles.heading}>Data Controller and Data Processor:</h4>
                <p>IFELSE TECHSMART SOLUTIONS PRIVATE LIMITED acts as both a data controller and a data processor, depending on the context of data processing activities.</p>
              </li>
              <li className={styles.listItem}>
                <h4 className={styles.heading}>Data Collection and Purpose:</h4>
                <p>We collect and process personal data for specific, explicit, and legitimate purposes. These purposes include providing our SaaS services, improving user experience, and ensuring compliance with legal obligations.</p>
              </li>
              <li className={styles.listItem}>
                <h4 className={styles.heading}>Types of Data Collected:</h4>
                <p>We may collect and process various types of personal data, including but not limited to user names, email addresses, contact details, and usage data.</p>
              </li>
              <li className={styles.listItem}>
                <h4 className={styles.heading}>Legal Basis for Processing:</h4>
                <p>We process personal data based on the user's consent, the necessity of processing for the performance of a contract, compliance with legal obligations, protection of vital interests, the performance of a task carried out in the public interest or the exercise of official authority, or the legitimate interests pursued by IFELSE TECHSMART SOLUTIONS PRIVATE LIMITED or a third party.</p>
              </li>
              <li className={styles.listItem}>
                <h4 className={styles.heading}>Data Minimization:</h4>
                <p>We only collect and process personal data that is necessary for the intended purpose and ensure that it is kept accurate and up-to-date.</p>
              </li>
              <li className={styles.listItem}>
                <h4 className={styles.heading}>Data Security:</h4>
                <p>We implement appropriate technical and organizational measures to ensure the security of personal data, including encryption, access controls, and regular security assessments.</p>
              </li>
              <li className={styles.listItem}>
                <h4 className={styles.heading}>Data Subject Rights:</h4>
                <p>Data subjects have the right to access, rectify, erase, restrict processing, and port their personal data. Requests related to these rights will be processed promptly.</p>
              </li>
              <li className={styles.listItem}>
                <h4 className={styles.heading}>Data Transfers:</h4>
                <p>Any international transfer of personal data will be conducted in compliance with GDPR requirements. Adequate safeguards, such as standard contractual clauses, will be implemented.</p>
              </li>
              <li className={styles.listItem}>
                <h4 className={styles.heading}>Data Breach Notification:</h4>
                <p>In the event of a data breach that poses a risk to the rights and freedoms of individuals, we will notify the relevant supervisory authority and affected data subjects without undue delay.</p>
              </li>
              <li className={styles.listItem}>
                <h4 className={styles.heading}>Data Protection Officer (DPO):</h4>
                <p>IFELSE TECHSMART SOLUTIONS PRIVATE LIMITED has appointed a Data Protection Officer responsible for ensuring compliance with data protection laws and policies. The DPO can be contacted at <a href="mailto:compliance@onfra.io" className={styles.link}>compliance@onfra.io</a>.</p>
              </li>
              <li className={styles.listItem}>
                <h4 className={styles.heading}>Data Retention:</h4>
                <p>Personal data will be retained only for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required or permitted by law.</p>
              </li>
              <li className={styles.listItem}>
                <h4 className={styles.heading}>Policy Review:</h4>
                <p>This GDPR Policy will be reviewed regularly and updated as necessary to ensure ongoing compliance with data protection laws.</p>
              </li>
            </ol>
            <div className={styles.marginTop8}>
              <h3 className={styles.subheading}>Contact Information:</h3>
              <p className={`${styles.paragraph} ${styles.marginTop2}`}>
                If you have any questions or concerns regarding our GDPR Policy, please contact us at <a href="mailto:hello@onfra.io" className={styles.link}>hello@onfra.io</a>.
              </p>
              <h4 className={`${styles.heading} ${styles.marginTop4}`}>Date of Last Update: 28.11.2023</h4>
              <p className={`${styles.paragraph} ${styles.marginTop2}`}>
                IFELSE TECHSMART SOLUTIONS PRIVATE LIMITED is committed to continuous improvement and adherence to the highest standards of data protection.
              </p>
            </div>
          </div>
        </div>
      </main>
      <CtaSection />
      <Footer />
    </>
  );
};

export default GdprPolicyPage;
