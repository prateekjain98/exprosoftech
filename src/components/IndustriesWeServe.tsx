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

// Industry interface
interface Industry {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
}

// Hardcoded industries data from Cyntexa website
const industriesData: Industry[] = [
  {
    title: "Financial Services",
    description: "Secure your confidential customer data through technological advancements in financial services. Streamline operations, enhance security, and personalize experiences with our digital transformation expertise.",
    icon: "FaMoneyBillWave"
  },
//   {
//     title: "Insurance",
//     description: "Insurance companies are expanding grounds of success by leveraging data and technology to create seamless customer experiences in the evolving insurance sector. Experience it all with us.",
//     icon: "FaShieldAlt"
//   },
//   {
//     title: "Retail & Consumer Goods",
//     description: "The retail & consumer goods market has shifted. We help you navigate the 'new normal' with data-driven strategies and personalized experiences with our customized digital transformation solutions.",
//     icon: "FaStore"
//   },
//   {
//     title: "Media & Communications",
//     description: "Transform your media and communications business with innovative digital solutions that enhance customer engagement and streamline content delivery across multiple channels.",
//     icon: "FaPhoneAlt"
//   },
//   {
//     title: "Technology",
//     description: "Empower your technology business with cutting-edge solutions that drive innovation, improve operational efficiency, and deliver exceptional customer experiences.",
//     icon: "FaLaptopCode"
//   },
//   {
//     title: "Professional Services",
//     description: "Optimize your professional services operations with tailored solutions that improve client management, project delivery, and business growth.",
//     icon: "FaUserTie"
//   },
//   {
//     title: "Energy & Utilities",
//     description: "Transform your energy and utilities operations with smart solutions that improve efficiency, enhance customer service, and support sustainable practices.",
//     icon: "FaBolt"
//   },
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
//   {
//     title: "Logistics & Transportation",
//     description: "Optimize your logistics and transportation operations with smart solutions that improve delivery efficiency, reduce costs, and enhance customer satisfaction.",
//     icon: "FaTruck"
//   },
//   {
//     title: "Non Profit",
//     description: "Empower your non-profit organization with technology solutions that enhance donor management, improve program delivery, and maximize social impact.",
//     icon: "FaHeart"
//   },
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

// Component props
interface Props {
  className?: string;
}

export const IndustriesWeServe: React.FC<Props> = ({
  className = ""
}): JSX.Element => {
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
          tagline="Industries"
          heading="Industries We Serve"
          subheading="Discover the industries we transform with our solutions for value and growth."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-3">
          {industriesData.map((industry, index) => (
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

export default IndustriesWeServe; 