import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Hero from '@/app/platform/section/hero';
import InfoSection from '@/app/components/sections/InfoSection';
import ComplianceSection from '@/app/components/sections/ComplianceSection';
import FaqSection from '@/app/components/sections/FaqSection';
import BlogSwiperSection from '@/app/components/sections/BlogSwiperSection';
import styles from '../page.module.css';

export default function DigitalBuildingManagementPage() {
  return (
    <>
      <Header />
      <main className={styles.solutionsMain}>
        <div id={styles.sub_page_hero_banner}>
          <Hero
            tagline="Digital Building Management"
            title="Revolutionize Your Building Operations"
            description="Our Digital Building Management solution empowers you to streamline operations, enhance efficiency, and improve occupant experiences with cutting-edge technology. Transform how your buildings are managed with our intelligent, integrated platform."
            imageUrl="/uploads/svg_image/product/visitor.webp"
          />
        </div>

        <InfoSection
          tagline="Streamlined Facility Management"
          title="Simplify Operations"
          description="Our platform centralizes control of your building’s systems, making management seamless. From HVAC to lighting, everything is at your fingertips."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Energy Efficiency</h3>
                <p>Maximize energy savings with smart monitoring and management of power usage. Reduce costs and environmental impact effortlessly.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Access Control</h3>
                <p>Enhance security with customizable access controls. Manage who enters your building and when with our intuitive interface.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Predictive Maintenance</h3>
                <p>Prevent downtime and costly repairs with predictive maintenance alerts. Our system identifies potential issues before they become problems.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Elevate Comfort and Safety"
          title="Enhance Occupant Experience"
          description="Create the ideal environment for occupants with automated climate control, lighting adjustments, and more. Ensure safety with real-time monitoring and emergency response features."
          imageUrl="/uploads/static-image/ControlSecure.webp"
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Environmental Comfort</h3>
                <p>Automatically adjust temperature and lighting to maintain the perfect working environment. Keep occupants comfortable and productive.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Safety & Security</h3>
                <p>Prioritize safety with our comprehensive security systems, including surveillance and emergency protocols that protect everyone inside your building.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Customization & Control</h3>
                <p>Give occupants control over their space with customizable settings for lighting, temperature, and more. Enhance satisfaction and productivity.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Financial Management and Reporting"
          title="Optimize Costs"
          description="Reduce operating costs with our efficient management tools. Detailed analytics and reporting help you make informed decisions to optimize financial performance."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Cost Reduction</h3>
                <p>Lower energy consumption and maintenance costs with smart technology. Our platform identifies opportunities for savings.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Analytics & Insights</h3>
                <p>Gain valuable insights with advanced analytics on building performance. Make data-driven decisions to improve efficiency and reduce expenses.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>ROI & Value</h3>
                <p>Demonstrate the return on investment in digital building management with detailed performance metrics. Show the value added to your property and operations.</p>
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
