'use client';
import React, { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import CtaSection from '@/app/components/sections/CtaSection';
import styles from './IntegrationsPage.module.css';

const integrationsData = [
  {
    title: 'Google',
    logo: 'https://onfra.io/wp-content/uploads/svg_image/integration/Google.svg',
    description: 'Automatically sync Google Workspace users into the onfra employee directory.',
    categories: ['authentication'],
  },
  {
    title: 'Whatsapp',
    logo: 'https://onfra.io/wp-content/uploads/svg_image/integration/whatsapp.svg',
    description: 'When an employee checks in using the host app, information is sent to the main user via WhatsApp notification.',
    categories: ['authentication', 'visitors'],
  },
  {
    title: 'Slack',
    logo: 'https://onfra.io/wp-content/uploads/svg_image/integration/Slack.svg',
    description: 'Schedule to come into the office, book desks, and invite visitors through Onfra without leaving Slack.',
    categories: ['authentication', 'employees'],
  },
  {
    title: 'Microsoft Teams',
    logo: 'https://onfra.io/wp-content/uploads/svg_image/integration/Microsoft-teams.svg',
    description: 'Automatically notify employees through a Teams message for every Onfra update.',
    categories: ['authentication', 'rooms'],
  },
  {
    title: 'Google Calendar',
    logo: 'https://onfra.io/wp-content/uploads/svg_image/integration/googlecalender.svg',
    description: 'Invite visitors and book desks for employees in Onfra without leaving Google Calendar.',
    categories: ['authentication', 'rooms'],
  },
  {
    title: 'ERP Next',
    logo: 'https://onfra.io/wp-content/uploads/svg_image/integration/Erpnext_logo.png',
    description: 'When a user checks in using the Onfra host app, their attendance is automatically marked in ERP Next.',
    categories: ['authentication', 'visitors'],
  },
  {
    title: 'Zoom',
    logo: 'https://onfra.io/wp-content/uploads/svg_image/integration/Zoom.svg',
    description: 'Automatically send employees a private notification for every Onfra update.',
    categories: ['authentication', 'rooms'],
  },
  {
    title: 'Microsoft Outlook',
    logo: 'https://onfra.io/wp-content/uploads/svg_image/integration/msoutlook.svg',
    description: 'Invite visitors in Onfra without leaving Outlook.',
    categories: ['authentication'],
  },
  {
    title: 'Google Meet',
    logo: 'https://onfra.io/wp-content/uploads/svg_image/integration/Google_Meet.png',
    description: 'After scheduling a meeting in Google Calendar with a room assignment, a prompt asks if you want to share a Google Meet link with attendees.',
    categories: ['authentication', 'rooms'],
  },
];

const IntegrationsPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredIntegrations = integrationsData.filter(
    (integration) =>
      (selectedCategory === 'all' || integration.categories.includes(selectedCategory)) &&
      integration.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <Header />
      <SubPageTitle title="Integrations" />
      <main>
        <section style={{ paddingBottom: '60px' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className={styles.intTitle}>Enhance your workplace with Onfra.</h2>
                <p className={styles.subTitle}>Connect multiple apps for seamless integration and increased productivity.</p>
                <input type="text" className={styles.searchInput} placeholder="Search for an app..." onChange={handleSearchChange} value={searchValue} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <img className={styles.integrationImage} src="https://onfra.io/wp-content/uploads/svg_image/integration.svg" alt="Integrations" />
              </div>
            </div>
            <div className={styles.integrationsLayout}>
              <div className={styles.sidebar}>
                <div className={styles.filterContainer}>
                  <select id="category-filter1" onChange={handleCategoryChange} value={selectedCategory}>
                    <option value="all">All Categories</option>
                    <option value="visitors">Visitors</option>
                    <option value="desks">Desks</option>
                    <option value="rooms">Rooms</option>
                    <option value="deliveries">Deliveries</option>
                    <option value="employees">Employees</option>
                    <option value="flexipass">Flexi pass</option>
                    <option value="authentication">Authentication</option>
                  </select>
                  <ul id="category-filter-list">
                    <li><h2 className={styles.catlistTitle}>Collections</h2></li>
                    <li className={styles.intList}><button className={`${styles.categoryBtn} ${selectedCategory === 'all' ? styles.active : ''}`} onClick={() => handleCategoryClick('all')}>All Categories</button></li>
                    <li className={styles.intList}><button className={`${styles.categoryBtn} ${selectedCategory === 'visitors' ? styles.active : ''}`} onClick={() => handleCategoryClick('visitors')}>Visitors</button></li>
                    <li className={styles.intList}><button className={`${styles.categoryBtn} ${selectedCategory === 'desks' ? styles.active : ''}`} onClick={() => handleCategoryClick('desks')}>Desks</button></li>
                    <li className={styles.intList}><button className={`${styles.categoryBtn} ${selectedCategory === 'rooms' ? styles.active : ''}`} onClick={() => handleCategoryClick('rooms')}>Rooms</button></li>
                    <li className={styles.intList}><button className={`${styles.categoryBtn} ${selectedCategory === 'deliveries' ? styles.active : ''}`} onClick={() => handleCategoryClick('deliveries')}>Deliveries</button></li>
                    <li className={styles.intList}><button className={`${styles.categoryBtn} ${selectedCategory === 'employees' ? styles.active : ''}`} onClick={() => handleCategoryClick('employees')}>Employees</button></li>
                    <li className={styles.intList}><button className={`${styles.categoryBtn} ${selectedCategory === 'flexipass' ? styles.active : ''}`} onClick={() => handleCategoryClick('flexipass')}>Flexi pass</button></li>
                    <li><h2 className={styles.catlistTitle}>General</h2></li>
                    <li className={styles.intList}><button className={`${styles.categoryBtn} ${selectedCategory === 'authentication' ? styles.active : ''}`} onClick={() => handleCategoryClick('authentication')}>Authentication</button></li>
                  </ul>
                </div>
              </div>
              <div className={styles.integrationsContent}>
                <div className={styles.intContainer} id="company-cards">
                  {filteredIntegrations.map((integration, index) => (
                    <div key={index} className={styles.intCard}>
                      <img className={styles.intLogo} src={integration.logo} alt={integration.title} />
                      <div className={styles.title}>{integration.title}</div>
                      <p className={styles.paragraph}>{integration.description}</p>
                    </div>
                  ))}
                </div>
                {filteredIntegrations.length === 0 && (
                  <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <p>No apps found matching your search criteria.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <CtaSection />
      <Footer />
    </>
  );
};

export default IntegrationsPage;
