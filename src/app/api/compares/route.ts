import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const pageParam = searchParams.get('page');
    const limitParam = searchParams.get('limit');

    // Legacy support: If no params provided, return all as array
    if (search === null && pageParam === null) {
      const compares = await prisma.compare.findMany();
      return NextResponse.json(compares);
    }

    const page = parseInt(pageParam || '1');
    const limit = parseInt(limitParam || '12');
    const skip = (page - 1) * limit;

    // Build filter conditions
    const andConditions: Prisma.CompareWhereInput[] = [
        { main_title: { not: 'title' } },
        { main_title: { not: 'onfra' } }
    ];

    if (search) {
        andConditions.push({ main_title: { contains: search } });
    }

    const where: Prisma.CompareWhereInput = {
        AND: andConditions
    };

    const [compares, total] = await Promise.all([
        prisma.compare.findMany({
            where,
            skip,
            take: limit,
             // Add ordering if needed, e.g. orderBy: { id: 'desc' }
        }),
        prisma.compare.count({ where })
    ]);

    const mappedCompares = compares.map(c => ({
        id: c.id,
        slug: c.slug || '',
        img_url: c.img_url || '',
        main_title: c.main_title || '',
        page_description: c.page_description || ''
    }));

    return NextResponse.json({
        compares: mappedCompares,
        total,
        totalPages: Math.ceil(total / limit),
        currentPage: page
    });

  } catch (error) {
    console.error('Error fetching compares:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
