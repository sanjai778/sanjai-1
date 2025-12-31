import { Metadata } from 'next';
import CancellationAndRefundPolicyPage from './page';

export const metadata: Metadata = {
  title: 'Cancellation and Refund Policy',
  description: 'Learn about Onfra’s cancellation and refund policy for our workplace management software services.',
  alternates: {
    canonical: 'https://onfra.io/cancellation-and-refund-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout() {
  return <CancellationAndRefundPolicyPage />;
}
