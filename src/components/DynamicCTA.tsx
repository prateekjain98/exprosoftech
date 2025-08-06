import React from "react";
import { 
  FiHelpCircle, 
  FiArrowRight, 
  FiTrendingUp, 
  FiActivity, 
  FiClock,
  FiUsers,
  FiTarget,
  FiZap,
  FiCheckCircle,
  FiStar,
  FiShield,
  FiSettings,
  FiTruck,
  FiPackage,
  FiDollarSign,
  FiBarChart,
  FiDatabase,
  FiZap as FiLightning,
} from "react-icons/fi";
import { 
  HiLightBulb,
  HiCube,
  HiCog as HiGear,
} from "react-icons/hi";
import { HiTrophy } from "react-icons/hi2";
import { BiRocket, BiCoin } from "react-icons/bi";
import { RiHandHeartLine, RiRobot2Line } from "react-icons/ri";
import { 
  TbMedal,
  TbReceipt,
  TbWallet,
  TbChartPie,
  TbChartDonut,
  TbPlug,
} from "react-icons/tb";
import Button from "./common/Button";

interface MetricType {
  value: string;
  label: string;
  icon: string;
}

interface CTAProps {
  ctaContent: {
    tagline: string;
    title: string;
    subtitle: string;
    description: string;
    metrices: MetricType[];
    buttons: { label: string; link: string; isOpenBooking: boolean }[];
    image: {
      src: string;
      alt: string;
    };
  };
}

// Icon mapping to avoid wildcard imports - using new naming convention
const iconMap: { [key: string]: React.ComponentType<any> } = {
  // Support both old and new naming for backwards compatibility
  Question: FiHelpCircle,

  ArrowRight: FiArrowRight,

  ChartLine: FiTrendingUp,

  Gauge: FiActivity,

  Clock: FiClock,

  Users: FiUsers,

  Target: FiTarget,

  ChartLineUp: FiTrendingUp,

  Brain: FiZap,

  Handshake: RiHandHeartLine,
  
  Trophy: HiTrophy,
  
  TrendUp: FiTrendingUp,
  
  CheckCircle: FiCheckCircle,
  
  Star: FiStar,
  
  Lightbulb: HiLightBulb,
  
  Rocket: BiRocket,
  
  Shield: FiShield,
  
  
  // New icons from Sanity schema
  Cube: HiCube,
  
  Gear: HiGear,
  
  ChartPieSlice: TbChartPie,
  
  Truck: FiTruck,
  
  Package: FiPackage,
  
  Coins: BiCoin,
  
  ChartBar: FiBarChart,
  
  Medal: TbMedal,
  
  Robot: RiRobot2Line,
  
  Receipt: TbReceipt,
  
  Wallet: TbWallet,
  
  ChartDonut: TbChartDonut,
  
  Database: FiDatabase,
  
  Plugs: TbPlug,
  
  Lightning: FiLightning,
  
  DollarSign: FiDollarSign,
  
  Settings: FiSettings,
  
  ChartPie: TbChartPie,
   
};

export const DynamicCTA: React.FC<CTAProps> = ({ ctaContent }) => {
  // Early return if ctaContent is null or undefined
  if (!ctaContent) {
    return null;
  }

  const getIcon = (iconName: string) => {
    return iconMap[iconName] || FiHelpCircle;
  };

  return (
    <section className="py-16 ">
      <div className="max-w-[100vw] lg:max-w-[85rem] mx-auto px-0 md:px-8">
        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 lg:rounded-[2.5rem] overflow-hidden border border-gray-800/50">
          {/* Background Gradients */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl" />
          </div>

          <div className="relative px-4 py-4 md:px-12 lg:px-16 lg:py-20">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
              {/* Content Side */}
              <div className="lg:col-span-3 text-center lg:text-left">
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wide text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
                  {ctaContent.tagline || ""}
                </span>
                <h2 className="text-3xl lg:text-4xl font-medium mb-6 text-white">
                  {ctaContent.title || ""}{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    {ctaContent.subtitle || ""}
                  </span>
                </h2>
                <p className="text-lg text-gray-300/90 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  {ctaContent.description || ""}
                </p>

                {/* Metrics Grid */}
                  <div className={`grid gap-4 md:gap-6 mb-10 ${
                    ctaContent?.metrices?.length === 3 
                      ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-3' 
                      : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-3'
                  }`}>
                    {ctaContent?.metrices && ctaContent.metrices.map((metric, index) => (
                      <div 
                        key={index} 
                        className={`relative group ${
                          ctaContent.metrices.length === 3 && index === 2 
                            ? 'col-span-2 md:col-span-1 flex justify-center md:block' 
                            : ''
                        }`}
                      >
                        <div className={`${
                          ctaContent.metrices.length === 3 && index === 2 
                            ? 'w-1/2 md:w-full' 
                            : 'w-full'
                        }`}
                        >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl transform transition-transform group-hover:scale-105 duration-300" />
                        <div className="relative p-4">
                          <div className="flex items-center justify-center lg:justify-start mb-3">
                            {React.createElement(getIcon(metric.icon), {
                              size: 24,
                              className: "text-blue-400"
                            })}
                          </div>
                          <div className="text-2xl font-bold text-white mb-1">
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-400">
                            {metric.label}
                          </div>
                        </div>
                        </div>
                      </div>
                    ))}
                  </div>

                <div className="flex justify-center lg:justify-start">
                  <Button
                    variant="primary"
                    hasOverlay={ctaContent.buttons[0].isOpenBooking}
                  >
                    {ctaContent.buttons[0].label || "Get Started"}
                  </Button>
                </div>
              </div>

              {/* Image Side - Hidden on mobile, shown on desktop */}
              {ctaContent.image && (
              <div className="hidden lg:block lg:col-span-2 relative ">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={ctaContent.image.src}
                    alt={ctaContent.image.alt}
                    className="w-full h-[500px] object-cover object-center"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 via-gray-900/5 to-gray-900/20" />
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicCTA;