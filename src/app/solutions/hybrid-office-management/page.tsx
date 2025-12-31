import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Hero from '@/app/platform/section/hero';
import InfoSection from '@/app/components/sections/InfoSection';
import ComplianceSection from '@/app/components/sections/ComplianceSection';
import FaqSection from '@/app/components/sections/FaqSection';
import BlogSwiperSection from '@/app/components/sections/BlogSwiperSection';
import styles from '../page.module.css';

export default function HybridOfficeManagementPage() {
  return (
    <>
      <Header />
      <main className={styles.solutionsMain}>
        <div id={styles.sub_page_hero_banner}>
          <Hero
            tagline="Hybrid Office Management"
            title="Spanning the Gap Between Office and Remote Work"
            description="Our FlexiManage platform is designed to simplify the complexities of hybrid work environments, making it easier for teams to collaborate, no matter where they are."
            imageUrl="/uploads/svg_image/solutions/Hybrid-Office-Management.png"
          />
        </div>

        <InfoSection
          tagline="Centralized Workspace Management"
          title="Streamline Your Workspace"
          description="Gain control over your hybrid office with tools that allow for seamless management of both physical and virtual workspaces."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Room Booking System</h3>
                <p>Our intuitive room booking system ensures that finding and reserving meeting spaces is a breeze, eliminating double bookings and unused rooms.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Desk Scheduling</h3>
                <p>Flexible desk scheduling options allow employees to reserve workspaces in advance, supporting social distancing and optimizing office space.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Visitor Management</h3>
                <p>Enhance your office security and provide a seamless experience for guests with our digital visitor management system.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Tools for Teamwork"
          title="Enhance Collaboration"
          description="With FlexiManage, you can foster a culture of collaboration, ensuring that both in-office and remote team members are always in sync."
          imageUrl="/uploads/static-image/ControlSecure.webp"
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Project Management Integration</h3>
                <p>Integrate with popular project management tools to keep all your tasks and projects in one place, facilitating better teamwork and efficiency.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Real-time Communication</h3>
                <p>Facilitate instant communication across your team with integrated chat, video conferencing, and collaboration tools that bridge the gap between remote and in-office employees.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>File Sharing and Management</h3>
                <p>Securely share and manage files within your organization, ensuring that everyone has access to the information they need, when they need it.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Data-Driven Decision Making"
          title="Optimize Operations"
          description="Leverage the power of data to make informed decisions about your workspace and workforce, optimizing for efficiency and productivity."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Usage Analytics</h3>
                <p>Understand how your office space is being used with detailed analytics on room and desk bookings, helping you make data-driven adjustments.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Employee Feedback Tools</h3>
                <p>Collect and analyze employee feedback on their hybrid work experience, allowing you to continually improve and adapt your strategies.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Health and Safety Compliance</h3>
                <p>Ensure your office complies with health and safety regulations with tools designed to monitor and manage workplace wellness initiatives.</p>
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
