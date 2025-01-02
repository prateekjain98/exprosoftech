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
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50/30">
        <div className="max-w-[85rem] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <img
              src={image.src}
              alt={image.alt}
              width={440}
              height={480}
              className="w-full max-w-[440px] mx-auto lg:mx-0 object-contain order-2 lg:order-1"
              data-aos="fade-right"
            />

            <div className="flex flex-col justify-center order-1 lg:order-2">
              <div className="mb-8 lg:mb-12">
                <h2
                  data-aos="fade-up-sm"
                  className="text-[30px] sm:text-[36px] lg:text-[42px] font-medium leading-[1.2] mb-4"
                >
                  {title}
                  <br />
                  <span className="text-[#0066FF] mt-1 block">{subtitle}</span>
                </h2>
                <p
                  className="text-[16px] text-gray-600 leading-relaxed"
                  data-aos="fade-up-sm"
                  data-aos-delay={100}
                >
                  {description}
                </p>
              </div>

              <div className="space-y-4">
                {guidancePoints.map((point) => (
                  <div
                    key={point.id}
                    data-aos="fade-up-sm"
                    data-aos-delay={100 * point.id}
                    className="group bg-white rounded-xl transition-all duration-300 hover:shadow-lg border border-gray-100/80"
                  >
                    <button
                      onClick={() => toggleExpand(point.id)}
                      className="w-full px-5 py-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[#0066FF] font-medium text-[16px]">
                          {point.id}.
                        </span>
                        <h3 className="text-gray-900 text-[16px] font-medium text-left">
                          {point.title}
                        </h3>
                      </div>
                      <div
                        className={`text-[#0066FF] transform transition-transform duration-300 ${
                          expandedId === point.id ? "rotate-90" : ""
                        }`}
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
                      <div className="px-5 pb-4">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600 text-[16px] leading-relaxed">
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

      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-slate-50/30 to-white">
        <div className="max-w-[85rem] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col" data-aos="fade-right">
              <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] font-medium leading-[1.2] mb-4">
                {empowermentData.title}
                <br />
                <span className="text-[#0066FF] mt-1 block">
                  {empowermentData.subtitle}
                </span>
              </h2>
              <p className="text-[16px] text-gray-600 leading-relaxed mb-10">
                {empowermentData.description}
              </p>

              <div className="space-y-8">
                {empowermentData.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex gap-4"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center">
                      <point.icon
                        size={20}
                        weight="duotone"
                        className="text-[#0066FF]"
                      />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-medium text-gray-900 mb-2">
                        {point.title}
                      </h3>
                      <p className="text-[16px] text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <img
              src="/images/consulting/demand-driven-business-transformation/business-impact-2.png"
              alt="Business Impact"
              className="w-full max-w-[440px] mx-auto lg:mx-0"
              data-aos="fade-left"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessGuidance;
