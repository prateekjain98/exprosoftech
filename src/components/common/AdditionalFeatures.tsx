import React from "react";
import {
  FiShield,
  FiSettings,
  FiSmartphone,
} from "react-icons/fi";
import { BiRocket } from "react-icons/bi";
import { FiTrendingUp, FiUsers, FiGlobe } from "react-icons/fi";
import { sanityClient } from "sanity:client";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface HeadingProps {
  subtitle: string;
  title: string;
  description: string;
}

interface AdditionalFeaturesSection {
  heading: HeadingProps;
  features: Feature[];
}

interface AdditionalFeaturesProps {
  className?: string;
  heading?: HeadingProps;
  additionalFeatures?: AdditionalFeaturesSection;
}

interface IconMap {
  [key: string]: React.ComponentType<any>;
}

const iconMap: IconMap = {
//   // Support both old and new naming for backwards compatibility
  Rocket: BiRocket,
  RocketIcon: BiRocket,
  ChartLine: FiTrendingUp,
  ChartLineIcon: FiTrendingUp,
  ChartLineUp: FiTrendingUp,
  ChartLineUpIcon: FiTrendingUp,
  Users: FiUsers,
  UsersIcon: FiUsers,
  Globe: FiGlobe,
  GlobeIcon: FiGlobe,
  Shield: FiShield,
  ShieldIcon: FiShield,
  Gear: FiSettings,
  GearIcon: FiSettings
};

const productAdditionalFeaturesQuery = `
  *[_type == "productAdditionalFeatures"] {
    features[] {
      title,
      description,
      icon
    }
}`

// const features: Feature[] = [
//   {
//     title: "Quick Implementation",
//     description:
//       "Get up and running quickly with our streamlined implementation process and expert support team.",
//     icon: Rocket,
//   },
//   {
//     title: "Performance Tracking",
//     description:
//       "Monitor and analyze key performance metrics to optimize your operations and drive better results.",
//     icon: ChartLine,
//   },
//   {
//     title: "Team Collaboration",
//     description:
//       "Enable seamless communication and collaboration between field teams and office staff.",
//     icon: Users,
//   },
//   {
//     title: "Global Accessibility",
//     description:
//       "Access your data and tools from anywhere in the world with our cloud-based solution.",
//     icon: Globe,
//   },
//   {
//     title: "Enterprise Security",
//     description:
//       "Rest easy knowing your data is protected by industry-leading security measures and encryption.",
//     icon: Shield,
//   },
//   {
//     title: "Custom Configuration",
//     description:
//       "Tailor the platform to your specific needs with customizable workflows and settings.",
//     icon: Gear,
//   },
// ];

export const AdditionalFeatures = ({ className, heading, additionalFeatures }: AdditionalFeaturesProps) => {
  // Use additionalFeatures prop if provided, otherwise fetch from Sanity
  let features: Feature[] = [];
  
  if (additionalFeatures?.features) {
    features = additionalFeatures.features;
  } 
  
  // Use heading from props or additionalFeatures, or fallback to defaults
  const displaySubtitle = heading?.subtitle || additionalFeatures?.heading?.subtitle || "Additional Benefits";
  const displayTitle = heading?.title || additionalFeatures?.heading?.title || "Everything You Need to Succeed";
  const displayDescription = heading?.description || additionalFeatures?.heading?.description 
    // "Beyond core features, our platform offers additional capabilities to enhance your operations";

  // if (features.length === 0) return null;

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 xl:px-16 max-w-[1440px] relative">
        <div className="mb-16 text-center">
          <span
            className="inline-block px-4 py-2 mb-4 text-xs font-medium tracking-wide text-primary bg-primary/10 rounded-full"
            data-aos="fade-up-sm"
          >
            {displaySubtitle}
          </span>
          <h2
            className="mb-6 text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#111b57] to-primary bg-clip-text text-transparent"
            data-aos="fade-up-sm"
          >
            {displayTitle}
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up-sm"
          >
            {displayDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature: Feature, index: number) => {
            // Debug logging
            if (feature.icon && !iconMap[feature.icon]) {
              console.warn(`Icon "${feature.icon}" not found in iconMap for feature "${feature.title}". Available icons:`, Object.keys(iconMap));
            }
            const Icon = (feature.icon && iconMap[feature.icon]) ? iconMap[feature.icon] : FiSmartphone;
            return (
              <div
                key={index}
                data-aos="fade-up-sm"
                data-aos-delay={index * 100}
                className="group bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100/50 hover:border-primary/20"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={32} />
                  </div>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdditionalFeatures;
