import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Hero from '@/app/platform/section/hero';
import InfoSection from '@/app/components/sections/InfoSection';
import ComplianceSection from '@/app/components/sections/ComplianceSection';
import FaqSection from '@/app/components/sections/FaqSection';
import BlogSwiperSection from '@/app/components/sections/BlogSwiperSection';
import styles from '../page.module.css';

export default function WorkplaceUtilizationInsightsPage() {
  return (
    <>
      <Header />
      <main className={styles.solutionsMain}>
        <div id={styles.sub_page_hero_banner}>
          <Hero
            tagline="Workplace Utilization and Insights"
            title="Revolutionize Your Workplace Management"
            description="Unlock the full potential of your workspace with our cutting-edge SaaS platform. Gain unparalleled insights into how your office space is utilized, and make data-driven decisions that boost productivity, enhance employee satisfaction, and reduce costs."
            imageUrl="/uploads/svg_image/product/visitor.webp"
          />
        </div>

        <InfoSection
          tagline="Understand Your Space Like Never Before"
          title="Maximize Space Efficiency"
          description="Dive deep into the dynamics of your workplace utilization with real-time data analytics. Discover which areas of your office are underused or overcrowded, and adjust accordingly to meet your team's needs."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Workplace Analytics</h3>
                <p>Get detailed analytics on space usage, peak times, and employee preferences. Use this data to create a workplace that responds to your team's actual needs.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Space Optimization</h3>
                <p>Implement strategies for dynamic seating, meeting room availability, and flexible workspaces. Enhance productivity by ensuring the right space is available for every task.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Cost Reduction</h3>
                <p>Identify and eliminate wasted space to significantly reduce overhead costs. Our platform provides insights that help you optimize your lease spending and utility costs.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Create a Workspace That Works for Everyone"
          title="Create a Workspace That Works for Everyone"
          description="Elevate employee satisfaction and retention by offering a workspace that adapts to their needs. Leverage our platform to gather feedback and implement changes that make a real difference."
          imageUrl="/uploads/static-image/ControlSecure.webp"
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Employee Feedback Integration</h3>
                <p>Utilize our seamless feedback tools to understand what your employees value most about their workspace. Turn insights into action to keep your team happy and engaged.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Health and Safety Compliance</h3>
                <p>Ensure your workspace meets all health and safety guidelines with automated compliance checks. Keep your team safe and your operations running smoothly.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Flexible Work Arrangements</h3>
                <p>Support hybrid work models with tools that make flexible scheduling easy. Ensure your workspace supports productivity, no matter where your team is working from.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Insights That Inform Your Future"
          title="Drive Decision-Making With Data"
          description="Arm yourself with the knowledge to make informed decisions about your workspace. Our platform's predictive analytics help you stay ahead of changes and plan for the future with confidence."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Trend Analysis</h3>
                <p>Spot workplace trends before they become mainstream. Adapt your space to meet evolving needs and stay competitive.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Resource Allocation</h3>
                <p>Allocate resources more effectively by understanding exactly what your team needs. Ensure that every investment in your workspace delivers maximum value.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Future Planning</h3>
                <p>Use predictive analytics to plan your workspace's evolution. Stay ahead of growth or contraction with strategies informed by data.</p>
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
