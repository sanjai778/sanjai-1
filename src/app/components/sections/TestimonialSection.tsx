"use client";

import { useState, useEffect } from 'react';
import TestimonialSlider from './TestimonialSlider';
import styles from './TestimonialSection.module.css';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  img: string;
}

const TestimonialSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('/api/testimonials');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        // Ensure that the data is an array before setting the state
        if (Array.isArray(data)) {
          setTestimonials(data);
        } else if (data && Array.isArray(data.testimonials)) {
          // Handle cases where the array is nested under a 'testimonials' key
          setTestimonials(data.testimonials);
        } else {
          console.error('Fetched data is not an array:', data);
          setTestimonials([]); // Set to empty array if data is not as expected
        }
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
        setTestimonials([]); // Set to empty array on error
      }
    };

    fetchTestimonials();
  }, []);

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

export default TestimonialSection;
