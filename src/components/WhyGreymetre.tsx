import React from "react";
import { useId } from "react";
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

// Grid pattern components
export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-50/20 to-zinc-100/20 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay stroke-primary/5 fill-primary/20"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
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
        <div className="bg-dark rounded-[3rem] p-8 lg:p-12">
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
                tagline={subtitle || ''}
                heading={title || ''}
                subheading={description || ''}
                theme="dark"
              />
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="h-full"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 50}
                >
                  {/* Main card */}
                  <div className="bg-white border-2 rounded-2xl p-8 h-full flex flex-col hover:shadow-lg transition-all duration-200 relative overflow-hidden">
                    <Grid size={20} />
                    
                    {/* Icon container */}
                    <div className="mb-6 relative z-20">
                      <div className="w-14 h-14 flex items-center justify-center bg-primary text-white rounded-xl">
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
                    
                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-3 text-dark relative z-20">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-text leading-relaxed relative z-20">
                      {feature.description}
                    </p>
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
