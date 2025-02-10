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
    ],
  },
  {
    title: "Sales Force Automation",
    description:
      "Empower your sales team with cutting-edge automation tools designed for maximum efficiency and productivity. Our comprehensive solution streamlines sales processes, enhances team collaboration, and drives better results.",
    image: "/images/products/sfa.png",
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
    ],
  },
  {
    title: "Loyalty Engine",
    description:
      "Build lasting relationships and drive customer engagement with our advanced loyalty management system. Create personalized rewards programs that inspire customer loyalty and boost retention.",
    image: "/images/products/loyalty.png",
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

      {/* Mobile Layout */}
      <div className="block lg:hidden">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {products.map((product, productIndex) => (
              <div key={productIndex} className="w-full">
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                  <div className="relative w-full">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-auto object-contain relative z-10"
                    />
                  </div>
                </motion.div>

                {/* Title and Description */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed mb-8">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-6">
                  {product.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-8">
                  {productIndex === 0 ? (
                    <a
                      href="/book-simulation/"
                      className="btn-primary btn inline-flex items-center gap-2 px-6 py-2.5 text-sm"
                    >
                      Book Simulation
                      <FaArrowRight className="text-lg" />
                    </a>
                  ) : (
                    <a
                      href={productIndex === 1 ? "/sfa" : "/loyalty-engine"}
                      className="btn-primary btn inline-flex items-center gap-2 px-6 py-2.5 text-sm"
                    >
                      Learn More
                      <FaArrowRight className="text-lg" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout with Scroll Effect */}
      <div className="hidden lg:block">
        <div className="sticky-container h-[300vh]">
          <div className="sticky top-0 h-screen flex items-center">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-7xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProduct}
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="flex flex-col items-center gap-16"
                  >
                    {/* Desktop Grid Layout */}
                    <div className="grid grid-cols-5 gap-12 items-center w-full min-h-[500px]">
                      {/* Left Features */}
                      <motion.div
                        variants={contentVariants}
                        className="relative z-10 self-center"
                      >
                        <div className="space-y-8">
                          {products[activeProduct].features
                            .slice(0, 2)
                            .map((feature, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4 group"
                              >
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mt-1.5">
                                  <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                                </div>
                                <div>
                                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                  </h3>
                                  <p className="text-gray-600 leading-relaxed text-sm">
                                    {feature.description}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                        </div>
                      </motion.div>

                      {/* Center Image */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="col-span-3 flex items-center justify-center px-8 self-center"
                      >
                        <div className="relative w-full max-w-[800px]">
                          <img
                            src={products[activeProduct].image}
                            alt={products[activeProduct].title}
                            className="w-full h-auto object-contain relative z-10"
                          />
                        </div>
                      </motion.div>

                      {/* Right Features */}
                      <motion.div
                        variants={contentVariants}
                        className="relative z-10 self-center"
                      >
                        <div className="space-y-8">
                          {products[activeProduct].features
                            .slice(2, 4)
                            .map((feature, index) => (
                              <motion.div
                                key={index + 2}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: (index + 2) * 0.1 }}
                                className="flex items-start gap-4 group"
                              >
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mt-1.5">
                                  <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                                </div>
                                <div>
                                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                  </h3>
                                  <p className="text-gray-600 leading-relaxed text-sm">
                                    {feature.description}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Desktop Title and Description */}
                    <div className="text-center max-w-2xl mx-auto">
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {products[activeProduct].title}
                      </h2>
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {products[activeProduct].description}
                      </p>
                      {activeProduct === 0 ? (
                        <a
                          href="/book-simulation/"
                          className="btn-primary btn inline-flex items-center gap-2 px-8 py-3 text-base"
                        >
                          Book Simulation
                          <FaArrowRight className="text-lg" />
                        </a>
                      ) : (
                        <a
                          href={
                            activeProduct === 1 ? "/sfa" : "/loyalty-engine"
                          }
                          className="btn-primary btn inline-flex items-center gap-2 px-8 py-3 text-base"
                        >
                          Learn More
                          <FaArrowRight className="text-lg" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Indicator */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
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
      </div>
    </section>
  );
};
