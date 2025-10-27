"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './BestComparisonsSection.module.css';
import { Compare } from '@/app/types';

async function getLimitedCompares() {
  try {
    const response = await fetch('/api/compares/limited', { next: { revalidate: 60 } });

    if (!response.ok) {
      throw new Error('Failed to fetch limited compares.');
    }

    const compares = await response.json();
    return compares;
  } catch (err) {
    console.error(err);
    return [];
  }
}

const truncateWords = (text: string, wordLimit: number) => {
  if (!text) return '';
  const words = text.split(' ');
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
};

const BestComparisonsSection: React.FC = () => {
  const [compares, setCompares] = useState<Compare[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getLimitedCompares();
      setCompares(data);
    }
    fetchData();
  }, []);

  return (
    <section className={styles.bestComparisonSection}>
      <div className={styles.container}>
        <div className={styles.titleDiv}>
          <h2>Best Comparisons</h2>
          <h3>Explore More Alternative</h3>
        </div>
        <div className={styles.row}>
          {compares
            .filter(
              (c: Compare) =>
                c.main_title &&
                c.main_title.toLowerCase() !== 'onfra' &&
                c.main_title.toLowerCase() !== 'title'
            )
            .slice(0, 3)
            .map((compare: Compare) => (
              <div className={styles.colMd4} key={compare.id}>
                <Link href={`/compares/${compare.slug}`} className={styles.comparisonCardLink}>
                  <div className={styles.comparisonCard}>
                    <div className={styles.cardHeaderLogo}>
                      {compare.img_url && <Image src={compare.img_url} alt={`${compare.main_title} Logo`} className={styles.cardLogo} width={100} height={100} />}
                    </div>
                    <div className={styles.cardContent}>
                      <h5 className={styles.cardTitle}>Onfra vs {compare.main_title}</h5>
                      <p className={styles.cardDescription}>
                        {truncateWords(compare.page_description, 10)}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BestComparisonsSection;
