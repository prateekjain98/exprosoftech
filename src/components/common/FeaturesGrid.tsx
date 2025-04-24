import React from "react";
import {
  ShoppingCart,
  MapPin,
  Package,
  Book,
  Users,
  ChartLineUp,
  Target,
  ChatCenteredText,
  Lightbulb,
  ChartBar,
  QrCode,
  Receipt,
  CurrencyDollar,
  Recycle,
  Shield,
  Wallet,
  Stack,
  UserFocus,
} from "@phosphor-icons/react";

interface IconMap {
  [key: string]: React.ForwardRefExoticComponent<any>;
}

const iconMap: IconMap = {
  ShoppingCart,
  MapPin,
  Package,
  Book,
  Users,
  ChartLineUp,
  Target,
  ChatCenteredText,
  Lightbulb,
  ChartBar,
  QrCode,
  Receipt,
  CurrencyDollar,
  Recycle,
  Shield,
  Wallet,
  Stack,
  UserFocus,
  ChartLine: ChartLineUp, // Alias for consistency
};

interface Feature {
  title: string;
  description: string;
  icon: string;
  stats?: {
    value: string;
    label: string;
  };
}

interface HeadingProps {
  subtitle: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  badge?: string;
  title?: string;
  description?: string;
  features: Feature[];
  className?: string;
  heading?: HeadingProps;
}

export const FeaturesGrid: React.FC<FeaturesGridProps> = ({
  badge,
  title,
  description,
  features,
  className,
  heading,
}) => {
  // Use heading prop values if available, otherwise fall back to direct props
  const displayBadge = heading?.subtitle || badge || "";
  const displayTitle = heading?.title || title || "";
  const displayDescription = heading?.description || description || "";

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
            {displayBadge}
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={index}
                data-aos="fade-up-sm"
                data-aos-delay={index * 100}
                className="group bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100/50 hover:border-primary/20 flex flex-col h-full"
              >
                <div>
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
                
                {/* Spacer to push stats to bottom */}
                <div className="flex-grow"></div>
                
                {feature.stats && (
                  <div className="pt-6 border-t border-gray-100 mt-6">
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
