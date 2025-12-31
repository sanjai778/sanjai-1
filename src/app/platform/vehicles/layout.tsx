import { Metadata } from 'next';
import VehiclesPage from './page';

export const metadata: Metadata = {
  title: 'Secure Vehicle Pass & Tracking System | Onfra',
  description: 'Manage vehicle access and movement logs with Onfra’s digital vehicle pass system. Improve security, reduce gate congestion, and automate tracking.',
  alternates: {
    canonical: 'https://onfra.io/platform/vehicles',
  },
  openGraph: {
    title: 'Secure Vehicle Pass & Tracking System | Onfra',
    description: 'Manage vehicle access and movement logs with Onfra’s digital vehicle pass system. Improve security, reduce gate congestion, and automate tracking.',
    url: 'https://onfra.io/platform/vehicles',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Vehicle Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Secure Vehicle Pass & Tracking System | Onfra',
    description: 'Manage vehicle access and movement logs with Onfra’s digital vehicle pass system. Improve security, reduce gate congestion, and automate tracking.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <VehiclesPage />;
}
