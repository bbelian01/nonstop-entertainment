export default function sitemap() {
  const baseUrl = 'https://www.nonstopentertainers.com';
  
  // Add all your static routes
  const routes = [
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

  return routes;
} 