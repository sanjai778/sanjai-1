import { Metadata } from 'next';
import BecomeAPartnerPage from './page';

export const metadata: Metadata = {
  title: 'Become a Partner | Join Onfra’s Partner Program',
  description: 'Join Onfra’s partner program and grow your business with our integrated workplace solutions. Partner with us to provide visitor management, desk booking, and facility management.',
  alternates: {
    canonical: 'https://onfra.io/become-a-partner',
  },
  openGraph: {
    title: 'Become a Partner | Join Onfra’s Partner Program',
    description: 'Join Onfra’s partner program and grow your business with our integrated workplace solutions. Partner with us to provide visitor management, desk booking, and facility management.',
    url: 'https://onfra.io/become-a-partner',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Partner Program',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Become a Partner | Join Onfra’s Partner Program',
    description: 'Join Onfra’s partner program and grow your business with our integrated workplace solutions. Partner with us to provide visitor management, desk booking, and facility management.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <BecomeAPartnerPage />;
}
