import React, { useState } from "react";
import { CaretDownIcon } from "@phosphor-icons/react";
import SectionHeader from "./SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import { sanityClient } from "sanity:client"

interface Headings {
    _id: string;
    title: string;
    subtitle: string;
    description: string;
  }
  
  interface faqData {
    title: string;
    description: string;
    active?: boolean;
  }
  
  interface FAQProps {
    Faq?: any;
  }
  
  const NewFAQ = ({ Faq }: FAQProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [showAllFaqs, setShowAllFaqs] = useState<boolean>(false);
  
    // Use homeFaq prop if provided, otherwise use default data
    const faqSection = Faq?.[0] || {
      title: "",
      pageTitle: "",
      subtitle: "",
      description: "",
      list: []
    };
  
    const toggleAccordion = (index: number) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    const visibleFaqs = showAllFaqs ? faqSection.list : faqSection.list.slice(0, 5);
  
    return (
      <section className="relative bg-gradient-to-b from-white via-gray-50/50 to-white py-16 lg:py-24">
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />
        </div>
  
        <div className="container mx-auto px-4 relative">
          <SectionHeader
            tagline={faqSection.subtitle}
            heading={faqSection.pageTitle || faqSection.title}
            subheading={faqSection.description}
          />
  
          {/* Accordions */}
          <div
            className="max-w-5xl mx-auto mt-12 space-y-4 px-4 sm:px-6 lg:px-8"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {visibleFaqs.map((item: faqData, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white shadow-sm rounded-xl border border-gray-200/50 overflow-hidden transition-all duration-300 hover:shadow-md">
                  <button
                    className="flex w-full items-center justify-between p-4 sm:p-6 text-left transition-colors"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-content-${index}`}
                  >
                    <span className="text-base sm:text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors pr-4">
                      {item.title}
                    </span>
                    <CaretDownIcon
                      size={20}
                      weight="bold"
                      className={`text-gray-500 transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    />
                    {/* <div className={`w-5 h-5 bg-gray-500 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}>
                      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 10l5 5 5-5z"/>
                      </svg>
                    </div> */}
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        id={`faq-content-${index}`}
                        role="region"
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                          <div className="h-px w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-4" />
                          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
  
            {faqSection.list.length > 5 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center mt-8"
              >
                <button
                  onClick={() => setShowAllFaqs(!showAllFaqs)}
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300 font-medium text-sm"
                >
                   {showAllFaqs ? (
                    <>
                      Show Less
                      <CaretDownIcon
                        weight="bold"
                        className="ml-2 rotate-180"
                        size={16}
                      />
                    </>
                  ) : (
                    <>
                      Load More FAQs
                      <CaretDownIcon weight="bold" className="ml-2" size={16} />
                    </>
                  )}
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    );
  };
  
  export default NewFAQ;
  // ... existing code ...