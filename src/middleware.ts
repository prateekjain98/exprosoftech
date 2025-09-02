import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async ({ url }, next) => {
  const response = await next();
  
  // Add cache headers for static assets
  if (url.pathname.startsWith('/_astro/') || 
      url.pathname.startsWith('/fonts/') || 
      url.pathname.startsWith('/images/') ||
      /\.(js|css|woff|woff2|eot|ttf|otf|svg|png|jpg|jpeg|webp|avif|gif|ico)$/.test(url.pathname)) {
    
    // Set long-term caching for static assets
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  // Add cache headers for pages
  else if (url.pathname.endsWith('/') || url.pathname.endsWith('.html')) {
    // Use stale-while-revalidate for pages
    response.headers.set('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
  }

  return response;
});
