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
  FaGlobe,
  FaChartBar,
  FaHeadset,
  FaMoneyBillWave,
  FaNetworkWired,
  FaIndustry,
  FaShoppingCart,
  FaPhoneAlt,
  FaBoxes,
  FaBuilding,
  FaSearchLocation,
  FaMapMarkedAlt,
  FaStore,
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
  FaServer,
  FaDatabase,
  FaCloud,
  FaCode,
  FaGitAlt,
  FaBoxOpen,
  FaFlask,
  FaMagic,
  FaCommentAlt,
  FaLock
} from "react-icons/fa";
import SectionHeader from "../../../components/SectionHeader";

interface Benefit {
  title: string;
  description: string;
  icon: any; // Changed from IconType to any
}

interface HeadingProps {
  tagline: string;
  title: string;
  description: string;
}

interface Benefits {
  title: string;
  description: string;
  icon: string;
}

interface Props {
  className?: string;
  heading: HeadingProps;
  benefits: Benefits[];
}

// Icon mapping
const iconMap: Record<string, IconType> = {
  FaChartLine,
  FaHandshake,
  FaHeart,
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
  FaGlobe,
  FaChartBar,
  FaHeadset,
  FaMoneyBillWave,
  FaNetworkWired,
  FaIndustry,
  FaShoppingCart,
  FaPhoneAlt,
  FaBoxes,
  FaBuilding,
  FaSearchLocation,
  FaMapMarkedAlt,
  FaStore,
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
  FaServer,
  FaDatabase,
  FaCloud,
  FaCode,
  FaGitAlt,
  FaBoxOpen,
  FaFlask,
  FaMagic,
  FaCommentAlt,
  FaLock
};

export const ServicesBestPractices: React.FC<Props> = ({ 
  className = "", 
  heading,
  benefits = []
}) => {
  // Function to safely render icons
  const renderIcon = (icon: any) => {
    if (!icon) {
      return <FaHeart size={48} />;
    }

    // If icon is a function (React component)
    if (typeof icon === "function") {
      const IconComponent = icon;
      return <IconComponent size={48} />;
    }

    // If icon is a string (icon name)
    if (typeof icon === "string") {
      // Check if the icon exists in our map
      if (iconMap[icon]) {
        const IconComponent = iconMap[icon];
        return <IconComponent size={48} />;
      }
    }

    // Default fallback
    return <FaHeart size={48} />;
  };

  return (
    <section className={`section ${className}`}>
      <div className="max-w-[85rem] mx-auto px-3">
        <div className="row">
          <div className="mx-auto">
            <SectionHeader
              tagline={heading?.tagline || ''}
              heading={heading?.title || ''}
              subheading={heading?.description || ''}
              alignment="center"
            />
          </div>
          <div className="col-12 pt-20 mt-10 bg-gradient-to-b from-primary/50 to-transparent rounded-t-3xl">
            <div className="row g-4 justify-start">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="md:col-6 lg:col-4"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="min-h-full p-6"
                  >
                    <div className="mb-6 flex justify-start">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary transition-transform duration-300 hover:scale-110">
                        <div className="text-white">
                          {renderIcon(benefit.icon)}
                        </div>
                      </div>
                    </div>
                    <div className="text-left">
                      <h3 className="h5 mb-3 md:text-3xl font-medium text-dark tracking-wide transition-colors duration-300 hover:text-primary">
                        {benefit.title}
                      </h3>
                      <p className="text-text leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
