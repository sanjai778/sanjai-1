import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/app/components/Header';
import { generateWebPageSchema } from '@/app/utils/schema';

export const metadata: Metadata = {
  title: 'About Us | Onfra',
  description: 'Learn about M/s. ONFRA PROPTECH SOLUTIONS PRIVATE LIMITED, our mission to transform workspaces for a sustainable hybrid future, and our integrated facility management solutions.',
  alternates: {
    canonical: 'https://onfra.io/about-us',
  },
  openGraph: {
    title: 'About Us | Onfra',
    description: 'Learn about M/s. ONFRA PROPTECH SOLUTIONS PRIVATE LIMITED, our mission to transform workspaces for a sustainable hybrid future, and our integrated facility management solutions.',
    url: 'https://onfra.io/about-us',
    siteName: 'Onfra',
    images: [
      {
        url: '/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra About Us',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Onfra',
    description: 'Learn about M/s. ONFRA PROPTECH SOLUTIONS PRIVATE LIMITED, our mission to transform workspaces for a sustainable hybrid future, and our integrated facility management solutions.',
    images: ['/assets/img/visitdesk_twitter.png'],
  },
};
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import './about-us.css';

const AboutUsPage: React.FC = () => {
  const pageSchema = generateWebPageSchema({
    title: metadata.title as string,
    description: metadata.description as string,
    url: 'https://onfra.io/about-us',
  });
  
  return (
    <>
      <Header />
      <SubPageTitle title="About Us" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <main>
        <div className="container">
        <section className="about-section">
          <div className="row">
            <div className="col-lg-6">
              <Image 
                src="/uploads/svg_image/about-us.svg" 
                alt="Illustration of team members collaborating" 
                width={500} 
                height={500} 
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="col-lg-6">
              <p className="green-color">Transforming Workspaces for a Sustainable Future</p>
              <h2>Building SaaS platform for Sustainable Hybrid Workplaces</h2>
              <p>
                Next generation technology for the workplace. From humble beginnings at the front desk, Onfra has grown to provide a new standard of facility management for offices around the world. We never lose track of who’s in– and we can prove it. It all started with visitor management. Front desk agents often took the information they gathered with pen and paper and then transmitted it to the back office staff.
              </p>
            </div>
            <div className="col-lg-12">
              <p>
                There were numerous opportunities for error, making it hard to be responsive and accurate when it came to logging who was invited and whether they had accepted. We solved this problem by replacing outdated log books with iPads, creating a digital visitor sign-in process that made daily communication easier and more streamlined. When visitors arrived at our facilities, they were greeted by friendly, smiling hosts. Then they were asked if they would consent to sign in electronically by scanning their ID card or entering basic information including first name, last name, email address and phone number. Now the host could turn her attention on providing an exceptional experience for the guest immediately upon arrival even after the handshake! It was no longer necessary to interrupt what she was doing to jot down details or call someone in from another part of the office building... or offsite for that matter. The visitor experience got better for our guests – period. And because the agents knew instantly when a guest had checked out or where he or she should be next on the host’s Connecting the workplace to customers: We challenge the status quo of workplace technology with products that connect employees, customers, and businesses in new ways. Our products include Google Apps integrations, mobile app development, web platforms, and on-demand web apps.
              </p>
              <p>
                We provide end to end solutions for space allocation, space optimisation, schedule maintenance at workplaces. which helps the businesses to drill down and optimise the cost and utilise the space to the maximum. This platform is hardware agnostic and can be integrated with the any software or the system you like to connect with. Our utilisation analytic of the workplace and resources at the facility can help the business to understand the current usage and forecast the future usage and spending.
              </p>
              <p>
                Although many individuals are now permanently working from home, some companies value face-to-face collaboration. Additionally, some companies such as manufacturing, agriculture and production factories are unable to adopt a full work-from-home model. The commercial real estate is evolving to support more hybrid workspaces and co working spaces to address the shift in working model. These workplace models struggle to tackle the challenges such as, allocating, scheduling and maintaining the workplaces efficiently. We provide fool proof subscription based saas platform which addresses the end to end solutions for workplace facility management. Using our platform companies can setup, run and maintain their hybrid workplaces or co-working spaces smooth and sustainably.
              </p>
              <p>
                <strong>M/s. ONFRA PROPTECH SOLUTIONS PRIVATE LIMITED</strong> (CIN: U62099TN2024PTC170768) a Private Limited Firm having office at 16/4, Salai Street, Vepery, Chennai, Tamil Nadu, India, 600007.
              </p>
            </div>
          </div>
        </section>

        {/* ============================ */}
        {/*         Team Section         */}
        {/* ============================ */}
        <section className="team-section">
          <h2 className="section-title">Team</h2>
          <div className="team-members-container">
            {/* Team Member 1 */}
            <div className="team-member-card">
              <Image 
                src="/images/team/mohammed-aadil.png" // IMPORTANT: Replace with your actual image path
                alt="Photo of Mohammed Aadil" 
                width={150} 
                height={150} 
                className="team-member-photo" 
              />
              <h3 className="team-member-name">Mohammed Aadil</h3>
              <p className="team-member-role">Co Founder & CEO</p>
              <a href="https://www.linkedin.com/in/hmdaadil" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a>
            </div>

            {/* Team Member 2 */}
            <div className="team-member-card">
              <Image 
                src="/images/team/abdur-rahman.png" // IMPORTANT: Replace with your actual image path
                alt="Photo of Abdur Rahman" 
                width={150} 
                height={150} 
                className="team-member-photo" 
              />
              <h3 className="team-member-name">Abdur Rahman</h3>
              <p className="team-member-role">Co Founder & CTO</p>
              <a href="https://www.linkedin.com/in/sarsarahman" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a>
            </div>
          </div>
        </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutUsPage;
