'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../blogs/blogs.module.css';
import NewPagination from './NewPagination';

interface Post {
  id: number;
  title: string;
  content: string;
  slug: string;
  Image: string;
  createdAt: string;
}

interface TagBlogListProps {
  posts: Post[];
}

const getStrapiMedia = (url: string) => {
  if (!url) {
    return '/images/placeholder.png';
  }
  if (url.startsWith("https://onfra.io/wp-content")) {
    return url.replace("https://onfra.io/wp-content", "");
  }
  if (url.startsWith("https://ifelsetechno.com/demo/visitdesk-wp/wp-content")) {
    return url.replace("https://ifelsetechno.com/demo/visitdesk-wp/wp-content", "");
  }
  if (url.startsWith("http")) {
    return url;
  }
  return `/${url.startsWith("/") ? url.substring(1) : url}`;
};

export default function TagBlogList({ posts }: TagBlogListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15;

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return posts.slice(startIndex, startIndex + postsPerPage);
  }, [posts, currentPage, postsPerPage]);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div>
      {/* Blog Grid */}
      <div className={styles.blog_grid}>
        {paginatedPosts.map(post => (
          <Link key={post.id} href={`/blogs/${post.slug}`} className={styles.blog_card}>
            {post.Image && (
              <Image src={getStrapiMedia(post.Image)} alt={post.title} className={styles.card_image} width={400} height={250} />
            )}
            <div className={styles.card_content}>
              <h2 className={styles.card_title}>
                {post.title}
              </h2>
              <p className={styles.card_date}>
                {new Date(post.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
                })}
              </p>
              <div className={styles.card_excerpt}>
                {post.content ? post.content.replace(/<[^>]*>?/gm, '') : ''}
              </div>
              <span className={styles.read_more_btn}>
                Read More
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <NewPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
