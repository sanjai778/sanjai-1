import { Metadata } from 'next';
import CommercialRealEstatePage from './page';

export const metadata: Metadata = {
  title: 'Commercial Real Estate Management Solutions | Onfra',
  description: 'Enhance your property value and tenant experience with Onfra’s commercial real estate management solutions. Streamline visitor access and facility operations.',
  alternates: {
    canonical: 'https://onfra.io/solutions/commercial-real-estate-management',
  },
  openGraph: {
    title: 'Commercial Real Estate Management Solutions | Onfra',
    description: 'Enhance your property value and tenant experience with Onfra’s commercial real estate management solutions. Streamline visitor access and facility operations.',
    url: 'https://onfra.io/solutions/commercial-real-estate-management',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Commercial Real Estate Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Real Estate Management Solutions | Onfra',
    description: 'Enhance your property value and tenant experience with Onfra’s commercial real estate management solutions. Streamline visitor access and facility operations.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <CommercialRealEstatePage />;
}
