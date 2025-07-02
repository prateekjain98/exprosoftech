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
      return <FaHeart size={30} className="text-blue-900" />;
    }

    // If icon is a function (React component)
    if (typeof icon === "function") {
      const IconComponent = icon;
      return <IconComponent size={30} className="text-blue-900" />;
    }

    // If icon is a string (icon name)
    if (typeof icon === "string") {
      // Check if the icon exists in our map
      if (iconMap[icon]) {
        const IconComponent = iconMap[icon];
        return <IconComponent size={30} className="text-blue-900" />;
      }
    }

    // Default fallback
    return <FaHeart size={30} className="text-blue-900" />;
  };

  return (
    <section className={`section relative overflow-hidden rounded-3xl bg-gray-100 ${className}`}>
      {/* Background gradient circles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large gradient circle - bottom center */}
        <div className="absolute -top-[40rem] lg:-top-[32rem] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-t from-blue-500 via-blue-400 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-[85rem] mx-auto px-3 relative z-10">
        <div className="row">
          <div className="mx-auto">
            <SectionHeader
              tagline={heading?.tagline || ''}
              heading={heading?.title || ''}
              subheading={heading?.description || ''}
              alignment="center"
            />
          </div>
          <div className="col-12 pt-20 mt-10">
            <div className="flex flex-wrap justify-center gap-4">
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
                  <div className="min-h-full p-6">
                    <div className="mb-6 flex justify-start">
                      <div 
                        className="flex h-14 w-14 items-center justify-center rounded-full backdrop-blur-md border border-blue-700/70"
                        style={{
                          background: 'linear-gradient(to bottom, rgba(59,130,246,0.5), rgba(37,99,235,0.4), rgba(96,165,250,0.5))'
                        }}
                      >
                        {renderIcon(benefit.icon)}
                      </div>
                    </div>
                      <div className="text-left">
                        <h3 className="mb-3 md:text-2xl font-medium text-dark tracking-wide h-20 flex items-start ">
                          {benefit.title}
                        </h3>
                        <p className="text-text">
                          {benefit.description}
                        </p>
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
