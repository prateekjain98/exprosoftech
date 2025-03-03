import React from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons/lib";
import {
  FaChartLine,
  FaHandshake,
  FaHeart,
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import SectionHeader from "../../../components/SectionHeader";

interface Benefit {
  title: string;
  description: string;
  icon: any; // Changed from IconType to any
}

interface BenefitsContent {
  tagline: string;
  heading: string;
  subheading: string;
  benefits: Benefit[];
}

interface Props {
  className?: string;
  content: BenefitsContent;
}

// Icon mapping
const iconMap: Record<string, IconType> = {
  FaChartLine,
  FaHandshake,
  FaHeart,
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
};

export const ServicesBenefits: React.FC<Props> = ({ className, content }) => {
  // Function to safely render icons
  const renderIcon = (icon: any) => {
    if (!icon) {
      return <FaHeart size={32} />;
    }

    // If icon is a function (React component)
    if (typeof icon === "function") {
      const IconComponent = icon;
      return <IconComponent size={32} />;
    }

    // If icon is a string (icon name)
    if (typeof icon === "string") {
      // Check if the icon exists in our map
      if (iconMap[icon]) {
        const IconComponent = iconMap[icon];
        return <IconComponent size={32} />;
      }
    }

    // Default fallback
    return <FaHeart size={32} />;
  };

  return (
    <section
      className={`bg-gradient-to-b from-gray-50 to-white py-20 dark:from-darkmode-body dark:to-darkmode-theme-light ${className}`}
    >
      <div className="container">
        <SectionHeader
          tagline={content.tagline}
          heading={content.heading}
          subheading={content.subheading}
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {content.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                <div className="absolute -inset-3 rotate-45 transform rounded-[20%] bg-gradient-to-br from-blue-50 to-purple-50 transition-all duration-300 group-hover:rotate-[135deg]" />
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <div className="absolute inset-0 rotate-45 transform rounded-[20%] bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
                  <div className="relative z-10 text-blue-600 transition-transform duration-300 group-hover:scale-110">
                    {renderIcon(benefit.icon)}
                  </div>
                </div>
              </div>

              <div className="relative">
                <h3 className="mb-3 text-xl font-medium text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                  {benefit.title}
                </h3>
                <p className="text-gray-500">{benefit.description}</p>
              </div>

              <div className="absolute -right-4 bottom-0 hidden h-16 w-16 opacity-10 lg:block">
                <div
                  className="absolute h-1.5 w-1.5 rounded-full bg-blue-600"
                  style={{ top: "0%", left: "0%" }}
                />
                <div
                  className="absolute h-1.5 w-1.5 rounded-full bg-blue-600"
                  style={{ top: "20%", left: "20%" }}
                />
                <div
                  className="absolute h-1.5 w-1.5 rounded-full bg-blue-600"
                  style={{ top: "40%", left: "40%" }}
                />
                <div
                  className="absolute h-1.5 w-1.5 rounded-full bg-purple-600"
                  style={{ top: "60%", left: "60%" }}
                />
                <div
                  className="absolute h-1.5 w-1.5 rounded-full bg-purple-600"
                  style={{ top: "80%", left: "80%" }}
                />
                <div
                  className="absolute h-1.5 w-1.5 rounded-full bg-purple-600"
                  style={{ top: "100%", left: "100%" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
