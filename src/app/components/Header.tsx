"use client";
import React from 'react';
import HeaderContent from './HeaderContent';
import MobileHeader from './MobileHeader';
import styles from './Header.module.css';

interface NavLink {
  href: string;
  icon?: React.ReactNode;
  title: string;
  description?: string;
}

const Header = () => {
  const [isMobile, setIsMobile] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const mql = window.matchMedia('(max-width: 991px)');
    const checkMobile = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };
    checkMobile(mql);
    mql.addEventListener('change', checkMobile);
    return () => mql.removeEventListener('change', checkMobile);
  }, []);

  const platformLinks: NavLink[] = [
    { href: "/platform/visitors/", icon: <span className="icon-visitdesk_icons_0140" />, title: "Visitor", description: "Manage visitor check-ins and track data securely." },
    { href: "/platform/flexipass/", icon: <span className="icon-visitdesk_icons_0125" />, title: "Flexipass", description: "Streamline contractor access and pass management." },
    { href: "/platform/employees/", icon: <span className="icon-visitdesk_icons_0091" />, title: "Attendance & Time Tracking", description: "Track employee attendance effortlessly and securely." },
    { href: "/platform/queue-management/", icon: <span className="icon-visitdesk_icons_0085" />, title: "Queue", description: "Enhance customer experience with efficient queues." },
    { href: "/platform/deliveries/", icon: <span className="icon-visitdesk_icons_0045" />, title: "Deliveries", description: "Streamline package tracking and delivery notifications." },
    { href: "/platform/material-pass/", icon: <span className="icon-visitdesk_icons_0148" />, title: "Material Pass", description: "Track all material movements with ease and accuracy." },
    { href: "/platform/rooms/", icon: <span className="icon-visitdesk_icons_0106" />, title: "Rooms", description: "Simplify meeting room bookings for better collaboration." },
    { href: "/platform/desk/", icon: <span className="icon-visitdesk_icons_0101" />, title: "Desks", description: "Manage desk reservations for a flexible workspace." },
    { href: "/platform/vehicles/", icon: <span className="icon-visitdesk_icons_0112" />, title: "Vehicle Pass", description: "Control vehicle access with effective pass management." },
    { href: "#", icon: <span className="icon-visitdesk_icons_0070" />, title: "Signage", description: "Use digital signage for real-time information sharing." },
  ];
  const platformSecondaryLinks: NavLink[] = [
    { href: "/download-apps/", icon: <span className="icon-visitdesk_icons_0065" />, title: "Download Apps" },
    { href: "/api/", icon: <span className="icon-visitdesk_icons_0144" />, title: "Api" },
    { href: "/integrations/", icon: <span className="icon-visitdesk_icons_0152" />, title: "Integrations" },
  ];
  const solutionsLinks: NavLink[] = [
    { href: "/solutions/hybrid-office-management/", title: "Hybrid Office Management", description: "Spanning the Gap Between Office and Remote Work" },
    { href: "/solutions/co-working-management/", title: "Co Working Management", description: "Simplify Operations, Enhance Experience" },
    { href: "/solutions/facility-management/", title: "Facility Management", description: "Transforming Spaces into Efficient Workplaces" },
    { href: "/solutions/tech-park-management/", title: "Tech Park Management", description: "The Future of Workplace Management" },
    { href: "/solutions/centralize-workplace-management/", title: "Centralize Workplace Management", description: "Streamline Your Operations Centralize Workplace Management" },
    { href: "/solutions/employee-tenant-and-visitor-experience/", title: "Employee, tenant and visitor experience", description: "Efficiently manage desk assignments" },
    { href: "/solutions/safety-security-and-compliance/", title: "Safety, security and compliance", description: "Track and resolve facility maintenance" },
    { href: "/solutions/workplace-utilization-and-insights/", title: "Workplace utilization and insights", description: "Optimize Your Workspace - Unlock Efficiency and Insights" },
    { href: "/solutions/workplaces-and-buildings/", title: "Workplaces and buildings", description: "Revolutionizing Workplace and Building Management" },
    { href: "/solutions/sustainable-workplace/", title: "Sustainable Workplace", description: "Building Sustainability into Every Corner" },
  ];
  const solutionsSecondaryLinks: NavLink[] = [
    { href: "/solutions/commercial-real-estate-management/", title: "Commerical Real Estate Management", description: "Revolutionize Your Commercial Real Estate Operations" },
    { href: "/solutions/manufacturing-plant-management/", title: "Manufacturing Plant Management", description: "Transform Your Manufacturing Plant Management" },
    { href: "/solutions/industrial-security-management/", title: "Industrial Security Management", description: "Empowering Your Industry's Security" },
    { href: "/solutions/real-estate-digital-twin/", title: "Real estate digital twin", description: "Transform Your Properties into Interactive Digital Twins" },
    { href: "/solutions/proptech-solutions/", title: "Proptech Solutions", description: "Transform Your Property Management" },
  ];

  return (
    <>
      {isMobile === false && (
        <div className={styles.desktop_header}>
          <HeaderContent
            platformLinks={platformLinks}
            platformSecondaryLinks={platformSecondaryLinks}
            solutionsLinks={solutionsLinks}
            solutionsSecondaryLinks={solutionsSecondaryLinks}
          />
        </div>
      )}
      {isMobile === true && (
        <div className={styles.mobile_header}>
          <MobileHeader
            platformLinks={platformLinks}
            platformSecondaryLinks={platformSecondaryLinks}
            solutionsLinks={solutionsLinks}
            solutionsSecondaryLinks={solutionsSecondaryLinks}
          />
        </div>
      )}
      {/* Skeleton or placeholder for SSR to avoid jump if needed, 
          but usually for header we want to avoid double rendering more than absolute SSR matching 
          especially for performance */}
    </>
  );
};

export default Header;
