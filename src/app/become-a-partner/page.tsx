import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Become an Onfra Partner | Reseller, Affiliate, and Channel Programs',
  description: 'Join the Onfra partner network. Explore our reseller, affiliate, and exclusive channel partner programs for our visitor management and workspace solutions.',
  alternates: {
    canonical: 'https://onfra.io/become-a-partner',
  },
  openGraph: {
    title: 'Become an Onfra Partner | Reseller, Affiliate, and Channel Programs',
    description: 'Join the Onfra partner network. Explore our reseller, affiliate, and exclusive channel partner programs for our visitor management and workspace solutions.',
    url: 'https://onfra.io/become-a-partner',
    siteName: 'Onfra',
    images: [
      {
        url: 'https://onfra.io/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Partner Program',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Become an Onfra Partner | Reseller, Affiliate, and Channel Programs',
    description: 'Join the Onfra partner network. Explore our reseller, affiliate, and exclusive channel partner programs for our visitor management and workspace solutions.',
    images: ['https://onfra.io/public/assets/img/visitdesk_twitter.png'],
  },
};
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import styles from './PartnerContact.module.css';
import CountrySelector from '@/app/components/CountrySelector';

export default function PartnerContactPage() {

  return (
    <>
      <Header />
      <section className={styles.multiStepForm}>
        <div className="container">
          <form
            name="frmContact"
            className={styles.pricingQuotesForm}
            method="post"
            action=""
            encType="multipart/form-data"
          >
            <fieldset className={styles.fieldset}>
              <div className={styles.formGroup}>
                <Image src="/assets/img/partner-contact.svg" className={styles.center} alt="Partner Contact" width={350} height={200} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="countryName">Select your region</label>
                <CountrySelector />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="typeofPartnership">Partnership Type</label>
                <select id="typeofPartnership" name="typeofPartnership" className={styles.formControl} required>
                  <option value="Affliate Partner">Affliate</option>
                  <option value="Reseller Partner">Reseller</option>
                  <option value="Channel Partner">Channel Partner (For Exclusive Region)</option>
                </select>
              </div>
            </fieldset>

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Personal Information</legend>
              <div className={styles.row}>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className={styles.formControl} name="firstName" placeholder="Enter your first name" id="firstName" required />
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className={styles.formControl} name="lastName" placeholder="Enter your last name" id="lastName" required />
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="businessEmail">Business Email</label>
                <input type="email" className={styles.formControl} name="businessEmail" placeholder="e.g., name@yourcompany.com" id="businessEmail" required />
              </div>
            </fieldset>

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Company Information</legend>
              <div className={styles.formGroup}>
                <label htmlFor="companyName">Company Name</label>
                <input type="text" className={styles.formControl} name="companyName" placeholder="Your company's legal name" id="companyName" required />
              </div>

              <div className={styles.row}>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label htmlFor="website">Website</label>
                    <input type="text" className={styles.formControl} name="website" placeholder="e.g., https://www.yourcompany.com" id="website" required />
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="tel" className={styles.formControl} name="phoneNumber" placeholder="Your contact number" id="phoneNumber" required />
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="typeRegistration">Type of Registration</label>
                <select name="typeRegistration" id="typeRegistration" className={styles.formControl}>
                  <option value="Proprietor">Proprietor</option>
                  <option value="Partnership">Partnership</option>
                  <option value="LLP">LLP</option>
                  <option value="LLC">LLC</option>
                  <option value="Inc">Inc</option>
                  <option value="Pvt-Ltd">Pvt Ltd</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div className={styles.row}>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label htmlFor="yearofEstablishment">Year of Establishment</label>
                    <input type="number" className={styles.formControl} name="yearofEstablishment" placeholder="e.g., 2015" id="yearofEstablishment" required />
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label htmlFor="numberofEmployees">Number of Employees</label>
                    <input type="number" className={styles.formControl} name="numberofEmployees" placeholder="e.g., 50" id="numberofEmployees" required />
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="lastthreeYear">Turnover of Last Three Financial Years</label>
                <input type="text" className={styles.formControl} name="lastthreeYear" placeholder="e.g., 1M USD" id="lastthreeYear" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="gstNumber">GST / Tax ID Number</label>
                <input type="text" className={styles.formControl} name="gstNumber" id="gstNumber" placeholder="Enter your business tax ID" required />
              </div>
            </fieldset>

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Upload Documents</legend>
              <div className={styles.formGroup}>
                <label htmlFor="companyProfile">Company Profile</label>
                <div className={styles.uploadWrapper}>
                  <div className={styles.dragDropArea} data-input-id="companyProfile">
                    <div className={styles.uploadIcon}></div>
                    <div className={styles.uploadText}>
                      <p className={styles.dragDropText}>Drag & Drop your file here</p>
                    </div>
                    <p className={styles.fileName}></p>
                    <input type="file" className={styles.fileInput} id="companyProfile" name="companyProfile" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="incorporationDoc">Company Incorporation and GST or tax</label>
                <div className={styles.uploadWrapper}>
                  <div className={styles.dragDropArea} data-input-id="incorporationDoc">
                    <div className={styles.uploadIcon}></div>
                    <div className={styles.uploadText}>
                      <p className={styles.dragDropText}>Drag & Drop your file here</p>
                    </div>
                    <p className={styles.fileName}></p>
                    <input type="file" className={styles.fileInput} id="incorporationDoc" name="incorporationDoc" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Sales Information</legend>
              <div className={styles.formGroup}>
                <label htmlFor="expectedSales">Expected Annual Sales (in USD)</label>
                <input type="number" className={styles.formControl} name="expectedSales" id="expectedSales" placeholder="e.g., 100000" required />
              </div>
            </fieldset>

            <div>
              <button type="submit" name="Submit" className={`${styles.btnSubmit}`}>
                <span>{'Submit Application'}</span>
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
