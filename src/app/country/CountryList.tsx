"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import styles from './Countries.module.css';

interface Country {
  code: string;
  name: string;
}

interface CountryListProps {
  countries: Country[];
  activeCode?: string;
}

export default function CountryList({ countries, activeCode }: CountryListProps) {
  const [selectedLetter, setSelectedLetter] = useState('All');
  const alphabet = ['All', ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))];

  const filteredCountries = useMemo(() => {
    if (selectedLetter === 'All') return countries;
    return countries.filter(country => country.name.toUpperCase().startsWith(selectedLetter));
  }, [countries, selectedLetter]);

  return (
    <section className={styles.country_list_section}>
      <div className="container">
        <div className="section_header">
          <h2 className={`section_title ${styles.custom_section_title}`}>
            Available in These <span>Countries</span>
          </h2>
          <p className={styles.section_subtitle}>(Click to explore regional case studies, testimonials, and features)</p>
        </div>
        <div className={styles.alphabet_filter}>
          {alphabet.map(letter => (
            <button key={letter} className={selectedLetter === letter ? styles.active : ''} onClick={() => setSelectedLetter(letter)}>
              {letter}
            </button>
          ))}
        </div>
        {filteredCountries.length > 0 ? (
          <div className={styles.country_grid}>
            {filteredCountries.map(country => {
              const isActive = country.code === activeCode;
              return (
                <Link href={`/country/${country.code}`} key={country.code} className={`${styles.country_card} ${isActive ? styles.active : ''}`}>
                  {country.name}
                </Link>
              );
            })}
          </div>
        ) : (
          <p className={styles.no_results_message}>{`No countries found starting with "${selectedLetter}".`}</p>
        )}
      </div>
    </section>
  );
}
