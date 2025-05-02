import React, { useState } from "react";
import { ChartLineUp, Brain, Handshake, Target } from "@phosphor-icons/react";

interface GuidancePoint {
  id: number;
  title: string;
  description: string;
}

interface BusinessGuidanceData {
  title: string;
  subtitle: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  guidancePoints: GuidancePoint[];
}

// First, create an IconType for the icons
type IconType = typeof ChartLineUp | typeof Brain | typeof Handshake | typeof Target;

// Update the iconMap type
const iconMap: Record<string, IconType> = {
  ChartLineUp,
  Brain,
  Handshake,
  Target
};

// Update the EmpowermentPoint interface
interface EmpowermentPoint {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
}

interface EmpowermentData {
  title: string;
  subtitle: string;
  description: string;
  points: EmpowermentPoint[];
  empowermentImage: {
    src: string;
    alt: string;
  };
}

// const businessGuidanceData: BusinessGuidanceData = {
//   title: "Guiding Your Business",
//   subtitle: "Towards Success",
//   description:
//     "We combine proven methodologies with guaranteed results to deliver measurable business transformation. Our experienced team ensures end-to-end implementation with a focus on sustainable growth and operational excellence.",
//   image: {
//     src: "/images/consulting/demand-driven-business-transformation/business-impact-1.png",
//     alt: "Business Guidance Meeting",
//   },
//   guidancePoints: [
//     {
//       id: 1,
//       title: "Proven Methodologies",
//       description:
//         "Backed by the Theory of Constraints (TOC) and other scientific management techniques.",
//     },
//     {
//       id: 2,
//       title: "Guaranteed Results",
//       description:
//         "We assure measurable outcomes such as a 25% increase in sales or inventory reduction, or we refund the evaluation cost.",
//     },
//     {
//       id: 3,
//       title: "End-To-End Implementation",
//       description:
//         "From strategy design to execution and team handholding, we deliver comprehensive solutions.",
//     },
//     {
//       id: 4,
//       title: "Experienced Leadership",
//       description:
//         "Our team comprises industry veterans with decades of expertise in business transformation.",
//     },
//   ],
// };

// const empowermentData = {
//   title: "Strategic Partnership",
//   subtitle: "For Business Excellence",
//   description:
//     "Partner with us to create a competitive advantage through strategic planning, market positioning, and innovative solutions. We help you navigate complex business landscapes and capitalize on emerging opportunities.",
//   points: [
//     {
//       icon: Target,
//       title: "Strategic Market Positioning",
//       description:
//         "Develop a strong market presence through competitive analysis, strategic positioning, and targeted growth initiatives. We help you identify and capitalize on market opportunities.",
//     },
//     {
//       icon: Handshake,
//       title: "Collaborative Partnership Model",
//       description:
//         "Experience a unique partnership approach where we work alongside your team, transfer knowledge, and ensure sustainable implementation of solutions for long-term success.",
//     },
//   ],
// };

