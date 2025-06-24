import React, { useState } from "react";
import {
  GearIcon,
  ChartLineUpIcon,
  DatabaseIcon,
  UsersIcon,
} from "@phosphor-icons/react";
import SectionHeader from "./SectionHeader";

// Define the heading prop interface
export interface HeadingData {
  _id: string;
  subtitle?: string;
  title: string;
  description: string;
}

// Update the FeaturesGridProps interface
interface FeaturesGridProps {
  data: {
    heading: {
      title: string;
      subtitle: string;
      description: string;
    };
    features: Array<{
      tagline: string;
      title: string;
      description: string;
      image: string;  // This will be the resolved URL
      icon: string;
    }>;
  };
}

// const features: Feature[] = [
//   {
//     tagline: "A demand-driven approach",
//     title: "Supply chain Effectiveness",
//     description:
//       "A demand-driven approach ensures the right product is available at the right place, at the right time. By aligning supply chain execution with real demand, businesses can improve availability at OEMs and channel outlets, manage demand variability, optimize inventory, and enhance service levels. This also leads to shorter supply lead times, reduced working capital, and a more resilient, responsive supply chain.",
//     image: "/images/FeatureImgOne.png",
//     icon: Gear,
//   },
//   {
//     tagline: "Optimized operations",
//     title: "Operational Excellence",
//     description:
//       "Optimized operations eliminate bottlenecks, enhance On-Time-In-Full (OTIF) delivery, and reduce manufacturing lead times. By improving workflow efficiency, uncovering hidden capacity, and minimizing excess inventory, businesses achieve smoother production, faster fulfillment, and higher overall productivity—without additional investment.",
//     image: "/images/FeatureImgTwo.png",
//     icon: ChartLineUp,
//   },
//   {
//     tagline: "Expanding channel reach",
//     title: "Sales transformation",
//     description:
//       "Expanding channel reach and B2B engagement fuels market penetration, while loyalty programs strengthen retention and sustainable growth powered by Optimized sales execution, powered by CRM, outreach and productivity tools, and structured team alignment. Coupled with better product availability,plugging sales losses creates sustained revenue growth.",
//     image: "/images/FeatureImgThree.png",
//     icon: Database,
//   },
//   {
//     tagline: "Seamless integration of technology",
//     title: "Digital Transformation",
//     description:
//       "Seamless integration of technology enhances supply chain planning, sales productivity, and functional alignment. By developing dedicated systems, patching existing tools, and enabling real-time, data-driven decision-making, we drive efficiency, agility, and sustained business performance.",
//     image: "/images/FeatureImgFour.png",
//     icon: Users,
//   },
// ];

// Use props in the component definition
export const FeaturesGrid: React.FC<FeaturesGridProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Convert icon string to component
  const getIconComponent = (iconName: string) => {
    const icons = {
      Gear:GearIcon,
      ChartLineUp:ChartLineUpIcon,
      Database:DatabaseIcon,
      Users:UsersIcon,
    };
    return icons[iconName as keyof typeof icons] || GearIcon;
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 md:px-8">
        <div className="relative bg-[#0A0F1E] rounded-2xl sm:rounded-[2.5rem] overflow-hidden">
          {/* Background Gradients */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/20 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500/20 rounded-full filter blur-3xl" />
          </div>

          <div className="relative px-4 py-12 sm:px-6 md:px-12 lg:px-16 lg:py-24">
            <div className="mx-auto lg:col-11 mb-10 lg:mb-16">
              <SectionHeader
                tagline={data.heading.subtitle || ""}
                heading={data.heading.title || ""}
                subheading={data.heading.description || ""}
                theme="dark"
              />
            </div>

            <div className="flex flex-col gap-8 lg:gap-12">
              {/* Navigation Tabs */}
              <nav
                className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2.5 sm:gap-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {data.features.map((feature, index) => {
                  const IconComponent = getIconComponent(feature.icon);
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`
                        group flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 
                        px-2.5 sm:px-6 py-2.5 sm:py-4 rounded-lg sm:rounded-xl 
                        transition-all duration-300
                        ${
                          activeTab === index
                            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25"
                            : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:shadow-lg"
                        }
                      `}
                    >
                      <div
                        className={`p-1.5 sm:p-2 rounded-lg ${
                          activeTab === index
                            ? "bg-white/20"
                            : "bg-gray-700/50 group-hover:bg-gray-700"
                        }`}
                      >
                        <IconComponent size={16} weight="duotone" />
                      </div>
                      <span className="text-[11px] leading-tight sm:text-base font-medium text-center sm:text-left">
                        {feature.title}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Feature Cards */}
              <div
                className="min-h-[550px] md:min-h-[700px] lg:min-h-[500px] relative"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {data.features.map((feature, index) => (
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
                    <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-xl h-full border border-gray-700/50">
                      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                        {/* Content Side */}
                        <div className="order-2 lg:order-1 p-5 md:p-8 lg:p-12 flex flex-col justify-center">
                          <div className="space-y-3 md:space-y-4 lg:space-y-6">
                            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs sm:text-sm font-medium shadow-lg">
                              {feature.tagline}
                            </span>

                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                              {feature.title}
                            </h2>

                            <p className="text-sm sm:text-base text-gray-300/90 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>

                        {/* Image Side */}
                        <div className="order-1 lg:order-2 p-4 pb-0 md:p-6 lg:p-8 flex items-center justify-center">
                          <div className="relative w-full aspect-[4/3] max-w-[400px] md:max-w-[450px]">
                            <img
                              src={feature.image}
                              alt={feature.title}
                              className="w-full h-full object-contain"
                              width={600}
                              height={450}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
