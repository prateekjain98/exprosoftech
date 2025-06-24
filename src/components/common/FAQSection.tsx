import React from "react";
// import { CaretDown } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  description: string;
  faqs: FAQ[];
  className?: string;
  "client:load"?: boolean;
  "client:only"?: boolean;
  "client:idle"?: boolean;
  "client:visible"?: boolean;
  "client:media"?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title,
  description,
  faqs,
  className,
}) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50/50 to-white py-16 lg:py-24">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-2 mb-4 text-xs font-medium tracking-wide text-primary bg-primary/10 rounded-full"
            data-aos="fade-up-sm"
          >
            FAQ
          </span>
          <h2
            className="mb-6 text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#111b57] to-primary bg-clip-text text-transparent"
            data-aos="fade-up-sm"
          >
            {title}
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up-sm"
          >
            {description}
          </p>
        </div>

        {/* Accordions */}
        <div
          className="max-w-3xl mx-auto mt-12 space-y-4 px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {faqs.map((faq, index) => (
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
                    {faq.question}
                  </span>
                  <div className={`w-5 h-5 bg-gray-500 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}>
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </div>
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
                          {faq.answer}
                        </p>
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

export default FAQSection;
