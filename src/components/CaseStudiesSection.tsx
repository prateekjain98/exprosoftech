import React from 'react';

interface CaseStudy {
  _id: string;
  title: string;
  category: string;
  description: string;
  excerpt: string;
  industry: string;
  duration: string;
  logo: {
    asset: {
      url: string;
    };
    alt: string;
  };
  featuredImage: {
    asset: {
      url: string;
    };
    alt: string;
  };
  slug: string;
  publishedAt: string;
  order: number;
}

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
  title?: string;
  description?: string;
  showHeader?: boolean;
  maxItems?: number;
  className?: string;
}

const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  caseStudies,
  title = "Success Stories",
  description = "Discover how we've helped organizations achieve remarkable transformations.",
  showHeader = true,
  maxItems,
  className = ""
}) => {
  const displayCaseStudies = maxItems ? caseStudies.slice(0, maxItems) : caseStudies;

  if (caseStudies.length === 0) {
    return null;
  }

  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-[85rem] mx-auto px-4 md:px-8">
        {showHeader && (
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            {description && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayCaseStudies.map((study) => (
            <a
              key={study._id}
              href={`/case-studies/${study.slug}`}
              className="group block overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.featuredImage.asset.url}
                  alt={study.featuredImage.alt || study.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute top-4 left-4">
                  <img
                    src={study.logo.asset.url}
                    alt={study.logo.alt || `${study.title} logo`}
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                    {study.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-[#0066FF] transition-colors">
                  {study.title}
                </h3>
                <p className="mb-4 text-gray-600 line-clamp-3">
                  {study.excerpt || study.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  {study.industry && (
                    <span>{study.industry}</span>
                  )}
                  {study.duration && (
                    <span>{study.duration}</span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {maxItems && caseStudies.length > maxItems && (
          <div className="text-center mt-12">
            <a
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066FF] text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Case Studies
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesSection; 