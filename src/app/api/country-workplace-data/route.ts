import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const countryWorkplaceData = await prisma.countryWorkplaceData.findMany();
    return NextResponse.json(countryWorkplaceData);
  } catch (error) {
    console.error('Error fetching country workplace data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
