import { motion } from "framer-motion";
import type { IconType } from "react-icons/lib";
import {
  FaUserFriends,
  FaChartLine,
  FaCogs,
  FaRocket,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";
import SectionHeader from "@/components/SectionHeader";
import { useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconType;
  image: string;
  tagline: string;
  delay: number;
}

const features = [
  {
    title: "Program Design & Strategy",
    tagline: "Custom Loyalty Solutions",
    description:
      "Custom loyalty programs aligned with your business goals and customer preferences. We help you design programs that resonate with your target audience and drive meaningful engagement.",
    icon: FaUserFriends,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&h=800&fit=crop",
  },
  {
    title: "Performance Analytics",
    tagline: "Data-Driven Insights",
    description:
      "Data-driven insights to measure and optimize program effectiveness. Our analytics tools help you understand customer behavior, track ROI, and make informed decisions.",
    icon: FaChartLine,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&h=800&fit=crop",
  },
  {
    title: "Technical Integration",
    tagline: "Seamless Systems Integration",
    description:
      "Seamless integration with your existing systems and platforms. Our technical expertise ensures your loyalty program works smoothly with your current infrastructure.",
    icon: FaCogs,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&h=800&fit=crop",
  },
  {
    title: "Program Optimization",
    tagline: "Continuous Improvement",
    description:
      "Continuous improvement based on customer behavior and market trends. We help you evolve your program to stay competitive and meet changing customer needs.",
    icon: FaRocket,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&h=800&fit=crop",
  },
];

interface Props {
  className?: string;
}

export const LoyaltyFeatures: React.FC<Props> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section className={`py-20 ${className}`}>
      <div className="container">
        <SectionHeader
          tagline="Features"
          heading="Comprehensive Loyalty Management Solutions"
          subheading="Our end-to-end loyalty program management services are designed to help you create, manage, and optimize customer loyalty programs that drive engagement and growth."
        />

        <div className="mt-12">
          {/* Navigation Tabs */}
          <nav
            className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`
                  group flex flex-col sm:flex-row items-center gap-3 
                  px-4 sm:px-6 py-3 sm:py-4 rounded-xl 
                  transition-all duration-300
                  ${
                    activeTab === index
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25"
                      : "bg-white text-gray-600 hover:bg-gray-50 hover:shadow-md"
                  }
                `}
              >
                <div
                  className={`p-2 rounded-lg ${
                    activeTab === index
                      ? "bg-white/20"
                      : "bg-blue-50 group-hover:bg-blue-100"
                  }`}
                >
                  <feature.icon size={20} />
                </div>
                <span className="text-sm sm:text-base font-medium">
                  {feature.title}
                </span>
              </button>
            ))}
          </nav>

          {/* Feature Cards */}
          <div
            className="mt-8 min-h-[400px] relative"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className={`
                  feature-card absolute inset-0 w-full h-full transition-all duration-500
                  ${
                    activeTab === index
                      ? "opacity-100 translate-y-0 z-10"
                      : "opacity-0 translate-y-8 pointer-events-none z-0"
                  }
                `}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-full border border-gray-100">
                  <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                    {/* Content Side */}
                    <div className="order-2 lg:order-1 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                      <div className="space-y-4 sm:space-y-6">
                        <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 text-sm font-medium rounded-full">
                          {feature.tagline}
                        </span>

                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                          {feature.title}
                        </h3>

                        <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className="order-1 lg:order-2 relative h-48 sm:h-64 lg:h-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 mix-blend-multiply z-10" />
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
