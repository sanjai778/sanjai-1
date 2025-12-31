import { Metadata } from 'next';
import PrivacyPolicyPage from './page';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read Onfra’s privacy policy to understand how we collect, use, and protect your personal information and data.',
  alternates: {
    canonical: 'https://onfra.io/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Onfra',
    description: 'Read Onfra’s privacy policy to understand how we collect, use, and protect your personal information and data.',
    url: 'https://onfra.io/privacy-policy',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Privacy Policy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Onfra',
    description: 'Read Onfra’s privacy policy to understand how we collect, use, and protect your personal information and data.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout() {
  return <PrivacyPolicyPage />;
}
