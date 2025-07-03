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
                                ? "bg-gradient-to-r from-blue-500 to-blue-800 text-white shadow-lg shadow-blue-500/25"
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
            {/* Container Cards */}
            <div className="space-y-6">
              {process[activeStep]?.containers?.map((container, index) => (
                <motion.div
                  key={`container-${activeStep}-${container.title}-${index}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1">
                    {/* Background Gradients */}
                    <div className="absolute inset-0">
                      <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full filter blur-2xl" />
                      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500/10 rounded-full filter blur-2xl" />
                    </div>

                    <div className="relative p-8">
                      {/* Header with number */}
                      <div className="flex items-start gap-5 mb-6">
                        {index > 2 && (
                        <div className="flex-shrink-0">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 font-bold text-lg group-hover:from-blue-500/20 group-hover:to-purple-500/20 group-hover:border-blue-400/40 transition-all duration-300">
                            {index + 1}
                          </div>
                        </div>
                        )}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                            {container.title}
                          </h3>
                          <p className="text-gray-300/90 leading-relaxed text-base">
                            {container.description}
                          </p>
                        </div>
                      </div>

                      {/* Bottom decoration */}
                      
                    </div>

                    {/* Hover background effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="relative mt-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700/50 p-6">
                {/* Background Gradients */}
                <div className="absolute inset-0 rounded-2xl">
                  <div className="absolute top-0 right-1/4 w-24 h-24 bg-blue-500/10 rounded-full filter blur-xl" />
                  <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-purple-500/10 rounded-full filter blur-xl" />
                </div>
                
                <div className="relative flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-300">
                    Step {activeStep + 1} of {process.length}
                  </span>
                  <span className="text-sm font-medium text-blue-400">
                    {Math.round(((activeStep + 1) / process.length) * 100)}%
                  </span>
                </div>
                <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-white via-blue-500 to-indigo-200 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{
                      width: `${((activeStep + 1) / process.length) * 100}%`,
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 