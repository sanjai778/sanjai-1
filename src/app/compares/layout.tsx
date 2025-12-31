import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Comparisons | Visitor Management, Desk Booking, and Facility Management',
  description: 'Compare leading visitor management, desk booking, and facility management software against Onfra to find the best fit for your hybrid workplace.',
  alternates: {
    canonical: 'https://onfra.io/compares',
  },
  openGraph: {
    title: 'Software Comparisons | Visitor Management, Desk Booking, and Facility Management',
    description: 'Compare leading visitor management, desk booking, and facility management software against Onfra to find the best fit for your hybrid workplace.',
    url: 'https://onfra.io/compares',
    siteName: 'Onfra',
    images: [
      {
        url: '/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Comparisons',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Comparisons | Visitor Management, Desk Booking, and Facility Management',
    description: 'Compare leading visitor management, desk booking, and facility management software against Onfra to find the best fit for your hybrid workplace.',
    images: ['/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}