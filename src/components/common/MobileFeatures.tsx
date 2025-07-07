import React from "react";
import {
  FiSmartphone,
  FiRefreshCw,
  FiShield,
  FiUsers,
  FiLayers,
  FiTrendingUp,
  FiUserCheck,
  FiShoppingCart,
  FiMapPin,
  FiPackage,
  FiBook,
  FiTarget,
  FiMessageCircle,
  FiBarChart,
  FiGrid,
  FiFileText,
  FiDollarSign,
  FiCreditCard,
  FiGlobe,
  FiSettings,
  FiDatabase,
  FiBell,
} from "react-icons/fi";
import { HiLightBulb } from "react-icons/hi";
import { BiRocket } from "react-icons/bi";

interface IconMap {
  [key: string]: React.ComponentType<any>;
}

const iconMap: IconMap = {
//   // Support both old and new naming for backwards compatibility
  DeviceMobile: FiSmartphone,
  DeviceMobileIcon: FiSmartphone,
  RefreshCw: FiRefreshCw,
  RefreshCwIcon: FiRefreshCw,
  Shield: FiShield,
  ShieldIcon: FiShield,
  Users: FiUsers,
  UsersIcon: FiUsers,
  Stack: FiLayers,
  StackIcon: FiLayers,
  ChartLine: FiTrendingUp,
  ChartLineUp: FiTrendingUp,
  ChartLineUpIcon: FiTrendingUp,
  UserFocus: FiUserCheck,
  UserFocusIcon: FiUserCheck,
  ShoppingCart: FiShoppingCart,
  ShoppingCartIcon: FiShoppingCart,
  MapPin: FiMapPin,
  MapPinIcon: FiMapPin,
  Package: FiPackage,
  PackageIcon: FiPackage,
  Book: FiBook,
  BookIcon: FiBook,
  Target: FiTarget,
  TargetIcon: FiTarget,
  ChatCenteredText: FiMessageCircle,
  ChatCenteredTextIcon: FiMessageCircle,
  Lightbulb: HiLightBulb,
  LightbulbIcon: HiLightBulb,
  ChartBar: FiBarChart,
  ChartBarIcon: FiBarChart,
  QrCode: FiGrid,
  QrCodeIcon: FiGrid,
  Receipt: FiFileText,
  ReceiptIcon: FiFileText,
  CurrencyDollar: FiDollarSign,
  CurrencyDollarIcon: FiDollarSign,
  Recycle: FiRefreshCw,
  RecycleIcon: FiRefreshCw,
  Wallet: FiCreditCard,
  WalletIcon: FiCreditCard,
  Rocket: BiRocket,
  RocketIcon: BiRocket,
  Globe: FiGlobe,
  GlobeIcon: FiGlobe,
  Gear: FiSettings,
  GearIcon: FiSettings,
  Database: FiDatabase,
  Bell: FiBell,
  BellIcon: FiBell,
  Layers: FiLayers,
  LayersIcon: FiLayers,
};

interface Feature {
  title: string;
  description: string;
  icon?: string;
}

interface HeadingProps {
  subtitle: string;
  title: string;
  description: string;
}

interface MobileFeaturesProps {
  mobileFeatures: {
    title: string;
    description: string;
    features: {
      title: string;
      description: string;
      icon: string;
    }[];
    image: {
      src: string;
      alt: string;
    };
    metricValues: {
      value: string;
      label: string;
    }[];
  };
  className?: string;
  heading?: HeadingProps;
}

