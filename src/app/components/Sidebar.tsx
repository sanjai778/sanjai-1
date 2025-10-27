"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  slug: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

const Sidebar = () => {
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      const res = await fetch('/api/blogs');
      if (res.ok) {
        const data = await res.json();
        setRecentPosts(data.slice(0, 5)); // Get latest 5 posts
      }
    };

    const fetchCategories = async () => {
      const res = await fetch('/api/cats');
      if (res.ok) {
        const data = await res.json();
        setCategories(data);
      }
    };

    fetchRecentPosts();
    fetchCategories();
  }, []);

  return (
    <aside className="w-full md:w-1/4 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-2xl font-bold mb-4">Recent Posts</h3>
        <ul>
          {recentPosts.map((post) => (
            <li key={post.id} className="mb-2">
              <Link href={`/blogs/${post.slug}`}>
                <a className="text-lg hover:text-blue-500">{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Categories</h3>
        <ul>
          {categories.map((category) => (
            <li key={category.id} className="mb-2">
              <Link href={`/cats/${category.slug}`}>
                <a className="text-lg hover:text-blue-500">{category.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
