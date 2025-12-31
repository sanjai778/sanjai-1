import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import TestimonialSectionClient from '@/app/components/sections/TestimonialSectionClient';
import CtaSection from '../components/sections/CtaSection';
import CompareList from '@/app/components/CompareList';
import { generateWebPageSchema } from '@/app/utils/schema';
import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';
import { Compare } from '@/app/types';

export const metadata: Metadata = {
  title: 'Software Comparisons | Onfra',
  description: 'Compare leading software solutions with Onfra to find the best fit for your workplace management needs.',
  alternates: {
    canonical: 'https://onfra.io/compares',
  },
  openGraph: {
    title: 'Software Comparisons | Onfra',
    description: 'Compare leading software solutions with Onfra to find the best fit for your workplace management needs.',
    url: 'https://onfra.io/compares',
    siteName: 'Onfra',
    locale: 'en_US',
    type: 'website',
  },
};

async function getInitialCompares() {
    try {
        const limit = 12;
        const where = {
            AND: [
                { main_title: { not: 'title' } },
                { main_title: { not: 'onfra' } }
            ]
        };
        
        const [compares, total] = await Promise.all([
            prisma.compare.findMany({
                where,
                take: limit,
            }),
            prisma.compare.count({ where })
        ]);

        const mappedCompares: Compare[] = compares.map(c => ({
            id: c.id,
            slug: c.slug || '',
            img_url: c.img_url || '',
            main_title: c.main_title || '',
            page_description: c.page_description || ''
        }));
        
        return { compares: mappedCompares, total };
    } catch (err) {
        console.error(err);
        return { compares: [], total: 0 };
    }
}

export default async function ComparesPage() {
    const { compares, total } = await getInitialCompares();

    const compareSchema = generateWebPageSchema({
        title: 'Software Comparisons',
        description: 'Compare leading software...',
        url: 'https://onfra.io/compares',
        type: "CollectionPage"
    });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(compareSchema) }}
            />
            <Header />
            <CompareList 
                initialCompares={compares} 
                initialTotal={total}
                initialPage={1}
            />
            <TestimonialSectionClient />
            <CtaSection />
            <Footer />
        </>
    );
}