export const MobileFeatures: React.FC<MobileFeaturesProps> = ({
  mobileFeatures,
  className = "",
  heading,
}) => {
  if (!mobileFeatures) {
    return null; // or return a loading state/error message
  }

  const { features, image, metricValues } = mobileFeatures;
  
  // Use heading prop values if available, otherwise fall back to mobileFeatures
  const displayTitle = heading?.title || mobileFeatures.title || "";
  const displayDescription = heading?.description || mobileFeatures.description || "";
  const displaySubtitle = heading?.subtitle || "Why Choose Fieldkonnect";
  
  return (
    <section
      className={`w-full h-auto py-16 px-4 lg:px-10 xl:px-32 bg-white ${className}`}
    >
      <div className="w-full h-fit bg-dark rounded-[2rem] px-6 py-12 relative md:px-24 md:py-16 lg:py-10 lg:px-10 xl:px-16 overflow-hidden">
        {/* SVG Background */}
        <svg
          className="absolute top-0 left-0 w-full h-full z-0"
          width="1302"
          height="344"
          viewBox="0 0 1302 344"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <g filter="url(#filter0_f_49_131)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0.817397C34.1237 52.6033 84.1307 100.247 147.799 141.14C275.002 222.839 452.816 274.5 651 274.5C849.184 274.5 1027 222.839 1154.2 141.14C1217.87 100.247 1267.88 52.6033 1302 0.817383V109.892C1270.09 142.689 1232.86 172.628 1191.49 199.197C1051.59 289.052 860.402 343.5 651 343.5C441.598 343.5 250.412 289.052 110.511 199.197C69.144 172.628 31.9124 142.689 0 109.892L0 0.817397Z"
              fill="url(#paint0_linear_49_131)"
              fillOpacity="0.95"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_49_131"
              x="-78.1"
              y="-77.2826"
              width="1458.2"
              height="498.883"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="39.05"
                result="effect1_foregroundBlur_49_131"
              />
            </filter>
            <linearGradient
              id="paint0_linear_49_131"
              x1="651"
              y1="0.817383"
              x2="651"
              y2="343.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#0059FF" stopOpacity="0.14" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative z-10 flex flex-col gap-12">
          {/* Header Row: Title/Description + Image/Metrics */}
          <div className="flex flex-col lg:flex-row gap-10 items-center w-full">
            {/* Title/Description Section */}
            <div className="flex-1 w-full">
              <h2
                className="mb-8 text-4xl font-bold md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r xl:mt-4 from-white to-primary bg-clip-text text-transparent text-wrap"
                data-aos="fade-up-sm"
              >
                {displayTitle}
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                {displayDescription}
              </p>
            </div>
            {/* Image + Metrics Section */}
            <div className="flex-1 w-full flex flex-col items-center">
              <div className="flex items-center justify-center h-auto">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-contain w-auto h-auto max-h-full max-w-[65%] translate-y-12"
                />
              </div>
              {/* Metrics */}
              {/* Mobile & LG layout (shown up to lg) */}
              <div className="mt-6 bg-white/90 backdrop-blur rounded-xl p-6 shadow-lg max-w-[90%] mx-auto block xl:hidden">
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-6">
                  {metricValues && metricValues.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xl font-bold text-primary">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* XL+ layout (shown at xl and above) */}
              <div className="mt-6 bg-white/90 backdrop-blur rounded-xl p-6 shadow-lg max-w-[90%] mx-auto hidden xl:block">
                <div className="grid grid-cols-3 gap-8">
                  {metricValues && metricValues.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-extrabold text-primary">{metric.value}</div>
                      <div className="text-base leading-none mt-2 text-gray-700">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features List (always below, full width) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12 w-full xl:mt-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
                ? iconMap[feature.icon]
                : FiSmartphone;
              return (
                <div
                  key={index}
                  className="grid grid-cols-6 group"
                  data-aos="fade-up-sm"
                  data-aos-delay={index * 100}
                >
                  <div className="flex-shrink-0 col-span-1 flex items-start">
                    {/* Responsive icon size: 20 for mobile, 26 for lg+ */}
                    <span className="block lg:hidden rounded-xl bg-primary text-white transition-all duration-300 group-hover:bg-primary group-hover:text-white flex items-center justify-center w-10 h-10">
                      <Icon size={20} />
                    </span>
                    <span className="hidden lg:flex rounded-xl bg-primary text-white transition-all duration-300 group-hover:bg-primary group-hover:text-white items-center justify-center w-14 h-14">
                      <Icon size={26} />
                    </span>
                  </div>
                  <div className="col-span-5">
                    <h3 className="mb-3 text-base lg:text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-100 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileFeatures;
