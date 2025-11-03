import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const posts = await prisma.blog.findMany({
      take: 5,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        cats: true,
      },
    });

    const formattedPosts = posts.map(post => ({
      id: post.id,
      title: post.title,
      miniContent: post.mini_content ? post.mini_content.split(' ').slice(0, 20).join(' ') : '',
      date: post.createdAt.toISOString(),
      slug: post.slug || '',
      featuredImage: post.feature_img ? post.feature_img.replace(/.*\/wp-content/, '') : null,
      categories: post.cats,
    }));

    return NextResponse.json(formattedPosts);
  } catch (err) {
    console.error(err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
