"use client"; // Required for styled-jsx in Next.js App Router

import React from 'react';

const FeaturesSection = () => {
  return (
    <>
      <style jsx>{`
        /* Features Section Styling */
        .prototype_service_info {
            padding: 80px 0;
            background-color: var(--background-light, #f9f9f9);
        }

        .container {
            max-width: 1140px;
            margin: 0 auto;
            padding: 0 15px;
        }

        .row {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -15px;
        }

        .col-lg-8, .col-lg-2, .col-lg-4, .col-sm-6 {
            padding: 0 15px;
            box-sizing: border-box;
        }

        /* Basic Grid system for responsiveness */
        .col-lg-8 { width: 66.66%; }
        .col-lg-2 { width: 16.66%; }
        .col-lg-4 { width: 33.33%; }
        
        @media (max-width: 992px) {
            .col-lg-4 {
                width: 50%; /* 2 columns on medium screens */
            }
        }
        
        @media (max-width: 768px) {
            .col-lg-4 {
                width: 100%; /* 1 column on small screens */
            }
        }


        .its_title_join {
            font-size: 2.5rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 60px;
            color: var(--text-dark, #222);
            font-family: sans-serif;
        }

        .p_service_item {
            text-align: center;
            margin-bottom: 40px;
            padding: 15px;
        }

        .p_service_item .icon {
            background-color: #e6f7ee;
            border-radius: 15px;
            width: 80px;
            height: 80px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
        }

        .p_service_item .features_icon {
            color: var(--primary-green, #29d57a);
            font-size: 2.5rem;
        }

        .p_service_item h4 {
            font-size: 1.4rem;
            font-weight: 600;
            margin-bottom: 10px;
            color: var(--text-dark, #222);
            font-family: sans-serif;
        }

        .p_service_item p {
            color: var(--text-light, #666);
            font-family: sans-serif;
            line-height: 1.6;
        }
      `}</style>
      
      <section id="overview_section" className="prototype_service_info">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="its_text-content">
                <h5 className="its_title_join">Features of Material Gate Pass Management System</h5>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
          <div className="row p_service_info">
            <div className="col-lg-4 col-sm-6">
              <div className="p_service_item">
                <div className="icon icon_one"><i className="features_icon icon-visitdesk_icons_0048"></i></div>
                <div>
                  <h4 className="f_600 f_p t_color3">Add/Remove Fields</h4>
                  <p className="f_400">The requirements for various gate passes vary. As a result, the data to be entered in the pass varies. Custom fields can be simply added or removed from our material gate pass management system to gather diverse data for your business's specific needs.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="p_service_item">
                <div className="icon icon_one"><i className="features_icon icon-visitdesk_icons_0013"></i></div>
                <div>
                  <h4 className="f_600 f_p t_color3">Approver Workflow</h4>
                  <p className="f_400">You have complete control over the workflow. Once a gate pass request is submitted, it must be approved by many layers of authority. For particular policy needs, our gate pass management system may simply be designed to add/remove anybody at several levels for simultaneous or sequential approvals.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="p_service_item">
                <div className="icon icon_one"><i className="features_icon icon-visitdesk_icons_0033"></i></div>
                <div>
                  <h4 className="f_600 f_p t_color3">Alerts & Reminders</h4>
                  <p className="f_400">To automate a gate pass procedure, you'll need alerts and notifications. Initiators, approvers, suppliers, security, or the recipient can all get mobile and email notifications and reminders.If a returnable item isn't returned on time, you can quickly escalate the situation.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="p_service_item">
                <div className="icon icon_one"><i className="features_icon icon-visitdesk_icons_0045"></i></div>
                <div>
                  <h4 className="f_600 f_p t_color3">Capture Material Details</h4>
                  <p className="f_400">Take as many pictures as you like. Track the substance at any point throughout its journey. Keep track of material quantities, a photograph of the material, the vendor's photo ID, serial numbers, and other details as needed. QR codes aid in the identification of the material.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="p_service_item">
                <div className="icon icon_one"><i className="features_icon icon-visitdesk_icons_0061"></i></div>
                <div>
                  <h4 className="f_600 f_p t_color3">Identify Each Material</h4>
                  <p className="f_400">Each material at each stage of the gate pass process can be easily identifiable by all parties involved in a digital material gate pass management programme. Before digitally approving a content, approvers can view it. They can be identified by barcode or QR code readers by dispatch personnel/receivers.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="p_service_item">
                <div className="icon icon_one"><i className="features_icon icon-visitdesk_icons_0139"></i></div>
                <div>
                  <h4 className="f_600 f_p t_color3">Reports & Analytics</h4>
                  <p className="f_400">Throughout the process, every material gate pass data is turned into different MIS reports and analytics. They can assist you in making well-informed judgments.You can quickly see how many materials are out for intra-company transfer, how many are due back by a specific date, and so on.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
