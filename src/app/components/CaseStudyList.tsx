"use client";

"use client";

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NewPagination from './NewPagination';

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
      <div style={{ textAlign: 'center', padding: '50px 20px' }}>
        <h1 style={{ fontSize: '2.5em', fontWeight: 'bold', marginBottom: '20px' }}>
          The world’s leading workplaces of every size and industry rely on onfra to transform effectively
        </h1>
        <div style={{ marginBottom: '30px' }}>
          <button className="btn btn-primary" style={{ marginRight: '10px' }}>
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
          style={{
            padding: '15px',
            width: '400px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '20px',
            display: 'block',
            margin: '0 auto 20px',
          }}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2em'  }}>Case Studies</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <select
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
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
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
          {paginatedCaseStudies.map((caseStudy: CaseStudy) => (
            <Link key={caseStudy.id} href={`/casestudies/${caseStudy.slug}`} style={{ textDecoration: 'none', color: 'inherit', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
              {caseStudy.Company_Image_url && <Image src={caseStudy.Company_Image_url} alt={caseStudy.Card_Title || ''} width={300} height={200} style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>}
              <div style={{ padding: '20px' }}>
                <h2 style={{ marginTop: 0, fontSize: '1.1em', marginBottom: '10px' , color: '#222' }}>{caseStudy.Card_Title}</h2>
                <p style={{ color: '#666' }}>{caseStudy.Card_Description}</p>
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
