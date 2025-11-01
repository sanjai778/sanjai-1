import Image from 'next/image';
import Link from 'next/link';
import { PrismaClient, CaseStudy } from '@prisma/client';
import styles from './RelatedCaseStudies.module.css';

const prisma = new PrismaClient();

async function getAllCaseStudies(): Promise<CaseStudy[]> {
  try {
    return await prisma.caseStudy.findMany();
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default async function RelatedCaseStudies({ currentCaseStudyTitle }: { currentCaseStudyTitle?: string }) {
  const allCaseStudies = await getAllCaseStudies();
  const relatedStudies = allCaseStudies
    .filter(study => study.Title !== currentCaseStudyTitle)
    .slice(0, 3);

  if (relatedStudies.length === 0) {
    return null;
  }

  return (
    <section className={styles.related_case_studies_section}>
      <div className={styles.container}>
        <h2 className={styles.section_title}>Related Case Studies</h2>
        <div className={styles.related_studies_container}>
          {relatedStudies.map(relatedStudy => (
            <div key={relatedStudy.id} className={styles.vs_comparison_card}>
              <Link href={`/casestudies/${relatedStudy.slug}`}>
                <div className={styles.diagonal_split}>
                  <Image 
                    src={relatedStudy.Company_Image_url ? relatedStudy.Company_Image_url.replace(/.*\/wp-content/, '') : '#'} 
                    alt={relatedStudy.Title || ''} 
                    width={300} 
                    height={200} 
                  />
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
        <Link href="/casestudies" className={styles.back_link_button}>← Back to All Case Studies</Link>
      </div>
    </section>
  );
}
