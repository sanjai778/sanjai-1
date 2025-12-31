import { Metadata } from 'next';
import FlexipassPage from './page';

export const metadata: Metadata = {
  title: 'Smart Access Management System | Onfra FlexiPass',
  description: 'Digitize your workplace access with Onfra FlexiPass. Secure, mobile-based entry, instant pass control, and real-time visibility for a connected workplace.',
  alternates: {
    canonical: 'https://onfra.io/platform/flexipass',
  },
  openGraph: {
    title: 'Smart Access Management System | Onfra FlexiPass',
    description: 'Digitize your workplace access with Onfra FlexiPass. Secure, mobile-based entry, instant pass control, and real-time visibility for a connected workplace.',
    url: 'https://onfra.io/platform/flexipass',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra FlexiPass Access',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Access Management System | Onfra FlexiPass',
    description: 'Digitize your workplace access with Onfra FlexiPass. Secure, mobile-based entry, instant pass control, and real-time visibility for a connected workplace.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <FlexipassPage />;
}
