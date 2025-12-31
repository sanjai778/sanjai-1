import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Hero from '@/app/platform/section/hero';
import InfoSection from '@/app/components/sections/InfoSection';
import ComplianceSection from '@/app/components/sections/ComplianceSection';
import FaqSection from '@/app/components/sections/FaqSection';
import BlogSwiperSection from '@/app/components/sections/BlogSwiperSection';
import styles from '../page.module.css';

export default function CentralizeWorkplaceManagementPage() {
  return (
    <>
      <Header />
      <main className={styles.solutionsMain}>
        <div id={styles.sub_page_hero_banner}>
          <Hero
            tagline="Centralize Workplace Management"
            title="Streamline Your Operations Centralize Workplace Management"
            description="In today's fast-paced business environment, managing multiple aspects of your workplace can be challenging. Our platform centralizes all your workplace management needs into one seamless interface, allowing you to focus on what truly matters - growing your business."
            imageUrl="/uploads/svg_image/product/visitor.webp"
          />
        </div>

        <InfoSection
          tagline="Unify Your Workplace Management"
          title="Unify Your Workplace Management"
          description="Our platform is designed to bring together all facets of workplace management. From space allocation and resource management to employee onboarding and performance tracking, centralize your operations for optimal efficiency."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Workspace Allocation</h3>
                <p>Efficiently manage your office space, ensuring optimal utilization of resources. Assign workstations, manage hot-desking, and keep track of maintenance schedules, all within a single dashboard.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Resource Management</h3>
                <p>Gain complete control over your assets and resources. Track inventory levels, manage supply chains, and allocate resources efficiently to prevent waste and ensure smooth operations.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Employee Onboarding</h3>
                <p>Streamline the onboarding process for new hires. Centralize documentation, training schedules, and role assignments to ensure a smooth transition and quick adaptation to your organizational culture.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Collaboration"
          title="Enhance Communication & Collaboration"
          description="Centralizing workplace management fosters better communication and collaboration among teams. With our platform, you can create a more connected and transparent work environment, leading to improved morale and productivity."
          imageUrl="/uploads/static-image/ControlSecure.webp"
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Team Communication</h3>
                <p>Facilitate seamless communication across departments and teams. Share updates, distribute documents, and schedule meetings easily, ensuring everyone is on the same page.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Project Collaboration</h3>
                <p>Collaborate on projects without the hassle of switching between different tools. Our integrated project management features allow you to track progress, assign tasks, and meet deadlines efficiently.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Feedback & Improvement</h3>
                <p>Encourage a culture of continuous improvement with our feedback tools. Collect employee insights, customer feedback, and performance data to identify areas for growth and innovation.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Data-Driven"
          title="Make Data-Driven Decisions"
          description="Empower your management with data. Our platform provides comprehensive analytics and reporting tools, enabling you to make informed decisions based on real-time data and trends."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Analytics Dashboard</h3>
                <p>Access key metrics and performance indicators at a glance. Our customizable dashboard allows you to monitor your organization’s health and make strategic decisions with confidence.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Reporting Tools</h3>
                <p>Generate detailed reports on various aspects of your workplace management. From financials to employee performance, get the insights you need to drive your business forward.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Trend Analysis</h3>
                <p>Stay ahead of the curve by analyzing trends within your organization and the industry. Use data to predict future challenges and opportunities, ensuring your business remains competitive.</p>
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
