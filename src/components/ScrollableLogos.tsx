import React, { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";

// Define interfaces for the props
interface Logo {
  src: string;
  alt: string;
}

interface LogoItem {
  id: string;
  number: string;
  title: string;
  description: string;
  logos: Logo[];
}

interface ScrollableLogosProps {
  data: {
    heading: {
      title: string;
      subtitle: string;
      description: string;
    };
    items: LogoItem[];
  };
}

export const ScrollableLogos: React.FC<ScrollableLogosProps> = ({ data }) => {
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
      scrollContent.getElementsByClassName("logo-section")
    );
    const logos = Array.from(
      container.getElementsByClassName("logo-image")
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

    // Update logo visibility with smooth transitions
    logos.forEach((logo, index) => {
      const logoElement = logo as HTMLElement;
      if (index === activeIndex) {
        logoElement.style.visibility = "visible";
        logoElement.style.opacity = "1";
        logoElement.style.transform = "translateY(0) scale(1)";
      } else {
        const direction = index > activeIndex ? 1 : -1;
        logoElement.style.visibility = "visible";
        logoElement.style.opacity = "0";
        logoElement.style.transform = `translateY(${20 * direction}px) scale(0.95)`;
        // Hide the element after transition completes
        setTimeout(() => {
          if (index !== activeIndex) {
            logoElement.style.visibility = "hidden";
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
      <div className="container max-w-[1440px] mx-auto px-4">
        <SectionHeader
          tagline={data.heading.subtitle}
          heading={data.heading.title}
          subheading={data.heading.description}
          theme="light"
        />

        <div
          className="mt-24 lg:flex gap-24"
          ref={containerRef}
          id="logos-container"
        >
          {/* Sticky Logo Container */}
          <div className="hidden lg:block lg:w-[45%]">
            <div className="sticky top-32">
              <div className="relative min-h-[600px] flex items-center justify-center">
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-[20%] -left-[20%] w-[120%] h-[120%] bg-gradient-to-br from-blue-200/30 via-blue-300/15 to-transparent rounded-full blur-3xl animate-morph" />
                  <div className="absolute -bottom-[20%] -right-[20%] w-[120%] h-[120%] bg-gradient-to-bl from-indigo-200/30 via-purple-300/15 to-transparent rounded-full blur-3xl animate-morph-delayed" />

                  {/* Floating Particles */}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-particle"
                      style={{
                        left: `${15 + Math.random() * 70}%`,
                        top: `${15 + Math.random() * 70}%`,
                        animationDelay: `${Math.random() * 4}s`,
                        animationDuration: `${3 + Math.random() * 3}s`,
                      }}
                    />
                  ))}

                  {/* Glowing Ring */}
                  <div
                    className="absolute inset-[10%] rounded-full border border-blue-200/15 animate-spin-slow"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 80%)",
                    }}
                  />
                </div>

                {/* Glass Container */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl border border-white/30 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]" />

                {/* Logo Images */}
                {data.items.map((item, index) => (
                  <div
                    key={index}
                    className="logo-image absolute inset-0 w-full h-full flex items-center justify-center"
                    data-index={index}
                    style={{
                      opacity: index === 0 ? 1 : 0,
                      transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: `translateY(${index === 0 ? "0" : "20px"}) scale(${index === 0 ? "1" : "0.95"})`,
                      visibility: index === 0 ? "visible" : "hidden",
                    }}
                  >
                    <div className="relative z-10 p-8 w-full h-full flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-6 w-full max-w-lg">
                        {item.logos?.slice(0, 4).map((logo, logoIndex) => (
                          <div 
                            key={logoIndex}
                            className="flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/40 hover:scale-105 transition-transform duration-300"
                          >
                            <img
                              src={logo.src}
                              alt={logo.alt}
                              className="max-w-full max-h-[80px] object-contain transform transition-all duration-1000"
                              style={{
                                filter: "drop-shadow(0 5px 15px rgba(0, 0, 0, 0.1))",
                              }}
                            />
                          </div>
                        ))}
                        {item.logos && item.logos.length > 4 && (
                          <div className="flex items-center justify-center p-4 bg-blue-50/80 backdrop-blur-sm rounded-xl shadow-lg border border-blue-200/40">
                            <span className="text-blue-600 font-medium text-sm">
                              +{item.logos.length - 4} more
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scrollable Content Container */}
          <div
            className="lg:w-[55%] relative"
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

            {data.items.map((item, index) => (
              <div
                key={index}
                className="logo-section mb-16 last:mb-0 p-8 pl-12 min-h-[70vh] flex flex-col justify-start pt-[8vh] relative"
                data-index={index}
              >
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <span className="text-[80px] font-light text-gray-200 leading-none select-none">
                      {item.number}
                    </span>
                  </div>

                  {/* Mobile Logos */}
                  <div className="lg:hidden w-full mb-8">
                    <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                      {item.logos?.slice(0, 4).map((logo, logoIndex) => (
                        <div 
                          key={logoIndex}
                          className="flex items-center justify-center p-3 bg-white rounded-lg shadow-md border border-gray-100"
                        >
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            className="max-w-full max-h-[60px] object-contain"
                          />
                        </div>
                      ))}
                      {item.logos && item.logos.length > 4 && (
                        <div className="flex items-center justify-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <span className="text-blue-600 font-medium text-xs">
                            +{item.logos.length - 4} more
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 max-w-lg leading-relaxed text-lg">
                      {item.description}
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

// Enhanced animations styles
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
    animation: morph 20s ease-in-out infinite;
  }

  .animate-morph-delayed {
    animation: morph 20s ease-in-out infinite reverse;
    animation-delay: 7s;
  }

  @keyframes particle {
    0%, 100% {
      transform: translate(0, 0) scale(1);
      opacity: 0;
    }
    25% {
      transform: translate(15px, -15px) scale(1.3);
      opacity: 1;
    }
    50% {
      transform: translate(30px, 0) scale(1);
      opacity: 0.6;
    }
    75% {
      transform: translate(15px, 15px) scale(1.3);
      opacity: 1;
    }
  }

  .animate-particle {
    animation: particle 8s ease-in-out infinite;
  }

  .animate-spin-slow {
    animation: spin 25s linear infinite;
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