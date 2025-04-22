import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../../../components/SectionHeader";
import { useState, useEffect } from "react";

// Process step from Sanity query
interface ProcessStepData {
  title: string;
  description: string;
  image: string;
}

// Process step for component usage
interface ProcessStep {
  title: string;
  description: string;
  image: string;
}

interface ProcessContent {
  tagline: string;
  heading: string;
  subheading: string;
  steps: ProcessStep[];
}

interface Props {
  className?: string;
  content: ProcessContent;
  process: ProcessStepData[]; // Add this for Sanity data
}

// ProcessStep component props
interface ProcessStepProps {
  number: number;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  isActive,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer relative"
      onClick={onClick}
    >
      {/* Vertical line connector */}
      {number < 5 && (
        <div className="absolute left-7 top-full h-6 w-[2px] -translate-x-1/2 bg-gradient-to-b from-blue-200 to-purple-200" />
      )}

      <div
        className={`relative flex items-center gap-4 p-2 ${isActive ? "opacity-100" : "opacity-70 hover:opacity-90"}`}
      >
        {/* Background highlight for active step */}
        <div
          className={`absolute -inset-2 rounded-lg transition-all duration-300 ${
            isActive
              ? "bg-gradient-to-r from-blue-50/50 to-purple-50/50"
              : "bg-transparent"
          }`}
        />

        {/* Number Circle with outer ring */}
        <div className="relative shrink-0">
          <div
            className={`absolute -inset-1.5 rounded-full transition-transform duration-300 ${
              isActive
                ? "bg-gradient-to-r from-blue-100/50 to-purple-100/50 scale-110"
                : "bg-blue-50/0 scale-100"
            }`}
          />
          <div
            className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300
              ${
                isActive
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25 scale-110"
                  : "bg-white border-2 border-blue-100 text-blue-500 group-hover:border-blue-200"
              }`}
          >
            <span className="text-lg font-bold">{number}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3
            className={`text-lg font-semibold transition-all duration-300 
              ${isActive ? "text-blue-600 translate-x-1" : "text-gray-900 group-hover:text-blue-500"}`}
          >
            {title}
          </h3>
        </div>

        {/* Arrow indicator */}
        <motion.div
          animate={{ x: isActive ? 0 : -10, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const ServicesProcess: React.FC<Props> = ({ className, content, process }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((current) => (current + 1) % process.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [process.length]);

  return (
    <section className={`py-20 ${className}`}>
      <div className="container">
        <SectionHeader
          tagline={content.tagline}
          heading={content.heading}
          subheading={content.subheading}
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

          {/* Right side: Visual Representation */}
          <div className="relative lg:sticky lg:top-8 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] mb-6 w-full">
              <motion.img
                key={activeStep}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={process[activeStep].image}
                alt={process[activeStep].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20" />

              {/* Step indicator */}
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                    Step {activeStep + 1}: {process[activeStep].title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    {process[activeStep].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="relative px-4 sm:px-8">
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
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
