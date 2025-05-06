import React from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons/lib";
import { Button } from "../../components/common/Button";
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
  FaArrowRight,
  FaDatabase,
  FaCloudDownloadAlt,
  FaChartLine,
  FaClock
} from "react-icons/fa";

// Icon mapping
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
  FaDatabase,
  FaCloudDownloadAlt,
  FaChartLine,
  FaClock
};

// Create a React version of SectionHeader
const SectionHeader: React.FC<{
  tagline?: string;
  heading: string;
  subheading?: string;
  className?: string;
  theme?: "light" | "dark";
}> = ({ tagline, heading, subheading, className = "", theme = "light" }) => {
  return (
    <div className={`text-center mb-10 lg:mb-16 ${className}`}>
      {tagline && (
        <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs sm:text-sm font-medium shadow-lg mb-4 sm:mb-5">
          {tagline}
        </span>
      )}
      <h2 
        className={`text-3xl sm:text-4xl lg:text-[42px] font-medium mb-4 sm:mb-5 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        {heading}
      </h2>
      {subheading && (
        <p className={`text-sm sm:text-base max-w-2xl sm:max-w-3xl mx-auto leading-relaxed ${
          theme === "dark" ? "text-gray-300/90" : "text-gray-600"
        }`}>
          {subheading}
        </p>
      )}
    </div>
  );
};

// Industry Applications interfaces
interface TimelineItem {
  period: string;
  description: string;
}

interface CompatibilityFeature {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
}

interface IndustryApp {
  name: string;
  description: string;
  icon: keyof typeof iconMap;
}

// Combined component props
interface IndustryServicesAndApplicationsProps {
  className?: string;
  // Industry Applications props
  applicationsHeading: {
    title: string;
    tagline?: string;
    description?: string;
  };
  ctaText?: string;
  ctaLink?: string;
  isCalendly?: boolean;
  applicationIndustries?: IndustryApp[];
  compatibilityFeatures?: CompatibilityFeature[];
  timeline?: TimelineItem[];
}

const IndustryServicesAndApplications: React.FC<IndustryServicesAndApplicationsProps> = ({
  className = "",
  // Industry Applications props
  applicationsHeading = {
    title: "Demand-Driven Transformation – Industry Applications",
    description: "Our solutions work across industries, including:"
  },
  ctaText = "Find Out How It Works for Your Industry →",
  ctaLink = "#contact",
  isCalendly = false,
  applicationIndustries = [],
  // = [
  //   {
  //     name: "Manufacturing",
  //     description: "Improve production flow, optimize material buffers, and reduce WIP inventory.",
  //     icon: "FaIndustry"
  //   },
  //   {
  //     name: "Retail & Distribution",
  //     description: "Optimize store replenishment, omnichannel inventory, and demand planning.",
  //     icon: "FaStore"
  //   },
  //   {
  //     name: "B2B Sales & Supply Chains",
  //     description: "Increase product availability, accelerate order fulfillment, and minimize stockouts.",
  //     icon: "FaNetworkWired"
  //   }
  // ],
  compatibilityFeatures = [
    // {
    //   title: "ERP/CRM Connectors",
    //   description: "Standard APIs for seamless data exchange with SAP, Oracle, Microsoft Dynamics, and others.",
    //   icon: "FaDatabase"
    // },
    // {
    //   title: "Minimal Disruption",
    //   description: "Phased rollout reduces downtime, ensuring business continuity.",
    //   icon: "FaCloudDownloadAlt"
    // },
    // {
    //   title: "Real-Time Dashboards",
    //   description: "Unified KPI views for management and frontline teams.",
    //   icon: "FaChartLine"
    // }
  ],
  timeline = [
    // {
    //   period: "3–6 Months",
    //   description: "Noticeable reduction in buffer stock and expedite costs."
    // },
    // {
    //   period: "6–9 Months",
    //   description: "Marked improvements in lead times, higher service levels, and synergy between sales & supply chain."
    // },
    // {
    //   period: "12 Months & Beyond",
    //   description: "Full ROI on implementation as freed-up capital and stable workflows drive profitable growth."
    // }
  ]
}) => {
  const renderIcon = (iconName: keyof typeof iconMap): JSX.Element => {
    const IconComponent = iconMap[iconName];
    if (!IconComponent) {
      console.warn(`Icon "${iconName}" not found in iconMap`);
      return React.createElement(iconMap.FaStore, { size: 24 });
    }
    return React.createElement(IconComponent, { size: 24 });
  };

  return (
    <section className={`py-20 ${className}`}>
      <div className="container">
        <SectionHeader
          tagline={applicationsHeading.tagline}
          heading={applicationsHeading.title}
          subheading={applicationsHeading.description}
        />
        
        {/* Industry Applications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {applicationIndustries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 border border-gray-100"
            >
              <div className="p-4 bg-blue-50 rounded-lg inline-block mb-4">
                <div className="text-blue-600">
                  {renderIcon(industry.icon)}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{industry.name}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              href={ctaLink}
              variant="primary"
              isCalendlyButton={isCalendly}
              showArrow={false}
            >
              {ctaText}
            </Button>
          </motion.div>
        </div>
        
        {/* Two-column layout for Integration & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Integration & Technical Compatibility Section */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Integration & Technical Compatibility</h3>
            
            <p className="text-gray-600 mb-8">
              We understand the importance of aligning new systems with your existing IT infrastructure:
            </p>
            
            <div className="space-y-6">
              {compatibilityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 text-blue-600 mt-1.5">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeOpacity="0.5" />
                      <path d="M6 8.5L7.5 10L10.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Timeline Section */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                <FaClock size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">ROI Timeline</h3>
            </div>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="font-bold text-blue-600 text-xl mb-3">
                    {item.period}
                  </div>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryServicesAndApplications;