import React, { useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import SectionHeader from "./SectionHeader";

interface CaseStudy {
  category: string;
  title: string;
  description: string;
  logo: string;
  src: string;
}

interface CaseStudiesProps {
  caseStudies: CaseStudy[];
}

// const caseStudies: CaseStudy[] = [
//   {
//     category: "Manufacturing Excellence",
//     title: "Rotex Automation",
//     description:
//       "36% growth in manufacturing efficiency and 60% faster production timelines.",
//     logo: "/images/company-logos/rotex.png",
//     src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=3270&auto=format&fit=crop",
//   },
//   {
//     category: "Product Strategy",
//     title: "Kirloskar Oil Engines",
//     description:
//       "Strategic product innovation driving ₹80 Cr revenue within accelerated market timeline.",
//     logo: "/images/company-logos/kirloskar.png",
//     src: "https://images.unsplash.com/photo-1531265726475-52ad60219627?q=80&w=3270&auto=format&fit=crop",
//   },
//   {
//     category: "Supply Chain Optimization",
//     title: "Michelin",
//     description:
//       "Optimized inventory and elevated service excellence from 91% to industry-leading 99%.",
//     logo: "/images/company-logos/michelin.png",
//     src: "https://images.unsplash.com/photo-1518466088889-82466d82e1ba?q=80&w=3270&auto=format&fit=crop",
//   },
// ];

const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  const [imageError, setImageError] = React.useState<boolean>(false);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("");
  };

  return (
    <motion.div
      className="rounded-2xl h-[28rem] sm:h-[30rem] w-[300px] sm:w-[400px] overflow-hidden relative group"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {/* Background Image with Gradient Overlay */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        className="absolute inset-0 z-10 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${study.src})` }}
      />

      {/* Multiple Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90 z-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-20" />

      {/* Glowing Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-between p-6 sm:p-8">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="mt-8 sm:mt-12 relative"
        >
          {/* Outer Glow */}
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl transform scale-110" />

          {/* Logo Container */}
          <div className="relative w-28 h-28 sm:w-40 sm:h-40">
            {/* Glass Effect Background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 shadow-lg" />

            {/* Company Logo or Initials */}
            <div className="absolute inset-0 m-3 sm:m-4 rounded-full bg-white flex items-center justify-center shadow-inner">
              {imageError ? (
                <span className="text-2xl sm:text-3xl font-bold text-gray-800">
                  {getInitials(study.title)}
                </span>
              ) : (
                <div className="w-[90%] h-[90%] relative flex items-center justify-center p-2 sm:p-3">
                  <img
                    src={study.logo}
                    alt={`${study.title} logo`}
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                    onError={() => setImageError(true)}
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-4 sm:space-y-5"
          >
            {/* Category Tag */}
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold shadow-lg">
              {study.category}
            </span>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-white px-2">
              {study.title}
            </h3>

            {/* Description */}
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-[250px] sm:max-w-sm mx-auto font-medium">
              {study.description}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudies: React.FC<CaseStudiesProps> = ({ caseStudies }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="case-studies" className="py-12 lg:py-24">
      <div className="max-w-[85rem] mx-auto px-4 md:px-8">
        <SectionHeader
          tagline="Case Studies"
          heading={`Success Stories That Drive <span class="text-[#0066FF]">Real Results</span>`}
          subheading="Discover how we've helped organizations achieve remarkable transformations and measurable outcomes."
          className="mb-12 sm:mb-16"
        />

        <div className="relative">
          <div className="overflow-hidden mx-auto" ref={emblaRef}>
            <div className="flex backface-hidden touch-pan-y">
              {caseStudies.map((study: CaseStudy, index: number) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-2 sm:px-3 md:px-4"
                >
                  <div className="flex justify-center">
                    <CaseStudyCard study={study} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Hidden on Mobile, Shown on Tablet and Above */}
          <div className="hidden sm:flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="pointer-events-auto h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 group-hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="pointer-events-auto h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 group-hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>

          {/* Mobile Scroll Indicator */}
          <div className="flex sm:hidden justify-center mt-6 gap-2">
            {caseStudies.map((_: CaseStudy, index: number) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-6 bg-blue-500"
                    : "w-1.5 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
