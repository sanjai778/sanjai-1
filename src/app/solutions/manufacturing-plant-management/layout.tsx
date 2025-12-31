import { Metadata } from 'next';
import ManufacturingPlantManagementPage from './page';

export const metadata: Metadata = {
  title: 'Manufacturing Plant Management Solutions | Industrial Facility Tech',
  description: 'Optimize your manufacturing plant operations with Onfra. Streamline material movement, visitor access, and employee attendance for industrial facilities.',
  alternates: {
    canonical: 'https://onfra.io/solutions/manufacturing-plant-management',
  },
  openGraph: {
    title: 'Manufacturing Plant Management Solutions | Industrial Facility Tech',
    description: 'Optimize your manufacturing plant operations with Onfra. Streamline material movement, visitor access, and employee attendance for industrial facilities.',
    url: 'https://onfra.io/solutions/manufacturing-plant-management',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Manufacturing Plant Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manufacturing Plant Management Solutions | Industrial Facility Tech',
    description: 'Optimize your manufacturing plant operations with Onfra. Streamline material movement, visitor access, and employee attendance for industrial facilities.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <ManufacturingPlantManagementPage />;
}
