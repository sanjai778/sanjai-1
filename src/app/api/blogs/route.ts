import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const pageParam = searchParams.get('page');
    const category = searchParams.get('category');
    const limitParam = searchParams.get('limit');

    const isFiltered = search !== null || pageParam !== null || category !== null;

    if (!isFiltered) {
        // Return all blogs (Legacy mode for Sidebar/Slider)
        const blogs = await prisma.blog.findMany({
            orderBy: { createdAt: 'desc' },
            include: { cats: true, tags: true },
        });

        const responseData = blogs.map(blog => ({
            id: blog.id,
            title: blog.title,
            slug: blog.slug,
            content: blog.content,
            date: blog.createdAt,
            miniContent: blog.mini_content,
            featuredImage: blog.feature_img,
            categories: blog.cats,
            tags: blog.tags.map(tag => ({ id: tag.id, name: tag.name })),
        }));
        return NextResponse.json(responseData);
    }

    // Pagination/Filter Mode
    const page = parseInt(pageParam || '1');
    const limit = parseInt(limitParam || '12');
    const skip = (page - 1) * limit;
    
    const where: Prisma.BlogWhereInput = {};
    if (search) where.title = { contains: search };
    if (category) where.cats = { some: { name: category } };

    const [blogs, total] = await Promise.all([
        prisma.blog.findMany({
            where,
            orderBy: { createdAt: 'desc' },
            include: { cats: true, tags: true },
            skip,
            take: limit
        }),
        prisma.blog.count({ where })
    ]);

    const responseData = blogs.map(blog => ({
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        content: blog.content,
        date: blog.createdAt,
        miniContent: blog.mini_content,
        featuredImage: blog.feature_img,
        categories: blog.cats,
        tags: blog.tags.map(tag => ({ id: tag.id, name: tag.name })),
    }));

    return NextResponse.json({
        posts: responseData,
        total,
        totalPages: Math.ceil(total / limit),
        currentPage: page
    });

  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, content, mini_content, feature_img, max, cats, tags } = body;

    if (!title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    const newBlog = await prisma.blog.create({
      data: {
        title,
        content,
        mini_content,
        feature_img,
        max,
        cats: {
          connect: cats?.map((catId: number) => ({ id: catId })) || [],
        },
        tags: {
          connect: tags?.map((tagId: number) => ({ id: tagId })) || [],
        },
      },
    });

    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
