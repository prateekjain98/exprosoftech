import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from '@inox-tools/sitemap-ext';  
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";
import { remarkModifiedTime } from "./remark-modified-time.mjs";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";

import sanity from "@sanity/astro";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : "https://exprosoftech.vercel.app/",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp"
    }
  },
  integrations: [react(), sitemap({
    // Enable discovery of dynamic routes in SSR mode
    dynamicRoutes: true,
    // Ensure all static pages are included
    includeByDefault: true,
    // Custom routes function to dynamically fetch pages from Sanity
    routes: async () => {
      const routes = [];
      
      try {
        // Fetch all dynamic content from Sanity
        const [
          products,
          services, 
          caseStudies,
          blogPosts,
          productBlogs
        ] = await Promise.all([
          // Products
          sanityClient.fetch(`
            *[_type == "dynamicProductPage"] {
              "slug": slug.current,
              _updatedAt
            }
          `),
          // Services
          sanityClient.fetch(`
            *[_type == "dynamicServicePage"] {
              "slug": slug.current,
              _updatedAt
            }
          `),
          // Case Studies
          sanityClient.fetch(`
            *[_type == "caseStudy"] {
              "slug": slug.current,
              _updatedAt
            }
          `),
          // Solutions
          sanityClient.fetch(`
            *[_type == "solution"] {
              "slug": slug.current,
              _updatedAt
            }
          `),
          // Blog Posts
          sanityClient.fetch(`
            *[_type == "post"] {
              "slug": slug.current,
              _updatedAt
            }
          `),
          // Product Blogs
          sanityClient.fetch(`
            *[_type == "productBlog"] {
              "slug": slug.current,
              _updatedAt
            }
          `)
        ]);

        // Add dynamic product pages
        products.forEach(product => {
          if (product.slug) {
            routes.push({
              url: `/products/${product.slug}/`,
              priority: 0.8,
              changefreq: 'weekly',
              lastmod: new Date(product._updatedAt)
            });
          }
        });

        // Add dynamic service pages
        services.forEach(service => {
          if (service.slug) {
            routes.push({
              url: `/services/${service.slug}/`,
              priority: 0.8,
              changefreq: 'weekly',
              lastmod: new Date(service._updatedAt)
            });
          }
        });


        // Add case studies
        caseStudies.forEach(caseStudy => {
          if (caseStudy.slug) {
            routes.push({
              url: `/case-studies/${caseStudy.slug}/`,
              priority: 0.7,
              changefreq: 'monthly',
              lastmod: new Date(caseStudy._updatedAt)
            });
          }
        });


        // Add blog posts
        blogPosts.forEach(post => {
          if (post.slug) {
            routes.push({
              url: `/blog/${post.slug}/`,
              priority: 0.6,
              changefreq: 'monthly',
              lastmod: new Date(post._updatedAt)
            });
          }
        });

        // Add product blogs
        productBlogs.forEach(blog => {
          if (blog.slug) {
            routes.push({
              url: `/products/blogs/${blog.slug}/`,
              priority: 0.6,
              changefreq: 'monthly',
              lastmod: new Date(blog._updatedAt)
            });
          }
        });

        // Add important static pages with custom priorities
        const staticPages = [
          { url: '/', priority: 1.0, changefreq: 'daily' },
          { url: '/about/', priority: 0.9, changefreq: 'weekly' },
          { url: '/contact/', priority: 0.9, changefreq: 'weekly' },
          { url: '/services/', priority: 0.8, changefreq: 'weekly' },
          { url: '/products/', priority: 0.8, changefreq: 'weekly' },

          { url: '/case-studies/', priority: 0.7, changefreq: 'weekly' },

          { url: '/blog/', priority: 0.7, changefreq: 'daily' },
          { url: '/industries/', priority: 0.7, changefreq: 'monthly' },
        ];

        staticPages.forEach(page => {
          routes.push({
            url: page.url,
            priority: page.priority,
            changefreq: page.changefreq,
            lastmod: new Date() // Use current date for static pages
          });
        });

        console.log(`✅ Generated sitemap with ${routes.length} routes`);
        return routes;

      } catch (error) {
        console.error('❌ Error generating dynamic sitemap routes:', error);
        // Return basic static routes as fallback
        return [
          { url: '/', priority: 1.0, changefreq: 'daily' },
          { url: '/about/', priority: 0.9, changefreq: 'weekly' },
          { url: '/contact/', priority: 0.9, changefreq: 'weekly' },
          { url: '/services/', priority: 0.8, changefreq: 'weekly' },
          { url: '/products/', priority: 0.8, changefreq: 'weekly' }
        ];
      }
    }
  }), tailwind({
    config: {
      applyBaseStyles: false,
    },
  }), AutoImport({
    imports: [
      "@/shortcodes/Button",
      "@/shortcodes/Accordion",
      "@/shortcodes/Notice",
      "@/shortcodes/Video",
      "@/shortcodes/Youtube",
      "@/shortcodes/Tabs",
      "@/shortcodes/Tab",
    ],
  }), mdx(), sanity({
    projectId: "wc6w49nw",
    dataset: "production",
    useCdn: false,
  })],

  markdown: {
    remarkPlugins: [
      remarkModifiedTime,
      rehypeHeadingIds,
      [remarkToc, { heading: "contents" }],
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },

  output: "server",
  adapter: vercel({
    functionPerRoute: false,
    edgeMiddleware: false,
    webAnalytics: {
      enabled: false
    }
  }),
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'astro-vendor': ['astro'],
            'utils': ['dayjs', 'github-slugger', 'marked']
          }
        }
      }
    },
    server: {
      fs: {
        strict: false
      }
    },
    ssr: {
      noExternal: ['marked']
    }
  }
});