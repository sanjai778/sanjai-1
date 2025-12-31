// src/app/blogs/[slug]/page.js

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogSidebar from '../../components/BlogSidebar';
import SubPageTitle from '../../components/SubPageTitle';
import styles from './blog-post.module.css';

import { Metadata } from 'next';
import { generateBlogPostingSchema } from '@/app/utils/schema';

interface Tag {
  id: number;
  name: string;
  slug: string | null;
}

interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
  slug: string;
  featuredImage: string | null;
  tags: Tag[];
}

import { prisma } from '@/lib/prisma';

export async function generateStaticParams() {
  const posts = await prisma.blog.findMany({
    select: {
      slug: true,
    },
  });

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const post = await prisma.blog.findUnique({
      where: {
        slug: slug,
      },
      include: {
        tags: true,
      },
    });
    if (!post) {
      return null;
    }
    return {
      id: post.id,
      title: post.title,
      content: post.content || '',
      date: post.createdAt.toISOString(),
      slug: post.slug || '',
      featuredImage: post.feature_img,
      tags: post.tags,
    };
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Post not found',
    };
  }

  const description = post.content ? post.content.replace(/<[^>]*>/g, '').substring(0, 160) + '...' : 'Read our latest blog post on workspace efficiency and visitor management.';

  return {
    title: `${post.title} | Onfra Blog`,
    description: description,
    alternates: {
      canonical: `https://onfra.io/blogs/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: description,
      url: `https://onfra.io/blogs/${post.slug}`,
      siteName: 'Onfra',
      images: post.featuredImage ? [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: description,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  };
}

export default async function SinglePostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  let imageUrl = post.featuredImage;
  if (imageUrl) {
    if (imageUrl.startsWith('https://onfra.io/wp-content')) {
      imageUrl = imageUrl.replace('https://onfra.io/wp-content', '');
    }
    imageUrl = encodeURI(imageUrl);
  }

  const blogSchema = generateBlogPostingSchema({
    title: post.title,
    content: post.content,
    date: post.date,
    slug: post.slug,
    featuredImageUrl: imageUrl,
  });

  return (
    <>
      <Header />
      <SubPageTitle title={post.title} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <main className={styles.container}>
        <div className={styles.grid}>
          <article className={styles.main_content}>
            <Link href="/blogs" className={styles.back_link}>
              &larr; Back to All Posts
            </Link>
            
            {post.date && (
              <p className={styles.date}>
                Published on: {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
                })}
              </p>
            )}
            
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={post.title || 'Blog post image'}
                className={styles.featured_image}
                width={1200}
                height={630}
              />
            )}
            
            <div 
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: post.content || '' }} 
            />
            <div className={styles.tags_container}>
              {post.tags && post.tags.map(tag => (
                <Link key={tag.id} href={`/blogs/tags/${tag.slug}`} className={styles.tag}>
                  {tag.name}
                </Link>
              ))}
            </div>
          </article>
          
          <BlogSidebar />
        </div>
      </main>
      <Footer />
    </>
  );
}
