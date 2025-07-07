import React from "react";
import Button from "../common/Button";

interface Feature {
  title: string;
  description: string;
}

interface FeatureShowcaseProps {
  showcaseContent: {
    tagline: string;
    title: string;
    description: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    image: {
      src: string;
      alt: string;
    };
    button: {
      text: string;
      link: string;
    };
  };
}

export const FeatureShowcase = ({
  showcaseContent
}: FeatureShowcaseProps) => {
  return (
    <section
      className={`py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50/30 relative overflow-hidden`}
    >
      <div className="container mx-auto px-4 lg:px-8 xl:px-16 max-w-[1440px] relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:gap-24 lg:grid-cols-2">
          {/* Image Side */}
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 lg:p-8">
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
                    src={showcaseContent.image.src}
                    alt={showcaseContent.image.alt}
                    className="w-full h-auto transform hover:scale-[1.02] transition-transform duration-300 mix-blend-normal"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2" data-aos="fade-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-sm font-medium text-primary">
                {showcaseContent.tagline}
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#111b57] to-primary bg-clip-text text-transparent">
              {showcaseContent.title}
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              {showcaseContent.description}
            </p>

            <div className="space-y-8 mb-12">
              {showcaseContent?.features && showcaseContent?.features.map((feature, index) => (
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
              href={showcaseContent.button.link}
              variant="primary"
              size="lg"
              isCalendlyButton={true}
            >
              {showcaseContent.button.text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
