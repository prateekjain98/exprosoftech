import React from "react";
import {
  WifiHigh,
  Book,
  Calendar,
  Receipt,
  Users,
  ChartLine,
  ArrowRight,
} from "@phosphor-icons/react";
import { FaArrowRight } from "react-icons/fa";

interface AdditionalFeature {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<any>;
  stats?: {
    value: string;
    label: string;
  };
}

const additionalFeatures: AdditionalFeature[] = [
  {
    title: "Offline Capabilities",
    description:
      "Continue working seamlessly even without internet connectivity. All data syncs automatically when back online.",
    icon: WifiHigh,
    stats: {
      value: "100%",
      label: "Offline Access",
    },
  },
  {
    title: "Digital Catalog",
    description:
      "Access your complete product catalog with real-time pricing and inventory information.",
    icon: Book,
    stats: {
      value: "10K+",
      label: "Products Managed",
    },
  },
  {
    title: "Visit Planning",
    description:
      "Plan and schedule customer visits efficiently with smart scheduling tools.",
    icon: Calendar,
    stats: {
      value: "45%",
      label: "Time Saved",
    },
  },
  {
    title: "Expense Management",
    description:
      "Track and manage field expenses with digital receipts and automated reporting.",
    icon: Receipt,
    stats: {
      value: "50%",
      label: "Faster Processing",
    },
  },
  {
    title: "Customer Management",
    description:
      "Maintain detailed customer profiles and interaction history for better relationship management.",
    icon: Users,
    stats: {
      value: "360°",
      label: "Customer View",
    },
  },
  {
    title: "Reports & Analytics",
    description:
      "Generate comprehensive reports and insights to make data-driven decisions.",
    icon: ChartLine,
    stats: {
      value: "24/7",
      label: "Real-time Insights",
    },
  },
];

interface AdditionalFeaturesSFAProps {
  className?: string;
}

export const AdditionalFeaturesSFA: React.FC<AdditionalFeaturesSFAProps> = ({
  className,
}) => {
  return (
    <section className="py-16 lg:py-24 relative">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 xl:px-16 max-w-[1440px] relative">
        <div className="mb-12 text-center">
          <span
            className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wide text-primary bg-primary/10 rounded-full"
            data-aos="fade-up-sm"
          >
            Advanced Features
          </span>
          <h2
            className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-[#111b57] to-primary bg-clip-text text-transparent"
            data-aos="fade-up-sm"
          >
            Advanced Capabilities for Enhanced Performance
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            data-aos="fade-up-sm"
          >
            Discover more powerful tools to supercharge your field sales team
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {additionalFeatures.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up-sm"
              data-aos-delay={index * 100}
              className="group bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-primary/20"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <feature.icon size={24} weight="duotone" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mb-4 text-gray-600">{feature.description}</p>
              {feature.stats && (
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#111b57] to-primary bg-clip-text text-transparent">
                      {feature.stats.value}
                    </span>
                    <span className="text-sm text-gray-600">
                      {feature.stats.label}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <a
            href="/contact"
            className="btn btn-primary flex items-center gap-2"
            data-aos="fade-up-sm"
          >
            Schedule a Demo
            <FaArrowRight className="text-lg" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default AdditionalFeaturesSFA;
