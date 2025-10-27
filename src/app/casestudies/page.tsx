import Header from '../components/Header';
import Footer from '../components/Footer';
import CaseStudyList from '../components/CaseStudyList';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface CaseStudy {
  id: number;
  slug: string | null;
  Company_Image_url: string | null;
  Card_Title: string | null;
  Card_Description: string | null;
  Industry?: string | null;
  Product?: string | null;
}

async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const caseStudies = await prisma.caseStudy.findMany();
    return caseStudies.map((cs: CaseStudy) => ({
      id: cs.id,
      slug: cs.slug,
      Company_Image_url: cs.Company_Image_url ? cs.Company_Image_url.replace(/.*\/wp-content/, '') : null,
      Card_Title: cs.Card_Title,
      Card_Description: cs.Card_Description,
      Industry: cs.Industry,
      Product: cs.Product,
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function getIndustries(): Promise<string[]> {
  try {
    const industries = await prisma.caseStudy.findMany({
      select: {
        Industry: true,
      },
      distinct: ['Industry'],
    });
    return industries.map(i => i.Industry).filter((i): i is string => i !== null);
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function getProducts(): Promise<string[]> {
  try {
    const products = await prisma.caseStudy.findMany({
      select: {
        Product: true,
      },
      distinct: ['Product'],
    });
    return products.map(p => p.Product).filter((p): p is string => p !== null);
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default async function CaseStudiesPage() {
  const initialCaseStudies = await getCaseStudies();
  const industries = await getIndustries();
  const products = await getProducts();

  return (
    <>
      <Header />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
        <CaseStudyList initialCaseStudies={initialCaseStudies} industries={industries} products={products} />
      </main>
      <Footer />
    </>
  );
}
