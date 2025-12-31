"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

interface NavLink {
  href: string;
  icon?: React.ReactNode;
  title: string;
  description?: string;
}

interface HeaderContentProps {
  platformLinks: NavLink[];
  platformSecondaryLinks: NavLink[];
  solutionsLinks: NavLink[];
  solutionsSecondaryLinks: NavLink[];
}

const MobileHeader: React.FC<HeaderContentProps> = ({
  platformLinks,
  platformSecondaryLinks,
  solutionsLinks,
  solutionsSecondaryLinks,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (e: React.MouseEvent, dropdown: string) => {
    e.preventDefault();
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={styles.top_main_header}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <Image 
            src="/images/logos/onfra-logo.png" 
            width={165} 
            height={55} 
            priority
            style={{ width: '165px', height: 'auto' }} 
            alt="Best Workplace Management Platform" 
          />
        </Link>

        <ul className={`${styles.nav_menu} ${isMenuOpen ? styles.show : ''}`}>
          {/* <div className={styles.mobile_menu_header}>
            <Link href="/" className={styles.brand}>
              <Image src="/images/logos/onfra-logo.png" width={165} height={55} style={{ height: '55px' }} alt="Best Workplace Management Platform" />
            </Link>
            <i className="bx bx-x" onClick={handleMenuToggle}></i>
          </div> */}
          <li>
            <a href="#" onClick={(e) => handleDropdownToggle(e, 'platform')}>
              Platform <i className={`bx bx-chevron-down ${openDropdown === 'platform' ? styles.rotate : ''}`}></i>
            </a>
            <div className={`${styles.dropdown_menu} ${openDropdown === 'platform' ? styles.show : ''}`}>
              <div className={styles.dropdown_container}>
                <div className={styles.dropdown_section}>
                  <ul className={styles.dropdown_links}>
                    {platformLinks.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href}>
                          {link.icon && <div className={styles.icon}>{link.icon}</div>}
                          <div>
                            <div className={styles.menu_title_o}>{link.title}</div>
                            <p>{link.description}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.dropdown_section_secondary}>
                  <ul className={styles.dropdown_links}>
                    {platformSecondaryLinks.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href}>
                          {link.icon && <div className={styles.icon}>{link.icon}</div>}
                          <div>
                            <div className={styles.menu_title_o}>{link.title}</div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#" onClick={(e) => handleDropdownToggle(e, 'solutions')}>
              Solutions <i className={`bx bx-chevron-down ${openDropdown === 'solutions' ? styles.rotate : ''}`}></i>
            </a>
            <div className={`${styles.dropdown_menu} ${openDropdown === 'solutions' ? styles.show : ''}`}>
              <div className={styles.dropdown_container_solutions}>
                <div className={styles.dropdown_section_solutions}>
                  <ul className={styles.dropdown_links}>
                    {solutionsLinks.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href}>
                          <div>
                            <div className={styles.menu_title_o}>{link.title}</div>
                            <p>{link.description}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.dropdown_section_secondary_solutions}>
                  <ul className={styles.dropdown_links}>
                    {solutionsSecondaryLinks.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href}>
                          <div>
                            <div className={styles.menu_title_o}>{link.title}</div>
                            <p>{link.description}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li><Link href="/blogs">Blogs</Link></li>
          <li><Link href="/contact-us">Contact Us</Link></li>
          <li>
            <a href="https://app.onfra.io/signup" className="btn btn-primary">Signup Now</a>
          </li>
        </ul>
        <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} ${styles.toggle_navbar}`} onClick={handleMenuToggle}></i>
      </div>
    </nav>
  );
};

export default MobileHeader;
