import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  ComposedChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

interface MetricCard {
  title: string;
  type: "area" | "line" | "bar" | "composed" | "stacked" | "donut" | "radar";
  trend?: "increasing" | "decreasing";
  color?: string;
  secondaryColor?: string;
  value?: string;
  subtitle?: string;
  position: {
    top: string;
    left?: string;
    right?: string;
  };
  mobilePosition?: {
    top: string;
    left?: string;
    right?: string;
  };
  hideOnMobile?: boolean;
  category: "business" | "operational" | "sales" | "digital";
  data?: Array<{
    name: string;
    value: number;
    secondary?: number;
    target?: number;
  }>;
}

// Define data generation types
type ComposedDataType =
  | "roce"
  | "cashFlow"
  | "throughput"
  | "marketShare"
  | "channelGrowth";
type StackedDataType = "inventoryTurns" | "posAvailability" | "businessShare";
type BarDataType = "leadTime" | "stockouts" | "reachPenetration";
type RadarDataType = "flexibility" | "alignment";

function generateComposedData(
  type: ComposedDataType
): Array<{ name: string; value: number; target: number }> {
  const points = 12;
  const baseValueMap: Record<ComposedDataType, number> = {
    roce: 30,
    cashFlow: 40,
    throughput: 35,
    marketShare: 25,
    channelGrowth: 20,
  };
  const targetMultiplierMap: Record<ComposedDataType, number> = {
    roce: 1.2,
    cashFlow: 1.3,
    throughput: 1.4,
    marketShare: 1.5,
    channelGrowth: 1.6,
  };

  const baseValue = baseValueMap[type] || 30;
  const targetMultiplier = targetMultiplierMap[type] || 1.2;

  return Array.from({ length: points }, (_, i) => {
    const progress = i / (points - 1);
    const trend = baseValue + progress * 50;
    const noise = Math.sin(i * 0.8) * 3;
    const value = Math.max(0, Math.min(100, trend + noise + Math.random() * 4));
    const target = value * targetMultiplier;

    return {
      name: i.toString(),
      value: Math.round(value),
      target: Math.round(target),
    };
  });
}

function generateStackedData(
  type: StackedDataType
): Array<{ name: string; value: number; secondary: number }> {
  const points = 8;
  const baseValueMap: Record<StackedDataType, number> = {
    inventoryTurns: 60,
    posAvailability: 70,
    businessShare: 50,
  };

  const baseValue = baseValueMap[type] || 60;

  return Array.from({ length: points }, (_, i) => {
    const progress = i / (points - 1);
    const primaryValue = baseValue + progress * 25 + Math.random() * 5;
    const secondaryValue = (100 - primaryValue) * 0.8;

    return {
      name: i.toString(),
      value: Math.round(primaryValue),
      secondary: Math.round(secondaryValue),
    };
  });
}

function generateBarData(
  type: BarDataType
): Array<{ name: string; value: number }> {
  const points = 8;
  const baseValueMap: Record<BarDataType, number> = {
    leadTime: 25,
    stockouts: 15,
    reachPenetration: 30,
  };

  const baseValue = baseValueMap[type] || 25;

  return Array.from({ length: points }, (_, i) => {
    const progress = i / (points - 1);
    const trend = baseValue + progress * 55;
    const noise = Math.sin(i * 0.5) * 4;

    return {
      name: i.toString(),
      value: Math.max(0, Math.min(100, trend + noise + Math.random() * 2)),
    };
  });
}

function generateRadarData(
  type: RadarDataType
): Array<{ name: string; value: number }> {
  const categories =
    type === "flexibility"
      ? ["Production", "Delivery", "Scaling", "Response", "Adaptation"]
      : ["Market", "Product", "Pricing", "Promotion", "Placement"];

  return categories.map((category) => ({
    name: category,
    value: Math.round(40 + Math.random() * 60),
  }));
}

