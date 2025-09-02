import React from "react";

interface SanityImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  sizes?: string;
  quality?: number;
  style?: React.CSSProperties;
}

const SanityImage: React.FC<SanityImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  loading = "lazy",
  fetchPriority = "auto",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 75,
  style,
  ...props
}) => {
  // Check if it's a Sanity CDN URL
  const isSanityImage = src.includes('cdn.sanity.io');

  // Generate Vercel optimized image URL for Sanity images
  const generateVercelImageUrl = (originalSrc: string, targetWidth: number, targetQuality: number = quality) => {
    if (!isSanityImage) return originalSrc;
    
    // Use Vercel's image optimization API
    const params = new URLSearchParams({
      url: originalSrc,
      w: targetWidth.toString(),
      q: targetQuality.toString()
    });
    
    return `/_vercel/image?${params.toString()}`;
  };

  // Generate responsive image URLs for different screen sizes
  const responsiveWidths = [384, 640, 750, 828, 1080, 1200, 1920];
  const srcSet = isSanityImage 
    ? responsiveWidths
        .filter(w => w <= width * 2) // Don't generate larger than 2x the display size
        .map(w => `${generateVercelImageUrl(src, w)} ${w}w`)
        .join(', ')
    : undefined;

  // Fallback image URL
  const fallbackSrc = isSanityImage ? generateVercelImageUrl(src, width) : src;

  return (
    <img
      src={fallbackSrc}
      srcSet={srcSet}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      fetchPriority={fetchPriority}
      sizes={sizes}
      className={className}
      style={{
        aspectRatio: `${width} / ${height}`,
        objectFit: "cover",
        ...style,
      }}
      {...props}
    />
  );
};

export default SanityImage;
