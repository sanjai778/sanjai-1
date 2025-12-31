"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './BestComparisons.module.css';
import { Compare } from '@/app/types';

interface BestComparisonsProps {
  data: Compare[];
}

const truncateWords = (text: string, wordLimit: number) => {
  if (!text) return '';
  const words = text.split(' ');
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
};

const BestComparisons: React.FC<BestComparisonsProps> = ({ data }) => {
  return (
    <div>
      <div className={styles.grid}>
        {data.map((compare: Compare) => {
          let imageUrl = compare.img_url;
          if (imageUrl) {
            imageUrl = imageUrl.replace(/.*\/wp-content/, '');
            imageUrl = encodeURI(imageUrl);
          }
          return (
            <Link key={compare.id} href={`/compares/${compare.slug}`} className={`${styles.card} p_service_item`} aria-label={`Read more about comparing Onfra with ${compare.main_title}`}>
              {imageUrl && <Image src={imageUrl} alt={compare.main_title} className={styles.logo} width={300} height={200} />}
              <h3>Onfra vs {compare.main_title} | Alternative to {compare.main_title}</h3>
              <p>{truncateWords(compare.page_description, 14)}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BestComparisons;
