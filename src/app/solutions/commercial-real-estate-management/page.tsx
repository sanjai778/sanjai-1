import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Hero from '@/app/platform/section/hero';
import InfoSection from '@/app/components/sections/InfoSection';
import ComplianceSection from '@/app/components/sections/ComplianceSection';
import FaqSection from '@/app/components/sections/FaqSection';
import BlogSwiperSection from '@/app/components/sections/BlogSwiperSection';
import styles from '../page.module.css';

export default function CommercialRealEstateManagementPage() {
  return (
    <>
      <Header />
      <main className={styles.solutionsMain}>
        <div id={styles.sub_page_hero_banner}>
          <Hero
            tagline="Commercial Real Estate Management"
            title="The Ultimate Platform for Commercial Real Estate Management"
            description="Elevate your commercial real estate management with our all-in-one SaaS platform, designed to streamline operations, enhance tenant satisfaction, and maximize your property's profitability. Discover a world where efficiency meets innovation."
            imageUrl="/uploads/svg_image/solutions/Commerical-Real-Estate-Management.png"
          />
        </div>

        <InfoSection
          tagline="Seamless Property Management at Your Fingertips"
          title="Optimizing Operations"
          description="Our platform empowers you to manage your commercial properties more efficiently than ever. From operational tasks to strategic decision-making, everything is simplified."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Tenant Management</h3>
                <p>Enhance tenant relationships with our comprehensive tenant management system. Communicate, manage requests, and ensure tenant satisfaction effortlessly.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Maintenance and Repairs</h3>
                <p>Streamline maintenance workflows and manage repair tasks with ease. Our intuitive dashboard allows for quick response times and efficient problem resolution.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Reporting and Analytics</h3>
                <p>Access real-time insights and detailed analytics to make informed decisions. Understand your property's performance and identify opportunities for growth.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Maximize Your Financial Performance"
          title="Financial Management"
          description="Gain control over your property's financial health with our robust financial management tools. From rent collection to expense tracking, financial oversight is simplified."
          imageUrl="/uploads/static-image/ControlSecure.webp"
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Rent Collection and Billing</h3>
                <p>Automate rent collection and simplify billing processes. Our platform ensures timely payments and provides tenants with an easy-to-use payment portal.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Expense Management</h3>
                <p>Track and manage all property-related expenses in one place. Optimize your cost structure and improve your bottom line.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Financial Reporting</h3>
                <p>Generate comprehensive financial reports with a click. Our platform provides insights into your property's financial status, helping you plan for the future.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Elevate the Tenant Experience"
          title="Tenant Experience"
          description="Our platform is designed not just for management efficiency but also to enhance the overall tenant experience. Happy tenants lead to higher retention rates and ultimately, greater profitability."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Communication Tools</h3>
                <p>Keep the lines of communication open with our advanced messaging features. Ensure tenants feel heard and valued with prompt responses and updates.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Facility Booking</h3>
                <p>Offer tenants the convenience of booking amenities and facilities directly through the platform. Enhance their experience and satisfaction with your property.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Feedback and Surveys</h3>
                <p>Gather valuable tenant feedback with customizable surveys. Use insights to improve services and amenities, ensuring your property remains a preferred choice.</p>
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
