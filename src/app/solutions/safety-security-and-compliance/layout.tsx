import { Metadata } from 'next';
import SafetySecurityCompliancePage from './page';

export const metadata: Metadata = {
  title: 'Safety, Security & Compliance Solutions | Workplace Risk Management',
  description: 'Ensure a safe and compliant workplace with Onfra. Our solutions provide robust security protocols, emergency management, and real-time compliance tracking.',
  alternates: {
    canonical: 'https://onfra.io/solutions/safety-security-and-compliance',
  },
  openGraph: {
    title: 'Safety, Security & Compliance Solutions | Workplace Risk Management',
    description: 'Ensure a safe and compliant workplace with Onfra. Our solutions provide robust security protocols, emergency management, and real-time compliance tracking.',
    url: 'https://onfra.io/solutions/safety-security-and-compliance',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Safety & Compliance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safety, Security & Compliance Solutions | Workplace Risk Management',
    description: 'Ensure a safe and compliant workplace with Onfra. Our solutions provide robust security protocols, emergency management, and real-time compliance tracking.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <SafetySecurityCompliancePage />;
}
