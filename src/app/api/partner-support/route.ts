import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const {
    check_Business_Code,
    check_registered_email_id,
    check_partner_phone_number,
    partner_query,
  } = body;

  if (!check_Business_Code || !check_registered_email_id) {
    return NextResponse.json({ status: 'error', message: 'Missing required fields' }, { status: 400 });
  }

  // Here you would typically process the data, e.g., save it to a database
  console.log('Partner support query received:', {
    check_Business_Code,
    check_registered_email_id,
    check_partner_phone_number,
    partner_query,
  });

  return NextResponse.json({ status: 'success' });
}
