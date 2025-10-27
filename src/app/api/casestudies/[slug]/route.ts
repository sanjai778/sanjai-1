import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

interface CaseStudy {
  id: number;
  slug: string | null;
  Card_Image_Url: string | null;
  Card_Title: string | null;
  Card_Description: string | null;
  Title: string | null;
  Overview: string | null;
  Company_Image_url: string | null;
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    const caseStudies: CaseStudy[] = await prisma.$queryRaw`SELECT * FROM CaseStudy WHERE slug = ${slug}`;
    const caseStudy = caseStudies[0] || null;

    if (!caseStudy) {
      return NextResponse.json({ error: 'Case study not found' }, { status: 404 });
    }

    return NextResponse.json(caseStudy);
  } catch (error) {
    console.error('Error fetching case study:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
