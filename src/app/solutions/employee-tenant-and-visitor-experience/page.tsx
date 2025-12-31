import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Hero from '@/app/platform/section/hero';
import InfoSection from '@/app/components/sections/InfoSection';
import ComplianceSection from '@/app/components/sections/ComplianceSection';
import FaqSection from '@/app/components/sections/FaqSection';
import BlogSwiperSection from '@/app/components/sections/BlogSwiperSection';
import styles from '../page.module.css';

export default function EmployeeTenantVisitorExperiencePage() {
  return (
    <>
      <Header />
      <main className={styles.solutionsMain}>
        <div id={styles.sub_page_hero_banner}>
          <Hero
            tagline="Employee, Tenant and Visitor Experience"
            title="Transform Your Workplace Experience"
            description="Elevate the daily experiences of employees, tenants, and visitors with our cutting-edge workplace management platform. Experience seamless integration, intuitive design, and unparalleled convenience at every touchpoint."
            imageUrl="/uploads/svg_image/product/visitor.webp"
          />
        </div>

        <InfoSection
          tagline="Empower Your Employees"
          title="Empower Your Employees"
          description="Unlock the full potential of your workforce with tools designed for maximum productivity and satisfaction. Our platform ensures your team has everything they need to excel."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Personalized Dashboards</h3>
                <p>Tailor the workspace to meet individual needs. From personal task management to integrated communication tools, enable a workflow that feels bespoke to every employee.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Resource Booking System</h3>
                <p>Simplify booking meeting rooms, workstations, or equipment with our intuitive system, ensuring employees can focus on what matters most — their work.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Feedback and Engagement</h3>
                <p>Foster a culture of continuous improvement with easy-to-use feedback tools. Engage your team in meaningful conversations about their workplace experience.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Optimize Tenant Experience"
          title="Optimize Tenant Experience"
          description="Enhance the journey of your tenants from the moment they enter your building. Offer convenience, comfort, and connectivity to make every space feel like their own."
          imageUrl="/uploads/static-image/ControlSecure.webp"
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Easy Access Control</h3>
                <p>Provide secure, hassle-free access to facilities. Whether it's parking spaces or gym access, ensure tenants have a smooth, frictionless experience.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Community Building</h3>
                <p>Create a vibrant tenant community with events, announcements, and forums. Encourage interaction and foster a sense of belonging within your property.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Support and Services</h3>
                <p>Deliver unparalleled tenant support with a comprehensive helpdesk solution. From maintenance requests to service inquiries, ensure every need is met promptly and efficiently.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Enhance Visitor Experience"
          title="Enhance Visitor Experience"
          description="Leave a lasting impression on every visitor with streamlined check-ins, personalized greetings, and efficient management. Make every visit memorable and hassle-free."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Seamless Check-In</h3>
                <p>Provide a swift, welcoming entrance experience with digital check-in systems. Reduce wait times and impress visitors with your efficiency.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Wayfinding Solutions</h3>
                <p>Help visitors navigate your premises with ease. Our interactive maps and digital signage ensure they always find their destination without confusion.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Visitor Insights</h3>
                <p>Gain valuable insights into visitor behavior and preferences. Tailor your facilities and services to better meet the needs of those who walk through your doors.</p>
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
