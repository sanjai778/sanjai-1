import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.json();

        // Here you would typically handle the form data, e.g., send an email, save to a database, etc.
        // For this example, we'll just log the data and return a success response.

        console.log(formData);

        return NextResponse.json({ status: 'success', message: 'Form submitted successfully.' });
    } catch (error) {
        console.error('Error processing form:', error);
        return NextResponse.json({ status: 'error', message: 'There was an error submitting the form.' }, { status: 500 });
    }
}
