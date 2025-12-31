import { Metadata } from 'next';
import ProductPage from './page';

export const metadata: Metadata = {
  title: 'Our Products | Integrated Workplace Solutions | Onfra',
  description: 'Explore Onfra’s suite of integrated workplace solutions, including visitor management, desk booking, and facility management products.',
  alternates: {
    canonical: 'https://onfra.io/product',
  },
  openGraph: {
    title: 'Our Products | Integrated Workplace Solutions | Onfra',
    description: 'Explore Onfra’s suite of integrated workplace solutions, including visitor management, desk booking, and facility management products.',
    url: 'https://onfra.io/product',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Products',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Products | Integrated Workplace Solutions | Onfra',
    description: 'Explore Onfra’s suite of integrated workplace solutions, including visitor management, desk booking, and facility management products.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <ProductPage />;
}
