"use client";

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NewPagination from './NewPagination';
import styles from './CaseStudyList.module.css';

interface CaseStudy {
  id: number;
  slug: string | null;
  Company_Image_url: string | null;
  Card_Title: string | null;
  Card_Description: string | null;
  Industry?: string | null;
  Product?: string | null;
}

interface CaseStudyListProps {
  initialCaseStudies: CaseStudy[];
  industries: string[];
  products: string[];
}

async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const response = await fetch(`/api/case-studies`);
    if (!response.ok) {
      throw new Error('Failed to fetch case studies');
    }
    const caseStudies = await response.json();
    return caseStudies.map((cs: CaseStudy) => ({
      ...cs,
      Company_Image_url: cs.Company_Image_url ? cs.Company_Image_url.replace(/.*\/wp-content/, '') : null,
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default function CaseStudyList({ initialCaseStudies, industries, products }: CaseStudyListProps) {
  const [allCaseStudies, setAllCaseStudies] = useState<CaseStudy[]>(initialCaseStudies);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  useEffect(() => {
    const fetchCaseStudies = async () => {
      const studies = await getCaseStudies();
      setAllCaseStudies(studies);
    };
    if (initialCaseStudies.length === 0) {
      fetchCaseStudies();
    }
  }, [initialCaseStudies]);

  const filteredCaseStudies = useMemo(() => {
    return allCaseStudies.filter(study => {
      const matchesSearch =
        (study.Card_Title?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (study.Card_Description?.toLowerCase() || '').includes(searchTerm.toLowerCase());
      const matchesIndustry = selectedIndustry === 'All' || study.Industry === selectedIndustry;
      const matchesProduct = selectedProduct === 'All' || study.Product === selectedProduct;
      return matchesSearch && matchesIndustry && matchesProduct;
    });
  }, [allCaseStudies, searchTerm, selectedIndustry, selectedProduct]);

  const paginatedCaseStudies = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredCaseStudies.slice(startIndex, startIndex + postsPerPage);
  }, [filteredCaseStudies, currentPage, postsPerPage]);

  const totalPages = Math.ceil(filteredCaseStudies.length / postsPerPage);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          The world’s leading workplaces of every size and industry rely on onfra to transform effectively
        </h1>
        <div className={styles.buttonGroup}>
          <button className={`btn btn-primary ${styles.button}`}>
            Signup For Free!
          </button>
          <button className="btn btn-outline-primary">
            Talk to Us
          </button>
        </div>
        <input
          type="text"
          placeholder="Search case studies..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.filtersContainer}>
        <h2 className={styles.filtersTitle}>Case Studies</h2>
        <div className={styles.selectGroup}>
          <select
            className={styles.select}
            value={selectedIndustry}
            onChange={(e) => {
              setSelectedIndustry(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="All">Industry: All</option>
            {industries.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
          <select
            className={styles.select}
            value={selectedProduct}
            onChange={(e) => {
              setSelectedProduct(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="All">Product: All</option>
            {products.map(product => (
              <option key={product} value={product}>{product}</option>
            ))}
          </select>
        </div>
      </div>

      {paginatedCaseStudies.length > 0 ? (
        <div className={styles.grid}>
          {paginatedCaseStudies.map((caseStudy: CaseStudy) => (
            <Link key={caseStudy.id} href={`/casestudies/${caseStudy.slug}`} className={styles.cardLink}>
              {caseStudy.Company_Image_url && <Image src={caseStudy.Company_Image_url} alt={caseStudy.Card_Title || ''} width={300} height={200} className={styles.cardImage} />}
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{caseStudy.Card_Title}</h2>
                <p className={styles.cardDescription}>{caseStudy.Card_Description}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>No case studies found.</p>
      )}
      <NewPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}
