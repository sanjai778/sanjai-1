import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const faqs = await prisma.faq.findMany();
    return NextResponse.json(faqs);
  } catch (error) {
    console.error('Error fetching faqs:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
