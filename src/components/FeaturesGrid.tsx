import React, { useState } from "react";
import {
  ArrowRight,
  Gear,
  ChartLineUp,
  Database,
  Users,
} from "@phosphor-icons/react";
import SectionHeader from "./SectionHeader";

interface Feature {
  tagline: string;
  title: string;
  description: string;
  image: string;
  icon: React.ForwardRefExoticComponent<any>;
}

const features: Feature[] = [
  {
    tagline: "Flexible Production for a Dynamic Market",
    title: "Demand Driven Manufacturing",
    description:
      "Streamline material, manpower, and machinery to efficiently meet shifting market demands. Our adaptable processes ensure production aligns with changing needs, maximizing resource use and supporting sales with agility.",
    image: "/images/FeatureImgOne.png",
    icon: Gear,
  },
  {
    tagline: "Empowering Sales to Meet Market Needs",
    title: "Market Aligned Sales Process",
    description:
      "Align your sales strategies with actual market demand to ensure seamless channel sales transformation. By synchronizing your sales process with market needs, we help you drive efficiency, better customer engagement, and growth in target markets.",
    image: "/images/FeatureImgTwo.png",
    icon: ChartLineUp,
  },
  {
    tagline: "Empowering Businesses with Data-Driven Insights",
    title: "Real-Time IT Solutions",
    description:
      "Our consultancy provides cutting-edge IT infrastructure combined with advanced data analytics to ensure seamless real-time monitoring and execution. We design and implement robust systems that allow you to stay ahead in today's fast-paced environment.",
    image: "/images/FeatureImgThree.png",
    icon: Database,
  },
  {
    tagline: "Skilled Teams, Smart Systems, Superior Results",
    title: "People & Systems",
    description:
      "Our consultancy optimizes your workforce and technology to drive performance. By building skilled teams and implementing advanced systems, we streamline operations, boost productivity, and ensure sustainable growth, enabling your business to adapt and excel in dynamic markets.",
    image: "/images/FeatureImgFour.png",
    icon: Users,
  },
];

export const FeaturesGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 md:px-8">
        <div className="relative bg-[#0A0F1E] rounded-2xl sm:rounded-[2.5rem] overflow-hidden">
          {/* Background Gradients */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/20 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500/20 rounded-full filter blur-3xl" />
          </div>

          <div className="relative px-4 py-12 sm:px-6 md:px-12 lg:px-16 lg:py-24">
            <div className="mx-auto lg:col-11 mb-10 lg:mb-16">
              <SectionHeader
                tagline="Strategic Solutions for Sustainable Growth"
                heading="Expert Guidance for <span class='bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent'>Business Transformation</span>"
                subheading="Our consultancy offers expert insights and tailored strategies to overcome challenges, optimize operations, and drive growth. We deliver actionable solutions that turn your vision into reality, ensuring long-term success and scalability."
                theme="dark"
              />
            </div>

            <div className="flex flex-col gap-8 lg:gap-12">
              {/* Navigation Tabs */}
              <nav
                className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2.5 sm:gap-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {features.map((feature, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`
                      group flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 
                      px-2.5 sm:px-6 py-2.5 sm:py-4 rounded-lg sm:rounded-xl 
                      transition-all duration-300
                      ${
                        activeTab === index
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25"
                          : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:shadow-lg"
                      }
                    `}
                  >
                    <div
                      className={`p-1.5 sm:p-2 rounded-lg ${
                        activeTab === index
                          ? "bg-white/20"
                          : "bg-gray-700/50 group-hover:bg-gray-700"
                      }`}
                    >
                      <feature.icon size={16} weight="duotone" />
                    </div>
                    <span className="text-[11px] leading-tight sm:text-base font-medium text-center sm:text-left">
                      {feature.title}
                    </span>
                  </button>
                ))}
              </nav>

              {/* Feature Cards */}
              <div
                className="min-h-[550px] md:min-h-[700px] lg:min-h-[500px] relative"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`
                      feature-card absolute inset-0 w-full h-full transition-all duration-500
                      ${
                        activeTab === index
                          ? "opacity-100 translate-y-0 z-10"
                          : "opacity-0 translate-y-8 pointer-events-none z-0"
                      }
                    `}
                  >
                    <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-xl h-full border border-gray-700/50">
                      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                        {/* Content Side */}
                        <div className="order-2 lg:order-1 p-5 md:p-8 lg:p-12 flex flex-col justify-center">
                          <div className="space-y-3 md:space-y-4 lg:space-y-6">
                            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs sm:text-sm font-medium shadow-lg">
                              {feature.tagline}
                            </span>

                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                              {feature.title}
                            </h2>

                            <p className="text-sm sm:text-base text-gray-300/90 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>

                        {/* Image Side */}
                        <div className="order-1 lg:order-2 p-4 pb-0 md:p-6 lg:p-8 flex items-center justify-center">
                          <div className="relative w-full aspect-[4/3] max-w-[400px] md:max-w-[450px]">
                            <img
                              src={feature.image}
                              alt={feature.title}
                              className="w-full h-full object-contain"
                              width={600}
                              height={450}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
