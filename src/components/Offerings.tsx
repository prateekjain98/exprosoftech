import React from "react";
import SectionHeader from "./SectionHeader";
import { sanityClient } from "sanity:client";
import {
  FiUsers,
  FiSettings,
  FiBox,
  FiTrendingUp,
  FiTarget,
  FiShield,
  FiZap,
  FiCpu,
  FiGlobe,
  FiLayers,
  FiDatabase,
  FiCloud,
  FiCode,
  FiBriefcase,
  FiBarChart2,
} from "react-icons/fi";
import { HiLightBulb, HiOutlineCog } from "react-icons/hi";
import { BiRocket } from "react-icons/bi";
import { GiBrain } from "react-icons/gi";

// Icon mapping for offerings
const iconMap: { [key: string]: React.ComponentType<any> } = {
  // Consulting related icons
  FiLightbulb: HiLightBulb, 
  Users: FiUsers,
  Lightbulb: HiLightBulb,
  TrendingUp: FiTrendingUp,
  Target: FiTarget,
  Shield: FiShield,
  Brain: GiBrain,
  
  // Services related icons
  Settings: FiSettings,
  Cpu: FiCpu,
  Globe: FiGlobe,
  Layers: FiLayers,
  Gear: HiOutlineCog,
  Database: FiDatabase,
  Cloud: FiCloud,
  Code: FiCode,
  
  // Products related icons
  Box: FiBox,
  Zap: FiZap,
  Rocket: BiRocket,
  Lightning: FiZap,
  Briefcase: FiBriefcase,
  
  // Chart related icons
  ChartLineUp: FiTrendingUp,
  ChartBar: FiBarChart2,
  
  // Default icons for each category
  consulting: FiUsers,
  services: FiSettings,
  products: FiBox,
};

// interface OfferingsItem {
//   icon: string;
//   title: string;
//   description: string;
// }

// interface OfferingsData {
//   title: string;
//   subtitle: string;
//   description: string;
//   list: OfferingsItem[];
// }

// interface Heading {
//   _id: string;
//   subtitle?: string;  // Optional since it's not required in schema
//   title: string;
//   description: string;
// }

// interface Card {
//   _id: string;
//   title: string;
//   description: string;
//   imageUrl: string;
// }

interface OfferingsProps {
  data: {
    heading: {
      title: string;
      subtitle: string;
      description: string;
    };
    offerings: Array<{
      title: string;
      description: string;
      iconName: string;  // Changed from icon to iconName
    }>;
  };
}

interface OfferingCard {
  title: string;
  description: string;
  iconName: string;  // Changed from icon to iconName
}

// const offeringsData: OfferingsData = {
//   subtitle: "Comprehensive Offerings",
//   title: "Leverage Our Expertise",
//   description:
//     "Partner with Exprosoftech - From strategy to execution, we empower businesses with expert consulting, hands-on service support, and cutting-edge technology. Whether it's sales acceleration, operations efficiency, supply chain transformation, or digital innovation, our tailored solutions drive sustainable growth and competitive advantage.",
//   list: [
//     {
//       icon: "/images/OfferingsOne.png",
//       title: "Consulting",
//       description: "Expert Guidance, Transformative Results",
//     },
//     {
//       icon: "/images/OfferingsThree.png",
//       title: "Services",
//       description: "Tailored solutions and Turnkey implementation",
//     },
//     {
//       icon: "/images/OfferingsTwo.png",
//       title: "Products",
//       description: "Innovative Tools to Drive Excellence",
//     },
//   ],
// };

// const CARDS_QUERY = `*[_type == "card"]{
//   _id,
//   title,
//   description,
//   "imageUrl": image.asset->url
// }`;

// const HEADINGS_QUERY = `*[_type == "heading"] | order(_createdAt asc) {
//   _id,
//   subtitle,
//   title,
//   description
// }`;

export const Offerings: React.FC<OfferingsProps> = ({ data }) => {

  // Fetch cards with revalidation
  // const cards = await sanityClient.fetch<Card[]>(CARDS_QUERY);

  // const headings = await sanityClient.fetch<Heading[]>(HEADINGS_QUERY, {});

  // const heading = headings[0];

  // Function to render icons based on icon name
  const renderIcon = (iconName: string) => {
    // Try to find the icon in the iconMap
    const IconComponent = iconMap[iconName];
    
    if (IconComponent) {
      return <IconComponent size={30} className="text-blue-900" />;
    }
    
    // Default fallback icon
    return <FiTarget size={48} className="text-primary" />;
  };

  return (
    <section className="section relative overflow-hidden rounded-3xl bg-gray-100">
      {/* Background gradient circles */}
      <div className="absolute inset-0 pointer-events-none">
        
        
        {/* Medium gradient circle - top left */}
        {/* <div className="absolute -top-40 -left-28 w-96 h-96 bg-gradient-to-br from-blue-500/30 via-blue-400 to-transparent rounded-full blur-3xl"></div> */}
        
        {/* Medium gradient circle - top right */}
        {/* <div className="absolute -top-20 -right-32 w-80 h-80 bg-gradient-to-bl from-blue-500/30 via-blue-400 to-transparent rounded-full blur-2xl"></div> */}
        
        {/* Large gradient circle - bottom center */}
        <div className="absolute -top-[40rem] lg:-top-[32rem] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-t from-blue-500 via-blue-400 to-transparent rounded-full blur-3xl"></div>
        
        
        
      </div>
      
      <div className="max-w-[75rem] mx-auto px-3 relative z-10 ">
        <div className="row">
          <div className="mx-auto ">
            <SectionHeader
              tagline={data.heading?.subtitle || ''}
              heading={data.heading?.title || ''}
              subheading={data.heading?.description || ''}
              alignment="center"
            />
          </div>
          <div className="col-12 pt-20 mt-10 ">
              <div className="flex flex-wrap justify-center gap-4">
                {data.offerings.map((card: OfferingCard, index: number) => (
                                  <div
                    key={index}
                    className="flex-shrink-0 w-80 border-2 rounded-3xl bg-white"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="min-h-full p-6 ">
                    <div className="mb-6 flex justify-start">
                      <div 
                        className="flex h-14 w-14 items-center justify-center rounded-full backdrop-blur-md border border-blue-700/70"
                        style={{
                          background: 'linear-gradient(to bottom, rgba(59,130,246,0.5), rgba(37,99,235,0.4), rgba(96,165,250,0.5))'
                        }}
                      >
                        {renderIcon(card.iconName)}
                      </div>
                    </div>
                    <div className="text-left">
                      {card.title && (
                        <h3
                          className="h5 mb-3 md:text-2xl font-medium text-dark tracking-wide"
                          dangerouslySetInnerHTML={{ __html: card.title }}
                        />
                      )}
                      {card.description && (
                        <p
                          className="text-text"
                          dangerouslySetInnerHTML={{ __html: card.description }}
                        />
                      )}
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

export default Offerings;
