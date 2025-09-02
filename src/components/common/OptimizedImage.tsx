import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  srcMobile?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
  onLoad?: () => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  srcMobile,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  onLoad,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
  };

  // Generate responsive srcSet for better performance
  const generateSrcSet = (baseSrc: string) => {
    if (!baseSrc.includes('cdn.sanity.io')) return baseSrc;
    
    const sizes = [400, 600, 800, 1200];
    return sizes
      .map(size => `${baseSrc}&w=${size} ${size}w`)
      .join(', ');
  };

  const imgProps = {
    src: hasError ? '/images/placeholder.webp' : src,
    alt,
    width,
    height,
    loading: priority ? 'eager' : loading,
    decoding: 'async' as const,
    onLoad: handleLoad,
    onError: handleError,
    className: `${className} ${!isLoaded ? 'loading-placeholder' : ''}`,
    ...(src.includes('cdn.sanity.io') && {
      srcSet: generateSrcSet(src),
      sizes,
    }),
  };

  return (
    <picture>
      {srcMobile && (
        <source
          media="(max-width: 768px)"
          srcSet={srcMobile.includes('cdn.sanity.io') ? generateSrcSet(srcMobile) : srcMobile}
        />
      )}
      <img {...imgProps} />
    </picture>
  );
};

export default OptimizedImage;
