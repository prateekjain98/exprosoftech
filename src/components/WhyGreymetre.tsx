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
      id="why-greymetre"
      className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-0 top-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
          <SectionHeader
            tagline={subtitle}
            heading={title}
            subheading={description}
          />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-100 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-sm">
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
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGreymetre;
