import React from "react";
import DynamicIcon from "../../../layouts/helpers/DynamicIcon";
import { markdownify } from "../../../lib/utils/textConverter";
import { motion } from "framer-motion";
import Button from "../../../components/common/Button";

interface FloatingElement {
  icon: string;
  title: string;
  value: string;
  color: string;
  position: "topLeft" | "bottomRight";
}

interface Button {
  label: string;
  link: string;
  isOpenBooking: boolean;
}

interface BannerContent {
  title: string;
  description: string;
  buttons: Button[];
  image: {
    src: string;
    alt: string;
  };
  floatingElements: FloatingElement[];
}

interface Props {
  className?: string;
  content: BannerContent;
}

export const  ServicesBanner: React.FC<Props> = ({ className, content }) => {
  // Default button if none provided
  const primaryButton = content.buttons && content.buttons.length > 0 
    ? content.buttons[0] 
    : { label: "Get Started", link: "#", isOpenBooking: true };

  return (
    <section className="relative z-[1] pt-16 pb-24 lg:pt-[7rem] lg:pb-16">
      <div className="container mx-auto px-4 md:px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1
              data-aos="fade-up-sm"
              className="mb-6 text-h3 lg:text-h1 bg-gradient-to-r from-[#111b57] to-primary bg-clip-text text-transparent font-medium"
            >
              {content.title}
            </h1>
            <p
              data-aos="fade-up-sm"
              className="mb-10 text-lg/[inherit] font-medium"
            >
              {content.description}
            </p>
            <ul className="flex flex-wrap lg:justify-start justify-center gap-4">
              {content.buttons && content.buttons.map((button, index) => (
                <li key={index} data-aos="fade-up-sm" data-aos-delay={100 + (index * 50)}>
                  <Button href={button.link} variant="primary" hasOverlay={button.isOpenBooking}>
                    {button.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative hidden lg:block px-4 md:px-0 order-1 lg:order-2">
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
                  {content.image && (
                    <img
                      src={content.image.src}
                      alt={content.image.alt || "Service banner image"}
                      width={580}
                      height={480}
                      className="w-full h-[480px] object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary-300/20" />

                  {/* Floating Elements */}
                  {content.floatingElements && content.floatingElements.map((element, index) => (
                    <div
                      key={index}
                      className={`absolute ${
                        element.position === "topLeft"
                          ? "top-8 left-8"
                          : "bottom-8 right-8"
                      } bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 bg-${element.color}-500 rounded-full flex items-center justify-center`}
                        >
                          <DynamicIcon
                            icon={element.icon}
                            className="w-6 h-6 text-white"
                          />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-600">
                            {element.title}
                          </div>
                          <div
                            className={`text-xl font-bold text-${element.color}-600`}
                          >
                            {element.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
