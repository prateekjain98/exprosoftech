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
      } ${className}`}
      data-aos="fade-up"
    >
      {tagline && (
        <div
          className={`mb-4 flex ${
            alignment === "center" ? "justify-center" : "justify-start"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-600 text-xs sm:text-sm font-medium">
            {tagline}
          </span>
        </div>
      )}
      <h2
        className="text-2xl sm:text-[32px] lg:text-[42px] font-medium mb-6"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      {subheading && (
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {subheading}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
