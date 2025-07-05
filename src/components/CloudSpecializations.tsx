import React, { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import SectionHeader from "./SectionHeader";

// Export the interface for use in other components
export interface CloudSpecialization {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  color: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

interface Props {
  className?: string;
  cloudSpecializations?: CloudSpecialization[];
  heading?: {
    tagline: string;
    title: string;
    description: string;
  };
}

// Export the default data for use in other components
export const defaultCloudSpecializations: CloudSpecialization[] = [
  {
    id: "data-cloud",
    name: "Data Cloud",
    description: "Unify and activate your customer data across every touchpoint with intelligent data management and real-time insights.",
    icon: "🗃️",
    features: ["Data Integration", "Real-time Analytics", "Customer 360", "AI Insights"],
    color: {
      primary: "from-primary to-primary-light",
      secondary: "from-secondary-100 to-secondary-200",
      accent: "border-primary/20"
    }
  },
  {
    id: "sales-cloud",
    name: "Sales Cloud",
    description: "Accelerate your sales process with intelligent automation, pipeline management, and predictive analytics.",
    icon: "📊",
    features: ["Lead Management", "Opportunity Tracking", "Sales Automation", "Forecasting"],
    color: {
      primary: "from-primary-dark to-primary",
      secondary: "from-blue-50 to-blue-100",
      accent: "border-primary-dark/20"
    }
  },
  {
    id: "service-cloud",
    name: "Service Cloud",
    description: "Deliver exceptional customer service with omnichannel support, case management, and AI-powered solutions.",
    icon: "🎧",
    features: ["Case Management", "Omnichannel Support", "Knowledge Base", "Service Analytics"],
    color: {
      primary: "from-secondary-400 to-secondary-300",
      secondary: "from-slate-50 to-slate-100",
      accent: "border-secondary-400/20"
    }
  },
  {
    id: "experience-cloud",
    name: "Experience Cloud",
    description: "Create personalized digital experiences that connect customers, partners, and employees seamlessly.",
    icon: "🌐",
    features: ["Community Building", "Partner Portals", "Customer Portals", "Digital Experiences"],
    color: {
      primary: "from-primary-light to-secondary",
      secondary: "from-indigo-50 to-blue-50",
      accent: "border-primary-light/20"
    }
  },
  {
    id: "field-service",
    name: "Field Service Lightning",
    description: "Optimize field operations with intelligent scheduling, mobile workforce management, and IoT integration.",
    icon: "⚡",
    features: ["Work Order Management", "Mobile App", "Scheduling Optimization", "IoT Integration"],
    color: {
      primary: "from-secondary-300 to-secondary-400",
      secondary: "from-gray-50 to-blue-50",
      accent: "border-secondary-300/20"
    }
  },
  {
    id: "manufacturing-cloud",
    name: "Manufacturing Cloud",
    description: "Transform manufacturing operations with account-based forecasting, partner management, and supply chain visibility.",
    icon: "🏭",
    features: ["Account Planning", "Partner Management", "Supply Chain", "Production Tracking"],
    color: {
      primary: "from-primary to-secondary-400",
      secondary: "from-slate-50 to-blue-50",
      accent: "border-primary/20"
    }
  },
  {
    id: "crm-analytics",
    name: "CRM Analytics",
    description: "Turn data into actionable insights with advanced analytics, AI-powered predictions, and interactive dashboards.",
    icon: "📈",
    features: ["Advanced Analytics", "AI Predictions", "Interactive Dashboards", "Data Visualization"],
    color: {
      primary: "from-primary-dark to-primary-light",
      secondary: "from-blue-50 to-secondary-100",
      accent: "border-primary-dark/20"
    }
  },
  {
    id: "revenue-cloud",
    name: "Revenue Cloud",
    description: "Streamline your revenue operations with intelligent quoting, contract management, and subscription billing.",
    icon: "💰",
    features: ["Configure Price Quote", "Contract Management", "Subscription Billing", "Revenue Recognition"],
    color: {
      primary: "from-secondary to-primary-light",
      secondary: "from-secondary-100 to-secondary-200",
      accent: "border-secondary/20"
    }
  },
  {
    id: "education-cloud",
    name: "Education Cloud",
    description: "Transform educational experiences with student lifecycle management, recruitment, and engagement tools.",
    icon: "🎓",
    features: ["Student Management", "Recruitment", "Academic Planning", "Alumni Engagement"],
    color: {
      primary: "from-primary-light to-secondary-300",
      secondary: "from-indigo-50 to-secondary-100",
      accent: "border-primary-light/20"
    }
  }
];

const CloudCard: React.FC<{ cloud: CloudSpecialization; index: number }> = ({ cloud, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]"
    >
      <div 
        className={`relative overflow-hidden rounded-3xl backdrop-blur-lg bg-blue-100 transition-all duration-500 h-full
          ${isHovered ? 'shadow-2xl scale-[1.02]' : 'shadow-lg'}`}
      >
        {/* Animated gradient background */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br bg-blue-200 opacity-[0.03] 
            group-hover:opacity-[0.08] transition-opacity duration-500`}
        />
        
        {/* Content container */}
        <div className="relative z-10 p-6 sm:p-8">
          {/* Icon and Title section */}
          <div className="flex items-start gap-4 mb-6">
            <motion.div 
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0,
              }}
              transition={{ duration: 0.3 }}
              className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${cloud.color.primary}
                shadow-lg transform-gpu`}
            >
              <span className="text-xl sm:text-2xl">{cloud.icon}</span>
            </motion.div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {cloud.name}
              </h3>
            </div>
          </div>

          {/* Description with gradient underline */}
          <div className="relative mb-6 sm:mb-8">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {cloud.description}
            </p>
            <div className={`absolute bottom-0 left-0 h-px w-16 bg-gradient-to-r ${cloud.color.primary}`} />
          </div>

          {/* Features grid */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-medium text-gray-900 text-xs sm:text-sm uppercase tracking-wider">
              Key Features
            </h4>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {cloud.features.map((feature, featureIndex) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 sm:gap-3 group/feature"
                >
                  <div className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gradient-to-r ${cloud.color.primary}
                    group-hover/feature:scale-125 transition-transform duration-300`} />
                  <span className="text-xs sm:text-sm text-gray-600 group-hover/feature:text-gray-900 transition-colors duration-300">
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

const MarqueeCards: React.FC<{ cards: CloudSpecialization[] }> = ({ cards }) => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimationControls();
  const duplicatedCards = [...cards, ...cards];

  useEffect(() => {
    if (isPaused) {
      controls.stop();
    } else {
      controls.start({
        x: "-50%",
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    }
  }, [isPaused, controls]);

  return (
    <div 
      className="relative overflow-hidden w-full py-4 sm:py-6 lg:py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left blur effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 z-10 bg-gradient-to-r from-white to-transparent" />
      
      {/* Right blur effect */}
      <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 z-10 bg-gradient-to-l from-white to-transparent" />
      
      {/* Marquee container */}
      <motion.div
        className="flex gap-4 sm:gap-6 lg:gap-8"
        initial={{ x: 0 }}
        animate={controls}
      >
        {duplicatedCards.map((card, idx) => (
          <CloudCard 
            key={`${card.id}-${idx}`} 
            cloud={card} 
            index={idx} 
          />
        ))}
      </motion.div>
    </div>
  );
};

export const CloudSpecializations: React.FC<Props> = ({
  className = "",
  cloudSpecializations = defaultCloudSpecializations,
  heading = {
    tagline: "Our Expertise",
    title: "Cloud Specializations",
    description: "We help businesses transform with comprehensive cloud solutions across the entire Salesforce ecosystem"
  }
}) => {
  return (
    <section className={`py-24 relative overflow-hidden ${className}`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-white" />
      <div className="max-w-7xl mx-auto  relative">
        <SectionHeader
          tagline={heading.tagline}
          heading={heading.title}
          subheading={heading.description}
        />

        {/* Marquee Cards */}
        <MarqueeCards cards={cloudSpecializations} />
      </div>
    </section>
  );
}; 