import React, { useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] group"
    >
      <div 
        className={`relative overflow-hidden rounded-3xl backdrop-blur-lg bg-gray-900 border border-gray-700 transition-all duration-500 h-full shadow-lg
          hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-[1.02] hover:border-blue-500/50`}
      >
        {/* Animated gradient background */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br bg-blue-500 opacity-[0.03] 
            group-hover:opacity-[0.08] transition-opacity duration-500`}
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
              className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${cloud.color.primary}
                shadow-lg transform-gpu`}
            >
              <span className="text-xl sm:text-2xl">{cloud.icon}</span>
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
            <div className={`absolute bottom-0 left-0 h-px w-16 bg-gradient-to-r ${cloud.color.primary}`} />
          </div>

          {/* Features grid */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-medium text-gray-100 text-xs sm:text-sm uppercase tracking-wider">
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
                  <span className="text-xs sm:text-sm text-gray-400 group-hover/feature:text-gray-100 transition-colors duration-300">
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
  }
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    if (!scrollRef.current) return;
    
    const scrollWidth = scrollRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = scrollWidth - viewportWidth + 200;

    const handleScroll = () => {
      if (!scrollRef.current || !containerRef.current) return;
      const progress = scrollYProgress.get();
      
      // Apply easing function for smoother scrolling on smaller screens
      let easedProgress = progress;
      if (viewportWidth < 640) {
        // Slower start and end, but still reaches full distance
        easedProgress = progress * progress * (3 - 2 * progress); // Smooth step function
      } else if (viewportWidth < 1024) {
        // Moderate easing for tablets
        easedProgress = progress * progress * (2 - progress); // Quadratic easing
      }
      
      scrollRef.current.scrollLeft = easedProgress * scrollDistance;
    };

    scrollYProgress.on("change", handleScroll);
    return () => {
      scrollYProgress.clearListeners();
    };
  }, [scrollYProgress]);

  return (
    <section 
      ref={containerRef}
      className={`section min-h-[300vh] sm:min-h-[250vh] lg:min-h-[200vh] ${className} bg-white`}
    >
      <div className="sticky top-0 overflow-hidden">
        <div className="max-w-[100vw] mx-auto px-3 py-20 relative">
          <div className="row">
            <div className="mx-auto mb-12">
              <SectionHeader
                tagline={heading.tagline}
                heading={heading.title}
                subheading={heading.description}
                alignment="center"
              />
            </div>
            <div className="col-12">
              <div 
                ref={scrollRef}
                className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-hidden w-full overflow-y-hidden lg:pt-12"
                style={{
                  paddingLeft: "calc((100vw - 1280px) / 2)",
                  paddingRight: "calc((100vw - 1280px) / 2)"
                }}
              >
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
                {cloudSpecializations.map((cloud, index) => (
                  <CloudCard 
                    key={cloud.id} 
                    cloud={cloud} 
                    index={index} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 