import { Metadata } from 'next';
import MaterialPassPage from './page';

export const metadata: Metadata = {
  title: 'Digital Material Gate Pass Management | Onfra',
  description: 'Streamline material movement with Onfra’s digital gate pass system. Automate approvals, track returnable items, and ensure compliance for your facility.',
  alternates: {
    canonical: 'https://onfra.io/platform/material-pass',
  },
  openGraph: {
    title: 'Digital Material Gate Pass Management | Onfra',
    description: 'Streamline material movement with Onfra’s digital gate pass system. Automate approvals, track returnable items, and ensure compliance for your facility.',
    url: 'https://onfra.io/platform/material-pass',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Material Pass Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Material Gate Pass Management | Onfra',
    description: 'Streamline material movement with Onfra’s digital gate pass system. Automate approvals, track returnable items, and ensure compliance for your facility.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <MaterialPassPage />;
}
