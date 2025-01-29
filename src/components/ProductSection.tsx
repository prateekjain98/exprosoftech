import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { FaArrowRight } from "react-icons/fa";

interface FeaturePoint {
  title: string;
  description: string;
}

interface Product {
  title: string;
  description: string;
  image: string;
  features: FeaturePoint[];
  label: string;
}

interface ProductSectionProps {
  hideHeadingBar?: boolean;
}

const featuresData = {
  subtitle: "Empowering Growth with Cutting-Edge Solutions",
  title: "Innovative Tailored Products for Your Business Needs",
  description:
    "Discover a diverse range of products designed to drive innovation and efficiency across your operations. Our offerings are crafted with precision and tailored to solve the unique challenges of your industry.",
};

const products: Product[] = [
  {
    title: "Intuiflow",
    description:
      "Build an agile and resilient supply chain with our AI/ML-powered planning software. Get actionable insights and improve operational stability from strategy to shop floor.",
    image:
      "https://demanddriventech.com/wp-content/uploads/2024/07/intuiflow-screen-1.png",
    label: "Supply Chain Solution",
    features: [
      {
        title: "Materials Planning",
        description:
          "Ensure steady material supply and minimize bullwhip effect with enhanced supply-demand visibility and adaptive buffer management.",
      },
      {
        title: "Demand Planning",
        description:
          "Visualize backlog vs forecast, assess adaptability to change, and establish forecasted demand rates with intelligent analytics.",
      },
      {
        title: "Sales & Operations Planning",
        description:
          "Generate forward-looking simulations, identify operational gaps, and respond quickly to market changes for optimal performance.",
      },
      {
        title: "Scheduling & Execution",
        description:
          "Align resources to demand, improve due date performance, and reduce impact of variation with real-time work order status.",
      },
      {
        title: "Auto Pilot",
        description:
          "Achieve desired service levels and optimize inventory with AI-driven recommendations and visual proof of proposed settings.",
      },
    ],
  },
  {
    title: "Sales Force Automation",
    description:
      "Empower your sales team with cutting-edge automation tools designed for maximum efficiency and productivity. Our comprehensive solution streamlines sales processes, enhances team collaboration, and drives better results.",
    image: "/images/mobile.png",
    label: "Sales Force Automation",
    features: [
      {
        title: "Real-Time Order Management",
        description:
          "Enable instant order placement during customer visits with mobile devices, reducing processing time and errors.",
      },
      {
        title: "Geo-Tracking & Attendance",
        description:
          "Monitor field activities with GPS-enabled tracking, allowing real-time attendance management and territory coverage optimization.",
      },
      {
        title: "Route Optimization",
        description:
          "Plan efficient daily routes based on customer locations and traffic patterns, maximizing valuable client visits.",
      },
      {
        title: "Digital Product Catalog",
        description:
          "Access comprehensive product information with images and pricing details instantly for effective demonstrations.",
      },
      {
        title: "Performance Analytics",
        description:
          "Track and analyze sales performance metrics in real-time to make data-driven decisions and improvements.",
      },
    ],
  },
  {
    title: "Loyalty Engine",
    description:
      "Build lasting relationships and drive customer engagement with our advanced loyalty management system. Create personalized rewards programs that inspire customer loyalty and boost retention.",
    image: "/images/mobile2.png",
    label: "Loyalty Engine",
    features: [
      {
        title: "Customizable Rewards",
        description:
          "Design flexible reward programs with various incentive options including discounts, gifts, and cashback.",
      },
      {
        title: "Multi-Channel Integration",
        description:
          "Seamlessly integrate loyalty programs across all customer touchpoints for a unified experience.",
      },
      {
        title: "Advanced Analytics",
        description:
          "Gain deep insights into customer behavior and program performance through comprehensive analytics.",
      },
      {
        title: "Automated Communications",
        description:
          "Keep participants engaged with timely automated notifications for rewards, points, and promotions.",
      },
      {
        title: "Fraud Prevention",
        description:
          "Robust security measures and verification processes to maintain program integrity and prevent misuse.",
      },
    ],
  },
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const ProductSection: React.FC<ProductSectionProps> = ({
  hideHeadingBar = false,
}) => {
  const [activeProduct, setActiveProduct] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".sticky-container");
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollProgress = -rect.top / (rect.height - window.innerHeight);

      if (scrollProgress < 0.33) {
        setActiveProduct(0);
      } else if (scrollProgress < 0.66) {
        setActiveProduct(1);
      } else {
        setActiveProduct(2);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative py-16 lg:py-24">
      {!hideHeadingBar && (
        <div className="container mx-auto px-4 mb-16">
          <div className="mx-auto text-center max-w-3xl">
            <SectionHeader
              tagline={featuresData.subtitle}
              heading={featuresData.title}
              subheading={featuresData.description}
            />
          </div>
        </div>
      )}

      <div className="sticky-container h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct}
                  variants={containerVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                >
                  {/* Content Side */}
                  <motion.div
                    variants={contentVariants}
                    className="relative z-10 lg:pr-8"
                  >
                    <div className="space-y-6 lg:space-y-8">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                        {products[activeProduct].label}
                      </span>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                        {products[activeProduct].title}
                      </h2>

                      <p className="text-gray-600 text-lg leading-relaxed">
                        {products[activeProduct].description}
                      </p>

                      <div className="space-y-6 pt-4">
                        {products[activeProduct].features.map(
                          (feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-4 group"
                            >
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mt-1">
                                <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                  {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                  {feature.description}
                                </p>
                              </div>
                            </motion.div>
                          )
                        )}
                      </div>

                      {activeProduct === 0 && (
                        <div className="pt-6">
                          <a
                            href="/book-simulation/"
                            className="btn-primary btn flex items-center gap-2 w-fit"
                          >
                            Book Simulation
                            <FaArrowRight className="text-lg" />
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* Image Side */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative flex items-center justify-center lg:justify-end"
                  >
                    <div className="relative w-full max-w-[600px]">
                      <img
                        src={products[activeProduct].image}
                        alt={products[activeProduct].title}
                        className={`w-full h-auto object-contain relative z-10 ${
                          activeProduct !== 0 ? "max-h-[400px]" : ""
                        }`}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicator */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProduct(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeProduct === index
                        ? "bg-blue-500 scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
