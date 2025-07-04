import React from "react";
import { AnimatedMetrics } from "./AnimatedMetrics";
import Button from "./common/Button";
import { Sparkles } from "./ui-layout/Sparkles";

interface HomeBannerProps {
  data: {
    title: string;
    blueTitle?: string;
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
  };
}


// const bannerContent: BannerContent = {
//   title: "Empowering Strategic Business Transformation",
//   description:
//     "Achieve sustainable growth through Demand Driven Business Excellence, Supply Chain Effectiveness, Sales Transformation and Channel Loyalty—leveraging real-time data, intelligent workflows, and digital tools for sustainable growth.",
//   image: {
//     src: "/images/hero.jpeg",
//     alt: "Hero image showing business transformation platform",
//   },
//   buttons: [
//     {
//       label: "Book a call",
//       link: "#",
//       isCalendly: true,
//     },
//     // {
//     //   label: "Download Deck",
//     //   link: "/about/",
//     // },
//   ],
// };


export const HomeBanner:React.FC<HomeBannerProps> = ({ data }: HomeBannerProps ) => {


  return (
    <>
      <section className="relative z-[1] pb-16 lg:pt-16 rounded-b-[2rem] lg:rounded-b-[6rem] bg-white/5 backdrop-blur-sm border border-white/10">

        
        <div className="max-w-[100rem] h-fit mx-auto px-3 pt-20 lg:pt-0">
          {/* Mobile Layout - Image First */}
          <div className="lg:hidden">
            {/* Image/Visualization for Mobile */}
            <div className="flex justify-center mb-12">
              <div
                className="relative w-[90%]"
                data-aos="fade-up-sm"
                data-aos-delay="100"
              >
                {data.image && data.image.length > 0 && data.image[0].src ? (
                  <div className="w-full relative z-10">
                    <div 
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: 'radial-gradient(ellipse 70% 50% at center, rgba(59, 130, 246, 0.8 ) 0%, rgba(99, 102, 241, 0.3) 30%, rgba(147, 51, 234, 0.2) 60%, transparent 80%)',
                        filter: 'blur(12px)',
                        WebkitFilter: 'blur(12px)'
                      }}
                    ></div>

                    {/* Animated Particles - Behind Image Only */}
                    <div 
                      className="absolute inset-0 overflow-hidden z-20 w-full"
                      style={{
                        filter: 'blur(0.9px)',
                        WebkitFilter: 'blur(0.9px)',
                      }}
                    >
                      {[...Array(24)].map((_, i) => {
                        const size = Math.random() > 0.5 ? 'w-1.5 h-1.5' : 'w-1 h-1';
                        return (
                          <div
                            key={i}
                            className={`absolute ${size} bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-particle`}
                            style={{
                              left: `${5 + Math.random() * 90}%`,
                              top: `${5 + Math.random() * 90}%`,
                              animationDelay: `${Math.random() * 6}s`,
                              animationDuration: `${3 + Math.random() * 5}s`,
                            }}
                          />
                        );
                      })}
                    </div>
                    
                    <img 
                      src={data.image[0].src}
                      alt={data.image[0].alt || "Hero image"}
                      className="w-full h-auto object-contain relative z-40"
                    />
                  </div>
                ) : (
                  <AnimatedMetrics />
                )}
              </div>
            </div>

            {/* Content for Mobile */}
            <div className="text-center">
              {data.title && (
                <div data-aos="fade-up-sm" data-aos-delay="200" className="mb-10 max-w-4xl mx-auto h-fit">
                  <h1 className="text-black mb-2 text-h3 lg:text-h1 lg:font-medium">
                    {data.title}
                  </h1>
                  {data.blueTitle && (
                    <span className="bg-gradient-to-r to-[#111b57] from-primary bg-clip-text text-transparent text-h3 lg:text-h1 font-semibold lg:font-medium">{data.blueTitle}</span>
                  )}
                </div>
              )}
              {data.description && (
                <p
                  dangerouslySetInnerHTML={{ __html: data.description }}
                  data-aos="fade-up-sm"
                  data-aos-delay="300"
                  className="mb-8 text-lg/6 max-w-2xl mx-auto text-gray-600"
                />
              )}
              {data.buttons && (
                <div className="flex flex-wrap justify-center gap-4">
                  {data.buttons.map(({ label, link, isCalendly }: { label: string, link: string, isCalendly: boolean }, index: number) => (
                    <div
                      key={index}
                      data-aos="fade-up-sm"
                      data-aos-delay={400 + index * 50}
                    >
                      <Button
                        href={link}
                        variant={index === 0 ? "primary" : "outline-primary"}
                        target={link && link.startsWith("http") ? "_blank" : "_self"}
                        isCalendlyButton={isCalendly}
                      >
                        {label}
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Layout - Content First (Original) */}
          <div className="hidden lg:block">
            {/* Content for Desktop */}
            <div className="text-center mb-16 lg:mb-20">
              {data.title && (
                <div data-aos="fade-up-sm" className="mb-10 max-w-4xl mx-auto h-fit">
                  <h1 className="text-black mb-2 text-h3 lg:text-h1 lg:font-medium">
                    {data.title}
                  </h1>
                  {data.blueTitle && (
                    <span className="bg-gradient-to-r to-[#111b57] from-primary bg-clip-text text-transparent text-h3 lg:text-h1 font-semibold lg:font-medium">{data.blueTitle}</span>
                  )}
                </div>
              )}
              {data.description && (
                <p
                  dangerouslySetInnerHTML={{ __html: data.description }}
                  data-aos="fade-up-sm"
                  data-aos-delay="100"
                  className="mb-8 text-lg/6 max-w-2xl mx-auto text-gray-600"
                />
              )}
              {data.buttons && (
                <div className="flex flex-wrap justify-center gap-4">
                  {data.buttons.map(({ label, link, isCalendly }: { label: string, link: string, isCalendly: boolean }, index: number) => (
                    <div
                      key={index}
                      data-aos="fade-up-sm"
                      data-aos-delay={200 + index * 50}
                    >
                      <Button
                        href={link}
                        variant={index === 0 ? "primary" : "outline-primary"}
                        target={link && link.startsWith("http") ? "_blank" : "_self"}
                        isCalendlyButton={isCalendly}
                      >
                        {label}
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Image/Visualization for Desktop */}
            <div className="flex justify-center">
              <div
                className="relative w-full lg:w-[70%]"
                data-aos="fade-up-sm"
                data-aos-delay="300"
              >
                {data.image && data.image.length > 0 && data.image[0].src ? (
                  <div className="w-full relative z-10">
                    <div 
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: 'radial-gradient(ellipse 70% 50% at center, rgba(59, 130, 246, 0.8 ) 0%, rgba(99, 102, 241, 0.3) 30%, rgba(147, 51, 234, 0.2) 60%, transparent 80%)',
                        filter: 'blur(12px)',
                        WebkitFilter: 'blur(12px)'
                      }}
                    ></div>

                    {/* Animated Particles - Behind Image Only */}
                    <div 
                      className="absolute inset-0 overflow-hidden z-20 w-full"
                      style={{
                        filter: 'blur(0.9px)',
                        WebkitFilter: 'blur(0.9px)',
                      }}
                    >
                      {[...Array(24)].map((_, i) => {
                        const size = Math.random() > 0.5 ? 'w-1.5 h-1.5' : 'w-1 h-1';
                        return (
                          <div
                            key={i}
                            className={`absolute ${size} bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-particle`}
                            style={{
                              left: `${5 + Math.random() * 90}%`,
                              top: `${5 + Math.random() * 90}%`,
                              animationDelay: `${Math.random() * 6}s`,
                              animationDuration: `${3 + Math.random() * 5}s`,
                            }}
                          />
                        );
                      })}
                    </div>
                    
                    <img 
                      src={data.image[0].src}
                      alt={data.image[0].alt || "Hero image"}
                      className="w-full h-auto object-contain relative z-40"
                    />
                  </div>
                ) : (
                  <AnimatedMetrics />
                )}
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  );
};
