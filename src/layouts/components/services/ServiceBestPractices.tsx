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
      return <FaHeart size={32} className="text-white" />;
    }

    // If icon is a function (React component)
    if (typeof icon === "function") {
      const IconComponent = icon;
      return <IconComponent size={32} className="text-white" />;
    }

    // If icon is a string (icon name)
    if (typeof icon === "string") {
      // Check if the icon exists in our map
      if (iconMap[icon]) {
        const IconComponent = iconMap[icon];
        return <IconComponent size={32} className="text-white" />;
      }
    }

    // Default fallback
    return <FaHeart size={32} className="text-white" />;
  };

  return (
    <section className={`section ${className}`}>
      <div className="max-w-[75rem] mx-auto px-3">
        <div className="row">
          <div className="mx-auto">
            <SectionHeader
              tagline={heading?.tagline || ''}
              heading={heading?.title || ''}
              subheading={heading?.description || ''}
              alignment="center"
            />
          </div>
          <div className="col-12 pt-20 lg:mt-10">
            <div className="row g-4 justify-center">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-80 border-2 rounded-3xl bg-white"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="p-6">
                    <div className="mb-6 flex justify-start">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                        {renderIcon(benefit.icon)}
                      </div>
                    </div>
                    <div className="text-left">
                      {benefit.title && (
                        <h3
                          className="h5 mb-3 md:text-3xl font-medium text-dark tracking-wide h-20 lg:h-16"
                          dangerouslySetInnerHTML={{ __html: benefit.title }}
                        />
                      )}
                      {benefit.description && (
                        <p
                          className="text-text"
                          dangerouslySetInnerHTML={{ __html: benefit.description }}
                        />
                      )}
                    </div>
                    </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
