import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import CtaSection from '@/app/components/sections/CtaSection';
import styles from './EnterpriseReady.module.css';
import Image from 'next/image';

const EnterpriseReadyPage = () => {
  return (
    <>
      <Header />
      <SubPageTitle title="Enterprise Ready" />
      <main>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.grid}>
              <div>
                <h2 className={styles.tagline}>Welcome to Onfra</h2>
                <h3 className={styles.title}>Your Data-Driven Workplace Solution</h3>
                <p className={styles.paragraph}>
                  At Onfra, we pride ourselves on offering a comprehensive data-driven SaaS platform designed to revolutionize your workplace experience. Acting as a seamless bridge between people, spaces, things, and insights, our platform is tailored to enhance workplace efficiency and sustainability while prioritizing your company's health, security, and compliance objectives.
                </p>
                <div className={styles.buttonGroup}>
                  <a href="#" className="btn btn-primary">
                    Signup For Free!
                  </a>
                  <a href="#" className="btn btn-outline-primary">
                    Talk to Us
                  </a>
                </div>
                <div className={styles.notice}>
                  <span><Image src="/images/icons/check-circle.svg" width={20} height={20} alt="check mark" />No Credit Card Required</span>
                  <span><Image src="/images/icons/check-circle.svg" width={20} height={20} alt="check mark" />7days Subscription Free</span>
                </div>
              </div>
              <div>
                <Image src="/uploads/svg_image/Enterprise.svg" alt="Enterprise" width={500} height={500} className={styles.image} />
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.bgGray50}`}>
          <div className="container">
            <div className={styles.grid}>
              <div>
                <Image src="/uploads/svg_image/Your%20Data-Driven%20Workplace%20Solution.svg" alt="Data-Driven Workplace Solution" width={500} height={500} className={styles.image} />
              </div>
              <div>
                <h2 className={styles.tagline}>Interested in our Enterprise Suite?</h2>
                <h3 className={styles.title}>Here's what you can expect:</h3>
                <ol className={styles.list}>
                  <li><strong>Specialized Onboarding Experience:</strong> Our dedicated team ensures a smooth transition, tailored to your specific requirements.</li>
                  <li><strong>Priority Customer Support:</strong> Experience top-notch support whenever you need it, with priority given to enterprise clients.</li>
                  <li><strong>Custom Domain and White Label Solution:</strong> Maintain your brand identity with a personalized domain and white-label solution.</li>
                  <li><strong>Comprehensive Help Guides:</strong> Access a wealth of resources and guides to maximize the potential of our platform.</li>
                  <li><strong>Hosted in Your Home Country:</strong> Enjoy peace of mind knowing your data is hosted locally, ensuring compliance with local regulations.</li>
                  <li><strong>Dedicated Server:</strong> Opt for a dedicated server option for enhanced security and performance.</li>
                  <li><strong>Compliance with Data Protection Policies:</strong> Rest assured that our platform complies with the most stringent data protection policies.</li>
                  <li><strong>Seamless User Experience:</strong> Benefit from a seamless user experience with localization options to suit your global workforce.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CtaSection />
      <Footer />
    </>
  );
};

export default EnterpriseReadyPage;
