import { motion, AnimatePresence } from "framer-motion";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  YAxis,
  XAxis,
  CartesianGrid,
  LineChart,
  Line,
  BarChart,
  Bar,
  ComposedChart,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useEffect, useState } from "react";

interface MetricCard {
  title: string;
  type: "area" | "line" | "bar" | "composed" | "stacked" | "donut";
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
  data?: Array<{
    name: string;
    value: number;
    secondary?: number;
    target?: number;
  }>;
}

const metrics: MetricCard[] = [
  {
    title: "Revenue Growth",
    subtitle: "Year over Year",
    type: "composed",
    trend: "increasing",
    color: "#4F46E5",
    secondaryColor: "#818CF8",
    value: "+127%",
    position: { top: "25%", left: "5%" },
    mobilePosition: { top: "70%", left: "4%" },
    data: generateComposedData("revenue"),
  },
  {
    title: "Customer Retention",
    subtitle: "Last 12 months",
    type: "donut",
    trend: "increasing",
    color: "#06B6D4",
    secondaryColor: "#67E8F9",
    value: "95%",
    position: { top: "55%", right: "8%" },
    mobilePosition: { top: "70%", right: "4%" },
    data: generateStackedData("retention"),
  },
  {
    title: "Partner Network",
    subtitle: "Growth Rate",
    type: "bar",
    trend: "increasing",
    color: "#8B5CF6",
    secondaryColor: "#A78BFA",
    value: "+85%",
    position: { top: "10%", right: "10%" },
    hideOnMobile: true,
    data: generateBarData("network"),
  },
  {
    title: "Average Deal Size",
    subtitle: "vs Target",
    type: "composed",
    trend: "increasing",
    color: "#EC4899",
    secondaryColor: "#F472B6",
    value: "+156%",
    position: { top: "45%", left: "12%" },
    mobilePosition: { top: "70%", left: "calc(50% - 70px)" },
    data: generateComposedData("deals"),
  },
  {
    title: "Market Share",
    subtitle: "By Region",
    type: "stacked",
    trend: "increasing",
    color: "#F59E0B",
    secondaryColor: "#FCD34D",
    value: "+45%",
    position: { top: "55%", right: "10%" },
    hideOnMobile: true,
    data: generateStackedData("market"),
  },
];

function generateComposedData(
  type: "revenue" | "deals"
): Array<{ name: string; value: number; target: number }> {
  const points = 12;
  const baseValue = type === "revenue" ? 30 : 40;
  const targetMultiplier = type === "revenue" ? 1.2 : 1.5;

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
  type: "retention" | "market"
): Array<{ name: string; value: number; secondary: number }> {
  const points = 8;
  const baseValue = type === "retention" ? 60 : 40;

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
  type: "network"
): Array<{ name: string; value: number }> {
  const points = 8;
  const baseValue = 25;

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

      case "donut": {
        const latestData = data[data.length - 1];
        const pieData = [
          { name: "Primary", value: latestData.value },
          { name: "Secondary", value: latestData.secondary || 0 },
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
    }
  };

  return (
    <motion.div
      className={`absolute bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-100/30 z-20 ${
        isMobile ? "w-[130px] p-3" : "w-[200px] p-4"
      }`}
      style={isMobile ? mobilePosition || position : position}
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleMetrics = metrics.filter(
    (metric) => !isMobile || !metric.hideOnMobile
  );
  const cardsPerSet = isMobile ? 2 : 3;
  const totalSets = Math.ceil(visibleMetrics.length / cardsPerSet);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % totalSets);
    }, 4000);

    return () => clearInterval(timer);
  }, [totalSets]);

  const currentCards = visibleMetrics.slice(
    currentSet * cardsPerSet,
    (currentSet + 1) * cardsPerSet
  );

  return (
    <div className="relative w-full h-[450px] md:h-[450px]">
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
            src="/images/home/hero.png"
            alt="Hero"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {currentCards.map((metric, index) => (
          <MetricCard
            key={`${currentSet}-${index}`}
            {...metric}
            index={index}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
