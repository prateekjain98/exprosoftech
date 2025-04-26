import React from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons/lib";
import {
  FaUserFriends,
  FaChartLine,
  FaCogs,
  FaRocket,
  FaShieldAlt,
  FaHeadset,
  FaUsers,
  FaMapMarkedAlt,
  FaStore,
  FaChartBar,
  FaPhoneAlt,
  FaBoxes,
  FaBuilding,
  FaSearchLocation,
  FaGlobe,
  FaHandshake,
  FaMoneyBillWave,
  FaNetworkWired,
  FaIndustry,
  FaShoppingCart,
  FaRecycle,
  FaUserTie,
  FaBullseye
} from "react-icons/fa";
import SectionHeader from "../../../components/SectionHeader";
import { useState } from "react";

interface Feature {
  title: string;
  tagline: string;
  description: string;
  icon: any; // Changed from IconType to any to accommodate both component references and JSX elements
  image: string;
}

interface FeaturesContent {
  tagline: string;
  heading: string;
  subheading: string;
  features: Feature[];
}

// Updated Features interface
interface Features {
  tagline: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
}

interface Props {
  className?: string;
  heading: HeadingProps;
  features: Features[]; // Changed to array of Features directly
}

// Icon mapping
const iconMap: Record<string, IconType> = {
  FaUserFriends,
  FaChartLine,
  FaCogs,
  FaRocket,
  FaShieldAlt,
  FaHeadset,
  FaUsers,
  FaMapMarkedAlt,
  FaStore,
  FaChartBar,
  FaPhoneAlt,
  FaBoxes,
  FaBuilding,
  FaSearchLocation,
  FaGlobe,
  FaHandshake,
  FaMoneyBillWave,
  FaNetworkWired,
  FaIndustry,
  FaShoppingCart,
  FaRecycle,
  FaUserTie,
  FaBullseye
};

interface HeadingProps {
  subtitle: string;
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

  // Add error handling for missing features
  if (!features || features.length === 0) {
    return (
      <section className={`py-20 ${className}`}>
        <div className="container">
          <SectionHeader
            tagline={heading.subtitle}
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
    const icons = {
      FaUserFriends,
      FaChartLine,
      FaCogs,
      FaRocket,
    };
    return icons[iconName as keyof typeof icons] || FaUserFriends;
  };

  // Function to safely render icons
  const renderIcon = (icon: any) => {
    if (!icon) {
      return <FaUserFriends size={20} />;
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

    // Default fallback
    return <FaUserFriends size={20} />;
  };

  return (
    <section className={`py-20 ${className}`}>
      <div className="container">
        <SectionHeader
          tagline={heading.subtitle}
          heading={heading.title}
          subheading={heading.description}
        />

        <div className="mt-12">
          {/* Navigation Tabs */}
          <nav
            className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {features.map((feature: Features, index: number) => {
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`
                    group flex flex-col sm:flex-row items-center gap-3 
                    px-4 sm:px-6 py-3 sm:py-4 rounded-xl 
                    transition-all duration-300
                    ${
                      activeTab === index
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25"
                        : "bg-white text-gray-600 hover:bg-gray-50 hover:shadow-md"
                    }
                  `}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      activeTab === index
                        ? "bg-white/20"
                        : "bg-blue-50 group-hover:bg-blue-100"
                    }`}
                  >
                    {renderIcon(feature.icon)}
                  </div>
                  <span className="text-sm sm:text-base font-medium">
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
                        <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 text-sm font-medium rounded-full">
                          {feature.tagline}
                        </span>

                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                          {feature.title}
                        </h3>

                        <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className="order-1 lg:order-2 relative h-48 sm:h-64 lg:h-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 mix-blend-multiply z-10" />
                      <img
                        src={feature.imageUrl}
                        alt={feature.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
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
