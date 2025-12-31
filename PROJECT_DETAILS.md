# Project Details

## Name
nextjs-project-1

## Version
0.1.0

## Description
A Next.js project.

## Scripts
- `dev`: "next dev --turbopack"
- `build`: "next build --turbopack"
- `start`: "next start"
- `lint`: "eslint"
- `build:scripts`: "tsc --project tsconfig.json"
- `postbuild:scripts`: "mv scripts/populate-slugs.js scripts/populate-slugs.cjs"

## Dependencies
- `@heroicons/react`: `^2.2.0`
- `@prisma/client`: `^6.17.1`
- `next`: `15.5.6`
- `react`: `19.1.0`
- `react-dom`: `19.1.0`
- `swiper`: `^12.0.3`
- `tsx`: `^4.20.6`
- `reflect-metadata`: `^0.2.2`

## Dev Dependencies
- `@eslint/eslintrc`: `^3`
- `@tailwindcss/postcss`: `^4`
- `@types/node`: `^20`
- `@types/react`: `^19`
- `@types/react-dom`: `^19`
- `eslint`: `^9`
- `eslint-config-next`: `15.5.6`
- `prisma`: `^6.17.1`
- `tailwindcss`: `^4`
- `typescript`: `^5`



npx use 

npx prisma studio

npx prisma db push

npx prisma generate



'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import styles from '../blogs/blogs.module.css'; // Make sure this path points to your CSS
import NewPagination from './NewPagination';

// Types
interface Category {
  id: number;
  name: string;
}

interface Post {
  id: number;
  title: string;
  miniContent: string;
  date: string;
  slug: string;
  featuredImage: string | null;
  categories: Category[];
}

interface BlogListProps {
  posts: Post[];
  categories: Category[];
}

function BlogListComponent({ posts, categories }: BlogListProps) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  // Filter Posts
  const filteredPosts = useMemo(() => {
    return posts
      .map(p => {
        let imageUrl = p.featuredImage;
        if (imageUrl) {
          if (imageUrl.startsWith('https://onfra.io/wp-content/uploads/')) {
            imageUrl = imageUrl.replace('https://onfra.io/wp-content/uploads/', '');
          } else if (imageUrl.startsWith('/uploads/')) {
            imageUrl = imageUrl.substring('/uploads/'.length);
          }
          imageUrl = encodeURI(imageUrl);
        }
        return { ...p, featuredImage: imageUrl };
      })
      .filter(post => {
        const matchesCategory = selectedCategory === 'All' || post.categories.some(cat => cat.name === selectedCategory);
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
      });
  }, [posts, selectedCategory, searchTerm]);

  // Pagination Logic
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [filteredPosts, currentPage]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div>
      {/* Search & Filter UI */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
        className={styles.search_bar}
      />

      <div className={styles.category_filters}>
        <button 
          onClick={() => { setSelectedCategory('All'); setCurrentPage(1); }} 
          className={`${styles.category_button} ${selectedCategory === 'All' ? styles.active : ''}`}
        >
          All
        </button>
        {categories.map(category => (
          <button 
            key={category.id} 
            onClick={() => { setSelectedCategory(category.name); setCurrentPage(1); }}
            className={`${styles.category_button} ${selectedCategory === category.name ? styles.active : ''}`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className={styles.blog_grid}>
        {paginatedPosts.map((post, index) => (
          <Link key={post.id} href={`/blogs/${post.slug}`} className={`${styles.blog_card} p_service_item`}>
            {/* Image Container with fixed height to prevent Layout Shift */}
            <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden', backgroundColor: '#f3f4f6' }}>
              {post.featuredImage && (
                <Image 
                  src={`/uploads/${post.featuredImage}`} 
                  alt={post.title} 
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.card_image}
                  
                  // PERFORMANCE OPTIMIZATION:
                  // 1. Only load the first 3 images immediately (eager). 
                  // 2. Load the rest lazily as user scrolls.
                  priority={index < 3}
                  loading={index < 3 ? "eager" : "lazy"}
                  
                  // 3. SIZES: Crucial for Lighthouse. Tells browser the image size on different screens.
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                />
              )}
            </div>
            
            <div className={styles.card_content}>
              <h2 className={styles.card_title}>{post.title}</h2>
              <p className={styles.card_date}>
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}
              </p>
              <div className={styles.card_excerpt}>
                {post.miniContent ? post.miniContent.replace(/<[^>]*>?/gm, '') : ''}
              </div>
              <span className={styles.read_more_btn}>Read More</span>
            </div>
          </Link>
        ))}
      </div>

      <NewPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}

// Wrap in Suspense for safe use of useSearchParams
export default function BlogList(props: BlogListProps) {
  return (
    <Suspense fallback={<div className={styles.loading}>Loading Blogs...</div>}>
      <BlogListComponent {...props} />
    </Suspense>
  );
}