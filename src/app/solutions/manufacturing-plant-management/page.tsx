import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Hero from '@/app/platform/section/hero';
import InfoSection from '@/app/components/sections/InfoSection';
import ComplianceSection from '@/app/components/sections/ComplianceSection';
import FaqSection from '@/app/components/sections/FaqSection';
import BlogSwiperSection from '@/app/components/sections/BlogSwiperSection';
import styles from '../page.module.css';

export default function ManufacturingPlantManagementPage() {
  return (
    <>
      <Header />
      <main className={styles.solutionsMain}>
        <div id={styles.sub_page_hero_banner}>
          <Hero
            tagline="Manufacturing Plant Management"
            title="Span - Streamline Your Manufacturing Processes"
            description="Experience the future of manufacturing plant management with our state-of-the-art SaaS solution, designed to streamline operations, enhance efficiency, and boost productivity across your manufacturing processes."
            imageUrl="/uploads/svg_image/solutions/Manufacturing-Plant-Management.png"
          />
        </div>

        <InfoSection
          tagline="Unleash Efficiency with Smart Workflow Automation"
          title="Unleash Efficiency with Smart Workflow Automation"
          description="Our platform brings the power of automation to your manufacturing plant, enabling you to optimize workflows, reduce manual errors, and save time. By automating routine tasks, your team can focus on what truly matters – driving innovation and growth."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Real-Time Monitoring</h3>
                <p>With our real-time monitoring tools, stay on top of every aspect of your manufacturing process. From supply chain logistics to production timelines, get instant updates that enable proactive decision-making.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Data-Driven Decision Making</h3>
                <p>Harness the power of data with our comprehensive analytics suite. Gain insights into operational inefficiencies, track performance metrics, and make informed decisions to propel your manufacturing processes forward.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Seamless Integration</h3>
                <p>Our platform is designed to seamlessly integrate with your existing systems, ensuring a smooth transition and uninterrupted operations. From ERP to SCM systems, we've got you covered.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Elevate Quality Control with Advanced Analytics"
          title="Elevate Quality Control with Advanced Analytics"
          description="Maintain the highest standards of quality control with our advanced analytics features. Identify bottlenecks, predict maintenance needs, and ensure product quality consistently meets your high standards."
          imageUrl="/uploads/static-image/ControlSecure.webp"
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Predictive Maintenance</h3>
                <p>Utilize predictive analytics to forecast equipment malfunctions before they happen. Schedule maintenance proactively to minimize downtime and maintain continuous production.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Quality Monitoring</h3>
                <p>Monitor and manage product quality with our intuitive dashboards. Track defect rates, audit processes, and implement corrective actions swiftly to maintain excellence.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Supply Chain Optimization</h3>
                <p>Optimize your supply chain with our advanced analytics. Predict supply needs, manage inventory levels efficiently, and ensure timely delivery of raw materials to keep your production line moving.</p>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          tagline="Foster a Culture of Continuous Improvement"
          title="Foster a Culture of Continuous Improvement"
          description="Our platform not only optimizes your current operations but also paves the way for continuous improvement. Empower your team with the tools and insights needed to innovate and excel."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          reversed={true}
        />

        <section className={styles.solutionCardsSection}>
          <div className="container">
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Employee Engagement</h3>
                <p>Boost employee morale and engagement with tools that make their jobs easier and more productive. Foster a culture of innovation where every team member feels valued and empowered to contribute.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Sustainability Practices</h3>
                <p>Implement and track sustainability practices within your manufacturing processes. Reduce waste, conserve resources, and meet your corporate social responsibility goals with our comprehensive tools.</p>
              </div>
              <div className={styles.solutionCard}>
                <i className="icon-visitdesk_icons_0140"></i>
                <h3>Scalable Solutions</h3>
                <p>As your business grows, our platform scales with you. Adapt to changing market demands with flexible solutions that support your expansion, ensuring you're always ahead of the competition.</p>
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
