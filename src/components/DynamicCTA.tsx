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
    buttonText: string;
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
  const getIcon = (iconName: string) => {
    return iconMap[iconName] || FiHelpCircle;
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-b from-primary/80 to-transparent rounded-[3rem] p-8 lg:p-12">
          {/* Background Gradients */}
          <div className="absolute inset-0 rounded-[3rem] overflow-hidden">
            <div className="absolute top-0 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl" />
          </div>

          <div className="relative">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
              {/* Content Side */}
              <div className="lg:col-span-3 text-center lg:text-left">
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wide text-white bg-black rounded-full border border-blue-500/30">
                  {ctaContent.tagline}
                </span>
                <h2 className="text-3xl lg:text-4xl font-medium mb-6 text-gray-900">
                  {ctaContent.title}{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    {ctaContent.subtitle}
                  </span>
                </h2>
                <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  {ctaContent.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-6 mb-10">
                  {ctaContent.metrices.map((metric, index) => (
                    <div key={index} className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl transform transition-transform group-hover:scale-105 duration-300" />
                      <div className="relative p-4">
                        <div className="flex items-center justify-center lg:justify-start mb-3">
                          {React.createElement(getIcon(metric.icon), {
                            size: 24,
                            className: "text-blue-600"
                          })}
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {metric.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  isCalendlyButton={true}
                  variant="primary"
                >
                  {ctaContent.buttonText}
                </Button>
              </div>

              {/* Image Side */}
              <div className="lg:col-span-2 relative hidden lg:block">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicCTA;