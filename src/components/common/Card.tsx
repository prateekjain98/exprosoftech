import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface CardProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  image?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  linkText,
  linkHref,
  image,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:border-primary/30 hover:scale-[1.02] transition-all duration-300 group ${className}`}
    >
      {/* Image */}
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg p-2">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      )}
      <div className="p-2">
        {/* Title */}
        <h3 className="text-xl font-bold text-dark mb-4 leading-tight">
            {title}
        </h3>

        {/* Description */}
        <p className="text-dark leading-relaxed mb-6">
            {description}
        </p>

        {/* Link */}
        <a
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-dark font-medium hover:text-primary-dark transition-colors duration-200 group-hover:gap-3 border rounded-full border-white px-2"
        >
            {linkText}
            <FaArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}; 