import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const compares = await prisma.compare.findMany();
    return NextResponse.json(compares);
  } catch (error) {
    console.error('Error fetching compares:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
