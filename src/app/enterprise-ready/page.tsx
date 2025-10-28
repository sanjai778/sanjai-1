import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import CtaSection from '@/app/components/sections/CtaSection';

const EnterpriseReadyPage = () => {
  return (
    <>
      <Header />
      <SubPageTitle title="Enterprise Ready" />
      <main>
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                  Welcome to Onfra
                  <span className="block text-green-500">Your Data-Driven Workplace Solution</span>
                </h1>
                <p className="mt-6 text-xl text-gray-500">
                  At Onfra, we pride ourselves on offering a comprehensive data-driven SaaS platform designed to revolutionize your workplace experience. Acting as a seamless bridge between people, spaces, things, and insights, our platform is tailored to enhance workplace efficiency and sustainability while prioritizing your company's health, security, and compliance objectives.
                </p>
                <div className="mt-8 flex space-x-4">
                  <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600">
                    Signup For Free!
                  </a>
                  <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-500 bg-green-100 hover:bg-green-200">
                    Talk to Us
                  </a>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-gray-500">
                    <span className="inline-block mr-4"><i className="fas fa-check-circle text-green-500 mr-2"></i>No Credit Card Required</span>
                    <span><i className="fas fa-check-circle text-green-500 mr-2"></i>7days Subscription Free</span>
                  </p>
                </div>
              </div>
              <div>
                <img src="https://onfra.io/wp-content/uploads/svg_image/Enterprise.svg" alt="Enterprise" className="max-w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img src="https://onfra.io/wp-content/uploads/svg_image/Your%20Data-Driven%20Workplace%20Solution.svg" alt="Data-Driven Workplace Solution" className="max-w-full h-auto" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Interested in our Enterprise Suite? Here's what you can expect:
                </h2>
                <ol className="mt-6 list-decimal list-inside text-lg text-gray-500 space-y-4">
                  <li><strong>Specialized Onboarding Experience:</strong> Our dedicated team ensures a smooth transition, tailored to your specific requirements.</li>
                  <li><strong>Priority Customer Support:</strong> Experience top-notch support whenever you need it, with priority given to enterprise clients.</li>
                  <li><strong>Custom Domain and White Label Solution:</strong> Maintain your brand identity with a personalized domain and white-label solution.</li>
                  <li><strong>Comprehensive Help Guides:</strong> Access a wealth of resources and guides to maximize the potential of our platform.</li>
                  <li><strong>Hosted in Your Home Country:</strong> Enjoy peace of mind knowing your data is hosted locally, ensuring compliance with local regulations.</li>
                  <li><strong>Dedicated Server:</strong> Opt for a dedicated server option for enhanced security and performance.</li>
                  <li><strong>Compliance with Data Protection Policies:</strong> Rest assured that our platform complies with the most stringent data protection policies.</li>
                  <li><strong>Seamless User Experience:</strong> Benefit from a seamless user experience with localization options to suit your global workforce.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CtaSection />
      <Footer />
    </>
  );
};

export default EnterpriseReadyPage;
