import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import CtaSection from '@/app/components/sections/CtaSection';
import FaqAccordion from '@/app/components/FaqAccordion';
import { Metadata } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | Onfra Support',
  description: 'Find quick answers to common questions about Onfra’s visitor management, desk booking, and facility management platform.',
  alternates: {
    canonical: 'https://onfra.io/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions (FAQ) | Onfra Support',
    description: 'Find quick answers to common questions about Onfra’s visitor management, desk booking, and facility management platform.',
    url: 'https://onfra.io/faq',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra FAQ',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions (FAQ) | Onfra Support',
    description: 'Find quick answers to common questions about Onfra’s visitor management, desk booking, and facility management platform.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

// Utility function to strip HTML tags for schema purposes
function stripHtmlTags(html: string): string {
  // Use a regex based approach suitable for the server environment
  return html.replace(/<[^>]*>/g, '');
}

async function getFaqs() {
  try {
    const faqs = await prisma.faq.findMany();
    return faqs;
  } catch (err) {
    console.error(err);
    return [];
  }
}

const FaqPage = async () => {
  const faqs = await getFaqs();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.Question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": stripHtmlTags(faq.Answer),
      },
    })),
  };

  return (
    <>
      <Header />
      <SubPageTitle title="Frequently Asked Questions" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqAccordion faqs={faqs} />
      <CtaSection />
      <Footer />
    </>
  );
};

export default FaqPage;
