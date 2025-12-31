import { Metadata } from 'next';
import WorkplacesAndBuildingsPage from './page';

export const metadata: Metadata = {
  title: 'Workplaces & Buildings Management | Smart Facility Solutions',
  description: 'Transform your buildings into smart, connected workplaces with Onfra. Optimize space, improve security, and enhance occupant experience with our integrated solutions.',
  alternates: {
    canonical: 'https://onfra.io/solutions/workplaces-and-buildings',
  },
  openGraph: {
    title: 'Workplaces & Buildings Management | Smart Facility Solutions',
    description: 'Transform your buildings into smart, connected workplaces with Onfra. Optimize space, improve security, and enhance occupant experience with our integrated solutions.',
    url: 'https://onfra.io/solutions/workplaces-and-buildings',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Workplaces & Buildings Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workplaces & Buildings Management | Smart Facility Solutions',
    description: 'Transform your buildings into smart, connected workplaces with Onfra. Optimize space, improve security, and enhance occupant experience with our integrated solutions.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <WorkplacesAndBuildingsPage />;
}
