// app/contact/page.js
'use client';

import { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { generateWebPageSchema } from '@/app/utils/schema';
import CtaSection from '../components/sections/CtaSection';
import Image from 'next/image';
import styles from './contact.module.css';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formName: 'Contact Us',
          formId: '1002',
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setError('Failed to submit the form. Please try again.');
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactSchema = generateWebPageSchema({
    title: 'Contact Us | Get In Touch with Onfra',
    description: 'Have questions about visitor management, desk booking, or facility management? Contact the Onfra support and sales teams today.',
    url: 'https://onfra.io/contact-us',
    type: "ContactPage"
  });

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <main>
        {/* Section 1: Green Banner - Exact match with reference */}
        <div className={styles.contactBanner}>
          <div className="container">
            <h1>Contact Us</h1>
          </div>
        </div>

        {/* Section 2: Contact Form and Illustration */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Side: Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center md:text-left mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{`Have a query? Let's talk.`}</h2>
                  <p className="text-gray-600">Whether you need help using the tool, want more information about our plans or anything else – our support team would love to assist you.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {success && <p className="text-green-500">Form submitted successfully!</p>}
                  {error && <p className="text-red-500">{error}</p>}
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input 
                        type="email" 
                        name="email"
                        placeholder="Email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="Phone number" 
                        className={styles.formInput} 
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <textarea 
                      name="message"
                      placeholder="Message" 
                      className={`${styles.formInput} ${styles.textarea}`} 
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              </div>

              {/* Right Side: Illustration */}
              <div className={styles.illustrationContainer}>
                <Image 
                  src="/uploads/2024/05/location-1.webp" 
                  alt="Contact illustration" 
                  width={800} 
                  height={800}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Contact Details - Exact match with reference */}
        <section className={styles.contactDetailsSection}>
          <div className="container">
            <div className={styles.contactDetailsGrid}>
              {/* Address */}
              <div className={styles.contactDetailItem}>
                <div className={styles.contactIcon}>
                    <Image className="info-icon-list" src="/uploads/svg_image/location.svg" alt="location icon" width={24} height={24} />
                </div>
                <div className={styles.contactText}>
                    <h4>Address:</h4>
                    <p><strong>ONFRA PROPTECH SOLUTIONS PRIVATE LIMITED</strong> <br />16/4, Salai Street, Vepery, Chennai, Tamil Nadu, India, 600007.</p>
                </div>
              </div>

              {/* Phone */}
              <div className={styles.contactDetailItem}>
                <div className={styles.contactIcon}>
                    <Image className="info-icon-list" src="/uploads/svg_image/phone.svg" alt="phone icon" width={24} height={24} />
                </div>
                <div className={styles.contactText}>
                    <h4>Phone:</h4>
                    <p><strong>India:</strong> <a href="tel:+919884899868" className="f_400" style={{color: '#000'}}>+91 98848 99868</a></p>
                </div>
              </div>

              {/* Email */}
              <div className={styles.contactDetailItem}>
                <div className={styles.contactIcon}>
                    <Image className="info-icon-list" src="/uploads/svg_image/email.svg" alt="email icon" width={24} height={24} />
                </div>
                <div className={styles.contactText}>
                    <h4>Email:</h4>
                    <p><a href="mailto:support@onfra.io" className="f_400" style={{color: '#000'}}>support@onfra.io</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <CtaSection />
      <Footer />
    </>
  );
}
