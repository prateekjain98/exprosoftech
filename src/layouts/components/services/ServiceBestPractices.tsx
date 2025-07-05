import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { IconType } from "react-icons/lib";
import {
  FaChartLine,
  FaHandshake,
  FaHeart,
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
  FaGlobe,
  FaChartBar,
  FaHeadset,
  FaMoneyBillWave,
  FaNetworkWired,
  FaIndustry,
  FaShoppingCart,
  FaPhoneAlt,
  FaBoxes,
  FaBuilding,
  FaSearchLocation,
  FaMapMarkedAlt,
  FaStore,
  FaRecycle,
  FaCalendarAlt,
  FaFilter,
  FaChartPie,
  FaChartArea,
  FaTachometerAlt,
  FaBolt,
  FaRocket,
  FaDollarSign,
  FaCoins,
  FaPercent,
  FaPiggyBank,
  FaArrowUp,
  FaTrophy,
  FaMedal,
  FaStar,
  FaClock,
  FaHourglass,
  FaUser,
  FaCogs,
  FaMicrochip,
  FaServer,
  FaDatabase,
  FaCloud,
  FaCode,
  FaGitAlt,
  FaBoxOpen,
  FaFlask,
  FaMagic,
  FaCommentAlt,
  FaLock
} from "react-icons/fa";
import SectionHeader from "../../../components/SectionHeader";

interface Benefit {
  title: string;
  description: string;
  icon: any; // Changed from IconType to any
}

interface HeadingProps {
  tagline: string;
  title: string;
  description: string;
}

interface Benefits {
  title: string;
  description: string;
  icon: string;
}

interface Props {
  className?: string;
  heading: HeadingProps;
  benefits: Benefits[];
}

// Icon mapping
const iconMap: Record<string, IconType> = {
  FaChartLine,
  FaHandshake,
  FaHeart,
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
  FaGlobe,
  FaChartBar,
  FaHeadset,
  FaMoneyBillWave,
  FaNetworkWired,
  FaIndustry,
  FaShoppingCart,
  FaPhoneAlt,
  FaBoxes,
  FaBuilding,
  FaSearchLocation,
  FaMapMarkedAlt,
  FaStore,
  FaRecycle,
  FaCalendarAlt,
  FaFilter,
  FaChartPie,
  FaChartArea,
  FaTachometerAlt,
  FaBolt,
  FaRocket,
  FaDollarSign,
  FaCoins,
  FaPercent,
  FaPiggyBank,
  FaArrowUp,
  FaTrophy,
  FaMedal,
  FaStar,
  FaClock,
  FaHourglass,
  FaUser,
  FaCogs,
  FaMicrochip,
  FaServer,
  FaDatabase,
  FaCloud,
  FaCode,
  FaGitAlt,
  FaBoxOpen,
  FaFlask,
  FaMagic,
  FaCommentAlt,
  FaLock
};

export const ServicesBestPractices: React.FC<Props> = ({ 
  className = "", 
  heading,
  benefits = []
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    if (!scrollRef.current) return;
    
    const scrollWidth = scrollRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = scrollWidth - viewportWidth+200;

    const handleScroll = () => {
      if (!scrollRef.current || !containerRef.current) return;
      const progress = scrollYProgress.get();
      scrollRef.current.scrollLeft = progress * scrollDistance;
    };

    scrollYProgress.on("change", handleScroll);
    return () => {
      scrollYProgress.clearListeners();
    };
  }, [scrollYProgress]);

  return (
    <section 
      ref={containerRef}
      className={`section min-h-[200vh] ${className} bg-dark`}
    >
      <div className="sticky top-0 overflow-hidden ">
        <div className="max-w-[8
        5rem] mx-auto px-3 py-20 relative">
          <div className="row">
            <div className="mx-auto mb-12">
              <SectionHeader
                tagline={heading?.tagline || ''}
                heading={heading?.title || ''}
                subheading={heading?.description || ''}
                alignment="center"
                theme="dark"
              />
            </div>
            <div className="col-12 ">
              <div 
                ref={scrollRef}
                className="flex gap-6 overflow-x-hidden w-full overflow-y-hidden"
                style={{
                  paddingLeft: "calc((100vw - 1280px) / 2)",
                  paddingRight: "calc((100vw - 1280px) / 2)"
                }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-12 lg:w-24 bg-gradient-to-r from-dark to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-12 lg:w-24 bg-gradient-to-l from-dark to-transparent z-10"></div>
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0 w-[300px] min-h-[350px] rounded-2xl bg-white text-white p-8 relative shadow-lg flex flex-col z-0"
                  >
                    <div className="h-fit flex items-center">
                      <span className="text-[72px] leading-none text-blue-950">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex flex-col flex-1 justify-start mt-6">
                      {benefit.title && (
                        <h3
                          className="text-xl font-medium text-blue-950 min-h-[50px] mb-6"
                          dangerouslySetInnerHTML={{ __html: benefit.title }}
                        />
                      )}
                      {benefit.description && (
                        <p
                          className="text-sm text-blue-950 line-clamp-4"
                          dangerouslySetInnerHTML={{ __html: benefit.description }}
                        />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
