import { Metadata } from 'next';
import TermsAndConditionsPage from './page';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read the terms and conditions for using Onfra’s visitor management, desk booking, and facility management services.',
  alternates: {
    canonical: 'https://onfra.io/terms-and-conditions',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Terms & Conditions | Onfra',
    description: 'Read the terms and conditions for using Onfra’s visitor management, desk booking, and facility management services.',
    url: 'https://onfra.io/terms-and-conditions',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Terms & Conditions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | Onfra',
    description: 'Read the terms and conditions for using Onfra’s visitor management, desk booking, and facility management services.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <TermsAndConditionsPage />;
}
