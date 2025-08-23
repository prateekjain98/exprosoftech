import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, useMotionValue } from 'motion/react';
import Button from './common/Button';

interface CaseStudy {
  title: string;
  slug: string;
  category: string;
  description: string;
  excerpt: string;
  industry: string;
  duration: string;
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
  autoplayInterval = 6000,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const dragX = useMotionValue(0);

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

  // Handle drag start
  const onDragStart = () => {
    setIsDragging(true);
  };

  // Handle drag end for swiping
  const onDragEnd = () => {
    const x = dragX.get();
    
    // Threshold for swipe detection (adjust as needed)
    const swipeThreshold = 50;
    
    if (x <= -swipeThreshold && currentIndex < caseStudies.length - 1) {
      // Swipe left - go to next
      goToNext();
    } else if (x >= swipeThreshold && currentIndex > 0) {
      // Swipe right - go to previous
      goToPrevious();
    } else if (x <= -swipeThreshold && currentIndex === caseStudies.length - 1) {
      // At last slide, swipe left - go to first
      setCurrentIndex(0);
    } else if (x >= swipeThreshold && currentIndex === 0) {
      // At first slide, swipe right - go to last
      setCurrentIndex(caseStudies.length - 1);
    }
    
    // Reset drag position and state
    dragX.set(0);
    setTimeout(() => setIsDragging(false), 100); // Small delay to prevent click after drag
  };

  const handleCaseStudyClick = (slug: string) => {
    // Prevent navigation if user was dragging
    if (!isDragging) {
      window.location.href = `/case-studies/${slug}/`;
    }
  };

  if (!caseStudies || caseStudies.length === 0) {
    return <div className="text-white">No case studies available.</div>;
  }

  return (
    <section className={`py-16 bg-gray-900 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Success Stories</h2>
          <p className="text-lg text-gray-300">
            Discover how we've transformed businesses across industries
          </p>
        </div>
        
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-800 shadow-2xl border border-gray-700">
            <motion.div 
              className="flex cursor-grab active:cursor-grabbing"
              style={{ 
                x: dragX,
                transform: `translateX(-${currentIndex * 100}%)` 
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragMomentum={false}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
              animate={{ 
                x: 0,
                transform: `translateX(-${currentIndex * 100}%)` 
              }}
              transition={{
                type: "spring",
                damping: 18,
                stiffness: 90,
                duration: 0.3
              }}
            >
              {caseStudies.map((caseStudy, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div 
                    className="flex flex-col lg:flex-row min-h-96 md:h-[500px] cursor-pointer group"
                    onClick={() => handleCaseStudyClick(caseStudy.slug)}
                  >
                    {/* Left Section - Image */}
                    <div className="w-full lg:w-1/2 h-80 md:h-96 lg:h-full overflow-hidden relative">
                      <img 
                        src={caseStudy.featuredImage}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-transparent"></div>
                    </div>
                    
                    {/* Right Section - Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-12 bg-gray-800">
                      <div className="max-w-lg">
                        <div className="mb-4 flex flex-wrap gap-2">
                          {caseStudy.industry && (
                            <span className="text-sm font-medium text-blue-400 border-2 border-blue-300 px-3 py-1 rounded-full">
                              {caseStudy.industry}
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-white">
                          {caseStudy.title}
                        </h3>
                        
                        {(caseStudy.description || caseStudy.excerpt) && (
                          <p className="text-lg text-gray-300 mb-6 line-clamp-3">
                            {caseStudy.description || caseStudy.excerpt}
                          </p>
                        )}

                        {caseStudy.services && caseStudy.services.length > 0 && (
                          <div className="mb-6">
                            <p className="text-sm text-gray-400 mb-2">Services:</p>
                            <div className="flex flex-wrap gap-2">
                              {caseStudy.services.slice(0, 3).map((service, idx) => (
                                <span key={idx} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                                  {service}
                                </span>
                              ))}
                              {caseStudy.services.length > 3 && (
                                <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                                  +{caseStudy.services.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
                            View Case Study
                            <FaChevronRight className="ml-2 w-4 h-4" />
                          </button>
                          
                          {caseStudy.duration && (
                            <span className="text-sm text-gray-400">
                              {caseStudy.duration}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows - Desktop Only */}
          {caseStudies.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="hidden xl:flex absolute -left-16 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-blue-600 text-gray-300 hover:text-white w-11 h-11 rounded-full transition-all duration-200 shadow-lg border border-gray-600 hover:border-blue-500 items-center justify-center"
                aria-label="Previous case study"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={goToNext}
                className="hidden xl:flex absolute -right-16 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-blue-600 text-gray-300 hover:text-white w-11 h-11 rounded-full transition-all duration-200 shadow-lg border border-gray-600 hover:border-blue-500 items-center justify-center"
                aria-label="Next case study"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Mobile Navigation Buttons */}
          {caseStudies.length > 1 && (
            <div className="flex justify-center items-center mt-6 space-x-4 lg:hidden">
              <button
                onClick={goToPrevious}
                className="bg-gray-700 hover:bg-blue-600 text-gray-300 hover:text-white w-11 h-11 rounded-full transition-all duration-200 shadow-lg border border-gray-600 hover:border-blue-500 flex items-center justify-center"
                aria-label="Previous case study"
              >
                <FaChevronLeft className="w-4 h-4" />
              </button>
              
              <span className="text-gray-400 text-sm px-3">
                {currentIndex + 1} / {caseStudies.length}
              </span>
              
              <button
                onClick={goToNext}
                className="bg-gray-700 hover:bg-blue-600 text-gray-300 hover:text-white w-11 h-11 rounded-full transition-all duration-200 shadow-lg border border-gray-600 hover:border-blue-500 flex items-center justify-center"
                aria-label="Next case study"
              >
                <FaChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Dots Indicator - Desktop Only */}
          {caseStudies.length > 1 && (
            <div className="hidden lg:flex justify-center mt-6 space-x-1">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="w-8 h-8 rounded-full transition-all duration-200 flex items-center justify-center"
                  aria-label={`Go to case study ${index + 1}`}
                >
                  <div className={`w-4 h-4 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-blue-600 scale-110' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`} />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="mt-12 flex justify-center" data-aos="fade-up-sm" data-aos-delay="400">
          <Button href="/case-studies/" variant="primary" showArrow={true}>
            See More Case Studies
          </Button>
      </div>
    </section>
  );
};

export default CaseStudyCarousel; 