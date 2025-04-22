import React from "react";
import Button from "../common/Button";

interface Feature {
  title: string;
  description: string;
}

interface FeatureShowcaseProps {
  showcaseContent: {
    title: string;
    description: string;
    features: Feature[];
    image: {
      src: string;
      alt: string;
    };
  };
  className?: string;
  variant?: "sfa" | "loyalty";
}

export const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  showcaseContent,
  className,
  variant = "sfa",
}) => {

  const { title, description, features, image } = showcaseContent;
  const stats = {
    sfa: {
      first: { value: "40%", label: "Field Force Efficiency" },
      second: { value: "2x", label: "Sales Growth" },
    },
    loyalty: {
      first: { value: "85%", label: "Customer Retention" },
      second: { value: "3x", label: "Reward Redemption" },
    },
  };

  return (
    <section
      className={`py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50/30 relative overflow-hidden ${className || ""}`}
    >
      <div className="container mx-auto px-4 lg:px-8 xl:px-16 max-w-[1440px] relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:gap-24 lg:grid-cols-2">
          {/* Image Side */}
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 lg:p-8">
              {/* Background Gradients */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute top-0 left-1/3 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl" />
                <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl" />
              </div>

              {/* Browser Frame */}
              <div className="relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                {/* Browser Top Bar */}
                <div className="bg-gray-800 px-4 py-3 border-b border-gray-700 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>

                {/* Main Image */}
                <div className="relative bg-gray-900">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto transform hover:scale-[1.02] transition-transform duration-300 mix-blend-normal"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-gray-900/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg max-w-[280px] hidden lg:block border border-gray-800">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-white mb-1">
                      {stats[variant].first.value}
                    </div>
                    <div className="text-sm text-gray-300">
                      {stats[variant].first.label}
                    </div>
                  </div>
                  <div className="w-px h-12 bg-gray-700"></div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-white mb-1">
                      {stats[variant].second.value}
                    </div>
                    <div className="text-sm text-gray-300">
                      {stats[variant].second.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2" data-aos="fade-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-sm font-medium text-primary">
                Transform Your Business
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#111b57] to-primary bg-clip-text text-transparent">
              {title}
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              {description}
            </p>

            <div className="space-y-8 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              href="/demo"
              variant="primary"
              size="lg"
              isCalendlyButton={true}
            >
              Schedule A Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
