import { Metadata } from 'next';
import DeliveriesPage from './page';

export const metadata: Metadata = {
  title: 'Smart Delivery Management System | Onfra',
  description: 'Simplify package handling at your workplace with Onfra’s delivery management system. Automate logging, notifications, and proof of delivery for a secure front desk.',
  alternates: {
    canonical: 'https://onfra.io/platform/deliveries',
  },
  openGraph: {
    title: 'Smart Delivery Management System | Onfra',
    description: 'Simplify package handling at your workplace with Onfra’s delivery management system. Automate logging, notifications, and proof of delivery for a secure front desk.',
    url: 'https://onfra.io/platform/deliveries',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Delivery Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Delivery Management System | Onfra',
    description: 'Simplify package handling at your workplace with Onfra’s delivery management system. Automate logging, notifications, and proof of delivery for a secure front desk.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <DeliveriesPage />;
}
