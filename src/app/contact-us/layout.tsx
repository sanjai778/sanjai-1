import { Metadata } from 'next';
import ContactUsPage from './page';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Have questions about visitor management, desk booking, or facility management? Contact the Onfra support and sales teams today.',
  alternates: {
    canonical: 'https://onfra.io/contact-us',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Contact Us | Get In Touch with Onfra',
    description: 'Have questions about visitor management, desk booking, or facility management? Contact the Onfra support and sales teams today.',
    url: 'https://onfra.io/contact-us',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Contact Us',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Get In Touch with Onfra',
    description: 'Have questions about visitor management, desk booking, or facility management? Contact the Onfra support and sales teams today.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Page() {
  return <ContactUsPage />;
}
