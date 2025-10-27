import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../CaseStudy.module.css';
import { PrismaClient, CaseStudy } from '@prisma/client';

const prisma = new PrismaClient();

async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  try {
    const caseStudy = await prisma.caseStudy.findUnique({ where: { slug } });
    if (!caseStudy) {
      notFound();
    }
    return caseStudy;
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function getAllCaseStudies(): Promise<CaseStudy[]> {
  try {
    return await prisma.caseStudy.findMany();
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const caseStudy = await getCaseStudy(params.slug);
  return {
    title: caseStudy?.Title,
  };
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const caseStudy = await getCaseStudy(slug);
  const allCaseStudies = await getAllCaseStudies();

  if (!caseStudy) {
    return (
      <>
        <Header />
        <div className={styles.container} style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h2>Case Study not found</h2>
          <p><Link href="/casestudies" className={styles.back_link_button}>Return to all case studies</Link></p>
        </div>
        <Footer />
      </>
    );
  }

  const relatedStudies = allCaseStudies
    .filter(study => study.Title !== caseStudy.Title)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <section className={styles.hero_section}>
          <div className={styles.container}>
            <div className={styles.hero_text}>
              <h1 className={styles.manage_visitors}>
                <span>{caseStudy.Header}</span>
              </h1>
              <p className={styles.case_study_overview}>{`"${caseStudy.Card_Description || 'Explore how we helped transform workplace management.'}"`}</p>
              <p className={styles.case_study_client_person_name}>{caseStudy.Author_Name || 'N/A'}</p>
              <h2 className={styles.text_style_italic}>{caseStudy.Company_Name || 'N/A'}</h2>
            </div>
            <div className={styles.case_study_feature_image_wrapper}>
              <picture>
                {caseStudy.Company_Image_url && (
                  <source media="(min-width: 768px)" srcSet={caseStudy.Company_Image_url.replace(/.*\/wp-content/, '')} />
                )}
                <img
                  src={caseStudy.Card_Image_Url ? caseStudy.Card_Image_Url.replace(/.*\/wp-content/, '') : (caseStudy.Company_Image_url ? caseStudy.Company_Image_url.replace(/.*\/wp-content/, '') : '#')}
                  className={styles.case_study_feature_image}
                  alt={caseStudy.Title || ''}
                />
              </picture>
            </div>
          </div>
        </section>

        <section className={styles.case_study_content}>
          <div className={styles.container}>
            <div className={`${styles.case_study_info_bar} ${styles.stylized_info_bar}`}>
              {caseStudy.Industry && (
                <div className={styles.info_box}>
                  <div className={styles.info_box_icon_wrapper}>
                    <svg className={styles.info_box_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                  <h3 className={styles.info_box_title}>industry</h3>
                  <p className={styles.info_box_value}>{caseStudy.Industry}</p>
                </div>
              )}
              {caseStudy.Service_Time && (
                <div className={styles.info_box}>
                  <div className={styles.info_box_icon_wrapper}>
                    <svg className={styles.info_box_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                      <line x1="9" y1="9" x2="15" y2="9"></line>
                      <line x1="9" y1="12" x2="15" y2="12"></line>
                      <line x1="9" y1="15" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <h3 className={styles.info_box_title}>service time</h3>
                  <p className={styles.info_box_value}>{caseStudy.Service_Time}</p>
                </div>
              )}
              <div className={styles.info_box}>
                <div className={styles.info_box_icon_wrapper}>
                  <svg className={styles.info_box_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className={styles.info_box_title}>employees</h3>
                <p className={styles.info_box_value}>{caseStudy.Employees || '500+'}</p>
              </div>
              {caseStudy.Product && (
                <div className={styles.info_box}>
                  <div className={styles.info_box_icon_wrapper}>
                    <svg className={styles.info_box_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <h3 className={styles.info_box_title}>products</h3>
                  <p className={styles.info_box_value}>{caseStudy.Product}</p>
                </div>
              )}
            </div>

            <div className={styles.challenges_solutions_grid}>
              <div className={`${styles.challenge_solution_card} ${styles.card_challenges}`}>
                <h2 className={styles.card_title}>Challenges</h2>
                <p className={styles.card_subtitle}>What They Needed:</p>
                <ul className={styles.card_list}>
                  {(caseStudy.Challenges || '').split(',*').map((challenge, index) => (
                    challenge.trim() && (
                      <li key={index} className={styles.card_list_item}>
                        <Image src="/uploads/svg_image/red-mark.svg" alt="Challenge Icon" width={20} height={20} />
                        <p>{challenge.trim()}</p>
                      </li>
                    )
                  ))}
                </ul>
              </div>
              <div className={`${styles.challenge_solution_card} ${styles.card_solutions}`}>
                <h2 className={styles.card_title}>Solutions</h2>
                <p className={styles.card_subtitle}>What We Delivered:</p>
                <ul className={styles.card_list}>
                  {(caseStudy.Results || '').split(',*').map((result: string, index: number) => (
                    result.trim() && (
                      <li key={index} className={styles.card_list_item}>
                        <Image src="/uploads/svg_image/green-mark.svg" alt="Solution Icon" width={20} height={20} />
                        <p>{result.trim()}</p>
                      </li>
                    )
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.overview_section}>
          <div className={styles.container}>
            <h2 className={styles.overview_title}>Overview</h2>
            <div className={styles.overview_content}>
              {(caseStudy.Overview || '').split(',*').map((item: string, index: number) => (
                item.trim() && <p key={index}>{item.trim()}</p>
              ))}
            </div>
          </div>
        </section>

        {relatedStudies.length > 0 && (
          <section className={styles.related_case_studies_section} style={{ backgroundColor: '#f8f9fa', padding: '80px 0' }}>
            <div className={styles.container}>
              <h2 className={styles.section_title}>Related Case Studies</h2>
              <div className={styles.related_studies_container}>
                {relatedStudies.map(relatedStudy => (
                  <div key={relatedStudy.id} className={styles.vs_comparison_card}>
                    <Link href={`/casestudies/${relatedStudy.slug}`}>
                      <div className={styles.diagonal_split}>
                        <Image src={relatedStudy.Company_Image_url ? relatedStudy.Company_Image_url.replace(/.*\/wp-content/, '') : '#'} alt={relatedStudy.Title || ''} width={300} height={200} />
                      </div>
                      <div className={styles.card_content}>
                        <h3 className={styles.card_title_vs}>{relatedStudy.Header}</h3>
                        <p className={styles.card_text}>{relatedStudy.Card_Description || ''}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.container} style={{ textAlign: 'center', padding: '60px 0' }}>
              <Link href="/casestudies" style={{ color: '#fff' }} className={styles.back_link_button}>← Back to All Case Studies</Link>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
