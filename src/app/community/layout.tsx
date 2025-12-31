import { Metadata } from 'next';
import CommunityPage from './page';

export const metadata: Metadata = {
  title: 'Onfra Community | Join the Workspace Innovation Network',
  description: 'Join the Onfra community to connect with experts, share insights, and stay updated on the latest trends in visitor management, desk booking, and facility management.',
  alternates: {
    canonical: 'https://onfra.io/community',
  },
  openGraph: {
    title: 'Onfra Community | Join the Workspace Innovation Network',
    description: 'Join the Onfra community to connect with experts, share insights, and stay updated on the latest trends in visitor management, desk booking, and facility management.',
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
    title: 'Onfra Community | Join the Workspace Innovation Network',
    description: 'Join the Onfra community to connect with experts, share insights, and stay updated on the latest trends in visitor management, desk booking, and facility management.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <CommunityPage />;
}
