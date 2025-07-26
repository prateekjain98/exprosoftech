import React, { useRef } from "react";
import { FaCloud, FaDatabase, FaChartLine, FaDollarSign , FaHeadphones, FaGlobe, FaBolt, FaIndustry, FaMoneyBillWave, FaGraduationCap, FaBoxOpen ,} from "react-icons/fa";
import {  FiUsers,
  FiSettings,
  FiBox,
  FiTrendingUp,
  FiTarget,
  FiShield,
  FiZap,
  FiCpu,
  FiGlobe,
  FiLayers,
  FiDatabase,
  FiCloud,
  FiCode,
  FiBriefcase,
  FiBarChart2,}
  from "react-icons/fi";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionHeader from "./SectionHeader";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Icon map for cloud specializations
const cloudIconMap = {
  FaCloud,
  FaDatabase,
  FaChartLine,
  FaHeadphones,
  FaDollarSign,
  FaGlobe,
  FaBolt,
  FaIndustry,
  FaMoneyBillWave,
  FaGraduationCap,
  FaBoxOpen,

  FiUsers,
  FiSettings,
  FiBox,
  FiTrendingUp,
  FiTarget,
  FiShield,
  FiZap,
  FiCpu,
  FiGlobe,
  FiLayers,
  FiDatabase,
  FiCloud,
  FiCode,
  FiBriefcase,
  FiBarChart2,
};

export interface CloudSpecialization {
  id: string;
  name: string;
  description: string;
  icon: string; // icon name, e.g. 'FaCloud', or emoji fallback
  features: string[];
}

interface Props {
  className?: string;
  cloudSpecializations?: CloudSpecialization[];
  heading?: {
    tagline: string;
    title: string;
    description: string;
  };
  data?: {
    heading: {
      tagline: string;
      title: string;
      description: string;
    };
    specializations: CloudSpecialization[];
  };
}

// Export the default data for use in other components
export const defaultCloudSpecializations: CloudSpecialization[] = [
  {
    id: "data-cloud",
    name: "Data Cloud",
    description: "Unify and activate your customer data across every touchpoint with intelligent data management and real-time insights.",
    icon: "FaDatabase",
    features: ["Data Integration", "Real-time Analytics", "Customer 360", "AI Insights"]
  },
  {
    id: "sales-cloud",
    name: "Sales Cloud",
    description: "Accelerate your sales process with intelligent automation, pipeline management, and predictive analytics.",
    icon: "FaChartLine",
    features: ["Lead Management", "Opportunity Tracking", "Sales Automation", "Forecasting"]
  },
  {
    id: "service-cloud",
    name: "Service Cloud",
    description: "Deliver exceptional customer service with omnichannel support, case management, and AI-powered solutions.",
    icon: "FaHeadphones",
    features: ["Case Management", "Omnichannel Support", "Knowledge Base", "Service Analytics"]
  },
  {
    id: "experience-cloud",
    name: "Experience Cloud",
    description: "Create personalized digital experiences that connect customers, partners, and employees seamlessly.",
    icon: "FaGlobe",
    features: ["Community Building", "Partner Portals", "Customer Portals", "Digital Experiences"]
  },
  {
    id: "field-service",
    name: "Field Service Lightning",
    description: "Optimize field operations with intelligent scheduling, mobile workforce management, and IoT integration.",
    icon: "FaBolt",
    features: ["Work Order Management", "Mobile App", "Scheduling Optimization", "IoT Integration"]
  },
  {
    id: "manufacturing-cloud",
    name: "Manufacturing Cloud",
    description: "Transform manufacturing operations with account-based forecasting, partner management, and supply chain visibility.",
    icon: "FaIndustry",
    features: ["Account Planning", "Partner Management", "Supply Chain", "Production Tracking"]
  },
  {
    id: "crm-analytics",
    name: "CRM Analytics",
    description: "Turn data into actionable insights with advanced analytics, AI-powered predictions, and interactive dashboards.",
    icon: "FaChartLine",
    features: ["Advanced Analytics", "AI Predictions", "Interactive Dashboards", "Data Visualization"]
  },
  {
    id: "revenue-cloud",
    name: "Revenue Cloud",
    description: "Streamline your revenue operations with intelligent quoting, contract management, and subscription billing.",
    icon: "FaMoneyBillWave",
    features: ["Configure Price Quote", "Contract Management", "Subscription Billing", "Revenue Recognition"]
  },
  {
    id: "education-cloud",
    name: "Education Cloud",
    description: "Transform educational experiences with student lifecycle management, recruitment, and engagement tools.",
    icon: "FaGraduationCap",
    features: ["Student Management", "Recruitment", "Academic Planning", "Alumni Engagement"]
  }
];

