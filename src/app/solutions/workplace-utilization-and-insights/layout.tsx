import { Metadata } from 'next';
import WorkplaceUtilizationPage from './page';

export const metadata: Metadata = {
  title: 'Workplace Utilization & Insights | Data-Driven Office Management',
  description: 'Gain deep insights into your office usage with Onfra’s workplace utilization analytics. Measure occupancy, track assets, and optimize your real estate footprint.',
  alternates: {
    canonical: 'https://onfra.io/solutions/workplace-utilization-and-insights',
  },
  openGraph: {
    title: 'Workplace Utilization & Insights | Data-Driven Office Management',
    description: 'Gain deep insights into your office usage with Onfra’s workplace utilization analytics. Measure occupancy, track assets, and optimize your real estate footprint.',
    url: 'https://onfra.io/solutions/workplace-utilization-and-insights',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Workplace Utilization',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workplace Utilization & Insights | Data-Driven Office Management',
    description: 'Gain deep insights into your office usage with Onfra’s workplace utilization analytics. Measure occupancy, track assets, and optimize your real estate footprint.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <WorkplaceUtilizationPage />;
}
