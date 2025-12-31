import { Metadata } from 'next';
import TestimonialsPage from './page';

export const metadata: Metadata = {
  title: 'Customer Testimonials | What Our Clients Say About Onfra',
  description: 'Read testimonials from our customers who have transformed their workplaces with Onfra’s visitor management, desk booking, and facility management solutions.',
  alternates: {
    canonical: 'https://onfra.io/testimonialste',
  },
  openGraph: {
    title: 'Customer Testimonials | What Our Clients Say About Onfra',
    description: 'Read testimonials from our customers who have transformed their workplaces with Onfra’s visitor management, desk booking, and facility management solutions.',
    url: 'https://onfra.io/testimonialste',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Customer Testimonials',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customer Testimonials | What Our Clients Say About Onfra',
    description: 'Read testimonials from our customers who have transformed their workplaces with Onfra’s visitor management, desk booking, and facility management solutions.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <TestimonialsPage />;
}
