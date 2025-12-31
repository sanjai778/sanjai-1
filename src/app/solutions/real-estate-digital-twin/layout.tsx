import { Metadata } from 'next';
import RealEstateDigitalTwinPage from './page';

export const metadata: Metadata = {
  title: 'Real Estate Digital Twin Solutions | Smart Building Analytics',
  description: 'Leverage Onfra’s real estate digital twin technology to gain a virtual representation of your buildings. Optimize maintenance, improve energy efficiency, and enhance workspace planning.',
  alternates: {
    canonical: 'https://onfra.io/solutions/real-estate-digital-twin',
  },
  openGraph: {
    title: 'Real Estate Digital Twin Solutions | Smart Building Analytics',
    description: 'Leverage Onfra’s real estate digital twin technology to gain a virtual representation of your buildings. Optimize maintenance, improve energy efficiency, and enhance workspace planning.',
    url: 'https://onfra.io/solutions/real-estate-digital-twin',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Real Estate Digital Twin',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Digital Twin Solutions | Smart Building Analytics',
    description: 'Leverage Onfra’s real estate digital twin technology to gain a virtual representation of your buildings. Optimize maintenance, improve energy efficiency, and enhance workspace planning.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <RealEstateDigitalTwinPage />;
}
