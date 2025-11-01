import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import styles from './ComparePage.module.css';
import CompareHero from '@/app/components/CompareHero';
import PriceComparison from '@/app/components/PriceComparison';
import FeatureComparison from '@/app/components/FeatureComparison';
import { Metadata } from 'next';
import CtaSection from '@/app/components/sections/CtaSection';
import BackButton from '@/app/components/BackButton';
import FaqSection from '@/app/components/sections/FaqSection';
import TestimonialSection from '@/app/components/sections/TestimonialSection';
import { notFound } from 'next/navigation';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function generateStaticParams() {
  const compares = await prisma.compare.findMany({
    select: {
      slug: true,
    },
  });

  return compares
    .filter(compare => compare.slug)
    .map((compare) => ({
      slug: compare.slug!,
    }));
}

async function getCompare(slug: string) {
  try {
    const compareData = await prisma.compare.findUnique({
      where: { slug },
    });

    if (!compareData || !compareData.slug) {
      notFound();
      return null;
    }

    const compare = {
      ...compareData,
      slug: compareData.slug,
      img_url: compareData.img_url ? compareData.img_url.replace(/.*\/wp-content/, '') : '',
      main_title: compareData.main_title || '',
      page_description: compareData.page_description || '',
      // Coalesce other potentially null fields to prevent type errors
      Dynamic_Fields: compareData.Dynamic_Fields || '',
      Document_Sign: compareData.Document_Sign || '',
      Onfra_X_App_Access: compareData.Onfra_X_App_Access || '',
      Title: compareData.Title || '',
    };

    return compare;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const compare = await getCompare(params.slug);
  return {
    title: compare?.main_title,
  };
}

export default async function ComparePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const compare = await getCompare(slug);

  return (
    <>
      <Header />
      <main>
        {compare ? (
          <>
            <CompareHero competitorName={compare.main_title || ''} />
            <div className={styles.container}>
              <PriceComparison
                compare={compare}
                onfraPrice="₹2000"
              />
              <FeatureComparison compare={compare} />
              <BackButton />
            </div>
          </>
        ) : (
          <p>Compare not found.</p>
        )}
      </main>

    
        <FaqSection />
       <TestimonialSection />
        
   
      
              <CtaSection />
      <Footer />
    </>
  );
}
