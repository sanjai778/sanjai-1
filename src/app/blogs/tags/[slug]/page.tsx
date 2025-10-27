"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import TagBlogList from '@/app/components/TagBlogList';
import styles from '@/app/blogs/blogs.module.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import CtaSection from '@/app/components/sections/CtaSection';

interface Post {
  id: number;
  title: string;
  content: string;
  slug: string;
  Image: string;
  createdAt: string;
}

const TagPage = () => {
  const { slug } = useParams();
  const [posts, setPosts] = useState<Post[]>([]);
  const [tagName, setTagName] = useState('');

  useEffect(() => {
    if (slug) {
      const fetchPostsByTag = async () => {
        const res = await fetch(`/api/tags/${slug}`);
        if (res.ok) {
          const data = await res.json();
          setPosts(data.blogs);
          setTagName(data.name);
        }
      };
      fetchPostsByTag();
    }
  }, [slug]);

  return (
    <>
      <Header />
      <SubPageTitle title={`Blogs tagged with: ${tagName}`} />
      <main className={styles.container}>

        <div className="container">
            {/* <h1 className={styles.title}>Blogs tagged with: {tagName}</h1> */}
            <TagBlogList posts={posts} />
        </div>
      </main>
      <CtaSection />
      <Footer />
    </>
  );
};

export default TagPage;
