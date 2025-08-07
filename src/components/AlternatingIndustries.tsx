import { type FC } from "react";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import {
  // Manufacturing
  FaIndustry,
  FaCogs,
  FaTools,
  FaHardHat,
  
  // Healthcare & Life Sciences
  FaHospital,
  FaUserMd,
  FaHeartbeat,
  FaPills,
  FaMicroscope,
  FaFirstAid,
  
  // Real Estate
  FaHome,
  FaBuilding,
  FaKey,
  FaMapMarkedAlt,
  
  // Education
  FaGraduationCap,
  FaSchool,
  FaBook,
  FaChalkboardTeacher,
  
  // Non-profit
  FaHeart,
  FaHandsHelping,
  FaDonate,
  FaUsers,
  
  // E-Commerce
  FaShoppingCart,
  FaStore,
  FaShoppingBag,
  FaCreditCard,
  
  // High Tech
  FaLaptopCode,
  FaMicrochip,
  FaRobot,
  FaDatabase,
  FaCloud,
  FaServer,
  
  // Fallback icon
  FaUserFriends
} from "react-icons/fa";
import type { IconType } from "react-icons/lib";

interface Industry {
  title: string;
  tagline: string;
  description: any[]; // BlockContent array
  icon: string;
  imageUrl: string;
  caseStudy?: {
    slug: string;
    title: string;
  };
}

interface HeadingProps {
  tagline: string;
  title: string;
  description: string | string[];
}

interface AlternatingIndustriesProps {
  features: Industry[];
  heading: HeadingProps;
}

// Icon mapping
const iconMap: Record<string, IconType> = {
  // Manufacturing
  FaIndustry,
  FaCogs,
  FaTools,
  FaHardHat,
  
  // Healthcare & Life Sciences
  FaHospital,
  FaUserMd,
  FaHeartbeat,
  FaPills,
  FaMicroscope,
  FaFirstAid,
  
  // Real Estate
  FaHome,
  FaBuilding,
  FaKey,
  FaMapMarkedAlt,
  
  // Education
  FaGraduationCap,
  FaSchool,
  FaBook,
  FaChalkboardTeacher,
  
  // Non-profit
  FaHeart,
  FaHandsHelping,
  FaDonate,
  FaUsers,
  
  // E-Commerce
  FaShoppingCart,
  FaStore,
  FaShoppingBag,
  FaCreditCard,
  
  // High Tech
  FaLaptopCode,
  FaMicrochip,
  FaRobot,
  FaDatabase,
  FaCloud,
  FaServer,
  
  // Fallback
  FaUserFriends
};

export const AlternatingIndustries: FC<AlternatingIndustriesProps> = ({
  features,
  heading,
}) => {
  // Function to safely render icons
  const renderIcon = (iconName: string) => {
    if (!iconName) {
      return <FaUserFriends size={24} />;
    }

    const IconComponent = iconMap[iconName] || FaUserFriends;
    return <IconComponent size={24} className="text-primary" />;
  };

  return (
    <section className="py-16">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col text-center space-y-3 sm:space-y-4 lg:space-y-5">
            {heading.tagline && (
              <div className="flex justify-center">
                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-xs sm:text-sm font-medium shadow-lg text-blue-600">
                  {heading.tagline}
                </span>
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-gray-900">
              {heading.title}
            </h2>
            {heading.description && (
              <div className="text-sm sm:text-base max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed text-gray-600">
                {Array.isArray(heading.description) ? (
                  heading.description.map((desc, idx) => (
                    <p key={idx}>
                      {desc}
                    </p>
                  ))
                ) : (
                  <p>{heading.description}</p>
                )}
              </div>
            )}
          </div>
        </motion.div>

        {/* Industries Grid */}
        <div className="space-y-24">
          {features?.map((industry, index) => (
            <div
              key={industry.title}
              className={`flex flex-col items-center gap-8 md:flex-row md:items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <motion.div 
                className="w-full md:w-1/2"
                initial={{ 
                  opacity: 0, 
                  x: index % 2 === 0 ? -50 : 50 
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0 
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.2
                }}
              >
                <img
                  src={industry.imageUrl}
                  alt={industry.title}
                  className="h-auto w-full rounded-lg object-cover shadow-lg"
                  style={{ maxHeight: "400px" }}
                />
              </motion.div>

              {/* Content Section */}
              <motion.div 
                className="w-full md:w-1/2"
                initial={{ 
                  opacity: 0, 
                  x: index % 2 === 0 ? 50 : -50 
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0 
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.4
                }}
              >
                <div className="space-y-4 px-4 md:px-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      {renderIcon(industry.icon)}
                    </div>
                    <h3 className="h4">{industry.title}</h3>
                  </div>
                  <p className="text-primary font-medium">{industry.tagline}</p>
                  <div className="text-gray-600">
                    <PortableText value={industry.description} />
                  </div>
                  {industry.caseStudy && (
                    <div className="mt-4">
                      <a
                        href={`/case-studies/${industry.caseStudy.slug}/`}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        View Case Study: {industry.caseStudy.title}
                        <svg
                          className="ml-2 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 