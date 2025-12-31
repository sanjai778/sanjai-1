'use client';

import { useState, useEffect, Suspense, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import styles from '../blogs/blogs.module.css';
import NewPagination from './NewPagination';
import useDebounce from '../hooks/useDebounce';

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
  totalPages: number;
  currentPage: number;
  categorySlug?: string;
}

function BlogListComponent({ posts: initialPosts, categories, totalPages: initialTotalPages, currentPage: initialPage, categorySlug }: BlogListProps) {
  const searchParams = useSearchParams();

  // Local state for data
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(false);

  // Search state
  const initialSearch = searchParams.get('search') || '';
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const debouncedSearch = useDebounce(searchTerm, 500);

  const isFirstRun = useRef(true);

  // Reset local state when props change (e.g. navigating to a different category or page via Link)
  useEffect(() => {
    setPosts(initialPosts);
    setTotalPages(initialTotalPages);
    setCurrentPage(initialPage);
    setSearchTerm(initialSearch);
    isFirstRun.current = true;
  }, [initialPosts, initialTotalPages, initialPage, initialSearch, categorySlug]);

  const fetchPosts = useCallback(async (page: number, search: string) => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      params.set('page', page.toString());
      if (search) params.set('search', search);
      if (categorySlug) params.set('category', categorySlug);
      
      const res = await fetch(`/api/blogs?${params.toString()}`);
      const data = await res.json();
      
      if (data.posts) {
        setPosts(data.posts);
        setTotalPages(data.totalPages);
        setCurrentPage(data.currentPage);
      }
    } catch (err) {
      console.error('Error fetching posts:', err);
    } finally {
      setIsLoading(false);
    }
  }, [categorySlug]);

  // Trigger search fetch when debounced search term changes
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    // Search always resets to page 1
    fetchPosts(1, debouncedSearch);
  }, [debouncedSearch, fetchPosts]);

  const handlePageChange = (page: number) => {
    fetchPosts(page, debouncedSearch);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Search & Filter UI */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.search_bar}
      />

      <div className={styles.category_filters}>
        <Link
          href="/blogs"
          className={`${styles.category_button} ${!categorySlug ? styles.active : ''}`}
        >
          All
        </Link>
        {categories.map(category => (
          <Link
            key={category.id}
            href={`/blogs/category/${category.name}`}
            className={`${styles.category_button} ${categorySlug === category.name ? styles.active : ''}`}
          >
            {category.name}
          </Link>
        ))}
      </div>

      {/* Grid */}
      <div className={`${styles.blog_grid} ${isLoading ? styles.loading : ''}`} style={{ opacity: isLoading ? 0.5 : 1, transition: 'opacity 0.2s' }}>
        {posts.map((post, index) => {
           let imageUrl = post.featuredImage;
           if (imageUrl) {
             if (imageUrl.startsWith('https://onfra.io/wp-content/uploads/')) {
               imageUrl = imageUrl.replace('https://onfra.io/wp-content/uploads/', '');
             } else if (imageUrl.startsWith('/uploads/')) {
               imageUrl = imageUrl.substring('/uploads/'.length);
             }
             imageUrl = encodeURI(imageUrl);
           }

           return (
          <Link key={post.id} href={`/blogs/${post.slug}`} className={`${styles.blog_card} p_service_item`}>
            {/* Image Container */}
            <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden', backgroundColor: '#f3f4f6' }}>
              {imageUrl && (
                <Image
                  src={`/uploads/${imageUrl}`}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.card_image}
                  priority={index < 3}
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
        );
        })}
      </div>

      <NewPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

const BlogCardSkeleton = () => {
    return (
      <div className={`${styles.blog_card} p_service_item`}>
        <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden', backgroundColor: '#f0f0f0', animation: 'pulse 1.5s infinite ease-in-out' }}></div>
        <div className={styles.card_content}>
          <div style={{ height: '20px', backgroundColor: '#e0e0e0', width: '80%', marginBottom: '8px', animation: 'pulse 1.5s infinite ease-in-out' }}></div>
          <div style={{ height: '12px', backgroundColor: '#e0e0e0', width: '40%', marginBottom: '10px', animation: 'pulse 1.5s infinite ease-in-out' }}></div>
          <div style={{ height: '14px', backgroundColor: '#e0e0e0', width: '100%', marginBottom: '4px', animation: 'pulse 1.5s infinite ease-in-out' }}></div>
          <div style={{ height: '14px', backgroundColor: '#e0e0e0', width: '90%', marginBottom: '4px', animation: 'pulse 1.5s infinite ease-in-out' }}></div>
          <div style={{ height: '14px', backgroundColor: '#e0e0e0', width: '80%', animation: 'pulse 1.5s infinite ease-in-out' }}></div>
        </div>
      </div>
    );
};

export default function BlogList(props: BlogListProps) {
  return (
    <Suspense fallback={
      <div className={styles.blog_grid}>
        {[...Array(6)].map((_, index) => <BlogCardSkeleton key={index} />)}
      </div>
    }>
      <BlogListComponent {...props} />
    </Suspense>
  );
}
