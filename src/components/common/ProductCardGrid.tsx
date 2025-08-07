import React, { useState, useEffect, useRef } from 'react';
import { useId } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SectionHeader from "../SectionHeader";
import Button from './Button';

interface CardData {
  title: string;
  description: string;  
  linkText: string;
  linkHref: string;
  image?: string;
}

interface HeadingData {
  subtitle: string;
  title: string;
  description: string;
}

interface CardGridProps {
  heading: HeadingData;
  cards: CardData[];
  className?: string;
  cardClassName?: string;
  autoplayInterval?: number;
  showMoreButton?: {
    text: string;
    href: string;
  };
}

export const ProductCardGrid: React.FC<CardGridProps> = ({
  heading,
  cards,
  className = "",
  cardClassName = "",
  autoplayInterval = 6000,
  showMoreButton,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Grid pattern component
  const Grid = ({
    pattern,
    size,
  }: {
    pattern?: number[][];
    size?: number;
  }) => {
    const p = pattern ?? [
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    ];
    return (
      <div className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-zinc-50/30 to-zinc-100/30 opacity-100">
          <GridPattern
            width={size ?? 20}
            height={size ?? 20}
            x="0"
            y="0"
            squares={p}
            className="absolute inset-0 h-full w-full stroke-blue-500/10 fill-blue-500/5"
          />
        </div>
      </div>
    );
  };

  const GridPattern = ({ width, height, x, y, squares, ...props }: any) => {
    const patternId = useId();

    return (
      <svg aria-hidden="true" {...props}>
        <defs>
          <pattern
            id={patternId}
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            x={x}
            y={y}
          >
            <path d={`M.5 ${height}V.5H${width}`} fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill={`url(#${patternId})`}
        />
        {squares && (
          <svg x={x} y={y} className="overflow-visible">
            {squares.map(([x, y]: any) => (
              <rect
                strokeWidth="0"
                key={`${x}-${y}`}
                width={width + 1}
                height={height + 1}
                x={x * width}
                y={y * height}
              />
            ))}
          </svg>
        )}
      </svg>
    );
  };

  // Auto-advance carousel
  useEffect(() => {
    if (!isHovered && cards.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        );
      }, autoplayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, cards.length, autoplayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? cards.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === cards.length - 1 ? 0 : currentIndex + 1);
  };

  const handleCardClick = (linkHref: string) => {
    window.location.href = linkHref;
  };

  if (!cards || cards.length === 0) {
    return <div className="text-gray-900">No products available.</div>;
  }

  return (
    <section className={`py-16 bg-gray-100/15 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        {heading && (
          <div className="text-center mb-12">
            <SectionHeader
              tagline={heading.subtitle}
              heading={heading.title}
              subheading={heading.description}
              alignment="center"
              theme="light"
            />
          </div>
        )}
        
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl border bg-white border-blue-200 ">
            
            <div 
              className="flex transition-transform duration-500 ease-in-out relative z-10"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cards.map((card, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div 
                    className="flex flex-col lg:flex-row min-h-96 md:h-[500px] cursor-pointer group"
                    onClick={() => handleCardClick(card.linkHref)}
                  >
                    {/* Left Section - Image */}
                    <div className="w-full lg:w-1/2 h-80 md:h-96 lg:h-full overflow-hidden relative p-6">
                      {card.image ? (
                        <img 
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center rounded-lg">
                          <div className="text-blue-600 text-6xl font-bold opacity-20">
                            {card.title.charAt(0)}
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-6 bg-gradient-to-r from-gray-900/10 to-transparent rounded-lg"></div>
                    </div>
                    
                    {/* Right Section - Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-12 bg-white relative z-20">
                      <Grid size={40} />
                      <div className="max-w-lg">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-gray-900">
                          {card.title}
                        </h3>
                        
                        {card.description && (
                          <p className="text-lg text-gray-600 mb-6 line-clamp-3">
                            {card.description}
                          </p>
                        )}

                        <div className="flex items-center justify-between">
                          <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
                            {card.linkText}
                            <FaChevronRight className="ml-2 w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {cards.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="hidden absolute left-[75%] bottom-2 lg:left-[85%] xl:-left-16 xl:top-1/2 -translate-y-1/2 bg-white hover:bg-blue-600 text-gray-700 hover:text-white w-12 h-12 rounded-full transition-all duration-200 shadow-lg border border-gray-300 hover:border-blue-500 lg:flex items-center justify-center"
                aria-label="Previous product"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={goToNext}
                className="hidden absolute right-4 bottom-2 xl:-right-16 xl:top-1/2 -translate-y-1/2 bg-white hover:bg-blue-600 text-gray-700 hover:text-white w-12 h-12 rounded-full transition-all duration-200 shadow-lg border border-gray-300 hover:border-blue-500 lg:flex items-center justify-center"
                aria-label="Next product"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {cards.length > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-blue-600 scale-110' 
                      : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Show More Button */}
        {showMoreButton && (
          <div className="mt-12 flex justify-center" data-aos="fade-up-sm" data-aos-delay="400">
            <Button href={showMoreButton.href} variant="primary" showArrow={true}>
              {showMoreButton.text}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};