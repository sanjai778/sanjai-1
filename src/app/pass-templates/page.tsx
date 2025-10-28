import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import FilterableGallery from '@/app/components/FilterableGallery';
import CtaSection from '@/app/components/sections/CtaSection';

const PassTemplatesPage = () => {
  return (
    <>
      <Header />
      <SubPageTitle title="Pass Templates" />
      <main className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FilterableGallery />
        </div>
      </main>
      <CtaSection />
      <Footer />
    </>
  );
};

export default PassTemplatesPage;
