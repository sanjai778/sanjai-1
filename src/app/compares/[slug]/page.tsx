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
import TestimonialSectionServer from '@/app/components/sections/TestimonialSection.server';
import { generateWebPageSchema } from '@/app/utils/schema';
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const compare = await getCompare(slug);
  if (!compare) {
    return {
      title: "Compare not found",
    };
  }

  const description = compare.page_description || `Compare Onfra with ${compare.main_title}. See how our visitor management, desk booking, and facility management solutions stack up against the competition.`;

  return {
    title: `${compare.main_title} vs Onfra | Feature & Price Comparison`,
    description: description,
    alternates: {
      canonical: `https://onfra.io/compares/${compare.slug}`,
    },
    openGraph: {
      title: `${compare.main_title} vs Onfra | Feature & Price Comparison`,
      description: description,
      url: `https://onfra.io/compares/${compare.slug}`,
      siteName: 'Onfra',
      images: [
        {
          url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
          width: 1200,
          height: 630,
          alt: `Onfra vs ${compare.main_title} Comparison`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${compare.main_title} vs Onfra | Feature & Price Comparison`,
      description: description,
      images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
    },
  };
}

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const compare = await getCompare(slug);

  const comparePageSchema = generateWebPageSchema({
    title: compare?.main_title || "Software Comparison",
    description: compare?.page_description || "Detailed comparison of visitor management software.",
    url: compare ? `https://onfra.io/compares/${compare.slug}` : 'https://onfra.io/compares',
    type: "WebPage"
  });
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparePageSchema) }}
      />
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
      <TestimonialSectionServer />
      <CtaSection />
      <Footer />
    </>
  );
}
