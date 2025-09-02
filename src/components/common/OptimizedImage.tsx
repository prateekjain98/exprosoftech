import React from "react";

interface OptimizedImageProps {
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

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  loading = "lazy",
  fetchPriority = "auto",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 80,
  style,
  ...props
}) => {
  // Check if it's an external URL (Sanity CDN)
  const isExternal = src.startsWith("http");

  if (isExternal) {
    // For external images (Sanity CDN), create responsive URLs
    const baseUrl = src.split("?")[0];
    const widths = [320, 640, 768, 1024, 1280, 1600];
    const formats = ["avif", "webp", "jpeg"];

    const generateSanityUrl = (width: number, format: string = "webp") => {
      const aspectRatio = height / width;
      const targetHeight = Math.round(width * aspectRatio);
      return `${baseUrl}?w=${width}&h=${targetHeight}&fit=crop&fm=${format}&q=${quality}`;
    };

    return (
      <picture>
        {formats.map((format) => (
          <source
            key={format}
            type={`image/${format}`}
            srcSet={widths
              .map((w) => `${generateSanityUrl(w, format)} ${w}w`)
              .join(", ")}
            sizes={sizes}
          />
        ))}
        <img
          src={generateSanityUrl(width)}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          fetchPriority={fetchPriority}
          className={className}
          style={{
            aspectRatio: `${width} / ${height}`,
            objectFit: "cover",
            ...style,
          }}
          {...props}
        />
      </picture>
    );
  }

  // For local images, use standard img with proper attributes
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      fetchPriority={fetchPriority}
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

export default OptimizedImage;
