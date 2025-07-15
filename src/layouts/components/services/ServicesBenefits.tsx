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
};

// Define color schemes for benefits (matching IndustriesWeServe pattern)
const benefitColorSchemes = [
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

// Update the Benefits interface to be more specific about icon type
interface Benefits {
  title: string;
  description: string;
  icon: keyof typeof iconMap; // This ensures icon must be a key from iconMap
}

interface HeadingProps {
  tagline: string;
  title: string;
  description: string;
}

// Enhanced Benefit Card Component (matching IndustriesWeServe pattern)
const BenefitCard: React.FC<{ benefit: Benefits; index: number }> = ({ benefit, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Assign color scheme based on index
  const colorScheme = benefitColorSchemes[index % benefitColorSchemes.length];
  
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
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <div className={`relative h-full rounded-2xl border-2 ${colorScheme.accent} bg-white p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-darkmode-theme-light`}>
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
                {renderIcon(benefit.icon)}
              </div>
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {benefit.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Component props
interface Props {
  className?: string;
  heading?: HeadingProps;  // Make heading optional
  benefits: Benefits[];
}

export const ServicesBenefits: React.FC<Props> = ({
  className = "",
  heading,
  benefits = []
}): JSX.Element => {
  return (
    <section className={`py-20 bg-gray-50/50 ${className}`}>
      <div className="container">
        <SectionHeader
          tagline={heading?.tagline || ""}
          heading={heading?.title || ""}
          subheading={heading?.description || ""}
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
