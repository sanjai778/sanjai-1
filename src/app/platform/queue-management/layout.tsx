import { Metadata } from 'next';
import QueueManagementPage from './page';

export const metadata: Metadata = {
  title: 'Digital Queue Management System | Onfra',
  description: 'Reduce wait times and improve customer experience with Onfra’s digital queue management system. Enable smart ticketing, real-time notifications, and analytics.',
  alternates: {
    canonical: 'https://onfra.io/platform/queue-management',
  },
  openGraph: {
    title: 'Digital Queue Management System | Onfra',
    description: 'Reduce wait times and improve customer experience with Onfra’s digital queue management system. Enable smart ticketing, real-time notifications, and analytics.',
    url: 'https://onfra.io/platform/queue-management',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Queue Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Queue Management System | Onfra',
    description: 'Reduce wait times and improve customer experience with Onfra’s digital queue management system. Enable smart ticketing, real-time notifications, and analytics.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <QueueManagementPage />;
}
