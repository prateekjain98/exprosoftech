import React, { useState } from "react";
// import { CaretDown } from "@phosphor-icons/react";
import SectionHeader from "./SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import { sanityClient } from "sanity:client"

interface FaqItem {
  title: string;
  description: string;
  active?: boolean;
}

interface FaqData {
  title: string;
  subtitle: string;
  description: string;
  list: FaqItem[];
}

// Define the FAQ data for Demand Driven page
// const demandDrivenFaqData: FaqData = {
//   title: "Frequently Asked Questions",
//   subtitle: "FAQ",
//   description:
//     "Find answers to common questions about our Demand-Driven Business Transformation services",
//   list: [
//     {
//       title: "What is Demand-Driven Business Transformation?",
//       description:
//         "Demand-Driven Business Transformation is a comprehensive approach that aligns your organization's operations with real-time market demands. It combines strategic planning, operational excellence, and cutting-edge tools like DDMRP to optimize your supply chain and business processes.",
//       active: true,
//     },
//     {
//       title: "How long does the transformation process take?",
//       description:
//         "The transformation timeline varies based on your organization's size and complexity. Typically, initial results are visible within 3-6 months, with complete transformation taking 12-18 months. We provide clear milestones and regular progress updates throughout the journey.",
//     },
//     {
//       title: "What kind of results can we expect?",
//       description:
//         "Our clients typically see significant improvements across key metrics: 25%+ increase in revenue growth, 40% boost in operational efficiency, and 3x faster time-to-market. We also focus on sustainable long-term improvements in customer satisfaction and market responsiveness.",
//     },
//     {
//       title: "How do you ensure successful implementation?",
//       description:
//         "We follow a proven methodology that includes detailed assessment, customized strategy development, hands-on implementation support, and continuous monitoring. Our team works closely with your staff to ensure knowledge transfer and sustainable adoption of new practices.",
//     },
//     {
//       title: "What makes your approach different?",
//       description:
//         "Our approach combines proven methodologies like DDMRP with cutting-edge tools and technologies. We focus on practical implementation, measurable results, and building internal capabilities. Our success-based model ensures we're fully aligned with your business objectives.",
//     },
//   ],
// };

// Define the FAQ data for Home page
// const homeFaqData: FaqData = {
//   title: "Frequently Asked Questions",
//   subtitle: "FAQ",
//   description:
//     "Find answers to common questions about Greymetre's services and solutions",
//   list: [
//     {
//       title: "What does Greymetre specialize in?",
//       description:
//         "Greymetre provides strategic consulting, turnkey execution, and technology-driven solutions for sales transformation, supply chain excellence, and operational efficiency across B2B and retail businesses.",
//       active: true,
//     },
//     {
//       title: "What industries do you serve?",
//       description:
//         "Our expertise spans manufacturing, retail, FMCG, automotive, industrial products, and consumer goods, among others.",
//     },
//     {
//       title: "How does Greymetre's consulting approach differ from others?",
//       description:
//         "We focus on execution-driven consulting, ensuring alignment across sales, supply chain, and operations while integrating DDMRP, TOC, and process automation to deliver measurable impact.",
//     },
//     {
//       title: "What is included in your turnkey services?",
//       description:
//         "We provide end-to-end execution of channel expansion, sales acceleration, supply chain transformation, and loyalty programs—including strategy design, implementation, training, and performance monitoring.",
//     },
//     {
//       title: "How does Greymetre help with Channel Reach Expansion?",
//       description:
//         "We identify and onboard distributors, retailers, and B2B partners, ensuring sustained activation through structured sales programs, training, and loyalty incentives to boost sales.",
//     },
//     {
//       title: "Can you manage loyalty programs for our channel partners?",
//       description:
//         "Yes, we design and execute channel and influencer loyalty programs, integrating QR-based tracking, analytics, and engagement tools to increase participation and sales.",
//     },
//     {
//       title: "What is DDMRP, and how does it improve supply chain efficiency?",
//       description:
//         "Demand-Driven MRP (DDMRP) replaces traditional forecast-based planning with a real-time demand-driven approach, optimizing inventory, reducing supply lead times, and improving product availability.",
//     },
//     {
//       title: "How does Greymetre improve supply chain performance?",
//       description:
//         "Our solutions focus on reducing lead times through strategic buffer positioning, optimizing inventory to balance availability and cost, improving service levels by ensuring the right stock at the right place, and enhancing supply chain agility to manage demand variability effectively.",
//     },
//     {
//       title: "What results can we expect from supply chain transformation?",
//       description:
//         "Clients typically achieve 30-60% lead time reduction, higher OTIF (On-Time In-Full) delivery, lower working capital tied in inventory, and increased responsiveness to market demand.",
//     },
//     {
//       title: "What technology solutions does Greymetre offer?",
//       description:
//         "We develop custom sales and supply chain solutions, including CRM & outreach tools for sales teams, Demand-driven inventory management (DDMRP solutions), and live dashboards & analytics for real-time decision-making.",
//     },
//     {
//       title: "Can your tech solutions integrate with our existing systems?",
//       description:
//         "Yes, we patch and integrate with your ERP, CRM, or other systems through APIs, ensuring seamless digital transformation without disrupting operations.",
//     },
//     {
//       title: "How does real-time dashboarding help decision-making?",
//       description:
//         "Our data-driven dashboards provide instant visibility into key performance metrics, allowing leadership teams to optimize sales, inventory, and operations in real time.",
//     },
//     {
//       title: "How do we start working with Greymetre?",
//       description:
//         "We begin with a business evaluation to identify bottlenecks, followed by a customized strategy and execution plan tailored to your business needs.",
//     },
//     {
//       title: "What's the ROI of your solutions?",
//       description:
//         "Our clients typically see higher sales and market reach, reduced lead times and increased OTIF performance, optimized inventory and lower carrying costs, improved service levels and customer satisfaction, and sustained revenue growth and profitability.",
//     },
//   ],
// };



