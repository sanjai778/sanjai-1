// src/app/blogs/category/[slug]/page.tsx

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogList from '../../../components/BlogList';
import styles from '../../blogs.module.css';
import { Metadata } from 'next';
import { generateWebPageSchema } from '../../../utils/schema';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

// --- Data Structures ---
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

// --- Server-Side Data Fetching ---

async function getCategories(): Promise<Category[]> {
  try {
    const categories = await prisma.cat.findMany();
    return categories;
  } catch (err) {
    console.error(err);
    return [];
  }
}

/**
 * Fetches category details based on the category slug.
 * @param slug The URL slug for the category.
 * @returns The category object or null if not found.
 */
async function getCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const category = await prisma.cat.findFirst({
      where: { name: slug } // Assuming the 'name' field in the database matches the 'slug'
    });
    return category;
  } catch (err) {
    console.error(`Error fetching category with slug ${slug}:`, err);
    return null;
  }
}

/**
 * Fetches all posts associated with a specific category slug.
 * @param slug The URL slug for the category.
 * @param page The current page number.
 * @returns An object containing filtered blog posts and total count.
 */
async function getPostsByCategory(slug: string, page: number = 1, search: string = ''): Promise<{ posts: Post[], total: number }> {
  try {
    const where: Prisma.BlogWhereInput = {
        cats: {
          some: { name: slug } // Filter posts where at least one category name matches the slug
        }
    };

    if (search) {
      where.title = { contains: search };
    }
    
    const [posts, total] = await Promise.all([
        prisma.blog.findMany({
            orderBy: { createdAt: 'desc' },
            where,
            include: { cats: true }, // Include categories for each post
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
    console.error(`Error fetching posts for category ${slug}:`, err);
    return { posts: [], total: 0 };
  }
}

/**
 * Generates metadata (SEO) dynamically based on the current category slug.
 * @param params Contains the dynamic route parameters, specifically 'slug'.
 * @returns The Next.js Metadata object.
 */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const category = await getCategoryBySlug(decodedSlug);

  const title = category ? `${category.name} Blogs | Onfra` : 'Blog Category | Onfra';
  const description = category ? `Explore all blog posts related to ${category.name}.` : 'Explore blog posts by category.';

  return {
    title: title,
    description: description,
    alternates: {
      canonical: `https://onfra.io/blogs/category/${slug}`,
    },
    openGraph: {
      title: title,
      description: description,
      url: `https://onfra.io/blogs/category/${slug}`,
      siteName: 'Onfra',
      images: [
        {
          url: '/public/assets/img/visitdesk_facebook.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: ['/assets/img/visitdesk_twitter.png'],
    },
  };
}

// --- Page Component ---

/**
 * Server Component for displaying blog posts filtered by category.
 * @param params Contains the dynamic route parameters, specifically 'slug'.
 */
export default async function BlogsCategoryPage({ params, searchParams }: { params: Promise<{ slug: string }>, searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams?.page) || 1;
  const search = (resolvedSearchParams?.search as string) || '';

  const { posts, total } = await getPostsByCategory(decodedSlug, currentPage, search);
  const categories = await getCategories();
  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  // Simple formatting for display in the page title
  const categoryTitle = decodedSlug.replace(/-/g, ' ');

  // Schema generation for SEO
  const blogIndexSchema = generateWebPageSchema({
    title: categoryTitle,
    description: `Explore all blog posts related to ${categoryTitle}.`,
    url: `https://onfra.io/blogs/category/${slug}`,
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
        <h1 className={styles.title}>{categoryTitle}</h1>
        {/* Pass the filtered posts to the client component for rendering */}
        <BlogList 
          posts={posts} 
          categories={categories}
          totalPages={totalPages}
          currentPage={currentPage}
          categorySlug={decodedSlug}
        />
      </main>
      <Footer />
    </>
  );
}
