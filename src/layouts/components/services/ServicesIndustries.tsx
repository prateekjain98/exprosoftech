import React from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons/lib";
import {
  FaStore,
  FaHotel,
  FaPlane,
  FaUtensils,
  FaShoppingBag,
  FaCarAlt,
  FaGamepad,
  FaNetworkWired,
  FaPhoneAlt,
  FaBoxes,
  FaBuilding,
  FaSearchLocation,
  FaLaptopCode,
  FaIndustry,
  FaUserTie,
  FaMoneyBillWave,
  FaHospital,
  FaShoppingCart,
  FaGraduationCap,
  FaServer,
} from "react-icons/fa";
import SectionHeader from "../../../components/SectionHeader";

// Improve icon mapping with better typing
const iconMap: { [key: string]: IconType } = {
  FaStore,
  FaHotel,
  FaPlane,
  FaUtensils,
  FaShoppingBag,
  FaCarAlt,
  FaGamepad,
  FaGraduationCap,
  FaShoppingCart,
  FaIndustry,
  FaNetworkWired,
  FaMoneyBillWave,
  FaPhoneAlt,
  FaBoxes,
  FaBuilding,
  FaSearchLocation,
  FaUserTie,
  FaLaptopCode,
  FaHospital,
  FaServer,
};

// Update the Industry interface to be more specific about icon type
interface Industry {
  title: string;
  description: string;
  icon: keyof typeof iconMap; // This ensures icon must be a key from iconMap
}

// Content structure for the section
interface IndustriesContent {
  tagline: string;
  heading: string;
  subheading: string;
}

// Component props
interface Props {
  className?: string;
  content: IndustriesContent;
  industries: Industry[]; // Separate industries array from content
}

export const ServicesIndustries: React.FC<Props> = ({
  className,
  content,
  industries,
}): JSX.Element => {
  // Updated renderIcon function with better type safety
  const renderIcon = (iconName: keyof typeof iconMap): JSX.Element => {
    const IconComponent = iconMap[iconName];

    if (!IconComponent) {
      console.warn(`Icon "${iconName}" not found in iconMap`);
      return React.createElement(iconMap.FaStore, { size: 28 });
    }

    return React.createElement(IconComponent, { size: 28 });
  };

  return (
    <section className={`py-20 ${className}`}>
      <div className="container">
        <SectionHeader
          tagline={content.tagline}
          heading={content.heading}
          subheading={content.subheading}
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col rounded-xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-darkmode-theme-light"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 transition-colors duration-300 group-hover:from-blue-500 group-hover:to-purple-500 group-hover:text-white dark:text-blue-400">
                {renderIcon(industry.icon)}
              </div>
              <h3 className="mb-3 text-xl font-medium text-gray-900">
                {industry.title}
              </h3>
              <p className="text-gray-500">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
