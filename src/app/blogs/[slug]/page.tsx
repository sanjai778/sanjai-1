// src/app/blogs/[slug]/page.js

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogSidebar from '../../components/BlogSidebar';
import SubPageTitle from '../../components/SubPageTitle';
import styles from './blog-post.module.css';

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

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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

export default async function SinglePostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

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

  return (
    <>
      <Header />
      <SubPageTitle title={post.title} />
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
