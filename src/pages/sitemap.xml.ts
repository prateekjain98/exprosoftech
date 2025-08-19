// src/pages/sitemap.xml.ts
import { sanityClient } from "sanity:client";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
  // Fetch all dynamic content from Sanity CMS
  const [posts, caseStudies, products, services, productBlogs] = await Promise.all([
    // Blog posts
    sanityClient.fetch(`*[_type == "post" && isLive == true] {
      "slug": slug.current,
      isLive
    }`),
    // Case studies
    sanityClient.fetch(`*[_type == "caseStudy" && isLive == true] {
      "slug": slug.current,
      isLive
    }`),
    // Products
    sanityClient.fetch(`*[_type == "dynamicProductPage"] {
      "slug": slug.current
    }`),
    // Services
    sanityClient.fetch(`*[_type == "dynamicServicePage"] {
      "slug": slug.current
    }`),
    // Product blogs
    sanityClient.fetch(`*[_type == "productBlog" && isLive == true] {
      "slug": slug.current,
      isLive
    }`),


  ]);

  // Static routes (pages that exist but don't have dynamic content)
  const staticRoutes = [
    '',
    'about',
    'contact',
    'industries',
  ];

  // Build all URLs
  const urls = [
    // Static routes
    ...staticRoutes.map((route) => `${site}${route}`),
    // Blog posts
    ...posts.map((post: { slug: string }) => `${site}blog/${post.slug}`),
    // Case studies
    ...caseStudies.map((study: { slug: string }) => `${site}case-studies/${study.slug}`),
    // Products
    ...products.map((product: { slug: string }) => `${site}products/${product.slug}`),
    // Services
    ...services.map((service: { slug: string }) => `${site}services/${service.slug}`),
    // Product blogs
    ...productBlogs.map((blog: { slug: string }) => `${site}products/blogs/${blog.slug}`),


  ];

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `<url><loc>${url}</loc></url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}; 