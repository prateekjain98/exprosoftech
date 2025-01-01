import React from "react";

interface ImpactMetric {
  value: string;
  label: string;
}

const impactData: ImpactMetric[] = [
  {
    value: "06+",
    label: "Milestone Year",
  },
  {
    value: "110",
    label: "Project Closed",
  },
  {
    value: "99%",
    label: "Growth Rate",
  },
  {
    value: "100+",
    label: "Firms Aiding",
  },
];

const BusinessImpact: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-[85rem] mx-auto px-3 sm:px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-12">
          {impactData.map((metric, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="text-center px-2 sm:px-0"
            >
              <h3 className="text-[28px] sm:text-[42px] lg:text-[56px] font-bold mb-2 text-slate-300 tracking-tight font-secondary">
                {metric.value}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-medium">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;
