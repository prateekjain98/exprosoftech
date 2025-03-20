import React from "react";
import SectionHeader from "./SectionHeader";

// Data embedded directly in the component
const aboutBannerData = {
  subtitle: "About Us",
  title: "Who We Are",
  description:
    "Empowering Business Transformation Through Strategy, Execution, and Technology",
  content: [
    "Greymetre is a business transformation partner specializing in sales acceleration, supply chain excellence, operational optimization, and digital transformation. We integrate strategic consulting, turnkey execution, and technology-driven solutions to help organizations enhance efficiency, improve market reach, and drive sustainable growth.",
    "With expertise in DDMRP, TOC, and data-driven decision-making, we enable businesses to move from forecast-driven inefficiencies to real-time demand-driven execution, ensuring optimized inventory, seamless sales processes, and maximized profitability.",
    "At Greymetre, we don't just consult—we design, execute, and sustain transformational change that drives real business impact.",
  ],
  featuredImage: "/images/about-1.jpg",
};

const AboutBanner: React.FC = () => {
  const { title, subtitle, description, content, featuredImage } =
    aboutBannerData;

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content Side */}
            <div className="order-2 lg:order-1">
              <div className="mb-8" data-aos="fade-up" data-aos-delay="100">
                <SectionHeader
                  tagline={subtitle}
                  heading={title}
                  subheading={description}
                  alignment="left"
                />
              </div>

              <div
                className="space-y-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {content.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div
                className="mt-10 flex flex-wrap gap-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <a
                  href="#leadership"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg"
                >
                  Meet Our Team
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
                <a
                  href="#why-greymetre"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-300"
                >
                  Why Choose Us
                </a>
              </div>
            </div>

            {/* Image Side */}
            <div
              className="order-1 lg:order-2"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="relative">
                <div className="absolute inset-0 -translate-x-8 -translate-y-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl transform"></div>
                <img
                  src={featuredImage}
                  alt="Greymetre Business Transformation"
                  className="relative w-full h-auto rounded-3xl shadow-2xl object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
                  <p className="text-2xl font-bold">35+</p>
                  <p className="text-sm opacity-90">
                    Years of Combined Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
