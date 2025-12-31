"use client";

import { useState, useEffect } from 'react';
import TestimonialSlider from './TestimonialSlider';
import styles from './TestimonialSection.module.css';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  img: string | null;
}

const TestimonialSectionClient: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const response = await fetch('/api/testimonials');
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        const data = await response.json();
        setTestimonials(data.filter((t: Testimonial) => t.img));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchTestimonials();
  }, []);

  if (loading) {
    return <div>Loading testimonials...</div>;
  }

  return (
    <section className={styles.testimonialSection}>
      <div className="container">
        <div className="section_header">
          <h2 className="section_tagline">Testimonials</h2>
          <h3 className="section_title">Hear from our satisfied clients</h3>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialSectionClient;