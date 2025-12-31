import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Hero from '@/app/platform/section/hero';
import InfoSection from '@/app/components/sections/InfoSection';
import ComplianceSection from '@/app/components/sections/ComplianceSection';
import FaqSection from '@/app/components/sections/FaqSection';
import BlogSwiperSection from '@/app/components/sections/BlogSwiperSection';
import styles from '../page.module.css';

export default function FacilityManagementPage() {
  return (
    <>
      <Header />
      <main className={styles.solutionsMain}>
        <div id={styles.sub_page_hero_banner}>
          <Hero
            tagline="Facility Management"
            title="Transforming Spaces into Efficient Workplaces"
            description="Effortlessly manage your facilities with our comprehensive SaaS platform, designed to streamline operations, reduce costs, and enhance workplace productivity."
            imageUrl="/uploads/svg_image/product/visitor.webp"
          />
        </div>

        <InfoSection
          tagline="Gain Complete Control Over Your Workspace"
          title="Comprehensive Facility Oversight"
          description="Our platform provides an all-in-one solution to manage your facilities, ensuring everything runs smoothly and efficiently."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Asset Management</h3>
                <p>Track and manage all your facility assets in one place. From maintenance schedules to asset lifecycle analysis, ensure optimal performance and reduce downtime.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Space Optimization</h3>
                <p>Utilize data-driven insights to optimize space usage within your facilities. Improve layout planning and adapt to changing workplace needs with agility.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Compliance and Safety</h3>
                <p>Stay on top of regulatory compliance and ensure a safe environment for your employees. Our platform simplifies the management of safety protocols, audits, and reports.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Enhance Efficiency with Automated Workflows"
          title="Streamlined Operations"
          description="Leverage automation to simplify complex processes, from maintenance requests to vendor management, freeing up valuable time and resources."
          imageUrl="/uploads/static-image/ControlSecure.webp"
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Maintenance Management</h3>
                <p>Automate your maintenance schedules and tasks. Ensure timely upkeep and repairs, reducing the risk of costly downtimes and disruptions.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Vendor and Contractor Management</h3>
                <p>Streamline interactions with vendors and contractors. From onboarding to payments, manage all aspects of vendor relations within a single platform.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Energy Management</h3>
                <p>Monitor and manage your energy consumption. Identify saving opportunities and implement eco-friendly practices to reduce costs and carbon footprint.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Unlock Insights for Strategic Facility Management"
          title="Data-Driven Decision Making"
          description="Our platform transforms data into actionable insights, enabling you to make informed decisions that drive productivity and cost savings."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Real-Time Reporting</h3>
                <p>Access real-time data and reports on your facilities' performance. Monitor trends, track progress, and adjust strategies based on accurate information.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Predictive Analytics</h3>
                <p>Use predictive analytics to anticipate facility needs, from maintenance to space optimization. Make proactive decisions to stay ahead of challenges.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Custom Dashboards</h3>
                <p>Create custom dashboards to visualize the metrics that matter most to you. From operational efficiency to financial performance, keep key insights at your fingertips.</p>
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
