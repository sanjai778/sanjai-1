'use client';
import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import CtaSection from '@/app/components/sections/CtaSection';
import FaqAccordion from '@/app/components/FaqAccordion';

const FaqPage = () => {
  return (
    <>
      <Header />
      <SubPageTitle title="Frequently Asked Questions" />
      <FaqAccordion />
      <CtaSection />
      <Footer />
    </>
  );
};

export default FaqPage;
