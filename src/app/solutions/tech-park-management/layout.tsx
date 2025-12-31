import { Metadata } from 'next';
import TechParkManagementPage from './page';

export const metadata: Metadata = {
  title: 'Tech Park Management Solutions | Smart Campus Operations',
  description: 'Streamline tech park operations with Onfra’s integrated management solutions. Enable smart visitor access, automated parking, and efficient facility maintenance for large campuses.',
  alternates: {
    canonical: 'https://onfra.io/solutions/tech-park-management',
  },
  openGraph: {
    title: 'Tech Park Management Solutions | Smart Campus Operations',
    description: 'Streamline tech park operations with Onfra’s integrated management solutions. Enable smart visitor access, automated parking, and efficient facility maintenance for large campuses.',
    url: 'https://onfra.io/solutions/tech-park-management',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Tech Park Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Park Management Solutions | Smart Campus Operations',
    description: 'Streamline tech park operations with Onfra’s integrated management solutions. Enable smart visitor access, automated parking, and efficient facility maintenance for large campuses.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <TechParkManagementPage />;
}
