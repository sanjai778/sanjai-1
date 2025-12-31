import { Metadata } from 'next';
import VisitorsPage from './page';

export const metadata: Metadata = {
  title: 'Visitor Management System | Onfra',
  description: 'Simplify visitor check-ins and track data securely with Onfra’s modern visitor management system. Modernize front-desk operations with contactless check-ins and real-time monitoring.',
  alternates: {
    canonical: 'https://onfra.io/platform/visitors',
  },
  openGraph: {
    title: 'Visitor Management System | Onfra',
    description: 'Simplify visitor check-ins and track data securely with Onfra’s modern visitor management system. Modernize front-desk operations with contactless check-ins and real-time monitoring.',
    url: 'https://onfra.io/platform/visitors',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Visitor Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visitor Management System | Onfra',
    description: 'Simplify visitor check-ins and track data securely with Onfra’s modern visitor management system. Modernize front-desk operations with contactless check-ins and real-time monitoring.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <VisitorsPage />;
}
