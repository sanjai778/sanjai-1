import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import CtaSection from '@/app/components/sections/CtaSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Onfra Community | Support, Collaboration, and Feedback',
  description: 'Connect with the Onfra user community to share knowledge, find support, provide feedback, and collaborate on best practices for workspace management solutions.',
  alternates: {
    canonical: 'https://onfra.io/community',
  },
  openGraph: {
    title: 'Onfra Community | Support, Collaboration, and Feedback',
    description: 'Connect with the Onfra user community to share knowledge, find support, provide feedback, and collaborate on best practices for workspace management solutions.',
    url: 'https://onfra.io/community',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Community',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onfra Community | Support, Collaboration, and Feedback',
    description: 'Connect with the Onfra user community to share knowledge, find support, provide feedback, and collaborate on best practices for workspace management solutions.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function CommunityPage() {
  return (
    <>
      <Header />
      <SubPageTitle title="Community" />
      <main className="container">
        {/* Add page content here */}
      </main>
      <CtaSection />
      <Footer />
    </>
  );
}
