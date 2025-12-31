import TestimonialSection from './TestimonialSection';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getTestimonials() {
  try {
    const testimonials = await prisma.testimonial.findMany();
    return testimonials;
  } catch (err) {
    console.error(err);
    return [];
  }
}

const TestimonialSectionServer = async () => {
  const testimonials = await getTestimonials();

  const testimonialSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": testimonials.map((testimonial, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": testimonial.name,
        },
        "reviewBody": testimonial.content,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialSchema) }}
      />
      <TestimonialSection testimonials={testimonials.filter((t) => t.img)} />
    </>
  );
};

export default TestimonialSectionServer;