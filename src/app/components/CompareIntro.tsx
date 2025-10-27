"use client";

import React from 'react';
import { Compare } from '@/app/types';

interface CompareIntroProps {
  competitor: Compare;
}

const CompareIntro: React.FC<CompareIntroProps> = ({ competitor }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
      <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '20px', width: '300px' }}>
        <h3>{competitor.main_title}</h3>
        <p>Price Comparison</p>
        <h4>Professional Plan</h4>
        <p>Clear pricing information is not available.</p>
      </div>
      <div style={{ width: '300px' }}>
        <h2>Onfra vs {competitor.main_title}</h2>
        <p>{competitor.page_description}</p>
      </div>
    </div>
  );
};

export default CompareIntro;
