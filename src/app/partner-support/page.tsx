'use client';
import { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import CtaSection from '../components/sections/CtaSection';

export default function PartnerSupport() {
  const [businessCode, setBusinessCode] = useState('');
  const [registeredEmail, setRegisteredEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [query, setQuery] = useState('');
  const [errorBusinessCode, setErrorBusinessCode] = useState('');
  const [errorRegisteredEmail, setErrorRegisteredEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let hasError = false;
    if (!businessCode) {
      setErrorBusinessCode('Business code is required');
      hasError = true;
    } else {
      setErrorBusinessCode('');
    }
    if (!registeredEmail) {
      setErrorRegisteredEmail('Registered email is required');
      hasError = true;
    } else {
      setErrorRegisteredEmail('');
    }

    if (hasError) {
      return;
    }

    setIsSubmitting(true);

    const response = await fetch('/api/partner-support', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        check_Business_Code: businessCode,
        check_registered_email_id: registeredEmail,
        check_partner_phone_number: phoneNumber,
        partner_query: query,
      }),
    });

    const data = await response.json();
    setIsSubmitting(false);

    if (data.status === 'success') {
      setShowSuccess(true);
    } else {
      // Handle error
      console.error(data.message);
    }
  };

  if (showSuccess) {
    return (
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Thank you!</h2>
        <p className="text-gray-600 mt-2">Your query has been submitted successfully.</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <SubPageTitle title="Partner Support" />
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <form id="checkpartnerform">
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                    name="check_Business_Code"
                    placeholder="Business Code"
                    value={businessCode}
                    onChange={(e) => setBusinessCode(e.target.value)}
                  />
                  <p className="text-red-500 text-xs pl-4 mt-1">
                    {errorBusinessCode}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                      name="check_registered_email-id"
                      placeholder="Registered Email-id"
                      value={registeredEmail}
                      onChange={(e) => setRegisteredEmail(e.target.value)}
                    />
                    <p className="text-red-500 text-xs pl-4 mt-1">
                      {errorRegisteredEmail}
                    </p>
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                      name="check_partner_phone_number"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                    name="partner_query"
                    rows={5}
                    placeholder="Partner Query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="button"
                    className="w-full btn btn-primary"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
            <div className="text-gray-700">
              <div className="mb-6">
                <h6 className="font-semibold text-lg">Contact:</h6>
                <p>
                  <strong>India:</strong> +91 98848 99868
                </p>
                <p>
                  <strong>US:</strong> +1 650 488 7744
                </p>
              </div>
              <div className="mb-6">
                <h6 className="font-semibold text-lg">For More Information:</h6>
                <p>
                  <strong>Email:</strong> hello@visitdesk.io
                </p>
              </div>
              <div className="mb-6">
                <h6 className="font-semibold text-lg">Registered Office:</h6>
                <p>
                  <strong>IFELSE TECHSMART SOLUTIONS PVT LTD.</strong> <br /> 16/4, Salai Street, Choolai, Chennai, TN,
                  India 600112
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
      <Footer />
    </>
  );
}
