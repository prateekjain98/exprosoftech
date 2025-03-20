import React from "react";
import SectionHeader from "./SectionHeader";

interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

interface StatItem {
  label: string;
  value: string;
}

interface OurValuesData {
  title: string;
  subtitle: string;
  description: string;
  list: ValueItem[];
  stats: StatItem[];
}

// Data embedded directly in the component
const ourValuesData: OurValuesData = {
  subtitle: "Core Values",
  title: "Our Values",
  description:
    "Your Trusted Partner in Data Protection with Cutting-Edge Solutions for <br> Comprehensive Data Security.",
  list: [
    {
      icon: "/images/icons/svg/detection.svg",
      title: "Innovation",
      description:
        "Continuously improving and innovating our solutions to stay ahead of cyber threats.",
    },
    {
      icon: "/images/icons/svg/encryption.svg",
      title: "Integrity",
      description:
        "Upholding the highest standards of honesty and transparency in all our dealings.",
    },
    {
      icon: "/images/icons/svg/time.svg",
      title: "Customer-Centric",
      description:
        "Maintaining the highest levels of honesty and transparency in all our interactions.",
    },
  ],
  stats: [
    {
      label: "Helped over 1000 businesses",
      value: "1000+",
    },
    {
      label: "Customer Satisfaction",
      value: "99.9%",
    },
    {
      label: "Support Availability",
      value: "24/7",
    },
  ],
};

const OurValues: React.FC = () => {
  const { title, subtitle, description, list, stats } = ourValuesData;

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="mx-auto text-center lg:col-10" data-aos="fade-up-sm">
            <SectionHeader
              tagline={subtitle}
              heading={title}
              subheading={description}
            />
          </div>
          <div className="col-12 pt-20">
            <div className="row g-4 justify-center">
              {list?.map((item, index) => (
                <div
                  key={index}
                  className="md:col-6 lg:col-4"
                  data-aos="fade-up-sm"
                  data-aos-delay={200 + index * 50}
                >
                  <div className="min-h-full rounded-xl bg-theme-light px-6 py-12 text-center md:rounded-3xl">
                    {item.icon && (
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-tertiary">
                        <img
                          className="h-6 w-6 object-cover"
                          src={item.icon}
                          alt={`icon related to ${item.title}`}
                        />
                      </div>
                    )}
                    {item.title && (
                      <h3
                        className="h5 mb-2"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                    )}
                    {item.description && (
                      <p
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="row g-4 justify-center pt-16">
              {stats?.map((item, index) => (
                <div
                  key={index}
                  className="md:col-4 lg:col-4"
                  data-aos="fade-up-sm"
                  data-aos-delay={(stats.length - index) * 100}
                >
                  <div className="text-center">
                    {item.label && (
                      <p
                        className="mb-3 lg:text-lg/[inherit]"
                        dangerouslySetInnerHTML={{ __html: item.label }}
                      />
                    )}
                    {item.value && (
                      <h3
                        className="h2 lg:h1 mb-2"
                        dangerouslySetInnerHTML={{ __html: item.value }}
                      />
                    )}
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

export default OurValues;
