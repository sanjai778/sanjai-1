import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Hero from '@/app/platform/section/hero';
import InfoSection from '@/app/components/sections/InfoSection';
import ComplianceSection from '@/app/components/sections/ComplianceSection';
import FaqSection from '@/app/components/sections/FaqSection';
import BlogSwiperSection from '@/app/components/sections/BlogSwiperSection';
import styles from '../page.module.css';

export default function SustainableWorkplacePage() {
  return (
    <>
      <Header />
      <main className={styles.solutionsMain}>
        <div id={styles.sub_page_hero_banner}>
          <Hero
            tagline="Sustainable Workplace"
            title="Transform Your Workplace into a Model of Sustainability"
            description="In today's world, creating a sustainable workplace is more than a trend—it's a responsibility. Our platform empowers businesses to adopt sustainable practices, ensuring a greener, more efficient, and future-proof workspace."
            imageUrl="/uploads/svg_image/product/visitor.webp"
          />
        </div>

        <InfoSection
          tagline="Discover Sustainability"
          title="Discover Sustainability"
          description="Embark on a journey towards a greener workplace with our comprehensive suite of features designed to reduce your carbon footprint and promote environmental stewardship."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Eco-Friendly Operations</h3>
                <p>Learn how to minimize waste, reduce energy consumption, and optimize resource allocation through our platform. Implement sustainable policies that make a real difference.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Data-Driven Sustainability</h3>
                <p>Harness the power of data to make informed decisions. Our analytics provide clear insights into your environmental impact, helping you to identify areas for improvement and track progress over time.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Community and Culture</h3>
                <p>Build a culture of sustainability within your organization. Engage employees through initiatives and challenges that promote eco-friendly habits and contribute to a healthier planet.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Streamline Efficiency"
          title="Streamline Efficiency"
          description="Efficiency goes hand in hand with sustainability. Our platform offers tools to streamline your operations, reduce waste, and improve overall productivity, making your workplace smarter and more sustainable."
          imageUrl="/uploads/static-image/ControlSecure.webp"
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Automated Energy Savings</h3>
                <p>Utilize smart automation to control lighting, heating, and cooling systems, significantly reducing energy consumption without sacrificing comfort or productivity.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Sustainable Resource Management</h3>
                <p>Manage resources more effectively with our comprehensive tracking tools. Reduce waste and ensure that your office supplies and materials are eco-friendly and sustainably sourced.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Remote Work Integration</h3>
                <p>Facilitate a more flexible work environment with tools that support remote work, reducing the need for commuting and office resources, while maintaining productivity and collaboration.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Engage and Inspire"
          title="Engage and Inspire"
          description="A sustainable workplace is a collective effort. Our platform helps you engage your team in sustainability goals, fostering a sense of community and shared responsibility."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Green Challenges and Rewards</h3>
                <p>Motivate your employees with green challenges, gamifying sustainability and rewarding eco-friendly behaviors. Encourage a healthy competition that benefits both your team and the planet.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Sustainability Reporting</h3>
                <p>Showcase your commitment to sustainability with detailed reports. Share your achievements with stakeholders and inspire others by highlighting your journey towards a greener workplace.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Continuous Learning</h3>
                <p>Stay ahead of the curve with resources, webinars, and workshops that keep you informed about the latest in sustainability. Empower your team with the knowledge to make a difference every day.</p>
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
