'use client';
import { useState, FormEvent } from 'react';
import Head from 'next/head';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import CtaSection from '@/app/components/sections/CtaSection';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import CountrySelector from '@/app/components/CountrySelector';

interface OptionType {
    value: string;
    label: string;
    cca2: string;
}

interface PageFormData {
    region: OptionType | null;
    branches: number;
    desks: number;
    devices: number;
    users: number;
    visitors: number;
    smsNotification: string[];
    companyName: string;
    contactName: string;
    phoneNo: string;
    email: string;
    notes: string;
}

export default function GetQuotesPage() {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState<PageFormData>({
        region: { value: 'IN', label: 'India', cca2: 'IN' },
        branches: 1,
        desks: 1,
        devices: 1,
        users: 10,
        visitors: 1000,
        smsNotification: ['Greetings'],
        companyName: '',
        contactName: '',
        phoneNo: '',
        email: '',
        notes: '',
    });


    const handleChange = (name: string, value: OptionType | null | number | string | number[]) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        const { smsNotification } = formData;

        if (checked) {
            setFormData(prevState => ({
                ...prevState,
                smsNotification: [...smsNotification, value]
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                smsNotification: smsNotification.filter(item => item !== value)
            }));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const { companyName, contactName, phoneNo, email } = formData;

        if (!companyName || !contactName || !phoneNo || !email) {
            alert("All fields are required.");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/get-quotes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, region: formData.region?.label }),
            });

            const result = await response.json();

            if (result.status === "success") {
                setSuccess(true);
            } else {
                alert("Error: " + result.message);
            }
        } catch (error) {
            console.error("Failed to submit form:", error);
        } finally {
            setLoading(false);
        }
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    return (
        <>
            <Head>
                <title>Get Quotes</title>
            </Head>
            <Header />
            <SubPageTitle title="Get Quotes" />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <section className="pb-20">
                    {!success ? (
                        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
                            <ul className="flex justify-around mb-12 border-b">
                                <li className={`pb-4 text-center w-1/2 ${step === 1 ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-500'}`}>Configuration</li>
                                <li className={`pb-4 text-center w-1/2 ${step === 2 ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-500'}`}>Business Details</li>
                            </ul>
                            {step === 1 && (
                                <div>
                                    <div className="space-y-10">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center mr-4">1</div>
                                            <div className="w-full">
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Select your region</label>
                                                <CountrySelector
                                                    instanceId="get-quotes-country-select"
                                                    value={formData.region}
                                                    onChange={(value) => handleChange('region', value)}
                                                />
                                            </div>
                                        </div>
                                        
                                        {[
                                            { name: 'branches', label: 'Number of branches', min: 1, max: 100, step: 1 },
                                            { name: 'desks', label: 'Number of desks', min: 1, max: 100, step: 1 },
                                            { name: 'devices', label: 'Number of devices', min: 1, max: 100, step: 1 },
                                            { name: 'users', label: 'Number of users', min: 10, max: 1000, step: 10 },
                                            { name: 'visitors', label: 'Expected visitors / year', min: 1000, max: 100000, step: 1000 },
                                        ].map((item, index) => (
                                            <div key={item.name} className="flex items-start">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center mr-4">{index + 2}</div>
                                                <div className="w-full">
                                                    <label className="block text-sm font-medium text-gray-700">{item.label}</label>
                                                    <div className="text-center my-2">
                                                        <p className="text-xl font-bold">{Number(formData[item.name as keyof typeof formData])}</p>
                                                        <p className="text-sm text-gray-500">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <button type="button" onClick={() => handleChange(item.name, Math.max(item.min, Number(formData[item.name as keyof typeof formData]) - item.step))} className="px-2">-</button>
                                                        <Slider
                                                            min={item.min}
                                                            max={item.max}
                                                            step={item.step}
                                                            value={Number(formData[item.name as keyof typeof formData])}
                                                            onChange={(value) => handleChange(item.name, value)}
                                                            trackStyle={{ backgroundColor: '#10c469' }}
                                                            handleStyle={{ borderColor: '#10c469', boxShadow: 'none' }}
                                                            activeDotStyle={{ borderColor: '#10c469' }}
                                                        />
                                                        <button type="button" onClick={() => handleChange(item.name, Math.min(item.max, Number(formData[item.name as keyof typeof formData]) + item.step))} className="px-2">+</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center mr-4">7</div>
                                            <div className="w-full">
                                                <label className="block text-sm font-medium text-gray-700">SMS Notification</label>
                                                <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                                                    <div className="flex items-center">
                                                        <input type="checkbox" id="greetings" name="smsNotification" value="Greetings" checked={formData.smsNotification.includes('Greetings')} onChange={handleCheckboxChange} className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500 accent-green-600" />
                                                        <label htmlFor="greetings" className="ml-2 block text-sm text-gray-900">Greetings</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input type="checkbox" id="otp" name="smsNotification" value="OTP and visitors" checked={formData.smsNotification.includes('OTP and visitors')} onChange={handleCheckboxChange} className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500 accent-green-600" />
                                                        <label htmlFor="otp" className="ml-2 block text-sm text-gray-900">OTP and visitors</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input type="checkbox" id="host" name="smsNotification" value="Notification for host" checked={formData.smsNotification.includes('Notification for host')} onChange={handleCheckboxChange} className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500 accent-green-600" />
                                                        <label htmlFor="host" className="ml-2 block text-sm text-gray-900">Notification for host</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 text-right">
                                        <button type="button" onClick={nextStep} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Continue</button>
                                    </div>
                                </div>
                            )}
                            {step === 2 && (
                                <div>
                                    <div className="space-y-6">
                                        <div>
                                            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company name*</label>
                                            <input type="text" name="companyName" id="companyName" required onChange={(e) => handleChange('companyName', e.target.value)} value={formData.companyName} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                                        </div>
                                        <div>
                                            <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">Contact name*</label>
                                            <input type="text" name="contactName" id="contactName" required onChange={(e) => handleChange('contactName', e.target.value)} value={formData.contactName} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                                        </div>
                                        <div>
                                            <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">Phone number*</label>
                                            <PhoneInput
                                                country={'in'}
                                                value={formData.phoneNo}
                                                onChange={phone => handleChange('phoneNo', phone)}
                                                inputClass="!w-full mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail*</label>
                                            <input type="email" name="email" id="email" required onChange={(e) => handleChange('email', e.target.value)} value={formData.email} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                                        </div>
                                        <div>
                                            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
                                            <textarea name="notes" id="notes" rows={4} onChange={(e) => handleChange('notes', e.target.value)} value={formData.notes} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"></textarea>
                                        </div>
                                    </div>
                                    <div className="mt-8 flex justify-between">
                                        <button type="button" onClick={prevStep} className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Back</button>
                                        <button type="submit" disabled={loading} className="btn-submit">
                                            {loading ? 'Submitting...' : 'Get Quotes'}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </form>
                    ) : (
                        <div className="text-center py-12">
                            <h2 className="text-2xl font-semibold text-green-600">We heard you!</h2>
                            <p className="mt-4 text-lg text-gray-700">Thank you for letting us know. We will get back to you shortly.</p>
                        </div>
                    )}
                </section>
            </div>
            <CtaSection />
            <Footer />
        </>
    );
}
