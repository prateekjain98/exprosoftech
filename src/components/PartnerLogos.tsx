import SectionHeader from "./SectionHeader";

interface PartnerLogosProps {
  data?: {
    title?: string;
    subtitle?: string;
    logos?: Array<{
      src: string;
      alt: string;
      name: string;
    }>;
  };
}

export const PartnerLogos = ({ data }: PartnerLogosProps) => {
  const {
    title = "Our Trusted Partners",
    subtitle = "We work with leading brands to deliver exceptional results",
    logos = [
      {
        src: "/images/case-studies/logos/godrej.png",
        alt: "Godrej Logo",
        name: "Godrej"
      },
      {
        src: "/images/case-studies/logos/gajra.png", 
        alt: "Gajra Logo",
        name: "Gajra"
      },
      {
        src: "/images/case-studies/logos/silver.png",
        alt: "Silver Logo", 
        name: "Silver"
      },
      {
        src: "/images/case-studies/logos/godrej.png",
        alt: "Godrej Logo",
        name: "Godrej"
      }
    ]
  } = data || {};

  return (
    <section className="section py-16 bg-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header using SectionHeader component */}
        <div className="mb-12">
          <SectionHeader
            heading={title}
            subheading={subtitle}
            alignment="center"
            className=""
            theme="dark"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="rounded-xl transition-shadow duration-300 flex flex-col items-center justify-center group"
            >
              {/* Logo Container with Fixed Dimensions */}
              <div className="w-40 h-auto flex items-center justify-center  group-hover:scale-105 transition-transform duration-300">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
              {/* Company Name */}
              {logo.name && (
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {logo.name}
                </h3>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 