const metrics: MetricCard[] = [
  // Business Excellence KPIs
  {
    title: "ROCE",
    subtitle: "Return on Capital",
    type: "composed",
    trend: "increasing",
    color: "#4F46E5",
    secondaryColor: "#818CF8",
    value: "+18.5%",
    position: { top: "45%", right: "0" },
    mobilePosition: { top: "calc(100% - 130px)", left: "0" },
    category: "business",
    data: generateComposedData("roce"),
  },
  {
    title: "Cash Flow",
    subtitle: "Quarterly Growth",
    type: "area",
    trend: "increasing",
    color: "#06B6D4",
    secondaryColor: "#67E8F9",
    value: "+22.7%",
    position: { top: "25%", left: "0" },
    mobilePosition: { top: "calc(100% - 130px)", right: "0" },
    category: "business",
    data: generateComposedData("cashFlow"),
  },
  {
    title: "Throughput",
    subtitle: "Units per Hour",
    type: "line",
    trend: "increasing",
    color: "#8B5CF6",
    secondaryColor: "#A78BFA",
    value: "+15.3%",
    position: { top: "70%", left: "0" },
    mobilePosition: { top: "calc(100% - 130px)", left: "0" },
    category: "business",
    data: generateComposedData("throughput"),
  },

  // Operational Excellence KPIs
  {
    title: "Lead Time",
    subtitle: "Days to Delivery",
    type: "bar",
    trend: "decreasing",
    color: "#EC4899",
    secondaryColor: "#F472B6",
    value: "-24.6%",
    position: { top: "25%", left: "0" },
    mobilePosition: { top: "calc(100% - 130px)", right: "0" },
    category: "operational",
    data: generateBarData("leadTime"),
  },
  {
    title: "Inventory Turns",
    subtitle: "Annual Rate",
    type: "stacked",
    trend: "increasing",
    color: "#F59E0B",
    secondaryColor: "#FCD34D",
    value: "+32.8%",
    position: { top: "45%", right: "0" },
    mobilePosition: { top: "calc(100% - 130px)", left: "0" },
    category: "operational",
    data: generateStackedData("inventoryTurns"),
  },
  {
    title: "Zero Stockouts",
    subtitle: "Achievement Rate",
    type: "donut",
    trend: "increasing",
    color: "#10B981",
    secondaryColor: "#6EE7B7",
    value: "98.2%",
    position: { top: "35%", left: "5%" },
    mobilePosition: { top: "calc(100% - 130px)", right: "0" },
    category: "operational",
    data: generateBarData("stockouts"),
  },

  // Sales Transformation KPIs
  {
    title: "Reach × Range",
    subtitle: "Penetration Rate",
    type: "bar",
    trend: "increasing",
    color: "#3B82F6",
    secondaryColor: "#93C5FD",
    value: "+41.3%",
    position: { top: "70%", right: "0" },
    mobilePosition: { top: "calc(100% - 130px)", left: "0" },
    category: "sales",
    data: generateBarData("reachPenetration"),
  },
  {
    title: "POS Availability",
    subtitle: "Product Presence",
    type: "stacked",
    trend: "increasing",
    color: "#8B5CF6",
    secondaryColor: "#C4B5FD",
    value: "94.7%",
    position: { top: "15%", right: "0" },
    mobilePosition: { top: "calc(100% - 130px)", right: "0" },
    category: "sales",
    data: generateStackedData("posAvailability"),
  },

  // Digital Transformation KPIs
  {
    title: "DDMRP Adoption",
    subtitle: "Implementation Rate",
    type: "composed",
    trend: "increasing",
    color: "#EF4444",
    secondaryColor: "#FCA5A5",
    value: "+78.9%",
    position: { top: "65%", left: "0" },
    mobilePosition: { top: "calc(100% - 130px)", left: "0" },
    category: "digital",
    data: generateComposedData("channelGrowth"),
  },
  {
    title: "Loyalty Engine",
    subtitle: "Customer Engagement",
    type: "radar",
    trend: "increasing",
    color: "#0EA5E9",
    secondaryColor: "#7DD3FC",
    value: "+63.5%",
    position: { top: "55%", right: "0" },
    mobilePosition: { top: "calc(100% - 130px)", right: "0" },
    category: "digital",
    data: generateRadarData("flexibility"),
  },
];

