import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../../../components/SectionHeader";
import { useState, useEffect } from "react";

// Container data for each step
interface ContainerData {
  title: string;
  description: string;
}

// Process step from Sanity query
interface ProcessStepData {
  title: string;
  description: string;
  containers: ContainerData[];
}

interface HeadingProps {
  tagline: string;
  title: string;
  description: string;
}

interface Props {
  className?: string;
  heading: HeadingProps;
  process: ProcessStepData[];
}



export const ServicesSteps: React.FC<Props> = ({ 
  className = "", 
  heading,
  process = []
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  // Autoplay functionality
  useEffect(() => {
    if (process.length === 0) return;
    
    const interval = setInterval(() => {
      setActiveStep((current) => (current + 1) % process.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [process.length]);

  // Don't render if no data
  if (!process || process.length === 0) {
    return null;
  }

  return (
    <section className={`py-20 ${className}`}>
      <div className="container">
        <SectionHeader
          tagline={heading?.tagline}
          heading={heading?.title}
          subheading={heading?.description}
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Process Steps - Mobile: Compact numbers, Desktop: Vertical list */}
          <div className="lg:block lg:max-w-lg">
            {/* Mobile Step Numbers */}
            <div className="flex justify-between items-center lg:hidden relative">
              {/* Connector lines background */}
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-100 to-purple-100 -translate-y-1/2" />

              {process.map((step, index) => (
                <button
                  key={`mobile-${step.title}`}
                  onClick={() => setActiveStep(index)}
                  className={`relative z-10 flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeStep === index
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25"
                      : "bg-white border-2 border-blue-100 text-blue-500 hover:border-blue-200"
                  }`}
                >
                  <span className="text-lg font-bold">{index + 1}</span>
                </button>
              ))}
            </div>

            {/* Desktop Vertical Steps */}
            <div className="hidden lg:block space-y-8">
              {process.map((step, index) => (
                <div
                  key={`desktop-${step.title}`}
                  className={`relative ${
                    index < process.length - 1 ? "lg:relative" : ""
                  }`}
                >
                  {/* Vertical line connector */}
                  {index < process.length - 1 && (
                    <div className="absolute left-7 top-full h-6 w-[2px] -translate-x-1/2 bg-gradient-to-b from-blue-200 to-purple-200" />
                  )}

                  {/* Step Card */}
                  <div
                    onClick={() => setActiveStep(index)}
                    className={`group cursor-pointer rounded-xl p-4 transition-all duration-300 ${
                      activeStep === index
                        ? "bg-gradient-to-r from-blue-50/90 to-purple-50/90 shadow-md"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Number Circle */}
                      <div className="relative shrink-0">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300
                            ${
                              activeStep === index
                                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25"
                                : "bg-white border-2 border-blue-100 text-blue-500 group-hover:border-blue-200"
                            }`}
                        >
                          <span className="text-lg font-bold">{index + 1}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-lg font-semibold transition-all duration-300 
                          ${
                            activeStep === index
                              ? "text-blue-600"
                              : "text-gray-900 group-hover:text-blue-500"
                          }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: Container Display */}
          <div className="relative lg:sticky lg:top-8 w-full">
            <div className="space-y-6">
              {process[activeStep]?.containers?.map((container, index) => (
                <motion.div
                  key={`container-${activeStep}-${container.title}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative rounded-2xl p-6 bg-white shadow-lg"
                  style={{
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #3b82f6, #8b5cf6, #6366f1) border-box',
                    border: '2px solid transparent',
                  }}
                >
                  {/* Gradient border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 p-[2px]">
                    <div className="rounded-2xl bg-white h-full w-full" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {index + 1}. {container.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {container.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="relative px-4 mt-8">
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"
                  initial={{ width: "0%" }}
                  animate={{
                    width: `${((activeStep + 1) / process.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 