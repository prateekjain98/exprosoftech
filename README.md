# Exprosoft Tech Website

## Dynamic Sitemap Implementation

This project implements a comprehensive dynamic sitemap using the `@inox-tools/sitemap-ext` package that automatically discovers and includes all dynamic routes from your Sanity CMS.

### How It Works

The sitemap configuration in `astro.config.mjs` uses a `routes` function that:

1. **Connects to Sanity CMS** at build time to fetch all content with slugs
2. **Generates dynamic routes** for all content types including:
   - Products (`/products/{slug}/`)
   - Services (`/services/{slug}/`)
   - Consulting pages (`/consulting/{slug}/`)
   - Case studies (`/case-studies/{slug}/`)
   - Solutions (`/solutions/{slug}/`)
   - Blog posts (`/blog/{slug}/`)
   - Product blogs (`/products/blogs/{slug}/`)

3. **Includes metadata** for each route:
   - URL priority (0.6 - 1.0)
   - Change frequency (daily, weekly, monthly)
   - Last modification date from CMS

4. **Adds static pages** with appropriate priorities

### Content Types Included

| Content Type | URL Pattern | Priority | Change Freq | Source |
|--------------|-------------|----------|-------------|---------|
| Homepage | `/` | 1.0 | daily | Static |
| Products | `/products/{slug}/` | 0.8 | weekly | `dynamicProductPage` |
| Services | `/services/{slug}/` | 0.8 | weekly | `dynamicServicePage` |
| Consulting | `/consulting/{slug}/` | 0.8 | weekly | `dynamicConsultingsPage` |
| Case Studies | `/case-studies/{slug}/` | 0.7 | monthly | `caseStudy` |
| Solutions | `/solutions/{slug}/` | 0.7 | monthly | `solution` |
| Blog Posts | `/blog/{slug}/` | 0.6 | monthly | `post` |
| Product Blogs | `/products/blogs/{slug}/` | 0.6 | monthly | `productBlog` |
| Static Pages | Various | 0.7-0.9 | weekly/monthly | Static |

### Benefits

- **Automatic Discovery**: New content automatically appears in sitemap on next build
- **Self-Healing URLs**: Slug changes are automatically reflected
- **SEO Optimized**: Proper priorities and change frequencies for different content types
- **Last Modified Dates**: Uses actual CMS update timestamps for better crawl efficiency
- **Build-Time Generation**: All routes known at build time for optimal performance

### Configuration

The sitemap is configured in `astro.config.mjs`:

```javascript
sitemap({
  routes: async () => {
    // Fetch all content from Sanity CMS
    // Generate route objects with metadata
    return routes;
  },
  serialize: (item) => {
    // Custom logic for different route types
    return item;
  }
})
```

### Accessing the Sitemap

- **Sitemap Index**: `/sitemap-index.xml`
- **Main Sitemap**: `/sitemap-0.xml`

The sitemap is automatically generated during the build process and includes all discoverable routes from your CMS content.

---
 
