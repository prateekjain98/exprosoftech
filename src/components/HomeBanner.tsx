import React from "react";
import { AnimatedMetrics } from "./AnimatedMetrics";
import Button from "./common/Button";

interface HomeBannerProps {
  data: {
    title: string;
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
      <svg className="clipppy absolute -top-[999px] -left-[999px] w-0 h-0">
        <defs>
          <clipPath id="clip-inverted" clipPathUnits={'objectBoundingBox'}>
            <path
              d='M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z'
              fill='#D9D9D9'
            />
          </clipPath>
        </defs>
      </svg>

      {/* Checkered Background Pattern */}
      <div 
        className="absolute inset-0 -z-10 w-full h-full pointer-events-none"
        style={{
          backgroundImage: 'url(/images/banner-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <section className="relative z-[1] pb-10 lg:pt-16">
        <div className="max-w-[85rem] h-fit mx-auto px-3">
        <div className="row items-center justify-between flex-col-reverse lg:flex-row">
          {/* Left Column - Content */}
          <div className="mb-8 lg:mb-0 text-center lg:text-left lg:col-6">
            {data.title && (
              <h1
                dangerouslySetInnerHTML={{ __html: data.title }}
                data-aos="fade-up-sm"
                className="mb-4 text-h3 lg:text-h1 bg-gradient-to-r from-[#111b57] to-primary bg-clip-text text-transparent font-medium"
              />
            )}
            {data.description && (
              <p
                dangerouslySetInnerHTML={{ __html: data.description }}
                data-aos="fade-up-sm"
                className="mb-8 text-lg/[inherit]"
              />
            )}
            {data.buttons && (
              <ul className="flex flex-wrap lg:justify-start justify-center gap-4">
                {data.buttons.map(({ label, link, isCalendly }: { label: string, link: string, isCalendly: boolean }, index: number) => (
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
          <div className="lg:col-6 mb-12 lg:mb-0 overflow-hidden scale-[0.8]">
            <div
              className="relative"
              data-aos="fade-up-sm"
              data-aos-delay="400"
            >
              {/* {data.image && data.image.length > 0 && data.image[0].src ? ( */}
              <div className="w-full h-full p-16 lg:p-0 relative">
                
                <div 
                  className="absolute inset-0 rotate-270"
                  style={{
                    backgroundImage: 'url(/images/bg-blur.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'blur(8px)'
                  }}
                ></div>
                
                
                <div className="absolute inset-0 backdrop-blur-md bg-white/10"></div>
                
                
                <figure 
                  style={{ clipPath: 'url(#clip-inverted)' }} 
                  className="relative z-10  transform"
                >
                  <img 
                    src={data.image[0].src}
                    alt={data.image[0].alt || "Hero image"}
                    className="transition-all duration-300 aspect-[3/4] h-[70vh] align-bottom object-cover hover:scale-105 w-full"
                  />
                </figure>
              </div>
              {/* ) : (
                <AnimatedMetrics />
              )} */}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
