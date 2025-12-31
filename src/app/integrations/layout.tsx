import { Metadata } from 'next';
import IntegrationsPage from './page';

export const metadata: Metadata = {
  title: 'Workspace Integrations | Connect Onfra with Your Tools',
  description: 'Seamlessly connect Onfra with your favorite workplace tools. Integrate with Google Workspace, WhatsApp, Slack, Microsoft Teams, and more to boost productivity.',
  alternates: {
    canonical: 'https://onfra.io/integrations',
  },
  openGraph: {
    title: 'Workspace Integrations | Connect Onfra with Your Tools',
    description: 'Seamlessly connect Onfra with your favorite workplace tools. Integrate with Google Workspace, WhatsApp, Slack, Microsoft Teams, and more to boost productivity.',
    url: 'https://onfra.io/integrations',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Integrations',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workspace Integrations | Connect Onfra with Your Tools',
    description: 'Seamlessly connect Onfra with your favorite workplace tools. Integrate with Google Workspace, WhatsApp, Slack, Microsoft Teams, and more to boost productivity.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <IntegrationsPage />;
}
