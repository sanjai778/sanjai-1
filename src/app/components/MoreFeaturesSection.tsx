"use client"; // Required for styled-jsx and hover effects in Next.js App Router

import React from 'react';

const MoreFeaturesSection = () => {
  return (
    <>
      <style jsx>{`
        /* More Features Section General Styling */
        #cool-features {
          padding: 80px 0;
          font-family: sans-serif;
        }

        .container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 15px;
        }

        #cool-features h3 {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 30px;
          color: var(--text-dark, #222);
        }

        /* Basic Grid System */
        .row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
        }

        .col-md-2, .col-6 {
          padding: 0 15px;
          box-sizing: border-box;
          margin-bottom: 40px;
        }

        /* 6 columns on medium screens and up */
        .col-md-2 {
          flex: 0 0 16.66667%;
          max-width: 16.66667%;
        }

        /* 2 columns on small screens */
        @media (max-width: 768px) {
          .col-md-2 {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }
        
        .feature-item {
          text-align: center;
        }

        .more-features-icon {
          font-size: 3rem;
          color: var(--primary-green, #29d57a);
        }

        .feature-icon-title {
          font-weight: 500;
          margin-top: 15px;
          color: var(--text-dark, #333);
        }

        /* Popover Styling */
        .qs {
          position: relative;
          cursor: pointer;
        }

        .popover {
          visibility: hidden;
          opacity: 0;
          position: absolute;
          bottom: 115%; /* Position above the icon */
          left: 50%;
          transform: translateX(-50%);
          background-color: #fff;
          color: #333;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          width: 220px;
          text-align: center;
          z-index: 10;
          transition: opacity 0.3s ease, visibility 0.3s ease;
          font-size: 0.9rem;
        }
        
        /* Popover Arrow */
        .popover::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: #fff transparent transparent transparent;
        }

        .qs:hover .popover {
          visibility: visible;
          opacity: 1;
        }

        .popover .feature-title {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 8px;
            color: #000;
        }
      `}</style>
      
      <section id="cool-features">
        <div className="container" id="features_section">
          <div className="row">
            <div className="col-md-12">
              <h3 style={{ textAlign: 'center', paddingBottom: '30px' }}>More Features</h3>
            </div>
          </div>

          <div className="row">
            {/* Feature Item 1 */}
            <div className="col-md-2 col-6">
              <div className="feature-item">
                <div className="qs">
                  <span className="icon-visitdesk_icons_0069 more-features-icon"></span>
                  <p className="feature-icon-title">Instant Notification</p>
                  <span className="popover above">
                    <h3 className="feature-title">Instant Notification</h3>
                    Instantly notifies the host on the entry of visitors; thereby saving a lot of time.
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Item 2 */}
            <div className="col-md-2 col-6">
              <div className="feature-item">
                <div className="qs">
                  <span className="icon-visitdesk_icons_0072 more-features-icon"></span>
                  <p className="feature-icon-title">Invite Guest</p>
                  <span className="popover above">
                    <h3 className="feature-title">Invite Guest</h3>
                    Allows you to send customized invitation to guest directly through Onfra.
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Item 3 */}
            <div className="col-md-2 col-6">
              <div className="feature-item">
                <div className="qs">
                  <span className="icon-visitdesk_icons_0037 more-features-icon"></span>
                  <p className="feature-icon-title">Bulk Invites</p>
                  <span className="popover above">
                    <h3 className="feature-title">Bulk Invites</h3>
                    Onfra allows you to send bulk invites to a number of visitors in one click.
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Item 4 */}
            <div className="col-md-2 col-6">
              <div className="feature-item">
                <div className="qs">
                  <span className="icon-visitdesk_icons_0035 more-features-icon"></span>
                  <p className="feature-icon-title">QR Checkin</p>
                  <span className="popover above">
                    <h3 className="feature-title">QR Checkin</h3>
                    Allows faster and contact-less check in by scanning the QR code.
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Item 5 */}
            <div className="col-md-2 col-6">
              <div className="feature-item">
                <div className="qs">
                  <span className="icon-visitdesk_icons_0068 more-features-icon"></span>
                  <p className="feature-icon-title">Real-time Access Control</p>
                  <span className="popover above">
                    <h3 className="feature-title">Real-time Access Control</h3>
                    Enables you to check visitor history records that are updated from time to time.
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Item 6 */}
            <div className="col-md-2 col-6">
              <div className="feature-item">
                <div className="qs">
                  <span className="icon-visitdesk_icons_0040 more-features-icon"></span>
                  <p className="feature-icon-title">Approve/Reject Visitor</p>
                  <span className="popover above">
                    <h3 className="feature-title">Approve/Reject Visitor</h3>
                    The host can permit or deny the request of visitors.
                  </span>
                </div>
              </div>
            </div>
            
            {/* Row 2 */}

            {/* Feature Item 7 */}
            <div className="col-md-2 col-6">
              <div className="feature-item">
                <div className="qs">
                  <span className="icon-visitdesk_icons_0039 more-features-icon"></span>
                  <p className="feature-icon-title">Activity Dashboard</p>
                  <span className="popover above">
                    <h3 className="feature-title">Activity Dashboard</h3>
                    Views the day's check-ins, check-outs, on-premises visitors, expected visitors, etc.
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Item 8 */}
            <div className="col-md-2 col-6">
              <div className="feature-item">
                <div className="qs">
                  <span className="icon-visitdesk_icons_0041 more-features-icon"></span>
                  <p className="feature-icon-title">Manage User Roles</p>
                  <span className="popover above">
                    <h3 className="feature-title">Manage User Roles</h3>
                    Register your employees with different roles such as manager, staff, host etc.
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Item 9 */}
            <div className="col-md-2 col-6">
              <div className="feature-item">
                <div className="qs">
                  <span className="icon-visitdesk_icons_0070 more-features-icon"></span>
                  <p className="feature-icon-title">NDA Signing</p>
                  <span className="popover above">
                    <h3 className="feature-title">NDA Signing</h3>
                    Allows you to upload NDA and other legal documents for visitors to sign.
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Item 10 */}
            <div className="col-md-2 col-6">
              <div className="feature-item">
                <div className="qs">
                  <span className="icon-visitdesk_icons_0042 more-features-icon"></span>
                  <p className="feature-icon-title">Report Generation</p>
                  <span className="popover above">
                    <h3 className="feature-title">Report Generation</h3>
                    Generate visitor reports to optimize the check-in process.
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Item 11 */}
            <div className="col-md-2 col-6">
              <div className="feature-item">
                <div className="qs">
                  <span className="icon-visitdesk_icons_0044 more-features-icon"></span>
                  <p className="feature-icon-title">Watchlist</p>
                  <span className="popover above">
                    <h3 className="feature-title">Watchlist</h3>
                    Get instantly notified on the arrival of an expected celebrity or a blacklisted person.
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Item 12 */}
            <div className="col-md-2 col-6">
              <div className="feature-item">
                <div className="qs">
                  <span className="icon-visitdesk_icons_0045 more-features-icon"></span>
                  <p className="feature-icon-title">Manage Deliveries</p>
                  <span className="popover above">
                    <h3 className="feature-title">Manage Deliveries</h3>
                    Track and notify the respective employee on receiving a parcel delivery.
                  </span>
                </div>
              </div>
            </div>

            {/* Row 3 */}

            {/* Feature Item 13 */}
            <div className="col-md-2 col-6">
              <div className="feature-item">
                <div className="qs">
                  <span className="icon-visitdesk_icons_0046 more-features-icon"></span>
                  <p className="feature-icon-title">Branches Setup</p>
                  <span className="popover above">
                    <h3 className="feature-title">Branches Setup</h3>
                    Assign hosts to primary and secondary branches, allowing access to more than a single branch.
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Item 14 */}
            <div className="col-md-2 col-6">
              <div className="feature-item">
                <div className="qs">
                  <span className="icon-visitdesk_icons_0047 more-features-icon"></span>
                  <p className="feature-icon-title">Multi-desk Configuration</p>
                  <span className="popover above">
                    <h3 className="feature-title">Multi-desk Configuration</h3>
                    Configure multiple reception desks for every lobby in your enterprise.
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Item 15 */}
            <div className="col-md-2 col-6">
              <div className="feature-item">
                <div className="qs">
                  <span className="icon-visitdesk_icons_0048 more-features-icon"></span>
                  <p className="feature-icon-title">Custom Fields</p>
                  <span className="popover above">
                    <h3 className="feature-title">Custom Fields</h3>
                    Add additional personalized custom fields to fetch relevant data from users.
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Item 16 */}
            <div className="col-md-2 col-6">
              <div className="feature-item">
                <div className="qs">
                  <span className="icon-visitdesk_icons_0049 more-features-icon"></span>
                  <p className="feature-icon-title">Visitor Configurations</p>
                  <span className="popover above">
                    <h3 className="feature-title">Visitor Configurations</h3>
                    Customize permissions by configuring different check-in modes for different visitor types.
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Item 17 */}
            <div className="col-md-2 col-6">
              <div className="feature-item">
                <div className="qs">
                  <span className="icon-visitdesk_icons_0050 more-features-icon"></span>
                  <p className="feature-icon-title">Purpose of Visit</p>
                  <span className="popover above">
                    <h3 className="feature-title">Purpose of Visit</h3>
                    Categorize your visitors based on their purpose for visiting.
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Item 18 */}
            <div className="col-md-2 col-6">
              <div className="feature-item">
                <div className="qs">
                  <span className="icon-visitdesk_icons_0036 more-features-icon"></span>
                  <p className="feature-icon-title">Filter & Export</p>
                  <span className="popover above">
                    <h3 className="feature-title">Filter & Export</h3>
                    Check, filter, and export your visitor list.
                  </span>
                </div>
              </div>
            </div>
            
            {/* Row 4 */}

            {/* Feature Item 19 */}
            <div className="col-md-2 col-6">
              <div className="feature-item">
                <div className="qs">
                  <span className="icon-visitdesk_icons_0033 more-features-icon"></span>
                  <p className="feature-icon-title">Custom Messages</p>
                  <span className="popover above">
                    <h3 className="feature-title">Custom Messages</h3>
                    Customize the Welcome message to be displayed on successful check-in.
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Item 20 */}
            <div className="col-md-2 col-6">
              <div className="feature-item">
                <div className="qs">
                  <span className="icon-visitdesk_icons_0067 more-features-icon"></span>
                  <p className="feature-icon-title">Configure Workplace</p>
                  <span className="popover above">
                    <h3 className="feature-title">Configure Workplace</h3>
                    Configure your setup with your company's logo, website, location and timezone.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default MoreFeaturesSection;
