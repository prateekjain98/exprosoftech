import React from "react";
import SectionHeader from "./SectionHeader";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Data embedded directly in the component
const whyGreymetreData = {
  subtitle: "Why Choose Us",
  title: "Why Greymetre?",
  description: "We don't just optimize businesses—we future-proof them.",
  features: [
    {
      title: "End-to-End Execution",
      description:
        "We go beyond strategy, ensuring seamless implementation and long-term impact.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 6L20 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.80002 5.79999L4.60002 6.59999L6.60002 4.59999"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.80002 11.8L4.60002 12.6L6.60002 10.6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.80002 17.8L4.60002 18.6L6.60002 16.6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12L20 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 18L20 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Demand-Driven Approach",
      description:
        "We align sales, supply chain, and operations with real market demand to reduce inefficiencies and maximize output.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 7.5V6.75C21 5.50736 19.9926 4.5 18.75 4.5H5.25C4.00736 4.5 3 5.50736 3 6.75V17.25C3 18.4926 4.00736 19.5 5.25 19.5H18.75C19.9926 19.5 21 18.4926 21 17.25V16.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 12L17.25 9.75M17.25 9.75L19.5 12M17.25 9.75V14.25"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 12H12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Technology-Backed Solutions",
      description:
        "Our AI-driven analytics, CRM tools, and real-time dashboards enable data-backed decision-making.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 15V19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 13V19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 8V19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 10L6.5 6.5L11.5 11.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 5L17.5 8L21 4.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Proven Track Record",
      description:
        "We have successfully transformed enterprises across manufacturing, retail, FMCG, and B2B sectors.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12L11 14L15 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ],
};

const WhyGreymetre: React.FC = () => {
  const { subtitle, title, description, features } = whyGreymetreData;

  return (
    <section
      id="why-greymetre"
      className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-0 top-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
          <SectionHeader
            tagline={subtitle}
            heading={title}
            subheading={description}
          />
        </div>

        <div
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-600/10 text-blue-600 rounded-lg">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="max-w-3xl mx-auto mt-16 p-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-white text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">
                Ready to transform your business?
              </h3>
              <p className="text-blue-100">
                Let our experts help you achieve operational excellence.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-full shadow-lg hover:bg-blue-50 transition duration-300"
            >
              Contact Us
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <path
                  d="M4.16699 10H15.8337"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.834 5L15.834 10L10.834 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGreymetre;
