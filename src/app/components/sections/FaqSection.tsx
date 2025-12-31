import FaqAccordion from '../FaqAccordion';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Utility function to strip HTML tags for schema purposes
function stripHtmlTags(html: string): string {
  if (typeof window !== 'undefined') {
    // Client-side environment (should not happen in Server Component, but safe)
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  }
  // Server-side environment
  return html.replace(/<[^>]*>/g, '');
}

// Interface to match the expected format for FaqAccordion
interface Faq {
  Question: string;
  Answer: string;
}

async function getFaqs(limit: number): Promise<Faq[]> {
  try {
    const faqs = await prisma.faq.findMany({
      take: limit,
      orderBy: {
        order: 'asc'
      },
      select: { Question: true, Answer: true }
    });
    return faqs.map(faq => ({
      Question: faq.Question,
      Answer: faq.Answer,
    }));
  } catch (err) {
    console.error("Failed to fetch FAQs for home page section:", err);
    return [];
  }
}

// Convert to async Server Component
const FaqSection = async () => {
  const limit = 4;
  const faqs = await getFaqs(limit);
  
  if (faqs.length === 0) {
    return null;
  }

  // Generate FAQPage schema
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Pass the fetched FAQs to the client component FaqAccordion */}
      <FaqAccordion faqs={faqs} />
    </>
  );
};

export default FaqSection;
