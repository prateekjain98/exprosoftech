import React, { useState, useEffect } from "react";
import {FaRobot} from "react-icons/fa";
import {
  FiSettings,
  FiTrendingUp,
  FiDatabase,
  FiUsers,
  FiArrowRight,
  FiBriefcase,
  FiCloud,
  FiCode,
  FiDollarSign,
  FiMonitor,
  FiGlobe,
  FiZap,
  FiShield,
  FiTruck,
  FiUser,
  FiPackage,
  FiClock,
  FiTarget,
  FiActivity,
  FiCheckCircle,
  FiStar,
  FiAward,
  FiBox,
  FiCpu,
  FiBarChart,
  FiFileText,
  FiPieChart,
  FiPower,
  FiHeart,
  FiCreditCard,
} from "react-icons/fi";
import {
  HiOutlineLightBulb,
  HiOutlineRocketLaunch,
  HiOutlineShieldCheck,
  HiOutlineBuildingStorefront,
} from "react-icons/hi2";
import { 
  TbLock,
  TbChartBar,
} from "react-icons/tb";
import SectionHeader from "./SectionHeader";

// Define the metric type interface
interface MetricType {
  value: string;
  label: string;
  icon: string;
}

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
      metrics?: MetricType[]; // Optional metrics array
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
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);

  // Auto-switching functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlay) {
      interval = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % data.features.length);
      }, 5000); // Switch every 5 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlay, data.features.length]);

  // Handle manual tab click
  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setIsAutoPlay(false); // Stop auto-switching when user clicks
  };

  // Convert icon string to component - Enhanced with more options
  const getIconComponent = (iconName: string) => {
    const icons = {
      // Schema icons mapped to available alternatives
      Activity: FiActivity,
      ArrowRight: FiArrowRight,
      Brain: FiCpu,
      Briefcase: FiBriefcase,
      ChartBar: TbChartBar,
      ChartLineUp: FiTrendingUp,
      ChartPie: FiPieChart,
      CheckCircle: FiCheckCircle,
      Clock: FiClock,
      Cloud: FiCloud,
      Code: FiCode,
      Coins: FiDollarSign,
      Cube: FiBox,
      Database: FiDatabase,
      Desktop: FiMonitor,
      DollarSign: FiDollarSign,
      Gauge: FiZap,
      Gear: FiSettings,
      Globe: FiGlobe,
      Handshake: FiHeart,
      LightbulbFilament: HiOutlineLightBulb,
      Lightning: FiZap,
      Lock: TbLock,
      Medal: FiAward,
      Package: FiPackage,
      Plugs: FiPower,
      Receipt: FiFileText,
      Robot: FaRobot,
      Rocket: HiOutlineRocketLaunch,
      Settings: FiSettings,
      ShieldCheck: HiOutlineShieldCheck,
      Star: FiStar,
      Storefront: HiOutlineBuildingStorefront,
      Target: FiTarget,
      Trophy: FiAward,
      Truck: FiTruck,
      UserCircle: FiUser,
      Users: FiUsers,
      Wallet: FiCreditCard,
    };
    return icons[iconName as keyof typeof icons] || FiSettings;
  };

  return (
    <section className="py-16 ">
      <div className="max-w-[86rem] lg:max-w-[90rem] xl:max-w-[80rem] mx-auto px-4 sm:px-6 md:px-8">
        <div className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden">
          {/* Checkered Background Pattern */}
          

          <div className="relative px-4 py-12 sm:px-6 md:px-12 lg:px-0 lg:py-0">
            <div className="mx-auto lg:col-11 mb-10 lg:mb-16">
              <SectionHeader
                tagline={data.heading.subtitle || ""}
                heading={data.heading.title || ""}
                subheading={data.heading.description || ""}
                // theme="dark"
              />
            </div>

            <div className="flex flex-col gap-8 lg:gap-12 ">
              {/* Navigation Tabs */}
              <nav
                className="grid grid-cols-2 lg:grid-cols-4 sm:flex sm:flex-wrap justify-evenly gap-2.5 sm:gap-3 rounded-2xl lg:rounded-full sm:p-4 bg-gray-800"
                data-aos="fade-up"
                data-aos-delay="100"
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
              >
                {data.features.map((feature, index) => {
                  const IconComponent = getIconComponent(feature.icon);
                  return (
                    <button
                      key={index}
                      onClick={() => handleTabClick(index)}
                      className={`
                        group flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 
                        px-2.5 sm:px-6 py-2.5 sm:py-4 rounded-2xl  lg:rounded-full 
                        transition-all duration-300
                        ${
                          activeTab === index
                            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25"
                            : " text-gray-300  hover:shadow-lg"
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
                        <IconComponent size={16} />
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
                className="min-h-[700px] md:min-h-[700px] lg:min-h-[450px] relative"
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
                    <div className="bg-gray-800 rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-xl min-h-full border border-gray-700/50">
                      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-full">
                        {/* Content Side */}
                        <div className="order-2 lg:order-1 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                          <div className="space-y-4 md:space-y-4 lg:space-y-6">
                            {/* <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs sm:text-sm font-medium shadow-lg">
                              {feature.tagline}
                            </span> */}

                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                              {feature.title}
                            </h2>

                            <p className="text-sm sm:text-base text-gray-300/90 leading-relaxed">
                              {feature.description}
                            </p>

                            {/* Metrics Grid - Similar to DynamicCTA */}
                            {feature.metrics && feature.metrics.length > 0 && (
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-6">
                                {feature.metrics.map((metric, metricIndex) => (
                                  <div key={metricIndex} className="relative group">
                                    <div className="absolute inset-0 bg-gray-100 rounded-xl transform transition-transform group-hover:scale-105 duration-300" />
                                    <div className="relative p-3 sm:p-4 text-center sm:text-left">
                                      <div className="flex items-center justify-center sm:justify-start mb-2">
                                        {React.createElement(getIconComponent(metric.icon), {
                                          size: 18,
                                          className: "text-[#2E1CFF]"
                                        })}
                                      </div>
                                      <div className="text-base sm:text-lg lg:text-xl font-bold text-Black mb-1">
                                        {metric.value}
                                      </div>
                                      <div className="text-xs sm:text-sm text-black leading-snug">
                                        {metric.label}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Image Side */}
                        <div className="order-1 lg:order-2 p-2 pb-0 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center">
                          <div className="relative w-full aspect-[4/3] max-w-[300px] sm:max-w-[400px] md:max-w-[450px]">
                            <img
                              src={feature.image}
                              alt={feature.title}
                              className="w-full h-full object-contain rounded-2xl"
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
