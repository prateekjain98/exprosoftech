import React from 'react';

interface LoadingPlaceholderProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  rounded?: boolean;
}

export const LoadingPlaceholder: React.FC<LoadingPlaceholderProps> = ({
  width = '100%',
  height = '200px',
  className = '',
  rounded = false,
}) => {
  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <div
      className={`loading-placeholder ${rounded ? 'rounded-lg' : ''} ${className}`}
      style={style}
      aria-label="Loading content..."
    />
  );
};

// Specific loading components for common use cases
export const ImagePlaceholder: React.FC<{
  aspectRatio?: string;
  className?: string;
}> = ({ aspectRatio = '16/9', className = '' }) => (
  <div
    className={`loading-placeholder rounded-lg ${className}`}
    style={{ aspectRatio }}
    aria-label="Loading image..."
  />
);

export const TextPlaceholder: React.FC<{
  lines?: number;
  className?: string;
}> = ({ lines = 3, className = '' }) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }, (_, i) => (
      <div
        key={i}
        className="loading-placeholder rounded"
        style={{
          height: '1rem',
          width: i === lines - 1 ? '75%' : '100%',
        }}
      />
    ))}
  </div>
);

export const CardPlaceholder: React.FC<{
  className?: string;
}> = ({ className = '' }) => (
  <div className={`border rounded-lg p-4 ${className}`}>
    <ImagePlaceholder className="mb-4" />
    <div className="loading-placeholder rounded mb-2" style={{ height: '1.5rem' }} />
    <TextPlaceholder lines={2} />
  </div>
);

export default LoadingPlaceholder;
