import React from "react";
import SectionHeader from "./SectionHeader";

interface CompanyData {
  subtitle: string;
  title: string;
  description: string;
  content: string[];
  featuredImage: {
    asset: {
      _ref: string;
      url: string;
    }
  };
  imageOverlay: {
    value: string;
    label: string;
  };
}

interface AboutCompanyProps {
  data: CompanyData;
}

const AboutCompany: React.FC<AboutCompanyProps> = ({ data }) => {
  const { title, subtitle, description, content, featuredImage, imageOverlay } = data;

  return (
    <section className="relative py-20 lg:py-28">
      <div className="container mx-auto px-6 sm:px-8 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <div
              className="px-4 lg:px-0"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="relative aspect-[4/3] lg:aspect-[16/10]">
                <div className="absolute inset-0 translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8 bg-gradient-to-tl from-purple-600/20 to-blue-600/20 rounded-2xl lg:rounded-3xl transform"></div>
                <img
                  src={featuredImage.asset.url}
                  alt="Exprosoftech Business Excellence"
                  className="relative w-full h-full rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl object-cover"
                />
                <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-blue-600 text-white p-4 lg:p-6 rounded-lg lg:rounded-xl shadow-lg lg:shadow-xl">
                  <p className="text-xl lg:text-2xl font-bold">{imageOverlay.value}</p>
                  <p className="text-xs lg:text-sm opacity-90">
                    {imageOverlay.label}
                  </p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="px-4 lg:px-0">
              <div
                className="mb-8 text-center lg:text-left"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <SectionHeader
                  tagline={subtitle}
                  heading={title}
                  subheading={description}
                  alignment="left"
                />
              </div>

              <div
                className="space-y-6 text-center lg:text-left"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {content.map((paragraph: string, index: number) => (
                  <p
                    key={index}
                    className="text-gray-600 text-[14px] sm:text-[16px] leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
