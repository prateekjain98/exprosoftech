import React, { useState } from "react";
import {
  Cube,
  ChartLineUp,
  Gear,
  ChartPieSlice,
  Brain,
  Truck,
  Package,
  Coins,
  ChartBar,
  Medal,
  Gauge,
  Robot,
  Receipt,
  Wallet,
  ChartDonut,
  Clock,
  Database,
  Plugs,
  Lightning,
} from "@phosphor-icons/react";
import { sanityClient } from "sanity:client";

const iconMap: { [key: string]: React.ForwardRefExoticComponent<any> } = {
  Cube,
  ChartLineUp,
  Gear,
  ChartPieSlice,
  Brain,
  Truck,
  Package,
  Coins,
  ChartBar,
  Medal,
  Gauge,
  Robot,
  Receipt,
  Wallet,
  ChartDonut,
  Clock,
  Plugs,
  Lightning,
};

interface ServicePoint {
  text: string;
}

// interface ServiceMetrics {
//   mainMetric: {
//     value: string;
//     label: string;
//     trend: string;
//   };
//   highlights: Array<{
//     icon: React.ForwardRefExoticComponent<any>;
//     value: string;
//     label: string;
//   }>;
// }

// interface ServiceTab {
//   id: string;
//   title: string;
//   icon: React.ForwardRefExoticComponent<any>;
//   points: ServicePoint[];
//   metrics: ServiceMetrics;
// }

interface SanityServiceTab {
  id: string;
  title: string;
  icon: string;
  points: ServicePoint[];
  metrics: {
    mainMetric: {
      value: string;
      label: string;
      trend: string;
    };
    highlights: Array<{
      icon: string;
      value: string;
      label: string;
    }>;
  };
}

const services = [
  {
    id: "supply-chain",
    title: "Supply Chain Transformation",
    icon: Cube,
    points: [
      { text: "Shift from forecast-driven to demand-driven planning" },
      {
        text: "Reduce inventory costs and lead times with strategic buffer management",
      },
      {
        text: "Enhance customer satisfaction by ensuring constant product availability",
      },
    ],
    metrics: {
      mainMetric: {
        value: "45%",
        label: "Inventory Optimization",
        trend: "↑ 12% from last quarter",
      },
      highlights: [
        {
          icon: Truck,
          value: "-35%",
          label: "Lead Time Reduction",
        },
        {
          icon: Package,
          value: "98.5%",
          label: "Stock Availability",
        },
        {
          icon: Coins,
          value: "₹2.4Cr",
          label: "Cost Savings",
        },
      ],
    },
  },
  {
    id: "sales",
    title: "Sales Acceleration",
    icon: ChartLineUp,
    points: [
      {
        text: "Boost sales across B2B, OEM, and channel networks, both domestically and globally",
      },
      {
        text: "Create high-performing sales teams equipped with actionable data and insights",
      },
    ],
    metrics: {
      mainMetric: {
        value: "₹82.3M",
        label: "Revenue Generated",
        trend: "↑ 28% Year over Year",
      },
      highlights: [
        {
          icon: ChartBar,
          value: "32%",
          label: "Conversion Rate",
        },
        {
          icon: Medal,
          value: "245+",
          label: "Deals Closed",
        },
        {
          icon: ChartPieSlice,
          value: "4.2x",
          label: "Growth Rate",
        },
      ],
    },
  },
  {
    id: "operational",
    title: "Operational Excellence",
    icon: Gear,
    points: [
      {
        text: "Identify and resolve bottlenecks in manufacturing and supply chain processes",
      },
      {
        text: "Improve delivery performance and lead times to meet customer expectations",
      },
    ],
    metrics: {
      mainMetric: {
        value: "92%",
        label: "Operational Efficiency",
        trend: "↑ 15% this quarter",
      },
      highlights: [
        {
          icon: Gauge,
          value: "+40%",
          label: "Productivity Boost",
        },
        {
          icon: Medal,
          value: "99.9%",
          label: "Quality Score",
        },
        {
          icon: Robot,
          value: "85%",
          label: "Process Automation",
        },
      ],
    },
  },
  {
    id: "financial",
    title: "Financial Optimization",
    icon: Receipt,
    points: [
      {
        text: "Increase revenue, profitability, and return on capital employed (ROCE)",
      },
      {
        text: "Improve cash flow by reducing inventory and optimizing operations",
      },
    ],
    metrics: {
      mainMetric: {
        value: "32%",
        label: "ROCE Improvement",
        trend: "↑ 8% Year over Year",
      },
      highlights: [
        {
          icon: ChartDonut,
          value: "28%",
          label: "Profit Margin",
        },
        {
          icon: Wallet,
          value: "₹12.5Cr",
          label: "Working Capital Saved",
        },
        {
          icon: ChartLineUp,
          value: "3.5x",
          label: "ROI",
        },
      ],
    },
  },
  {
    id: "technology",
    title: "Technology-Driven Insights",
    icon: Brain,
    points: [
      { text: "Implement real-time data access and automation tools" },
      {
        text: "Integrate IT-driven solutions for sales force management, inventory optimization, and customer engagement",
      },
    ],
    metrics: {
      mainMetric: {
        value: "85%",
        label: "Digital Adoption Rate",
        trend: "↑ 25% from baseline",
      },
      highlights: [
        {
          icon: Clock,
          value: "Real-time",
          label: "Data Processing",
        },
        {
          icon: Plugs,
          value: "15+",
          label: "Systems Integrated",
        },
        {
          icon: Lightning,
          value: "90%",
          label: "Task Automation",
        },
      ],
    },
  },
];

