import React from "react";
import { PortableText } from '@portabletext/react';
import SectionHeader from "./SectionHeader";
import Button from "./common/Button";

interface WhySalesforceData {
  title: string;
  content: any; // Block content from Sanity
  image: {
    asset: {
      url: string;
    };
  };
  imageOverlay?: {
    value: string;
    label: string;
    position: 'bottomRight' | 'bottomLeft' | 'topRight' | 'topLeft';
  };
  cta?: {
    label: string;
    link: string;
    isOpenBooking: boolean;
  };
}

interface WhySalesforceProps {
  data: WhySalesforceData;
}

const WhySalesforce: React.FC<WhySalesforceProps> = ({ data }) => {
  const { title, content, image, imageOverlay, cta } = data;

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content Side - Left */}
            <div className="order-2 lg:order-1 px-4 lg:px-0">
              <div
                className="mb-8 text-center lg:text-left"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <SectionHeader
                  heading={title}
                  alignment="left"
                />
              </div>

              <div
                className="space-y-6 text-center lg:text-left prose prose-lg max-w-none"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {content && <PortableText value={content} />}
              </div>

              {cta && (
                <div className="mt-10" data-aos="fade-up" data-aos-delay="300">
                  <ul className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <li>
                      <Button href={cta.link} size="lg" hasOverlay={cta.isOpenBooking}>
                        {cta.label}
                      </Button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Image Side - Right */}
            <div
              className="order-1 lg:order-2 px-4 lg:px-0"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="relative aspect-[4/3] lg:aspect-[16/10]">
                {/* Salesforce-themed background gradient */}
                <div className="absolute inset-0 -translate-x-4 -translate-y-4 lg:-translate-x-8 lg:-translate-y-8 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl lg:rounded-3xl transform"></div>
                <img
                  src={image.asset.url}
                  alt="Why Salesforce - Business Solutions"
                  className="relative w-full h-full rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl object-cover"
                />
                {imageOverlay?.label && (
                  <div 
                    className={`absolute ${
                      imageOverlay.position === 'bottomRight' ? '-bottom-4 -right-4 lg:-bottom-6 lg:-right-6' :
                      imageOverlay.position === 'bottomLeft' ? '-bottom-4 -left-4 lg:-bottom-6 lg:-left-6' :
                      imageOverlay.position === 'topRight' ? '-top-4 -right-4 lg:-top-6 lg:-right-6' :
                      '-top-4 -left-4 lg:-top-6 lg:-left-6'
                    } bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 lg:p-6 rounded-lg lg:rounded-xl shadow-lg lg:shadow-xl`}
                  >
                    <p className="text-xl lg:text-2xl font-bold">
                      {imageOverlay?.value}
                    </p>
                    <p className="text-xs lg:text-sm opacity-90">
                      {imageOverlay?.label}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySalesforce;