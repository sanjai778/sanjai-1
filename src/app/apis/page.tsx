"use client"; // ESSENTIAL: This directive marks the component for client-side rendering.

import React from 'react';
import Image from 'next/image';
import './api.css';
import {
  WrenchScrewdriverIcon,
  CheckBadgeIcon,
  BellAlertIcon,
  CameraIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  BellIcon,
  UserPlusIcon,
  UsersIcon,
  QrCodeIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ChartPieIcon,
  PencilSquareIcon,
  DocumentChartBarIcon,
  EyeIcon,
  TruckIcon,
  BuildingOffice2Icon,
  ComputerDesktopIcon,
  UserGroupIcon,
  TagIcon,
  FunnelIcon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
// --- MAIN PAGE COMPONENT ---
const ApiPage: React.FC = () => {
  return (
    <>
      
      {/* --- Section 1: Hero --- */}
      <section id="sub_page_hero_banner">
        <div className="container">
          <div className="row banner-top-margin">
            <div className="col-lg-6">
              <div className="banner-text">
                <h2 className="section_title">
                  <span className="section_tagline">Api template</span>
                  Easily see which assets are assigned.
                </h2>
                <p>Recent activity is visible at a glance, as well as an overview of your assets.</p>
                <div className="button_col">
                  <a href="https://app.visitdesk.io/signup" className="btn btn-primary">Signup For Free!</a>
                  <a href="https://onfra.io/talk-to-an-expert/" className="btn btn-outline-primary">Talk to Expert</a>
                </div>
                <div className="notices">
                  <span><Image src="/images/icons/check-circle.svg" width={20} height={20} alt="check mark" style={{ marginRight: '8px' }}/>No Credit Card Required</span>
                  <span><Image src="/images/icons/check-circle.svg" width={20} height={20} alt="check mark" style={{ marginRight: '8px' }}/>7days Subscription Free</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {/* NOTE: Make sure this image exists in your /public/images/ folder */}
              <Image src="/images/api-hero.png" alt="visitor management dashboard" width={550} height={500} style={{ maxWidth: '100%', height: 'auto' }}/>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Material Gate Pass Features --- */}
      <section id="overview_section" className="prototype_service_info">
        <div className="container">
          <div className="section_header">
            <h2 className="section_title">Features of Material Gate Pass Management System</h2>
          </div>
          <div className="row p_service_info">
                    <div className="col-lg-4 col-sm-6">
                        <div className="p_service_item p_service_item100 pr_70">
                            
                            <div className="icon icon_one"><WrenchScrewdriverIcon className="features_icon" /></div>
                            <h3 className="f_600 f_p t_color3">Add/Remove Fields</h3>
                            <p className="f_400">The requirements for various gate passes vary. As a result, the data to be entered in the pass varies. Custom fields can be simply added or removed from our material gate pass management system to gather diverse data for your business's specific needs. </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="p_service_item p_service_item100 pl_50 pr_20">
                            <div className="icon icon_one"><CheckBadgeIcon className="features_icon" /></div>
                            <h3 className="f_600 f_p t_color3">Approver Workflow</h3>
                            <p className="f_400">You have complete control over the workflow. Once a gate pass request is submitted, it must be approved by many layers of authority. For particular policy needs, our gate pass management system may simply be designed to add/remove anybody at several levels for simultaneous or sequential approvals.
 </p>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6">
                        <div className="p_service_item p_service_item100 pl_70">
                            <div className="icon icon_one"><BellAlertIcon className="features_icon" /></div>
                            <h3 className="f_600 f_p t_color3">Alerts & Reminders</h3>
                            <p className="f_400">To automate a gate pass procedure, you'll need alerts and notifications. Initiators, approvers, suppliers, security, or the recipient can all get mobile and email notifications and reminders.If a returnable item isn't returned on time, you can quickly escalate the situation.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="p_service_item p_service_item100 pr_70">
                            <div className="icon icon_one"><CameraIcon className="features_icon" /></div>
                            <h3 className="f_600 f_p t_color3">Capture Material Details</h3>
                            <p className="f_400">Take as many pictures as you like. Track the substance at any point throughout its journey. Keep track of material quantities, a photograph of the material, the vendor's photo ID, serial numbers, and other details as needed. QR codes aid in the identification of the material.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="p_service_item p_service_item100 pl_50 pr_20">
                            <div className="icon icon_one"><MagnifyingGlassIcon className="features_icon" /></div>
                            <h3 className="f_600 f_p t_color3">Identify Each Material</h3>
                            <p className="f_400">Each material at each stage of the gate pass process can be easily identifiable by all parties involved in a digital material gate pass management programme. Before digitally approving a content, approvers can view it. They can be identified by barcode or QR code readers by dispatch personnel/receivers.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="p_service_item p_service_item100 pl_70">
                            <div className="icon icon_one"><ChartBarIcon className="features_icon" /></div>
                            <h3 className="f_600 f_p t_color3">Reports & Analytics</h3>
                            <p className="f_400">Throughout the process, every material gate pass data is turned into different MIS reports and analytics. They can assist you in making well-informed judgments.You can quickly see how many materials are out for intra-company transfer, how many are due back by a specific date, and so on.</p>
                        </div>
                    </div>
                </div>
        </div>
      </section>

      {/* --- Section 3: More Features --- */}
      <section id="cool-features">
        <div className="container">
          <div className="section_header">
            <h2 className="section_title">More Features</h2>
          </div>
          <div className="row">
           
      <div className="col-md-2 col-6">
        <div className="feature-item">
          <div className="qs"> 
          <BellIcon className="more-features-icon" />
            <p className="feature-icon-title">
            Instant Notification
            </p>
            <span className="popover above">
              <h3 className="feature-title">Instant Notification </h3>
              <p>Instantly notifies the host on the entry of visitors; thereby saving a lot of time.</p>
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-2 col-6">
        <div className="feature-item">
          <div className="qs"> 
          <UserPlusIcon className="more-features-icon" />
            <p className="feature-icon-title">
              Invite Guest
            </p>
            <span className="popover above">
              <h3 className="feature-title">Invite Guest </h3>
              <p>Allows you to send customized invitation to guest directly through Onfra</p>
            </span>
          </div>
        </div>
      </div>


      <div className="col-md-2 col-6">
        <div className="feature-item">
          <div className="qs"> 
          <UsersIcon className="more-features-icon" />
            <p className="feature-icon-title">
            Bulk Invites
            </p>
            <span className="popover above">
              <h3 className="feature-title">Bulk Invites </h3>
              <p>Onfra allows you to send bulk invites to a number of visitors in one click just by uploading a spreadsheet with the names of the invitees</p>
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-2 col-6">
        <div className="feature-item">
          <div className="qs"> 
          <QrCodeIcon className="more-features-icon" />
            <p className="feature-icon-title">
            QR Checkin
            </p>
            <span className="popover above">
              <h3 className="feature-title">QR Checkin </h3>
              <p>Allows faster and contact -less check in by scanning the QR code</p>
            </span>
          </div>
        </div>
      </div>


      <div className="col-md-2 col-6">
        <div className="feature-item">
          <div className="qs"> 
          <ShieldCheckIcon className="more-features-icon" />
            <p className="feature-icon-title">
              Real-time Access Control
            </p>
            <span className="popover above">
              <h3 className="feature-title">Real-time Access Control </h3>
              <p>Enables you to check visitor history records that are updated from time to time</p>
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-2 col-6">
        <div className="feature-item">
          <div className="qs"> 
          <CheckCircleIcon className="more-features-icon" />
            <p className="feature-icon-title">
            Approve/Reject Visitor
            </p>
            <span className="popover above">
              <h3 className="feature-title">Approve/Reject Visitor </h3>
              <p>The host can permit or deny the request of visitors</p>
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-2 col-6">
        <div className="feature-item">
          <div className="qs"> 
          <ChartPieIcon className="more-features-icon" />
            <p className="feature-icon-title">
              Activity Dashboard
            </p>
            <span className="popover above">
              <h3 className="feature-title">Activity Dashboard </h3>
              <p>Views the day's no of check in, check-out, on premises visitors, expected visitors, pending host approvals etc</p>
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-2 col-6">
        <div className="feature-item">
          <div className="qs"> 
          <UsersIcon className="more-features-icon" />
            <p className="feature-icon-title">
            Manage User Roles
            </p>
            <span className="popover above">
              <h3 className="feature-title">Manage User Roles </h3>
              <p>Register your employees with different roles such as manager, staff, host etc</p>
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-2 col-6">
        <div className="feature-item">
          <div className="qs"> 
          <PencilSquareIcon className="more-features-icon" />
            <p className="feature-icon-title">
            NDA Signing
            </p>
            <span className="popover above">
              <h3 className="feature-title">NDA Signing </h3>
              <p>Allows you to upload nda and other legal documents for the visitors to sign prior to their visit</p>
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-2 col-6">
        <div className="feature-item">
          <div className="qs"> 
          <DocumentChartBarIcon className="more-features-icon" />
            <p className="feature-icon-title">
              Report Generation
            </p>
            <span className="popover above">
              <h3 className="feature-title">Report Generation </h3>
              <p>Generate visitor reports to optimize check in process</p>
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-2 col-6">
        <div className="feature-item">
          <div className="qs"> 
          <EyeIcon className="more-features-icon" />
            <p className="feature-icon-title">
              Watchlist
            </p>
            <span className="popover above">
              <h3 className="feature-title">Watchlist </h3>
              <p>Get instantly notified on the arrival of an expected celebrity ora blacklisted person</p>
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-2 col-6">
        <div className="feature-item">
          <div className="qs"> 
          <TruckIcon className="more-features-icon" />
            <p className="feature-icon-title">
              Manage Deliveries
            </p>
            <span className="popover above">
              <h3 className="feature-title">Manage Deliveries </h3>
              <p>Track and notify the respective employee on receiving a parcel deliverey with Visitdesk's delivery management</p>
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-2 col-6">
        <div className="feature-item">
          <div className="qs"> 
          <BuildingOffice2Icon className="more-features-icon" />
            <p className="feature-icon-title">
              Branches Setup
            </p>
            <span className="popover above">
              <h3 className="feature-title">Branches Setup </h3>
              <p>Onfra gives the user with ‘Host’ role, additional features like assigning primary and secondary branches. This has been enabled, keeping in mind, the need for a host to access more than a single branch.</p>
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-2 col-6">
        <div className="feature-item">
          <div className="qs"> 
          <ComputerDesktopIcon className="more-features-icon" />
            <p className="feature-icon-title">
              Multi-desk Configuration
            </p>
            <span className="popover above">
              <h3 className="feature-title">Multi-desk Configuration </h3>
              <p>Configure multiple reception desk for every lobby in your enterprise.</p>
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-2 col-6">
        <div className="feature-item">
          <div className="qs"> 
          <WrenchScrewdriverIcon className="more-features-icon" />
            <p className="feature-icon-title">
              Custom Fields
            </p>
            <span className="popover above">
              <h3 className="feature-title">Custom Fields </h3>
              <p>Add additional personalized custom fields of your choice to fetch relevant data from users</p>
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-2 col-6">
        <div className="feature-item">
          <div className="qs"> 
          <UserGroupIcon className="more-features-icon" />
            <p className="feature-icon-title">
              Visitor Configurations
            </p>
            <span className="popover above">
              <h3 className="feature-title">Visitor Configurations </h3>
              <p>Customize your Visitor permissions by configuring different modes of check-in for different types of Visitors</p>
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-2 col-6">
        <div className="feature-item">
          <div className="qs"> 
          <TagIcon className="more-features-icon" />
            <p className="feature-icon-title">
              Purpose of Visit
            </p>
            <span className="popover above">
              <h3 className="feature-title">Purpose of Visit </h3>
              <p>Categorize your visitors based on their purpose/reason for visit such as Official, Personal, Interview, Sales, Marketing and others</p>
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-2 col-6">
        <div className="feature-item">
          <div className="qs"> 
          <FunnelIcon className="more-features-icon" />
            <p className="feature-icon-title">
             Filter & Export
            </p>
            <span className="popover above">
              <h3 className="feature-title">Filter & Export </h3>
              <p>Check, filter and export visitor list</p>
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-2 col-6">
        <div className="feature-item">
          <div className="qs"> 
          <ChatBubbleLeftRightIcon className="more-features-icon" />
            <p className="feature-icon-title">
              Custom Messages
            </p>
            <span className="popover above">
              <h3 className="feature-title">Custom Messages </h3>
              <p>Customize the Welcome message to be displayed on the successful check-in of visitors.</p>
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-2 col-6">
        <div className="feature-item">
          <div className="qs"> 
          <Cog6ToothIcon className="more-features-icon" />
            <p className="feature-icon-title">
            Configure Workplace
            </p>
            <span className="popover above">
              <h3 className="feature-title">Configure Workplace </h3>
              <p>Give a professional look to your Visitor management account by configuring business setup with your company's logo, website address, location and timezone</p>
            </span>
          </div>
        </div>
      </div>
    


		</div>
        </div>
      </section>

      {/* --- Section 4: Pricing --- */}
      <section id="pricing">
        <div className="container">
          <div className="section_header">
            <h2 className="section_title">Our Pricing</h2>
          </div>
          <div className="pricing-container">
            {/* Basic Plan */}
            <div className="pricing-item">
              <div className="pricing-header">
                <h3 className="pricing-plan-name">Basic</h3>
                <div className="wave-divider">
                  <svg viewBox="0 0 500 30" preserveAspectRatio="none" style={{display: 'block'}}><path d="M0,30 Q150,0 250,15 T500,10 V30 H0 Z" fill="#fff" opacity="0.3"></path><path d="M0,30 Q100,5 250,12 T500,20 V30 H0 Z" fill="#fff" opacity="0.5"></path><path d="M0,30 Q125,10 250,20 T500,15 V30 H0 Z" fill="#fff"></path></svg>
                </div>
              </div>
              <ul className="pricing-features">
                <li className="feature-item">100 Visits/ month</li><li className="feature-item">1 Branch</li><li className="feature-item">1 Desk</li><li className="feature-item">1 Device*</li><li className="feature-item">5 User</li><li className="feature-item">1 Month Data Storage</li><li className="feature-item see-all-features"><a href="/plans-features/">See All Features</a></li>
              </ul>
              <a href="https://app.visitdesk.io/signup" className="pricing-action">Signup Now</a>
            </div>
            {/* Startup Plan */}
            <div className="pricing-item">
              <div className="pricing-header">
                <h3 className="pricing-plan-name">Startup</h3>
                <div className="wave-divider">
                  <svg viewBox="0 0 500 30" preserveAspectRatio="none" style={{display: 'block'}}><path d="M0,30 Q150,0 250,15 T500,10 V30 H0 Z" fill="#fff" opacity="0.3"></path><path d="M0,30 Q100,5 250,12 T500,20 V30 H0 Z" fill="#fff" opacity="0.5"></path><path d="M0,30 Q125,10 250,20 T500,15 V30 H0 Z" fill="#fff"></path></svg>
                </div>
              </div>
              <ul className="pricing-features">
                <li className="feature-item">1000 Visits/ month</li><li className="feature-item">1 Branch</li><li className="feature-item">1 Desk</li><li className="feature-item">1 Device*</li><li className="feature-item">5 Users</li><li className="feature-item">1 Year Data Storage</li><li className="feature-item see-all-features"><a href="/plans-features/">See All Features</a></li>
              </ul>
              <a href="https://app.visitdesk.io/signup" className="pricing-action">Signup Now</a>
            </div>
            {/* Professional Plan */}
            <div className="pricing-item featured">
              <div className="pricing-header">
                <h3 className="pricing-plan-name">Professional</h3>
                <div className="wave-divider">
                  <svg viewBox="0 0 500 30" preserveAspectRatio="none" style={{display: 'block'}}><path d="M0,30 Q150,0 250,15 T500,10 V30 H0 Z" fill="#fff" opacity="0.3"></path><path d="M0,30 Q100,5 250,12 T500,20 V30 H0 Z" fill="#fff" opacity="0.5"></path><path d="M0,30 Q125,10 250,20 T500,15 V30 H0 Z" fill="#fff"></path></svg>
                </div>
              </div>
              <ul className="pricing-features">
                <li className="feature-item">3000 Visits/ month</li><li className="feature-item">3 Branches</li><li className="feature-item">3 Desks</li><li className="feature-item">3 Devices*</li><li className="feature-item">15 Users</li><li className="feature-item">Unlimited Storage</li><li className="feature-item see-all-features"><a href="/plans-features/">See All Features</a></li>
              </ul>
              <a href="https://app.visitdesk.io/signup" className="pricing-action">Signup Now</a>
            </div>
            {/* Enterprise Plan */}
            <div className="pricing-item">
              <div className="pricing-header">
                <h3 className="pricing-plan-name">Enterprise</h3>
                <div className="wave-divider">
                  <svg viewBox="0 0 500 30" preserveAspectRatio="none" style={{display: 'block'}}><path d="M0,30 Q150,0 250,15 T500,10 V30 H0 Z" fill="#fff" opacity="0.3"></path><path d="M0,30 Q100,5 250,12 T500,20 V30 H0 Z" fill="#fff" opacity="0.5"></path><path d="M0,30 Q125,10 250,20 T500,15 V30 H0 Z" fill="#fff"></path></svg>
                </div>
              </div>
              <ul className="pricing-features">
                <li className="feature-item">Unlimited Visits</li><li className="feature-item">Unlimited Branches</li><li className="feature-item">Unlimited Desks</li><li className="feature-item">Unlimited Devices*</li><li className="feature-item">Unlimited Users</li><li className="feature-item">Unlimited Storage</li><li className="feature-item see-all-features"><a href="/plans-features/">See All Features</a></li>
              </ul>
              <a href="https://www.onfra.io/get-quotes/" className="pricing-action">Get Quote</a>
            </div>
          </div>
          <p className="non-profit-note">Onfra supports all non-profits with <strong>20% off on all the plans!</strong></p>
        </div>
      </section>

    </>
  );
};

export default ApiPage;
