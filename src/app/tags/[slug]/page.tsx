"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '@/app/components/Sidebar';

interface Post {
  id: number;
  title: string;
  content: string;
  slug: string;
  Image: string;
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
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-3/4 pr-4">
            <h1 className="text-4xl font-bold mb-8">Blogs tagged with: {tagName}</h1>
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <div key={post.id} className="border rounded-lg overflow-hidden shadow-lg">
                    <Link href={`/blogs/${post.slug}`}>
                      <a>
                        <Image src={post.Image} alt={post.title} className="w-full h-48 object-cover" width={400} height={192} />
                        <div className="p-6">
                          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                          <div dangerouslySetInnerHTML={{ __html: post.content.substring(0, 150) + '...' }} />
                        </div>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p>No posts found for this tag.</p>
            )}
          </div>
          <Sidebar />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TagPage;
