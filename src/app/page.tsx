import dynamic from 'next/dynamic';
import { Metadata } from 'next';

// Define SEO metadata
export const metadata: Metadata = {
  title: 'Onfra - Visitor Management, Desk Booking, and Facility Management Solutions',
  description: "Secure and streamline your workplace with Onfra's integrated solutions for visitor management, desk and meeting room booking, and smart facility management. Control, Secure, Measure & Optimize.",
  alternates: {
    canonical: 'https://onfra.io',
  },
  openGraph: {
    title: 'Onfra - Visitor Management, Desk Booking, and Facility Management Solutions',
    description: "Secure and streamline your workplace with Onfra's integrated solutions for visitor management, desk and meeting room booking, and smart facility management. Control, Secure, Measure & Optimize.",
    url: 'https://onfra.io',
    siteName: 'Onfra',
    images: [
      {
        url: '/assets/img/visitdesk_facebook.png',
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
    images: ['/assets/img/visitdesk_twitter.png'],
  },
};

// Import React components
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/sections/HeroSection';
import LogoMarquee from './components/sections/LogoMarquee';
import { generateWebSiteSchema } from './utils/schema';
import ProductsSection from './components/sections/ProductsSection';
import StatsSection from './components/sections/StatsSection';
import InfoSection from './components/sections/InfoSection';
import SecuritySection from './components/sections/SecuritySection';
// import SolutionsGrid from './components/sections/SolutionsGrid';
// import FaqSection from './components/sections/FaqSection';
// import EnterpriseCta from './components/sections/EnterpriseCta';
// import NewsletterModal from './components/sections/NewsletterModal';
// import BlogSwiperSection from './components/sections/BlogSwiperSection';

const SolutionsGrid = dynamic(() => import('./components/sections/SolutionsGrid'));
const FaqSection = dynamic(() => import('./components/sections/FaqSection'));
const EnterpriseCta = dynamic(() => import('./components/sections/EnterpriseCta'));
const NewsletterModal = dynamic(() => import('./components/sections/NewsletterModal'));
const BlogSwiperSection = dynamic(() => import('./components/sections/BlogSwiperSection'));



import './components/BlogSwiper/BlogSwiper.css';
import './workplace.css';
import TestimonialSectionServer from './components/sections/TestimonialSection.server';

export default function HomePage() {
  const webSiteSchema = generateWebSiteSchema({
    name: metadata.title as string,
    url: metadata.alternates?.canonical as string,
    searchUrl: 'https://onfra.io/blogs?search=',
  });
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <Header />
      
      <main>
        <HeroSection />
        <LogoMarquee />
        <ProductsSection />
        <StatsSection />
        
        <InfoSection
          tagline="Why Onfra?"
          title="Control & Secure"
          description="Secure and streamline your workplace with our comprehensive entry and access management system! From employee badges to delivery logs, track everyone - visitors, contractors, materials - in and out, effortlessly. Boost security, improve efficiency, and gain data-driven insights."
          imageUrl="/uploads/static-image/ControlSecure.webp"
          arrowImageUrl="/uploads/2025/06/arrow1.png"
          loading="lazy"
        />
        <InfoSection
          tagline="Why Onfra?"
          title="Measure & Optimize"
          description="Our data-driven solutions helps you measure space occupancy, maximize desk & meeting room utilization, and track assets. Boost employee productivity, improve collaboration, and gain real-time insights to create a dynamic, cost-effective workplace that works for you."
          imageUrl="/uploads/static-image/Messasure%20Optimize.webp"
          arrowImageUrl="/uploads/2025/06/arrow2.png"
          reversed={true}
          loading="lazy"
        />
        <InfoSection
          tagline="Why Onfra?"
          title="Inspect & Resolve"
          description="Our integrated smart facility management solution empowers you with digital checklists and issue ticketing for a seamless workflow. Resolve issues promptly, ensuring a safe, healthy, and secure environment for your workplace."
          imageUrl="/uploads/static-image/Inspect%20Resolve.webp"
          arrowImageUrl="/uploads/2025/06/arrow3.png"
          loading="lazy"
        />
        
        <SecuritySection />
        
        <TestimonialSectionServer />
        
        <SolutionsGrid />
        <FaqSection />
        <EnterpriseCta />
        <BlogSwiperSection />
        {/* <CtaSection /> */}
        

      </main>
      
      <Footer />
      
      <NewsletterModal />
    </>
  );
}
