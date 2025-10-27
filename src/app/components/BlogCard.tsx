import Image from 'next/image';
import Link from 'next/link';
import styles from './sections/BlogSlider.module.css';

interface Post {
  id: number;
  title: string;
  content: string;
  slug: string;
  feature_img: string;
  createdAt: string;
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

const BlogCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={getStrapiMedia(post.feature_img)} alt={post.title} width={350} height={200} className={styles.postImage} />
      </div>
      <div className={styles.contentWrapper}>
        <span className={styles.postDate}>{new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        <h3 className={styles.postTitle}>{post.title}</h3>
        <p className={styles.postExcerpt} dangerouslySetInnerHTML={{ __html: post.content }}></p>
        <Link href={`/blogs/${post.slug}`} className="btn btn-outline-primary">Read More</Link>
      </div>
    </div>
  );
};

export default BlogCard;
