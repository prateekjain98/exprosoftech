import React from "react";
import {
  ShoppingCartIcon,
  MapPinIcon,
  PackageIcon,
  BookIcon,
  UsersIcon,
  ChartLineUpIcon,
  TargetIcon,
  ChatCenteredTextIcon,
  LightbulbIcon,
  ChartBarIcon,
} from "@phosphor-icons/react";
import { FaArrowRight } from "react-icons/fa";

interface Feature {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<any>;
  stats?: {
    value: string;
    label: string;
  };
}

const features: Feature[] = [
  {
    title: "Real-Time Order Management",
    description:
      "Equip your sales reps with the ability to manage orders in real-time, directly from their mobile devices. Log orders instantly during customer visits, enabling a quick and seamless order placement process that reduces processing time and minimizes errors.",
    icon: ShoppingCartIcon,
    stats: {
      value: "60%",
      label: "Faster Order Processing",
    },
  },
  {
    title: "Geo-Tracking & Attendance",
    description:
      "GPS-enabled tracking allows sales managers to monitor field activities and attendance in real-time. Sales reps can check in and out of locations, ensuring their activity is documented accurately and enabling better territory management.",
    icon: MapPinIcon,
    stats: {
      value: "95%",
      label: "Field Force Visibility",
    },
  },
  {
    title: "Route Optimization",
    description:
      "Our route optimization functionality helps sales reps plan their daily routes efficiently by analyzing customer locations and traffic patterns. Managers can assign daily schedules to prioritize high-value clients.",
    icon: LightbulbIcon,
    stats: {
      value: "40%",
      label: "Increased Visits",
    },
  },
  {
    title: "Inventory Management",
    description:
      "Real-time access to inventory levels, allowing sales reps to check product availability on the go. Stock levels are synced with backend systems, helping avoid out-of-stock situations and enabling alternative product suggestions.",
    icon: PackageIcon,
    stats: {
      value: "40%",
      label: "Reduced Stockouts",
    },
  },
  {
    title: "Digital Product Catalog",
    description:
      "Access a digital product catalog with detailed descriptions, images, and pricing information. Showcase the complete product range directly to customers, enabling instant product comparisons and recommendations.",
    icon: BookIcon,
    stats: {
      value: "2x",
      label: "Higher Order Values",
    },
  },
  {
    title: "Customer Insights",
    description:
      "Comprehensive view of customer profiles, including purchase history, preferences, and visit notes. Access these insights before each visit to ensure personalized and informed interactions.",
    icon: UsersIcon,
    stats: {
      value: "85%",
      label: "Customer Retention",
    },
  },
  {
    title: "Lead Management",
    description:
      "Track leads and monitor their progress through the sales pipeline. The system flags high-priority leads and provides reminders for follow-ups, ensuring consistent engagement.",
    icon: TargetIcon,
    stats: {
      value: "90%",
      label: "Lead Follow-up Rate",
    },
  },
  {
    title: "Performance Analytics",
    description:
      "Generate automated reports on sales metrics, territory performance, and individual achievements. Track KPIs, analyze sales trends, and make data-driven decisions with accurate, up-to-date information.",
    icon: ChartBarIcon,
    stats: {
      value: "35%",
      label: "Productivity Boost",
    },
  },
];

interface FeaturesSFAProps {
  className?: string;
}

export const FeaturesSFA: React.FC<FeaturesSFAProps> = ({ className }) => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 xl:px-16 max-w-[1440px] relative">
        <div className="mb-16 text-center">
          <span
            className="inline-block px-4 py-2 mb-4 text-xs font-medium tracking-wide text-primary bg-primary/10 rounded-full"
            data-aos="fade-up-sm"
          >
            Key Features
          </span>
          <h2
            className="mb-6 text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#111b57] to-primary bg-clip-text text-transparent"
            data-aos="fade-up-sm"
          >
            Powerful Features for Field Sales Success
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up-sm"
          >
            Fieldkonnect is packed with advanced features that streamline
            operations, boost sales efficiency, and optimize performance
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
              <p className="mb-6 text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              {feature.stats && (
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold bg-gradient-to-r from-[#111b57] to-primary bg-clip-text text-transparent">
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
            Explore All Features
            <FaArrowRight className="text-lg" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturesSFA;
