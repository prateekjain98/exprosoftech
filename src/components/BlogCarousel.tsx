import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}

interface BlogCarouselProps {
  posts: BlogPost[];
  autoplayInterval?: number;
  className?: string;
}

const BlogCarousel: React.FC<BlogCarouselProps> = ({ 
  posts, 
  autoplayInterval = 5000,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance carousel
  useEffect(() => {
    if (!isHovered && posts.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === posts.length - 1 ? 0 : prevIndex + 1
        );
      }, autoplayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, posts.length, autoplayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? posts.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === posts.length - 1 ? 0 : currentIndex + 1);
  };

  const handleBlogClick = (slug: string) => {
    window.location.href = `/products/blogs/${slug}/`;
  };


  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-lg text-gray-600">
            Stay updated with our latest insights and industry trends
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
              {posts.map((post, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div 
                    className="flex flex-col lg:flex-row min-h-96 md:h-[500px] cursor-pointer group"
                    onClick={() => handleBlogClick(post.slug)}
                  >
                    {/* Left Section - Image */}
                    <div className="w-full lg:w-1/2 h-80 md:h-96 lg:h-full overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Right Section - Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-12 bg-white">
                      <div className="max-w-lg">
                        <div className="mb-4">
                          <span className="text-sm font-medium text-blue-600">
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                          {post.author && (
                            <span className="text-sm text-gray-500 ml-4">
                              by {post.author}
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-gray-900">
                          {post.title}
                        </h3>
                        
                        {post.excerpt && (
                          <p className="text-lg text-gray-600 mb-6 line-clamp-3">
                            {post.excerpt}
                          </p>
                        )}
                        
                        <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                          Read More
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
          {posts.length > 1 && (
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

        </div>
      </div>
    </section>
  );
};

export default BlogCarousel; 