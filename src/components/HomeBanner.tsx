import React, { useEffect, useState } from "react";
import { AnimatedMetrics } from "./AnimatedMetrics";
import Button from "./common/Button";
import { Sparkles } from "./ui-layout/Sparkles";
import { motion, AnimatePresence } from "framer-motion";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  ComposedChart,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

// Import MetricCard interface and component
interface MetricCard {
  title: string;
  type: "area" | "line" | "bar" | "composed" | "stacked" | "donut" | "radar";
  trend?: "increasing" | "decreasing";
  color?: string;
  secondaryColor?: string;
  value?: string;
  subtitle?: string;
  position?: {
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
  category?: "business" | "operational" | "sales" | "digital";
  data?: Array<{
    name: string;
    value: number;
    secondary?: number;
    target?: number;
  }>;
}

// Extract MetricCard component from AnimatedMetrics
const MetricCard: React.FC<MetricCard & { index: number }> = ({
  title,
  subtitle,
  type,
  trend,
  color,
  secondaryColor,
  value,
  index,
  data,
}) => {
  const renderChart = () => {
    if (!data) return null;

    const commonProps = {
      data,
      margin: { top: 2, right: 2, bottom: 2, left: 2 },
    };

    switch (type) {
      case "area": {
        return (
          <AreaChart {...commonProps}>
            <defs>
              <linearGradient id={`gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.2} />
                <stop offset="100%" stopColor={color} stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              type="basis"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              fill={`url(#gradient-${index})`}
              isAnimationActive={true}
            />
          </AreaChart>
        );
      }

      case "line":
        return (
          <LineChart {...commonProps}>
            <Line
              type="basis"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              dot={false}
              isAnimationActive={true}
            />
          </LineChart>
        );

      case "bar":
        return (
          <BarChart {...commonProps}>
            <defs>
              <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.8} />
                <stop offset="100%" stopColor={color} stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <Bar
              dataKey="value"
              fill={`url(#gradient-${title})`}
              radius={[4, 4, 0, 0]}
              maxBarSize={8}
              isAnimationActive={true}
            />
          </BarChart>
        );

      case "composed":
        return (
          <ComposedChart {...commonProps}>
            <defs>
              <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.3} />
                <stop offset="100%" stopColor={color} stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Area
              type="basis"
              dataKey="value"
              stroke={color}
              strokeWidth={1.5}
              fill={`url(#gradient-${title})`}
              dot={false}
              isAnimationActive={true}
            />
            <Line
              type="basis"
              dataKey="target"
              stroke={secondaryColor}
              strokeWidth={1.5}
              strokeDasharray="4 4"
              dot={false}
              isAnimationActive={true}
            />
          </ComposedChart>
        );

      case "donut": {
        const value = data[0].value;
        const pieData = [
          { name: "Score", value: value },
          { name: "Remaining", value: 100 - value }
        ];

        return (
          <PieChart {...commonProps}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={15}
              outerRadius={22}
              startAngle={90}
              endAngle={-270}
              isAnimationActive={true}
            >
              <Cell fill={color} />
              <Cell fill={secondaryColor || "#E5E7EB"} />
            </Pie>
          </PieChart>
        );
      }

      default:
        return null;
    }
  };

  return (
    <motion.div
      className="backdrop-blur-md rounded-xl shadow-lg border z-20 w-[200px] p-4"
      style={{ 
        backgroundColor: `rgba(59, 130, 246, 0.09)`,
        borderColor: `rgba(59, 130, 246, 0.2)`
      }}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <div className="flex flex-col gap-1 mb-1">
        <h3 className="text-gray-800 font-semibold leading-tight text-sm">
          {title}
        </h3>
        {subtitle && (
          <p className="text-gray-800 text-xs">
            {subtitle}
          </p>
        )}
        {value && (
          <span
            className="font-bold text-sm mt-1"
            style={{ color }}
          >
            {value}
          </span>
        )}
      </div>
      <div className="h-[45px]">
        <ResponsiveContainer width="100%" height="100%">
          {renderChart() || <div />}
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

interface HomeBannerProps {
  data: {
    title: string;
    blueTitle?: string;
    description: string;
    image: Array<{
      src: string;
      alt: string;
    }>;
    buttons: Array<{
      label: string;
      link: string;
      isOpenBooking?: boolean;
      overlayIframeSrc?: string;
      overlayTitle?: string;
    }>;
  };
}

// Sample metric data for the cards
const sampleMetrics = [
  {
    title: "Revenue Growth",
    subtitle: "Year over Year",
    type: "area" as const,
    trend: "increasing" as const,
    color: "#4F46E5",
    value: "+45%",
    data: Array.from({ length: 24 }, (_, i) => ({
      name: i.toString(),
      value: 30 + Math.sin(i * 0.5) * 10 + Math.random() * 5
    }))
  },
  {
    title: "Customer Satisfaction",
    subtitle: "NPS Score",
    type: "donut" as const,
    trend: "increasing" as const,
    color: "#06B6D4",
    secondaryColor: "#E5E7EB",
    value: "92%",
    data: Array.from({ length: 1 }, () => ({
      name: "Score",
      value: 92
    }))
  },
  {
    title: "Market Share",
    subtitle: "In Target Segment",
    type: "bar" as const,
    trend: "increasing" as const,
    color: "#8B5CF6",
    value: "+28%",
    data: Array.from({ length: 12 }, (_, i) => ({
      name: i.toString(),
      value: 40 + Math.random() * 30
    }))
  },
  {
    title: "Operational Efficiency",
    subtitle: "Process Optimization",
    type: "composed" as const,
    trend: "increasing" as const,
    color: "#EC4899",
    value: "+33%",
    data: Array.from({ length: 12 }, (_, i) => ({
      name: i.toString(),
      value: 50 + Math.random() * 25
    }))
  }
];

// const bannerContent: BannerContent = {
//   title: "Empowering Strategic Business Transformation",
//   description:
//     "Achieve sustainable growth through Demand Driven Business Excellence, Supply Chain Effectiveness, Sales Transformation and Channel Loyalty—leveraging real-time data, intelligent workflows, and digital tools for sustainable growth.",
//   image: {
//     src: "/images/hero.jpeg",
//     alt: "Hero image showing business transformation platform",
//   },
//   buttons: [
//     {
//       label: "Book a call",
//       link: "#",
//       isCalendly: true,
//     },
//     // {
//     //   label: "Download Deck",
//     //   link: "/about/",
//     // },
//   ],
// };

export const HomeBanner: React.FC<HomeBannerProps> = ({ data }: HomeBannerProps) => {
  const [leftCardIndex, setLeftCardIndex] = useState(0);
  const [rightCardIndex, setRightCardIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftCardIndex((prev) => (prev + 2) % sampleMetrics.length);
      setRightCardIndex((prev) => (prev + 2) % sampleMetrics.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative z-[1] pb-16 lg:pt-16 rounded-b-[2rem] lg:rounded-b-[6rem] bg-white/5 backdrop-blur-sm border border-white/10">
        {/* Metric Cards */}
        {/* <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none"> */}
          {/* Left side card */}
          {/* <AnimatePresence mode="wait">
            <motion.div
              key={`left-${leftCardIndex}`}
              initial={{ opacity: 0, x: -100, rotate: 6 }}
              animate={{ opacity: 1, x: 0, rotate: 6 }}
              exit={{ opacity: 0, x: -100, rotate: 6 }}
              transition={{ duration: 0.6 }}
              className="absolute left-8 top-[25%] lg:top-[15%] xl:top-[25%] z-30"
            >
              <MetricCard {...sampleMetrics[leftCardIndex]} index={0} />
            </motion.div>
          </AnimatePresence> */}

          {/* Right side card */}
          {/* <AnimatePresence mode="wait">
            <motion.div
              key={`right-${rightCardIndex}`}
              initial={{ opacity: 0, x: 100, rotate: -6 }}
              animate={{ opacity: 1, x: 0, rotate: -6 }}
              exit={{ opacity: 0, x: 100, rotate: -6 }}
              transition={{ duration: 0.6 }}
              className="absolute right-8 top-[25%] lg:top-[15%] xl:top-[25%] z-30"
            >
              <MetricCard {...sampleMetrics[rightCardIndex]} index={1} />
            </motion.div>
          </AnimatePresence> */}
        {/* </div> */}

        <div className="max-w-[100rem] h-fit mx-auto px-3 pt-20 lg:pt-0">
          {/* Mobile Layout - Image First */}
          <div className="lg:hidden">
            {/* Image/Visualization for Mobile */}
            <div className="flex justify-center mb-12">
              <div
                className="relative w-[90%]"
                data-aos="fade-up-sm"
                data-aos-delay="100"
              >
                {data.image && data.image.length > 0 && data.image[0].src ? (
                  <div className="w-full relative z-10">
                    <div 
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: 'radial-gradient(ellipse 70% 50% at center, rgba(59, 130, 246, 0.8 ) 0%, rgba(99, 102, 241, 0.3) 30%, rgba(147, 51, 234, 0.2) 60%, transparent 80%)',
                        filter: 'blur(12px)',
                        WebkitFilter: 'blur(12px)'
                      }}
                    ></div>

                    {/* Animated Particles - Behind Image Only */}
                    <div 
                      className="absolute inset-0 overflow-hidden z-20 w-full"
                      style={{
                        filter: 'blur(0.9px)',
                        WebkitFilter: 'blur(0.9px)',
                      }}
                    >
                      {[...Array(24)].map((_, i) => {
                        const size = Math.random() > 0.5 
                          ? 'w-[0.7px] h-[0.7px] lg:w-1.5 lg:h-1.5' 
                          : 'w-[0.4px] h-[0.4px] lg:w-1 lg:h-1';
                        return (
                          <div
                            key={i}
                            className={`absolute ${size} bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-particle`}
                            style={{
                              left: `${5 + Math.random() * 90}%`,
                              top: `${5 + Math.random() * 90}%`,
                              animationDelay: `${Math.random() * 6}s`,
                              animationDuration: `${3 + Math.random() * 5}s`,
                            }}
                          />
                        );
                      })}
                    </div>
                    
                    <img 
                      src={data.image[0].src}
                      alt={data.image[0].alt || "Hero image"}
                      className="w-full h-auto object-contain relative z-40"
                    />
                  </div>
                ) : (
                  <AnimatedMetrics />
                )}
              </div>
            </div>

            {/* Content for Mobile */}
            <div className="text-center">
              {data.title && (
                <div data-aos="fade-up-sm" data-aos-delay="200" className="mb-10 max-w-4xl mx-auto h-fit">
                  <h1 className="text-black mb-2 text-h3 lg:text-h1 lg:font-medium">
                    {data.title}
                  </h1>
                  {data.blueTitle && (
                    <span className="bg-gradient-to-r to-[#111b57] from-primary bg-clip-text text-transparent text-h3 lg:text-h1 font-semibold lg:font-medium">{data.blueTitle}</span>
                  )}
                </div>
              )}
              {data.description && (
                <p
                  dangerouslySetInnerHTML={{ __html: data.description }}
                  data-aos="fade-up-sm"
                  data-aos-delay="300"
                  className="mb-8 text-lg/6 max-w-2xl mx-auto text-gray-600"
                />
              )}
              {data.buttons && (
                <div className="flex flex-wrap justify-center gap-4">
                  {data.buttons.map(({ label, link, isOpenBooking, overlayIframeSrc, overlayTitle }: { label: string, link: string, isOpenBooking?: boolean, overlayIframeSrc?: string, overlayTitle?: string }, index: number) => (
                    <div
                      key={index}
                      data-aos="fade-up-sm"
                      data-aos-delay={400 + index * 50}
                    >
                      <Button
                        href={link}
                        variant={index === 0 ? "primary" : "outline-primary"}
                        target={link && link.startsWith("http") ? "_blank" : "_self"}
                        hasOverlay={isOpenBooking}
                        overlayIframeSrc={overlayIframeSrc}
                        overlayTitle={overlayTitle}
                      >
                        {label}
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Layout - Content First (Original) */}
          <div className="hidden lg:block">
            {/* Content for Desktop */}
            <div className="text-center mb-16 lg:mb-12 xl:mb-20">
              {data.title && (
                <div data-aos="fade-up-sm" className="mb-10 lg:mb-6 xl:mb-10 max-w-4xl mx-auto h-fit">
                  <h1 className="text-black mb-2 text-h2 lg:text-h3 xl:text-h1 lg:font-medium">
                    {data.title}
                  </h1>
                  {data.blueTitle && (
                    <span className="bg-gradient-to-r to-[#111b57] from-primary bg-clip-text text-transparent text-h2 lg:text-h3 xl:text-h1 font-semibold lg:font-medium">{data.blueTitle}</span>
                  )}
                </div>
              )}
              {data.description && (
                <p
                  dangerouslySetInnerHTML={{ __html: data.description }}
                  data-aos="fade-up-sm"
                  data-aos-delay="100"
                  className="mb-8 text-lg/6 lg:text-sm xl:text-lg lg:max-w-lg xl:max-w-4xl mx-auto text-gray-600"
                />
              )}
              {/* Buttons - Show only on xl and above screens */}
              {data.buttons && (
                <div className="hidden xl:flex flex-wrap justify-center gap-4">
                  {data.buttons.map(({ label, link, isOpenBooking, overlayIframeSrc, overlayTitle }: { label: string, link: string, isOpenBooking?: boolean, overlayIframeSrc?: string, overlayTitle?: string }, index: number) => (
                    <div
                      key={index}
                      data-aos="fade-up-sm"
                      data-aos-delay={200 + index * 50}
                    >
                      <Button
                        href={link}
                        variant={index === 0 ? "primary" : "outline-primary"}
                        target={link && link.startsWith("http") ? "_blank" : "_self"}
                        hasOverlay={isOpenBooking}
                        overlayIframeSrc={overlayIframeSrc}
                        overlayTitle={overlayTitle}
                      >
                        {label}
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Image/Visualization for Desktop */}
            <div className="flex justify-center">
              <div
                className="relative w-full lg:w-[70%]"
                data-aos="fade-up-sm"
                data-aos-delay="300"
              >
                {data.image && data.image.length > 0 && data.image[0].src ? (
                  <div className="w-full relative z-10">
                    <div 
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: 'radial-gradient(ellipse 70% 50% at center, rgba(59, 130, 246, 0.8 ) 0%, rgba(99, 102, 241, 0.3) 30%, rgba(147, 51, 234, 0.2) 60%, transparent 80%)',
                        filter: 'blur(12px)',
                        WebkitFilter: 'blur(12px)'
                      }}
                    ></div>

                    {/* Animated Particles - Behind Image Only */}
                    <div 
                      className="absolute inset-0 overflow-hidden z-20 w-full"
                      style={{
                        filter: 'blur(0.9px)',
                        WebkitFilter: 'blur(0.9px)',
                      }}
                    >
                      {[...Array(24)].map((_, i) => {
                        const size = Math.random() > 0.5 
                          ? 'w-0.5 h-0.5 lg:w-1.5 lg:h-1.5' 
                          : 'w-[0.4px] h-[0.4px] lg:w-1 lg:h-1';
                        return (
                          <div
                            key={i}
                            className={`absolute ${size} bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-particle`}
                            style={{
                              left: `${5 + Math.random() * 90}%`,
                              top: `${5 + Math.random() * 90}%`,
                              animationDelay: `${Math.random() * 6}s`,
                              animationDuration: `${3 + Math.random() * 5}s`,
                            }}
                          />
                        );
                      })}
                    </div>
                    
                    <img 
                      src={data.image[0].src}
                      alt={data.image[0].alt || "Hero image"}
                      className="w-full h-auto object-contain relative z-40"
                    />
                  </div>
                ) : (
                  <AnimatedMetrics />
                )}
              </div>
            </div>

            {/* Buttons - Show only on lg screens */}
            {data.buttons && (
              <div className="lg:flex xl:hidden flex-wrap justify-center gap-4 mt-8">
                {data.buttons.map(({ label, link, isOpenBooking, overlayIframeSrc, overlayTitle }: { label: string, link: string, isOpenBooking?: boolean, overlayIframeSrc?: string, overlayTitle?: string }, index: number) => (
                  <div
                    key={index}
                    data-aos="fade-up-sm"
                    data-aos-delay={200 + index * 50}
                  >
                    <Button
                      href={link}
                      variant={index === 0 ? "primary" : "outline-primary"}
                      target={link && link.startsWith("http") ? "_blank" : "_self"}
                      hasOverlay={isOpenBooking}
                      overlayIframeSrc={overlayIframeSrc}
                      overlayTitle={overlayTitle}
                    >
                      {label}
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
