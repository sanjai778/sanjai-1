"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CompareHero.module.css';

interface CompareHeroProps {
  competitorName: string;
}

const CompareHero: React.FC<CompareHeroProps> = ({ competitorName }) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>
            The Best {competitorName} Alternative for <span className={styles.workplace}>Workspace</span> Digital Transformation
          </h1>
          <div className={styles.buttonRow}>
            <a href="https://app.visitdesk.io/signup" target="_blank" rel="noopener noreferrer">
              <button type="button" className={styles.signupButton}>Signup For Free!</button>
            </a>
            <Link href="/contact-us">
              <button type="button" className={styles.talkButton}>Talk to Us</button>
            </Link>
          </div>
          <div className={styles.features}>
            <span><Image src="https://onfra.io/wp-content/uploads/svg_image/check-circle 1.svg" width="20" height="20" alt="Checkmark" />Free 14-day Demo</span>
            <span><Image src="https://onfra.io/wp-content/uploads/svg_image/check-circle 1.svg" width="20" height="20" alt="Checkmark" />No credit card needed</span>
            <span><Image src="https://onfra.io/wp-content/uploads/svg_image/check-circle 1.svg" width="20" height="20" alt="Checkmark" />Quick Setup</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareHero;
