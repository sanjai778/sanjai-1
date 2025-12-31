import type { Metadata } from "next";
import "./globals.css";
import "./icons.css";
import OrganizationSchema from './components/OrganizationSchema';

export const metadata: Metadata = {
  metadataBase: new URL("https://onfra.io"),
  title: {
    default: "Onfra - Visitor Management, Desk Booking, and Facility Management Solutions",
    template: "%s | Onfra",
  },
  description: "Secure and streamline your workplace with Onfra's integrated solutions for visitor management, desk and meeting room booking, and smart facility management. Control, Secure, Measure & Optimize.",
  openGraph: {
    title: 'Onfra - Visitor Management, Desk Booking, and Facility Management Solutions',
    description: "Secure and streamline your workplace with Onfra's integrated solutions for visitor management, desk and meeting room booking, and smart facility management. Control, Secure, Measure & Optimize.",
    url: 'https://onfra.io',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/wp-content/uploads/2024/05/hero-scaled.webp',
        width: 1200,
        height: 630,
        alt: 'Onfra - Integrated Workplace Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onfra - Visitor Management, Desk Booking, and Facility Management Solutions',
    description: "Secure and streamline your workplace with Onfra's integrated solutions for visitor management, desk and meeting room booking, and smart facility management. Control, Secure, Measure & Optimize.",
    images: ['https://onfra.io/wp-content/uploads/2024/05/hero-scaled.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <OrganizationSchema />
        <main>{children}</main>
      </body>
    </html>
  );
}
