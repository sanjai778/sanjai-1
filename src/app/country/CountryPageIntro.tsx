import Image from 'next/image';
import Link from 'next/link';
import styles from './Countries.module.css';

export default function CountryPageIntro() {
  return (
    <>
      <section className={styles.hero_section}>
        <div className="container">
          <div className={styles.hero_content}>
            <div className={styles.hero_left}>
              <h1 className={styles.hero_title}>Best Workplace Management Solutions in Your Country</h1>
              <p className={styles.hero_subtitle}>Workplace management is evolving rapidly worldwide.</p>
              <div className={styles.button_group}>
                <Link href="/book-demo" className="btn btn-primary">Book Demo</Link>
                <Link href="/contact-sales" className="btn btn-outline-primary">Talk to Expert</Link>
              </div>
              <div className={styles.check_items}>
                <span className={styles.check_item}><Image src="/uploads/svg_image/check-circle.svg" width={16} height={16} alt="Check"/>Free 14-day Demo</span>
                <span className={styles.check_item}><Image src="/uploads/svg_image/check-circle.svg" width={16} height={16} alt="Check"/>No credit card needed</span>
                <span className={styles.check_item}><Image src="/uploads/svg_image/check-circle.svg" width={16} height={16} alt="Check"/>Quick Setup</span>
              </div>
            </div>
            <div className={styles.hero_right}>
              <Image src="/uploads/svg_image/country_image.svg" alt="Workplace management illustration" width={500} height={350} priority />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.solutions_section}>
        <div className="container">
          <div className={styles.solutions_grid}>
            <div className={styles.solution_card}>
              <div className={styles.card_icon}><Image src="/icon-digital-transformation.svg" alt="Icon" width={32} height={32} /></div>
              <h3 className={styles.card_title}>Digital Transformation Boosts Visitor Management and Hybrid Workspaces</h3>
              <p>Smart visitor management and meeting room booking are becoming standard across enterprises.</p>
            </div>
            <div className={styles.solution_card}>
              <div className={styles.card_icon}><Image src="/icon-smart-workspace.svg" alt="Icon" width={32} height={32} /></div>
              <h3 className={styles.card_title}>Your Country Companies Adopt Hotdesking and Smart Workspace Tech</h3>
              <p>Hotdesking and hybrid space utilization are essential for modern organizations.</p>
            </div>
          </div>
          <div className={styles.individual_solutions_list}>
            <div className={styles.solution_item}><h3>Visitor Management App in Your Country</h3><p>Ensure seamless and secure check-ins for your guests. Onfra’s visitor management system helps organizations in Your Country manage reception flows with ease, ensuring compliance and safety.</p></div>
            <div className={styles.solution_item}><h3>Gatepass Management System in Your Country</h3><p>Digitize and streamline gatepass approvals for employees, contractors, and vendors. Onfra helps businesses in Your Country reduce manual paperwork and improve access control.</p></div>
            <div className={styles.solution_item}><h3>Meeting Room Management App in Your Country</h3><p>Simplify room bookings and boost meeting efficiency. Onfra’s smart booking system helps teams in Your Country utilize space effectively and avoid scheduling conflicts.</p></div>
            <div className={styles.solution_item}><h3>Hotdesking App in Your Country</h3><p>Empower hybrid teams in Your Country with flexible seating options. Onfra’s hotdesking feature supports desk reservations, real-time availability, and easy access.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}