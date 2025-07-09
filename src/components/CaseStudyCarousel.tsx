import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CaseStudy {
  title: string;
  slug: string;
  category: string;
  description: string;
  excerpt: string;
  industry: string;
  duration: string;
  logo: string;
  featuredImage: string;
  publishedAt: string;
  services: string[];
}

interface CaseStudyCarouselProps {
  caseStudies: CaseStudy[];
  autoplayInterval?: number;
  className?: string;
}

const CaseStudyCarousel: React.FC<CaseStudyCarouselProps> = ({ 
  caseStudies, 
  autoplayInterval = 5000,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance carousel
  useEffect(() => {
    if (!isHovered && caseStudies.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1
        );
      }, autoplayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, caseStudies.length, autoplayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? caseStudies.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === caseStudies.length - 1 ? 0 : currentIndex + 1);
  };

  const handleCaseStudyClick = (slug: string) => {
    window.location.href = `/case-studies/${slug}/`;
  };

  if (!caseStudies || caseStudies.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No case studies available.</p>
      </div>
    );
  }

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600">
            Discover how we've helped businesses transform and achieve remarkable results
          </p>
        </div>
        
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {caseStudies.map((caseStudy, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div 
                    className="flex flex-col lg:flex-row min-h-96 md:h-[500px] cursor-pointer group"
                    onClick={() => handleCaseStudyClick(caseStudy.slug)}
                  >
                    {/* Left Section - Image */}
                    <div className="w-full lg:w-1/2 h-80 md:h-96 lg:h-full overflow-hidden">
                      <img 
                        src={caseStudy.featuredImage || caseStudy.logo}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Right Section - Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-12 bg-white">
                      <div className="max-w-lg">
                        <div className="mb-4">
                          <span className="text-sm font-medium text-blue-600">
                            {caseStudy.category}
                          </span>
                          {caseStudy.industry && (
                            <span className="text-sm text-gray-500 ml-4">
                              {caseStudy.industry}
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-gray-900">
                          {caseStudy.title}
                        </h3>
                        
                        {caseStudy.description && (
                          <p className="text-lg text-gray-600 mb-6 line-clamp-3">
                            {caseStudy.description}
                          </p>
                        )}
                        
                        <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                          Read Case Study
                          <FaChevronRight className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {caseStudies.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-[75%] bottom-2 lg:left-[85%] xl:-left-16 xl:top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-primary text-gray-800 hover:text-white w-12 h-12 rounded-full transition-all duration-200 shadow-lg border border-gray-400 flex items-center justify-center"
                aria-label="Previous slide"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 bottom-2 xl:-right-16 xl:top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-primary text-gray-800 hover:text-white w-12 h-12 rounded-full transition-all duration-200 shadow-lg border border-gray-400 flex items-center justify-center"
                aria-label="Next slide"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {caseStudies.length > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCarousel; 