const MetricCard: React.FC<MetricCard & { index: number }> = ({
  title,
  subtitle,
  type,
  color,
  secondaryColor,
  value,
  position,
  mobilePosition,
  index,
  data,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calculate the actual position style
  const positionStyle = isMobile ? mobilePosition || position : position;

  // For mobile, if left is "50%", add a transform to center it properly
  const additionalStyle =
    isMobile && mobilePosition?.left === "50%"
      ? { transform: "translateX(-50%)" }
      : {};

  const renderChart = () => {
    if (!data) return null;

    const commonProps = {
      data,
      margin: isMobile
        ? { top: 4, right: 4, bottom: 4, left: 4 }
        : { top: 2, right: 2, bottom: 2, left: 2 },
    };

    // Adjust chart dimensions for mobile
    const chartDimensions = isMobile
      ? { innerRadius: 8, outerRadius: 14 }
      : { innerRadius: 15, outerRadius: 22 };

    switch (type) {
      case "composed":
        return (
          <ComposedChart {...commonProps}>
            <defs>
              <linearGradient
                id={`gradient-${title}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={color} stopOpacity={0.3} />
                <stop offset="100%" stopColor={color} stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              fill={`url(#gradient-${title})`}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke={secondaryColor}
              strokeWidth={2}
              strokeDasharray="4 4"
              dot={false}
            />
          </ComposedChart>
        );

      case "stacked":
        return (
          <BarChart {...commonProps} barGap={0}>
            <defs>
              <linearGradient
                id={`gradient-${title}-1`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={color} stopOpacity={0.8} />
                <stop offset="100%" stopColor={color} stopOpacity={0.6} />
              </linearGradient>
              <linearGradient
                id={`gradient-${title}-2`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor={secondaryColor}
                  stopOpacity={0.4}
                />
                <stop
                  offset="100%"
                  stopColor={secondaryColor}
                  stopOpacity={0.2}
                />
              </linearGradient>
            </defs>
            <Bar
              dataKey="value"
              fill={`url(#gradient-${title}-1)`}
              radius={[2, 2, 0, 0]}
              maxBarSize={6}
              stackId="stack"
            />
            <Bar
              dataKey="secondary"
              fill={`url(#gradient-${title}-2)`}
              radius={[2, 2, 0, 0]}
              maxBarSize={6}
              stackId="stack"
            />
          </BarChart>
        );

      case "area":
        return (
          <AreaChart {...commonProps}>
            <defs>
              <linearGradient
                id={`gradient-${title}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={color} stopOpacity={0.4} />
                <stop offset="50%" stopColor={color} stopOpacity={0.2} />
                <stop offset="100%" stopColor={color} stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              fill={`url(#gradient-${title})`}
              dot={false}
            />
          </AreaChart>
        );

      case "line":
        return (
          <LineChart {...commonProps}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              dot={false}
            />
            {data[0].target && (
              <Line
                type="monotone"
                dataKey="target"
                stroke={secondaryColor}
                strokeWidth={2}
                strokeDasharray="4 4"
                dot={false}
              />
            )}
          </LineChart>
        );

      case "donut": {
        const latestData = data[data.length - 1];
        const pieData = [
          { name: "Primary", value: latestData.value },
          {
            name: "Secondary",
            value: latestData.secondary || 100 - latestData.value,
          },
        ];

        return (
          <PieChart {...commonProps}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={chartDimensions.innerRadius}
              outerRadius={chartDimensions.outerRadius}
              startAngle={90}
              endAngle={-270}
            >
              <Cell fill={color} />
              <Cell fill={secondaryColor || "#E5E7EB"} />
            </Pie>
          </PieChart>
        );
      }

      case "bar":
        return (
          <BarChart {...commonProps}>
            <defs>
              <linearGradient
                id={`gradient-${title}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={color} stopOpacity={0.8} />
                <stop offset="100%" stopColor={color} stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <Bar
              dataKey="value"
              fill={`url(#gradient-${title})`}
              radius={[4, 4, 0, 0]}
              maxBarSize={8}
            />
          </BarChart>
        );

      case "radar":
        return (
          <RadarChart
            {...commonProps}
            cx="50%"
            cy="50%"
            outerRadius={isMobile ? 14 : 22}
          >
            <PolarGrid stroke={color} strokeOpacity={0.2} />
            <PolarAngleAxis dataKey="name" tick={false} />
            <Radar
              name={title}
              dataKey="value"
              stroke={color}
              fill={color}
              fillOpacity={0.3}
            />
          </RadarChart>
        );
    }
  };

  return (
    <motion.div
      className={`absolute bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-100/30 z-20 ${
        isMobile ? "w-[130px] p-3" : "w-[200px] p-4"
      }`}
      style={{ ...positionStyle, ...additionalStyle }}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <div className={`flex flex-col gap-1 ${isMobile ? "mb-0.5" : "mb-1"}`}>
        <h3
          className={`text-gray-800 font-semibold leading-tight ${
            isMobile ? "text-[10px]" : "text-sm"
          }`}
        >
          {title}
        </h3>
        {subtitle && (
          <p className={`text-gray-500 ${isMobile ? "text-[8px]" : "text-xs"}`}>
            {subtitle}
          </p>
        )}
        {value && (
          <span
            className={`font-bold ${isMobile ? "text-[10px] mt-0.5" : "text-sm mt-1"}`}
            style={{ color }}
          >
            {value}
          </span>
        )}
      </div>
      <div
        className={`${isMobile && type === "donut" ? "h-[32px]" : isMobile ? "h-[25px]" : "h-[45px]"}`}
      >
        <ResponsiveContainer width="100%" height="100%">
          {renderChart() || <div />}
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export const AnimatedMetrics: React.FC = () => {
  const [currentSet, setCurrentSet] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Define the pattern of cards to show in each set
  const cardPattern = [
    { count: 3, positions: [0, 1, 2] }, // First set: 3 cards - ROCE, Cash Flow, Throughput
    { count: 2, positions: [3, 4] }, // Second set: 2 cards - Lead Time, Inventory Turns
    { count: 3, positions: [5, 6, 7] }, // Third set: 3 cards - Zero Stockouts, Reach × Range, POS Availability
    { count: 2, positions: [8, 9] }, // Fourth set: 2 cards - DDMRP Adoption, Loyalty Engine
  ];

  // Define mobile pattern - always show 2 cards at a time
  const mobileCardPattern = [
    { positions: [0, 1] }, // ROCE, Cash Flow
    { positions: [2, 3] }, // Throughput, Lead Time
    { positions: [4, 5] }, // Inventory Turns, Zero Stockouts
    { positions: [6, 7] }, // Reach × Range, POS Availability
    { positions: [8, 9] }, // DDMRP Adoption, Loyalty Engine
  ];

  const totalSets = isMobile ? mobileCardPattern.length : cardPattern.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % totalSets);
    }, 4000);

    return () => clearInterval(timer);
  }, [totalSets, isMobile]);

  // Get the current set of cards based on the pattern and device type
  const currentPattern = isMobile
    ? mobileCardPattern[currentSet]
    : cardPattern[currentSet];
  const currentCardIndices = currentPattern.positions;
  const currentCards = currentCardIndices.map((index) => {
    const metric = { ...metrics[index] };

    // For mobile view, we don't need to override positions anymore
    // since they're already set to 0 in the metrics array

    return metric;
  });

  // Calculate pagination dots
  const paginationDots = Array.from({ length: totalSets }, (_, i) => i);

  return (
    <div className="relative w-full h-[450px] md:h-[450px] lg:h-[500px]">
      {/* Background Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Hollow Rectangles */}
        <div className="absolute w-[95%] md:w-[85%] h-[92%] border border-gray-200/30 rounded-[2.5rem]" />
        <div className="absolute w-[92%] md:w-[82%] h-[89%] border border-gray-200/40 rounded-[2.5rem]" />

        {/* Main Solid Rectangle */}
        <div className="absolute w-[85%] md:w-[75%] h-[82%] bg-gray-50/95 rounded-[2.5rem]" />

        {/* Hero Image Container */}
        <div className="relative z-10 w-[75%] md:w-[55%] flex items-center justify-center">
          <img
            src="/images/home/hero.jpeg"
            alt="Hero"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center z-30 gap-1.5">
        {paginationDots.map((dotIndex) => (
          <div
            key={`dot-${dotIndex}`}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              currentSet === dotIndex
                ? "bg-gray-800 scale-125"
                : "bg-gray-400 scale-100"
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {currentCards.map((metric, index) => {
          return (
            <MetricCard
              key={`${currentSet}-${index}-${metric.title}`}
              {...metric}
              index={index}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
};
