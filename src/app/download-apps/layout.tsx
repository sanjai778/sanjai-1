import { Metadata } from 'next';
import DownloadAppsPage from './page';

export const metadata: Metadata = {
  title: 'Download Onfra Apps | Stay Connected on the Go',
  description: 'Download the Onfra mobile apps for iOS and Android. Manage visitor check-ins, book desks, and access your workplace features from anywhere.',
  alternates: {
    canonical: 'https://onfra.io/download-apps',
  },
  openGraph: {
    title: 'Download Onfra Apps | Stay Connected on the Go',
    description: 'Download the Onfra mobile apps for iOS and Android. Manage visitor check-ins, book desks, and access your workplace features from anywhere.',
    url: 'https://onfra.io/download-apps',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Mobile Apps',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download Onfra Apps | Stay Connected on the Go',
    description: 'Download the Onfra mobile apps for iOS and Android. Manage visitor check-ins, book desks, and access your workplace features from anywhere.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <DownloadAppsPage />;
}
