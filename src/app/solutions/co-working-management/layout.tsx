import { Metadata } from 'next';
import CoworkingManagementPage from './page';

export const metadata: Metadata = {
  title: 'Co-working Management Solutions | Onfra',
  description: 'Streamline your co-working space operations with Onfra’s management solutions. Enable easy desk booking, visitor access, and automated billing for flexible workspaces.',
  alternates: {
    canonical: 'https://onfra.io/solutions/co-working-management',
  },
  openGraph: {
    title: 'Co-working Management Solutions | Onfra',
    description: 'Streamline your co-working space operations with Onfra’s management solutions. Enable easy desk booking, visitor access, and automated billing for flexible workspaces.',
    url: 'https://onfra.io/solutions/co-working-management',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Co-working Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Co-working Management Solutions | Onfra',
    description: 'Streamline your co-working space operations with Onfra’s management solutions. Enable easy desk booking, visitor access, and automated billing for flexible workspaces.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <CoworkingManagementPage />;
}
