import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import CtaSection from '@/app/components/sections/CtaSection';
import styles from './CancellationAndRefundPolicy.module.css';

const CancellationAndRefundPolicy = () => {
  return (
    <>
      <Header />
      <SubPageTitle title="Cancellation & Refund Policy" />
      <div className={styles.main}>
        <div className="container">
          <div className={styles.contentWrapper}>
            <div className={styles.card}>
              <section>
                <p className={styles.paragraph}>
                  We follow a reliable refund policy to let our customers feel privileged about their association with us. Please read the guidelines governing the refund policy.
                </p>
              </section>

              <section>
                <ul className={styles.list}>
                  <li>If you wish to cancel your account, notify us at least 15 days before the end of your term (via an email to <a href="mailto:support@onfra.io" className={styles.link}>support@onfra.io</a>). Upon cancellation, your data is deleted from our servers. Since deletion of all data is final please be sure that you do in fact want to cancel your account before doing so.</li>
                  <li>Your subscription gets renewed automatically at the end of each month.</li>
                  <li>You can upgrade or downgrade the level of our services at any time of your usage, however Onfra does not refund any fees in that case.</li>
                  <li>If you stop using our services in between the term, we will not refund you the fees paid by you for the remaining term.</li>
                  <li>We reserve the right to modify or terminate the Onfra service(s) for any reason, without notice at any time.</li>
                  <li><strong>Fraud</strong>: Without limiting any other remedies, Onfra may suspend or terminate your account if we suspect that you (by conviction, settlement, insurance or investigation, or otherwise, forcefully removed our branding) have engaged in fraudulent activity in connection with the services offered by us.</li>
                  <li><strong>Note</strong>: No refunds are offered, even if a plan is canceled mid-month.</li>
                </ul>
              </section>

              <section>
                <h2 className={styles.title}>15 Day No Obligation Cancellation</h2>
                <div className={styles.text}>
                  <p>Onfra offers SaaS service to companies under a 15-day no obligation cancellation policy. The no obligation cancellation begins immediately upon account activation. The 15-day no obligation cancellation period only applies to new customers and does not apply to existing customers that have a subscription plan. Onfra will also not honor a free trial period for customers who were once paying subscribers, cancelled, and then decided to re-instate their subscription to Onfra.</p>
                  <p>At any time during the 15-day, potential subscriber (customer) can cancel their account and will be refunded in full with a minor service charge. Refund will be initiated within seven business days.</p>
                  <p>In order to continue using SaaS after the 15-day no obligation cancellation period, you will be automatically be put to continue to your selected payment plan which you have selected initially at time of buying from range of selections of monthly or receiving a discount by paying for half yearly or full year of service.</p>
                </div>
              </section>

              <section>
                <h2 className={styles.title}>Monthly Billing, Cancellation, and Refund Policies</h2>
                <div className={styles.text}>
                  <p>Onfra charges and collects in advance for use of the SaaS service. All services rendered are non-refundable. Once a customer selects a subscription plan and provides billing information, Onfra will calculate a pro-rated amount with the first payment due on signing.</p>
                  <p>All subscriptions monthly, quarterly and yearly renew automatically on their due renewal date according to date of purchase until officially cancelled in writing. Customers may cancel anytime by emailing a notice to: <a href="mailto:support@onfra.io" className={styles.link}>support@onfra.io</a></p>
                  <p>Customers will receive an email from Onfra confirming that their subscription to the SaaS service has been cancelled.</p>
                  <p><strong>Important</strong>: No refunds or credits for partial months, quarters or years of service will be refunded to a customer upon cancellation.</p>
                  <p>All fees are exclusive of all taxes, levies, or duties imposed by taxing authorities, and the customer is responsible for payments of all such taxes, levies, or duties.</p>
                  <p>The fees that Onfra charges for the monthly, quarterly, or yearly services exclude phone, and Internet access charges, as well as other data transmission charges. Any currency exchange settlements are based on the customer's agreement with the payment method provider. To be clear: these charges are the customer's responsibility.</p>
                  <p>Customers have the ability to upgrade or downgrade their subscription plan for the SaaS services at any time. For any kind of upgrade or downgrade in subscription, customer has to write to <a href="mailto:support@onfra.io" className={styles.link}>support@onfra.io</a>.</p>
                  <p>The chosen method of billing will automatically be charged the new subscription rate on the next billing cycle.</p>
                  <p>With regards to downgrades on a subscription, Onfra does not issue refunds or credits for partial months of service.</p>
                  <p>Onfra reserves the right to refuse/cancel a subscription to any of the SaaS services bought from Onfra.io, If Onfra refuses a new or renewing subscription/membership, registrants will be offered a refund on prorata basis of pending days in subscription plan bought with an additional cancellation charge of $4.99.</p>
                </div>
              </section>
              
              <section>
                  <h3 className={styles.subTitle}>Non-payment or delay in payment :</h3>
                  <p className={styles.text}>If a subscriber's account is suspended due to non-payment, the customer will not receive any relief or credit for the suspended period of the service. The subscriber must fully pay any outstanding fees to reactivate their account and resume the subscription. Any missed payments will result in the account's immediate suspension, and the subscriber will be responsible for any accrued charges, including late fees and interest. The subscriber is responsible for keeping their account information up to date, including billing information and payment method, to avoid suspension or interruption of their subscription. The service will resume upon receipt of full payment and will continue according to the original terms of the subscription agreement.</p>
              </section>

              <section>
                  <p className={styles.text}>These above policies apply to all the SaaS services listed on Onfra unless otherwise noted in the corresponding program materials.</p>
              </section>

            </div>
          </div>
        </div>
      </div>
      <CtaSection />
      <Footer />
    </>
  );
};

export default CancellationAndRefundPolicy;
