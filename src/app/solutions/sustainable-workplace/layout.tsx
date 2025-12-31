import { Metadata } from 'next';
import SustainableWorkplacePage from './page';

export const metadata: Metadata = {
  title: 'Sustainable Workplace Solutions | Green Office Management',
  description: 'Create a more sustainable and eco-friendly workplace with Onfra. Optimize resource usage, reduce waste, and promote a greener office environment.',
  alternates: {
    canonical: 'https://onfra.io/solutions/sustainable-workplace',
  },
  openGraph: {
    title: 'Sustainable Workplace Solutions | Green Office Management',
    description: 'Create a more sustainable and eco-friendly workplace with Onfra. Optimize resource usage, reduce waste, and promote a greener office environment.',
    url: 'https://onfra.io/solutions/sustainable-workplace',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Sustainable Workplace',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sustainable Workplace Solutions | Green Office Management',
    description: 'Create a more sustainable and eco-friendly workplace with Onfra. Optimize resource usage, reduce waste, and promote a greener office environment.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <SustainableWorkplacePage />;
}
