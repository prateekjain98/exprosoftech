import { motion } from "framer-motion";
import type { IconType } from "react-icons/lib";
import {
  FaChartLine,
  FaHandshake,
  FaHeart,
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import SectionHeader from "@/components/SectionHeader";

interface BenefitProps {
  title: string;
  description: string;
  icon: IconType;
  delay: number;
}

const Benefit: React.FC<BenefitProps> = ({
  title,
  description,
  icon: Icon,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative flex flex-col items-center text-center"
    >
      <div className="relative mb-6">
        <div className="absolute -inset-3 rotate-45 transform rounded-[20%] bg-gradient-to-br from-blue-50 to-purple-50 transition-all duration-300 group-hover:rotate-[135deg]" />
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute inset-0 rotate-45 transform rounded-[20%] bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
          <Icon
            size={32}
            className="relative z-10 text-blue-600 transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      <div className="relative">
        <h3 className="mb-3 text-xl font-medium text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
          {title}
        </h3>
        <p className="text-gray-500">{description}</p>
      </div>

      <div className="absolute -right-4 bottom-0 hidden h-16 w-16 opacity-10 lg:block">
        <div
          className="absolute h-1.5 w-1.5 rounded-full bg-blue-600"
          style={{ top: "0%", left: "0%" }}
        />
        <div
          className="absolute h-1.5 w-1.5 rounded-full bg-blue-600"
          style={{ top: "20%", left: "20%" }}
        />
        <div
          className="absolute h-1.5 w-1.5 rounded-full bg-blue-600"
          style={{ top: "40%", left: "40%" }}
        />
        <div
          className="absolute h-1.5 w-1.5 rounded-full bg-purple-600"
          style={{ top: "60%", left: "60%" }}
        />
        <div
          className="absolute h-1.5 w-1.5 rounded-full bg-purple-600"
          style={{ top: "80%", left: "80%" }}
        />
        <div
          className="absolute h-1.5 w-1.5 rounded-full bg-purple-600"
          style={{ top: "100%", left: "100%" }}
        />
      </div>
    </motion.div>
  );
};

const benefits = [
  {
    title: "Increased Customer Retention",
    description:
      "Build lasting relationships that keep customers coming back for more",
    icon: FaHeart,
  },
  {
    title: "Higher Customer Lifetime Value",
    description: "Drive increased spending and engagement from loyal customers",
    icon: FaChartLine,
  },
  {
    title: "Better Customer Insights",
    description: "Gain valuable data about customer preferences and behaviors",
    icon: FaLightbulb,
  },
  {
    title: "Competitive Advantage",
    description: "Stand out in your market with a superior loyalty program",
    icon: FaHandshake,
  },
  {
    title: "Brand Advocacy",
    description: "Turn satisfied customers into passionate brand ambassadors",
    icon: FaUsers,
  },
  {
    title: "Reduced Marketing Costs",
    description: "Lower acquisition costs through improved customer retention",
    icon: FaShieldAlt,
  },
];

interface Props {
  className?: string;
}

export const LoyaltyBenefits: React.FC<Props> = ({ className }) => {
  return (
    <section
      className={`bg-gradient-to-b from-gray-50 to-white py-20 dark:from-darkmode-body dark:to-darkmode-theme-light ${className}`}
    >
      <div className="container">
        <SectionHeader
          tagline="Benefits"
          heading="Transform Your Customer Relationships"
          subheading="Discover how our loyalty program management services can transform your customer relationships and drive sustainable business growth."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Benefit key={benefit.title} {...benefit} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};
