import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PortableText } from '@portabletext/react';
import { Grid } from "./Offerings";
import SectionHeader from "./SectionHeader";

interface ServiceItem {
  id: string;
  title: string;
  content: any; // Block content from Sanity
  image: string;
}

interface DynamicServiceShowcaseProps {
  heading: {
    tagline: string;
    title: string;
    description: string;
  };
  services: ServiceItem[];
  autoRotateInterval?: number; // in milliseconds
  className?: string;
}

const DynamicServiceShowcase: React.FC<DynamicServiceShowcaseProps> = ({
  heading,
  services,
  autoRotateInterval = 5000,
  className = "",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotation effect
  useEffect(() => {
    if (isHovered) return; // Pause auto-rotation when hovering

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [services.length, autoRotateInterval, isHovered]);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className={`pt-16 pb-24 bg-gradient-to-b from-white via-gray-50/50 to-white ${className}`}>
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mt-12 mb-10">
          <SectionHeader
            tagline={heading.tagline}
            heading={heading.title}
            subheading={heading.description}
            alignment="center"
          />
          </div>
          
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Navigation Panel */}
            <div className="lg:col-span-5">
              <div 
                className="relative bg-dark rounded-2xl p-6 lg:p-8 shadow-2xl overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Grid pattern background */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <Grid size={20} />
                </div>
                <div className="relative z-10 space-y-1">
                  {services.map((service, index) => (
                    <motion.button
                      key={service.id}
                      onClick={() => handleTabClick(index)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 hover:bg-white/10 ${
                        activeIndex === index
                          ? "bg-white/20 shadow-lg"
                          : "bg-transparent"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-medium text-lg lg:text-xl leading-tight">
                          {service.title}
                        </h3>
                        {/* {activeIndex === index && (
                          <div className="w-3 h-3 bg-white rounded-full" />
                        )} */}
                      </div>
                      
                      {/* Progress bar for active item */}
                      {activeIndex === index && !isHovered && (
                        <div className="mt-3 h-1 bg-white/30 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-white rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: autoRotateInterval / 1000, ease: "linear" }}
                            key={activeIndex}
                          />
                        </div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  {/* Image Section */}
                  <div className="relative h-64 lg:h-80 overflow-hidden">
                    <img
                      src={services[activeIndex].image}
                      alt={services[activeIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 lg:p-8">
                    <motion.h2
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4"
                    >
                      {services[activeIndex].title}
                    </motion.h2>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-600 text-base lg:text-lg leading-relaxed prose prose-lg max-w-none"
                    >
                      <PortableText value={services[activeIndex].content} />
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicServiceShowcase;