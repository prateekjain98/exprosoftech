import DynamicIcon from "@/helpers/DynamicIcon";
import { markdownify } from "@/lib/utils/textConverter";
import React from "react";
import Button from "./common/Button";
import { sanityClient } from "sanity:client";

interface ButtonType {
  label: string;
  link: string;
  isCalendly?: boolean;
}

interface ImageType {
  src: string;
  alt: string;
}

interface DemandDrivenBannerProps {
  content: {
    title: string;
    subtitle: string;
    description: string;
    image: Array<{
      src: string;
      alt: string;
    }>;
    buttons: Array<{
      label: string;
      link: string;
      isCalendly: boolean;
    }>;
  }
}

// Define fallback banner data
const fallbackBannerData = {
  title: "Demand Driven Business Transformation",
  description:
    "Transforming organizations into high-performing entities by leveraging Demand-Driven Material Requirements Planning (DDMRP) and cutting-edge tools like Intuiflow",
  image: [
    {
      src: "/images/consulting/demand-driven-business-transformation/hero.png",
      alt: "Demand Driven Business Transformation",
    },
  ],
  buttons: [
    {
      label: "Schedule a Consultation",
      link: "#",
      isCalendly: true,
    },
  ],
};

const DemandDrivenBanner = ({ content }: DemandDrivenBannerProps) => {
  // Use content or fallback to default data if content is missing
  const bannerContent = content || fallbackBannerData;
  const { title, description, image, buttons } = bannerContent;

  return (
    <section className="relative z-[1] pt-16 pb-24 lg:pt-12 lg:pb-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            {title && (
              <h1
                data-aos="fade-up-sm"
                className="mb-6 text-h3 lg:text-h1 bg-gradient-to-r from-[#111b57] to-primary bg-clip-text text-transparent font-medium"
                >
                {title}
              </h1>
            )}
            {description && (
              <p
                data-aos="fade-up-sm"
                className="mb-10 text-lg/[inherit] font-medium"
              >
                {description}
              </p>
            )}
            {buttons && buttons.length > 0 && (
              <ul className="flex flex-wrap lg:justify-start justify-center gap-4">
                {buttons.map(({ label, link, isCalendly }: { label: string, link: string, isCalendly: boolean }, index: number) => (
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

          {image && image.length > 0 && (
            <div className="relative px-4 md:px-0 order-1 lg:order-2">
              <div
                className="relative max-w-[580px] mx-auto"
                data-aos="fade-up-sm"
                data-aos-delay="400"
              >
                <div className="absolute -z-10 top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute -z-10 bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-300/10 to-transparent rounded-full blur-3xl" />

                <div className="relative">
                  <div className="absolute -inset-4 border-2 border-primary/10 rounded-2xl transform rotate-2" />
                  <div className="absolute -inset-4 border-2 border-secondary-300/10 rounded-2xl transform -rotate-2" />

                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src={image[0].src}
                      alt={image[0].alt || "Banner image"}
                      width={580}
                      height={480}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary-300/5" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DemandDrivenBanner;