const BusinessGuidance = ({businessGuidanceData, empowermentData}: {
  businessGuidanceData: BusinessGuidanceData;
  empowermentData: EmpowermentData;
}) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <section className="py-8 sm:py-12 lg:py-24 bg-gradient-to-b from-white to-slate-50/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="relative flex items-center justify-center order-2 lg:order-1">
              <div className="absolute w-[280px] sm:w-[360px] lg:w-[440px] h-[320px] sm:h-[400px] lg:h-[480px] bg-[#0066FF]/5 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] rotate-[-4deg] transform -translate-y-2 sm:-translate-y-3 lg:-translate-y-4 translate-x-2 sm:translate-x-3 lg:translate-x-4" />
              <div className="absolute w-[280px] sm:w-[360px] lg:w-[440px] h-[320px] sm:h-[400px] lg:h-[480px] border-2 border-[#0066FF]/20 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] rotate-[4deg] transform translate-y-2 sm:translate-y-3 lg:translate-y-4 -translate-x-2 sm:-translate-x-3 lg:-translate-x-4" />
              <img
                src={businessGuidanceData.image.src}
                alt={businessGuidanceData.image.alt}
                width={440}
                height={480}
                className="relative w-[280px] sm:w-[360px] lg:w-[440px] h-[320px] sm:h-[400px] lg:h-[480px] object-contain rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] transform transition-transform duration-500 hover:scale-[1.02] z-10"
                data-aos="fade-right"
              />
            </div>

            <div className="flex flex-col justify-center order-1 lg:order-2 w-full">
              <div className="mb-6 lg:mb-12">
                <h2
                  data-aos="fade-up-sm"
                  className="text-[26px] sm:text-[32px] lg:text-[42px] font-medium leading-[1.2] mb-4"
                >
                  {businessGuidanceData.title}
                  <br />
                  <span className="text-[#0066FF] mt-1 block">{businessGuidanceData.subtitle}</span>
                </h2>
                <p
                  className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed"
                  data-aos="fade-up-sm"
                  data-aos-delay={100}
                >
                  {businessGuidanceData.description}
                </p>
              </div>

              <div className="space-y-4 w-full">
                {businessGuidanceData.guidancePoints.map((point:any) => (
                  <div
                    key={point.id}
                    data-aos="fade-up-sm"
                    data-aos-delay={100 * point.id}
                    className="group bg-white rounded-xl transition-all duration-300 hover:shadow-lg border border-gray-100/80 w-full"
                  >
                    <button
                      onClick={() => toggleExpand(point.id)}
                      className="w-full px-3 sm:px-5 py-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                        <span className="text-[#0066FF] font-medium text-[15px] sm:text-[16px] flex-shrink-0">
                          {point.id}.
                        </span>
                        <h3 className="text-gray-900 text-[15px] sm:text-[16px] font-medium text-left truncate">
                          {point.title}
                        </h3>
                      </div>
                      <div
                        className={`text-[#0066FF] transform transition-transform duration-300 flex-shrink-0 ${
                          expandedId === point.id ? "rotate-90" : ""
                        }`}
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </button>
                    {expandedId === point.id && (
                      <div className="px-3 sm:px-5 pb-4">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600 text-[14px] sm:text-[16px] leading-relaxed">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 lg:py-24 bg-gradient-to-b from-slate-50/30 to-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="flex flex-col w-full" data-aos="fade-right">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[42px] font-medium leading-[1.2] mb-4">
                {empowermentData.title}
                <br />
                <span className="text-[#0066FF] mt-1 block">
                  {empowermentData.subtitle}
                </span>
              </h2>
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed mb-6 sm:mb-10">
                {empowermentData.description}
              </p>

              <div className="space-y-6 sm:space-y-8">
                {empowermentData.points.map((point: EmpowermentPoint, index: number) => (
                  <div
                    key={index}
                    className="flex gap-3 sm:gap-4 w-full"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center">
                      {iconMap[point.icon] ? (
                        React.createElement(iconMap[point.icon], {
                          size: 18,
                          weight: "duotone",
                          className: "text-[#0066FF]"
                        })
                      ) : (
                        <ChartLineUp size={18} weight="duotone" className="text-[#0066FF]" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[15px] sm:text-[16px] font-medium text-gray-900 mb-2">
                        {point.title}
                      </h3>
                      <p className="text-[14px] sm:text-[16px] text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute w-[280px] sm:w-[360px] lg:w-[440px] h-[320px] sm:h-[400px] lg:h-[480px] bg-[#0066FF]/5 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] rotate-[-4deg] transform -translate-y-2 sm:-translate-y-3 lg:-translate-y-4 translate-x-2 sm:translate-x-3 lg:translate-x-4" />
              <div className="absolute w-[280px] sm:w-[360px] lg:w-[440px] h-[320px] sm:h-[400px] lg:h-[480px] border-2 border-[#0066FF]/20 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] rotate-[4deg] transform translate-y-2 sm:translate-y-3 lg:translate-y-4 -translate-x-2 sm:-translate-x-3 lg:-translate-x-4" />
              {empowermentData.empowermentImage && (
                <img
                src={empowermentData.empowermentImage.src}
                alt={empowermentData.empowermentImage.alt}
                  className="relative w-[280px] sm:w-[360px] lg:w-[440px] h-[320px] sm:h-[400px] lg:h-[480px] object-contain rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] transform transition-transform duration-500 hover:scale-[1.02] z-10"
                  data-aos="fade-left"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessGuidance;
