import { type FC } from "react";
import { motion } from "framer-motion";
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
  description: string;
  icon: string;
  imageUrl: string;
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
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary mb-4">{heading.tagline}</p>
          <h2 className="h2 mb-4">{heading.title}</h2>
          <div className="content">
            {Array.isArray(heading.description) ? (
              heading.description.map((desc, idx) => (
                <p key={idx} className="text-lg text-gray-600">
                  {desc}
                </p>
              ))
            ) : (
              <p className="text-lg text-gray-600">{heading.description}</p>
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
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 