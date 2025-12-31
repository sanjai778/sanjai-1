import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import CtaSection from '@/app/components/sections/CtaSection';
import { Metadata } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const metadata: Metadata = {
  title: 'Customer Testimonials | Real-World Success Stories',
  description: 'Read real-world testimonials and success stories from businesses that have transformed their hybrid workplaces using Onfra’s innovative platform.',
  alternates: {
    canonical: 'https://onfra.io/testimonials',
  },
  openGraph: {
    title: 'Customer Testimonials | Real-World Success Stories',
    description: 'Read real-world testimonials and success stories from businesses that have transformed their hybrid workplaces using Onfra’s innovative platform.',
    url: 'https://onfra.io/testimonials',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Testimonials',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customer Testimonials | Real-World Success Stories',
    description: 'Read real-world testimonials and success stories from businesses that have transformed their hybrid workplaces using Onfra’s innovative platform.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};

async function getTestimonials() {
  try {
    const testimonials = await prisma.testimonial.findMany();
    return testimonials;
  } catch (err) {
    console.error(err);
    return [];
  }
}

const TestimonialsPage = async () => {
  const testimonials = await getTestimonials();

  const testimonialSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": testimonials.map((testimonial, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Review",
        "name": testimonial.Title || `Testimonial from ${testimonial.name}`,
        "reviewBody": testimonial.content,
        "author": {
          "@type": "Person",
          "name": testimonial.name,
        },
        "itemReviewed": {
          "@type": "Organization",
          "name": "Onfra",
          "url": "https://onfra.io"
        },
        "reviewRating": {
          "@type": "Rating",
          // Assuming all testimonials are positive (5/5), as no rating data exists
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
    })),
  };

  return (
    <>
      <Header />
      <SubPageTitle title="Testimonials" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialSchema) }}
      />
      <main className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                What Our Customers Are Saying
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                We pride ourselves on providing the best service. Here is what our customers have to say.
              </p>
            </div>
            <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md flex flex-col">
                  <div className="flex-grow">
                    {testimonial.img && <Image src={testimonial.img} alt={testimonial.name} width={96} height={96} className="w-24 h-24 rounded-full mx-auto mb-4" />}
                    <p className="text-gray-600">"{testimonial.content}"</p>
                  </div>
                  <div className="mt-4">
                    <p className="font-bold text-gray-900 text-center">- {testimonial.name}</p>
                    <p className="text-sm text-gray-500 text-center">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <CtaSection />
      <Footer />
    </>
  );
};

export default TestimonialsPage;
