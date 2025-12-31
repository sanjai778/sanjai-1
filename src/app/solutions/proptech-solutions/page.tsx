import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Hero from '@/app/platform/section/hero';
import InfoSection from '@/app/components/sections/InfoSection';
import ComplianceSection from '@/app/components/sections/ComplianceSection';
import FaqSection from '@/app/components/sections/FaqSection';
import BlogSwiperSection from '@/app/components/sections/BlogSwiperSection';
import styles from '../page.module.css';

export default function ProptechSolutionsPage() {
  return (
    <>
      <Header />
      <main className={styles.solutionsMain}>
        <div id={styles.sub_page_hero_banner}>
          <Hero
            tagline="Proptech Solutions"
            title="Revolutionizing Proptech with Our Cutting-Edge Platform"
            description="Our Proptech Solutions empower property managers and real estate professionals to streamline operations, enhance tenant experiences, and boost portfolio performance. With our innovative SaaS platform, managing properties has never been easier."
            imageUrl="/uploads/svg_image/product/visitor.webp"
          />
        </div>

        <InfoSection
          tagline="Automate and Simplify Your Property Management"
          title="Streamline Operations"
          description="Harness the power of automation to streamline every aspect of property management. From lease administration to maintenance requests, our platform ensures efficiency and accuracy."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Automated Workflow</h3>
                <p>Automate routine tasks and workflows to save time and reduce errors. Ensure smooth operations with scheduled maintenance, lease renewals, and more.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Tenant Management</h3>
                <p>Provide an exceptional tenant experience with easy-to-use portals for payments, service requests, and communication. Happy tenants mean a thriving business.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Data Analytics</h3>
                <p>Make informed decisions with real-time data analytics. Understand your property's performance at a glance and identify opportunities for improvement.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Elevate Living and Working Spaces for Tenants"
          title="Enhance Tenant Experiences"
          description="Create a community your tenants love. Our platform offers tools to enhance tenant engagement and satisfaction, making your property the preferred choice."
          imageUrl="/uploads/static-image/ControlSecure.webp"
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Community Engagement</h3>
                <p>Foster a strong community with engagement tools. Organize events, collect feedback, and communicate effectively with tenants to build a positive living environment.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Smart Building Integration</h3>
                <p>Integrate smart building technologies for convenience and efficiency. Offer tenants keyless entry, smart thermostats, and more for a modern living experience.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Support and Communication</h3>
                <p>Ensure tenants feel supported with 24/7 access to assistance and information. Our platform facilitates seamless communication between tenants and management.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Maximize Returns on Your Real Estate Investments"
          title="Boost Portfolio Performance"
          description="Leverage our platform to enhance the financial performance of your portfolio. Optimize operations, reduce costs, and increase property values with our proptech solutions."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Financial Management</h3>
                <p>Streamline financial operations with automated billing, payments, and reporting. Gain insights into your financial performance and opportunities for growth.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Operational Efficiency</h3>
                <p>Reduce operational costs with efficient property management. Our platform helps you manage resources effectively, from energy usage to maintenance scheduling.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Market Insights</h3>
                <p>Stay ahead of the market with insights and analytics. Understand trends, forecast demand, and make strategic decisions to keep your portfolio competitive.</p>
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
