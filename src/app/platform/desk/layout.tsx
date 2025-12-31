import { Metadata } from 'next';
import DeskPage from './page';

export const metadata: Metadata = {
  title: 'Desk Management & Hot-Desking System | Onfra',
  description: 'Optimize your hybrid office with Onfra’s desk management and hot-desking system. Enable interactive floor plans, real-time occupancy tracking, and easy desk reservations.',
  alternates: {
    canonical: 'https://onfra.io/platform/desk',
  },
  openGraph: {
    title: 'Desk Management & Hot-Desking System | Onfra',
    description: 'Optimize your hybrid office with Onfra’s desk management and hot-desking system. Enable interactive floor plans, real-time occupancy tracking, and easy desk reservations.',
    url: 'https://onfra.io/platform/desk',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Desk Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desk Management & Hot-Desking System | Onfra',
    description: 'Optimize your hybrid office with Onfra’s desk management and hot-desking system. Enable interactive floor plans, real-time occupancy tracking, and easy desk reservations.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <DeskPage />;
}
