import { Metadata } from 'next';
import RoomsPage from './page';

export const metadata: Metadata = {
  title: 'Meeting Rooms & Space Booking System | Onfra',
  description: 'Optimize meetings and eliminate double-bookings with Onfra’s meeting rooms and space booking system. Enable real-time availability and conflict-free scheduling.',
  alternates: {
    canonical: 'https://onfra.io/platform/rooms',
  },
  openGraph: {
    title: 'Meeting Rooms & Space Booking System | Onfra',
    description: 'Optimize meetings and eliminate double-bookings with Onfra’s meeting rooms and space booking system. Enable real-time availability and conflict-free scheduling.',
    url: 'https://onfra.io/platform/rooms',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Room Booking',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meeting Rooms & Space Booking System | Onfra',
    description: 'Optimize meetings and eliminate double-bookings with Onfra’s meeting rooms and space booking system. Enable real-time availability and conflict-free scheduling.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

export default function Layout() {
  return <RoomsPage />;
}
