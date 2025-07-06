import { keywords } from './data/keywords';

function keywordToSlug(keyword) {
  return keyword.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export default function sitemap() {
  const baseUrl = 'https://www.nonstopentertainers.com';
  
  // Add all your static routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/testimonials',
    '/contact',
    '/get-a-quote',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Add programmatic SEO routes
  const programmaticRoutes = keywords.map((keyword) => ({
    url: `${baseUrl}/${keywordToSlug(keyword.keyword)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...programmaticRoutes];
} 