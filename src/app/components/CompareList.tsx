'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import CompareSearch from '@/app/components/CompareSearch';
import BestComparisons from '@/app/components/BestComparisons';
import NewPagination from '@/app/components/NewPagination';
import useDebounce from '@/app/hooks/useDebounce';
import { Compare } from '@/app/types';
import styles from './BestComparisons.module.css';

interface CompareListProps {
  initialCompares: Compare[];
  initialTotal: number;
  initialPage: number;
}

function CompareListComponent({ initialCompares, initialTotal, initialPage }: CompareListProps) {
  const [compares, setCompares] = useState<Compare[]>(initialCompares);
  const [total, setTotal] = useState(initialTotal);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(false);
  
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  
  const isFirstRun = useRef(true);

  const fetchCompares = async (page: number, search: string) => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams();
        params.set('page', page.toString());
        if (search) params.set('search', search);
        
        const res = await fetch(`/api/compares?${params.toString()}`);
        const data = await res.json();
        
        if (data.compares) {
            setCompares(data.compares);
            setTotal(data.total);
            setCurrentPage(data.currentPage);
        }
      } catch (err) {
          console.error(err);
      } finally {
          setIsLoading(false);
      }
  };

  useEffect(() => {
      if (isFirstRun.current) {
          isFirstRun.current = false;
          return;
      }
      fetchCompares(1, debouncedSearch);
  }, [debouncedSearch]);

  const handlePageChange = (page: number) => {
      fetchCompares(page, debouncedSearch);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const totalPages = Math.ceil(total / 12); // itemsPerPage is 12

  return (
    <>
      <CompareSearch value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
         <div style={{ opacity: isLoading ? 0.5 : 1, transition: 'opacity 0.2s' }}>
            {compares.length > 0 ? (
                <>
                    <BestComparisons data={compares} />
                    <NewPagination 
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </>
            ) : (
                <p style={{ textAlign: 'center' }}>No compares found.</p>
            )}
         </div>
      </main>
    </>
  );
}

const CompareSkeleton = () => {
    return (
      <div className={`${styles.card} p_service_item`} style={{ height: '350px' }}>
        <div style={{ width: '100%', height: '200px', backgroundColor: '#f0f0f0', marginBottom: '15px', borderRadius: '8px', animation: 'pulse 1.5s infinite ease-in-out' }}></div>
        <div style={{ height: '24px', backgroundColor: '#e0e0e0', width: '80%', marginBottom: '10px', animation: 'pulse 1.5s infinite ease-in-out' }}></div>
        <div style={{ height: '16px', backgroundColor: '#e0e0e0', width: '100%', marginBottom: '5px', animation: 'pulse 1.5s infinite ease-in-out' }}></div>
        <div style={{ height: '16px', backgroundColor: '#e0e0e0', width: '60%', animation: 'pulse 1.5s infinite ease-in-out' }}></div>
      </div>
    );
};

export default function CompareList(props: CompareListProps) {
    return (
        <Suspense fallback={
            <>
                <CompareSearch value="" onChange={() => {}} />
                <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
                    <div className={styles.grid}>
                        {[...Array(6)].map((_, index) => <CompareSkeleton key={index} />)}
                    </div>
                </main>
            </>
        }>
            <CompareListComponent {...props} />
        </Suspense>
    );
}
