'use client';
import { useState, FormEvent } from 'react';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import CtaSection from '../components/sections/CtaSection';
import SubPageTitle from '../components/SubPageTitle';

const TalkToAnExpert = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        contactusName2: '',
        contactusEmail2: '',
        contactusPhoneno2: '',
        contactusCompany2: '',
        contactusJob2: '',
        typeRegistration1: 'SaaS Product Demo',
        contactMethod: 'email',
        typeRegistration2: '',
        contactusMessage2: '',
        currentPageUrl: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const { contactusName2, contactusEmail2, contactusPhoneno2, contactusCompany2, contactusJob2, typeRegistration2 } = formData;

        if (!contactusName2 || !contactusEmail2 || !contactusPhoneno2 || !contactusCompany2 || !contactusJob2) {
            alert("All fields are required.");
            setLoading(false);
            return;
        }

        if (!formData.contactMethod) {
            alert("Please select a preferred contact method.");
            setLoading(false);
            return;
        }

        if (!typeRegistration2) {
            alert("Please select the best time to contact you.");
            setLoading(false);
            return;
        }

        const data = new FormData();
        data.append('action', 'talk_to_expert_action');
        data.append('contactusName2', formData.contactusName2);
        data.append('contactusEmail2', formData.contactusEmail2);
        data.append('contactusPhoneno2', formData.contactusPhoneno2);
        data.append('contactusCompany2', formData.contactusCompany2);
        data.append('contactusJob2', formData.contactusJob2);
        data.append('contactusMessage2', formData.contactusMessage2);
        data.append('contactMethod', formData.contactMethod);
        data.append('bestTime', formData.typeRegistration2);
        data.append('contactHelp', formData.typeRegistration1);
        data.append('currentPageUrl', window.location.href);


        try {
            const response = await fetch('/api/talk-to-an-expert', {
                method: 'POST',
                body: data,
            });

            const result = await response.json();

            if (result.status === "success") {
                setSuccess(true);
                setFormData({
                    contactusName2: '',
                    contactusEmail2: '',
                    contactusPhoneno2: '',
                    contactusCompany2: '',
                    contactusJob2: '',
                    typeRegistration1: 'SaaS Product Demo',
                    contactMethod: 'email',
                    typeRegistration2: '',
                    contactusMessage2: '',
                    currentPageUrl: '',
                });
                setTimeout(() => {
                    setSuccess(false);
                }, 10000);
            } else {
                alert("Error: " + result.message);
            }
        } catch (error) {
            console.error("Failed to submit form:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
          <Header />
        <SubPageTitle title="Talk to an Expert" />
            
          
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <section className="py-10 text-center">
                    <h1 className="text-3xl font-bold">Talk to an Expert</h1>
                </section>
                <section className="pb-20">
                    <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-2xl font-semibold">Schedule a Consultation</h2>
                                <Image className="mt-5 rounded-2xl w-full" src="/uploads/static-image/talk-to-an-expert.png" alt="Talk to an expert" width={500} height={500} />
                            </div>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div className="space-y-6">
                                        <div>
                                            <label htmlFor="contactusName2" className="block text-sm font-medium text-gray-700">Full Name <span className="text-green-500">*</span></label>
                                            <input type="text" name="contactusName2" id="contactusName2" required onChange={handleChange} value={formData.contactusName2} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="contactusEmail2" className="block text-sm font-medium text-gray-700">Email ID <span className="text-green-500">*</span></label>
                                                <input type="email" name="contactusEmail2" id="contactusEmail2" required onChange={handleChange} value={formData.contactusEmail2} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                                            </div>
                                            <div>
                                                <label htmlFor="contactusPhoneno2" className="block text-sm font-medium text-gray-700">Phone Number <span className="text-green-500">*</span></label>
                                                <input type="text" name="contactusPhoneno2" id="contactusPhoneno2" required onChange={handleChange} value={formData.contactusPhoneno2} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="contactusCompany2" className="block text-sm font-medium text-gray-700">Company Name <span className="text-green-500">*</span></label>
                                                <input type="text" name="contactusCompany2" id="contactusCompany2" required onChange={handleChange} value={formData.contactusCompany2} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                                            </div>
                                            <div>
                                                <label htmlFor="contactusJob2" className="block text-sm font-medium text-gray-700">Job Title <span className="text-green-500">*</span></label>
                                                <input type="text" name="contactusJob2" id="contactusJob2" required onChange={handleChange} value={formData.contactusJob2} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="typeRegistration1" className="block text-sm font-medium text-gray-700">How can we help you? <span className="text-green-500">*</span></label>
                                            <select name="typeRegistration1" id="typeRegistration1" onChange={handleChange} value={formData.typeRegistration1} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                                                <option>SaaS Product Demo</option>
                                                <option>Pricing Information</option>
                                                <option>Technical Support</option>
                                                <option>Integration Questions</option>
                                                <option>Custom Features</option>
                                                <option>Other (Please Specify)</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Preferred Contact Method <span className="text-green-500">*</span></label>
                                            <div className="mt-2 grid grid-cols-3 gap-3">
                                                <div>
                                                    <input type="radio" id="email" name="contactMethod" value="email" checked={formData.contactMethod === 'email'} onChange={handleChange} className="sr-only" />
                                                    <label htmlFor="email" className={`flex items-center justify-center p-3 text-sm font-medium rounded-lg cursor-pointer border ${formData.contactMethod === 'email' ? 'bg-green-100 border-green-500 text-green-700' : 'border-gray-300'}`}>Email</label>
                                                </div>
                                                <div>
                                                    <input type="radio" id="phone" name="contactMethod" value="phone" checked={formData.contactMethod === 'phone'} onChange={handleChange} className="sr-only" />
                                                    <label htmlFor="phone" className={`flex items-center justify-center p-3 text-sm font-medium rounded-lg cursor-pointer border ${formData.contactMethod === 'phone' ? 'bg-green-100 border-green-500 text-green-700' : 'border-gray-300'}`}>Phone</label>
                                                </div>
                                                <div>
                                                    <input type="radio" id="video-call" name="contactMethod" value="video-call" checked={formData.contactMethod === 'video-call'} onChange={handleChange} className="sr-only" />
                                                    <label htmlFor="video-call" className={`flex items-center justify-center p-3 text-sm font-medium rounded-lg cursor-pointer border ${formData.contactMethod === 'video-call' ? 'bg-green-100 border-green-500 text-green-700' : 'border-gray-300'}`}>Video Call</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="typeRegistration2" className="block text-sm font-medium text-gray-700">Best Time to Contact You <span className="text-green-500">*</span></label>
                                            <select id="typeRegistration2" name="typeRegistration2" onChange={handleChange} value={formData.typeRegistration2} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                                                <option value="">-- Select a time --</option>
                                                <option value="morning">Morning (9 AM - 12 PM)</option>
                                                <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                                                <option value="evening">Evening (3 PM - 6 PM)</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="contactusMessage2" className="block text-sm font-medium text-gray-700">Message</label>
                                            <textarea name="contactusMessage2" id="contactusMessage2" onChange={handleChange} value={formData.contactusMessage2} rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"></textarea>
                                        </div>
                                        <div>
                                            <button type="submit" disabled={loading} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                                {loading ? 'Loading...' : 'Submit'}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                {success && (
                                    <div className="mt-6 p-4 rounded-md bg-green-50 border border-green-300">
                                        <p className="text-sm text-green-700">We heard you! Thank you for contacting us. We will get back to you shortly.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
                 <CtaSection />
            </div>
           
            <Footer />
        </>
    );
};

export default TalkToAnExpert;

