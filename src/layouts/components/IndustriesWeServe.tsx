import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import type { IconType } from "react-icons/lib";
import { Button } from "../../components/common/Button";
import SectionHeader from "../../components/SectionHeader";
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

// Sanity data structure
interface IndustriesSectionData {
  heading: {
    title?: string;
    subtitle?: string;
    description?: string;
  };
  industries: IndustryApp[];
}

// Enhanced Industry Card Component
const IndustryCard: React.FC<{ industry: IndustryApp; index: number }> = ({ industry, index }) => {
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
      transition={{ duration: 0.4, delay: index * 0.1 }}
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
            <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
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

// Animated Counter Component
const AnimatedCounter: React.FC<{
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  isInView: boolean;
  gradientClasses?: string;
}> = ({ from, to, duration = 2000, suffix = "", isInView, gradientClasses = "from-primary to-primary-light" }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(from + (to - from) * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [from, to, duration, isInView]);

  return (
    <div className={`text-3xl font-bold bg-gradient-to-r ${gradientClasses} bg-clip-text text-transparent`}>
      {count}{suffix}
    </div>
  );
};

// Combined component props
interface IndustryServicesAndApplicationsProps {
  className?: string;
  // Option 1: Accept Sanity data directly
  data?: IndustriesSectionData;
  // Option 2: Accept individual props (backwards compatibility)
  applicationsHeading?: {
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
  // Accept Sanity data or individual props
  data,
  applicationsHeading,
  applicationIndustries,

}) => {
  // Use data from props if available, otherwise fall back to individual props
  const heading = data?.heading ? {
    title: data.heading.title || "",
    tagline: data.heading.subtitle,
    description: data.heading.description || "Our solutions work across industries, including:"
  } : (applicationsHeading || {
    title: "",
    description: ""
  });
  
  const industries = data?.industries || applicationIndustries || [];
  
  // Create a ref for the stats section to detect when it's in view
  const statsRef = React.useRef(null);
  const isInView = useInView(statsRef, { once: true });

  return (
    <section className={`py-20 bg-gray-50/50 ${className}`}>
      <div className="container">
        <SectionHeader
          tagline={heading.tagline}
          heading={heading.title || ""}
          subheading={heading.description}
          alignment="center"
        />

        {/* Stats */}
        
        
        {/* Industry Applications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} index={index} />
          ))}
        </div>
        
        {/* Stats Section */}
         <motion.div
           ref={statsRef}
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="mt-12 mb-16 flex justify-center"
         >
           <div className="flex items-center gap-8 rounded-2xl bg-white px-8 py-4 shadow-lg">
             <div className="text-center">
               <AnimatedCounter 
                 from={0} 
                 to={9} 
                 suffix="+" 
                 isInView={isInView} 
                 duration={1500}
                 gradientClasses="from-primary to-primary-light"
               />
               <div className="text-sm text-gray-600">Industries</div>
             </div>
             <div className="h-8 w-px bg-gray-200" />
             <div className="text-center">
               <AnimatedCounter 
                 from={0} 
                 to={500} 
                 suffix="+" 
                 isInView={isInView} 
                 duration={2000}
                 gradientClasses="from-primary-dark to-secondary"
               />
               <div className="text-sm text-gray-600">Projects Delivered</div>
             </div>
             <div className="h-8 w-px bg-gray-200" />
             <div className="text-center">
               <AnimatedCounter 
                 from={0} 
                 to={98} 
                 suffix="%" 
                 isInView={isInView} 
                 duration={1800}
                 gradientClasses="from-secondary-400 to-primary-light"
               />
               <div className="text-sm text-gray-600">Success Rate</div>
             </div>
           </div>
         </motion.div>
        

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
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

export default IndustryServicesAndApplications;