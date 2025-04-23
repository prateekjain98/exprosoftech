import React from "react";
import {
  Rocket,
  ChartLine,
  Users,
  Globe,
  Shield,
  Gear,
  DeviceMobile,
} from "@phosphor-icons/react";
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

interface AdditionalFeaturesProps {
  className?: string;
  heading?: HeadingProps;
}

interface IconMap {
  [key: string]: React.ForwardRefExoticComponent<any>;
}

const iconMap: IconMap = {
  'Rocket': Rocket,
  'ChartLine': ChartLine,
  'Users': Users,
  'Globe': Globe,
  'Shield': Shield,
  'Gear': Gear
};

const productAdditionalFeaturesQuery = `
  *[_type == "productAdditionalFeatures"] {
    features[] {
      title,
      description,
      icon
    }
  }`

export const AdditionalFeatures = async ({ className, heading }: AdditionalFeaturesProps) => {
  const featuresArray = await sanityClient.fetch(productAdditionalFeaturesQuery)
  if (!featuresArray?.[0]?.features) return null;
  
  const features = featuresArray[0].features;
  
  // Use heading prop values if available, otherwise use defaults
  const displaySubtitle = heading?.subtitle || "Additional Benefits";
  const displayTitle = heading?.title || "Everything You Need to Succeed";
  const displayDescription = heading?.description || 
    "Beyond core features, our platform offers additional capabilities to enhance your operations";

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
            const Icon = feature.icon ? iconMap[feature.icon] : DeviceMobile;
            return (
              <div
                key={index}
                data-aos="fade-up-sm"
                data-aos-delay={index * 100}
                className="group bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100/50 hover:border-primary/20"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={32} weight="duotone" />
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
