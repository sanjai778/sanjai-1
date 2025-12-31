import { MetadataRoute } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://onfra.io';

  // Static routes
  const staticRoutes = [
    '',
    '/about-us',
    '/blogs',
    '/compares',
    '/contact-us',
    '/country',
    '/faq',
    '/testimonials',
    '/become-a-partner',
    '/bizo',
    '/cancellation-and-refund-policy',
    '/community',
    '/download-apps',
    '/enterprise-ready',
    '/gdpr-policy',
    '/get-quotes',
    '/integrations',
    '/offer-for-mastercard-users-powered-by-razorpay',
    '/partner-program-terms-and-conditions',
    '/partner-support',
    '/pass-templates',
    '/plans-features',
    '/platform',
    '/privacy-policy',
    '/product',
    '/product-releases',
    '/qucik-links',
    '/roadmap',
    '/service-level-agreement',
    '/solutions',
    '/supported-printers',
    '/survey-form',
    '/talk-to-an-expert',
    '/terms-and-conditions',
  ].map((route) => {
    let changeFrequency: 'daily' | 'weekly' | 'yearly' | 'always' | 'hourly' | 'monthly' | 'never' = 'weekly';
    if (route === '') {
      changeFrequency = 'daily';
    } else if (route.includes('policy') || route.includes('agreement') || route.includes('terms')) {
      changeFrequency = 'yearly';
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority: route === '' ? 1.0 : 0.8,
    };
  });

  // Solutions
  const solutions = [
    'centralize-workplace-management',
    'co-working-management',
    'commercial-real-estate-management',
    'employee-tenant-and-visitor-experience',
    'facility-management',
    'hybrid-office-management',
    'industrial-security-management',
    'manufacturing-plant-management',
    'proptech-solutions',
    'real-estate-digital-twin',
    'safety-security-and-compliance',
    'sustainable-workplace',
    'tech-park-management',
    'workplace-utilization-and-insights',
    'workplaces-and-buildings'
  ].map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Platform
  const platforms = [
    'deliveries',
    'desk',
    'employees',
    'flexipass',
    'material-pass',
    'queue-management',
    'rooms',
    'vehicles',
    'visitors'
  ].map((slug) => ({
    url: `${baseUrl}/platform/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Blogs
  const blogs = (await prisma.blog.findMany()).map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Compares
  const compares = (await prisma.compare.findMany()).map((compare) => ({
    url: `${baseUrl}/compares/${compare.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Countries
  const countries = (await prisma.countryWorkplaceData.findMany()).map((country) => ({
    url: `${baseUrl}/country/${country.country_code.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Case Studies
  const casestudies = (await prisma.caseStudy.findMany()).map((casestudy) => ({
    url: `${baseUrl}/casestudies/${casestudy.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Tags
  const tags = (await prisma.tag.findMany()).map((tag) => ({
    url: `${baseUrl}/blogs/tags/${tag.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Categories
  const categories = (await prisma.cat.findMany()).map((cat) => ({
    url: `${baseUrl}/blogs/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...solutions,
    ...platforms,
    ...blogs,
    ...compares,
    ...countries,
    ...casestudies,
    ...tags,
    ...categories,
  ];
}
