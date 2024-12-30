import { markdownify } from "@/lib/utils/textConverter";
import React from "react";

interface StatType {
  value: string;
  description: string;
  label: string;
}

interface ImpactData {
  title: string;
  imageOverlayTitle: string;
  imageOverlayDescription: string;
  image: {
    src: string;
    alt: string;
  };
  stats: StatType[];
}

const impactData: ImpactData = {
  title: "Delivering Transformative Results for Every Client's Success",
  imageOverlayTitle: "2x profitability in 18 months",
  imageOverlayDescription:
    "Our seasoned and certified consultants are driven by their passion for transformation, prioritizing your success above all else.",
  image: {
    src: "/images/consulting/demand-driven-business-transformation/demand-driven-impact.png",
    alt: "Business Impact Meeting",
  },
  stats: [
    {
      value: "35%",
      label: "Growth",
      description:
        "Increased Sales and Enhanced Throughput for Business Success",
    },
    {
      value: "30%",
      label: "Reduction",
      description:
        "Achieving Significant Reductions in Inventory for Operational Efficiency",
    },
    {
      value: "40%",
      label: "Improvements",
      description: "Remarkable Improvements in Lead Time for Faster Operations",
    },
  ],
};

const DemandDrivenImpact: React.FC = () => {
  const { title, imageOverlayTitle, imageOverlayDescription, image, stats } =
    impactData;

  const highlightText = (text: string) => {
    return text.replace(
      "Transformative",
      '<span class="text-[#0066FF]">Transformative</span>'
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50/30">
      <div className="max-w-[85rem] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1" data-aos="fade-right">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[480px] group">
              <img
                src={image.src}
                alt={image.alt}
                width={580}
                height={480}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />

              <div className="absolute inset-x-6 bottom-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-white text-2xl font-medium mb-3">
                    {imageOverlayTitle}
                  </h3>
                  <p className="text-white/90 text-base">
                    {imageOverlayDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-12">
              <h2
                data-aos="fade-up-sm"
                className="text-[28px] lg:text-[36px] font-medium leading-tight"
                dangerouslySetInnerHTML={{ __html: highlightText(title) }}
              />
            </div>

            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  data-aos="fade-up-sm"
                  data-aos-delay={100 * index}
                  className="group bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-md border border-gray-100"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-baseline gap-3">
                      <span className="text-[32px] font-medium text-[#0066FF]">
                        {stat.value}
                      </span>
                      <span className="text-gray-900 text-lg font-medium">
                        {stat.label}
                      </span>
                    </div>

                    <p className="text-gray-600 text-base">
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemandDrivenImpact;
