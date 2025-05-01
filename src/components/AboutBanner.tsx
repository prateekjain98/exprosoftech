import React from "react";
import SectionHeader from "./SectionHeader";
import Button from "./common/Button";

interface BannerData {
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
}

interface AboutBannerProps {
  data: BannerData;
}

const AboutBanner: React.FC<AboutBannerProps> = ({ data }) => {
  const { title, subtitle, description, content, featuredImage } = data;

  return (
    <section className="relative py-20 lg:pb-28 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content Side */}
            <div className="order-2 lg:order-1 px-4 lg:px-0">
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
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10" data-aos="fade-up" data-aos-delay="300">
                <ul className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <li>
                    <Button href="#leadership" size="lg" arrowDown>
                      Meet Our Team
                    </Button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image Side */}
            <div
              className="order-1 lg:order-2 px-4 lg:px-0"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="relative aspect-[4/3] lg:aspect-[16/10]">
                <div className="absolute inset-0 -translate-x-4 -translate-y-4 lg:-translate-x-8 lg:-translate-y-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl lg:rounded-3xl transform"></div>
                <img
                  src={featuredImage.asset.url}
                  alt="Greymetre Business Transformation Team"
                  className="relative w-full h-full rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl object-cover"
                />
                <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-blue-600 text-white p-4 lg:p-6 rounded-lg lg:rounded-xl shadow-lg lg:shadow-xl">
                  <p className="text-xl lg:text-2xl font-bold">35+</p>
                  <p className="text-xs lg:text-sm opacity-90">
                    Years of Combined Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
