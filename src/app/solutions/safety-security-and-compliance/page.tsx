import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Hero from '@/app/platform/section/hero';
import InfoSection from '@/app/components/sections/InfoSection';
import ComplianceSection from '@/app/components/sections/ComplianceSection';
import FaqSection from '@/app/components/sections/FaqSection';
import BlogSwiperSection from '@/app/components/sections/BlogSwiperSection';
import styles from '../page.module.css';

export default function SafetySecurityCompliancePage() {
  return (
    <>
      <Header />
      <main className={styles.solutionsMain}>
        <div id={styles.sub_page_hero_banner}>
          <Hero
            tagline="Safety, Security and Compliance"
            title="Empower Your Business with Comprehensive"
            description="Our innovative platform offers an all-in-one solution to manage workplace safety, ensure security protocols are met, and maintain compliance with industry regulations."
            imageUrl="/uploads/svg_image/product/visitor.webp"
          />
        </div>

        <InfoSection
          tagline="Enhance Workplace Safety with Proactive Solutions"
          title="Proactive Safety Measures"
          description="Our platform offers robust tools to proactively identify potential hazards, ensuring a safer workplace environment. Utilize our comprehensive safety management features to prevent accidents before they happen and protect your most valuable asset—your employees."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Hazard Identification</h3>
                <p>Leverage our intuitive system to quickly identify and document potential safety hazards in the workplace, allowing for immediate action and mitigation.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Incident Reporting</h3>
                <p>Simplify the process of incident reporting with our streamlined platform. Quickly log accidents, track their resolution, and analyze data to prevent future occurrences.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Safety Training</h3>
                <p>Equip your team with the knowledge they need to stay safe. Our platform offers customizable training modules to ensure your staff is well-informed on safety protocols and best practices.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Secure Your Assets with Advanced Security Measures"
          title="Security & Access Control"
          description="Our platform provides comprehensive security and access control features designed to protect your physical and digital assets. From entry management to data protection, ensure your business is safeguarded against unauthorized access and breaches."
          imageUrl="/uploads/static-image/ControlSecure.webp"
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Entry Management</h3>
                <p>Control who enters your premises with our sophisticated entry management system. Assign access levels, monitor entry logs, and ensure only authorized personnel can access sensitive areas.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Surveillance Integration</h3>
                <p>Integrate your existing surveillance systems with our platform for enhanced monitoring capabilities. Keep an eye on your workplace from anywhere, ensuring round-the-clock security.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Data Protection</h3>
                <p>Safeguard your sensitive information with our advanced data protection features. From encryption to regular backups, ensure your business data is secure and compliant with regulatory standards.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Stay Ahead of Regulations with Automated Compliance Solutions"
          title="Regulatory Compliance"
          description="Navigate the complex landscape of industry regulations with ease. Our platform automates compliance processes, ensuring your business stays ahead of legal requirements and avoids costly penalties."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Compliance Tracking</h3>
                <p>Easily monitor your compliance status with our tracking tools. Stay informed on upcoming regulations, and ensure your business practices are always in line with legal standards.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Audit Management</h3>
                <p>Streamline the audit process with our comprehensive audit management features. Schedule audits, track findings, and implement corrective actions to maintain compliance.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Report Generation</h3>
                <p>Generate detailed compliance reports with just a few clicks. Our platform simplifies the reporting process, making it easy to provide stakeholders with the information they need.</p>
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
