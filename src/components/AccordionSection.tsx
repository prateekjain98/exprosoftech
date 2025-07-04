import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import SectionHeader from "./SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import { PortableText } from '@portabletext/react';

interface Block {
  _type: string;
  style?: string;
  children?: Array<{
    _type: string;
    text: string;
    marks?: string[];
  }>;
  markDefs?: Array<{
    _type: string;
    href?: string;
  }>;
  list?: string;
}

interface AccordionItem {
  title: string;
  content: Block[];
  icon?: string;
}

interface AccordionSectionProps {
  heading: string;
  subheading?: string;
  description?: string;
  items: AccordionItem[];
  className?: string;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  heading,
  subheading,
  description,
  items,
  className = "",
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const isActive = (index: number) => activeIndex === index;

  return (
    <section
      className={`relative py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white ${className}`}
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <SectionHeader
          tagline={subheading || ''}
          heading={heading || ''}
          subheading={description || ''}
          alignment="center"
        />

        {/* Accordion Items */}
        <div
          className="max-w-5xl mx-auto mt-12 space-y-4 px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`bg-white border-gray-200/50 hover:bg-gray-50/50 shadow-sm rounded-xl border overflow-hidden transition-all duration-300 hover:shadow-md ${
                  isActive(index)
                    ? "ring-2 ring-blue-500/20 shadow-blue-500/10"
                    : ""
                }`}
              >
                <button
                  className="flex w-full items-center justify-between p-4 sm:p-6 text-left transition-colors"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isActive(index)}
                  aria-controls={`accordion-content-${index}`}
                >
                  <div className="flex items-center space-x-3">
                    {item.icon && (
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isActive(index)
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-600"
                        } transition-colors duration-300`}
                      >
                        <span className="text-sm font-medium">{item.icon}</span>
                      </div>
                    )}
                    <span
                      className="text-base sm:text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors pr-4"
                    >
                      {item.title}
                    </span>
                  </div>
                  <IoChevronDown
                    size={20}
                    className={`text-gray-500 transition-transform duration-300 ${
                      isActive(index) ? "rotate-180" : ""
                    } ${
                      isActive(index) ? "text-blue-500" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isActive(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      id={`accordion-content-${index}`}
                      role="region"
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                        <div className="h-px w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-4" />
                        <div className="text-gray-600 leading-relaxed text-sm sm:text-base prose prose-sm max-w-none">
                          <PortableText value={item.content} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccordionSection; 