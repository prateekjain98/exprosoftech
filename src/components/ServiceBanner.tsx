import React from "react";

interface ServiceBannerProps {
  service: "loyalty-management" | "channel-reach" | "b2b-sales";
}

const serviceContent = {
  "loyalty-management": {
    title: "Loyalty Management Services",
    subtitle: "Transform Customer Relationships",
    description:
      "Drive sustainable growth through strategic loyalty program management. Our end-to-end services help you create, implement, and optimize loyalty programs that deliver measurable results.",
    stats: [
      { value: "40%", label: "Increase in Customer Retention" },
      { value: "3x", label: "Higher Customer Lifetime Value" },
      { value: "25%", label: "Growth in Repeat Purchases" },
    ],
  },
  "channel-reach": {
    title: "Channel Reach Expansion",
    subtitle: "Accelerate Market Growth",
    description:
      "Expand your market presence through strategic channel partnerships. Our proven methodologies help you identify, develop, and manage successful channel relationships.",
    stats: [
      { value: "60%", label: "Market Coverage Expansion" },
      { value: "45%", label: "Revenue Growth via Channels" },
      { value: "30%", label: "Reduction in Go-to-Market Time" },
    ],
  },
  "b2b-sales": {
    title: "B2B Sales Services",
    subtitle: "Optimize Sales Performance",
    description:
      "Transform your B2B sales operations with our comprehensive solutions. We help you streamline processes, enhance team capabilities, and drive sustainable revenue growth.",
    stats: [
      { value: "50%", label: "Increase in Sales Efficiency" },
      { value: "35%", label: "Higher Win Rates" },
      { value: "2x", label: "Faster Sales Cycle" },
    ],
  },
};

const ServiceBanner: React.FC<ServiceBannerProps> = ({ service }) => {
  const content = serviceContent[service];

  return (
    <section className="relative py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primary">
            {content.subtitle}
          </span>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            {content.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            {content.description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {content.stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
                <p className="mt-2 text-sm font-medium text-slate-600">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner; 