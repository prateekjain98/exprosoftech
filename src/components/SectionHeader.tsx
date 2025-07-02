import React from "react";

interface SectionHeaderProps {
  tagline?: string;
  heading: string;
  subheading?: string;
  alignment?: "left" | "center";
  className?: string;
  theme?: "light" | "dark";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  tagline,
  heading,
  subheading,
  alignment = "center",
  className = "",
  theme = "light",
}) => {
  return (
    <div
      className={`flex flex-col text-center lg:text-left ${
        alignment === "center" ? "lg:text-center" : ""
      } ${className} space-y-3 sm:space-y-4 lg:space-y-5`}
      data-aos="fade-up"
    >
      {tagline && (
        <div
          className={`flex justify-center lg:justify-start ${
            alignment === "center" ? "lg:justify-center" : ""
          }`}
        >
          <span
            className={`
            inline-block px-3 py-1.5 sm:px-4 sm:py-2 
            backdrop-blur-md 
            border border-blue-700/20 rounded-full 
            text-xs sm:text-sm font-medium shadow-lg
            ${theme === "dark" ? "text-blue-400" : "text-white"}
          `}
            style={{
              background: 'linear-gradient(to bottom, rgba(59,130,246,0.5), rgba(37,99,235,0.4), rgba(96,165,250,0.5))'
            }}
          >
            {tagline}
          </span>
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-[42px] font-medium ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      {subheading && (
        <p
          className={`text-sm sm:text-base max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed ${
            theme === "dark" ? "text-gray-300/90" : "text-gray-600"
          }`}
          dangerouslySetInnerHTML={{ __html: subheading }}
        />
      )}
    </div>
  );
};

export default SectionHeader;
