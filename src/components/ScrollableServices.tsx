import React, { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";

// Define interfaces for the props
interface Service {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
}

interface Heading {
  _id: string;
  subtitle?: string;
  title: string;
  description: string;
}



interface ScrollableServicesProps {
  data: {
    heading: {
      title: string;
      subtitle: string;
      description: string;
    };
    services: Array<{
      number: string;
      title: string;
      subheading: string;
      description: string;
      image: string;  // This will be the resolved URL
    }>;
  };
}

// const services: Service[] = [
//   {
//     number: "01",
//     title: "Loyalty Management",
//     subheading: "Product-Focused Customer Loyalty Solutions",
//     description:
//       "Transform your customer relationships with our comprehensive loyalty management platform. We help businesses design, implement, and optimize reward programs that drive engagement, increase retention, and maximize customer lifetime value through data-driven personalization.",
//     image: "/images/services/loyalty.png",
//   },
//   {
//     number: "02",
//     title: "Channel Reach Expansion",
//     subheading: "Strategic Market Presence Enhancement",
//     description:
//       "Expand your market presence through strategic channel partnerships and distribution networks. Our approach focuses on identifying and developing optimal channel mix, enabling businesses to reach new markets and customer segments effectively.",
//     image: "/images/services/channel-reach.png",
//   },
//   {
//     number: "03",
//     title: "B2B Sales Excellence",
//     subheading: "End-to-End B2B Sales Pipeline Management",
//     description:
//       "Accelerate your B2B sales with our comprehensive approach covering prospecting, content creation, multi-channel outreach (LinkedIn & Email), appointment scheduling, and complete funnel management. We help you build and maintain a robust sales pipeline that delivers consistent results.",
//     image: "/images/services/b2b-sales.png",
//   },
// ];

export const ScrollableServices: React.FC<ScrollableServicesProps> = ({ data }) => {
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
    <section className="py-24 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="bg-gray-900 rounded-2xl sm:rounded-[3rem] p-8 lg:p-12">
          <SectionHeader
            tagline={data.heading.subtitle}
            heading={data.heading.title}
            subheading={data.heading.description}
            theme="dark"
          />

          <div
            className="mt-24 lg:flex gap-24"
            ref={containerRef}
            id="features-container"
          >
            {/* Sticky Image Container */}
            <div className="hidden lg:block lg:w-[55%]">
              <div className="sticky top-8">
                <div className="relative min-h-[700px] flex items-center">
                  {/* Images */}
                  {data.services.map((service, index) => (
                    <div
                      key={index}
                      className="feature-image absolute inset-0 w-full h-full"
                      data-index={index}
                      style={{
                        opacity: index === 0 ? 1 : 0,
                        transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
                        transform: `translateY(${index === 0 ? "0" : "20px"}) scale(${index === 0 ? "1" : "0.95"})`,
                        visibility: index === 0 ? "visible" : "hidden",
                      }}
                    >
                      <div className="relative w-full h-full">
                        <div className="relative z-10 w-full h-full">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-contain transform transition-all duration-1000"
                            style={{
                              filter:
                                "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))",
                            }}
                          />
                        </div>
                      </div>
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
                className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-gray-700 to-gray-600 rounded-full"
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

              {data.services.map((service, index) => (
                <div
                  key={index}
                  className="feature-section mb-16 last:mb-0 p-8 pl-12 min-h-[70vh] flex flex-col justify-start pt-[8vh] relative"
                  data-index={index}
                >
                  <div className="space-y-12">
                    <div className="flex items-center gap-6">
                      <span className="text-[100px] font-light text-white leading-none select-none">
                        {index + 1}
                      </span>
                    </div>

                    {/* Mobile Image */}
                    <div className="lg:hidden w-full mb-8">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-auto object-contain"
                      />
                    </div>

                    <div className="space-y-8">
                      <h3 className="text-4xl font-bold text-white">
                        {service.title}
                      </h3>

                      <p className="text-gray-300 max-w-md leading-relaxed text-lg">
                        {service.description}
                      </p>
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

// Replace the existing styles with these enhanced animations
const styles = `
  @keyframes morph {
    0%, 100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      transform: rotate(0deg);
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
      transform: rotate(180deg);
    }
  }

  .animate-morph {
    animation: morph 15s ease-in-out infinite;
  }

  .animate-morph-delayed {
    animation: morph 15s ease-in-out infinite reverse;
    animation-delay: 5s;
  }

  @keyframes particle {
    0%, 100% {
      transform: translate(0, 0) scale(1);
      opacity: 0;
    }
    25% {
      transform: translate(10px, -10px) scale(1.2);
      opacity: 1;
    }
    50% {
      transform: translate(20px, 0) scale(1);
      opacity: 0.5;
    }
    75% {
      transform: translate(10px, 10px) scale(1.2);
      opacity: 1;
    }
  }

  .animate-particle {
    animation: particle 6s ease-in-out infinite;
  }

  .animate-spin-slow {
    animation: spin 20s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

// Add style tag to the document
if (typeof document !== "undefined") {
  const styleTag = document.createElement("style");
  styleTag.textContent = styles;
  document.head.appendChild(styleTag);
}
