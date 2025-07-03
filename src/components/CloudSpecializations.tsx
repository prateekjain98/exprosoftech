import React, { useState } from "react";
import { motion } from "framer-motion";
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <div className={`relative h-full rounded-2xl border-2 ${cloud.color.accent} bg-white p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
        {/* Gradient background on hover */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cloud.color.secondary} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon and Title */}
          <div className="mb-4 flex items-center gap-3">
            <motion.div 
              animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
              className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${cloud.color.primary} shadow-lg`}
            >
              <span className="text-2xl">{cloud.icon}</span>
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900">{cloud.name}</h3>
          </div>

          {/* Description */}
          <p className="mb-6 text-gray-600 leading-relaxed">
            {cloud.description}
          </p>

          {/* Features */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Key Features</h4>
            <div className="grid grid-cols-2 gap-2">
              {cloud.features.map((feature, featureIndex) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: (index * 0.1) + (featureIndex * 0.05) }}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${cloud.color.primary}`} />
                  <span>{feature}</span>
                </motion.div>
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
  return (
    <section className={`py-20 bg-gray-50/50 ${className}`}>
      <div className="container">
        <SectionHeader
          tagline={heading.tagline}
          heading={heading.title}
          subheading={heading.description}
        />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 mb-16 flex justify-center"
        >
          <div className="flex items-center gap-8 rounded-2xl bg-white px-8 py-4 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                9+
              </div>
              <div className="text-sm text-gray-600">Cloud Platforms</div>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-dark to-secondary bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-sm text-gray-600">Projects Delivered</div>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-secondary-400 to-primary-light bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </motion.div>

        {/* Cloud Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cloudSpecializations.map((cloud, index) => (
            <CloudCard key={cloud.id} cloud={cloud} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="rounded-3xl bg-gradient-to-r from-primary via-primary-light to-secondary p-1">
            <div className="rounded-3xl bg-white px-8 py-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let our cloud experts help you choose the right Salesforce solutions and implement them successfully for your unique business needs.
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