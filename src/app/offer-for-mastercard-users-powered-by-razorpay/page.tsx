'use client';

import React, { useState, useEffect } from 'react';
import Select, { MultiValue } from 'react-select';
import { FaUsers, FaClock, FaBoxOpen, FaCalendarAlt, FaIdBadge, FaCar, FaChartBar, FaTruckLoading, FaDesktop, FaTv, FaShieldAlt, FaGlobe, FaChartLine } from 'react-icons/fa';



// Define the type for our multi-select options
type ModuleOption = {
  value: string;
  label: string;
};

const moduleOptions: ModuleOption[] = [
  { value: 'Visitor', label: 'Visitor' },
  { value: 'Flexipass', label: 'Flexipass' },
  { value: 'Attendance', label: 'Attendance' },
  { value: 'Queue', label: 'Queue' },
  { value: 'Deliveries', label: 'Deliveries' },
  { value: 'Material Pass', label: 'Material Pass' },
  { value: 'Rooms', label: 'Rooms' },
  { value: 'Desks', label: 'Desks' },
  { value: 'Vehicle Pass', label: 'Vehicle Pass' },
  { value: 'Signage', label: 'Signage' },
];

const OfferForMastercardUsersPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [numEmployees, setNumEmployees] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedModules, setSelectedModules] = useState<MultiValue<ModuleOption>>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = {
      fullName,
      companyName,
      numEmployees,
      email,
      phone,
      selectedModules: selectedModules.map(option => option.value),
    };
    console.log('Form Submitted:', formData);
    alert('Form submitted! Check the console for the data.');
  };

  return (
    <div className="bg-white text-[#333] font-normal overflow-x-hidden leading-[1.6]">

      {/* Section 1: Hero */}
      <section className="pt-[60px] md:pt-[100px] pb-[60px] md:pb-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-gray-800 leading-snug">
                Digitize Your Workplace<br /> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10c469] to-[#28d57a] pb-1">Onfra</span>
              </h1>
              <h2 className="font-normal mt-6 mb-4 text-2xl">
                Get 20% Off When You Pay with Mastercard
              </h2>
              <p className="max-w-md mx-auto lg:mx-0">
                Unlock an exclusive, limited-time offer to streamline your workplace management with Onfra. Enjoy 20% savings when you spend $900 or more on platform fees.
              </p>
              <div className="mt-6 flex flex-col items-center lg:items-start">
                <p className="text-sm text-gray-500 mb-2">Powered by</p>
                <div className="flex items-center gap-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png" alt="Mastercard Logo" className="max-h-[25px] w-auto" />
                  <span className="w-px h-5 bg-gray-300"></span>
                  <img src="https://razorpay.com/assets/razorpay-logo.svg" alt="Razorpay Logo" className="max-h-[25px] w-auto" />
                </div>
              </div>
            </div>
            <div id="onfraDiscount">
              <div className="bg-white rounded-xl p-10 shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-800">Claim Your 20% Savings</h2>
                  <p className="text-gray-500 text-base">Fill in your details and get started</p>
                </div>
                <form onSubmit={handleFormSubmit} className="mt-6" noValidate>
                  <div className="mb-4">
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full bg-gray-50 border border-gray-200 p-3 h-12 rounded-lg text-base focus:bg-white focus:border-[#10c469] focus:shadow-[0_0_0_3px_rgba(16,196,105,0.2)] outline-none" placeholder="Full Name" required />
                  </div>
                  <div className="mb-4">
                    <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full bg-gray-50 border border-gray-200 p-3 h-12 rounded-lg text-base focus:bg-white focus:border-[#10c469] focus:shadow-[0_0_0_3px_rgba(16,196,105,0.2)] outline-none" placeholder="Company Name" required />
                  </div>
                  <div className="mb-4">
                    <select value={numEmployees} onChange={(e) => setNumEmployees(e.target.value)} className="w-full bg-gray-50 border border-gray-200 p-3 h-12 rounded-lg text-base focus:bg-white focus:border-[#10c469] focus:shadow-[0_0_0_3px_rgba(16,196,105,0.2)] outline-none" required>
                      <option value="" disabled>Number Of Employees</option>
                      <option value="1-50">1 - 50</option>
                      <option value="51-200">51 - 200</option>
                      <option value="201-1000">201 - 1,000</option>
                      <option value="1001-5000">1,001 - 5,000</option>
                      <option value="5001-10000">5,001 - 10,000</option>
                      <option value="10000+">More than 10,000</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-50 border border-gray-200 p-3 h-12 rounded-lg text-base focus:bg-white focus:border-[#10c469] focus:shadow-[0_0_0_3px_rgba(16,196,105,0.2)] outline-none" placeholder="Email Address" required />
                  </div>
                  <div className="mb-4">
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-gray-50 border border-gray-200 p-3 h-12 rounded-lg text-base focus:bg-white focus:border-[#10c469] focus:shadow-[0_0_0_3px_rgba(16,196,105,0.2)] outline-none" placeholder="Phone Number" required />
                  </div>
                  <div className="mb-4">
                    {isClient && (
                      <Select
                        isMulti
                        name="modules"
                        options={moduleOptions}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        placeholder="Select Modules"
                        value={selectedModules}
                        onChange={setSelectedModules}
                        required
                      />
                    )}
                  </div>
                  <button type="submit" className="w-full bg-[#10c469] text-white py-3.5 px-7 font-semibold text-base rounded-lg border-none transition-all duration-300 ease-in-out transform hover:bg-[#0e9f58] hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(16,196,105,0.3)]">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Features */}
      <section className="py-[60px] md:py-20 bg-gray-50" id="Features">
        <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Platform Features</h2>
                <p className="text-gray-600 max-w-xl mx-auto">A comprehensive suite of tools to manage every aspect of your workplace efficiently.</p>
            </div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {/* Feature items mapped for cleaner code */}
                {[
                    { icon: <FaUsers />, title: 'Visitor', text: 'Manage visitor check-ins and track data securely.' },
                    { icon: <FaClock />, title: 'Attendance', text: 'Track employee attendance effortlessly and securely.' },
                    { icon: <FaBoxOpen />, title: 'Deliveries', text: 'Streamline package tracking and delivery notifications.' },
                    { icon: <FaCalendarAlt />, title: 'Rooms', text: 'Simplify meeting room bookings for better collaboration.' },
                    { icon: <FaIdBadge />, title: 'Flexipass', text: 'Streamline contractor access and pass management.' },
                    { icon: <FaCar />, title: 'Vehicle Pass', text: 'Control vehicle access with effective pass management.' },
                    { icon: <FaChartBar />, title: 'Queue', text: 'Enhance customer experience with efficient queues.' },
                    { icon: <FaTruckLoading />, title: 'Material Pass', text: 'Track all material movements with ease and accuracy.' },
                    { icon: <FaDesktop />, title: 'Desks', text: 'Manage desk reservations for a flexible workspace.' },
                    { icon: <FaTv />, title: 'Signage', text: 'Use digital signage for real-time information sharing.' },
                ].map((feature, index) => (
                    <div className="group" key={index}>
                        <div className="p-8 bg-white rounded-xl text-center h-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 ease-in-out border border-gray-100 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.07)]">
                            <div>
                                <div className="w-16 h-16 inline-flex items-center justify-center bg-[#e8f5e9] text-[#10c469] rounded-2xl text-3xl mx-auto mb-6 transition-all duration-300 ease-in-out group-hover:bg-[#10c469] group-hover:text-white">{feature.icon}</div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h4>
                                <p className="text-base text-gray-500 leading-relaxed mb-0">{feature.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Section 3: Pricing */}
      <section className="py-[60px] md:py-20" id="Plan">
        <div className="container">
            <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-center">
                    <div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-2">Easy Savings Specials Plan</h3>
                            <p className="text-gray-600">Get 20% off your yearly platform fee with a $900 USD minimum spend.</p>
                            <h4 className="text-[#10c469] font-bold text-left mt-6">What's Included</h4>
                            <ul className="list-none p-0 mt-4">
                                <li className="flex items-center gap-2 mb-4"><img className="w-5 h-5" src="https://onfra.io/wp-content/uploads/2019/01/success.svg" alt="yes"/> 20% discount on yearly platform fee</li>
                                <li className="flex items-center gap-2 mb-4"><img className="w-5 h-5" src="https://onfra.io/wp-content/uploads/2019/01/success.svg" alt="yes"/> Minimum $900 USD spend requirement</li>
                                <li className="flex items-center gap-2 mb-4"><img className="w-5 h-5" src="https://onfra.io/wp-content/uploads/2019/01/success.svg" alt="yes"/> Exclusive Mastercard partnership</li>
                                <li className="flex items-center gap-2 mb-4"><img className="w-5 h-5" src="https://onfra.io/wp-content/uploads/2019/01/success.svg" alt="yes"/> Secure and seamless payments</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
                            <p className="mb-0 text-sm">Yearly Platform Fee</p>
                            <div className="flex flex-col gap-2 my-2">
                                <div className="text-3xl font-semibold text-gray-400 line-through">$900</div>
                                <p className="mb-0 text-sm">Your Price (20% Off)</p>
                                <div className="text-5xl font-bold text-[#10c469] leading-none">$720</div>
                            </div>
                            <a href="#onfraDiscount" className="w-full bg-[#10c469] text-white py-3.5 px-7 font-semibold text-base rounded-lg border-none transition-all duration-300 ease-in-out transform hover:bg-[#0e9f58] hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(16,196,105,0.3)]">Get Started</a>
                            <p className="text-sm mb-0 mt-2">Invoices and receipts available for easy company reimbursement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className="py-[60px] md:py-20 bg-gray-100">
        <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800">How it works</h2>
                <p className="text-gray-600 max-w-xl mx-auto">Simple steps to confirm eligibility and claim 20% off with Mastercard via Razorpay.</p>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <div className="bg-white rounded-xl border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.05)] text-left flex flex-col p-6 h-full">
                        <span className="text-5xl font-bold text-gray-200 leading-none">01</span>
                        <h3 className="text-xl font-bold mb-3 mt-2">Fill eligibility form</h3>
                        <p className="text-base text-gray-500 flex-grow mb-4">Click “Get started” and fill the short form with your requirements to confirm eligibility.</p>
                    </div>
                </div>
                <div>
                    <div className="bg-white rounded-xl border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.05)] text-left flex flex-col p-6 h-full">
                        <span className="text-5xl font-bold text-gray-200 leading-none">02</span>
                        <h3 className="text-xl font-bold mb-3 mt-2">Receive quote</h3>
                        <p className="text-base text-gray-500 flex-grow mb-4">We'll email a personalized quotation based on the details you provided.</p>
                    </div>
                </div>
                <div>
                    <div className="bg-white rounded-xl border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.05)] text-left flex flex-col p-6 h-full">
                        <span className="text-5xl font-bold text-gray-200 leading-none">03</span>
                        <h3 className="text-xl font-bold mb-3 mt-2">Complete payment — get 20% off</h3>
                        <p className="text-base text-gray-500 flex-grow mb-4">Secure checkout powered by Razorpay. Use your Mastercard to automatically apply the 20% discount.</p>
                        <div className="flex items-center gap-4 mt-4">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png" alt="Mastercard Logo" className="max-h-5"/>
                            <img src="https://razorpay.com/assets/razorpay-logo.svg" alt="Razorpay Logo" className="max-h-5"/>
                        </div>
                    </div>
                </div>
                 <div>
                    <div className="bg-white rounded-xl border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.05)] text-left flex flex-col p-6 h-full">
                        <span className="text-5xl font-bold text-gray-200 leading-none">04</span>
                        <h3 className="text-xl font-bold mb-3 mt-2">Signup & enjoy</h3>
                        <p className="text-base text-gray-500 flex-grow mb-4">After payment, your eligibility will be confirmed and you'll receive order details and next steps.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Section 5: Why Choose Onfra + Mastercard */}
      <section className="py-[60px] md:py-20" id="WhyChoose">
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <img src="/uploads/2025/08/mastercard-offer.webp" alt="Mastercard Offer" className="w-full rounded-xl"/>
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Onfra + Mastercard</h2>
                    <div className="flex flex-col gap-6">
                        {[
                            { icon: <FaShieldAlt/>, title: "Secure Payments", text: "Bank-level security with advanced fraud protection." },
                            { icon: <FaGlobe/>, title: "Global Acceptance", text: "Use your benefits worldwide with Mastercard's network." },
                            { icon: <FaChartLine/>, title: "Cost Efficiency", text: "Reduce your platform fees and maximize savings." },
                            { icon: <FaUsers/>, title: "Trusted Partner", text: "Backed by industry leaders with proven track records." }
                        ].map((benefit, index) => (
                            <div className="flex items-start gap-4" key={index}>
                                <div className="flex-shrink-0 w-12 h-12 inline-flex items-center justify-center bg-[#e8f5e9] text-[#10c469] rounded-lg text-xl">{benefit.icon}</div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-1">{benefit.title}</h4>
                                    <p className="mb-0 text-gray-500 text-sm leading-relaxed">{benefit.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Section 6: Trusted Worldwide */}
      <section className="py-[60px] md:py-20">
        <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800">Trusted Worldwide</h2>
                <p className="text-gray-600 max-w-xl mx-auto">Join thousands of satisfied customers who trust Onfra.io.</p>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mt-12">
                <div className="text-center">
                    <div className="text-5xl font-bold text-[#10c469]">1,000+</div><div className="text-base text-gray-600">Offices Worldwide</div>
                </div>
                <div className="text-center">
                    <div className="text-5xl font-bold text-[#10c469]">99.9%</div><div className="text-base text-gray-600">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                    <div className="text-5xl font-bold text-[#10c469]">24/7</div><div className="text-base text-gray-600">Customer Support</div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="relative w-full overflow-hidden h-24 mt-8">
              <div className="flex will-change-transform items-center h-full animate-marquee">
                <img src="/uploads/2025/06/clients_logos.webp" alt="Client Logos" className="h-20 w-auto px-10" />
                <img src="/uploads/2025/06/clients_logos.webp" alt="Client Logos" className="h-20 w-auto px-10" />
              </div>
              <div className="absolute top-0 left-0 w-24 h-full z-10 bg-gradient-to-r from-white to-transparent"></div>
              <div className="absolute top-0 right-0 w-24 h-full z-10 bg-gradient-to-l from-white to-transparent"></div>
            </div>
        </div>
      </section>

      {/* Section 7: Final Call to Action */}
      <section className="py-[60px] md:py-20 bg-[#10c469]">
        <div className="container">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-white">Ready to Save 20% on Your Workspace Management?</h2>
                <p className="text-gray-200 max-w-xl mx-auto mt-4">Don't miss out on this exclusive offer. Join thousands of satisfied customers today.</p>
                <a href="#onfraDiscount" className="bg-white text-[#10c469] mt-6 inline-block py-3.5 px-7 font-semibold text-base rounded-lg border-none transition-all duration-300 ease-in-out transform hover:bg-gray-100 hover:text-[#0e9f58] hover:-translate-y-0.5 shadow-lg">Claim Your Discount Now</a>
            </div>
        </div>
      </section>

    </div>
  );
};

export default OfferForMastercardUsersPage;
