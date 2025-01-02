import React from "react";

interface SectionHeaderProps {
  tagline?: string;
  heading: string;
  subheading?: string;
  alignment?: "left" | "center";
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  tagline,
  heading,
  subheading,
  alignment = "center",
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col ${
        alignment === "center" ? "text-center" : "text-left"
      } ${className} space-y-3 sm:space-y-4 lg:space-y-5`}
      data-aos="fade-up"
    >
      {tagline && (
        <div
          className={`flex ${
            alignment === "center" ? "justify-center" : "justify-start"
          }`}
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-600 text-xs sm:text-sm font-medium">
            {tagline}
          </span>
        </div>
      )}
      <h2
        className="text-3xl sm:text-4xl lg:text-[42px] font-medium"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      {subheading && (
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
          {subheading}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
