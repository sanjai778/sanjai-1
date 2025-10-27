'use client';

import { useState, useEffect } from 'react';
import BlogSwiper from '../BlogSwiper';
import styles from './BlogSwiperSection.module.css';

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

export default function BlogSwiperSection() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/blogs/latest');
        if (!res.ok) {
          throw new Error(`Failed to fetch latest posts: ${res.statusText}`);
        }
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchPosts();
  }, []);

  return (
    <section className={styles.blogSwiperSection}>
      <div className="container">
        <div className="section_header">
          <p className="section_tagline">Our Blog</p>
          <h2 className="section_title">Latest News</h2>
        </div>
        <BlogSwiper posts={posts} />
      </div>
    </section>
  );
}
