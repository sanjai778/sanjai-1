import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bizo | Advanced Enterprise Solutions for Workspace Management',
  description: 'Explore Bizo, Onfra’s advanced offering for large enterprises requiring complex, scalable solutions for visitor management, desk booking, and facility operations.',
  alternates: {
    canonical: 'https://onfra.io/bizo',
  },
  openGraph: {
    title: 'Bizo | Advanced Enterprise Solutions for Workspace Management',
    description: 'Explore Bizo, Onfra’s advanced offering for large enterprises requiring complex, scalable solutions for visitor management, desk booking, and facility operations.',
    url: 'https://onfra.io/bizo',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Bizo Enterprise Solution',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bizo | Advanced Enterprise Solutions for Workspace Management',
    description: 'Explore Bizo, Onfra’s advanced offering for large enterprises requiring complex, scalable solutions for visitor management, desk booking, and facility operations.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function BizoPage() {
  return (
    <>
      <Header />
      <SubPageTitle title="Bizo" />
      <main className="container">
        {/* Add page content here */}
      </main>
      <Footer />
    </>
  );
}
