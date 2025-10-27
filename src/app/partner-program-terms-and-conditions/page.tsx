import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import CtaSection from '@/app/components/sections/CtaSection';
import styles from './Terms.module.css';

export default function PartnerProgramTermsAndConditionsPage() {
  return (
    <>
      <Header />
      <SubPageTitle title="Partner Program Terms and Conditions" />
      <main className={`container ${styles.termsContainer}`} style={{ padding: '4rem 24px' }}>
        <p>By participating in the Onfra Partner Program, you agree to the following terms and conditions:</p>

        <h2>Eligibility</h2>
        <ul>
          <li>Any individuals can become Affiliate partner</li>
          <li>Reseller and Channel Partners must have a registered company and a business bank account to participate in the partner program.</li>
          <li>Channel Partners must have a minimum of 2 years in business and a dedicated team for product sales and support.</li>
        </ul>

        <h2>Payment Cycle</h2>
        <ul>
          <li>Partners will be paid on a monthly basis.</li>
        </ul>

        <h2>Sales Target</h2>
        <ul>
          <li>Reseller Partners must meet a sales target of 5 new signups per month.</li>
          <li>Channel Partners must meet a sales target of 15 new signups per month.</li>
        </ul>

        <h2>Commission Structure</h2>
        <ul>
          <li>Affiliate Partners receive a 5% commission on new signups and no commission on renewals.</li>
          <li>Reseller Partners receive a 10% commission on new signups and no commission on renewals.</li>
          <li>Channel Partners receive a 25% commission on new signups and a 10% commission on renewals.</li>
        </ul>

        <h2>Commission Eligibility</h2>
        <ul>
          <li><strong>Commission Qualification:</strong> Reseller and Affiliate partners will qualify for commission only if billing is conducted by Onfra directly to the customer.</li>
          <li><strong>Proxy Signups:</strong> Reseller and Affiliate partners will not be eligible for commission if they sign up clients on their behalf to create duplicate billing.</li>
          <li><strong>Commission on Payments:</strong> Reseller and Affiliate partners will receive commission solely on the initial payment made by the customer.</li>
        </ul>

        <h2>Onboarding</h2>
        <p>Partners must apply for the partnership program by filling out the application form. The Onfra team will vet the application, and upon approval, an acknowledgment will be provided. Without acknowledgment from the Onfra team, partners will not be able to claim commissions.</p>

        <h2>Offboarding</h2>
        <p>Onfra holds 100% rights to terminate the partnership at any time if performance or conduct is deemed unsatisfactory.</p>

        <h2>Billing Entity</h2>
        <ul>
          <li>The respective Channel Partner or Onfra is responsible for issuing invoices and collecting payments from the customer.</li>
          <li>Reseller and Affiliate partners are not authorized to bill the customer.</li>
        </ul>

        <h2>Partner Benefits</h2>
        <ul>
          <li>Early or Beta access to new products or features before they are released to the general public.</li>
          <li>Exclusive product training on features, sales techniques, and technical support.</li>
          <li>24/6 priority support.</li>
          <li>Visibility through Onfra's website, marketing materials, events, and other channels.</li>
          <li>Go-to-market strategy support, including marketing and sales resources.</li>
          <li>Exclusivity to sell the product within a specific territory.</li>
        </ul>

        <p>By signing up for the Onfra Partner Program, you agree to abide by these terms and conditions. Onfra reserves the right to modify these terms at any time. For more information or to become a partner, contact partner@onfra.io or visit https://www.onfra.io/become-a-partner/.</p>

        <h2>Customer Support & SLA Responsibility:</h2>
        <p>The billing entity is responsible for delivering customer support and upholding the Service Level Agreement (SLA). This obligation includes providing timely assistance, maintaining agreed-upon service standards, and resolving any issues or concerns related to the product or service as specified in the SLA.</p>
      </main>
      <CtaSection />
      <Footer />
    </>
  );
}
