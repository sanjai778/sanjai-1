import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const contactusName2 = formData.get('contactusName2');
        const contactusEmail2 = formData.get('contactusEmail2');
        const contactusPhoneno2 = formData.get('contactusPhoneno2');
        const contactusCompany2 = formData.get('contactusCompany2');
        const contactusJob2 = formData.get('contactusJob2');
        const contactusMessage2 = formData.get('contactusMessage2');
        const contactMethod = formData.get('contactMethod');
        const bestTime = formData.get('bestTime');
        const contactHelp = formData.get('contactHelp');
        const currentPageUrl = formData.get('currentPageUrl');

        // Here you would typically handle the form data, e.g., send an email, save to a database, etc.
        // For this example, we'll just log the data and return a success response.

        console.log({
            contactusName2,
            contactusEmail2,
            contactusPhoneno2,
            contactusCompany2,
            contactusJob2,
            contactusMessage2,
            contactMethod,
            bestTime,
            contactHelp,
            currentPageUrl,
        });

        return NextResponse.json({ status: 'success', message: 'Form submitted successfully.' });
    } catch (error) {
        console.error('Error processing form:', error);
        return NextResponse.json({ status: 'error', message: 'There was an error submitting the form.' }, { status: 500 });
    }
}
