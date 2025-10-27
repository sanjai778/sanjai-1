import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    const compare = await prisma.compare.findFirst({
      where: { slug },
    });

    if (!compare) {
      return NextResponse.json({ error: 'Compare not found' }, { status: 404 });
    }

    return NextResponse.json(compare);
  } catch (error) {
    console.error('Error fetching compare:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
