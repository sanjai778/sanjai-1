import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Hero from '@/app/platform/section/hero';
import InfoSection from '@/app/components/sections/InfoSection';
import ComplianceSection from '@/app/components/sections/ComplianceSection';
import FaqSection from '@/app/components/sections/FaqSection';
import BlogSwiperSection from '@/app/components/sections/BlogSwiperSection';
import styles from '../page.module.css';

export default function IndustrialSecurityManagementPage() {
  return (
    <>
      <Header />
      <main className={styles.solutionsMain}>
        <div id={styles.sub_page_hero_banner}>
          <Hero
            tagline="Industrial Security Management"
            title="Span - Empowering Your Industry's Security"
            description="Ensure the safety of your facilities, assets, and personnel with our comprehensive workplace management SaaS platform."
            imageUrl="/uploads/svg_image/visitors.svg"
          />
        </div>

        <InfoSection
          tagline="Comprehensive Security Solutions"
          title="Comprehensive Security Solutions"
          description="Our platform offers a suite of tools designed to enhance your industrial security management, ensuring your operations run smoothly and securely."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Real-Time Surveillance</h3>
                <p>Utilize our state-of-the-art surveillance technology to monitor your premises in real-time, reducing the risk of unauthorized access and ensuring the safety of your assets.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Access Control</h3>
                <p>Manage and monitor access to sensitive areas within your facilities. Our platform allows for customizable access rights, ensuring only authorized personnel can enter designated areas.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Incident Management</h3>
                <p>Quickly respond to and manage security incidents with our efficient incident management system. Track incidents from initiation to resolution, ensuring a swift response and minimizing impact.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Advanced Analytics and Reporting"
          title="Advanced Analytics and Reporting"
          description="Gain valuable insights into your security operations with our advanced analytics and reporting tools. Make informed decisions based on data-driven insights."
          imageUrl="/uploads/static-image/ControlSecure.webp"
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Security Trends Analysis</h3>
                <p>Understand security trends within your facilities with our analytics tools. Identify patterns and potential vulnerabilities to preemptively address security challenges.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Customizable Reports</h3>
                <p>Generate customizable reports that provide a comprehensive overview of your security stance. Share insights with stakeholders and use data to drive security improvements.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Compliance Management</h3>
                <p>Ensure your operations comply with industry standards and regulations. Our platform helps you keep track of compliance requirements and automates reporting for easy adherence.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Seamless Integration and Scalability"
          title="Seamless Integration and Scalability"
          description="Our platform seamlessly integrates with your existing systems and scales with your business, ensuring you're always ahead of security challenges."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>System Integration</h3>
                <p>Easily integrate our platform with your current security infrastructure, enhancing capabilities without disrupting existing operations.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Scalable Solutions</h3>
                <p>Our solutions grow with your business. Whether you're expanding facilities or increasing personnel, our platform scales to meet your evolving security needs.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Continuous Improvement</h3>
                <p>Benefit from continuous updates and improvements to our platform. We're committed to delivering cutting-edge solutions that address the dynamic challenges of industrial security management.</p>
              </div>
            </div>
          </div>
        </section>

        <FaqSection />
        <ComplianceSection />
        <BlogSwiperSection />
      </main>
      <Footer />
    </>
  );
}
