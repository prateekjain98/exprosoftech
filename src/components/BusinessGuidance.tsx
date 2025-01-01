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

interface EmpowermentPoint {
  icon: React.ForwardRefExoticComponent<any>;
  title: string;
  description: string;
}

const businessGuidanceData: BusinessGuidanceData = {
  title: "Guiding Your Business",
  subtitle: "Towards Success",
  description:
    "We combine proven methodologies with guaranteed results to deliver measurable business transformation. Our experienced team ensures end-to-end implementation with a focus on sustainable growth and operational excellence.",
  image: {
    src: "/images/consulting/demand-driven-business-transformation/business-impact-1.png",
    alt: "Business Guidance Meeting",
  },
  guidancePoints: [
    {
      id: 1,
      title: "Proven Methodologies",
      description:
        "Backed by the Theory of Constraints (TOC) and other scientific management techniques.",
    },
    {
      id: 2,
      title: "Guaranteed Results",
      description:
        "We assure measurable outcomes such as a 25% increase in sales or inventory reduction, or we refund the evaluation cost.",
    },
    {
      id: 3,
      title: "End-To-End Implementation",
      description:
        "From strategy design to execution and team handholding, we deliver comprehensive solutions.",
    },
    {
      id: 4,
      title: "Experienced Leadership",
      description:
        "Our team comprises industry veterans with decades of expertise in business transformation.",
    },
  ],
};

const empowermentData = {
  title: "Strategic Partnership",
  subtitle: "For Business Excellence",
  description:
    "Partner with us to create a competitive advantage through strategic planning, market positioning, and innovative solutions. We help you navigate complex business landscapes and capitalize on emerging opportunities.",
  points: [
    {
      icon: Target,
      title: "Strategic Market Positioning",
      description:
        "Develop a strong market presence through competitive analysis, strategic positioning, and targeted growth initiatives. We help you identify and capitalize on market opportunities.",
    },
    {
      icon: Handshake,
      title: "Collaborative Partnership Model",
      description:
        "Experience a unique partnership approach where we work alongside your team, transfer knowledge, and ensure sustainable implementation of solutions for long-term success.",
    },
  ],
};

const BusinessGuidance: React.FC = () => {
  const { title, subtitle, description, image, guidancePoints } =
    businessGuidanceData;
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50/30">
        <div className="max-w-[85rem] mx-auto px-3 sm:px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div
              className="relative flex items-center justify-center min-h-[400px] lg:min-h-[480px]"
              data-aos="fade-right"
            >
              <div className="absolute w-[280px] sm:w-[360px] lg:w-[440px] h-[320px] sm:h-[400px] lg:h-[480px] bg-[#0066FF]/5 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] rotate-[-4deg] transform -translate-y-2 sm:-translate-y-3 lg:-translate-y-4 translate-x-2 sm:translate-x-3 lg:translate-x-4" />
              <div className="absolute w-[280px] sm:w-[360px] lg:w-[440px] h-[320px] sm:h-[400px] lg:h-[480px] border-2 border-[#0066FF]/20 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] rotate-[4deg] transform translate-y-2 sm:translate-y-3 lg:translate-y-4 -translate-x-2 sm:-translate-x-3 lg:-translate-x-4" />
              <img
                src={image.src}
                alt={image.alt}
                width={440}
                height={480}
                className="relative w-[280px] sm:w-[360px] lg:w-[440px] h-[320px] sm:h-[400px] lg:h-[480px] object-contain rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] transform transition-transform duration-500 hover:scale-[1.02] z-10"
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-8 lg:mb-12">
                <h2
                  data-aos="fade-up-sm"
                  className="text-[28px] sm:text-[32px] lg:text-[48px] font-medium leading-tight mb-4"
                >
                  {title}
                  <br />
                  <span className="text-[#0066FF]">{subtitle}</span>
                </h2>
                <p
                  className="text-gray-600 text-base sm:text-lg"
                  data-aos="fade-up-sm"
                  data-aos-delay={100}
                >
                  {description}
                </p>
              </div>

              <div className="space-y-6">
                {guidancePoints.map((point) => (
                  <div
                    key={point.id}
                    data-aos="fade-up-sm"
                    data-aos-delay={100 * point.id}
                    className="group bg-white rounded-xl transition-all duration-300 hover:shadow-md border border-gray-100"
                  >
                    <button
                      onClick={() => toggleExpand(point.id)}
                      className="w-full p-6 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-[#0066FF] font-medium">
                          {point.id}.
                        </span>
                        <h3 className="text-gray-900 text-lg font-medium text-left">
                          {point.title}
                        </h3>
                      </div>
                      <div
                        className={`text-[#0066FF] transform transition-transform duration-300 ${expandedId === point.id ? "rotate-90" : ""}`}
                      >
                        <svg
                          className="w-5 h-5"
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
                      <div className="px-6 pb-6 pt-0">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600 text-base">
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

      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50/30 to-white">
        <div className="max-w-[85rem] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col" data-aos="fade-right">
              <h2 className="text-[36px] lg:text-[48px] font-medium leading-tight mb-6">
                {empowermentData.title}
                <br />
                <span className="text-[#0066FF]">
                  {empowermentData.subtitle}
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-12">
                {empowermentData.description}
              </p>

              <div className="space-y-8">
                {empowermentData.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex gap-6"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0066FF]/10 flex items-center justify-center">
                      <point.icon
                        size={24}
                        weight="duotone"
                        className="text-[#0066FF]"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-2">
                        {point.title}
                      </h3>
                      <p className="text-gray-600">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="flex items-center justify-center"
              data-aos="fade-left"
            >
              <img
                src="/images/consulting/demand-driven-business-transformation/business-impact-2.png"
                alt="Business Impact"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessGuidance;
