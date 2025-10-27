import { PrismaClient, CountryWorkplaceData } from '@prisma/client';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import CountryList from '../CountryList';
import styles from './Country.module.css';

const prisma = new PrismaClient();

type CountryInfo = { code: string; name: string; };

interface CountryData {
  name: string;
  paragraphs: string[];
}

interface MarketData {
  name: string;
  market_trends: Record<string, string>;
  key_players: Record<string, string[]>;
  competitors: Record<string, string[]>;
}

async function getCountryData(code: string): Promise<(CountryWorkplaceData & { country_data: CountryData; country_market_data: MarketData }) | null> {
  try {
    const country = await prisma.countryWorkplaceData.findUnique({ where: { country_code: code.toUpperCase() } });
    if (!country) return null;
    return { ...country, country_data: JSON.parse(country.country_data || '{}'), country_market_data: JSON.parse(country.country_market_data || '{}') };
  } catch (err) { console.error(`Failed to fetch data for ${code}:`, err); return null; }
}

async function getAllCountries(): Promise<CountryInfo[]> {
  try {
    const allData = await prisma.countryWorkplaceData.findMany({ select: { country_code: true, country_data: true } });
    const countries = allData.map(item => { try { const d = JSON.parse(item.country_data || '{}'); return { code: item.country_code.toLowerCase(), name: d.name || null }; } catch { return null; } }).filter((c): c is CountryInfo => c !== null && c.name !== null);
    countries.sort((a, b) => a.name.localeCompare(b.name));
    return countries;
  } catch (error) { console.error("Failed to fetch all countries:", error); return []; }
}

export async function generateMetadata({ params }: { params: { code: string } }): Promise<Metadata> {
  const countryData = await getCountryData(params.code);
  const countryName = countryData?.country_data?.name || 'Workplace Solutions';
  return { title: `Best Workplace Management Solutions in ${countryName}` };
}

export default async function CountryPage({ params }: { params: { code: string } }) {
  const { code } = params;
  const [countryData, allCountries] = await Promise.all([ getCountryData(code), getAllCountries() ]);

  if (!countryData || !countryData.country_data.name) { notFound(); }

  const { name: countryName, paragraphs } = countryData.country_data;
  const marketData = countryData.country_market_data;
  const formatTitle = (text: string) => text.replace(/_/g, ' ');

  return (
    <>
      <Header />
      <main>
        <section className={styles.hero_section}>
          <div className="container">
            <div className={styles.hero_content}>
              <div className={styles.hero_left}>
                <h1 className={styles.hero_title}>Best Workplace Management Solutions in {countryName}</h1>
                <p className={styles.hero_subtitle}>{paragraphs?.[0]}</p>
                <div className={styles.button_group}>
                  <Link href="/book-demo" className="btn btn-primary">Book Demo</Link>
                  <Link href="/contact-sales" className="btn btn-outline-primary">Talk to Expert</Link>
                </div>
                <div className={styles.check_items}>
                  <span className={styles.check_item}><Image src="/uploads/svg_image/check-circle 1.svg" width={16} height={16} alt="Check"/>Free 14-day Demo</span>
                  <span className={styles.check_item}><Image src="/uploads/svg_image/check-circle 1.svg" width={16} height={16} alt="Check"/>No credit card needed</span>
                  <span className={styles.check_item}><Image src="/uploads/svg_image/check-circle 1.svg" width={16} height={16} alt="Check"/>Quick Setup</span>
                </div>
              </div>
              <div className={styles.hero_right}>
                <Image src="/uploads/svg_image/country_image.svg" alt={`${countryName} solutions`} width={500} height={350} priority />
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <section className={styles.section}>
            <div className={styles.solutions_grid}>
              <div className={styles.solution_card}>
                <h3 className={styles.card_title}>Digital Transformation in {countryName}</h3>
                <p>{paragraphs?.[1]}</p>
              </div>
              <div className={styles.solution_card}>
                <h3 className={styles.card_title}>Adoption of Smart Workspace Tech</h3>
                <p>{paragraphs?.[2]}</p>
              </div>
            </div>
          </section>

          {marketData && marketData.name ? (
            <section className={styles.section}>
              <div className="section_header"><h2 className="section_title">{marketData.name} Market Overview</h2></div>
              {marketData.market_trends && (
                <div className={styles.market_trends}><h3 className={styles.section_subtitle}>Market Trends</h3><div className={styles.trends_grid}>{Object.entries(marketData.market_trends).map(([trend, description]) => (<div key={trend} className={styles.trend_card}><h4>{formatTitle(trend)}</h4><p>{(description as string)}</p></div>))}</div></div>
              )}
              {marketData.key_players && (
                <div><h3 className={styles.section_subtitle}>Key Players</h3><div className={styles.category_grid}>{Object.entries(marketData.key_players).map(([cat, players]) => (<div key={cat} className={styles.category_card}><h4>{formatTitle(cat)}</h4><ul>{(players as string[]).map(p => <li key={p}>{p}</li>)}</ul></div>))}</div></div>
              )}
              {marketData.competitors && (
                <div><h3 className={styles.section_subtitle}>Competitors</h3><div className={styles.category_grid}>{Object.entries(marketData.competitors).map(([cat, comps]) => (<div key={cat} className={styles.category_card}><h4>{formatTitle(cat)}</h4><ul>{(comps as string[]).map(c => <li key={c}>{c}</li>)}</ul></div>))}</div></div>
              )}
            </section>
          ) : (<p style={{ textAlign: 'center', padding: '60px 0' }}>Market data not available.</p>)}
        </div>
        
        <div className={styles.country_list_background}>
          <CountryList countries={allCountries} activeCode={code} />
        </div>
      </main>
      <Footer />
    </>
  );
}
