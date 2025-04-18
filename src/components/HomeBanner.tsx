import React from "react";
import { AnimatedMetrics } from "./AnimatedMetrics";
import Button from "./common/Button";

interface BannerContent {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  buttons: {
    label: string;
    link: string;
    isCalendly: boolean;
  }[];
}

const bannerContent: BannerContent = {
  title: "Empowering Strategic Business Transformation",
  description:
    "Achieve sustainable growth through Demand Driven Business Excellence, Supply Chain Effectiveness, Sales Transformation and Channel Loyalty—leveraging real-time data, intelligent workflows, and digital tools for sustainable growth.",
  image: {
    src: "/images/hero.jpeg",
    alt: "Hero image showing business transformation platform",
  },
  buttons: [
    {
      label: "Book a call",
      link: "#",
      isCalendly: true,
    },
    // {
    //   label: "Download Deck",
    //   link: "/about/",
    // },
  ],
};

export const HomeBanner: React.FC = () => {
  const { title, description, buttons, image } = bannerContent;

  return (
    <section className="relative z-[1] pt-6 pb-10 lg:pt-10">
      <div className="max-w-[85rem] mx-auto px-3">
        <div className="row items-center justify-between">
          {/* Left Column - Content */}
          <div className="mb-8 lg:mb-0 text-center lg:text-left lg:col-6">
            {title && (
              <h1
                dangerouslySetInnerHTML={{ __html: title }}
                data-aos="fade-up-sm"
                className="mb-4 text-h3 lg:text-h1 bg-gradient-to-r from-[#111b57] to-primary bg-clip-text text-transparent font-medium"
              />
            )}
            {description && (
              <p
                dangerouslySetInnerHTML={{ __html: description }}
                data-aos="fade-up-sm"
                className="mb-8 text-lg/[inherit]"
              />
            )}
            {buttons && (
              <ul className="flex flex-wrap lg:justify-start justify-center gap-4">
                {buttons.map(({ label, link, isCalendly }, index) => (
                  <li
                    key={index}
                    data-aos="fade-up-sm"
                    data-aos-delay={100 + index * 50}
                  >
                    <Button
                      href={link}
                      variant={index === 0 ? "primary" : "outline-primary"}
                      target={link.startsWith("http") ? "_blank" : "_self"}
                      isCalendlyButton={isCalendly}
                    >
                      {label}
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Column - Image */}
          <div className="lg:col-6">
            <div
              className="relative"
              data-aos="fade-up-sm"
              data-aos-delay="400"
            >
              <AnimatedMetrics />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
