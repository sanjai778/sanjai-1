"use client";

import React from 'react';
import Image from 'next/image';
import styles from './FeatureComparison.module.css';

import { Compare } from '@/app/types';

interface FeatureComparisonProps {
  compare: Compare;
}

const FeatureComparison: React.FC<FeatureComparisonProps> = ({ compare }) => {
  const features = Object.keys(compare).filter(key => key !== 'id' && key !== 'main_title' && key !== 'page_title' && key !== 'page_description' && key !== 'img_url' && key !== 'Title' && key !== 'slug' && key !== 'wordpress_id');
  return (
    <div className={styles.container}>
      <div className="section_header">
        <h2 className="section_tagline">Feature Comparison</h2>
        <h3 className="section_title">Onfra vs {compare.main_title}</h3>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Feature</th>
            <th className={styles.onfraColumn}>Onfra</th>
            <th className={styles.competitorColumn}>{compare.main_title}</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index}>
              <td>{feature.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').replace(/\d+$/, '').trim()}</td>
              <td className={styles.onfraColumn}>
                <Image src="/uploads/2019/01/success.svg" alt="Yes" className={styles.icon} width={20} height={20} />
              </td>
              <td className={styles.competitorColumn}>
                {compare[feature as keyof Compare] === 'Yes' ? (
                  <Image src="/uploads/2019/01/success.svg" alt="Yes" className={styles.icon} width={20} height={20} />
                ) : (
                  <Image src="/uploads/2019/01/error.svg" alt="No" className={styles.icon} width={20} height={20} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td className={styles.onfraColumn}>
              <a href="https://app.visitdesk.io/signup" className={styles.signupButton}>
                Signup Now
              </a>
              <p className={styles.signupNote}>No credit card required</p>
            </td>
            <td className={styles.competitorColumn}></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default FeatureComparison;
