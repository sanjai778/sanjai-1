import { Metadata } from 'next';
import IndustrialSecurityManagementPage from './page';

export const metadata: Metadata = {
  title: 'Industrial Security Management Solutions | Secure Manufacturing Sites',
  description: 'Protect your industrial premises with Onfra’s comprehensive security management solutions. Control access, track material movement, and ensure workplace safety.',
  alternates: {
    canonical: 'https://onfra.io/solutions/industrial-security-management',
  },
  openGraph: {
    title: 'Industrial Security Management Solutions | Secure Manufacturing Sites',
    description: 'Protect your industrial premises with Onfra’s comprehensive security management solutions. Control access, track material movement, and ensure workplace safety.',
    url: 'https://onfra.io/solutions/industrial-security-management',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Industrial Security Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Security Management Solutions | Secure Manufacturing Sites',
    description: 'Protect your industrial premises with Onfra’s comprehensive security management solutions. Control access, track material movement, and ensure workplace safety.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <IndustrialSecurityManagementPage />;
}
