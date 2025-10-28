import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import CtaSection from '@/app/components/sections/CtaSection';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Header />
      <SubPageTitle title="Privacy Policy" />
      <main className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <p className="text-gray-600 mb-6">
              IFELSE TECHSMART SOLUTIONS PRIVATE LIMITED. operates the Onfra website, which provides the this Plat form as Software as a Service.
            </p>
            <p className="text-gray-600 mb-6">
              This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the Onfra website.
            </p>
            <p className="text-gray-600 mb-6">
              If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
            </p>
            <p className="text-gray-600 mb-6">
              The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at www.onfra.io, unless otherwise defined in this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Collection and Use</h2>
            <p className="text-gray-600 mb-6">
              For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Log Data</h2>
            <p className="text-gray-600 mb-6">
              We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol (“IP”) address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies</h2>
            <p className="text-gray-600 mb-6">
              Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer's hard drive.
            </p>
            <p className="text-gray-600 mb-6">
              Our website uses these “cookies” to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Providers</h2>
            <p className="text-gray-600 mb-6">
              We may employ third-party companies and individuals due to the following reasons:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>To facilitate our Service;</li>
              <li>To provide the Service on our behalf;</li>
              <li>To perform Service-related services; or</li>
              <li>To assist us in analyzing how our Service is used.</li>
            </ul>
            <p className="text-gray-600 mb-6">
              We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Permissions and APIs that Access Sensitive Information</h2>
            <p className="text-gray-600 mb-6">
              We understand the importance of protecting the privacy and security of our users' sensitive information. Our Permissions and APIs are designed to access only the information that is necessary for the proper functioning of our services.
            </p>
            <p className="text-gray-600 mb-6">
              We will only request access to sensitive information such as personal identification numbers, financial information, and location data when it is strictly necessary for the provision of our services. We will also provide clear and conspicuous notice to our users before collecting this information and obtain their affirmative consent.
            </p>
            <p className="text-gray-600 mb-6">
              We will take appropriate measures to protect the security of sensitive information that we collect, including encryption, secure storage, and regular security audits. We will also limit access to this information to only those employees and contractors who require it to perform their job duties.
            </p>
            <p className="text-gray-600 mb-6">
              In the event of a data breach or unauthorized access to our users' sensitive information, we will promptly notify affected users and take all necessary steps to mitigate the damage and prevent future breaches.
            </p>
            <p className="text-gray-600 mb-6">
              We will also comply with all applicable laws and regulations regarding the collection, use, and storage of sensitive information. If you have any questions or concerns about our handling of sensitive information, please contact us at hello@onfra.io.
            </p>
            <p className="text-gray-600 mb-6">
              We are committed to protecting the privacy and security of our users' sensitive information and will continue to review and update our policies and practices as necessary to ensure compliance with the latest industry standards.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Security</h2>
            <p className="text-gray-600 mb-6">
              We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Links to Other Sites</h2>
            <p className="text-gray-600 mb-6">
              Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Children's Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
            </p>
          </div>
        </div>
      </main>
      <CtaSection />
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
