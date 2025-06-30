import React from "react";
import SectionHeader from "./SectionHeader";
import { 
  FiTrendingUp, 
  FiTarget, 
  FiZap, 
  FiUsers, 
  FiBox,
  FiSettings,
  FiPieChart,
  FiTruck,
  FiPackage,
  FiDollarSign,
  FiBarChart,
  FiAward,
  FiActivity,
  FiCpu,
  FiFileText,
  FiCreditCard,
  FiClock,
  FiDatabase,
  FiUserCheck
} from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BiPlug } from "react-icons/bi";
import { FaLayerGroup } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface WhyGreymetreData {
  subtitle: string;
  title: string;
  description: string;
  features: Feature[];
}

interface WhyGreymetreProps {
  data: WhyGreymetreData;
}

const WhyGreymetre: React.FC<WhyGreymetreProps> = ({ data }) => {
  const { subtitle, title, description, features } = data;

  // Icon mapping object - consistent with BusinessGuidance and schema
  const iconMap: Record<string, any> = {
    Cube: FiBox,
    ChartLineUp: FiTrendingUp,
    Gear: FiSettings,
    ChartPieSlice: FiPieChart,
    Brain: FiZap,
    Truck: FiTruck,
    Package: FiPackage,
    Coins: FiDollarSign,
    ChartBar: FiBarChart,
    Medal: FiAward,
    Gauge: FiActivity,
    Robot: FiCpu,
    Receipt: FiFileText,
    Wallet: FiCreditCard,
    ChartDonut: FiPieChart,
    Clock: FiClock,
    Database: FiDatabase,
    Plugs: BiPlug,
    Lightning: FiZap,
    Handshake: FiUsers,
    Target: FiTarget,
    Lightbulb: HiOutlineLightBulb,
    LayerGroup: FaLayerGroup,
    CheckCircle: FaCheckCircle,
    UserGroup: FiUserCheck,
  };

  return (
    <section
      id="why-Exprosoftech"
      className="py-24 bg-gray-50"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="bg-gray-900 rounded-[3rem] p-8 lg:p-12">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[3rem]">
            <div className="absolute left-0 top-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl" />
            <div className="absolute right-0 bottom-0 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full" />
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] rounded-[3rem]" />

          <div className="relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
              <SectionHeader
                tagline={subtitle}
                heading={title}
                subheading={description}
                theme="dark"
              />
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="h-full"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 50}
                >
                  {/* Main card */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full flex flex-col hover:bg-white/8 transition-colors duration-200">
                    
                    <div className="flex items-start gap-6 flex-1">
                      {/* Icon container */}
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 flex items-center justify-center bg-blue-500 text-white rounded-xl">
                          {iconMap[feature.icon] ? (
                            React.createElement(iconMap[feature.icon], {
                              size: 24,
                              className: "text-white"
                            })
                          ) : (
                            <FiTrendingUp size={24} className="text-white" />
                          )}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3 text-white">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGreymetre;