interface Headings{
  _id:string;
  title:string;
  subtitle:string;
  description:string;
}

interface faqData {
  title: string;
  description: string;
}

interface FAQProps {
  variant?: "home" | "demand-driven";
  heading: Headings;
  faqData: faqData[];
  demandDrivenFaqData?: faqData[]; 
}

const FAQ = async ({ variant = "home" }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [showAllFaqs, setShowAllFaqs] = useState<boolean>(false);

  const HEADING_QUERY = `*[_type == "heading"]{
    _id,
    subtitle,
    title,
    description
  }`;
  const heading = await sanityClient.fetch(HEADING_QUERY);  
  const FAQheading = heading[0]

  const FAQ_QUERY = `*[_type == "faq"] | order(_createdAt desc) {
    title,
    description
  }`
  const faqData = await sanityClient.fetch(FAQ_QUERY)

  const DEMAND_DRIVEN_QUERY = `*[_type == "demandDrivenFaq"] | order(_createdAt asc) {
    title,
    description
  }`
  const demandDrivenFaqData = await sanityClient.fetch(DEMAND_DRIVEN_QUERY)

  const homeFaqData: FaqData = {
    title: FAQheading.title,
    subtitle: FAQheading.subtitle,
    description: FAQheading.description,
    list: faqData.map((item: faqData)=> ({
      title: item.title,
      description: item.description,
      active: false
    }))
  };

  const demandDrivenFormattedData: FaqData = {
    title: FAQheading.title,
    subtitle: FAQheading.subtitle,
    description: FAQheading.description,
    list: demandDrivenFaqData.map((item: faqData) => ({
      title: item.title,
      description: item.description,
      active: false
    }))
  };

  
  const currentFaqData = variant === "home" ? homeFaqData : demandDrivenFormattedData;

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const visibleFaqs = showAllFaqs ? currentFaqData.list : currentFaqData.list.slice(0, 5);

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50/50 to-white py-16 lg:py-24">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <SectionHeader
          tagline={FAQheading.subtitle}
          heading={FAQheading.title}
          subheading={FAQheading.description}
        />

        {/* Accordions */}
        <div
          className="max-w-5xl mx-auto mt-12 space-y-4 px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {visibleFaqs.map((item, index) => (
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
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}

          {currentFaqData.list.length > 5 && (
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
                <div className="flex items-center gap-2">
                  <span className="text-sm text-blue-600">
                    {showAllFaqs ? "Show Less" : "View All FAQs"}
                  </span>
                  <div className="w-4 h-4 ml-2">
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </div>
                </div>
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
