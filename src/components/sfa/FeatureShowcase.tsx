import React from "react";
import Button from "../common/Button";

interface FeatureShowcaseProps {
  className?: string;
}

export const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  className,
}) => {
  return (
    <section
      className={`py-20 lg:py-32 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden ${className || ""}`}
    >
      <div className="container mx-auto px-4 lg:px-8 xl:px-16 max-w-[1440px] relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:gap-24 lg:grid-cols-2">
          <div className="order-2 lg:order-1" data-aos="fade-up">
            <div className="bg-blue-50/50 inline-block px-4 py-2 rounded-full mb-8">
              <span className="text-sm font-medium text-primary">
                Maximize ROI
              </span>
            </div>
            <h2 className="text-[2.75rem] leading-[1.2] lg:text-6xl font-bold mb-8 text-[#1a1060]">
              Higher ROI on Sales Operations
            </h2>
            <div className="space-y-6 mb-10">
              <p className="text-lg text-gray-600 leading-relaxed">
                By reducing inefficiencies, automating reporting, and minimizing
                manual tasks, Fieldkonnect maximizes the ROI on your sales force
                investment.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our scalable solution grows with your business, supporting
                increasing numbers of reps, clients, and regions while
                maintaining peak performance and efficiency.
              </p>
            </div>
            <Button href="/demo" variant="primary" size="md">
              Schedule A Demo
            </Button>
          </div>

          <div className="order-1 lg:order-2" data-aos="fade-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-100/20 to-blue-50/20 rounded-[2.5rem]" />
              <div className="relative rounded-[2.5rem] bg-gradient-to-b from-blue-50/50 to-white/80 p-8 lg:p-12">
                <img
                  src="/images/mobile-hand-3.png"
                  alt="Fieldkonnect Mobile App Interface"
                  className="w-full h-auto object-contain mx-auto relative z-10 drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
