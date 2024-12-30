import React from "react";

interface ChallengeType {
  title: string;
  description: string;
  icon: string;
}

interface ChallengesData {
  sectionTitle: string;
  subtitle: string;
  challenges: ChallengeType[];
}

const challengesData: ChallengesData = {
  sectionTitle: "Challenges We Address",
  subtitle:
    "We address the critical challenges organizations face across industries, enabling them to achieve operational excellence and financial success",
  challenges: [
    {
      title: "Stagnant Sales Growth",
      description:
        "Experience tailored financial counsel that maximizes your assets and secures your financial future.",
      icon: "/images/consulting/demand-driven-business-transformation/challenges/stagnant-sales-growth.png",
    },
    {
      title: "Market Share Stagnation",
      description:
        "Optimize inventory for a competitive edge—boost accuracy, cut costs, and streamline the supply chain.",
      icon: "/images/consulting/demand-driven-business-transformation/challenges/market-share-stagnation.png",
    },
    {
      title: "Poor Cash Flow",
      description:
        "Our strategic tax planning services help you create a strong, goal-aligned plan that minimizes liabilities.",
      icon: "/images/consulting/demand-driven-business-transformation/challenges/poor-cash-flow.png",
    },
    {
      title: "Demand Variability",
      description:
        "Create a precise roadmap for business success with strategic planning and detailed blueprinting.",
      icon: "/images/consulting/demand-driven-business-transformation/challenges/demand-variability.png",
    },
    {
      title: "Delayed Customer Deliveries",
      description:
        "Navigate your projects with precision using our strategic project management solutions.",
      icon: "/images/consulting/demand-driven-business-transformation/challenges/delayed-customer-deliveries.png",
    },
    {
      title: "High Inventory Cost",
      description:
        "Discover tailored solutions to strategically optimize your operations and enhance business efficiency.",
      icon: "/images/consulting/demand-driven-business-transformation/challenges/high-inventory-cost.png",
    },
  ],
};

const ChallengesWeAddress: React.FC = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[85rem] mx-auto px-4 md:px-8">
        <div 
          className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-slate-50/95 to-white/40"
          style={{
            background: `url('/images/consulting/demand-driven-business-transformation/challenges/bg.png') no-repeat center center`,
            backgroundSize: 'cover'
          }}
        >
          <div className="relative z-10 px-6 py-16 md:px-12 lg:px-16 lg:py-24">
            <div 
              className="flex flex-col gap-3 text-center mb-16"
              data-aos="fade-up-sm"
            >
              <div className="flex justify-center">
                <span className="inline-block px-4 py-1.5 bg-[#d8ebff] border border-white rounded-full text-dark text-sm font-medium shadow-sm">
                  Key Issues
                </span>
              </div>
              <h2 className="mb-4 text-[32px] lg:text-[42px] font-medium">
                Challenges We <span className="text-[#0066FF]">Address</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {challengesData.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {challengesData.challenges.map((challenge, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:bg-white border border-white/60 hover:border-white/80"
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start">
                      <div className="w-16 h-16 flex items-center justify-center bg-[#E6F0FF] rounded-2xl group-hover:bg-[#CCE3FF] transition-colors duration-300">
                        <img
                          src={challenge.icon}
                          alt={challenge.title}
                          width={48}
                          height={48}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#0066FF] transition-colors duration-300">
                        {challenge.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50" />
        </div>
      </div>
    </section>
  );
};

export default ChallengesWeAddress;
