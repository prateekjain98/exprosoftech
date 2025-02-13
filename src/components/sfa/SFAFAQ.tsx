import React, { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import SectionHeader from "../SectionHeader";
import { motion, AnimatePresence } from "framer-motion";

const sfaFaqData = {
  title: "Frequently Asked Questions",
  subtitle: "FAQ",
  description:
    "Find answers to common questions about Fieldkonnect - our comprehensive Sales Force Automation solution",
  list: [
    {
      title: "What makes Fieldkonnect different from other SFA solutions?",
      description:
        "Fieldkonnect stands out with its comprehensive feature set that covers every aspect of field sales management. It combines user-friendly interface with powerful capabilities like real-time order management, GPS tracking, route optimization, and advanced analytics. Our platform is highly customizable, scalable to support business growth, and backed by dedicated end-to-end support.",
      active: true,
    },
    {
      title: "How does Fieldkonnect enhance field productivity?",
      description:
        "Fieldkonnect streamlines tasks and reduces manual work, allowing sales reps to focus more on customer interactions. It provides real-time order management, optimized route planning, digital catalogs, and automated reporting. Teams typically see a 40% increase in daily customer visits and significant reduction in administrative tasks.",
    },
    {
      title: "What kind of ROI can we expect from Fieldkonnect?",
      description:
        "Fieldkonnect delivers ROI through multiple channels: reduced operational costs, increased sales efficiency, better inventory management, and improved customer satisfaction. Our clients report up to 60% faster order processing, 40% reduction in stockouts, and 85% higher customer retention rates. The platform's automation features also significantly reduce time spent on administrative tasks.",
    },
    {
      title: "How does Fieldkonnect support team collaboration?",
      description:
        "Fieldkonnect features built-in communication tools that enable seamless team coordination. Sales reps can share updates, ask questions, and receive support on the go. Managers can track performance, set targets, and provide real-time feedback. The platform also includes features for territory management and team performance tracking.",
    },
    {
      title: "Can Fieldkonnect be customized for our specific needs?",
      description:
        "Yes, Fieldkonnect is highly customizable and can be tailored to your specific business requirements. From custom reporting dashboards to specialized workflow automation, we can configure the platform to align perfectly with your sales processes. The system is also scalable, making it suitable for businesses of all sizes and adaptable as your needs evolve.",
    },
    {
      title: "What kind of support do you provide?",
      description:
        "We provide comprehensive support throughout your journey with Fieldkonnect. This includes initial setup and configuration, team training, ongoing technical support, and regular system updates. Our dedicated support team is available to help you maximize the value of your investment and ensure smooth operations.",
    },
  ],
};

const SFAFAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

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
        <SectionHeader
          tagline={sfaFaqData.subtitle}
          heading={sfaFaqData.title}
          subheading={sfaFaqData.description}
        />

        {/* Accordions */}
        <div
          className="max-w-3xl mx-auto mt-12 space-y-4 px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {sfaFaqData.list.map((item, index) => (
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
                  <CaretDown
                    size={24}
                    weight="bold"
                    className={`flex-shrink-0 text-blue-600 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
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
        </div>
      </div>
    </section>
  );
};

export default SFAFAQ;