const CloudCard: React.FC<{ cloud: CloudSpecialization; index: number }> = ({ cloud, index }) => {
  // Render icon from map or fallback to emoji/string
  const IconComponent = cloudIconMap[cloud.icon as keyof typeof cloudIconMap];
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] group"
    >
      <div 
        className="relative overflow-hidden rounded-3xl backdrop-blur-lg bg-gray-900 border border-gray-700 transition-all duration-500 h-full shadow-lg
          hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-[1.02] hover:border-blue-500/50"
      >
        {/* Animated gradient background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-[0.03] 
            group-hover:opacity-[0.08] transition-opacity duration-500"
        />
        
        {/* Content container */}
        <div className="relative z-10 p-6 sm:p-8">
          {/* Icon and Title section */}
          <div className="flex items-start gap-4 mb-6">
            <motion.div 
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
              }}
              transition={{ duration: 0.3 }}
              className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600
                shadow-lg transform-gpu"
            >
              {IconComponent ? (
                <IconComponent className="text-white text-xl sm:text-2xl" />
              ) : (
                <span className="text-xl sm:text-2xl">{cloud.icon}</span>
              )}
            </motion.div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                {cloud.name}
              </h3>
            </div>
          </div>

          {/* Description with gradient underline */}
          <div className="relative mb-6 sm:mb-8">
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {cloud.description}
            </p>
            <div className="absolute bottom-0 left-0 h-px w-16 bg-gradient-to-r from-blue-500 to-blue-600" />
          </div>

          {/* Features grid */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-medium text-gray-100 text-xs sm:text-sm uppercase tracking-wider">
              Key Features
            </h4>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {cloud.features?.map((feature, featureIndex) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 sm:gap-3 group/feature"
                >
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex-shrink-0
                    group-hover/feature:scale-125 group-hover/feature:shadow-lg group-hover/feature:shadow-blue-500/50 
                    transition-all duration-300" />
                  <span className="text-xs sm:text-sm text-gray-400 group-hover/feature:text-gray-100 transition-colors duration-300 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const CloudSpecializations: React.FC<Props> = ({
  className = "",
  cloudSpecializations = defaultCloudSpecializations,
  heading = {
    tagline: "Our Expertise",
    title: "Cloud Specializations",
    description: "We help businesses transform with comprehensive cloud solutions across the entire Salesforce ecosystem"
  },
  data
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Use data from Sanity if available, otherwise use default values
  const displayHeading = data?.heading || heading;
  const displaySpecializations = data?.specializations || cloudSpecializations;

  useGSAP(() => {
    if (!containerRef.current || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    const cardsWrapper = scrollContainer.parentElement; // The h-screen wrapper
    
    // Calculate total scroll distance using actual scroll width
    const getScrollAmount = () => {
      const scrollWidth = scrollContainer.scrollWidth;
      const viewportWidth = window.innerWidth;
      const containerWidth = cardsWrapper?.offsetWidth || viewportWidth;
      
      // Return negative value for leftward scroll, ensure we don't scroll past the content
      return Math.min(0, -(scrollWidth - containerWidth));
    };

    // Create the horizontal scroll animation
    const scrollTween = gsap.to(scrollContainer, {
      x: getScrollAmount,
      ease: "none",
    });

    // Create ScrollTrigger - pin when scrollRef container reaches top
    ScrollTrigger.create({
      trigger: cardsWrapper, // Target the cards wrapper instead of entire component
      start: "top top",
      end: () => `+=${Math.abs(getScrollAmount()) + window.innerHeight}`, // Dynamic end based on scroll amount
      animation: scrollTween,
      pin: cardsWrapper, // Pin the cards wrapper specifically
      scrub: 1,
      invalidateOnRefresh: true,
      onRefresh: () => {
        // Recalculate scroll amount on window resize
        scrollTween.vars.x = getScrollAmount();
        scrollTween.invalidate();
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [displaySpecializations]);

  return (
    <section 
      ref={containerRef}
      className={`${className} bg-white relative`}
    >
      {/* Header section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="row">
          <div className="mx-auto mb-12">
            <SectionHeader
              tagline={displayHeading.tagline}
              heading={displayHeading.title}
              subheading={displayHeading.description}
              alignment="center"
            />
          </div>
        </div>
      </div>

      {/* Scrolling cards container */}
      <div className="h-screen flex items-center overflow-hidden">
        <div 
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 lg:gap-8 px-8"
        >
          {displaySpecializations.map((cloud, index) => (
            <CloudCard 
              key={cloud.id} 
              cloud={cloud} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};