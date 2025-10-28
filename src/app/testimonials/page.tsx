'use client';
import React, { useState, useEffect } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import CtaSection from '@/app/components/sections/CtaSection';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  img?: string;
  Title?: string;
}

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials');
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <>
      <Header />
      <SubPageTitle title="Testimonials" />
      <main className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                What Our Customers Are Saying
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                We pride ourselves on providing the best service. Here is what our customers have to say.
              </p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md flex flex-col">
                  <div className="flex-grow">
                    {testimonial.img && <img src={testimonial.img} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />}
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
