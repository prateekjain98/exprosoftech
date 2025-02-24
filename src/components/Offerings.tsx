import React from "react";
import SectionHeader from "./SectionHeader";

interface OfferingsItem {
  icon: string;
  title: string;
  description: string;
}

interface OfferingsData {
  title: string;
  subtitle: string;
  description: string;
  list: OfferingsItem[];
}

const offeringsData: OfferingsData = {
  subtitle: "Comprehensive Offerings",
  title: "Leverage Our Expertise",
  description:
    "Partner with Greymetre - From strategy to execution, we empower businesses with expert consulting, hands-on service support, and cutting-edge technology. Whether it's sales acceleration, operations efficiency, supply chain transformation, or digital innovation, our tailored solutions drive sustainable growth and competitive advantage.",
  list: [
    {
      icon: "/images/OfferingsOne.png",
      title: "Consulting",
      description: "Expert Guidance, Transformative Results",
    },
    {
      icon: "/images/OfferingsThree.png",
      title: "Services",
      description: "Tailored solutions and Turnkey implementation",
    },
    {
      icon: "/images/OfferingsTwo.png",
      title: "Products",
      description: "Innovative Tools to Drive Excellence",
    },
  ],
};

export const Offerings: React.FC = () => {
  const { title, subtitle, description, list } = offeringsData;

  return (
    <section className="section">
      <div className="max-w-[85rem] mx-auto px-3">
        <div className="row">
          <div className="mx-auto lg:col-11">
            <SectionHeader
              tagline={subtitle}
              heading={title}
              subheading={description}
              alignment="center"
            />
          </div>
          <div className="col-12 pt-20">
            <div className="row g-4 justify-center">
              {list.map((item, index) => (
                <div
                  key={index}
                  className="md:col-6 lg:col-4"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="min-h-full rounded-3xl bg-white p-4 transition-all shadow-xl">
                    {/* Image Container */}
                    <div className="mb-3">
                      <div className="aspect-square w-full rounded-2xl">
                        {item.icon && (
                          <img
                            src={item.icon}
                            alt={`icon related to ${item.title}`}
                            className="h-full w-full object-contain"
                          />
                        )}
                      </div>
                    </div>
                    {/* Content Container */}
                    <div className="text-left mb-4">
                      {item.title && (
                        <h3
                          className="h5 mb-2 md:text-3xl font-medium text-dark tracking-wide"
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        />
                      )}
                      {item.description && (
                        <p
                          className="text-text"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      )}
                    </div>
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

export default Offerings;
