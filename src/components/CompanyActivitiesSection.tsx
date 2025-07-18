import React from 'react';
import { PortableText } from '@portabletext/react';

interface ImageContentSectionProps {
  data: {
    title: string;
    description: any;
    image: {
      asset: {
        url: string;
      };
      alt?: string;
    };
  };
}

const CompanyActivitiesSection: React.FC<ImageContentSectionProps> = ({ data }) => {
  const { title, description, image } = data;

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50/30 w-full">
      <div className="w-full">
        <div className="w-full max-w-none">
          {/* Title */}
          <div 
            className="text-center mb-12 lg:mb-16 px-4 lg:px-8 xl:px-16"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {title}
            </h2>
          </div>

          {/* Image */}
          <div 
            className="mb-12 lg:mb-16 px-4 lg:px-8 xl:px-16"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="relative w-full max-w-7xl mx-auto">
              {/* Background decoration */}
              <div className="hidden lg:block absolute inset-0 translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl lg:rounded-3xl transform"></div>
              
              {/* Main image with 16:9 aspect ratio */}
              <div className="relative w-full aspect-video rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl overflow-hidden">
                <img
                  src={image.asset.url}
                  alt={image.alt || title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div 
            className="text-center px-4 lg:px-8 xl:px-16"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto prose prose-lg">
              <PortableText value={description} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyActivitiesSection; 