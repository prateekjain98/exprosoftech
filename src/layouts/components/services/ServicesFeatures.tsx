import React from "react";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import type { IconType } from "react-icons/lib";
import {
  // Manufacturing
  FaIndustry,
  FaCogs,
  FaTools,
  FaHardHat,
  
  // Healthcare & Life Sciences
  FaHospital,
  FaUserMd,
  FaHeartbeat,
  FaPills,
  FaMicroscope,
  FaFirstAid,
  
  // Real Estate
  FaHome,
  FaBuilding,
  FaKey,
  FaMapMarkedAlt,
  
  // Education
  FaGraduationCap,
  FaSchool,
  FaBook,
  FaChalkboardTeacher,
  
  // Non-profit
  FaHeart,
  FaHandsHelping,
  FaDonate,
  FaUsers,
  
  // E-Commerce
  FaShoppingCart,
  FaStore,
  FaShoppingBag,
  FaCreditCard,
  
  // High Tech
  FaLaptopCode,
  FaMicrochip,
  FaRobot,
  FaDatabase,
  FaCloud,
  FaServer,
  
  // Fallback icon
  FaUserFriends
} from "react-icons/fa";
import SectionHeader from "../../../components/SectionHeader";
import { useState, useEffect } from "react";

// interface Feature {
//   title: string;
//   tagline: string;
//   description: string;
//   icon: any; // Changed from IconType to any to accommodate both component references and JSX elements
//   image: string;
// }

// interface FeaturesContent {
//   tagline: string;
//   heading: string;
//   subheading: string;
//   features: Feature[];
// }

// Updated Features interface
interface Features {
  title: string;
  tagline: string;
  description: any[]; // BlockContent array
  icon: string;
  imageUrl: string; // Changed from image to imageUrl to match the query
}

// interface Props {
//   className?: string;
//   heading: HeadingProps;
//   features: Features[]; // Changed to array of Features directly
// }

// Icon mapping
const iconMap: Record<string, IconType> = {
  // Manufacturing
  FaIndustry,
  FaCogs,
  FaTools,
  FaHardHat,
  
  // Healthcare & Life Sciences
  FaHospital,
  FaUserMd,
  FaHeartbeat,
  FaPills,
  FaMicroscope,
  FaFirstAid,
  
  // Real Estate
  FaHome,
  FaBuilding,
  FaKey,
  FaMapMarkedAlt,
  
  // Education
  FaGraduationCap,
  FaSchool,
  FaBook,
  FaChalkboardTeacher,
  
  // Non-profit
  FaHeart,
  FaHandsHelping,
  FaDonate,
  FaUsers,
  
  // E-Commerce
  FaShoppingCart,
  FaStore,
  FaShoppingBag,
  FaCreditCard,
  
  // High Tech
  FaLaptopCode,
  FaMicrochip,
  FaRobot,
  FaDatabase,
  FaCloud,
  FaServer,
  
  // Fallback
  FaUserFriends
};

interface HeadingProps {
  tagline: string;
  title: string;
  description: string;
}

interface Props {
  className?: string;
  heading: HeadingProps;
  features: Features[];
}

export const ServicesFeatures: React.FC<Props> = ({ 
  className = "", 
  heading,
  features = [] // Add default empty array
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);

  // Auto-switching functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlay && features.length > 0) {
      interval = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % features.length);
      }, 5000); // Switch every 5 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlay, features.length]);

  // Handle manual tab click
  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setIsAutoPlay(false); // Stop auto-switching when user clicks
  };

  // Add error handling for missing features
  if (!features || features.length === 0) {
    return (
      <section className={`py-20 ${className}`}>
        <div className="container">
          <SectionHeader
            tagline={heading.tagline}
            heading={heading.title}
            subheading={heading.description}
          />
          <div className="mt-12 text-center text-gray-500">
            No features available
          </div>
        </div>
      </section>
    );
  }

  const getIconComponent = (iconName: string) => {
    // Use the same iconMap that contains all our industry icons
    return iconMap[iconName] || FaUserFriends;
  };

  // Function to safely render icons
  const renderIcon = (icon: any) => {
    if (!icon) {
      return null; // Return null when icon is not provided
    }

    // If icon is a function (React component)
    if (typeof icon === "function") {
      const IconComponent = icon;
      return <IconComponent size={20} />;
    }

    // If icon is a string (icon name)
    if (typeof icon === "string") {
      // Check if the icon exists in our map
      if (iconMap[icon]) {
        const IconComponent = iconMap[icon];
        return <IconComponent size={20} />;
      }
    }

    // Default fallback - return null instead of fallback icon
    return null;
  };

  return (
    <section className={`py-20 ${className}`}>
      <div className="container">
        <SectionHeader
          tagline={heading.tagline}
          heading={heading.title}
          subheading={heading.description}
        />

        <div className="mt-12">
          {/* Navigation Tabs */}
          <nav
            className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            {features.map((feature: Features, index: number) => {
              return (
                <button
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className={`
                    group flex items-center gap-2 
                    px-3 py-4 rounded-full text-center
                    w-auto sm:w-auto transition-all duration-300
                    ${
                      activeTab === index
                        ? "bg-gradient-to-r from-blue-500 to-blue-800 text-white shadow-lg shadow-blue-500/25"
                        : "bg-white text-gray-600 hover:bg-gray-50 hover:shadow-md"
                    }
                  `}
                >
                  {feature.icon && (
                  <div
                    className={`p-2 rounded-lg ${
                      activeTab === index
                        ? "bg-white/20"
                        : "bg-blue-50 group-hover:bg-blue-100"
                    }`}
                  >
                    {renderIcon(feature.icon)}
                  </div>
                  )}
                  <span className="text-xs sm:text-sm font-medium leading-tight">
                    {feature.title}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Feature Cards */}
          <div
            className="mt-8 min-h-[400px] relative"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className={`
                  feature-card absolute inset-0 w-full h-full transition-all duration-500
                  ${
                    activeTab === index
                      ? "opacity-100 translate-y-0 z-10"
                      : "opacity-0 translate-y-8 pointer-events-none z-0"
                  }
                `}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-full border border-gray-100">
                  <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                    {/* Content Side */}
                    <div className="order-2 lg:order-1 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                      <div className="space-y-4 sm:space-y-6">
                        {feature.tagline && (
                          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 text-sm font-medium rounded-full">
                            {feature.tagline}
                          </span>
                        )}

                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                          {feature.title}
                        </h3>

                        <div className="text-gray-500 leading-relaxed text-sm sm:text-base prose prose-sm max-w-none">
                          <PortableText value={feature.description} />
                        </div>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className="order-1 lg:order-2 relative h-48 sm:h-64 lg:h-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 mix-blend-multiply z-10" />
                      {feature.imageUrl ? (
                        <img
                          src={feature.imageUrl}
                          alt={feature.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                          <span className="text-gray-400">No image available</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Add defaultProps
ServicesFeatures.defaultProps = {
  className: "",
  features: [],
};
