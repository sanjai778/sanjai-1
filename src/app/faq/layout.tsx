import { Metadata } from 'next';
import FaqPage from './page';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | Onfra',
  description: 'Find answers to common questions about Onfra’s visitor management, desk booking, and facility management solutions.',
  alternates: {
    canonical: 'https://onfra.io/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions (FAQ) | Onfra',
    description: 'Find answers to common questions about Onfra’s visitor management, desk booking, and facility management solutions.',
    url: 'https://onfra.io/faq',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra FAQ',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions (FAQ) | Onfra',
    description: 'Find answers to common questions about Onfra’s visitor management, desk booking, and facility management solutions.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <FaqPage />;
}
