import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Hero from '@/app/platform/section/hero';
import InfoSection from '@/app/components/sections/InfoSection';
import ComplianceSection from '@/app/components/sections/ComplianceSection';
import FaqSection from '@/app/components/sections/FaqSection';
import BlogSwiperSection from '@/app/components/sections/BlogSwiperSection';
import styles from '../page.module.css';

export default function CoWorkingManagementPage() {
  return (
    <>
      <Header />
      <main className={styles.solutionsMain}>
        <div id={styles.sub_page_hero_banner}>
          <Hero
            tagline="Co-working Management"
            title="Simplify Operations, Enhance Experience"
            description="Managing a co-working space involves juggling numerous tasks — from bookings and billing to member management and more. Our platform is designed to streamline these processes, providing a seamless experience for both managers and members."
            imageUrl="/uploads/svg_image/solutions/Co-working-space.png"
          />
        </div>

        <InfoSection
          tagline="Streamline Your Operations"
          title="Seamless Space Management"
          description="Managing a co-working space shouldn't feel like a puzzle. Our platform offers comprehensive tools to simplify every aspect of your operation."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Easy Booking System</h3>
                <p>Our intuitive booking system allows members to reserve spaces in real-time, ensuring a hassle-free experience. Whether it's a hot desk, private office, or meeting room, availability is always up-to-date.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Automated Billing & Payments</h3>
                <p>Eliminate the complexity of financial management with automated billing. Our system handles invoices, payments, and even membership subscriptions, making transactions effortless for you and your members.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Member Management</h3>
                <p>Build a thriving community by managing your members efficiently. Our platform provides insights into member activities, preferences, and feedback, enabling personalized experiences and fostering engagement.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Elevate Engagement & Collaboration"
          title="Enhance Member Experience"
          description="A co-working space is more than just a place to work; it's a community. Our solution enhances member experience, promoting engagement and collaboration."
          imageUrl="/uploads/static-image/ControlSecure.webp"
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Community Building Tools</h3>
                <p>Our platform includes features to help you create a vibrant community. From event management to member directories and communication tools, we make it easy to connect and collaborate.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Flexible Access Control</h3>
                <p>Offer members the freedom to access the space on their schedule. With our access control system, you can manage permissions and ensure security, all while providing convenience.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Real-time Support & Feedback</h3>
                <p>Keep the lines of communication open with real-time support and feedback tools. Our platform ensures that members' needs are heard and addressed promptly, ensuring a positive experience.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Leverage Insights for Growth"
          title="Data-Driven Decisions"
          description="Make informed decisions with our comprehensive analytics and reporting tools. Understand your space's utilization, member satisfaction, and financial performance to drive growth and improvement."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Utilization Analytics</h3>
                <p>Optimize your space and resources with detailed utilization reports. Understand how different areas are being used and make adjustments to meet your members' needs.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Financial Reporting</h3>
                <p>Gain a clear view of your financial health with our reporting tools. Track revenues, expenses, and profitability to ensure your co-working space is on a sustainable path.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Member Insights</h3>
                <p>Understand your community better with member analytics. Track engagement, satisfaction, and feedback to tailor your services and enhance the member experience.</p>
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
