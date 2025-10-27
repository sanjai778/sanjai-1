import { PrismaClient } from '@prisma/client';
import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import CountryList from './CountryList';
import CountryPageIntro from './CountryPageIntro';

const prisma = new PrismaClient();

type CountryInfo = { code: string; name: string; };

async function getAllCountries(): Promise<CountryInfo[]> {
  try {
    const allData = await prisma.countryWorkplaceData.findMany({
      select: { country_code: true, country_data: true }
    });
    const countries = allData.map(item => {
        try {
          const d = JSON.parse(item.country_data || '{}');
          return { code: item.country_code.toLowerCase(), name: d.name || null };
        } catch { return null; }
      })
      .filter((c): c is CountryInfo => c !== null && c.name !== null);
    countries.sort((a, b) => a.name.localeCompare(b.name));
    return countries;
  } catch (error) {
    console.error("Failed to fetch countries:", error);
    return [];
  }
}

export const metadata: Metadata = {
  title: 'Workplace Solutions | Explore by Country',
  description: 'Find the best workplace management solutions in your country.',
};

export default async function CountriesPage() {
  const countries = await getAllCountries();

  return (
    <>
      <Header />
      <main>
        <CountryPageIntro />
        <CountryList countries={countries} />
      </main>
      <Footer />
    </>
  );
}
