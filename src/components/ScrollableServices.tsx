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
    image: "/images/services/loyalty.png",
  },
  {
    number: "02",
    title: "Channel Reach Expansion",
    subheading: "Strategic Market Presence Enhancement",
    description:
      "Expand your market presence through strategic channel partnerships and distribution networks. Our approach focuses on identifying and developing optimal channel mix, enabling businesses to reach new markets and customer segments effectively.",
    image: "/images/services/channel-reach.png",
  },
  {
    number: "03",
    title: "B2B Sales Excellence",
    subheading: "End-to-End B2B Sales Pipeline Management",
    description:
      "Accelerate your B2B sales with our comprehensive approach covering prospecting, content creation, multi-channel outreach (LinkedIn & Email), appointment scheduling, and complete funnel management. We help you build and maintain a robust sales pipeline that delivers consistent results.",
    image: "/images/services/b2b-sales.png",
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

    const container = containerRef.current;
    const scrollContent = scrollContentRef.current;
    const sections = Array.from(
      scrollContent.getElementsByClassName("feature-section")
    );
    const images = Array.from(
      container.getElementsByClassName("feature-image")
    );

    const containerRect = container.getBoundingClientRect();
    const scrollContentHeight = scrollContent.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollProgress =
      (windowHeight - containerRect.top) / scrollContentHeight;

    // Update progress bar
    if (progressBarRef.current) {
      progressBarRef.current.style.height = `${Math.min(100, Math.max(0, scrollProgress * 100))}%`;
    }

    // Find the current active section
    let activeIndex = 0;
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const sectionProgress =
        (windowHeight - rect.top) / (rect.height + windowHeight);

      if (sectionProgress >= 0.35 && sectionProgress <= 1) {
        activeIndex = index;
      }
    });

    // Update image visibility with smooth transitions
    images.forEach((image, index) => {
      const imageElement = image as HTMLElement;
      if (index === activeIndex) {
        imageElement.style.visibility = "visible";
        imageElement.style.opacity = "1";
        imageElement.style.transform = "translateY(0) scale(1)";
      } else {
        const direction = index > activeIndex ? 1 : -1;
        imageElement.style.visibility = "visible";
        imageElement.style.opacity = "0";
        imageElement.style.transform = `translateY(${20 * direction}px) scale(0.95)`;
        // Hide the element after transition completes
        setTimeout(() => {
          if (index !== activeIndex) {
            imageElement.style.visibility = "hidden";
          }
        }, 800);
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
              <div className="relative min-h-[400px]">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="feature-image absolute inset-0 w-full h-full"
                    data-index={index}
                    style={{
                      opacity: index === 0 ? 1 : 0,
                      transition: "all 0.8s ease-in-out",
                      transform: `translateY(${index === 0 ? "0" : "20px"}) scale(${index === 0 ? "1" : "0.95"})`,
                      visibility: index === 0 ? "visible" : "hidden",
                    }}
                  >
                    <img
                      src={service.image}
                      alt={`Feature ${index + 1}`}
                      className="w-full h-full object-contain"
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
                  <div className="lg:hidden w-full mb-8">
                    <img
                      src={service.image}
                      alt={`Feature ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
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
