'use client';
import React from 'react';
import Image from 'next/image';
import styles from './Integrations.module.css';

const integrations = [
  {
    name: 'Google',
    logo: '/uploads/svg_image/integration/Google.svg',
  },
  {
    name: 'Whatsapp',
    logo: '/uploads/svg_image/integration/whatsapp.svg',
  },
  {
    name: 'Slack',
    logo: '/uploads/svg_image/integration/Slack.svg',
  },
  {
    name: 'Microsoft Teams',
    logo: '/uploads/svg_image/integration/Microsoft-teams.svg',
  },
  {
    name: 'Google Calendar',
    logo: '/uploads/svg_image/integration/googlecalender.svg',
  },
  {
    name: 'ERP Next',
    logo: '/uploads/svg_image/integration/Erpnext_logo.png',
  },
];

const IntegrationsClient = () => {
  return (
    <section className={styles.integrationsSection}>
      <div className={styles.container}>
        <div className={styles.integrationsHeader}>
          <h2 className={styles.integrationsTitle}>Works with your favorite tools</h2>
          <p className={styles.integrationsSubtitle}>
            Onfra integrates with the most popular tools to help you create a seamless and efficient workplace experience.
          </p>
        </div>
        <div className={styles.integrationsGrid}>
          {integrations.map((integration, index) => (
            <div key={index} className={styles.integrationCard}>
              <Image src={integration.logo} alt={integration.name} width={64} height={64} />
            </div>
          ))}
        </div>
        <div className={styles.integrationsFooter}>
          <a href="/integrations" className={styles.integrationsLink}>
            View all integrations
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsClient;
