import Link from 'next/link';
import styles from './ProductsSection.module.css';

const products = [
    {
        icon: 'icon-visitdesk_icons_0140',
        title: 'Visitor<br> Management',
        description: 'Enhance visitor management with a streamlined check-in process. Capture essential information, print badges, and boost security through digital record-keeping.',
        link: 'https://onfra.io/platform/visitors/'
    },
    {
        icon: 'icon-visitdesk_icons_0125',
        title: 'Contractor & <br> Flexipass',
        description: 'Optimize contractor and vendor access management. Easily issue, track passes, and schedule access for seamless collaboration and improved security.',
        link: 'https://onfra.io/platform/flexipass/'
    },
    {
        icon: 'icon-visitdesk_icons_0091',
        title: 'Attendance &<br> Time Tracking',
        description: 'Simplify attendance tracking for employees. Enable easy logging of arrivals and departures while maintaining organized HR records for enhanced security management.',
        link: 'https://onfra.io/platform/employees'
    },
    {
        icon: 'icon-visitdesk_icons_0085',
        title: 'Queue <br> Management',
        description: 'Improve customer service with effective queue management. Ensure employees have the time to perform their jobs efficiently while maintaining control over operations.',
        link: 'https://onfra.io/platform/queue-management'
    },
    {
        icon: 'icon-visitdesk_icons_0045',
        title: 'Mailroom & <br>Deliveries',
        description: 'Manage deliveries effectively with a reliable system for recording and notifying recipients. Ensure secure and timely package management for your organization.',
        link: 'https://onfra.io/platform/deliveries'
    },
    {
        icon: 'icon-visitdesk_icons_0148',
        title: 'Gate & <br>Material Pass',
        description: 'Streamline material movement tracking with an efficient system for managing inward, outward, returnable, and non-returnable gate passes.',
        link: '#'
    },
    {
        icon: 'icon-visitdesk_icons_0106',
        title: 'Meeting Room <br>Scheduling',
        description: 'Optimize your meeting room bookings effortlessly. Allow easy reservations, view availability, and manage scheduling conflicts to enhance team collaboration.',
        link: 'https://onfra.io/platform/rooms'
    },
    {
        icon: 'icon-visitdesk_icons_0101',
        title: 'Hotdesking &<br> Desk Scheduling',
        description: 'Efficiently manage desk assignments and availability with a flexible hotdesking solution that allows employees to reserve desks as needed.',
        link: 'https://onfra.io/platform/desk'
    }
];

const ProductsSection: React.FC = () => {
  return (
    <section className={styles.productsSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.tagline}>#1 Workplace Management System</h2>
          <h3 className={styles.title}>Manage anything and everything that revolves around your workspace!</h3>
        </div>
        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.title} className={styles.productCard}>
              <div className={styles.icon}>
                <i className={product.icon}></i>
              </div>
              <div className={styles.boxHeading}>
                <Link href={product.link}>
                  <h2 dangerouslySetInnerHTML={{ __html: product.title }}></h2>
                </Link>
              </div>
              <p className={styles.cardDescription}>{product.description}</p>
              <Link href={product.link} className={styles.readMore}>
                Explore
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