const MetricsCard = ({ keyServicesData } : { keyServicesData: SanityServiceTab }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-gray-700/50">
      {/* Main Metric */}
      <div className="mb-6 sm:mb-10">
        <div className="flex items-baseline gap-2 mb-1.5 sm:mb-3">
          <h4 className="text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            {keyServicesData.metrics.mainMetric.value}
          </h4>
        </div>
        <p className="text-xs sm:text-base lg:text-lg text-gray-400 mb-1 sm:mb-2">
          {keyServicesData.metrics.mainMetric.label}
        </p>
        <p className="text-[10px] sm:text-sm text-emerald-400 font-medium">
          {keyServicesData.metrics.mainMetric.trend}
        </p>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-5">
        {keyServicesData.metrics.highlights.map((highlight, index) => (
          <div
            key={index}
            className="bg-gray-800/50 rounded-lg sm:rounded-xl p-2 sm:p-4 text-center hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 flex flex-col items-center gap-1.5 sm:gap-4"
          >
            <div className="w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-md sm:rounded-xl p-1 sm:p-2 lg:p-2.5 flex items-center justify-center">
              {React.createElement(iconMap[highlight.icon], {
                size: 16,
                weight: "duotone",
                className: "text-blue-400"
              })}
            </div>
            <div className="min-w-0">
              <div className="text-sm sm:text-lg lg:text-xl font-semibold text-white truncate mb-0.5 sm:mb-1">
                {highlight.value}
              </div>
              <div className="text-[9px] sm:text-xs lg:text-sm text-gray-400 truncate">
                {highlight.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const KeyServices = ({ keyServicesData = [] }: { keyServicesData: SanityServiceTab[] }) => {
  // Add null check and default value for activeTab
  const [activeTab, setActiveTab] = useState(() => 
    keyServicesData && keyServicesData.length > 0 ? keyServicesData[0].id : ""
  );
  
  // Add null check for services transformation
  const services = keyServicesData?.map(service => ({
    ...service,
    icon: iconMap[service.icon],
    metrics: {
      ...service.metrics,
      highlights: service.metrics.highlights.map(highlight => ({
        ...highlight,
        icon: iconMap[highlight.icon]
      }))
    }
  })) || [];

  const activeService = services.find((service) => service.id === activeTab);

  // Add loading state or empty state handling
  if (!keyServicesData || keyServicesData.length === 0) {
    return null; // Or return a loading/empty state component
  }

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
            <div className="text-center mb-10 lg:mb-16" data-aos="fade-up">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs sm:text-sm font-medium shadow-lg mb-4 sm:mb-5">
                Key Services
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-medium mb-4 sm:mb-5 text-white">
                How Our Services Assist You{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Accomplish Better
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-300/90 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
                Witness the transformation of your financial goals into
                realities with the benefits we deliver.
              </p>
            </div>

            <div className="flex flex-col gap-8 sm:gap-14">
              {/* Tab Navigation */}
              <div
                className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2.5 sm:gap-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`group flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 px-2.5 sm:px-6 py-2.5 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300 ${
                      activeTab === service.id
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25"
                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:shadow-lg"
                    }`}
                  >
                    <div
                      className={`p-1.5 sm:p-2 rounded-lg ${
                        activeTab === service.id
                          ? "bg-white/20"
                          : "bg-gray-700/50 group-hover:bg-gray-700"
                      }`}
                    >
                      <service.icon size={16} weight="duotone" />
                    </div>
                    <span className="text-[11px] leading-tight sm:text-base font-medium text-center sm:text-left">
                      {service.id === "supply-chain"
                        ? "Supply Chain"
                        : service.id === "technology"
                          ? "Technology"
                          : service.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Content Area */}
              {activeService && (
                <div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="space-y-6 sm:space-y-8">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
                      {activeService.title}
                    </h3>
                    <ul className="space-y-4 sm:space-y-5">
                      {activeService.points.map((point, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 sm:gap-4 group"
                        >
                          <span className="flex-shrink-0 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-blue-500 mt-2 sm:mt-2.5 group-hover:scale-125 transition-transform" />
                          <p className="text-sm sm:text-base lg:text-lg text-gray-300/90 leading-relaxed">
                            {point.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <MetricsCard keyServicesData={{
                    ...activeService,
                    icon: keyServicesData.find(s => s.id === activeService.id)?.icon || '',
                    metrics: {
                      ...activeService.metrics,
                      highlights: activeService.metrics.highlights.map(h => ({
                        ...h,
                        icon: keyServicesData.find(s => s.id === activeService.id)?.metrics.highlights.find(hl => hl.value === h.value)?.icon || ''
                      }))
                    }
                  }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyServices;
