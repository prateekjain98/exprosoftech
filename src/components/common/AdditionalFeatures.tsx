import React from "react";
import {
  Rocket,
  ChartLine,
  Users,
  Globe,
  Shield,
  Gear,
} from "@phosphor-icons/react";

interface Feature {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<any>;
}

const features: Feature[] = [
  {
    title: "Quick Implementation",
    description:
      "Get up and running quickly with our streamlined implementation process and expert support team.",
    icon: Rocket,
  },
  {
    title: "Performance Tracking",
    description:
      "Monitor and analyze key performance metrics to optimize your operations and drive better results.",
    icon: ChartLine,
  },
  {
    title: "Team Collaboration",
    description:
      "Enable seamless communication and collaboration between field teams and office staff.",
    icon: Users,
  },
  {
    title: "Global Accessibility",
    description:
      "Access your data and tools from anywhere in the world with our cloud-based solution.",
    icon: Globe,
  },
  {
    title: "Enterprise Security",
    description:
      "Rest easy knowing your data is protected by industry-leading security measures and encryption.",
    icon: Shield,
  },
  {
    title: "Custom Configuration",
    description:
      "Tailor the platform to your specific needs with customizable workflows and settings.",
    icon: Gear,
  },
];

interface AdditionalFeaturesProps {
  className?: string;
}

export const AdditionalFeatures: React.FC<AdditionalFeaturesProps> = ({
  className,
}) => {
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
            Additional Benefits
          </span>
          <h2
            className="mb-6 text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#111b57] to-primary bg-clip-text text-transparent"
            data-aos="fade-up-sm"
          >
            Everything You Need to Succeed
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up-sm"
          >
            Beyond core features, our platform offers additional capabilities to
            enhance your operations
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up-sm"
              data-aos-delay={index * 100}
              className="group bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100/50 hover:border-primary/20"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <feature.icon size={32} weight="duotone" />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalFeatures;
