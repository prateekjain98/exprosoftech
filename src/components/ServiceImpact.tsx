import React from "react";

interface ServiceImpactProps {
  service: "loyalty-management" | "channel-reach" | "b2b-sales";
}

const serviceContent = {
  "loyalty-management": {
    title: "Transform Customer Relationships",
    description:
      "Our loyalty management services help you build lasting relationships with your customers through personalized engagement strategies and data-driven insights.",
    features: [
      {
        title: "Program Design & Strategy",
        description:
          "Create compelling loyalty programs that align with your business objectives and customer expectations.",
        icon: "🎯",
      },
      {
        title: "Customer Analytics",
        description:
          "Leverage advanced analytics to understand customer behavior and optimize program performance.",
        icon: "📊",
      },
      {
        title: "Engagement Optimization",
        description:
          "Continuously improve customer engagement through personalized communications and rewards.",
        icon: "🔄",
      },
    ],
  },
  "channel-reach": {
    title: "Expand Your Market Presence",
    description:
      "Our channel expansion services help you identify and capitalize on new market opportunities through strategic partnerships and optimized distribution networks.",
    features: [
      {
        title: "Partner Selection",
        description:
          "Identify and evaluate potential channel partners based on strategic fit and market potential.",
        icon: "🤝",
      },
      {
        title: "Network Optimization",
        description:
          "Design and implement efficient distribution networks that maximize market coverage.",
        icon: "🌐",
      },
      {
        title: "Performance Management",
        description:
          "Monitor and optimize channel performance through data-driven insights and continuous improvement.",
        icon: "📈",
      },
    ],
  },
  "b2b-sales": {
    title: "Accelerate Sales Growth",
    description:
      "Our B2B sales services help you optimize your sales operations, enhance team capabilities, and drive sustainable revenue growth.",
    features: [
      {
        title: "Sales Process Optimization",
        description:
          "Streamline your sales processes to improve efficiency and effectiveness.",
        icon: "⚡",
      },
      {
        title: "Team Development",
        description:
          "Enhance your sales team's capabilities through training and coaching programs.",
        icon: "👥",
      },
      {
        title: "Revenue Acceleration",
        description:
          "Implement strategies to accelerate revenue growth and improve win rates.",
        icon: "💰",
      },
    ],
  },
};

const ServiceImpact: React.FC<ServiceImpactProps> = ({ service }) => {
  const content = serviceContent[service];

  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{content.description}</p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {content.features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <span className="mb-4 inline-block text-4xl">{feature.icon}</span>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceImpact; 