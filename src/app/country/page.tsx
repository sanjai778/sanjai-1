import { PrismaClient } from '@prisma/client';
import { Metadata } from 'next';
import { generateWebPageSchema } from '@/app/utils/schema';
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
  description: 'Find the best workplace management solutions in your country. Discover country-specific data and insights for hybrid workplace optimization with Onfra.',
  alternates: {
    canonical: 'https://onfra.io/country',
  },
  openGraph: {
    title: 'Workplace Solutions | Explore by Country',
    description: 'Find the best workplace management solutions in your country. Discover country-specific data and insights for hybrid workplace optimization with Onfra.',
    url: 'https://onfra.io/country',
    siteName: 'Onfra',
    images: [
      {
        url: '/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Country Data',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workplace Solutions | Explore by Country',
    description: 'Find the best workplace management solutions in your country. Discover country-specific data and insights for hybrid workplace optimization with Onfra.',
    images: ['ht.onfra.io/assets/img/visitdesk_twitter.png'],
  },
};

export default async function CountriesPage() {
  const countries = await getAllCountries();
  
  const countrySchema = generateWebPageSchema({
    title: metadata.title as string,
    description: metadata.description as string,
    url: metadata.alternates?.canonical as string,
    type: "CollectionPage"
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(countrySchema) }}
      />
      <Header />
      <main>
        <CountryPageIntro />
        <CountryList countries={countries} />
      </main>
      <Footer />
    </>
  );
}
