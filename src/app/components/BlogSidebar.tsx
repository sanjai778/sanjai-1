import Link from 'next/link';
import styles from './BlogSidebar.module.css';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getRecentPosts() {
  const posts = await prisma.blog.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: 3,
  });
  return posts;
}

async function getCategories() {
  const categories = await prisma.cat.findMany();
  return categories;
}

export default async function BlogSidebar() {
  const recentPosts = await getRecentPosts();
  const categories = await getCategories();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar_widget}>
        <h3 className={styles.sidebar_title}>Recent Posts</h3>
        <ul className={styles.sidebar_list}>
          {recentPosts.map(post => (
            <li key={post.id} className={styles.sidebar_list_item}>
              <Link href={`/blogs/${post.slug}`} className={styles.sidebar_link}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.sidebar_widget}>
        <h3 className={styles.sidebar_title}>Categories</h3>
        <ul className={styles.sidebar_list}>
          {categories.map(category => (
            <li key={category.id} className={styles.sidebar_list_item}>
              <Link href={`/blogs?category=${category.name}`} className={styles.sidebar_link}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
