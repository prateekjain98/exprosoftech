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
  return (
    <section className={`section ${className} bg-dark`}>
      <div className="max-w-[85rem] mx-auto px-3 relative">
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
          <div className="col-12 px-0">
            <div className="relative group">
              {/* Gradient overlays */}
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-12 lg:w-24 bg-gradient-to-r from-dark to-transparent z-10"></div>
              <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-12 lg:w-24 bg-gradient-to-l from-dark to-transparent z-10"></div>
              
              {/* Marquee animation */}
              <div className="overflow-hidden">
                <div className="flex animate-marquee gap-6 w-max lg:pt-12">
                  {/* Triple the benefits for seamless loop */}
                  {[...benefits, ...benefits, ...benefits].map((benefit, index) => (
                    <motion.div
                      key={`benefit-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (index % benefits.length) * 0.1 }}
                      viewport={{ once: true }}
                      className="flex-shrink-0 w-[300px] min-h-[250px] rounded-2xl bg-white text-white p-8 relative shadow-lg flex flex-col z-0"
                    >
                      <div className="h-fit flex items-center">
                        <span className="text-[72px] leading-none text-blue-950">
                          {(index % benefits.length) + 1}
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
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.3333%); }
        }
        
        .animate-marquee {
          animation-name: marquee;
          animation-duration: 30s; 
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 20s; 
          }
        }
        
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
