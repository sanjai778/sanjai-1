import { Metadata } from 'next';
import GdprPolicyPage from './page';

export const metadata: Metadata = {
  title: 'GDPR Policy',
  description: 'Read about Onfra’s commitment to GDPR compliance and how we protect your personal data in accordance with European regulations.',
  alternates: {
    canonical: 'https://onfra.io/gdpr-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout() {
  return <GdprPolicyPage />;
}
