import { Metadata } from 'next';
import ProptechSolutionsPage from './page';

export const metadata: Metadata = {
  title: 'Proptech Solutions | Innovative Real Estate Technology',
  description: 'Explore Onfra’s proptech solutions designed to modernize real estate management. Enhance building efficiency, security, and tenant satisfaction with cutting-edge technology.',
  alternates: {
    canonical: 'https://onfra.io/solutions/proptech-solutions',
  },
  openGraph: {
    title: 'Proptech Solutions | Innovative Real Estate Technology',
    description: 'Explore Onfra’s proptech solutions designed to modernize real estate management. Enhance building efficiency, security, and tenant satisfaction with cutting-edge technology.',
    url: 'https://onfra.io/solutions/proptech-solutions',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Proptech Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proptech Solutions | Innovative Real Estate Technology',
    description: 'Explore Onfra’s proptech solutions designed to modernize real estate management. Enhance building efficiency, security, and tenant satisfaction with cutting-edge technology.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <ProptechSolutionsPage />;
}
