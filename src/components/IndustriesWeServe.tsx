import React, { useState } from "react";
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
  FaChartLine,
  FaHandshake,
  FaHeart,
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
  FaGlobe,
  FaChartBar,
  FaHeadset,
  FaMapMarkedAlt,
  FaRecycle,
  FaCalendarAlt,
  FaFilter,
  FaChartPie,
  FaChartArea,
  FaTachometerAlt,
  FaBolt,
  FaRocket,
  FaDollarSign,
  FaCoins,
  FaPercent,
  FaPiggyBank,
  FaArrowUp,
  FaTrophy,
  FaMedal,
  FaStar,
  FaClock,
  FaHourglass,
  FaUser,
  FaCogs,
  FaMicrochip,
  FaDatabase,
  FaCloud,
  FaTruck,
  FaHome,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";

// Icon mapping with better typing
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
  FaChartLine,
  FaHandshake,
  FaHeart,
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
  FaGlobe,
  FaChartBar,
  FaHeadset,
  FaMapMarkedAlt,
  FaRecycle,
  FaCalendarAlt,
  FaFilter,
  FaChartPie,
  FaChartArea,
  FaTachometerAlt,
  FaBolt,
  FaRocket,
  FaDollarSign,
  FaCoins,
  FaPercent,
  FaPiggyBank,
  FaArrowUp,
  FaTrophy,
  FaMedal,
  FaStar,
  FaClock,
  FaHourglass,
  FaUser,
  FaCogs,
  FaMicrochip,
  FaDatabase,
  FaCloud,
  FaTruck,
  FaHome,
};

// Industry interface with color scheme
interface Industry {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  color?: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

// Define color schemes for industries (similar to CloudSpecializations)
const industryColorSchemes = [
  {
    primary: "from-primary to-primary-light",
    secondary: "from-secondary-100 to-secondary-200",
    accent: "border-primary/20"
  },
  {
    primary: "from-primary-dark to-primary",
    secondary: "from-blue-50 to-blue-100",
    accent: "border-primary-dark/20"
  },
  {
    primary: "from-secondary-400 to-secondary-300",
    secondary: "from-slate-50 to-slate-100",
    accent: "border-secondary-400/20"
  },
  {
    primary: "from-primary-light to-secondary",
    secondary: "from-indigo-50 to-blue-50",
    accent: "border-primary-light/20"
  },
  {
    primary: "from-secondary-300 to-secondary-400",
    secondary: "from-gray-50 to-blue-50",
    accent: "border-secondary-300/20"
  },
  {
    primary: "from-primary to-secondary-400",
    secondary: "from-slate-50 to-blue-50",
    accent: "border-primary/20"
  }
];

// Hardcoded industries data from Cyntexa website
const industriesData: Industry[] = [
  {
    title: "Financial Services",
    description: "Secure your confidential customer data through technological advancements in financial services. Streamline operations, enhance security, and personalize experiences with our digital transformation expertise.",
    icon: "FaMoneyBillWave"
  },
  {
    title: "eCommerce",
    description: "Accelerate your eCommerce growth with comprehensive digital solutions that enhance customer experience, streamline operations, and drive sales.",
    icon: "FaShoppingCart"
  },
  {
    title: "Manufacturing",
    description: "Modernize your manufacturing processes with digital transformation solutions that improve efficiency, reduce costs, and enhance product quality.",
    icon: "FaIndustry"
  },
  {
    title: "Healthcare",
    description: "Enhance patient care and operational efficiency in healthcare with secure, compliant solutions that improve outcomes and streamline processes.",
    icon: "FaHospital"
  },
  {
    title: "Real Estate",
    description: "Transform your real estate business with digital solutions that streamline property management, enhance customer experience, and drive sales growth.",
    icon: "FaHome"
  },
  {
    title: "Education",
    description: "Revolutionize education delivery with innovative solutions that enhance learning experiences, improve administrative efficiency, and support digital transformation.",
    icon: "FaGraduationCap"
  }
];

// Enhanced Industry Card Component
const IndustryCard: React.FC<{ industry: Industry; index: number }> = ({ industry, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Assign color scheme based on index
  const colorScheme = industryColorSchemes[index % industryColorSchemes.length];
  
  const renderIcon = (iconName: keyof typeof iconMap): JSX.Element => {
    const IconComponent = iconMap[iconName];
    if (!IconComponent) {
      console.warn(`Icon "${iconName}" not found in iconMap`);
      return React.createElement(iconMap.FaStore, { size: 24 });
    }
    return React.createElement(IconComponent, { size: 24 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <div className={`relative h-full rounded-2xl border-2 ${colorScheme.accent} bg-white p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
        {/* Gradient background on hover */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorScheme.secondary} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon and Title */}
          <div className="mb-4 flex items-center gap-3">
            <motion.div 
              animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
              className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${colorScheme.primary} shadow-lg`}
            >
              <div className="text-white">
                {renderIcon(industry.icon)}
              </div>
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900">{industry.title}</h3>
          </div>

          {/* Description */}
          <p className="mb-6 text-gray-600 leading-relaxed">
            {industry.description}
          </p>

          {/* Learn More Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full rounded-lg bg-gradient-to-r ${colorScheme.primary} px-4 py-2.5 text-white font-medium shadow-md transition-all duration-300 hover:shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0`}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Component props
interface Props {
  className?: string;
  data?: {
    heading?: {
      tagline?: string;
      title?: string;
      description?: string;
    };
    industries?: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
}

export const IndustriesWeServe: React.FC<Props> = ({
  className = "",
  data
}): JSX.Element => {
  // Use data from props if available, otherwise use default data
  const heading = data?.heading || {
    tagline: "Industries",
    title: "Industries We Serve",
    description: "Discover the industries we transform with our solutions for value and growth."
  };

  const industries = data?.industries?.map((industry, index) => ({
    title: industry.title,
    description: industry.description,
    icon: industry.icon as keyof typeof iconMap
  })) || industriesData;

  return (
    <section className={`py-20 bg-gray-50/50 ${className}`}>
      <div className="container">
        <SectionHeader
          tagline={heading.tagline}
          heading={heading.title || "Industries We Serve"}
          subheading={heading.description}
        />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 mb-16 flex justify-center"
        >
          <div className="flex items-center gap-8 rounded-2xl bg-white px-8 py-4 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                {industries.length}+
              </div>
              <div className="text-sm text-gray-600">Industries</div>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-dark to-secondary bg-clip-text text-transparent">
                1000+
              </div>
              <div className="text-sm text-gray-600">Projects Delivered</div>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-secondary-400 to-primary-light bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="rounded-3xl bg-gradient-to-r from-primary via-primary-light to-secondary p-1">
            <div className="rounded-3xl bg-white px-8 py-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Industry?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let our industry experts help you navigate digital transformation with tailored solutions that drive growth and efficiency in your specific sector.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-primary-light text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Today
              </motion.button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default IndustriesWeServe; 