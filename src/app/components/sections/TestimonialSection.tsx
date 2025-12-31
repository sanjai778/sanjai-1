"use client";

import TestimonialSlider from './TestimonialSlider';
import styles from './TestimonialSection.module.css';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  img: string | null;
}

const TestimonialSection: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => {

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
