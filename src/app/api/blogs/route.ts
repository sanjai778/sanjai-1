import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        cats: true,
        tags: true,
      },
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
      tags: blog.tags.map(tag => ({
        id: tag.id,
        name: tag.name,
      })),
    }));

    return NextResponse.json(responseData);
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
