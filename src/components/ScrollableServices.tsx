import React, { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";

interface Service {
  number: string;
  title: string;
  subheading: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "Loyalty Management",
    subheading: "Product-Focused Customer Loyalty Solutions",
    description:
      "Transform your customer relationships with our comprehensive loyalty management platform. We help businesses design, implement, and optimize reward programs that drive engagement, increase retention, and maximize customer lifetime value through data-driven personalization.",
    image: "/images/leftImgOne.png",
  },
  {
    number: "02",
    title: "Channel Reach Expansion",
    subheading: "Strategic Market Presence Enhancement",
    description:
      "Expand your market presence through strategic channel partnerships and distribution networks. Our approach focuses on identifying and developing optimal channel mix, enabling businesses to reach new markets and customer segments effectively.",
    image: "/images/leftImgTwo.jpg",
  },
  {
    number: "03",
    title: "B2B Sales Excellence",
    subheading: "End-to-End B2B Sales Pipeline Management",
    description:
      "Accelerate your B2B sales with our comprehensive approach covering prospecting, content creation, multi-channel outreach (LinkedIn & Email), appointment scheduling, and complete funnel management. We help you build and maintain a robust sales pipeline that delivers consistent results.",
    image: "/images/leftImgThree.jpg",
  },
];

const sectionHeader = {
  tagline: "Comprehensive Business Solutions",
  heading: "Driving Growth Through Strategic Excellence",
  subheading:
    "We deliver targeted solutions across loyalty management, channel expansion, and B2B sales to help businesses achieve sustainable growth and market leadership. Our integrated approach ensures measurable results and long-term success.",
};

export const ScrollableServices: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (
      !containerRef.current ||
      !scrollContentRef.current ||
      !progressBarRef.current
    )
      return;

    // Calculate scroll progress with offset
    const containerRect = containerRef.current.getBoundingClientRect();
    const scrollRect = scrollContentRef.current.getBoundingClientRect();

    // Adjust the starting point to be when the first section enters viewport
    const startOffset = window.innerHeight * 0.2; // 20% of viewport height
    const scrollableDistance =
      scrollRect.height - window.innerHeight + startOffset;

    const progress = Math.max(
      0,
      Math.min(1, (-containerRect.top + startOffset) / scrollableDistance)
    );

    // Update progress bar height
    progressBarRef.current.style.height = `${progress * 100}%`;

    // Handle feature sections visibility
    const sections = document.querySelectorAll(".feature-section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const index = parseInt(section.getAttribute("data-index") || "0");
      const correspondingImage = document.querySelector(
        `.feature-image[data-index="${index}"]`
      ) as HTMLElement;

      // Calculate how much of the section is visible
      const sectionHeight = (section as HTMLElement).offsetHeight;
      const visibleHeight =
        Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      const visibilityRatio = Math.max(
        0,
        Math.min(1, visibleHeight / sectionHeight)
      );

      if (correspondingImage) {
        // Show image when its section is more than 50% visible
        correspondingImage.style.opacity = visibilityRatio > 0.5 ? "1" : "0";
        correspondingImage.style.zIndex = index.toString();
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <SectionHeader
          tagline={sectionHeader.tagline}
          heading={sectionHeader.heading}
          subheading={sectionHeader.subheading}
          theme="light"
        />

        <div
          className="mt-24 lg:flex gap-20"
          ref={containerRef}
          id="features-container"
        >
          {/* Sticky Image Container */}
          <div className="hidden lg:block lg:w-1/2">
            <div className="sticky top-32 p-6">
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="feature-image absolute inset-0 w-full h-full"
                    data-index={index}
                    style={{
                      opacity: index === 0 ? 1 : 0,
                      transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                    <img
                      src={service.image}
                      alt={`Feature ${index + 1}`}
                      className="h-full w-full object-cover transform scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scrollable Content Container */}
          <div
            className="lg:w-1/2 relative"
            ref={scrollContentRef}
            id="scroll-content"
          >
            <div
              className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-gray-100 to-gray-200 rounded-full"
              id="progress-track"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
              }}
            >
              <div
                ref={progressBarRef}
                className="absolute top-0 w-full bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 rounded-full shadow-lg"
                id="progress-bar"
                style={{
                  transition: "height 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                }}
              />
            </div>

            {services.map((service, index) => (
              <div
                key={index}
                className="feature-section mb-12 last:mb-0 p-8 pl-12 rounded-2xl min-h-[70vh] flex flex-col justify-start pt-[8vh] hover:bg-white/50 transition-colors duration-300"
                data-index={index}
              >
                <div className="space-y-10">
                  <span className="text-[120px] font-light bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent leading-none block mb-8 opacity-20 transform transition-all duration-500 hover:opacity-30 hover:scale-105">
                    {service.number}
                  </span>

                  {/* Mobile Image */}
                  <div className="lg:hidden rounded-2xl overflow-hidden mb-8 aspect-[4/3] shadow-xl">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                      <img
                        src={service.image}
                        alt={`Feature ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {service.title}
                    </h3>
                    <h4 className="text-xl text-gray-600 font-medium max-w-md">
                      {service.subheading}
                    </h4>
                    <p className="text-gray-600 max-w-md leading-relaxed mt-4 text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
