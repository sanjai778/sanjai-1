// src/app/blogs/page.tsx

import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogList from '../components/BlogList';
import styles from './blogs.module.css';
import { Metadata } from 'next';
import { generateWebPageSchema } from '../utils/schema';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export const metadata: Metadata = {
  title: 'Our Blog | Workspace Efficiency, Visitor Management & IoT',
  description: 'Explore expert tips, insights, and news on transforming your workspace with smart visitor management, desk booking, facility management, and IoT solutions from Onfra.',
  alternates: {
    canonical: 'https://onfra.io/blogs',
  },
  openGraph: {
    title: 'Our Blog | Workspace Efficiency, Visitor Management & IoT',
    description: 'Explore expert tips, insights, and news on transforming your workspace with smart visitor management, desk booking, facility management, and IoT solutions from Onfra.',
    url: 'https://onfra.io/blogs',
    siteName: 'Onfra',
    images: [
      {
        url: '/public/assets/img/visitdesk_facebook.png',
        width: 1200,
        height: 630,
        alt: 'Onfra Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Blog | Workspace Efficiency, Visitor Management & IoT',
    description: 'Explore expert tips, insights, and news on transforming your workspace with smart visitor management, desk booking, facility management, and IoT solutions from Onfra.',
    images: ['/assets/img/visitdesk_twitter.png'],
  },
};

interface Post {
  id: number;
  title: string;
  miniContent: string;
  date: string;
  slug: string;
  featuredImage: string | null;
  categories: Category[];
}

interface Category {
  id: number;
  name: string;
}

const POSTS_PER_PAGE = 12;

// --- Data Fetching on the Server ---
async function getCategories(): Promise<Category[]> {
  try {
    const categories = await prisma.cat.findMany();
    return categories;
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function getPosts(page: number, search: string): Promise<{ posts: Post[], total: number }> {
  try {
    const where: Prisma.BlogWhereInput = {};
    if (search) {
        where.title = { contains: search };
    }

    const [posts, total] = await Promise.all([
        prisma.blog.findMany({
            where,
            orderBy: { createdAt: 'desc' },
            include: { cats: true },
            skip: (page - 1) * POSTS_PER_PAGE,
            take: POSTS_PER_PAGE
        }),
        prisma.blog.count({ where })
    ]);

    return {
      posts: posts.map(post => ({
        id: post.id,
        title: post.title,
        miniContent: post.mini_content || '',
        date: post.createdAt.toISOString(),
        slug: post.slug || '',
        featuredImage: post.feature_img,
        categories: post.cats,
      })),
      total
    };
  } catch (err) {
    console.error(err);
    return { posts: [], total: 0 };
  }
}


// --- The Main Page (Server Component) ---
export default async function BlogsPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams?.page) || 1;
  const search = (resolvedSearchParams?.search as string) || '';

  const { posts, total } = await getPosts(currentPage, search);
  const categories = await getCategories();
  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  const blogIndexSchema = generateWebPageSchema({
    title: metadata.title as string,
    description: metadata.description as string,
    url: metadata.alternates?.canonical as string,
    type: "CollectionPage"
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexSchema) }}
      />
      <Header />

      <main className={styles.container}>
          <h1 className={styles.title}>Explore Tips On Workspace Efficiency And Visitor Management</h1>
        {/* Render the interactive component, passing the static data as a prop */}
        <BlogList 
            posts={posts} 
            categories={categories} 
            totalPages={totalPages}
            currentPage={currentPage}
        />
        
      </main>
      <Footer />
    </>
  );
}
