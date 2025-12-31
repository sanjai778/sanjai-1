import { Metadata } from 'next';
import CentralizeWorkplaceManagementPage from './page';

export const metadata: Metadata = {
  title: 'Centralize Workplace Management Solutions | Onfra',
  description: 'Unify your office operations with Onfra’s centralized workplace management platform. Streamline space allocation, resource management, and employee onboarding.',
  alternates: {
    canonical: 'https://onfra.io/solutions/centralize-workplace-management',
  },
  openGraph: {
    title: 'Centralize Workplace Management Solutions | Onfra',
    description: 'Unify your office operations with Onfra’s centralized workplace management platform. Streamline space allocation, resource management, and employee onboarding.',
    url: 'https://onfra.io/solutions/centralize-workplace-management',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Centralized Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centralize Workplace Management Solutions | Onfra',
    description: 'Unify your office operations with Onfra’s centralized workplace management platform. Streamline space allocation, resource management, and employee onboarding.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <CentralizeWorkplaceManagementPage />;
}
