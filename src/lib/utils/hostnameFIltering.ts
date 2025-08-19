/**
 * Utility functions for hostname-based content filtering
 * Provides consistent filtering logic across the application
 */

/**
 * Creates a conditional filter clause for isLive based on hostname
 * @param hostname - The current hostname
 * @returns GROQ filter clause string
 */
export function createIsLiveFilter(hostname: string): string {
  // Only filter by isLive on production domain
  if (hostname === 'exprosoftech.com') {
    return ' && isLive == true';
  }
  // On other domains (dev, staging, preview), show all published content
  return '';
}

/**
 * Builds a complete GROQ query with hostname-aware isLive filtering
 * @param baseQuery - The base GROQ query without isLive filtering
 * @param hostname - The current hostname
 * @returns Complete GROQ query with appropriate isLive filtering
 */
export function buildQueryWithHostnameFilter(baseQuery: string, hostname: string): string {
  const isLiveFilter = createIsLiveFilter(hostname);
  
  // Insert the filter after the type filter but before any other conditions
  if (baseQuery.includes(' && ')) {
    // If there are already conditions, add our filter
    return baseQuery.replace(/(\*\[_type == "[^"]+")/, `$1${isLiveFilter}`);
  } else if (baseQuery.includes(']')) {
    // If there's just a type filter, add our condition before the closing bracket
    return baseQuery.replace(/(\*\[_type == "[^"]+")(\])/, `$1${isLiveFilter}$2`);
  }
  
  // Fallback: just return the original query
  return baseQuery;
}

/**
 * Checks if content should be visible based on hostname and isLive status
 * Used for individual content items after fetching
 * @param hostname - The current hostname
 * @param isLive - The isLive status of the content
 * @returns boolean indicating if content should be visible
 */
export function shouldShowContent(hostname: string, isLive: boolean): boolean {
  // On production, only show live content
  if (hostname === 'exprosoftech.com') {
    return isLive;
  }
  // On other domains, show all published content
  return true;
}

/**
 * Creates GROQ queries for different content types with hostname-aware filtering
 */
export const createQueries = (hostname: string) => {
  const isLiveFilter = createIsLiveFilter(hostname);
  
  return {
    // Blog posts
    blogPosts: (limit?: number) => {
      const limitClause = limit ? `[0..${limit - 1}]` : '';
      return `*[_type == "post"${isLiveFilter}] | order(date desc)${limitClause}`;
    },
    
    // Product blogs
    productBlogs: (limit?: number) => {
      const limitClause = limit ? `[0..${limit - 1}]` : '';
      return `*[_type == "productBlog"${isLiveFilter}] | order(date desc)${limitClause}`;
    },
    
    // Case studies
    caseStudies: (limit?: number) => {
      const limitClause = limit ? `[0..${limit - 1}]` : '';
      return `*[_type == "caseStudy"${isLiveFilter}] | order(publishedAt desc)${limitClause}`;
    },
    
    // Products
    products: () => `*[_type == "dynamicProductPage"${isLiveFilter}] | order(_createdAt asc)`,
    
    // Services
    services: () => `*[_type == "dynamicServicePage"${isLiveFilter}] | order(_createdAt asc)`,
    
    // Product dropdown content
    productDropdown: () => `*[_type == "productDropdownContent"${isLiveFilter}] | order(_createdAt asc)`,
    
    // Service dropdown content
    serviceDropdown: () => `*[_type == "serviceDropdownContent"${isLiveFilter}] | order(_createdAt asc)`,
  };
};
