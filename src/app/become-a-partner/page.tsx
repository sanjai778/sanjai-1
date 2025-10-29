'use client';

import { useEffect, useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import styles from './PartnerContact.module.css';
import CountrySelector from '@/app/components/CountrySelector';

export default function PartnerContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const dragDropAreas = document.querySelectorAll<HTMLElement>(`.${styles.dragDropArea}`);

    dragDropAreas.forEach((dragDropArea) => {
      const input = dragDropArea.querySelector(`.${styles.fileInput}`) as HTMLInputElement;
      const uploadText = dragDropArea.querySelector<HTMLElement>(`.${styles.uploadText}`);
      const fileNameDisplay = dragDropArea.querySelector<HTMLElement>(`.${styles.fileName}`);
      const originalIcon = dragDropArea.querySelector<HTMLElement>(`.${styles.uploadIcon}`);

      const handleFiles = (files: FileList | null) => {
        if (files && files.length > 0) {
          const fileName = files[0].name;
          if (uploadText) uploadText.style.display = 'none';
          if (originalIcon) originalIcon.style.display = 'none';
          if (fileNameDisplay) {
            fileNameDisplay.textContent = fileName;
            fileNameDisplay.style.display = 'block';
          }
        } else {
          if (fileNameDisplay) fileNameDisplay.style.display = 'none';
          if (uploadText) uploadText.style.display = 'block';
          if (originalIcon) originalIcon.style.display = 'block';
        }
      };

      dragDropArea.addEventListener('dragover', (e: DragEvent) => {
        e.preventDefault();
        dragDropArea.classList.add(styles.isDragging);
      });

      dragDropArea.addEventListener('dragleave', () => {
        dragDropArea.classList.remove(styles.isDragging);
      });

      dragDropArea.addEventListener('drop', (e: DragEvent) => {
        e.preventDefault();
        dragDropArea.classList.remove(styles.isDragging);
        if (e.dataTransfer?.files) {
          input.files = e.dataTransfer.files;
          handleFiles(input.files);
        }
      });

      input.addEventListener('change', () => {
        handleFiles(input.files);
      });
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');

    const formData = new FormData(e.currentTarget);
    // Replace with your API endpoint
    const response = await fetch('/api/partner-contact', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    setStatusMessage(result.message);
    setIsLoading(false);
  };

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
            onSubmit={handleSubmit}
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
              <button type="submit" name="Submit" className={`${styles.btnSubmit} ${isLoading ? styles.isLoading : ''}`} disabled={isLoading}>
                <span>{isLoading ? 'Submitting...' : 'Submit Application'}</span>
              </button>
              <div id="statusMessage" dangerouslySetInnerHTML={{ __html: statusMessage }}></div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
