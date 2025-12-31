import { Metadata } from 'next';
import EmployeesPage from './page';

export const metadata: Metadata = {
  title: 'Attendance & Time Tracking System | Onfra',
  description: 'Simplify employee time management with Onfra’s attendance and time tracking system. Automate check-ins, track working hours, and generate real-time reports.',
  alternates: {
    canonical: 'https://onfra.io/platform/employees',
  },
  openGraph: {
    title: 'Attendance & Time Tracking System | Onfra',
    description: 'Simplify employee time management with Onfra’s attendance and time tracking system. Automate check-ins, track working hours, and generate real-time reports.',
    url: 'https://onfra.io/platform/employees',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Attendance Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Attendance & Time Tracking System | Onfra',
    description: 'Simplify employee time management with Onfra’s attendance and time tracking system. Automate check-ins, track working hours, and generate real-time reports.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <EmployeesPage />;
}
