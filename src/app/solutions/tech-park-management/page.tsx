import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Hero from '@/app/platform/section/hero';
import InfoSection from '@/app/components/sections/InfoSection';
import ComplianceSection from '@/app/components/sections/ComplianceSection';
import FaqSection from '@/app/components/sections/FaqSection';
import BlogSwiperSection from '@/app/components/sections/BlogSwiperSection';
import styles from '../page.module.css';

export default function TechParkManagementPage() {
  return (
    <>
      <Header />
      <main className={styles.solutionsMain}>
        <div id={styles.sub_page_hero_banner}>
          <Hero
            tagline="Tech Park Management"
            title="The Future of Workplace Management"
            description="Managing a tech park involves myriad challenges, from ensuring optimal space utilization to maintaining a vibrant community. Our state-of-the-art SaaS platform simplifies these complexities, offering a comprehensive solution."
            imageUrl="/uploads/svg_image/product/visitor.webp"
          />
        </div>

        <InfoSection
          tagline="Maximize Efficiency with Intelligent Space Management"
          title="Optimizing Space and Resources"
          description="Our platform offers dynamic space allocation, energy management, and asset tracking to ensure your tech park operates at peak efficiency. Leveraging real-time data, we help you make informed decisions that reduce costs and enhance the work environment."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Smart Allocation</h3>
                <p>Utilize every square foot effectively with our AI-driven space allocation tools. Tailor workspaces to meet the evolving needs of tech companies, fostering innovation and collaboration.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Energy Optimization</h3>
                <p>Slash energy costs and reduce your carbon footprint with our intelligent energy management systems. Automated controls and insights allow for efficient use of resources, contributing to your sustainability goals.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Asset Management</h3>
                <p>Streamline maintenance and asset tracking to ensure your tech park's infrastructure and equipment are always in top condition. Preventive maintenance schedules and real-time monitoring reduce downtime and operational disruptions.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Elevate Satisfaction with Cutting-Edge Amenities and Services"
          title="Enhancing Tenant Experience"
          description="Our platform transforms tech parks into vibrant ecosystems that attract and retain top tech firms. From seamless access control to community engagement tools, we offer features that elevate the tenant experience."
          imageUrl="/uploads/static-image/ControlSecure.webp"
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Digital Access & Security</h3>
                <p>Ensure safety and convenience with digital keys and access controls. Our sophisticated security systems provide peace of mind for companies and their employees.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Community Building</h3>
                <p>Foster a strong community within your tech park with our engagement tools. Facilitate networking events, workshops, and social gatherings to encourage collaboration and innovation.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>On-Demand Services</h3>
                <p>Offer tenants unparalleled convenience with on-demand amenities, including food services, laundry, and transportation. Enhance their daily experience and work-life balance within the tech park.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Drive Sustainability and Innovation in Tech Park Management"
          title="Sustainable Development"
          description="Commit to a greener future with our sustainability modules. From waste reduction to green building initiatives, our platform supports tech parks in becoming leaders in environmental stewardship."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Waste Management</h3>
                <p>Implement effective waste reduction and recycling strategies with our comprehensive waste management tools. Track and optimize waste streams to achieve your sustainability targets.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Green Buildings</h3>
                <p>Promote sustainability with green building certifications and practices. Our platform facilitates the integration of eco-friendly materials and technologies, enhancing your tech park's environmental profile.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Renewable Energy</h3>
                <p>Transition to renewable energy sources with our guidance and tools. Solar panels, wind turbines, and other sustainable technologies are seamlessly integrated into your operations, powering your tech park with clean energy.</p>
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
