// app/blogs/page.js

import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogList from '../components/BlogList'; // Import the new client component
import styles from './blogs.module.css';

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

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// --- Data Fetching on the Server ---
async function getCategories(): Promise<Category[]> {
  try {
    const categories = await prisma.cat.findMany();
    return categories;
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function getPosts(): Promise<Post[]> {
  try {
    const posts = await prisma.blog.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        cats: true,
      },
    });
    return posts.map(post => ({
      id: post.id,
      title: post.title,
      miniContent: post.mini_content || '',
      date: post.createdAt.toISOString(),
      slug: post.slug || '',
      featuredImage: post.feature_img,
      categories: post.cats,
    }));
  } catch (err) {
    console.error(err);
    return []; // Return an empty array on error so the page doesn't crash
  }
}


// --- The Main Page (Server Component) ---
export default async function BlogsPage() {
  // Data is fetched here, on the server, at build time or when revalidating.
  const posts = await getPosts();
  const categories = await getCategories();

  return (
    <>
      <Header />

      <main className={styles.container}>
          <h1 className={styles.title}>Explore Tips On Workspace Efficiency And Visitor Management</h1>
        {/* Render the interactive component, passing the static data as a prop */}
        <BlogList posts={posts} categories={categories} />
        
      </main>
      <Footer />
    </>
  );
}
