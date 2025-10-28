import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import CtaSection from '@/app/components/sections/CtaSection';

const ServiceLevelAgreementPage = () => {
  return (
    <>
      <Header />
      <SubPageTitle title="Service Level Agreement" />
      <main className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Metric</th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Level Objective (SLO)</th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Measurement Method</th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reporting Interval</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-6">Service Availability</td>
                    <td className="py-4 px-6">99.90%</td>
                    <td className="py-4 px-6">Uptime monitoring tool</td>
                    <td className="py-4 px-6">Monthly</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td colSpan={4} className="py-4 px-6 font-bold text-gray-700">Support Response Times</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 pl-12">- Priority 1 (Critical)</td>
                    <td className="py-4 px-6">Respond within 1 hour</td>
                    <td className="py-4 px-6">Timestamped ticket system</td>
                    <td className="py-4 px-6">24/7</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 pl-12">- Priority 2 (High)</td>
                    <td className="py-4 px-6">Respond within 4 hours</td>
                    <td className="py-4 px-6">Timestamped ticket system</td>
                    <td className="py-4 px-6">24/7</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 pl-12">- Priority 3 (Medium)</td>
                    <td className="py-4 px-6">Respond within 8 hours</td>
                    <td className="py-4 px-6">Timestamped ticket system</td>
                    <td className="py-4 px-6">Business hours</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td colSpan={4} className="py-4 px-6 font-bold text-gray-700">Problem Resolution Times</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 pl-12">- Priority 1 (Critical)</td>
                    <td className="py-4 px-6">Resolve within 4 hours</td>
                    <td className="py-4 px-6">Timestamped ticket system</td>
                    <td className="py-4 px-6">24/7</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 pl-12">- Priority 2 (High)</td>
                    <td className="py-4 px-6">Resolve within 12 hours</td>
                    <td className="py-4 px-6">Timestamped ticket system</td>
                    <td className="py-4 px-6">24/7</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 pl-12">- Priority 3 (Medium)</td>
                    <td className="py-4 px-6">Resolve within 48 hours</td>
                    <td className="py-4 px-6">Timestamped ticket system</td>
                    <td className="py-4 px-6">Business hours</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td colSpan={4} className="py-4 px-6 font-bold text-gray-700">Scheduled Maintenance</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 pl-12">- Notification</td>
                    <td className="py-4 px-6">7 days in advance</td>
                    <td className="py-4 px-6">Email notification</td>
                    <td className="py-4 px-6">As needed</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 pl-12">- Maintenance Window</td>
                    <td className="py-4 px-6">Minimum 2 hours</td>
                    <td className="py-4 px-6">Uptime monitoring tool</td>
                    <td className="py-4 px-6">As needed</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td colSpan={4} className="py-4 px-6 font-bold text-gray-700">Data Security</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 pl-12">- Data Handling</td>
                    <td className="py-4 px-6">Industry-standard practices</td>
                    <td className="py-4 px-6">Internal audits</td>
                    <td className="py-4 px-6">Quarterly</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 pl-12">- Security Measures</td>
                    <td className="py-4 px-6">Regular vulnerability scans</td>
                    <td className="py-4 px-6">Penetration testing</td>
                    <td className="py-4 px-6">Annually</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <CtaSection />
      <Footer />
    </>
  );
};

export default ServiceLevelAgreementPage;
