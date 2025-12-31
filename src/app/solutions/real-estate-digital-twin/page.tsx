import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Hero from '@/app/platform/section/hero';
import InfoSection from '@/app/components/sections/InfoSection';
import ComplianceSection from '@/app/components/sections/ComplianceSection';
import FaqSection from '@/app/components/sections/FaqSection';
import BlogSwiperSection from '@/app/components/sections/BlogSwiperSection';
import styles from '../page.module.css';

export default function RealEstateDigitalTwinPage() {
  return (
    <>
      <Header />
      <main className={styles.solutionsMain}>
        <div id={styles.sub_page_hero_banner}>
          <Hero
            tagline="Real Estate Digital Twin"
            title="Revolutionizing Real Estate Management"
            description="Elevate your real estate portfolio with our cutting-edge Digital Twin technology. Seamlessly manage and visualize your properties with unparalleled precision and efficiency. Experience the future of real estate management today."
            imageUrl="/uploads/svg_image/product/visitor.webp"
          />
        </div>

        <InfoSection
          tagline="Unleash the Power of 3D Modeling"
          title="Interactive Visualization"
          description="Dive deep into the details of your properties with our advanced 3D visualization tools. Navigate through interiors, understand space utilization, and plan renovations with a few clicks."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Detailed Floor Plans</h3>
                <p>View and interact with highly detailed floor plans. Make informed decisions about space management and optimization without setting foot on the premises.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Real-Time Data Integration</h3>
                <p>Our platform integrates real-time data, providing you with up-to-the-minute information on occupancy, energy usage, and more, allowing for proactive management.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Customization and Control</h3>
                <p>Tailor your digital twin to match your specific needs. Customize layouts, add furniture, and even simulate lighting conditions to create the perfect environment.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Streamline Management and Maintenance"
          title="Efficient Operations"
          description="Boost operational efficiency by leveraging digital twins for maintenance, safety checks, and facility management. Predictive analytics help you anticipate needs and prevent issues before they arise."
          imageUrl="/uploads/static-image/ControlSecure.webp"
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Preventive Maintenance</h3>
                <p>Schedule and track maintenance tasks with ease. Our platform helps you identify potential issues and address them promptly, reducing downtime and repair costs.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Safety and Compliance</h3>
                <p>Ensure your properties meet all safety standards and regulations. Digital twins allow for easy monitoring and compliance checks, keeping your assets and occupants secure.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Energy Management</h3>
                <p>Optimize energy consumption with our smart monitoring tools. Analyze usage patterns and implement strategies to reduce costs and carbon footprint.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Foster Teamwork and Stakeholder Engagement"
          title="Enhanced Collaboration"
          description="Our digital twin platform promotes collaboration among teams, tenants, and stakeholders. Share insights, plans, and updates in real-time, improving communication and decision-making."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Real-time Sharing and Updates</h3>
                <p>Share updates and collaborate with stakeholders seamlessly. Real-time synchronization ensures everyone is on the same page, enhancing project management and execution.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Tenant Experience</h3>
                <p>Enhance the tenant experience by providing interactive property tours and engaging them in the decision-making process. Ensure satisfaction and loyalty with immersive digital tools.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Stakeholder Reporting</h3>
                <p>Generate detailed reports and analytics for stakeholders. Provide valuable insights into property performance, usage trends, and operational efficiency.</p>
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
