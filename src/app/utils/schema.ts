// Utility function to strip HTML tags for schema purposes
export function stripHtmlTags(html: string): string {
  if (typeof html !== 'string') {
    return '';
  }
  // Use a regex based approach suitable for the server environment
  // This is safe for simple HTML stripping in a server component.
  return html.replace(/<[^>]*>/g, '');
}

// Function to generate the BlogPosting Schema JSON-LD object
export function generateBlogPostingSchema({
  title,
  content,
  date,
  slug,
  featuredImageUrl,
}: {
  title: string;
  content: string;
  date: string; // ISO string
  slug: string;
  featuredImageUrl: string | null;
}) {
  const publishedDate = new Date(date).toISOString();
  const modifiedDate = publishedDate; // Assuming no explicit modified date is available, use published date

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://onfra.io/blogs/${slug}`
    },
    "headline": title,
    "description": stripHtmlTags(content).substring(0, 150) + "...", // Use first 150 characters of content as description
    "image": featuredImageUrl ? `https://onfra.io${featuredImageUrl}` : "https://onfra.io/public/assets/img/default-blog-image.png", // Use featured image or a fallback
    "author": {
      "@type": "Organization",
      "name": "Onfra" // Assuming the blog posts are authored by the organization
    },
    "publisher": {
      "@type": "Organization",
      "name": "Onfra",
      "logo": {
        "@type": "ImageObject",
        "url": "https://onfra.io/public/assets/img/logo.png"
      }
    },
    "datePublished": publishedDate,
    "dateModified": modifiedDate,
  };
  return schema;
}

export function generateWebSiteSchema({
  name,
  url,
  searchUrl,
}: {
  name: string;
  url: string;
  searchUrl: string; // The URL template for the internal search function
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": url,
    "name": name,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${searchUrl}{search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
  return schema;
}

// Function to generate the basic WebPage Schema JSON-LD object
export function generateWebPageSchema({
  title,
  description,
  url,
  type = "WebPage",
  inLanguage = "en" // Add new parameter with default value
}: {
  title: string;
  description: string;
  url: string;
  type?: string;
  inLanguage?: string; // Add new parameter type definition
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    "name": title,
    "description": description,
    "url": url,
    "inLanguage": inLanguage, // Add new schema property
    "publisher": {
      "@type": "Organization",
      "name": "Onfra",
      "logo": {
        "@type": "ImageObject",
        "url": "https://onfra.io/public/assets/img/logo.png"
      }
    }
  };
  return schema;
}